export declare const select: <P>(parent: Element, selector: string, attribute: {
    [name: string]: string | number | boolean | "";
}) => Array<HTMLElement & P>;
