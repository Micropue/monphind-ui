## 安装

通过npm安装

```bash
npm i monphind-ui
```

通过CDN引用

```html
<script src="https://unpkg.com/monphind-ui@1.14.0/dist/main.js" type="module"></script><!--模块引入-->
<script src="https://unpkg.com/monphind-ui@1.14.0/dist/monphind.min.js"></script><!--直接引入-->
```

完全引入

```js
import 'monphind-ui'
```

按需引入（全部组件：）

```js
export * from './button';
export * from './icon';
export * from './icon-button';
export * from './fab';
export * from './checkbox';
export * from './radio';
export * from './slider';
export * from './segmented-button';
export * from './linear-progress';
export * from './circular-progress';
export * from './switch';
export * from './input';
export * from './textarea';
export * from './picker';
export * from './page';
```

## 在vue中使用

在`main.js`中直接引入即可。

```js
import 'monphind-ui' //全部引入（无需在组件中单独引入）
```

在组件中按需引入

```js
import { Button } from 'monphind-ui'
```