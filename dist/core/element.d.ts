type Prop = string | number | boolean;
interface Config<M, P extends {
    [name: string]: Prop;
}> {
    name: string;
    template?: string;
    style?: string;
    props?: P;
    syncProps?: (keyof P)[];
    dispatch?: {
        propChanged?(this: HTMLElement & P, key: keyof P, value: Prop): void;
    };
    setup?(this: HTMLElement & P, shadowRoot?: ShadowRoot): M | undefined;
}
export declare const useElement: <M, P extends {
    [name: string]: Prop;
}>(config: Config<M, P>) => {
    new (): P & M & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export {};
