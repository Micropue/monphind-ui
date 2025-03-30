type Prop = string | number | boolean;
interface Config<M, P extends {
    [name: string]: Prop;
}> {
    name: string;
    template?: string;
    style?: string;
    props?: P;
    dispatch?: {
        propChanged?(key: keyof P, value: Prop): void;
    };
    setup?(this: HTMLElement, shadowRoot?: ShadowRoot): M | undefined;
}
export declare const useElement: <M, P extends {
    [name: string]: Prop;
}>(config: Config<M, P>) => {
    new (): HTMLElement & P & M;
    readonly defineElement: () => void;
    prototype: HTMLElement & P & M;
};
export {};
