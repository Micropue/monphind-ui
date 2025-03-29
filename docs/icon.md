# Icon

图标

内置图标

```html
<m-icon name="search"></m-icon>
<m-icon name="home"></m-icon>
<m-icon name="menu"></m-icon>
<m-icon name="close"></m-icon>
<m-icon name="settings"></m-icon>
<m-icon name="done"></m-icon>
<m-icon name="favorite"></m-icon>
<m-icon name="add"></m-icon>
<m-icon name="delete"></m-icon>
<m-icon name="star"></m-icon>
<m-icon name="arrow_back"></m-icon>
<m-icon name="arrow_forward"></m-icon>
<m-icon name="arrow_upward"></m-icon>
<m-icon name="array_downward"></m-icon>
<m-icon name="refresh"></m-icon>
<m-icon name="more"></m-icon>
<m-icon name="download"></m-icon>
<m-icon name="upload"></m-icon>
<m-icon name="token"></m-icon>
<m-icon name="user"></m-icon>
<m-icon name="password"></m-icon>
<m-icon name="mail"></m-icon>
<m-icon name="github"></m-icon>
```

自定义颜色

```html
<m-icon style="color:red" name="mail"></m-icon>
```

插槽

| 名称     | 介绍            |
| -------- | --------------- |
| 默认插槽 | 插入svg图标标签 |

属性

| 名称 | 默认值 | 是否同步 | 介绍         | 类型                  |
| ---- | ------ | -------- | ------------ | --------------------- |
| name | 无     | 是       | 内置图标名称 | string (查看原型定义) |

> [!NOTE]
>
> 在同时有`name`属性和插槽元素时，将默认使用插槽元素作为`svg`图标。使用了不存在的`name`时会在控制台打印错误。

