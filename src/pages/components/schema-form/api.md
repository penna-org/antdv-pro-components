# SchemaForm配置文档

`SchemaForm`是基于`Ant Design Vue`的组件进行开发的组件，我们将其进行了二次封装，使其在业务开发的场景下通过更少的配置来实现表格的展示。

## 介绍

对于`SchemaForm`的`schemas`属性中的数据类型，我们采用了与`ProTable`的`columns`完全相同的结构，你可以通过一套配置同时来实现表单和表格的展示。

`SchemaForm`对比`Ant Design`的`Pro Components`中的`SchemaForm`针对`vue`做了一定的调整，使其更加符合我们真实的业务场景。

## API

:::tip

需要注意的是，由于`ShemaForm`内部接管了`model`属性，所以外部无法配置`model`。请知悉。

:::



### 属性

| 属性                 | 描述                                                         | 类型                                                | 默认值                                                 | 版本 |
| -------------------- | ------------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------ | ---- |
| `schemas`            | 配置生成表单项的结构                                         | `Columns`                                           | -                                                      |      |
| `initialValues`      | 默认值，这个值不存在响应式，只会在第一次赋值的时候生效       | `object`                                            | -                                                      |      |
| `grid`               | 是否使用栅格布局，如果不开启则不会携带`a-row`和`a-col`       | `boolean`                                           | `true`                                                 |      |
| `rowProps`           | 当`grid`为`true`的时候可以配置表单内部的`a-row`的属性，其中的属性同`ant-design-vue`中的`a-row` | [object](https://antdv.com/components/grid-cn/#row) | `{gutter: [20, 0]}`                                    |      |
| `colProps`           | 当`grid`为`true`的时候，可以全局配置每个表单项的`col`的属性，其中属性与`ant-deisng-vue`中的`a-col`属性完全一致 | [object](https://antdv.com/components/grid-cn/#col) | `{ span: 12, xs: 24, sm: 24, lg: 12, xl: 12, xxl: 8 }` |      |
| `colon`              | 配置`Form.Item`的`colon`的默认值 (只有在属性` layout` 为 `horizontal` 时有效) | `boolean`                                           | `true`                                                 |      |
| `disabled`           | 设置表单组件禁用，仅对`antdv`组件和我们提供的业务组件有效    | `boolean`                                           | `false`                                                |      |
| `hideRequiredMark`   | 隐藏所有表单项的必选标记                                     | `boolean`                                           | `false`                                                |      |
| `labelAlign`         | `label`标签的文本对齐方式                                    | `left`\|`right`                                     | `right`                                                |      |
| `labelCol`           | `label`标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | [object](https://antdv.com/components/grid-cn/#col) |                                                        |      |
| `labelWrap`          | `label`标签的文本换行方式                                    | `boolean`                                           | `false`                                                |      |
| `layout`             | 表单布局                                                     | `horizonta`\|`vertical`\|`inline`                   | `horizontal`                                           |      |
| `name`               | 表单名称，会作为表单字段 `id` 前缀使用                       | `string`                                            |                                                        |      |
| `scrollToFirstError` | 是否在`rules`属性改变后立即触发一次验证                      | `boolean`                                           | `true`                                                 |      |
| `validateTrigger`    | 统一设置字段校验规则                                         | `string` \| `string[]`                              | `change`                                               |      |
| `wrapperCol`         | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol`  | [object](https://antdv.com/components/grid-cn/#col) |                                                        |      |


## 方法

我们在`Form`的基础上，也增加了很多的属性，用于控制我们的组件的行为，这里我们列出一些常用的方法。

