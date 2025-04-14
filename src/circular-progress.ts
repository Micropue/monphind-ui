import { useElement } from "./core/element"
import Theme from "./core/default-theme"
const name = 'm-circular-progress'
const style = `:host {
  display: block;
  width: 40px;
  height: 40px;
  color: var(--m-theme-color);
}
:host svg{
  width: inherit;
  height: inherit;
  color: currentColor;
}
:host svg ellipse {
  stroke: currentColor;
  stroke-dasharray: 1004.8px;
  stroke-dashoffset: 10px;
}
:host([unknown=true]) svg {
  animation: unknown-value 1s linear infinite;
}
:host([unknown=true]) svg ellipse {
  stroke-dasharray: 1004.8px;
  stroke-dashoffset: 314;
}
@keyframes unknown-value {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`
const template = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <ellipse style="fill: none; stroke-width: 30px; " cx="250" cy="250" rx="160"
                ry="160"></ellipse>
        </svg>`
const props = {
    unknown:false
}
type Props = typeof props
export class CircularProgress extends useElement({
    name,
    template,
    style,
    props,
    syncProps:["unknown"]
}) { }

CircularProgress.defineElement()

//@ts-ignore
import 'vue'
import { Expand } from "./core/expand"
//@ts-ignore
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}