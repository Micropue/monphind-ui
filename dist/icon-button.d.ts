declare const name = "m-icon-button";
type Props = {
    disabled: boolean;
    type: "" | "outlined" | "text";
};
declare const IconButton_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class IconButton extends IconButton_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
