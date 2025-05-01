import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-icon-button'
const template = `<slot>icon</slot>`
const style = `:host {
    padding: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: var(--m-icon-button-default-backgroundColor,${Theme.icon_button_default_backgroundColor});
    display: inline-flex;
    align-items: center;
    justify-content:space-between;
    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;
}
::slotted(m-icon),::slotted(m-circular-progress) , ::slotted(svg) {
    color:currentColor;
    fill:currentColor;
    width: 30px;
    height: 30px;
    display:initial;
}

:host(:not([disabled=true]):hover) {
    transform: translateY(-2px);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-icon-button-default-hover-boxShadowColor,${Theme.icon_button_default_hover_boxShadowColor});
}
:host(:not([disabled=true]):active) {
    transform: scale(0.95);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-icon-button-default-active-boxShadowColor,${Theme.icon_button_default_active_boxShadowColor});
    background-color: var(--m-icon-button-default-active-backgroundColor,${Theme.icon_button_default_active_backgroundColor});
    color: var(--m-icon-button-default-active-textColor,${Theme.icon_button_default_active_textColor});
}
:host([disabled=true]) {
    background-color: var(--m-icon-button-default-disabled-backgroundColor,${Theme.icon_button_default_disabled_backgroundColor});
    color: var(--m-icon-button-default-disabled-textColor,${Theme.icon_button_default_disabled_textColor});
}
:host([type=outlined]) {
    background-color: transparent;
    border: 1.5px solid var(--m-icon-button-outlined-borderColor,${Theme.icon_button_outlined_borderColor});
    transition: border 0.2s, background-color 0.2s;
}
:host([type=outlined]:not([disabled=true]):hover) {
    box-shadow: none;
    background-color: var(--m-icon-button-outlined-hover-backgroundColor,${Theme.icon_button_outlined_hover_backgroundColor});
    color: var(--m-icon-button-outlined-hover-textColor,${Theme.icon_button_outlined_hover_textColor});
    transform: none;
}
:host([type=outlined]:not([disabled=true]):active) {
    background-color: var(--m-icon-button-outlined-active-backgroundColor,${Theme.icon_button_outlined_active_backgroundColor});
    border: 1.5px solid var(--m-icon-button-outlined-active-borderColor,${Theme.icon_button_outlined_active_borderColor});
}
:host([type=outlined][disabled=true]) {
    border: 1.5px solid var(--m-icon-button-outlined-disabled-borderColor,${Theme.icon_button_outlined_disabled_borderColor});
    color: var(--m-icon-button-outlined-disabled-textColor,${Theme.icon_button_outlined_disabled_textColor});
}
:host([type=text]) {
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
}
:host([type=text]:not([disabled=true]):hover) {
    box-shadow: none;
    transform: none;
    background-color: var(--m-icon-button-text-hover-backgroundColor,${Theme.icon_button_text_hover_backgroundColor});
}
:host([type=text]:not([disabled=true]):active) {
    background-color: var(--m-icon-button-text-active-backgroundColor,${Theme.icon_button_text_active_backgroundColor});
}
:host([type=text][disabled=true]) {
    color: var(--m-icon-button-outlined-disabled-textColor,${Theme.icon_button_outlined_disabled_textColor});
}
:host([disabled=true]){
    pointer-events:none;
}`
type Props = {
    disabled: boolean
    type: "" | "outlined" | "text"
}
const props: Props = {
    disabled: false,
    type: ""
}
export class IconButton extends useElement<{}, Props>({
    template,
    style,
    props,
    name,
    syncProps: [
        "disabled",
        "type"
    ]
}) { }
IconButton.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}