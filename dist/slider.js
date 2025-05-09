import { useElement } from "./core/element";
const name = 'm-slider';
const style = `:host {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 300px;
    height: 40px;
    background-color: var(--m-slider-backgroundColor,${"#EFEFEF"});
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
    color: var(--m-slider-hiddenlabel-color,${"gray"});
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
    color: var(--m-slider-label-color,${"rgb(255,255,255)"});
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
    background-color: var(--m-slider-slider-backgroundColor,${"#2EA2F9"});
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
}`;
const template = `
                <div class="slider">
                        <p class="value"></p>
                        <div class="slider-bar"></div>
                </div>
                <p class="hidden-value"></p>`;
const props = {
    disabled: false,
    labeled: false,
    min: 0,
    max: 100,
    value: 0,
    step: 1
};
const displayValue = (displayValueEles, min, max, value, labeled) => {
    if (!labeled)
        return;
    const centerValue = (max - min) * 0.5 + min;
    displayValueEles.hiddened.textContent = `${value}/${max}`;
    displayValueEles.normal.textContent = `${value}/${max}`;
    if (value < centerValue) {
        displayValueEles.normal.style.display = "none";
        displayValueEles.hiddened.style.display = "initial";
    }
    else {
        displayValueEles.hiddened.style.display = "none";
        displayValueEles.normal.style.display = "initial";
    }
};
export class Slider extends useElement({
    name, style, template, props, syncProps: [
        "disabled",
        "labeled",
        "value",
        "min",
        "max",
        "step"
    ], dispatch: {
        propChanged(key, value) {
            if (key === "value") {
                let v = Number(value);
                if (v < this.min)
                    v = this.min;
                if (v > this.max)
                    v = this.max;
                const rst = (v - this.min) / (this.max - this.min) * 100;
                const ele = this.shadowRoot?.querySelector(".slider");
                ele.style.width = `${rst}%`;
                const displayValueEles = {
                    hiddened: this.shadowRoot?.querySelector(".hidden-value"),
                    normal: this.shadowRoot?.querySelector(".value"),
                };
                displayValue(displayValueEles, this.min, this.max, v, this.labeled);
                if (this.value !== v)
                    this.value = v;
            }
        },
        connected() {
            const displayValueEles = {
                hiddened: this.shadowRoot?.querySelector(".hidden-value"),
                normal: this.shadowRoot?.querySelector(".value"),
            };
            displayValue(displayValueEles, this.min, this.max, this.value, this.labeled);
        }
    }, setup() {
        const touchslider = this.shadowRoot?.querySelector(".slider");
        let mousedownLocationX;
        let is_mousedown = false;
        const value = this.value !== null ? Number(this.value) : this.min;
        touchslider.style.width = `${(value - this.min) / (this.max - this.min) * 100}%`;
        const displayValueEles = {
            hiddened: this.shadowRoot?.querySelector(".hidden-value"),
            normal: this.shadowRoot?.querySelector(".value"),
        };
        let beforeWidth;
        this?.addEventListener("mousedown", (e) => {
            mousedownLocationX = e.clientX;
            is_mousedown = true;
            beforeWidth = parseInt(getComputedStyle(touchslider).width) / this.getBoundingClientRect().width * 100;
        });
        document?.addEventListener("mouseup", () => is_mousedown = false);
        document?.addEventListener("mousemove", (e) => {
            if (!is_mousedown)
                return;
            const { width, left } = this.getBoundingClientRect();
            const realmouse = mousedownLocationX - left;
            const addedmouse = e.clientX - left;
            const added = (addedmouse - realmouse) / width * 100;
            let result = added + beforeWidth;
            if (result >= 100)
                result = 100;
            else if (result <= 0)
                result = 0;
            touchslider.style.width = `${result}%`;
            const _value = Number((Math.round((this.max - this.min) * result / 100 / this.step) * this.step + this.min).toFixed(2));
            this.value = _value > this.max ? this.max : _value;
            displayValue(displayValueEles, this.min, this.max, this.value, this.labeled);
            this.dispatchEvent(new Event("input"));
        });
        this?.addEventListener("touchstart", (e) => {
            mousedownLocationX = e.touches[0].clientX;
            is_mousedown = true;
            beforeWidth = parseInt(getComputedStyle(touchslider).width) / this.getBoundingClientRect().width * 100;
        });
        document?.addEventListener("touchend", () => is_mousedown = false);
        document?.addEventListener("touchmove", (e) => {
            if (!is_mousedown)
                return;
            const { width, left } = this.getBoundingClientRect();
            const realmouse = mousedownLocationX - left;
            const addedmouse = e.touches[0].clientX - left;
            const added = (addedmouse - realmouse) / width * 100;
            let result = added + beforeWidth;
            if (result >= 100)
                result = 100;
            else if (result <= 0)
                result = 0;
            touchslider.style.width = `${result}%`;
            const _value = Number((Math.round((this.max - this.min) * result / 100 / this.step) * this.step + this.min).toFixed(2));
            this.value = _value > this.max ? this.max : _value;
            displayValue(displayValueEles, this.min, this.max, this.value, this.labeled);
            this.dispatchEvent(new Event("input"));
        });
        return {};
    }
}) {
}
Slider.defineElement();
import 'vue';
