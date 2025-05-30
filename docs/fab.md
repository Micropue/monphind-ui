# FAB

Floating Action Button 浮动操作按钮

```html view
<m-fab>
	<m-icon name="add"></m-icon>
</m-fab>
<m-fab>
	Fab
</m-fab>
<m-fab>
  <m-icon name="add" slot="start"></m-icon>
	Fab
</m-fab>
```

支持`start`、默认、`end`三个插槽，不具备默认浮动样式，浮动元素需要自行定义。

```html view
<!--禁用按钮-->
<m-fab disabled="true">Fab</m-fab>
```

自定义样式

```html view
<m-fab style="border-radius:10px; background-color:#fefefe;">Fab</m-fab>
```

调用元素属性来禁用

```javascript
document.querySelector('m-fab').disabled
//false
document.querySelector('m-fab').disabled = true
//true
```

自动同步`html`属性。

## 属性

| 名称     | 介绍     | 类型    | 同步更新DOM | 默认值 |
| -------- | -------- | ------- | ----------- | ------ |
| disabled | 是否禁用 | boolean | 是          | False  |

## 插槽

| 名称     | 介绍                                          |
| -------- | --------------------------------------------- |
| start    | 在最左侧的位置插槽（图标），使用 `m-icon`图标 |
| 默认插槽 | 按钮显示内容（文字/图标）                     |
| end      | 在最右侧的位置插槽（图标），使用 `m-icon`图标 |

## css变量

| 名称                             | 默认值                       |
| -------------------------------- | ---------------------------- |
| --m-fab-backgroundColor          | white                        |
| --m-fab-hover-boxShadowColor     | rgba(70, 70, 70, 0.237)      |
| --m-fab-hover-backgroundColor    | rgb(247, 247, 247)           |
| --m-fab-active-backgroundColor   | --m-theme-color              |
| --m-fab-active-color             | white                        |
| --m-fab-active-boxShadowColor    | --m-translucency-theme-color |
| --m-fab-disabled-backgroundColor | \#EFEFEF                     |
| --m-fab-disabled-textColor       | \#BABABA                     |

