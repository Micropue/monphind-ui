declare const name = "m-radio";
type Props = {
    name: string;
    value: string;
    checked: boolean;
    disabled: boolean;
};
declare const Radio_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Radio extends Radio_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
