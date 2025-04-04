# Slider

滑块，可用于替代`input:range`

```html
<m-slider min="0" max="1" step="0.1" value="0.3" labeled="false"></m-slider>
```

禁用滑块

```html
<m-slider disabled="true"></m-slider>
```

显示`label`

```html
<m-slider labeled="true"></m-slider>
```

监听滑块

```js
const slider = document.querySelector("m-slider")
slider.oninput = () => console.log(slider.value)
```

`v-model`绑定

```vue
<template>
	<m-slider v-model="range"></m-slider>
</template>
<script setup>
import { ref } from 'vue'
const range = ref(0)
</script>
```

你可以通过设置`value`属性来修改当前值

```js
const slider = document.querySelector("m-slider")
slider.value = 10
```

> [!TIP]
>
> `value`值设置超出`max`或低于`min`时，会自动修正。

属性列表

| 称       | 介绍                               | 类型    | DOM同步 | 默认值 |
| -------- | ---------------------------------- | ------- | ------- | ------ |
| value    | 滑块当前值                         | number  | 是      | 0      |
| step     | 步长                               | number  | 否      | 1      |
| min      | 最小值                             | number  | 否      | 0      |
| max      | 最大值                             | number  | 否      | 100    |
| labeled  | 是否显示`label`，格式：“value/max” | boolean | 是      | false  |
| disabled | 是否禁用                           | boolean | 是      | False  |

事件

| 名称  | 触发条件                                 |
| ----- | ---------------------------------------- |
| input | 出现滑动行为，`disabled`情况下不会产生。 |

无插槽

css变量

| 名称                              | 默认值           |
| --------------------------------- | ---------------- |
| --m-slider-backgroundColor        | #EFEFEF          |
| --m-slider-slider-backgroundColor | --m-theme-color  |
| --m-slider-hiddenlabel-color      | gray             |
| --m-slider-label-color            | rgb(255,255,255) |

