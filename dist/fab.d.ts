declare const name = "m-fab";
type Props = {
    disabled: boolean;
};
declare const FAB_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class FAB extends FAB_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
