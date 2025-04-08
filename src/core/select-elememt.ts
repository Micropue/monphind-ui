/**
 * 返回一个数组包含应用条件的元素
 * @param parent 父元素
 * @param selector 元素选择器
 * @param attribute 必包含属性
 */
export const select = <P>(parent: Element, selector: string, attribute: {
    [name: string]: string | number | boolean | ""
}): Array<HTMLElement & P> => {
    const element = parent.querySelectorAll<P & HTMLElement>(selector)
    const rst: (HTMLElement & P)[] = new Array()
    outer: for (const value of element) {
        for (const i in attribute) {
            if ((value as any)?.[i] != attribute[i]) {
                continue outer
            }
        }
        rst.push(value)
    }
    return rst
}