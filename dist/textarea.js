import { useElement } from "./core/element";
const name = 'm-textarea';
const style = `:host {
  display: block;
  width: 250px;
  height: 200px;
  border-radius: 15px;
  background-color: white;
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
}
:host p.label {
  position: absolute;
  left: 16px;
  top: 13px;
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  color: var(--m-textarea-default-label-color,${"rgb(178,178,178)"});
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  pointer-events: none;
  transition: transform 0.3s;
}
:host([focused=true]) p.label {
  color: var(--m-textarea-focused-label-color,${"#2EA2F9"});
  transform: translateY(-37px);
}
:host textarea[has_text=true] ~ p.label {
  transform: translateY(-37px);
}
:host([focused=true]) {
  outline: 2px solid var(--m-textarea-focused-outline-color,${"#2ea1f9d6"});
}
:host([disabled=true]) {
  background-color: var(--m-textarea-disabled-backgroundColor,${"#EFEFEF"});
}
:host([disabled=true]) p.label {
  color: var(--m-textarea-disabled-label-color,${"rgb(178,178,178)"});
}
:host([error=true]) {
  outline: 2px solid var(--m-textarea-error-outline-color,${"rgba(255,0,0,0.507)"});
}
:host([error=true]) p.label {
  color: var(--m-textarea-error-label-color,${"rgba(255,0,0,0.507)"});
}
:host([readonly=true]) textarea {
  color: var(--m-textarea-readonly-color,${"rgb(178,178,178)"});
}`;
const template = `<textarea></textarea>
        <p class="label"></p>`;
const props = {
    disabled: false,
    label: "",
    value: "",
    count: 0,
    readonly: false,
    adaptive: false,
    error: false
};
export class Textarea extends useElement({
    name,
    props,
    style,
    template,
    syncProps: ["adaptive", "disabled", "label", "readonly", "value", "error"],
    setup() {
        return {};
    },
    dispatch: {
        connected() {
            const label = this.label;
            const labelEle = this.shadowRoot?.querySelector(".label");
            labelEle.textContent = label;
            const textarea = this.shadowRoot?.querySelector("textarea");
            textarea.addEventListener("input", () => {
                this.value = textarea.value;
                this.count = textarea.value.length;
            });
            textarea.addEventListener("focus", () => {
                this.setAttribute("focused", "true");
            });
            textarea.addEventListener("blur", () => {
                this.setAttribute("focused", "false");
            });
        },
        propChanged(key, value) {
            const labelEle = this.shadowRoot?.querySelector(".label");
            const textarea = this.shadowRoot?.querySelector("textarea");
            switch (key) {
                case "adaptive": {
                    this.setAttribute("auto-height", String(String(value) === 'true'));
                    if (value === 'true') {
                        this.style.height = 'auto';
                        this.style.height = textarea.scrollHeight + 'px';
                    }
                    break;
                }
                case "disabled": {
                    if (value === 'true') {
                        textarea.disabled = true;
                    }
                    else {
                        textarea.disabled = false;
                        textarea.removeAttribute("disabled");
                    }
                    break;
                }
                case "label": {
                    labelEle.textContent = String(value);
                    break;
                }
                case "readonly": {
                    if (value === "true") {
                        textarea.readOnly = true;
                    }
                    else {
                        textarea.readOnly = false;
                        textarea.removeAttribute("readonly");
                    }
                    break;
                }
                case "value": {
                    textarea.value = String(value);
                    textarea.setAttribute("has_text", String(value).length ? "true" : "false");
                    this.count = String(value).length;
                    if (this.getAttribute("auto-height") === 'true') {
                        this.style.height = `auto`;
                        this.style.height = `${textarea.scrollHeight}px`;
                    }
                    break;
                }
            }
        }
    }
}) {
}
Textarea.defineElement();
import 'vue';
