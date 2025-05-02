import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-switch'
const template = `<div class="trigger-block"><slot></slot><slot name="status-default"></slot><slot name="status-checked"></slot></div>`
const style = `:host {
  width: 50.4px;
  height: 28px;
  border-radius: 100000px;
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  background-color: var(--m-switch-backgroundColor,${Theme.switch_backgroundColor});
  box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.0666666667);
  transition: background-color 0.3s;
  cursor: pointer;
}
:host([checked=true]) {
  background-color: var(--m-switch-checked-backgroundColor,${Theme.switch_checked_backgroundColor});
}
:host .trigger-block {
  position: absolute;
  transition: left 0.3s;
  width: 22.4px;
  height: 22.4px;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 2.8px;
  justify-content: center;
  align-items: center;
  background-color: var(--m-switch-trigger-backgroundColor,${Theme.switch_trigger_backgroundColor});
  border-radius: 50%;
  color: black;
}
:host .trigger-block ::slotted(m-icon),
:host .trigger-block ::slotted(m-circular-progress),
:host .trigger-block ::slotted(svg) {
  color: currentColor;
  width: 17.92px;
  height: 17.92px;
  transition: all 0.3s;
}
:host .trigger-block ::slotted(m-icon[name=status-default]),
:host .trigger-block ::slotted(m-circular-progress[name=status-default]),
:host .trigger-block ::slotted(svg[name=status-default]) {
  color: currentColor;
  width: 17.92px;
  height: 17.92px;
  transition: all 0.3s;
}
:host .trigger-block ::slotted(m-icon[name=status-checked]),
:host .trigger-block ::slotted(m-circular-progress[name=status-checked]),
:host .trigger-block ::slotted(svg[name=status-checked]) {
  color: currentColor;
  width: 17.92px;
  height: 17.92px;
  transition: all 0.3s;
}
:host .trigger-block m-icon,
:host .trigger-block m-circular-progress,
:host .trigger-block svg {
  color: currentColor;
  width: 17.92px;
  height: 17.92px;
  transition: all 0.3s;
}
:host([checked=true]) .trigger-block {
  color: var(--m-switch-checked-foreColor,${Theme.switch_checked_foreColor});
  left: calc(100% - 22.4px - 2.8px);
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
  background-color: var(--m-switch-disabled-backgroundColor,${Theme.switch_disabled_backgroundColor});
  box-shadow: none;
  pointer-events: none;
}
:host([disabled=true]) .trigger-block {
  color: var(--m-switch-disabled-trigger-foreColor,${Theme.switch_disabled_trigger_foreColor});
  background-color: var(--m-switch-disabled-trigger-backgroundColor,${Theme.switch_disabled_trigger_backgroundColor});
}`
const props = {
    disabled: false,
    checked: false
}

type Props = typeof props

export class Switch extends useElement<{}, Props>({
    name,
    style,
    template,
    props,
    syncProps: ["checked", "disabled"],
    setup() {
        this.addEventListener("click", () => {
            this.checked = !this.checked
            this.dispatchEvent(new Event('change'))
        })
        return {}
    }
}) { }

Switch.defineElement()


//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>
    }
}