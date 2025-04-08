declare const name = "m-segmented-button";
declare const props: {
    value: string;
    index: number;
};
type Props = typeof props;
declare const SegmentedButton_base: {
    new (): {
        value: string;
        index: number;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class SegmentedButton extends SegmentedButton_base {
}
declare const itemName = "m-segmented-button-item";
declare const itemProps: {
    selected: boolean;
    value: string;
    disabled: boolean;
};
type itemProps = typeof itemProps;
declare const SegmentedButtonItem_base: {
    new (): {
        selected: boolean;
        value: string;
        disabled: boolean;
    } & HTMLElement;
    readonly defineElement: () => void;
    prototype: HTMLElement;
};
export declare class SegmentedButtonItem extends SegmentedButtonItem_base {
}
import 'vue';
import { Expand } from "./core/expand";
declare module 'vue' {
    interface GlobalComponents {
        [name]: Expand<Props>;
    }
}
declare module 'vue' {
    interface GlobalComponents {
        [itemName]: Expand<itemProps>;
    }
}
export {};
