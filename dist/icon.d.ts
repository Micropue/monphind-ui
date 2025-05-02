declare const name = "m-icon";
declare const builtInIcons: {
    search: string;
    home: string;
    menu: string;
    close: string;
    settings: string;
    done: string;
    favorite: string;
    add: string;
    delete: string;
    star: string;
    arrow_back: string;
    arrow_forward: string;
    arrow_upward: string;
    array_downward: string;
    refresh: string;
    more: string;
    download: string;
    upload: string;
    token: string;
    user: string;
    password: string;
    mail: string;
    github: string;
    sun: string;
    moon: string;
};
interface Props {
    [name: string]: string;
    name: keyof typeof builtInIcons | "";
}
declare const Icon_base: {
    new (): Props & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Icon extends Icon_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
export {};
