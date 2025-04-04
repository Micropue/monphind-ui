declare const name = "m-slider";
declare const props: {
    disabled: boolean;
    labeled: boolean;
    min: number;
    max: number;
    value: number;
    step: number;
};
type Props = typeof props;
declare const Slider_base: {
    new (): {
        disabled: boolean;
        labeled: boolean;
        min: number;
        max: number;
        value: number;
        step: number;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Slider extends Slider_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
