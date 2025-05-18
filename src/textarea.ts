import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-textarea'
const style = `:host {
  display: block;
  width: 250px;
  height: 200px;
  border-radius: 15px;
  background-color: var(--m-textarea-default-backgroundColor,${Theme.textarea_default_backgroundColor});
  position: relative;
  outline: 0px solid transparent;
  transition: outline 0.2s;
}
:host textarea {
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 13px;
  font-size: 14px;
  background-color: transparent;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--m-textarea-textColor ,${Theme.textarea_textColor});
}
:host p.label {
  position: absolute;
  left: 16px;
  top: 13px;
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  color: var(--m-textarea-default-label-color,${Theme.textarea_default_label_color});
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  pointer-events: none;
  transition: transform 0.3s;
}
:host([focused=true]) p.label {
  color: var(--m-textarea-focused-label-color,${Theme.textarea_focused_label_color});
  transform: translateY(-37px);
}
:host textarea[has_text=true] ~ p.label {
  transform: translateY(-37px);
}
:host([focused=true]) {
  outline: 2px solid var(--m-textarea-focused-outline-color,${Theme.textarea_focused_outline_color});
}
:host([disabled=true]) {
  background-color: var(--m-textarea-disabled-backgroundColor,${Theme.textarea_disabled_backgroundColor});
}
:host([disabled=true]) p.label {
  color: var(--m-textarea-disabled-label-color,${Theme.textarea_disabled_label_color});
}
:host([error=true]) {
  outline: 2px solid var(--m-textarea-error-outline-color,${Theme.textarea_error_outline_color});
}
:host([error=true]) p.label {
  color: var(--m-textarea-error-label-color,${Theme.textarea_error_label_color});
}
:host([readonly=true]) textarea {
  color: var(--m-textarea-readonly-color,${Theme.textarea_readonly_color});
}`
const template = `<textarea></textarea>
        <p class="label"></p>`

const props = {
    disabled: false,//禁用
    label: "",//占位文本
    value: "",//输入内容
    count: 0,//输入长度
    readonly: false,//只读
    adaptive: false,//自适应高度
    /**开启后默认为auto高度 */
    error: false //错误状态
}
type Props = typeof props

export class Textarea extends useElement({
    name,
    props,
    style,
    template,
    syncProps: ["adaptive", "disabled", "label", "readonly", "value", "error"],
    setup() {
        return {}
    },
    dispatch: {
        connected() {
            const label = this.label
            const labelEle = this.shadowRoot?.querySelector(".label") as HTMLParagraphElement
            labelEle.textContent = label
            const textarea = this.shadowRoot?.querySelector("textarea") as HTMLTextAreaElement
            textarea.addEventListener("input", () => {
                this.value = textarea.value
                this.count = textarea.value.length
            })
            textarea.addEventListener("focus", () => {
                this.setAttribute("focused", "true")
                //默认自动冒泡事件
            })
            textarea.addEventListener("blur", () => {
                this.setAttribute("focused", "false")
            })
        },
        propChanged(key, value) {
            const labelEle = this.shadowRoot?.querySelector(".label") as HTMLParagraphElement
            const textarea = this.shadowRoot?.querySelector("textarea") as HTMLTextAreaElement
            switch (key) {
                case "adaptive": {
                    this.setAttribute("auto-height", String(String(value) === 'true'))
                    if (value === 'true') {
                        this.style.height = 'auto'
                        this.style.height = textarea.scrollHeight + 'px'
                    }
                    break
                }
                case "disabled": {
                    if (value === 'true') {
                        textarea.disabled = true
                    } else {
                        textarea.disabled = false
                        textarea.removeAttribute("disabled")
                    }
                    break
                }
                case "label": {
                    labelEle.textContent = String(value)
                    break
                }
                case "readonly": {
                    if (value === "true") {
                        textarea.readOnly = true
                    } else {
                        textarea.readOnly = false
                        textarea.removeAttribute("readonly")
                    }
                    break
                }
                case "value": {
                    textarea.value = String(value)
                    textarea.setAttribute("has_text", String(value).length ? "true" : "false")
                    this.count = String(value).length
                    if (this.getAttribute("auto-height") === 'true') {
                        this.style.height = `auto`
                        this.style.height = `${textarea.scrollHeight}px`
                    }
                    break
                }
            }
        }
    }
}) { }

Textarea.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>
    }
}