import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-linear-progress'
const style = `:host {
    background-color: var(--m-linear-progress-thumb-color,${Theme.linear_progress_thumb_color});
    height: 3px;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display:block;
}
:host .value {
    background-color: var(--m-linear-progress-value-color,${Theme.linear_progress_value_color});
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 10px;
}
:host([unknown=true]) .value {
    width: 30%;
    animation: unknow-value cubic-bezier(0, 0, 0, 0) 3s infinite normal;
}
@keyframes unknow-value {
    0% {
        left: -30%;
        width: 30%;
    }
    50% {
        width: 10%;
    }
    100% {
        width: 30%;
        left: 130%;
    }
}`
const template = `<div class="value"></div>`
const props = {
    unknown: false,
    value: 0,
    max: 100,
}
type Props = typeof props
export class LinearProgress extends useElement<{}, Props>({
    name,
    style,
    template,
    props,
    syncProps: ["value"],
    dispatch: {
        propChanged(key, value) {
            if (key == "value") {
                const newValue = value || 0
                const max = this.max
                let computed = Number(newValue) / max * 100
                if (computed > 100) computed = 100
                if (computed < 0) computed = 0
                const contentValue = this.shadowRoot?.querySelector(".value") as HTMLElement & Props
                contentValue.style.width = `${computed}%`
            }
        }
    },
    setup(shadowRoot) {
        const value = this.value || 0
        const max = this.max || 100
        let computed = value / max * 100
        if (computed > 100) computed = 100
        if (computed < 0) computed = 0
        const contentValue = shadowRoot?.querySelector(".value") as HTMLElement & Props
        contentValue.style.width = `${computed}%`
        return {}
    }
}) { }
LinearProgress.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}