declare const name = "m-input";
type Props = {
    disabled: boolean;
    label: string;
    value: string;
    error: boolean;
    maxlength: number;
    readonly: boolean;
    count: number;
    type: "text" | "password" | "number";
    min: number;
    max: number;
};
declare const Input_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Input extends Input_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
