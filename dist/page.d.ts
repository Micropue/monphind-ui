declare const name = "m-page";
type Props = {
    theme: "light" | "night";
};
declare const Page_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Page extends Page_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
