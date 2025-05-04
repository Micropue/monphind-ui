# m-input

输入框，可用于替代原版输入框。

```html
<m-input label="请输入内容"></m-input>
```

不同的输入框类型

```html
<m-input type="text"></m-input>
<m-input type="password"></m-input>
```

> [!NOTE]
>
> 在不设置`type`属性时，默认为`text`类型

禁用输入框

```html
<m-input disabled="true"></m-input>
```

只读

```html
<m-input readonly="true"></m-input>
```

> [!NOTE]
>
> 只读只会影响输入框的输入，不影响常规的聚焦。如果想要禁用输入框，请使用`disabled=true`来防止聚焦。

设置`maxlength`属性来约束输入长度

```html
<m-input type="text" maxlength="1000"></m-input>
```

默认值为`-1`，为不限制。

调用元素的`count`属性返回当前输入长度

```js
const input = document.querySelector('m-input')
console.log(input.count)
```

事件监听

> [!NOTE]
>
> 通过底层`input`元素的冒泡机制，直接监听外层元素即可。

```js
const input = document.querySelector('m-input')
input.oninput = ()=>{
  console.log(input.value)
}
input.onfocus = ()=>{
  console.log('被聚焦')
}
input.onblur = ()=>{
	console.log('被失焦')
}
```

自然也支持**Vue**的`v-model`

```vue
<template>
	<m-input v-model="inputValue"></m-input>
	<p>{{ inputValue }}</p>
</template>
<script setup>
import { ref } from 'vue'
const inputValue = ref("")
</script>
```

使用`v-model`时，注意在`vite.config.js`中配置`m-`开头的元素为自定义元素。

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('m-')
        }
      }
    })
  ]
})
```

## 属性

| 名称      | 默认值 | 类型                             | DOM同步 | 介绍                                                     |
| --------- | ------ | -------------------------------- | ------- | -------------------------------------------------------- |
| disabled  | false  | boolean                          | 是      | 禁用状态                                                 |
| label     | ""     | string                           | 是      | 文本框的占位文本                                         |
| value     | ""     | string                           | 是      | 文本框的输入内容                                         |
| error     | false  | boolean                          | 是      | 错误状态                                                 |
| maxlength | -1     | number                           | 是      | 最大输入长度                                             |
| readonly  | false  | boolean                          | 是      | 是否为只读类型                                           |
| count     | 0      | number                           | 否      | 返回输入框的文本长度                                     |
| type      | "text" | "text" \| "password" \| "number" | 是      | 输入框的类型，支持文本、密码、数字**（与原生特性相似）** |
| min       | 0      | number                           | 是      | 当`type`为`number`类型时的输入框最小值                   |
| max       | 100    | number                           | 是      | 当`type`为`number`类型时的输入框最大值                   |

## 事件

基于事件冒泡机制，默认支持所有原生`input`事件。**monphind**没有对其进行任何干预。

## 插槽

无插槽

## CSS变量

| 名称                                  | 默认值                          |
| ------------------------------------- | ------------------------------- |
| *--m-input-backgroundColor*           | white                           |
| *--m-input-selection-backgroundColor* | *--m-selection-backgroundColor* |
| *--m-input-selection-textColor*       | *--m-selection-textColor*       |
| *--m-input-default-label-color*       | rgb(178, 178, 178)              |
| *--m-input-focused-label-color*       | *-m-theme-color*                |
| *--m-input-focused-icon-color*        | *-m-theme-color*                |
| *--m-input-focused-outline-color*     | *--m-translucency-theme-color*  |
| *--m-input-disabled-label-color*      | rgb(178, 178, 178)              |
| *--m-input-disabled-backgroundColor*  | \#EFEFEF                        |
| *--m-input-disabled-color*            | rgb(178, 178, 178)              |
| *--m-input-readonly-color*            | rgb(178, 178, 178)              |
| *--m-input-error-outline-color*       | rgba(255, 0, 0, 0.507)          |
| *--m-input-error-label-color*         | rgba(255, 0, 0, 0.507)          |

