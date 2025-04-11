declare const name = "m-linear-progress";
declare const props: {
    unknow: boolean;
    value: number;
    max: number;
};
type Props = typeof props;
declare const LinearProgress_base: {
    new (): {
        unknow: boolean;
        value: number;
        max: number;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class LinearProgress extends LinearProgress_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
