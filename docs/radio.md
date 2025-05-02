# Radio

单选框，可替代原生`Radio`

```html
<m-radio name="group-name">Radio1</m-radio>
<m-radio name="group-name">Radio2</m-radio>
<m-radio name="group-name">Radio3</m-radio>
```

使用插槽显示`label`

```html
<m-radio name="group-name">Radio</m-radio>
```

禁用`Radio`

```html
<m-radio name="group-name" disabled="true">Radio1</m-radio>
```

自定义样式

```css
m-radio[checked=true]{
	border-radius:10px;
}
```

动态修改

```js
const radio = document.querySelector("m-radio")
radio.checked = true
```

> [!WARNING]
>
> 动态修改属性并不会触发`change`事件

Vue数据绑定

```vue
<template>
	<m-radio value="item1" checked="true" v-model.lazy="radioValue" type="radio">item1</m-radio>
	<m-radio value="item2" v-model.lazy="radioValue" type="radio">item2</m-radio>
	<m-radio value="item3" v-model.lazy="radioValue" type="radio">item3</m-radio>
</template>
<script setup>
import { ref } from 'vue'
const radioValue = ref('item1')
</script>
```

> [!CAUTION]
>
> 由于`m-radio`使用`checked`标注选择项，请务必设置`type=radio`属性，否则`vue`的`v-model`会当做默认处理。

## 属性

| 名称     | 介绍            | 类型    | DOM同步 | 默认值 |
| -------- | --------------- | ------- | ------- | ------ |
| value    | 元素的`value`值 | string  | 是      | ""     |
| name     | 用于生明组      | string  | 是      | 无     |
| disabled | 是否禁用        | boolean | 是      | false  |
| checked  | 是否选中        | boolean | 是      | False  |

## 元素事件

| 名称   | 触发条件         |
| ------ | ---------------- |
| change | 点击复选框后触发 |

## 插槽

| 名称     | 介绍                   |
| -------- | ---------------------- |
| 默认插槽 | `radio`提示文本`label` |

## css变量

| 名称                     | 默认值          |
| ------------------------ | --------------- |
| --m-radio-borderColor    | black           |
| --m-radio-checked-color  | --m-theme-color |
| --m-radio-disabled-color | #BABABA         |

