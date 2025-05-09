declare const name = "m-textarea";
declare const props: {
    disabled: boolean;
    label: string;
    value: string;
    count: number;
    readonly: boolean;
    adaptive: boolean;
    error: boolean;
};
type Props = typeof props;
declare const Textarea_base: {
    new (): {
        disabled: boolean;
        label: string;
        value: string;
        count: number;
        readonly: boolean;
        adaptive: boolean;
        error: boolean;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Textarea extends Textarea_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
