import { useElement } from "./core/element";
const name = 'm-switch';
const template = `<div class="trigger-block"><slot></slot><slot name="status-default"></slot><slot name="status-checked"></slot></div>`;
const style = `:host {
  width: 50.4px;
  border-radius: 100000px;
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  background-color: var(--m-switch-backgroundColor,${"#EFEFEF"});
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.0666666667);
  transition: background-color 0.3s;
  cursor: pointer;
  aspect-ratio: 50.4 / 28;
}
:host([checked=true]) {
  background-color: var(--m-switch-checked-backgroundColor,${"#2EA2F9"});
}
:host .trigger-block {
  position: absolute;
  transition: transform 0.3s;
  height: 80%;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 2.8px;
  justify-content: center;
  align-items: center;
  background-color: var(--m-switch-trigger-backgroundColor,${"white"});
  border-radius: 50%;
  color: black;
  aspect-ratio: 1 / 1;
}
:host .trigger-block ::slotted(m-icon),
:host .trigger-block ::slotted(m-circular-progress),
:host .trigger-block ::slotted(svg) {
  color: currentColor;
  width: 80%;
  height: 80%;
  transition: all 0.3s;
}
:host .trigger-block ::slotted(m-icon[slot=status-default]),
:host .trigger-block ::slotted(m-circular-progress[slot=status-default]),
:host .trigger-block ::slotted(svg[slot=status-default]) {
  color: currentColor;
  width: 80%;
  height: 80%;
  transition: all 0.3s;
}
:host .trigger-block ::slotted(m-icon[slot=status-checked]),
:host .trigger-block ::slotted(m-circular-progress[slot=status-checked]),
:host .trigger-block ::slotted(svg[slot=status-checked]) {
  color: currentColor;
  width: 80%;
  height: 80%;
  transition: all 0.3s;
}
:host .trigger-block m-icon,
:host .trigger-block m-circular-progress,
:host .trigger-block svg {
  color: currentColor;
  width: 80%;
  height: 80%;
  transition: all 0.3s;
}
:host([checked=true]) .trigger-block {
  color: var(--m-switch-checked-foreColor,${"#2EA2F9"});
  transform: translateX(100%);
}
:host([checked=true]) .trigger-block ::slotted(m-icon[slot=status-default]),
:host([checked=true]) .trigger-block ::slotted(m-circular-progress[slot=status-default]),
:host([checked=true]) .trigger-block ::slotted(svg[slot=status-default]){
    display:none;
}
:host(:not([checked=true])) .trigger-block ::slotted(m-icon[slot=status-checked]),
:host(:not([checked=true])) .trigger-block ::slotted(m-circular-progress[slot=status-checked]),
:host(:not([checked=true])) .trigger-block ::slotted(svg[slot=status-checked]){
    display:none;
}
:host([disabled=true]) {
  background-color: var(--m-switch-disabled-backgroundColor,${"#EBEBEB"});
  box-shadow: none;
  pointer-events: none;
}
:host([disabled=true]) .trigger-block {
  color: var(--m-switch-disabled-trigger-foreColor,${"white"});
  background-color: var(--m-switch-disabled-trigger-backgroundColor,${"#BABABA"});
}`;
const props = {
    disabled: false,
    checked: false
};
export class Switch extends useElement({
    name,
    style,
    template,
    props,
    syncProps: ["checked", "disabled"],
    setup() {
        this.addEventListener("click", () => {
            this.checked = !this.checked;
            this.dispatchEvent(new Event('change'));
        });
        return {};
    }
}) {
}
Switch.defineElement();
import 'vue';
