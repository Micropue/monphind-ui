# Linear Progress

条形进度

```html view
<m-linear-progress value="10"></m-linear-progress>
```

启用未知进度

```html view
<m-linear-progress unknown="true"></m-linear-progress>
```

动态修改`value`值

```js
const progress = document.querySelector("m-linear-progress")
progress.value = 10
```

## 属性

| 名称    | 介绍                | 类型    | 默认值 | 同步 |
| ------- | ------------------- | ------- | ------ | ---- |
| unknown | 是否未知            | boolean | false  | 否   |
| value   | 进度值，区0-max之间 | number  | 0      | 是   |
| max     | 最大值              | number  | 100    | 否   |

## 无插槽

## 无事件

## css变量

| 名称                            | 默认值          |
| ------------------------------- | --------------- |
| --m-linear-progress-thumb-color | #EFEFEF         |
| --m-lineat-progress-value-color | --m-theme-color |

