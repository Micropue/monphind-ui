# 一个基于`Web Components API`开发的响应式组件库

**A reactive component library built on top of the `Web Components API`**

### 通过npm安装

```bash
npm i monphind-ui
```

### 动态创建组件(Creating components dynamically)

```javascript
const button = document.createElement("m-button")
button.value = "Hello World!"
document.body.append(button)
```

### 同步元素属性与`javascript`属性(Step element attributes and `javascript` attributes)

javascript:

```javascript
const button = document.querySelector("m-button")
button.disabled = true
```

HTML:

```html
<m-button disabled="true"></m-button> <!--自动同步html属性-->
```

### 支持`v-model`(Supports`v-model`)

```vue
<template>
	<m-input v-model="text"></m-input>
</template>
<script>
  import { ref } from 'vue'
	export default {
    setup(){
      const text = ref('')
      return {
        text
      }
    }
  }
</script>
```

### 支持原生事件(Support for native events)

```javascript
const input = document.querySelector("m-input")
input.addEventListener("input",()=>{
  console.log(input.value)
})
```

## 文档

点击链接：[monphind-ui/docs/](https://github.com/Micropue/monphind-ui/tree/main/docs)

不久后会推出官方版文档网站。
