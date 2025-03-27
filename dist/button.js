import { useElement } from "./core/element";
const template = `<slot name="start"></slot>
        <slot>button</slot>
<slot name="end"></slot>`;
const style = `:host {
    padding: 8px 20px;
    box-sizing: border-box;
    border-radius: var(--m-button-borderRadius);
    background-color: var(--m-button-default-backgroundColor);
    display: inline-flex;
    font-size: var(--m-button-fontSize);
    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;
}
:host(:not([disabled=true]):hover) {
    transform: translateY(-2px);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-button-default-hover-boxShadowColor);
}
:host(:not([disabled=true]):active) {
    transform: scale(0.95);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-button-default-active-boxShadowColor);
    background-color: var(--m-button-default-active-backgroundColor);
    color: var(--m-button-default-active-textColor);
}
:host([disabled=true]) {
    background-color: var(--m-button-default-disabled-backgroundColor);
    color: var(--m-button-default-disabled-textColor);
}
:host([type=outlined]) {
    background-color: transparent;
    border: 1.5px solid var(--m-button-outlined-borderColor);
    transition: border 0.2s, background-color 0.2s;
}
:host([type=outlined]:not([disabled=true]):hover) {
    box-shadow: none;
    background-color: var(--m-button-outlined-hover-backgroundColor);
    color: var(--m-button-outlined-hover-textColor);
    transform: none;
}
:host([type=outlined]:not([disabled=true]):active) {
    background-color: var(--m-button-outlined-active-backgroundColor);
    border: 1.5px solid var(--m-button-outlined-active-borderColor);
}
:host([type=outlined][disabled=true]) {
    border: 1.5px solid var(--m-button-outlined-disabled-borderColor);
    color: var(--m-button-outlined-disabled-textColor);
}
:host([type=text]) {
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
}
:host([type=text]:not([disabled=true]):hover) {
    box-shadow: none;
    transform: none;
    background-color: var(--m-button-text-hover-backgroundColor);
}
:host([type=text]:not([disabled=true]):active) {
    background-color: var(--m-button-text-active-backgroundColor);
}
:host([type=text][disabled=true]) {
    color: var(--m-button-outlined-disabled-textColor);
}`;
const props = {
    type: "",
    disabled: false,
};
export class Button extends useElement({
    name: "m-button",
    template,
    style,
    props,
    setup(shadowRoot) {
        const shabi = () => {
            alert("我是傻逼");
        };
        return {
            shabi
        };
    }
}) {
}
Button.defineElement();
