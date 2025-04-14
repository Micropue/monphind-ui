import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-button'
const template =
    `<slot name="start"></slot>
        <slot></slot>
<slot name="end"></slot>`
const style = `:host {
    padding: 8px 20px;
    box-sizing: border-box;
    border-radius: 14px;
    background-color: var(--m-button-default-backgroundColor,${Theme.button_default_backgroundColor});
    display: inline-flex;
    align-items: center;
    justify-content:space-between;
    font-size: 0.85em;
    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;
    color: var(--m-button-default-textColor,${Theme.button_default_textColor});
}
::slotted(m-icon[slot=start]),::slotted(m-circular-progress[slot=start]) , ::slotted(svg[slot=start]) {
    color:currentColor;
    fill:currentColor;
    width: 30px;
    height: 30px;
}
::slotted(m-icon[slot=end]) ,::slotted(m-circular-progress[slot=end]) , ::slotted(svg[slot=end]) {
    color:currentColor;
    fill:currentColor;
    width: 30px;
    height: 30px;
}
::slotted([slot=start]){
    margin-right:10px;
}
::slotted([slot=end]){
    margin-left:10px;
}
:host(:not([disabled=true]):hover) {
    transform: translateY(-2px);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-button-default-hover-boxShadowColor,${Theme.button_default_hover_boxShadowColor});
}
:host(:not([disabled=true]):active) {
    transform: scale(0.95);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-button-default-active-boxShadowColor,${Theme.button_default_active_boxShadowColor});
    background-color: var(--m-button-default-active-backgroundColor,${Theme.button_default_active_backgroundColor});
    color: var(--m-button-default-active-textColor,${Theme.button_default_active_textColor});
}
:host([disabled=true]) {
    background-color: var(--m-button-default-disabled-backgroundColor,${Theme.button_default_disabled_backgroundColor});
    color: var(--m-button-default-disabled-textColor,${Theme.button_default_disabled_textColor});
}
:host([type=outlined]) {
    background-color: transparent;
    border: 1.5px solid var(--m-button-outlined-borderColor,${Theme.button_outlined_borderColor});
    transition: border 0.2s, background-color 0.2s;
    color: var(--m-button-outlined-textColor,${Theme.button_outlined_textColor});
}
:host([type=outlined]:not([disabled=true]):hover) {
    box-shadow: none;
    background-color: var(--m-button-outlined-hover-backgroundColor,${Theme.button_outlined_hover_backgroundColor});
    color: var(--m-button-outlined-hover-textColor,${Theme.button_outlined_hover_textColor});
    transform: none;
}
:host([type=outlined]:not([disabled=true]):active) {
    background-color: var(--m-button-outlined-active-backgroundColor,${Theme.button_outlined_active_backgroundColor});
    border: 1.5px solid var(--m-button-outlined-active-borderColor,${Theme.button_outlined_active_borderColor});
}
:host([type=outlined][disabled=true]) {
    border: 1.5px solid var(--m-button-outlined-disabled-borderColor,${Theme.button_outlined_disabled_borderColor});
    color: var(--m-button-outlined-disabled-textColor,${Theme.button_outlined_disabled_textColor});
}
:host([type=text]) {
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
    color: var(--m-button-text-textColor,${Theme.button_text_textColor});
}
:host([type=text]:not([disabled=true]):hover) {
    box-shadow: none;
    transform: none;
    background-color: var(--m-button-text-hover-backgroundColor,${Theme.button_text_hover_backgroundColor});
}
:host([type=text]:not([disabled=true]):active) {
    background-color: var(--m-button-text-active-backgroundColor,${Theme.button_text_active_backgroundColor});
}
:host([type=text][disabled=true]) {
    color: var(--m-button-outlined-disabled-textColor,${Theme.button_outlined_disabled_textColor});
}
:host([disabled=true]){
    pointer-events:none;
}`
type Props = {
    type: "" | "outlined" | "text"
    disabled: boolean
    value: string
}
const props: Props = {
    type: "",
    disabled: false,
    value: ""
}
export class Button extends useElement<{}, Props>({
    name,
    template,
    style,
    syncProps: [
        "disabled",
        "type",
        "value"
    ],
    dispatch: {
        propChanged(this: HTMLElement, key, value) {
            if (key === 'value') {
                this.innerText = String(value)
            }
        }
    },
    props,
}) { }
Button.defineElement()


//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}