//元素定义：元素名字，元素的模板，元素样式，元素方法，元素实现
type Prop = string | number | boolean
interface Config<M, P extends {
    [name: string]: Prop
}> {
    name: string;
    template?: string;
    style?: string;
    props?: P;
    setup?(shadowRoot: ShadowRoot): M;
}
const baseStyle = `
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
`
const setStyle = (shadowRoot: ShadowRoot, style?: string): void => {
    try {
        {
            const sheet = new CSSStyleSheet()
            sheet.replaceSync(baseStyle)
            shadowRoot.adoptedStyleSheets.push(sheet)
        }
        const sheet = new CSSStyleSheet()
        sheet.replaceSync(style ?? "")
        shadowRoot.adoptedStyleSheets.push(sheet)
    } catch {
        {
            const styleEle = document.createElement("style")
            styleEle.textContent = baseStyle
            shadowRoot.insertBefore(styleEle, shadowRoot.firstChild)
        }
        const styleEle = document.createElement("style")
        styleEle.textContent = style ?? ""
        shadowRoot.insertBefore(styleEle, shadowRoot.firstChild)
    }
}
export const useElement = <M, P extends { [name: string]: Prop }>(config: Config<M, P>): {
    readonly defineElement: (name: string) => void
    prototype: HTMLElement
} => {
    class InitElement extends HTMLElement {
        [key: string]: any
        /**
         * 定义元素 ✓
         * 模板插入shadowRoot ✓
         * 构建样式 ✓
         * 动态更新属性：「所有的html属性都要允许元素调用」 ✓
         * 内部实现 ✓
         * 内部方法「所有的内部方法都要允许元素直接调用」✓
         */
        static defineElement(name: string) {
            customElements.define(name, this)
        }
        #props: P = {} as P
        constructor() {
            super()
            const shadowRoot = this.attachShadow({ mode: "open" })
            shadowRoot.innerHTML = config.template ?? ""
            setStyle(shadowRoot, config.style)
            const { props } = config || { props: {} }
            for (const key in props) {
                Object.defineProperty(this, key, {
                    get: () => {
                        return this.#props?.[key]
                    },
                    set: (value) => {
                        const attr = this.getAttribute(key)
                        const lowerCaseProp = key.toLowerCase()
                        if (attr) {
                            this.setAttribute(lowerCaseProp, value)
                        }
                        this.#props[key] = value
                    }
                })
            }
            const exposes: M = config?.setup?.call<typeof this, any[], M>(this, [shadowRoot]) || {} as M
            for (const key in exposes) {
                const descriptor = Object.getOwnPropertyDescriptor(exposes, key) as PropertyDescriptor
                Object.defineProperty(this, key, descriptor)
            }
        }
        attributeChangedCallback(key: string, oldValue: unknown, newValue: string | null) {
            this[key] = newValue ?? ""
        }
    }
    return InitElement
}