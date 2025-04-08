export const select = (parent, selector, attribute) => {
    const element = parent.querySelectorAll(selector);
    const rst = new Array();
    outer: for (const value of element) {
        for (const i in attribute) {
            if (value?.[i] != attribute[i]) {
                continue outer;
            }
        }
        rst.push(value);
    }
    return rst;
};
