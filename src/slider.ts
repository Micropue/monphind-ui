import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-slider'
const style = `:host {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 300px;
    height: 40px;
    background-color: var(--m-slider-backgroundColor,${Theme.slider_backgroundColor});
    border-radius: 12px;
    position: relative;
    overflow:hidden;
    cursor:pointer;
}
:host p.hidden-value {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: -moz-fit-content;
    width: fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-size: 13px;
    color: var(--m-slider-hiddenlabel-color,${Theme.slider_hiddenlabel_color});
    pointer-events: none;
    display: none;
}
:host p.value {
    position: absolute;
    width: -moz-fit-content;
    width: fit-content;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    height: -moz-fit-content;
    height: fit-content;
    font-size: 13px;
    color: var(--m-slider-label-color,${Theme.slider_label_color});
    margin: auto;
    pointer-events: none;
    display: none;
}
:host[labeled=true] p.value, :host[labeled=true] p.hidden-value {
    display: initial;
}
:host .slider {
    width: 0%;
    height: 100%;
    border-radius: 12px;
    background-color: var(--m-slider-slider-backgroundColor,${Theme.slider_backgroundColor});
    position: relative;
}
:host .slider .slider-bar {
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 2px;
    border-radius: 100px;
    height: 15px;
    background-color: white;
}
:host([disabled=true]) {
    cursor: default;
    pointer-events:none;
}
:host([disabled=true]) .slider-bar {
    display: none;
}`
const template = `
                <div class="slider">
                        <p class="value"></p>
                        <div class="slider-bar"></div>
                </div>
                <p class="hidden-value"></p>`

const props = {
    disabled: false,
    labeled: false,
    min: 0,
    max: 100,
    value: 0,
    step: 1
}
const displayValue = (displayValueEles: any, min: number, max: number, value: number, labeled: boolean) => {
    if (!labeled) return
    const centerValue = (max - min) * 0.5
    displayValueEles.hiddened.textContent = `${value}/${max}`
    displayValueEles.normal.textContent = `${value}/${max}`
    if (value < centerValue) {
        displayValueEles.normal.style.display = "none"
        displayValueEles.hiddened.style.display = "initial"
    } else {
        displayValueEles.hiddened.style.display = "none"
        displayValueEles.normal.style.display = "initial"
    }
}
type Props = typeof props
export class Slider extends useElement<{}, Props>({
    name, style, template, props, syncProps: [
        "disabled",
        "labeled",
        "value",
    ], dispatch: {
        propChanged(key, value) {
            if (key === "value") {
                const min = Number(this.getAttribute("min") ?? "") || 0
                const max = Number(this.getAttribute("max") ?? "") || 100
                const rst = Number(value) / (max - min) * 100
                if (rst > 100 || rst < 0) {
                    throw new RangeError(`You may be above or below the maximum (max) or minimum (min) values. The value is: ${value}`)
                }
                const ele = this.shadowRoot?.querySelector(".slider") as HTMLElement
                ele.style.width = `${rst}%`
                const displayValueEles = {
                    hiddened: this.shadowRoot?.querySelector(".hidden-value") as HTMLElement,
                    normal: this.shadowRoot?.querySelector(".value") as HTMLElement,
                }
                displayValue(displayValueEles, min, max, Number(value), this.labeled)
            }
        }
    }, setup() {
        const touchslider = this.shadowRoot?.querySelector(".slider") as HTMLElement
        let mousedownLocationX: number
        let is_mousedown = false
        const min = Number(this.getAttribute("min") ?? "") || 0
        const max = Number(this.getAttribute("max") ?? "") || 100
        const step = Number(this.getAttribute("step") ?? "") || 1
        const labeled = (this.getAttribute("labeled") == "true" ? true : false) || false
        const value = Number(this.getAttribute("value") ?? "") || 0
        touchslider.style.width = `${value / (max - min)}%`
        const displayValueEles = {
            hiddened: this.shadowRoot?.querySelector(".hidden-value") as HTMLElement,
            normal: this.shadowRoot?.querySelector(".value") as HTMLElement,
        }
        displayValue(displayValueEles, min, max, value, labeled)
        let beforeWidth: number
        this?.addEventListener("mousedown", (e: any) => {
            mousedownLocationX = e.clientX
            is_mousedown = true
            beforeWidth = parseInt(getComputedStyle(touchslider).width) / this.getBoundingClientRect().width * 100
        })
        document?.addEventListener("mouseup", () => is_mousedown = false)
        document?.addEventListener("mousemove", (e) => {
            if (!is_mousedown) return
            const { width, left } = this.getBoundingClientRect()
            const realmouse = mousedownLocationX - left
            const addedmouse = e.clientX - left
            const added = (addedmouse - realmouse) / width * 100
            let result = added + beforeWidth
            if (result >= 100)
                result = 100
            else if (result <= 0) result = 0
            touchslider.style.width = `${result}%`
            this.value = Number((Math.round((max / step) * result / 100) * step + min).toFixed(2))
            displayValue(displayValueEles,min,max,this.value, this.labeled)
            this.dispatchEvent(new Event("input"))
        })
        this?.addEventListener("touchstart", (e) => {
            mousedownLocationX = e.touches[0].clientX
            is_mousedown = true
            beforeWidth = parseInt(getComputedStyle(touchslider).width) / this.getBoundingClientRect().width * 100
        })
        document?.addEventListener("touchend", () => is_mousedown = false)
        document?.addEventListener("touchmove", (e) => {
            TouchEvent
            if (!is_mousedown) return
            const { width, left } = this.getBoundingClientRect()
            const realmouse = mousedownLocationX - left
            const addedmouse = e.touches[0].clientX - left
            const added = (addedmouse - realmouse) / width * 100
            let result = added + beforeWidth
            if (result >= 100)
                result = 100
            else if (result <= 0) result = 0
            touchslider.style.width = `${result}%`
            this.value = Number((Math.round((max / step) * result / 100) * step + min).toFixed(2))
            displayValue(displayValueEles,min,max,this.value, this.labeled)
            this.dispatchEvent(new Event("input"))
        })
        return {}
    }
}) { }
Slider.defineElement()


//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}