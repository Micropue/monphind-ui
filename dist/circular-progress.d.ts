declare const name = "m-circular-progress";
declare const props: {
    unknown: boolean;
    value: number;
    max: number;
};
type Props = typeof props;
declare const CircularProgress_base: {
    new (): {
        unknown: boolean;
        value: number;
        max: number;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class CircularProgress extends CircularProgress_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
