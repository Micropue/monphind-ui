//分组：name
import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-radio'

const template = `
<div class="radio">
<div class="checked"></div>
</div>
<slot></slot>`
const style = `:host {
display: inline-flex;
align-items: center;
}
:host(:hover) {
cursor: pointer;
filter: brightness(90%);
}
:host slot {
transition: color 0.3s;
}
:host .radio {
width: 18px;
height: 18px;
border: 2px solid var(--m-radio-borderColor,${Theme.radio_borderColor});
margin-right: 10px;
border-radius: 100%;
transition: color 0.3s;
position: relative;
}
:host .radio .checked {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
border-radius: 100%;
margin: auto;
width: 14px;
height: 14px;
background-color: var(--m-radio-checked-color,${Theme.radio_checked_color});
transform: scale(0.8);
opacity: 0;
transition: transform 0.3s, opacity 0.3s;
}
:host([checked=true]) .radio {
border: 2px solid var(--m-radio-checked-color,${Theme.radio_checked_color});
}
:host([checked=true]) .radio .checked {
transform: scale(1);
opacity: 1;
}
:host([checked=true]) slot {
color: var(--m-radio-checked-color,${Theme.radio_checked_color});
}
:host([disabled=true]) {
pointer-events: none;
}
:host([disabled=true]) .radio {
border: 2px solid var(--m-radio-disabled-color,${Theme.radio_disabled_color});
}
:host([disabled=true]) .radio .checked {
background-color: var(--m-radio-disabled-color,${Theme.radio_disabled_color});
}
:host([disabled=true]) slot {
color: var(--m-radio-disabled-color,${Theme.radio_disabled_color}) !important;
}`


type Props = {
    name: string,
    value: string,
    checked: boolean,
    disabled: boolean
}
const props: Props = {
    name: "",
    value: "",
    checked: false,
    disabled: false
}


function eachChange(this: HTMLElement & Props) {
    const _name = this.getAttribute("name")
    if (_name) {
        const allHasNameEle = document.querySelectorAll(`${name}[name=${_name}]`)
        allHasNameEle.forEach(item => {
            (item as Element & Props).checked = false;
            (item as Element & Props).value = this.getAttribute("value") ?? ""
            if (item != this)
                item.dispatchEvent(new Event("change"))
        })
    }
    this.dispatchEvent(new Event("change"))
    this.checked = true
}
export class Radio extends useElement<{}, Props>({
    name,
    template,
    style,
    props,
    syncProps: [
        "name",
        "checked",
        "disabled"
    ],
    dispatch: {
        propChanged(this: HTMLElement & Props, key, value) {
            if (key !== "value" || value === this.value) return
            const _name = this.getAttribute("name")
            const eachEles = document.querySelectorAll(`${name}[name="${_name}"]`)
            eachEles.forEach(item => {
                (item as typeof this).checked = false
            });
            try {
                (document.querySelector(`${name}[name="${_name}"][value="${value}"]`) as typeof this).checked = true
                this.value = String(value)
            } catch {
                throw new RangeError(`The value: "${value}" was not found in the group: "${_name}"`)
            }
        }
    },
    setup() {
        this.addEventListener("click", () => {
            eachChange.apply(this)
        })
        return {}
    }
}) { }

Radio.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}