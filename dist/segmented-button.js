import { useElement } from "./core/element";
import debounce from "./core/debounce";
import { select } from "./core/select-elememt";
const name = 'm-segmented-button';
const style = `:host {
    width: -moz-fit-content;
    display:block;
    width: fit-content;
    border-radius: 10000000px;
    padding: 5px;
    position: relative;
    background-color: var(--m-segmented-button-backgroundColor,${"white"});
}
:host .selected-slider {
    position: absolute;
    top: 0;
    left: 5px;
    bottom: 0;
    margin: auto;
    height: -moz-fit-content;
    height: fit-content;
    padding: 10px 0;
    font-size: 14px;
    border-radius: 10000000px;
    z-index: 1;
    background-color: var(--m-segmented-button-slider-backgroundColor,${"#2EA2F9"});
    color: white;
    transition: left 0.3s, box-shadow 0.3s, transform 0.2s, width 0.3s;
    cursor: pointer;
    text-align:center;
    white-space:nowrap;
    display:none;
}
:host .selected-slider:hover {
    box-shadow: 0px 4px 20px var(--m-segmented-button-slider-hover-boxShadowColor,${"#2ea1f9d6"});
}
:host .selected-slider:active {
    transform: scale(0.96);
}
:host slot {
    display: flex;
    width: -moz-fit-content;
    width: 100%;
}
`;
const template = `
        <div class="selected-slider"></div>
        <slot></slot>`;
const props = {
    value: "",
    index: 0
};
export class SegmentedButton extends useElement({
    name, style, template, syncProps: ["value"], props, dispatch: {
        propChanged(key, value) {
            if (key === 'value') {
                const allItems = this.querySelectorAll("m-segmented-button-item");
                for (const i in allItems) {
                    if (allItems[i].value == value) {
                        this.index = Number(i);
                        break;
                    }
                }
                const { left, width } = allItems[this.index].getBoundingClientRect();
                const { offsetLeft } = this;
                const slider = this.shadowRoot?.querySelector(".selected-slider");
                slider.style.left = `${left - offsetLeft}px`;
                slider.style.width = `${width}px`;
                slider.innerHTML = allItems[this.index].innerHTML;
            }
        },
        connected() {
            let totalLeft = this.offsetLeft;
            let totalWidth = this.getBoundingClientRect().width;
            const slider = this.shadowRoot?.querySelector(".selected-slider");
            const defaultTransition = getComputedStyle(slider).transition;
            const selected = select(this, "m-segmented-button-item", { selected: true });
            if (selected[0]) {
                const allItems = this.querySelectorAll("m-segmented-button-item");
                for (let i = 0; i < allItems.length; i++) {
                    if (allItems[i] === selected[0]) {
                        this.index = i;
                        break;
                    }
                }
                const html = selected[0].innerHTML;
                const value = selected[0].value || "";
                const { width, left } = selected[0].getBoundingClientRect();
                const realLeft = left - totalLeft;
                slider.style.left = `${realLeft}px`;
                slider.style.width = `${width}px`;
                slider.innerHTML = html;
                this.value = value;
            }
            else {
                let usedIndex = 0;
                const allItems = this.querySelectorAll("m-segmented-button-item");
                if (allItems[usedIndex].disabled === true) {
                    usedIndex = NaN;
                    for (const i in allItems) {
                        if (allItems[i].disabled === false) {
                            usedIndex = Number(i);
                            break;
                        }
                        else
                            continue;
                    }
                }
                if (usedIndex.toString() === 'NaN')
                    throw new Error("The default selection is misinitialized. Be sure to have at least one non-disabled element in the group list.");
                const html = allItems[usedIndex].innerHTML;
                const value = allItems[usedIndex].value || "";
                const { width, left } = allItems[usedIndex].getBoundingClientRect();
                slider.style.left = `${left - totalLeft}px`;
                slider.style.width = `${width}px`;
                slider.innerHTML = html;
                this.value = value;
                this.index = usedIndex;
            }
            const totalItems = this.querySelectorAll("m-segmented-button-item");
            for (let i = 0; i < totalItems.length; i++) {
                totalItems[i].addEventListener("click", () => {
                    if (i === this.index)
                        return;
                    this.index = i;
                    const { value, innerHTML } = totalItems[i];
                    const { width, left } = totalItems[i].getBoundingClientRect();
                    slider.style.width = `${width}px`;
                    slider.style.left = `${left - totalLeft}px`;
                    this.value = value;
                    slider.innerHTML = innerHTML;
                    this.dispatchEvent(new Event('change'));
                });
            }
            const sliderVar = debounce((defaultTransition, slider) => {
                slider.style.transition = defaultTransition;
            }, 300);
            const robserver = new ResizeObserver((entries) => {
                const newWidth = entries[0].contentRect.width;
                if (newWidth != totalWidth) {
                    totalWidth = newWidth;
                    totalLeft = this.offsetLeft;
                    const selected = {
                        newWidth: totalItems[this.index].getBoundingClientRect().width,
                        newLeft: totalItems[this.index].getBoundingClientRect().left
                    };
                    slider.style.transition = 'none';
                    slider.style.width = `${selected.newWidth}px`;
                    slider.style.left = `${selected.newLeft - totalLeft}px`;
                    sliderVar(defaultTransition, slider);
                }
                else
                    return;
            });
            robserver.observe(this);
            slider.style.display = 'initial';
        }
    },
    setup() {
        return {};
    }
}) {
}
SegmentedButton.defineElement();
const itemName = 'm-segmented-button-item';
const itemStyle = `:host {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 10000000px;
  cursor: pointer;
  transition: background-color 0.3s;
  width:100%;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
}
:host slot{
    white-space:nowrap;
}
:host(:hover) {
  background-color: var(--m-segmented-button-item-hover-backgroundColor,${"#F2F2F2"});
}
:host(:active) {
  background-color: var(--m-segmented-button-item-active-backgroundColor,${"#e2e2e2"});
}
:host([disabled=true]){
  pointer-events:none;
  color:gray;
}`;
const itemTemplate = `<slot></slot>`;
const itemProps = {
    selected: false,
    value: "",
    disabled: false
};
export class SegmentedButtonItem extends useElement({
    name: itemName,
    props: itemProps,
    style: itemStyle,
    template: itemTemplate,
    syncProps: ["disabled"],
}) {
}
SegmentedButtonItem.defineElement();
import 'vue';
