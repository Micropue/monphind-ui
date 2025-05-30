# Switch

开关，可以代替`radio`。

```html view
<m-switch></m-switch>
<m-switch>
	<m-icon name="moon"></m-icon>
</m-switch>
```

自定义不同状态下的图标

```html view
<m-switch>
	<m-icon name="sun" slot="status-default"></m-icon><!-- 关闭图标 -->
	<m-icon name="moon" slot="status-checked"></m-icon><!-- 打开图标 -->
</m-switch>
```

> [!TIP]
>
> 默认插槽和自定义状态插槽不要同时出现。
>
> 某个状态的插槽元素未定义时，会默认不显示图标。

禁用

```html view
<m-switch disabled="true"></m-switch>
```

动态修改

```js
document.querySelector('m-switch').checked = false
```

> [!NOTE]
>
> 使用属性修改开关状态时，`change`事件不会触发。

事件监听

```js
const _switch = document.querySelector('m-switch')
_switch.onchange = ()=>console.log(_switch.checked)
```

绑定`v-model`

```vue
<template>
	<m-switch v-model.lazy="checked" type="checkbox"></m-switch>
</template>
<script setup>
	import { ref } from 'vue';
  const checked = ref(false);
</script>
```

> [!CAUTION]
>
> 使用`v-model`时，你必须定义`type`为`checkbox`类型。否则`vue`将默认不会处理组件提供的`checked`属性。

## 属性

| 名称     | 介绍     | 类型    | 默认值 | DOM同步 |
| -------- | -------- | ------- | ------ | ------- |
| checked  | 开关状态 | boolean | false  | 是      |
| disabled | 是否禁用 | boolean | false  | 是      |

## 事件

| 名称   | 触发条件   |
| ------ | ---------- |
| change | 点击后触发 |

## 插槽

| 名称           | 介绍                                      |
| -------------- | ----------------------------------------- |
| 默认           | 嵌入图标，会显示在触发圆形上。            |
| status-default | 默认情况下未选中（`checked=false`）的图标 |
| status-checked | 默认情况下已选中（`checked=true`）的图标  |

## CSS变量

| 名称                                        | 默认值                 |
| ------------------------------------------- | ---------------------- |
| --m-switch-trigger-backgroundColor          | white                  |
| --m-switch-checked-backgroundColor          | var(*--m-theme-color*) |
| --m-switch-checked-foreColor                | var(*--m-theme-color*) |
| --m-switch-backgroundColor                  | #EFEFEF                |
| --m-switch-disabled-backgroundColor         | #EBEBEB                |
| --m-switch-disabled-trigger-foreColor       | white                  |
| --m-switch-disabled-trigger-backgroundColor | #BABABA                |

