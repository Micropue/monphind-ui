import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-checkbox'
const template = `
        <div class="checkbox">
            <div class="checked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path>
                </svg>
            </div>
            <div class="indeterminate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M200-440v-80h560v80H200Z"></path>
                </svg>
            </div>
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
:host .checkbox {
width: 18px;
height: 18px;
border: 2px solid var(--m-checkbox-borderColor,${Theme.checkbox_borderColor});
margin-right: 10px;
border-radius: 8px;
transition: color 0.3s;
position: relative;
}
:host svg {
fill: currentColor;
}
:host .checked,
:host .indeterminate {
transform: scale(0.5);
opacity: 0;
transition: transform 0.3s, opacity 0.3s;
color: var(--m-checkbox-checked-svg-color,${Theme.checkbox_checked_svg_color});
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
}
:host([checked=true]:not([indeterminate=true])) .checkbox {
border: 2px solid var(--m-checkbox-checked-color,${Theme.checkbox_checked_color});
background-color: var(--m-checkbox-checked-color,${Theme.checkbox_checked_color});
}
:host([checked=true]:not([indeterminate=true])) .checked {
transform: scale(1);
opacity: 1;
}
:host([checked=true]:not([indeterminate=true])) slot {
color: var(--m-checkbox-checked-color,${Theme.checkbox_checked_color});
}
:host([checked=true][indeterminate=true]) .checkbox {
border: 2px solid var(--m-checkbox-checked-indeterminate-color,${Theme.checkbox_checked_indeterminate_color});
background-color: var(--m-checkbox-checked-indeterminate-color,${Theme.checkbox_checked_indeterminate_color});
}
:host([checked=true][indeterminate=true]) .indeterminate {
transform: scale(1);
opacity: 1;
}
:host([checked=true][indeterminate=true]) slot {
color: var(--m-checkbox-checked-indeterminate-color,${Theme.checkbox_checked_indeterminate_color});
}
:host([disabled=true]) {
color: var(--m-checkbox-disabled-color,${Theme.checkbox_disabled_color}) !important;
pointer-events: none;
}
:host([disabled=true]) slot {
color: var(--m-checkbox-disabled-color,${Theme.checkbox_disabled_color}) !important;
}
:host([disabled=true][checked=true]) .checkbox {
background-color: var(--m-checkbox-disabled-color,${Theme.checkbox_disabled_color}) !important;
}
:host([disabled=true]) .checkbox {
border: 2px solid var(--m-checkbox-disabled-color,${Theme.checkbox_disabled_color}) !important;
}`
type Props = {
    checked: boolean,
    indeterminate: boolean,
    disabled: boolean
}
const props: Props = {
    checked: false,
    indeterminate: false,
    disabled: false
}
export class Checkbox extends useElement<{}, Props>({
    name,
    template,
    style,
    props,
    setup(this: HTMLElement & Props) {
        this.addEventListener("click", () => {
            this.checked = !this.checked
            this.dispatchEvent(new Event("change"))
        })
        return {}
    },
    syncProps:[
        "disabled",
        "indeterminate",
        "checked"
    ]
}) { }
Checkbox.defineElement()
//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}