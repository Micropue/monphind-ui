# Button

按钮

```html
<m-button>Button</m-button>
<m-button type="outlined">Button</m-button>
<m-button type="text">Button</m-button>
```

设置`disabled`属性来禁用

```html
<m-button disabled="true">Button</m-button>
```

在禁用期间，点击会被穿透。

使用插槽

```html
<m-button>
	<m-icon name="user" slot="start"></m-icon>
  Button
  <m-icon name="password" slot="end"></m-icon>
</m-button>
```

自定义样式

```html
<m-button style="border-radius: 2px;">
   Button
</m-button>
```

通过元素调用禁用或更改按钮样式

```javascript
const btn = document.querySelector("m-button")
btn.disabled = true
btn.type = "text"
```

属性

| 名称     | 介绍         | 类型                  | 同步更新DOM | 默认值 |
| -------- | ------------ | --------------------- | ----------- | ------ |
| disabled | 是否禁用     | boolean               | 是          | false  |
| type     | 按钮类型     | outlined \| text \| / | 是          | ""     |
| value    | 按钮显示内容 | string                | 是          | ""     |

插槽

| 名称     | 介绍               |
| -------- | ------------------ |
| start    | 在最左侧的位置插槽 |
| 默认插槽 | 按钮显示内容       |
| end      | 在最右侧的位置插槽 |

css变量

| 名称                                        | 默认值                       |
| ------------------------------------------- | ---------------------------- |
| --m-button-borderRadius                     | 14px                         |
| --m-button-default-backgroundColor          | white                        |
| --m-button-fontSize                         | 0.85em                       |
| --m-button-default-hover-boxShadowColor     | rgba(70, 70, 70, 0.237)      |
| --m-button-default-active-boxShadowColor    | --m-translucency-theme-color |
| --m-button-default-active-backgroundColor   | --m-theme-color              |
| --m-button-default-active-textColor         | white                        |
| --m-button-default-disabled-backgroundColor | \#EFEFEF                     |
| --m-button-default-disabled-textColor       | \#BABABA                     |
| --m-button-outlined-borderColor             | black                        |
| --m-button-outlined-hover-backgroundColor   | black                        |
| --m-button-outlined-hover-textColor         | white                        |
| --m-button-outlined-active-backgroundColor  | \#555555                     |
| --m-button-outlined-active-borderColor      | \#555555                     |
| --m-button-outlined-disabled-borderColor    | \#EFEFEF                     |
| --m-button-outlined-disabled-textColor      | \#BABABA                     |
| --m-button-text-hover-backgroundColor       | \#EFEFEF                     |
| --m-button-text-active-backgroundColor      | --m-theme-color              |

