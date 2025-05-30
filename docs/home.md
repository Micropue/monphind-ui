## 欢迎使用**monphind**

**monphind**是基于**Web Components API**开发的响应式轻量级前端组件库，正因为它是**Web Components**，所以它不支持自闭和标签写法。

```html
<m-button /> <!--❌不支持此写法-->
<m-button></m-button> <!-- ✅ -->
```

如果你完全不了解**Web Components**，可以查看MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components 。

**monphind**可以在零依赖环境下运行，只需要引入一个`JavaScript`文件就可以支持样式、动态创建组件。

```js
//动态创建组件
const button = document.createElement('m-button')
button.value = '按钮'
document.body.appendChild(button)
```

或

```js
const button = new Button()
button.value = '按钮'
document.body.appendChild(button)
```

## 动态属性

**monphind**继承于原生`HTMLElement`，所以他支持所有的原生API。并且部分组件支持如`oninput`事件、`onchange`事件等。

在文档属性表格中标记为`HTML同步/DOM同步：是`表示该属性支持`html`与元素属性同步：

```js
const input = document.querySelector('m-input')
input.type = 'text'
```

此时`html`会同步为

```html
<m-input type="text"></m-input>
```

## 框架支持

支持`v-model`

```vue
<template>
	<m-input v-model="input"></m-input>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>
```

在使用前应在`vite.config.js`中配置：

```js
vue({
  template: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('m-')
    }
  }
})
```

## 自定义样式

由于组件内部使用了`shadowRoot`，影子元素：https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM ，如果你只是修改组件的外部样式而不是修改内部样式如：

```css
m-button[type="text"]{
  background-color: red
}
```

如果你需要修改内部的样式（如文本框的`label`占位文本样式），那么则需要其他选择器来修改

```css
m-input::part(.label){
  color: red;
}
```

你也可以通过css变量来修改所有组件的颜色，css变量会同步所有的组件，每个组件的变量将在组件文档中标明。