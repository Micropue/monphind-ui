# Textarea

文本域，可用于替换原生`<textarea>`

```html view
<m-textarea label="Textarea" value="textarea"></m-textarea>
```

启用自适应高度（随文本输入自适应文本域高度）

```html view
<m-textarea adaptive="true"></m-textarea>
```

随着文本的输入或`value`属性的变化，元素的尺寸（高度）会发生动态变化。

禁用/只读文本域

```html view
<m-textarea readonly="true"></m-textarea>
<m-textarea disabled="true"></m-textarea>
```

事件监听

基于原生事件冒泡，支持所有默认`textarea`事件。

```js
const textarea = document.querySelector("m-textarea")
textarea.oninput = ()=>{
  console.log(textarea.value)
}
textarea.onfocus = ()=>{
  console.log("被聚焦")
}
textarea.onblur = ()=>{
  console.log("失去焦点")
}
```

`v-model`双向绑定

```vue
<template>
	<m-textarea v-model="textareaValue"></m-textarea>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const textareaValue = ref('')
</script>
```

获取输入长度

```js
const textarea = document.querySelector("m-textarea")
console.log(textarea.count)
```

## 属性

| 名称     | 默认值 | 类型    | DOM同步 | 介绍           |
| -------- | ------ | ------- | ------- | -------------- |
| disabled | false  | boolean | 是      | 是否为禁用状态 |
| label    | ""     | string  | 是      | 占位文本       |
| value    | ""     | string  | 是      | 文本域内容     |
| count    | 0      | number  | 否      | 输入长度       |
| readonly | false  | boolean | 是      | 只读           |
| adaptive | false  | boolean | 是      | 自适应高度     |
| error    | false  | boolean | 是      | 错误状态       |

## 事件

基于事件冒泡机制，默认支持所有的原生`textarea`事件。**monphind**没有对其进行任何干预。

## 插槽

无

## CSS变量

| 名称                                    | 默认值                         |
| --------------------------------------- | ------------------------------ |
| *--m-textarea-default-label-color*      | rgb(178, 178, 178)             |
| *--m-textarea-focused-label-color*      | *--m-theme-color*              |
| *--m-textarea-focused-outline-color*    | *--m-translucency-theme-color* |
| *--m-textarea-disabled-backgroundColor* | \#EFEFEF                       |
| *--m-textarea-disabled-label-color*     | rgb(178,178,178)               |
| *--m-textarea-readonly-color*           | rgb(178, 178, 178)             |
| *--m-textarea-error-outline-color*      | rgba(255, 0, 0, 0.507)         |
| *--m-textarea-error-label-color*        | rgba(255, 0, 0, 0.507)         |

