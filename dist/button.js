import { useElement } from "./core/element";
const name = 'm-button';
const template = `<slot name="start"></slot>
        <slot></slot>
<slot name="end"></slot>`;
const style = `:host {
    min-width:85px;
    height:40px;
    box-sizing: border-box;
    padding:10px;
    border-radius: 14px;
    background-color: var(--m-button-default-backgroundColor,${"white"});
    display: inline-flex;
    align-items: center;
    justify-content:center;
    font-size: 0.85em;
    transition: transform 0.2s, box-shadow 0.4s, background-color 0.3s, color 0.3s;
    color: var(--m-button-default-textColor,${"black"});
    vertical-align:middle;
}
::slotted(m-icon[slot=start]),::slotted(m-circular-progress[slot=start]) , ::slotted(svg[slot=start]) {
    color:currentColor;
    fill:currentColor;
    width: 20px;
    height: 20px;
    display:initial;
}
::slotted(m-icon[slot=end]) ,::slotted(m-circular-progress[slot=end]) , ::slotted(svg[slot=end]) {
    color:currentColor;
    fill:currentColor;
    width: 20px;
    height: 20px;
    display:initial;
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
    box-shadow: 0px 4px 30px var(--m-button-default-hover-boxShadowColor,${"rgba(70,70,70,0.237)"});
}
:host(:not([disabled=true]):active) {
    transform: scale(0.95);
    cursor: pointer;
    box-shadow: 0px 4px 30px var(--m-button-default-active-boxShadowColor,${"#2ea1f9d6"});
    background-color: var(--m-button-default-active-backgroundColor,${"#2EA2F9"});
    color: var(--m-button-default-active-textColor,${"white"});
}
:host([disabled=true]) {
    background-color: var(--m-button-default-disabled-backgroundColor,${"#EFEFEF"});
    color: var(--m-button-default-disabled-textColor,${"#BABABA"});
}
:host([type=outlined]) {
    background-color: transparent;
    border: 1.5px solid var(--m-button-outlined-borderColor,${"black"});
    transition: border 0.2s, background-color 0.2s;
    color: var(--m-button-outlined-textColor,${"black"});
}
:host([type=outlined]:not([disabled=true]):hover) {
    box-shadow: none;
    background-color: var(--m-button-outlined-hover-backgroundColor,${"black"});
    color: var(--m-button-outlined-hover-textColor,${"white"});
    transform: none;
}
:host([type=outlined]:not([disabled=true]):active) {
    background-color: var(--m-button-outlined-active-backgroundColor,${"#555555"});
    border: 1.5px solid var(--m-button-outlined-active-borderColor,${"#555555"});
}
:host([type=outlined][disabled=true]) {
    border: 1.5px solid var(--m-button-outlined-disabled-borderColor,${"#EFEFEF"});
    color: var(--m-button-outlined-disabled-textColor,${"#BABABA"});
}
:host([type=text]) {
    background-color: transparent;
    transition: background-color 0.2s, color 0.2s;
    color: var(--m-button-text-textColor,${"black"});
}
:host([type=text]:not([disabled=true]):hover) {
    box-shadow: none;
    transform: none;
    background-color: var(--m-button-text-hover-backgroundColor,${"#EFEFEF"});
}
:host([type=text]:not([disabled=true]):active) {
    background-color: var(--m-button-text-active-backgroundColor,${"#2EA2F9"});
}
:host([type=text][disabled=true]) {
    color: var(--m-button-outlined-disabled-textColor,${"#BABABA"});
}
:host([disabled=true]){
    pointer-events:none;
}`;
const props = {
    type: "",
    disabled: false,
    value: ""
};
export class Button extends useElement({
    name,
    template,
    style,
    syncProps: [
        "disabled",
        "type",
        "value"
    ],
    dispatch: {
        propChanged(key, value) {
            if (key === 'value') {
                this.innerText = String(value);
            }
        }
    },
    props,
}) {
}
Button.defineElement();
import 'vue';
