import { useElement } from "./core/element"
import Theme from "./core/default-theme"
import { select } from "./core/select-elememt"

/**
 * 主组件定义
 */
const name = "m-picker"
const style = `:host {
  display: inline-flex;
  vertical-align: middle;
  position: relative;
}
:host .view {
  height: 25px;
  width: inherit;
  min-width: 100px;
  padding: 5px 13px;
  background-color: var(--m-picker-default-view-backgroundColor,${Theme.picker_default_view_backgroundColor});
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  position: relative;
  transition: all 0.3s;
  outline: 2px solid transparent;
}
:host .view .label {
  color: var(--m-picker-default-label-color,${Theme.picker_default_label_color});
  position: absolute;
  font-size: 12px;
  pointer-events: none;
  height: -moz-fit-content;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  transition: all 0.3s;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: calc(100% - 26px - 20px);
  overflow-x: scroll;
  white-space: nowrap;
  font-weight: 300;
}
:host .view .text {
  color: var(--m-picker-default-text-color,${Theme.picker_default_text_color});
  font-size: 13px;
}
:host .view .icon {
  width: 20px;
  height: 20px;
  color: var(--m-picker-default-icon-color,${Theme.picker_default_icon_color});
  transition: transform 0.2s;
  margin-left: 20px;
}
:host .view .icon svg {
  stroke: currentColor;
  width: inherit;
  height: inherit;
}
:host .view[has_text=true] .label {
  top: -100%;
  bottom: 100%;
  margin: auto;
}
:host .options {
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 4px 20px var(--m-picker-default-options-boxShadow-color,${Theme.picker_default_options_boxShadow_color});
  background-color: var(--m-picker-default-options-backgroundColor,${Theme.picker_default_options_backgroundColor});
  overflow-y: scroll;
  opacity: 0;
  transform: scale(0.98);
  pointer-events: none;
  transition: all 0.3s;
  max-height: 50vh;
  z-index: 1;
  transform: scaleY(0%);
  transform-origin: top;
}
:host .options:not([direction=north]) {
  top: calc(100% + 10px);
  transform-origin: top;
}
:host .options[direction=north] {
  bottom: calc(100% + 30px);
  transform-origin: bottom;
}
:host .options .picker-item,
::slotted(m-picker-item) {
  white-space: nowrap;
  width: 100%;
  padding: 10px 20px;
  font-size: 13px;
  box-sizing: border-box;
  background-color: var(--m-picker-item-backgroundColor,${Theme.picker_item_backgroundColor});
  color: var(--m-picker-item-color,${Theme.picker_item_color});
  transition: all 0.1s;
}
:host .options .picker-item:not([disabled=true]):hover,
::slotted(m-picker-item):hover {
  filter: brightness(90%);
}
:host .options .picker-item[selected=true],
::slotted(m-picker-item[selected=true]) {
  background-color: var(--m-picker-item-selected-backgroundColor,${Theme.picker_item_selected_backgroundColor});
  color: var(--m-picker-item-selected-color,${Theme.picker_item_selected_color});
}
:host .options .picker-item[disabled=true],
::slotted(m-picker-item[disabled=true]) {
  background-color: var(--m-picker-item-disabled-backgroundColor,${Theme.picker_item_disabled_backgroundColor});
  color: var(--m-picker-item-disabled-color,${Theme.picker_item_disabled_color});
  pointer-events: none;
}
:host([disabled=true]) {
  pointer-events: none;
}
:host([disabled=true]) .view {
  background-color: var(--m-picker-disabled-view-backgroundColor,${Theme.picker_disabled_view_backgroundColor});
}
:host([disabled=true]) .view .text {
  color: var(--m-picker-disabled-view-color,${Theme.picker_disabled_view_color});
}
:host(:not(:host([disabled=true]))[focused=true]) .view {
  outline: 2px solid var(--m-picker-focused-outline-color,${Theme.picker_focused_outline_color});
}
:host(:not(:host([disabled=true]))[focused=true]) .view .label {
  color: var(--m-picker-focused-label-color,${Theme.picker_focused_label_color});
  top: -100%;
  bottom: 100%;
  margin: auto;
}
:host(:not(:host([disabled=true]))[focused=true]) .view .icon {
  transform: rotate(-180deg);
}
:host(:not(:host([disabled=true]))[focused=true]) .options {
  pointer-events: initial;
  transform: scale(1);
  opacity: 1;
  transform: scaleY(100%);
}`
  const template = `<div class="view">
            <div class="label"></div>
            <div class="text"></div>
            <div class="icon">
                <svg viewBox="0 -960 960 960">
                    <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path>
                </svg>
            </div>
        </div>
        <div class="options">
            <slot></slot>
        </div>`
