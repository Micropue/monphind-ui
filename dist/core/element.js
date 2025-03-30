const baseStyle = `
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
`;
const setStyle = (shadowRoot, style) => {
    try {
        const initbase = () => {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(baseStyle);
            shadowRoot.adoptedStyleSheets.push(sheet);
        };
        initbase();
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(style ?? "");
        shadowRoot.adoptedStyleSheets.push(sheet);
    }
    catch {
        const initbase = () => {
            const styleEle = document.createElement("style");
            styleEle.textContent = baseStyle;
            shadowRoot.insertBefore(styleEle, shadowRoot.firstChild);
        };
        initbase();
        const styleEle = document.createElement("style");
        styleEle.textContent = style ?? "";
        shadowRoot.insertBefore(styleEle, shadowRoot.firstChild);
    }
};
export const useElement = (config) => {
    class InitElement extends HTMLElement {
        static observedAttributes = Object.keys(config.props || {});
        static defineElement() {
            customElements.define(config.name, this);
        }
        #props = {};
        #propsType = (() => {
            const types = {};
            for (const key in config.props) {
                types[key] = typeof config.props[key];
            }
            return types;
        })();
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.innerHTML = config.template ?? "";
            setStyle(shadowRoot, config.style);
            const { props } = config || { props: {} };
            this.#props = props;
            for (const key in props) {
                Object.defineProperty(this, key, {
                    get: () => {
                        return this.#props?.[key];
                    },
                    set: (value) => {
                        const attr = this.getAttribute(key);
                        let _value;
                        switch (this.#propsType[key]) {
                            case 'number':
                                _value = Number(value);
                                break;
                            case 'boolean':
                                _value = value == "true";
                                break;
                            case 'string':
                                _value = String(value);
                                break;
                            default:
                                _value = String(value);
                                break;
                        }
                        this.#props[key] = _value;
                        config?.dispatch?.propChanged?.call?.(this, key, value);
                        if (attr == value)
                            return;
                        const lowerCaseProp = key.toLowerCase();
                        this.setAttribute(lowerCaseProp, value);
                    }
                });
            }
            const exposes = config?.setup?.call(this, [shadowRoot]) || {};
            for (const key in exposes) {
                const descriptor = Object.getOwnPropertyDescriptor(exposes, key);
                Object.defineProperty(this, key, descriptor);
            }
        }
        attributeChangedCallback(key, oldValue, newValue) {
            this[key] = newValue ?? "";
        }
    }
    return InitElement;
};
