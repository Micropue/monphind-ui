declare const name = "m-switch";
declare const props: {
    disabled: boolean;
    checked: boolean;
};
type Props = typeof props;
declare const Switch_base: {
    new (): {
        disabled: boolean;
        checked: boolean;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Switch extends Switch_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
