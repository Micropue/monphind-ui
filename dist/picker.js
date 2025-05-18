import { useElement } from "./core/element";
import { select } from "./core/select-elememt";
const name = "m-picker";
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
  background-color: var(--m-picker-default-view-backgroundColor,${"white"});
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  position: relative;
  transition: all 0.3s;
  outline: 2px solid transparent;
}
:host .view .label {
  color: var(--m-picker-default-label-color,${"rgb(178,178,178)"});
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
  overflow-x: hidden;
  white-space: nowrap;
  font-weight: 300;
}
:host .view .text {
  color: var(--m-picker-default-text-color,${"black"});
  font-size: 13px;
}
:host .view .icon {
  width: 20px;
  height: 20px;
  color: var(--m-picker-default-icon-color,${"black"});
  transition: transform 0.2s;
  margin-left: 20px;
}
:host .view .icon svg {
  stroke: currentColor;
  width: inherit;
  height: inherit;
  fill: currentColor;
}
:host .view[has_text=true] .label {
  top: -100%;
  bottom: 100%;
  margin: auto;
}
:host .options {
  position: absolute;
  border-radius: 10px;
  box-shadow: 0px 4px 20px var(--m-picker-default-options-boxShadow-color,${"rgba(89,89,89,0.122)"});
  background-color: var(--m-picker-default-options-backgroundColor,${"white"});
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
:host .options::-webkit-scrollbar{
  display: none;
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
  background-color: var(--m-picker-item-backgroundColor,${"white"});
  color: var(--m-picker-item-color,${"black"});
  transition: all 0.1s;
}
:host .options .picker-item:not([disabled=true]):hover,
::slotted(m-picker-item):hover {
  filter: brightness(90%);
}
:host .options .picker-item[selected=true],
::slotted(m-picker-item[selected=true]) {
  background-color: var(--m-picker-item-selected-backgroundColor,${"#2EA2F9"});
  color: var(--m-picker-item-selected-color,${"white"});
}
:host .options .picker-item[disabled=true],
::slotted(m-picker-item[disabled=true]) {
  background-color: var(--m-picker-item-disabled-backgroundColor,${"white"});
  color: var(--m-picker-item-disabled-color,${"gray"});
  pointer-events: none;
}
:host([disabled=true]) {
  pointer-events: none;
}
:host([disabled=true]) .view {
  background-color: var(--m-picker-disabled-view-backgroundColor,${"#EFEFEF"});
}
:host([disabled=true]) .view .text {
  color: var(--m-picker-disabled-view-color,${"#BABABA"});
}
:host(:not(:host([disabled=true]))[focused=true]) .view {
  outline: 2px solid var(--m-picker-focused-outline-color,${"#2ea1f9d6"});
}
:host(:not(:host([disabled=true]))[focused=true]) .view .label {
  color: var(--m-picker-focused-label-color,${"#2EA2F9"});
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
}`;
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
        </div>`;
const props = {
    disabled: false,
    label: "",
    value: "",
};
export class Picker extends useElement({
    name,
    style,
    template,
    props,
    syncProps: ["disabled", "label", "value"],
    dispatch: {
        propChanged(key, value) {
            const view = this.shadowRoot?.querySelector(".view");
            const text = this.shadowRoot?.querySelector(".view .text");
            switch (key) {
                case "value": {
                    const selectedElement = select(this, "m-picker-item", {
                        value: value,
                    });
                    const allItems = select(this, "m-picker-item", {
                        selected: true
                    });
                    if (selectedElement.length) {
                        allItems.forEach(i => i.selected = false);
                        text.textContent = selectedElement[0].textContent;
                        if (text.textContent != '')
                            view.setAttribute("has_text", "true");
                        else
                            view.removeAttribute('has_text');
                        selectedElement[0].selected = true;
                    }
                    break;
                }
            }
        },
        connected() {
            const label = this.label;
            const view = this.shadowRoot?.querySelector(".view");
            const labelArea = view.querySelector(".label");
            labelArea.textContent = label;
            const items = this?.querySelectorAll("m-picker-item");
            items.forEach(i => {
                i.addEventListener("click", () => {
                    if (this.value != i.value) {
                        const selectedItems = select(this, "m-picker-item", {
                            selected: true
                        });
                        selectedItems.forEach(i => i.selected = false);
                        this.value = i.value;
                        this.dispatchEvent(new Event('change'));
                    }
                });
            });
            setTimeout(() => {
                const defaultValue = this.value;
                if (defaultValue) {
                    const defaultSelected = select(this, "m-picker-item", {
                        value: defaultValue
                    });
                    if (defaultSelected)
                        defaultSelected[0].selected = true;
                    const text = this.shadowRoot?.querySelector(".view .text");
                    text.textContent = defaultSelected[0].textContent;
                    if (text.textContent != '')
                        view.setAttribute("has_text", "true");
                    else
                        view.removeAttribute('has_text');
                }
            });
        }
    },
    setup(shadowRoot) {
        const view = shadowRoot.querySelector(".view");
        const options = shadowRoot.querySelector(".options");
        const computeDirection = () => {
            const direction = {
                top: view.offsetTop,
                bottom: window.innerHeight - view.getBoundingClientRect().top - view.getBoundingClientRect().height
            };
            if (options.offsetHeight >= direction.bottom) {
                options.setAttribute("direction", "north");
            }
            else {
                options.setAttribute("direction", "sourth");
            }
        };
        computeDirection();
        view.addEventListener("click", () => {
            const status = this.getAttribute("focused") || "false";
            this.setAttribute("focused", status === 'false' ? "true" : "false");
            computeDirection();
        });
        let is_mouseover = false;
        this.addEventListener("mouseover", () => {
            is_mouseover = true;
        });
        this.addEventListener("mouseleave", () => {
            is_mouseover = false;
        });
        window.addEventListener("click", () => {
            if (!is_mouseover) {
                this.setAttribute("focused", "false");
            }
        });
        return {};
    }
}) {
}
Picker.defineElement();
import 'vue';
const itemName = 'm-picker-item';
const itemTemplate = `<slot></slot>`;
const itemStyle = `:host {
  white-space: nowrap;
  width: 100%;
  padding: 10px 20px;
  font-size: 13px;
  box-sizing: border-box;
  background-color: var(--m-picker-item-backgroundColor,${"white"});
  color: var(--m-picker-item-color,${"black"});
  transition: all 0.1s;
  display: block;
}
:host(:hover) {
  filter: brightness(90%);
}
:host([selected=true]) {
  background-color: var(--m-picker-item-selected-backgroundColor,${"#2EA2F9"});
  color: var(--m-picker-item-selected-color,${"white"});
}
:host([disabled=true]) {
  background-color: var(--m-picker-item-disabled-backgroundColor,${"white"});
  color: var(--m-picker-item-disabled-color,${"gray"});
  pointer-events: none;
}`;
const itemProps = {
    disabled: false,
    selected: false,
    value: ""
};
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
                        const picker = this.parentElement;
                        picker.value = this.value;
                    }
                    break;
                }
            }
        }
    },
    setup() {
        return {};
    }
}) {
}
PickerItem.defineElement();
import 'vue';
