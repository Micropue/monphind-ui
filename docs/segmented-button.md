# Segmented Button

分组按钮

```html
<m-segmented-button>
	<m-segmented-button-item value="1">item1</m-segmented-button-item>
  <m-segmented-button-item value="2">item2</m-segmented-button-item>
  <m-segmented-button-item value="3">item3</m-segmented-button-item>
  <m-segmented-button-item value="4">item4</m-segmented-button-item>
</m-segmented-button>
```

禁用某个按钮

```html
<m-segmented-button>
	<m-segmented-button-item value="1" disabled="true">item1</m-segmented-button-item>
  <m-segmented-button-item value="2">item2</m-segmented-button-item>
  <m-segmented-button-item value="3">item3</m-segmented-button-item>
  <m-segmented-button-item value="4">item4</m-segmented-button-item>
</m-segmented-button>
```

> [!WARNING]
>
> 有且至少一个没有被禁用的分组按钮在分组中，否则会报出错误。

默认选中元素

```html
<m-segmented-button>
	<m-segmented-button-item selected="true" value="1">item1</m-segmented-button-item>
  <m-segmented-button-item value="2">item2</m-segmented-button-item>
  <m-segmented-button-item value="3">item3</m-segmented-button-item>
  <m-segmented-button-item value="4">item4</m-segmented-button-item>
</m-segmented-button>
```

默认选中的元素可以为`disabled="true"`禁用状态。

通过`js`动态修改选中元素

```javascript
const segmentedButton = document.querySelector("m-segmented-button")
segmentedButton.value = 3
```

修改的`value`值必须存在于子元素的`value`属性中，否则不会有任何效果。

事件监听

```js
const segmentedButton = document.querySelector("m-segmented-button")
segmentedButton.onchange = ()=>{
  console.log(segmentedButton.value)
}
```

通过`vue`进行数据绑定

```vue
<template>
	<m-segmented-button v-model.lazy="value">
		<m-segmented-button-item selected="true" value="1">item1</m-segmented-button-item>
  	<m-segmented-button-item value="2">item2</m-segmented-button-item>
  	<m-segmented-button-item value="3">item3</m-segmented-button-item>
  	<m-segmented-button-item value="4">item4</m-segmented-button-item>
	</m-segmented-button>
</template>
<script setup>
import { ref } from 'vue'
const value = ref("1")
</script>
```

属性列表

| 名称  | 介绍                        | 类型   | DOM同步 | 默认值 |
| ----- | --------------------------- | ------ | ------- | ------ |
| value | 当前选中的子元素的`value`值 | string | 是      | ""     |
| index | 当前选中元素的下标          | number | 否      | 0      |

事件

| 名称   | 触发条件         |
| ------ | ---------------- |
| change | 选中新元素时触发 |

插槽

| 名称     | 介绍                                      |
| -------- | ----------------------------------------- |
| 默认插槽 | 插入`<m-segmented-button-item>`作为选项。 |

css变量

| 名称                                             | 默认值                       |
| ------------------------------------------------ | ---------------------------- |
| --segmented-button-backgroundColor               | white                        |
| --m-segmented-button-slider-backgroundColor      | --m-theme-color              |
| --m-segmented-button-slider-hover-boxShadowColor | --m-translucency-theme-color |

# Segmented Button Item

子组件，用于作为`segmented-button`分组按钮的选项按钮，不要单独使用。

属性

| 名称     | 介绍                                                         | 类型    | 默认值 | DOM同步 |
| -------- | ------------------------------------------------------------ | ------- | ------ | ------- |
| selected | 是否选中，`m-segmented-buttn`只会处理第一个出现`selected=true`的元素。 | boolean | falsle | 否      |
| value    | 被选中后的父元素的`value`值                                  | string  | ""     | 否      |
| disabled | 是否禁用                                                     | boolean | false  | 是      |

插槽

| 名称     | 介绍                       |
| -------- | -------------------------- |
| 默认插槽 | 可插入html元素或文本内容。 |

css变量

| 名称 | 默认值 |
| ---- | ------ |
|      |        |
|      |        |

