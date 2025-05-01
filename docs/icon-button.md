# Icon-button

图标按钮

```html
<m-icon-button>
	<m-icon name="star"></m-icon><!-- 必须设置默认插槽 -->
</m-icon-button>
```

> [!IMPORTANT]
>
> 必须在元素中插入图标，该元素没有默认图标。

和`button`类似，支持禁用与按钮三种样式。

```html
<m-icon-button type="outlined"></m-icon-button>
<m-icon-button type="text"></m-icon-button>
<m-icon-button disabled="true"></m-icon-button>
```

使用圆形进度（`m-circular-progress`）

```html
<m-icon-button>
	<m-circulat-progress unknown="true"></m-circulat-progress>
</m-icon-button>
```

属性

| 名称     | 介绍     | 类型                  | 同步更新DOM | 默认值 |
| -------- | -------- | --------------------- | ----------- | ------ |
| disabled | 是否禁用 | boolean               | 是          | false  |
| type     | 按钮类型 | outlined \| text \| / | 是          | ""     |

插槽

| 名称     | 介绍                 |
| -------- | -------------------- |
| 默认插槽 | 插入图标：`<m-icon>` |

css变量

| 名称                                             | 默认值                       |
| ------------------------------------------------ | ---------------------------- |
| --m-icon-button-text-active-backgroungColor      | --m-theme-color              |
| --m-icon-button-default-backgroundColor          | white                        |
| --m-icon-button-default-hover-boxShadowColor     | rgba(70, 70, 70, 0.237)      |
| --m-icon-button-default-active-boxShadowColor    | --m-translucency-theme-color |
| --m-icon-button-default-active-backgroundColor   | --m-theme-color              |
| --m-icon-button-default-active-textColor         | white                        |
| --m-icon-button-default-disabled-backgroundColor | \#EFEFEF                     |
| --m-icon-button-default-disabled-textColor       | \#BABABA                     |
| --m-icon-button-outlined-borderColor             | black                        |
| --m-icon-button-outlined-hover-backgroundColor   | black                        |
| --m-icon-button-outlined-hover-textColor         | white                        |
| --m-icon-button-outlined-active-backgroundColor  | \#555555                     |
| --m-icon-button-outlined-active-borderColor      | \#555555                     |
| --m-icon-button-outlined-disabled-borderColor    | \#EFEFEF                     |
| --m-icon-button-outlined-disabled-textColor      | \#BABABA                     |
| --m-icon-button-text-hover-backgroundColor       | \#EFEFEF                     |
| --m-icon-button-text-active-backgroundColor      | --m-theme-color              |