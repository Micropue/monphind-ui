# Picker

选择框，可以用于替代原生的`<select>`

```html
<m-picker>
	<m-picker-item value="a">Item 1</m-picker-item>
  <m-picker-item value="b">Item 2</m-picker-item>
  <m-picker-item value="c">Item 3</m-picker-item>
  <m-picker-item value="d">Item 4</m-picker-item>
</m-picker>
```

设置`value`或子元素的`selected`属性来设置默认选中

```html
<m-picker>
	<m-picker-item value="a" selected="true">Item 1</m-picker-item>
  <m-picker-item value="b">Item 2</m-picker-item>
  <m-picker-item value="c">Item 3</m-picker-item>
  <m-picker-item value="d">Item 4</m-picker-item>
</m-picker>
<m-picker value="a">
	<m-picker-item value="a">Item 1</m-picker-item>
  <m-picker-item value="b">Item 2</m-picker-item>
  <m-picker-item value="c">Item 3</m-picker-item>
  <m-picker-item value="d">Item 4</m-picker-item>
</m-picker>
```

> [!NOTE]
>
> 同时设置`value`和`selected`属性时，`selected`属性的优先级更高。
>
> ```html
> <m-picker value="a">
> 	<m-picker-item value="a">Item 1</m-picker-item>
>   <m-picker-item value="b" selected="true">Item 2</m-picker-item>
> </m-picker>
> <!--此时会选中Item 2，因为selected属性的优先级更高。-->
> ```
>
> 如果为多个选项同时设置了`selected=true`，会选中最后一个`selected=true`的选项并自动修正。

事件监听

```js
const picker = document.querySelector("m-picker")
picker.onchange = ()=>{
  console.log(picker.value)
}
```

禁用某个选项

```html
<m-picker value="a">
	<m-picker-item value="a">Item 1</m-picker-item>
  <m-picker-item value="b" disabled="true">Item 2</m-picker-item>
</m-picker>
```

禁用`picker`

```html
<m-picker disabled="true">
	<m-picker-item value="a">Item 1</m-picker-item>
  <m-picker-item value="b">Item 2</m-picker-item>
</m-picker>
```

> [!IMPORTANT]
>
> 务必为每一项选项都设置`value`属性，否则会导致选项无法更新。

`v-model`绑定

```vue
<template>
  <m-picker v-model.lazy="select">
    <m-picker-item value="a">Item 1</s-picker-item>
    <m-picker-item value="b">Item 2</s-picker-item>
    <m-picker-item value="c">Item 3</s-picker-item>
  </m-picker>
</template>
<script setup>
  import { ref } from 'vue'
  const select = ref('b')
</script>
```

## 属性

| 名称     | 默认值 | 类型    | 介绍     | 同步 |
| -------- | ------ | ------- | -------- | ---- |
| disabled | false  | boolean | 禁用状态 | 是   |
| label    | ""     | string  | 占位文本 | 是   |
| value    | ""     | string  | 选中值   | 是   |

## 插槽

默认插槽，插入`m-picker-item`元素。

## 事件

| 名称   | 触发条件         |
| ------ | ---------------- |
| change | 值发生变化后触发 |

## CSS变量

| 名称 | 默认值 |
| ---- | ------ |
| --m-picker-default-view-backgroundColor| white|
| --m-picker-default-label-color| rgb(178, 178, 178)|
| --m-picker-default-text-color| black|
| --m-picker-default-icon-color| black|
| --m-picker-focused-label-color|var(--m-theme-color)|
| --m-picker-focused-outline-color|var(--m-translucency-theme-color)|
| --m-picker-default-options-backgroundColor|white|
| --m-picker-default-options-boxShadow-color|rgba(89, 89, 89, 0.122)|
| --m-picker-item-backgroundColor|white|
| --m-picker-item-color|black|
| --m-picker-item-selected-backgroundColor|var(--m-theme-color)|
| --m-picker-item-selected-color|white|
| --m-picker-item-disabled-backgroundColor|white|
| --m-picker-item-disabled-color|gray|
| --m-picker-disabled-view-backgroundColor|#EFEFEF|
| --m-picker-disabled-view-color|#BABABA|

# Picker Item

作为`Picker`的子组件，不要单独使用。

## 属性

| 名称     | 默认值 | 类型    | 介绍     | 同步 |
| -------- | ------ | ------- | -------- | ---- |
| disabled | false  | boolean | 是否禁用 | 是   |
| selected | false  | boolean | 是否选中 | 是   |
| value    | ""     | string  | 值       | 否   |

## 插槽

默认插槽，无样式。

## 事件

无事件

## CSS变量

| 名称 | 默认值 |
| -------- | ------ |
|--m-picker-item-backgroundColor|white|
| --m-picker-item-color|black|
| --m-picker-item-selected-backgroundColor|var(--m-theme-color)|
| --m-picker-item-selected-color|white|
| --m-picker-item-disabled-backgroundColor|white|
| --m-picker-item-disabled-color|gray|
