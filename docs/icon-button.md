# Icon-button

图标按钮

```html view
<m-icon-button>
	<m-icon name="star"></m-icon><!-- 必须设置默认插槽 -->
</m-icon-button>
```

> [!IMPORTANT]
>
> 必须在元素中插入图标，该元素没有默认图标。

和`button`类似，支持禁用与按钮四种样式。

```html view
<m-icon-button type="outlined"><m-icon name="star"></m-icon></m-icon-button>
<m-icon-button type="text"><m-icon name="star"></m-icon></m-icon-button>
<m-icon-button disabled="true"><m-icon name="star"></m-icon></m-icon-button>
<m-icon-button type="filled"><m-icon name="star"></m-icon></m-icon-button>
```

使用圆形进度（`m-circular-progress`）

```html view
<m-icon-button>
	<m-circular-progress unknown="true"></m-circular-progress>
</m-icon-button>
```

## 属性

| 名称     | 介绍     | 类型                             | 同步更新DOM | 默认值 |
| -------- | -------- | -------------------------------- | ----------- | ------ |
| disabled | 是否禁用 | boolean                          | 是          | false  |
| type     | 按钮类型 | outlined \| text \| filled \| "" | 是          | ""     |

## 插槽

| 名称     | 介绍                 |
| -------- | -------------------- |
| 默认插槽 | 插入图标：`<m-icon>` |

## css变量

| 名称                                               | 默认值                         |
| -------------------------------------------------- | ------------------------------ |
| *--m-icon-button-default-backgroundColor*          | white                          |
| *--m-icon-button-default-hover-boxShadowColor*     | rgba(70, 70, 70, 0.237)        |
| *--m-icon-button-default-active-boxShadowColor*    | *--m-translucency-theme-color* |
| *--m-icon-button-default-active-backgroundColor*   | *--m-theme-color*              |
| *--m-icon-button-default-active-textColor*         | white                          |
| *--m-icon-button-default-disabled-backgroundColor* | #EFEFEF                        |
| *--m-icon-button-default-disabled-textColor*       | #BABABA                        |
| *--m-icon-button-outlined-borderColor*             | --m-theme-color                |
| *--m-icon-button-outlined-hover-backgroundColor*   | --m-theme-color                |
| *--m-icon-button-outlined-hover-textColor*         | white                          |
| *--m-icon-button-outlined-disabled-borderColor*    | #EFEFEF                        |
| *--m-icon-button-outlined-disabled-textColor*      | #BABABA                        |
| *--m-icon-button-outlined-color*                   | --m-theme-color                |
| *--m-icon-button-text-hover-backgroundColor*       | #EFEFEF                        |
| *--m-icon-button-text-active-backgroundColor*      | --m-theme-color                |
| *--m-icon-button-filled-backgroundColor*           | --m-theme-color                |
| *--m-icon-button-filled-textColor*                 | white                          |
| *--m-icon-button-filled-disabled-backgroundColor*  | #EFEFEF                        |
| *--m-icon-button-filled-disabled-textColor*        | #BABABA                        |

