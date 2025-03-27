type Prop = string | number | boolean;
/**
 * Prop需预先定义类型，否则返回时会出错。
 */
interface Config<M, P extends {
    [name: string]: Prop;
}> {
    name: string;
    template?: string;
    style?: string;
    props?: P;
    setup?(shadowRoot: ShadowRoot): M;
}
export declare const useElement: <M, P extends {
    [name: string]: Prop;
}>(config: Config<M, P>) => {
    new (): HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export {};
