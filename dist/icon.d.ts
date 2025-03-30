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
};
interface Props {
    [name: string]: string;
    name: keyof typeof builtInIcons | "";
}
declare const Icon_base: {
    new (): HTMLElement & Props;
    readonly defineElement: () => void;
    prototype: HTMLElement & Props;
};
export declare class Icon extends Icon_base {
}
declare module 'vue' {
    interface GlobalComponents {
    }
}
declare module 'vue' {
    interface GlobalComponents {
    }
}
export {};
