# 通用属性

对于表格和表单，我们使用了同一套的数据结构，所以我们这里就在全局列出来所有的属性，供大家参考。

## 字段属性

这里的字段属性指的是`ProTable`和`SchemaForm`的`columns`和`schemas`属性中的字段值，这里基本上是通用的，如果只在`ProTable`或`SchemaForm`中使用的属性，会在具体的组件中说明。



### ProTable中独有的属性

| 属性                                | 描述                                                         | 类型                                                       | 默认值                  | 版本 |
| ----------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | ----------------------- | ---- |
| `align`                             | 设置列的对齐方式                                             | `left`\|`right`\|`center`                                  | `left`                  |      |
| `colSpan`                           | 表头列合并,设置为 0 时，不渲染                               | `number`                                                   |                         |      |
| `customCell`                        | 设置单元格属性                                               | `Function(record, rowIndex, column)`                       |                         |      |
| `customFilterDropdown`              | 启用 `v-slot:customFilterDropdown`，优先级低于 `filterDropdown` | `boolean`                                                  | `false`                 |      |
| `customHeaderCell`                  | 设置头部单元格属性                                           | `Function(column)`                                         |                         |      |
| `customRender`                      | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | `Function({text, record, index, column}) {}`               |                         |      |
| `defaultFilteredValue`              | 默认筛选值                                                   | `string[]`                                                 |                         |      |
| `filterResetToDefaultFilteredValue` | 点击重置按钮的时候，是否恢复默认筛选值                       | `boolean`                                                  | `false`                 |      |
| `defaultSortOrder`                  | 默认排序顺序                                                 | `ascend` \| `descend`                                      |                         |      |
| `ellipsis`                          | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br/>设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。 | `boolean`\| `{ showTitle?: boolean }`                      | `false`                 |      |
| `filterDropdown`                    | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | `VNode` \| `(props: FilterDropdownProps) => VNode`         |                         |      |
| `filterDropdownOpen`                | 用于控制自定义筛选菜单是否可见                               | `boolean`                                                  |                         |      |
| `filtered`                          | 标识数据是否经过过滤，筛选图标会高亮                         | `boolean`                                                  | `false`                 |      |
| `filteredValue`                     | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 `value`数组 | `string[]`                                                 |                         |      |
| `filterIcon`                        | 自定义 `filter`图标。                                        | `VNode`\| `({filtered: boolean, column: Column}) => vNode` | `false`                 |      |
| `filterMode`                        | 指定筛选菜单的用户界面                                       | `menu` \| `tree`                                           | `menu`                  |      |
| `filterMultiple`                    | 是否多选                                                     | `boolean`                                                  | `true`                  |      |
| `filters`                           | 表头的筛选菜单项                                             | `object[]`                                                 |                         |      |
| `filterSearch`                      | 筛选菜单项是否可搜索                                         | `boolean` \| `function(input, filter):boolean`             | `false`                 |      |
| `filterCondition`                   | 搜索的过滤条件                                               | [ConditionType](#conditiontype)                            | `like`                  |      |
| `fixed`                             | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'`      | `boolean` \| `string`                                      | `false`                 |      |
| `maxWidth`                          | 拖动列最大宽度，会受到表格自动调整分配宽度影响               | `number`                                                   |                         |      |
| `minWidth`                          | 拖动列最小宽度，会受到表格自动调整分配宽度影响               | `number`                                                   | 50                      |      |
| `resizable`                         | 是否可拖动调整宽度，此时`width`必须是`number`类型            | `boolean`                                                  |                         |      |
| `responsive`                        | 响应式`breakpoint`配置列表。未设置则始终可见。               | `Breakpoint[]`                                             |                         |      |
| `rowScope`                          | 设置列范围                                                   | `row`\|`rowgroup`                                          |                         |      |
| `showSorterTooltip`                 | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | `boolean` \| `TooltipProps`                                | `true`                  |      |
| `sortDirections`                    | 支持的排序方式，取值为 `'ascend'` `'descend'`                | `Array`                                                    | `['ascend', 'descend']` |      |
| `sorter`                            | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | `Function`\|`boolean`                                      |                         |      |
| `sortOrder`                         | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `null` | `string`                                                   |                         |      |
| `width`                             | 列宽度                                                       | `string`\|`number`                                         |                         |      |
| `onFilter`                          | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为`filter`事件使用 | `Function`                                                 |                         |      |
| `onFilterDropdownOpenChange`        | 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为`filterDropdownOpenChange`事件使用 | `function(open) {}`                                        |                         |      |
| `hideInTable`                       | 是否在表格中隐藏该列，不支持在列设置中动态控制展示和隐藏     | `boolean`                                                  | `false`                 |      |
| `search`                            | 配置`ProTable`中的搜索条件，若果不想再搜索表单中展示，可以设置为`false` | `boolean`                                                  | `true`                  |      |
| `children`                          | 树结构的数据                                                 | `Columns`                                                  | -                       |      |
| `show`                              | 当前列是否展示，添加这个配置项后，可以在列设置中控制显示     | `boolean`                                                  | `true`                  |      |
| `render`                            | 自定义渲染当前列的`vnode`                                    | `(params: BodyCell<D>) => VNodeChild`                      |                         |      |
| `renderText`                        | 自定义渲染出来的值，这里的返回值只能是`string`类型           | `(params: BodyCell<D>) => string`                          |                         |      |
| `disable`                           | 在列设置中是否被禁用的                                       | `boolean`                                                  | `false`                 |      |



### SchemaForm中独有的属性

| 属性                    | 描述                                                         | 类型                                                         | 默认值                                                 | 版本 |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------ | ---- |
| `colProps`              | 当开启`grid`模式的情况下，可以动态配置列展示                 | [object](https://antdv.com/components/grid-cn/#col)          | `{ span: 12, xs: 24, sm: 24, lg: 12, xl: 12, xxl: 8 }` |      |
| `defaultValue`          | 配置当前表单项的初始化的值，默认只在初始化的时候生效，不会动态变化 | `any`                                                        |                                                        |      |
| `hideInForm`            | 是否在表单项中隐藏该列                                       | `boolean`                                                    | `false`                                                |      |
| `depend`                | 级联触发表单项配置                                           | `DataIndex[]`                                                |                                                        |      |
| `onDepend`              | 级联依赖项触发的方法                                         | [function](/components/schema-form/depend)                   |                                                        |      |
| `dependTriggerValidate` | 是否自动触发依赖项的校验规则                                 | `boolean`                                                    | `false`                                                |      |
| `onValueChange`         | 当表单数据发生变化的时候，触发方法                           | `(value: any, action: SchemaFormDependAction) => void`       |                                                        |      |
| `fieldItemSlots`        | 对应当前表单项的插槽实现                                     | `Record<string, Slot>`                                       |                                                        |      |



### 通用的字段定义

| 属性            | 描述                                                        | 类型                                                        | 默认值  | 版本 |
| --------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ------- | ---- |
| `dataIndex`     | 配置表单项的`name`和表格的列信息                            | `string` \|`string[]`                                       |         |      |
| `valueType`     | 当前展示的类型                                              | [valueType](#valuetype)                                     | `text` |      |
| `valueEnum`     | 配置静态枚举                                                | [ValueEnum](#valueenum)                                     |         |      |
| `fieldProps`    | 表单项的具体属性和表格搜索框的具体属性                      | object                                                      |         |      |
| `formItemProps` | 配置表单项和表格搜索框(不包含`rules`属性)的`FormItem`的属性 | [FormItem](https://antdv.com/components/form-cn/#form-item) |         |      |
| `request`               | 请求配置针对像`select`、`checkbox`等这种带有`options`的组件提供的请求方法 | [SchemaFormItemRequest](#schemaformitemrequest)              |                                                        |      |
| `params`                | 请求的默认参数配置                                           | `Record<string, any>`                                        |                                                        |      |
| `beforeRequest`         | 请求前的参数处理                                             | `(params: Record<string, any>) => Record<string, any> \|  Promise<Record<string, any>>` |                                                        |      |
| `afterRequest`          | 请求后的数据结构处理                                         | `(data: any) => any \| Promise<any>`                         |                                                        |      |
| `serialize`             | 输出数据序列化                                               | `(value: any) => any`                                        |                                                        |      |
| `deserialize`           | 输入数据序列化                                               | `(value: any) => any`                                        |                                                        |      |



### valueType

根据`valueType`的不同，我们会渲染不同的组件处理不同的业务，所以大家可以根据需求使用不同的组件完成任务。

| 组件名          | 描述              |
| --------------- | ----------------- |
| `text`          | 基础的`Input`组件 |
| `digit`         | 数字选择框组件    |
| `digitRange`    | 数字区间选择      |
| `select`        | 下拉选择          |
| `treeSelect`    | 树下拉选择        |
| `password`      | 密码框            |
| `switch`        | 开关              |
| `radioGroup`    | 单选组            |
| `checkbox`      | 多选框            |
| `checkboxGroup` | 多选框组          |
| `date`          | 日期选择框        |
| `week`          | 周选择框          |
| `month`         | 月选择框          |
| `quarter`       | 季度选择框        |
| `year`          | 年选择框          |
| `dateRange`     | 日期区间选择框    |
| `weekRange`     | 周区间选择框      |
| `monthRange`    | 月区间选择框      |
| `quarterRange`  | 季度区间选择框    |
| `yearRange`     | 年区间选择框      |
| `time`          | 时间选择框        |
| `timeRange`     | 时间区间选择框    |

其中所有的属性对应的`fieldProps`与[官方文档](https://antdv.com)的`props`一致，具体大家可以参考组件库文档。



### valueEnum

自定义静态枚举值，我们可以通过valueEnum来定义静态枚举值。

如下：

```ts
const valueEnum = {
  1:{text:"男"},
  2:{text:"女"}
}
```

由于定义的valueEnum的`key`在对象中一定是字符串，就会导致我们值无法对应，所以我们可以通过配置value的方式来实现与我们的后端的数据拉平。

```ts
const valueEnum = {
  1:{text:"男",value:1},
  2:{text:"女",value:2}
}

const valueEnumStatus = {
  true:{text:"正常",value:true},
  false:{text:"异常",value:false}
}
```

你还可以采用数组的方式来定义：

```ts
const valueEnum = [
  {
    label:"男",
    value:1,
  },
  {
    label:"女",
    value:2
  }
]

// 还可以定义树形
const treeValueEnum = [
  {
    label:"1",
    value:1,
    children:[
      {
        label:"1.1",
        value:11
      }
    ]
  }
]
```

**valueEnum还可以是一个函数**

```ts
const valueEnum = (row:data) =>{
  // 可以在这里写一些判断逻辑，动态返回枚举值
  return [
    {
      label:"男",
      value:1
    }
  ]
}
```



:::tip 在`ProTable`中的特殊用法

由于我们内部集成了`Antdv`的`Badge`组件，所以你可以轻松实现，一些特定的状态。

在`ProTable`中，你可以定义状态：

```ts
const valueEnum = {
  1:{text:"男",status:"success"},
  2:{text:"女",status:"processing"}
}
```

当然了如果当前所有的数据状态满足不了你，我们还单独提供了一个`render`函数，供你自己去实现更强大的自定义功能。

```ts
const valueEnum = {
  1:{text:"男",render(){
    return h(Tag,{},{
      default:()=>'男'
    })
  }},
  2:{text:"女",status:"processing"}
}
```





:::
