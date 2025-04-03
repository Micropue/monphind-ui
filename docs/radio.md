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
radio.value = 1
```

> [!WARNING]
>
> 动态修改属性不会影响相同`name`组内其他单选框的状态，并不会触发`change`事件

事件监听

```javascript
const radio = document.querySelector("m-radio")
radio.addEventListerner("change",()=>{
  console.log(radio.value)
})
```

使用`v-model.lazy`进行数据绑定

```vue
<template>
	<m-radio v-model.lazy="checked" name="group" value="1"></m-radio>
	<m-radio name="group" value="2"></m-radio>
	<m-radio name="group" value="3"></m-radio>
</template>
<script setup>
	import { ref } from 'vue';
  const checked = ref("");
</script>
```

> [!TIP]
>
> 相同的组（相同`name`）绑定`v-model`时不需要为每个`radio`绑定，只为单个绑定即可。
>
> 示例：
>
> ```vue
> <template>
> 	<m-radio v-model.lazy="checked" name="group" value="1"></m-radio>
> 	<m-radio name="group" value="2"></m-radio>
> 	<m-radio name="group" value="3"></m-radio>
> 	<p>{{ checked }}</p>
> </template>
> <script setup>
> 	import { ref } from 'vue';
>   const checked = ref("1");
> </script>
> ```

属性

| 名称     | 介绍                                           | 类型    | DOM同步 | 默认值 |
| -------- | ---------------------------------------------- | ------- | ------- | ------ |
| value    | 组内被选中的元素的`value`值，方便用于`v-model` | string  | 否      | ""     |
| name     | 用于生命组                                     | string  | 是      | 无     |
| disabled | 是否禁用                                       | boolean | 是      | false  |
| checked  | 是否选中                                       | boolean | 是      | False  |

元素事件

| 名称   | 触发条件         |
| ------ | ---------------- |
| change | 点击复选框后触发 |

插槽

| 名称     | 介绍                   |
| -------- | ---------------------- |
| 默认插槽 | `radio`提示文本`label` |

css变量

| 名称                     | 默认值          |
| ------------------------ | --------------- |
| ---m-radio-borderColor   | black           |
| --m-radio-checked-color  | --m-theme-color |
| --m-radio-disabled-color | #BABABA         |

