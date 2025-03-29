type Props = {
    type: "" | "outlined" | "text";
    disabled: boolean;
    value: string;
};
declare const Button_base: {
    new (): HTMLElement & Props;
    readonly defineElement: () => void;
    prototype: HTMLElement & Props;
};
export declare class Button extends Button_base {
}
export {};