const props = {
  disabled: false,
  label: "",
  value: "",
}
type Props = typeof props
export class Picker extends useElement({
  name,
  style,
  template,
  props,
  syncProps: ["disabled", "label", "value"],
  dispatch: {
    propChanged(key, value) {
      const view = this.shadowRoot?.querySelector(".view") as HTMLElement
      const text = this.shadowRoot?.querySelector(".view .text") as HTMLElement
      switch (key) {
        case "value": {
          const selectedElement = select<HTMLElement & ItemProps>(this, "m-picker-item", {
            value: value as any,
          })
          const allItems = select<ItemProps>(this, "m-picker-item", {
            selected: true
          })
          if (selectedElement.length) {
            allItems.forEach(i => i.selected = false)
            text.textContent = selectedElement[0].textContent
            if (text.textContent != '') view.setAttribute("has_text", "true")
            else view.removeAttribute('has_text')
            selectedElement[0].selected = true
          }
          break
        }
      }
    },
    connected() {
      const label = this.label
      const view = this.shadowRoot?.querySelector(".view") as HTMLElement
      const labelArea = view.querySelector(".label") as HTMLElement
      labelArea.textContent = label
      const items = this?.querySelectorAll<HTMLElement & ItemProps>("m-picker-item")
      items!.forEach(i => {
        i.addEventListener("click", () => {
          if (this.value != i.value) {
            const selectedItems = select<ItemProps>(this, "m-picker-item", {
              selected: true
            })
            selectedItems!.forEach(i => i.selected = false)
            this.value = i.value
            this.dispatchEvent(new Event('change'))
          }
        })
      })
      setTimeout(() => {
        const defaultValue = this.value
        if (defaultValue) {
          const defaultSelected = select<ItemProps>(this, "m-picker-item", {
            value: defaultValue
          })
          if (defaultSelected) defaultSelected[0].selected = true
          const text = this.shadowRoot?.querySelector(".view .text") as HTMLElement
          text.textContent = defaultSelected[0].textContent
          if (text.textContent != '') view.setAttribute("has_text", "true")
          else view.removeAttribute('has_text')
        }
      })
    }
  },
  setup(shadowRoot) {
    const view = shadowRoot.querySelector(".view") as HTMLElement
    const options = shadowRoot.querySelector(".options") as HTMLElement
    view.addEventListener("click", () => {
      const status = this.getAttribute("focused") || "false"
      this.setAttribute("focused", status === 'false' ? "true" : "false")
      const direction = {
        top: view.offsetTop,
        bottom: window.innerHeight - view.getBoundingClientRect().top - view.getBoundingClientRect().height
      }
      if (options.offsetHeight >= direction.bottom) {
        options.setAttribute("direction", "north")
      } else {
        options.setAttribute("direction", "sourth")
      }
    })
    let is_mouseover = false
    this.addEventListener("mouseover", () => {
      is_mouseover = true
    })
    this.addEventListener("mouseleave", () => {
      is_mouseover = false
    })
    window.addEventListener("click", () => {
      if (!is_mouseover) {
        this.setAttribute("focused", "false")
      }
    })
    return {}
  }
}) { }

Picker.defineElement()
//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
  interface GlobalComponents {
    [name]: Expand<Props>
  }
}

/**
 * 子组件定义
 */

const itemName = 'm-picker-item'
const itemTemplate = `<slot></slot>`
const itemStyle = `:host {
  white-space: nowrap;
  width: 100%;
  padding: 10px 20px;
  font-size: 13px;
  box-sizing: border-box;
  background-color: var(--m-picker-item-backgroundColor,${Theme.picker_item_backgroundColor});
  color: var(--m-picker-item-color,${Theme.picker_item_color});
  transition: all 0.1s;
  display: block;
}
:host(:hover) {
  filter: brightness(90%);
}
:host([selected=true]) {
  background-color: var(--m-picker-item-selected-backgroundColor,${Theme.picker_item_selected_backgroundColor});
  color: var(--m-picker-item-selected-color,${Theme.picker_item_selected_color});
}
:host([disabled=true]) {
  background-color: var(--m-picker-item-disabled-backgroundColor,${Theme.picker_item_disabled_backgroundColor});
  color: var(--m-picker-item-disabled-color,${Theme.picker_item_disabled_color});
  pointer-events: none;
}`
const itemProps = {
  disabled: false,
  selected: false,
  value: ""
}
type ItemProps = typeof itemProps
export class PickerItem extends useElement({
  name: itemName,
  template: itemTemplate,
  style: itemStyle,
  props: itemProps,
  syncProps: ["disabled", "selected"],
  dispatch: {
    propChanged(key, value) {
      switch (key) {
        case "selected": {
          if (value == 'true' || value == true) {
            const picker = this.parentElement as HTMLElement & Props
            picker.value = this.value
          }
          break
        }
      }
    }
  },
  setup() {
    return {}
  }
}) { }

PickerItem.defineElement()


//@ts-ignore
import 'vue'
//@ts-ignore
declare module 'vue' {
  interface GlobalComponents {
    [itemName]: Expand<ItemProps>
  }
}