import { useElement } from "./core/element"
import Theme from "./core/default-theme"

const template =
    `<slot name="start"></slot>
        <slot>button</slot>
<slot name="end"></slot>`
const style = `:host {
    padding: 8px 20px;
    box-sizing: border-box;
    border-radius: var(--m-button-borderRadius,${Theme.button_borderRadius});
    background-color: var(--m-button-default-backgroundColor,${Theme.button_default_backgroundColor});
    display: inline-flex;
    font-size: var(--m-button-fontSize,${Theme.button_fontSize});
    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;
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
}`
type Props = {
    type: "" | "outlined" | "text"
    disabled: boolean
}
const props: Props = {
    type: "",
    disabled: false,
}
export class Button extends useElement<void, Props>({
    name: "m-button",
    template,
    style,
    props,
}) { }
Button.defineElement()