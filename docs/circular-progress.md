# Circular Progress

圆形进度，支持未知或已知动态修改进度

```html
<m-circular-progress value="30"></m-circular-progress>
```

未知进度

```html
<m-circular-progress unknown="true"></m-circular-progress>
```

修改最大值

```html
<m-circular-progress value="10" max="200"></m-circular-progress>
```

通过js动态修改

```js
const progress = document.querySelector("m-circular-progress")
progress.value = 20
```

> [!NOTE]
>
> 默认不标注`value`属性时，`value`值会是100，`max`默认为100。

修改颜色

```html
<m-circular-progress style="color: red"></m-circular-progress>
```

属性

| 名称    | 介绍             | 类型    | 默认值 | 同步 |
| ------- | ---------------- | ------- | ------ | ---- |
| value   | 进度值           | number  | 100    | 是   |
| max     | 最大值           | number  | 100    | 否   |
| unknown | 是否启用未知进度 | boolean | false  | 是   |

css变量

| 名称                            | 默认值          |
| ------------------------------- | --------------- |
| --m-circular-progress-fillColor | --m-theme-color |

