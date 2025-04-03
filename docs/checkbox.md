# Checkbox

复选框，可以用于替代原生`checkbox`

```html
<m-checkbox value="true"></m-checkbox>
<m-checkbox indeterminate="true"></m-checkbox><!--未知样式-->
```

使用插槽显示`label`

```html
<m-checkbox>已阅读用户协议</m-checkbox>
```

禁用`checkbox`

```html
<m-checkbox disabled="true">已阅读用户协议</m-checkbox>
```

自定义样式

```css
m-checkbox[value=true]{
	border-radius:10px;
}
```

动态修改

```js
const checkbox = document.querySelector("m-checkbox")
checkbox.value = true
```

事件监听

```javascript
const checkbox = document.querySelector("m-checkbox")
checkbox.addEventListerner("change",()=>{
  console.log(checkbox.value)
})
```

使用`v-model.lazy`进行数据绑定

```vue
<template>
	<m-checkbox v-model.lazy="checked"></m-checkbox>
</template>
<script setup>
	import { ref } from 'vue';
  const checked = ref(false);
</script>
```

> [!NOTE]
>
> 使用“未知”样式时，默认点击后不会切换为默认样式。需手动切换样式，修改元素`indeterminate`属性即可。
>
> 使用`v-model`时，在`vite.config.js`中配置允许`m`开头的组件：
>
> ```js
> import { defineConfig } from 'vite'
> import vue from '@vitejs/plugin-vue'
> 
> export default defineConfig({
>   plugins: [
>     vue({
>       template: {
>         compilerOptions: {
>           isCustomElement: (tag) => tag.startsWith('m-')
>         }
>       }
>     })
>   ]
> })
> ```

元素属性

| 名称          | 介绍             | 类型    | DOM同步 | 默认值 |
| ------------- | ---------------- | ------- | ------- | ------ |
| value         | 复选框是否被选中 | boolean | 是      | false  |
| indeterminate | 是否未知         | boolean | 是      | false  |
| disabled      | 是否禁用         | boolean | 是      | false  |

元素事件

| 名称   | 触发条件         |
| ------ | ---------------- |
| change | 点击复选框后触发 |

插槽

| 名称     | 介绍                        |
| -------- | --------------------------- |
| 默认插槽 | `checkbox`的提示文本`label` |

css变量

| 名称                                     | 默认值           |
| ---------------------------------------- | ---------------- |
| --m-checkbox-borderColor                 | black            |
| --m-checkbox-checked-color               | --m-theme-color  |
| --m-checkbox-checked-svg-color           | white            |
| --m-checkbox-disabled-color              | #BABABA          |
| --m-checkbox-checked-indeterminate-color | rgb(130,130,130) |

