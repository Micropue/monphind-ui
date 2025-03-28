type Props = {
    type: "" | "outlined" | "text";
    disabled: boolean;
};
declare const Button_base: {
    new (): HTMLElement & Props;
    readonly defineElement: () => void;
    prototype: HTMLElement & Props;
};
export declare class Button extends Button_base {
}
export {};
