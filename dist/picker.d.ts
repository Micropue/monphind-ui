declare const name = "m-picker";
declare const props: {
    disabled: boolean;
    label: string;
    value: string;
};
type Props = typeof props;
declare const Picker_base: {
    new (): {
        disabled: boolean;
        label: string;
        value: string;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class Picker extends Picker_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
declare const itemName = "m-picker-item";
declare const itemProps: {
    disabled: boolean;
    selected: boolean;
    value: string;
};
type ItemProps = typeof itemProps;
declare const PickerItem_base: {
    new (): {
        disabled: boolean;
        selected: boolean;
        value: string;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class PickerItem extends PickerItem_base {
}
import 'vue';
declare module 'vue' {
    interface GlobalComponents {
        [itemName]: Expand<ItemProps>;
    }
}
export {};
