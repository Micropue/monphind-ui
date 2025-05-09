import { useElement } from "./core/element"
import Theme from './core/default-theme'
const name = 'm-input'
const template = `<div class="container">
            <slot name="icon"></slot>
            <div class="input">
                <p class="label"></p>
                <input type="text">
            </div>
            <slot name="action"></slot>
        </div>`
const style = `:host {
  display: inline-flex;
  vertical-align: middle;
  background-color: var(--m-input-backgroundColor,${Theme.input_backgroundColor});
  width: 250px;
  height: 40px;
  border-radius: 15px;
  padding: 3px 13px;
  transition: outline 0.2s;
  outline: 2px solid transparent;
}
:host([readonly=true]) input{
  color:var(--m-input-readonly-color,${Theme.input_readonly_color});
}
:host([focused=true]) {
  outline: 2px solid var(--m-input-focused-outline-color,${Theme.input_focused_outline_color});
}
:host([focused=true]) .container .input .label {
  color: var(--m-input-focused-label-color,${Theme.input_focused_label_color});
  top: -100%;
  bottom: 100%;
}
:host([error=true]){
  outline: 2px solid var(--m-input-error-outline-color,${Theme.input_error_outline_color});
}
:host([error=true]) .container .input .label{
  color:var(--m-input-error-label-color,${Theme.input_error_label_color});
}
:host .container .input[has_text=true] .label{
  top: -100%;
  bottom: 100%;
}
:host([focused=true]) .container .input[has_icon=true] .label{
  left: -37px;
}
:host .container .input[has_icon=true][has_text=true] .label{
  left: -37px;
}
:host([disabled=true]) {
  pointer-events: none;
  outline: none;
  background-color: var(--m-input-disabled-backgroundColor,${Theme.input_disabled_backgroundColor});
}
:host([disabled=true]) .container .input .label {
  color: var(--m-input-disabled-label-color,${Theme.input_disabled_label_color});
}
:host([disabled=true]) .container .input input {
  color: var(--m-input-disabled-color,${Theme.input_disabled_color});
}
:host .container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
:host .container ::slotted([slot=icon]),
:host .container [slot=icon],
:host .container ::slotted(svg[slot=icon]),
:host .container ::slotted(img[slot=icon]) {
  pointer-events: none;
  margin-right: 10px;
  width: 24px;
  height: 24px;
  aspect-ratio: 1/1;
}
:host .container .input {
  position: relative;
  width: 100%;
  height: 100%;

}
:host .container .input input {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
  background-color: transparent;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
:host .container .input input::-moz-selection {
  background-color: var(--m-input-selection-backgroundColor,${Theme.input_selection_backgroundColor});
  color: var(--m-input-selection-textColor,${Theme.input_selection_textColor});
}
:host .container .input input::selection {
  background-color: var(--m-input-selection-backgroundColor,${Theme.input_selection_backgroundColor});
  color: var(--m-input-selection-textColor,${Theme.input_selection_textColor});
}
:host .container .input .label {
  position: absolute;
  left: 3px;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
  height: -moz-fit-content;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  color: var(--m-input-default-label-color,${Theme.input_default_label_color});
  font-size: 12px;
  transition: all 0.3s;
  font-weight: 300;
}
`
const props: Props = {
  disabled: false,//是否禁用
  label: "",//提示词
  value: "",//值
  error: false,//错误状态
  maxlength: -1, //最大长度
  readonly: false, //是否只读
  count: 0, //当前长度
  type: "text",
  min: 0,
  max: 100
}
type Props = {
  disabled: boolean,
  label: string,
  value: string,
  error: boolean,
  maxlength: number,
  readonly: boolean,
  count: number,
  type: "text" | "password" | "number"
  min: number,
  max: number
}

function checkType(type: "text" | "password" | "number", input: HTMLInputElement): void {
  switch (type) {
    case "number":
      input.type = 'number'
      break
    case "password":
      input.type = 'password'
      break
    case "text":
      input.type = 'text'
      break
  }
}

export class Input extends useElement({
  name,
  style,
  template,
  props,
  syncProps: ["disabled", "label", "value", "error", "readonly", "maxlength", "type"],
  dispatch: {
    propChanged(key, value) {
      const inputOuter = this.shadowRoot?.querySelector(".input") as HTMLElement
      const input = this.shadowRoot?.querySelector("input") as HTMLInputElement
      const label = this.shadowRoot?.querySelector('.label') as HTMLParagraphElement
      switch (key) {
        case 'value': {
          if (input.value !== value) {
            input.value = value as string
            this.count = input.value.length
            inputOuter.setAttribute("has_text", input.value ? "true" : "false")
          }
          break
        }
        case 'readonly': {
          if (this.readonly === false)
            input.removeAttribute('readOnly')
          else
            input.readOnly = true
          break
        }
        case 'type': {
          checkType(this.type, input)
          break
        }
        case 'disabled': {
          input.disabled = value === 'true'
          break
        }
        case 'min': {
          input.min = String(value)
          break
        }
        case 'max': {
          input.max = String(value)
          break
        }
        case 'label': {
          label.textContent = String(value)
        }
      }
    },
    connected() {
      const input = this.shadowRoot?.querySelector("input") as HTMLInputElement
      const inputOuter = this.shadowRoot?.querySelector(".input") as HTMLElement
      const label = this.shadowRoot?.querySelector('.label') as HTMLParagraphElement
      label.textContent = this.label
      checkType(this.type, input)
      inputOuter.setAttribute("has_text", input.value ? "true" : "false")
      if (this.value) {
        input.value = this.value
      }
      if (this.readonly) {
        input.readOnly = true
      }
      if (this.disabled) {
        input.disabled = true
      }
      input.min = this.min.toString()
      input.max = this.max.toString()
      this.count = input.value.length
    }
  },
  setup(shadowRoot) {
    const input = shadowRoot.querySelector("input") as HTMLInputElement
    const inputOuter = shadowRoot.querySelector(".input") as HTMLElement
    if (this.querySelector("[slot=icon]")) {
      inputOuter.setAttribute("has_icon", "true")
    } else {
      inputOuter.setAttribute("has_icon", "false")
    }
    this.shadowRoot!.onslotchange = () => {
      if (this.querySelector("[slot=icon]")) {
        inputOuter.setAttribute("has_icon", "true")
      } else {
        inputOuter.setAttribute("has_icon", "false")
      }
    }
    input.addEventListener('focus', () => {
      this.setAttribute("focused", "true")
    })
    input.addEventListener('blur', () => {
      this.setAttribute("focused", "false")
    })
    input.addEventListener('input', () => {
      if (this.maxlength !== -1) {
        input.value = input.value.slice(0, this.maxlength)
        this.count = input.value.length
        inputOuter.setAttribute("has_text", input.value == "" ? "false" : "true")
        return
      }
      this.count = input.value.length
      this.value = input.value
      inputOuter.setAttribute("has_text", input.value == "" ? "false" : "true")
    })
    return {}
  }
}) { }
Input.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
  interface GlobalComponents {
    [name]: Expand<Props>
  }
}