type Prop = string | number | boolean | null;
type CommonThis<P> = HTMLElement & P;
interface Config<M, P extends {
    [name: string]: Prop;
}> {
    name: string;
    template?: string;
    style?: string;
    props?: P;
    syncProps?: (keyof P)[];
    dispatch?: {
        propChanged?(this: CommonThis<P>, key: keyof P, value: Prop): void;
        connected?(this: CommonThis<P>): void;
        disconnected?(this: CommonThis<P>): void;
    };
    setup?(this: HTMLElement & P, shadowRoot: ShadowRoot): M | undefined;
}
export declare const useElement: <M, P extends {
    [name: string]: Prop;
}>(config: Config<M, P>) => {
    new (): P & M & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export {};
