import { useElement } from "./core/element";
import { select } from "./core/select-elememt";
const name = 'm-radio';
const template = `
<div class="radio">
<div class="checked"></div>
</div>
<slot></slot>`;
const style = `:host {
display: inline-flex;
align-items: center;
}
:host(:hover) {
cursor: pointer;
filter: brightness(90%);
}
:host slot {
transition: color 0.3s;
}
:host .radio {
width: 18px;
height: 18px;
border: 2px solid var(--m-radio-borderColor,${"black"});
margin-right: 10px;
border-radius: 100%;
transition: color 0.3s;
position: relative;
}
:host .radio .checked {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
border-radius: 100%;
margin: auto;
width: 14px;
height: 14px;
background-color: var(--m-radio-checked-color,${"#2EA2F9"});
transform: scale(0.8);
opacity: 0;
transition: transform 0.3s, opacity 0.3s;
}
:host([checked=true]) .radio {
border: 2px solid var(--m-radio-checked-color,${"#2EA2F9"});
}
:host([checked=true]) .radio .checked {
transform: scale(1);
opacity: 1;
}
:host([checked=true]) slot {
color: var(--m-radio-checked-color,${"#2EA2F9"});
}
:host([disabled=true]) {
pointer-events: none;
}
:host([disabled=true]) .radio {
border: 2px solid var(--m-radio-disabled-color,${"#BABABA"});
}
:host([disabled=true]) .radio .checked {
background-color: var(--m-radio-disabled-color,${"#BABABA"});
}
:host([disabled=true]) slot {
color: var(--m-radio-disabled-color,${"#BABABA"}) !important;
}`;
const props = {
    name: "",
    value: "",
    checked: false,
    disabled: false
};
function eachChange() {
    const _name = this.name;
    if (_name) {
        const allHasNameEle = select(document.body, name, {
            name: _name
        });
        allHasNameEle.forEach(item => {
            item.checked = false;
            if (item != this)
                item.dispatchEvent(new Event("change"));
        });
    }
    this.dispatchEvent(new Event("change"));
    this.checked = true;
}
export class Radio extends useElement({
    name,
    template,
    style,
    props,
    syncProps: [
        "name",
        "checked",
        "disabled",
        "value"
    ],
    dispatch: {
        propChanged(key, value) {
            if (key !== "value")
                return;
            const _name = this.name;
            const eachEles = select(document.body, name, {
                name: _name
            });
            eachEles.forEach(item => {
                item.checked = false;
            });
            const newSelect = select(document.body, name, {
                name: _name,
                value: value
            })[0];
            newSelect.checked = true;
        }
    },
    setup() {
        this.addEventListener("click", () => {
            eachChange.apply(this);
        });
        return {};
    }
}) {
}
Radio.defineElement();
import 'vue';
