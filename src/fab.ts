import { useElement } from "./core/element"
import Theme from "./core/default-theme"

const name = 'm-fab'
const template = `<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>`
const style = `:host {
display: inline-flex;
align-items: center;
background-color: var(--m-fab-backgroundColor,${Theme.fab_backgroundColor});
border-radius: 15px;
padding: 5px;
font-size: 14px;
transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}
slot{
margin: 10px;
display: flex;
}
:host(:not([disabled=true]):hover) {
transform: translateY(-3px);
cursor: pointer;
background-color: var(--m-fab-hover-backgroundColor,${Theme.fab_hover_backgroundColor});
box-shadow: 0px 4px 15px var(--m-fab-hover-boxShadowColor,${Theme.fab_hover_boxShadowColor});
}
:host(:not([disabled=true]):active) {
transform: scale(0.95);
background-color: var(--m-fab-active-backgroundColor,${Theme.fab_active_backgroundColor});
color: var(--m-fab-active-color,${Theme.fab_active_color});
box-shadow: 0px 4px 20px var(--m-fab-active-boxShadowColor,${Theme.fab_active_boxShadowColor});
}
:host([disabled=true]){
background-color:var(--m-fab-disabled-backgroundColor,${Theme.fab_disabled_backgroundColor});
color:var(--m-fab-disabled-color,${Theme.fab_disabled_textColor});
pointer-events:none;
}
`

type Props = {
    disabled: boolean
}
const props: Props = {
    disabled: false
}
export class FAB extends useElement({
    name,
    style,
    template,
    props,
    syncProps:[
        "disabled"
    ],
}) { }
FAB.defineElement()


//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}