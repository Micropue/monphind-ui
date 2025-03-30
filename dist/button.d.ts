declare const name = "m-button";
type Props = {
    type: "" | "outlined" | "text";
    disabled: boolean;
    value: string;
};
declare const Button_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Button extends Button_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
