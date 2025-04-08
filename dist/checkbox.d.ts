declare const name = "m-checkbox";
type Props = {
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
};
declare const Checkbox_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Checkbox extends Checkbox_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
