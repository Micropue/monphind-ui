import { useElement } from "./core/element";
const name = 'm-circular-progress';
const raduis = 160;
const circumference = raduis * 2 * Math.PI;
const style = `:host {
    display: block;
    width: 40px;
    height: 40px;
    color: var(--m-circular-progress-fillColor,${"#2EA2F9"});
}
:host svg{
    width: inherit;
    height: inherit;
    color: currentColor;
}
:host svg ellipse {
    stroke: currentColor;
    stroke-dasharray: ${circumference}px;
    stroke-dashoffset: var(--dashoffset,${circumference}px);
    stroke-linecap: round;
}
:host([unknown=true]) svg {
    animation: unknown-value 1s linear infinite;
}
:host([unknown=true]) svg ellipse {
    stroke-dasharray: ${circumference}px;
    stroke-linecap: round;
    stroke-dashoffset: 314;
}
@keyframes unknown-value {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`;
const template = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <ellipse style="fill: none; stroke-width: 30px; " cx="250" cy="250" rx="160"
                ry="160"></ellipse>
            </svg>`;
const props = {
    unknown: false,
    value: 100,
    max: 100
};
export class CircularProgress extends useElement({
    name,
    template,
    style,
    props,
    syncProps: ["unknown", "value"],
    dispatch: {
        propChanged(key, value) {
            if (key === 'value') {
                const max = this.max;
                const svg = this.shadowRoot?.querySelector("svg");
                svg?.style.setProperty("--dashoffset", String(circumference * (1 - Number(value) / max)));
            }
        }
    },
    setup(shadowRoot) {
        const value = this.value;
        const max = this.max;
        const svg = shadowRoot?.querySelector("svg");
        svg?.style.setProperty("--dashoffset", String(circumference * (1 - value / max)));
        return {};
    }
}) {
}
CircularProgress.defineElement();
import 'vue';
