import { useElement } from "./core/element";
const name = 'm-fab';
const template = `<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>`;
const style = `:host {
display: inline-flex;
align-items: center;
background-color: var(--m-fab-backgroundColor,${"white"});
border-radius: 15px;
padding:10px;
box-sizing:border-box;
font-size: 14px;
transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
justify-content:center;
min-width:60px;
min-height:60px;
vertical-align:middle;
}
::slotted(m-circular-progress),::slotted(m-icon),::slotted(m-icon[slot=start]),::slotted(m-circular-progress[slot=start]) , ::slotted(svg[slot=start]) {
    color:currentColor;
    fill:currentColor;
    width: 35px;
    height: 35px;
    display:initial;
}
::slotted(m-icon[slot=end]) ,::slotted(m-circular-progress[slot=end]) , ::slotted(svg[slot=end]) {
    color:currentColor;
    fill:currentColor;
    width: 35px;
    height: 35px;
    display:initial;
}
::slotted([slot=start]){
margin-right:10px;
}
::slotted([slot=end]){
margin-left:10px;
}
:host(:not([disabled=true]):hover) {
transform: translateY(-3px);
cursor: pointer;
background-color: var(--m-fab-hover-backgroundColor,${"rgb(247,247,247)"});
box-shadow: 0px 4px 15px var(--m-fab-hover-boxShadowColor,${"rgba(70,70,70,0.237)"});
}
:host(:not([disabled=true]):active) {
transform: scale(0.95);
background-color: var(--m-fab-active-backgroundColor,${"#2EA2F9"});
color: var(--m-fab-active-color,${"white"});
box-shadow: 0px 4px 20px var(--m-fab-active-boxShadowColor,${"#2ea1f9d6"});
}
:host([disabled=true]){
background-color:var(--m-fab-disabled-backgroundColor,${"#EFEFEF"});
color:var(--m-fab-disabled-color,${"#BABABA"});
pointer-events:none;
}
`;
const props = {
    disabled: false
};
export class FAB extends useElement({
    name,
    style,
    template,
    props,
    syncProps: [
        "disabled"
    ],
}) {
}
FAB.defineElement();
import 'vue';
