# ProTable配置文档

表格是基于`ant-design-vue`的`Table`表格进行二次封装的，所以，大部分的用法与`Table`表格一致，只是在此基础上进行了一些功能的增强。

## 使用

下面我们列出一个最简单的使用方式

```vue

<script lang="ts" setup>
  import {ProTable} from "@antdv-pro/components"
  import type { Columns } from "@antdv-pro/components"
  import {shallowRef} from "vue";
  
  interface DataInfo {
    key: string;
    name: string;
    age: number;
    address: string;
  }

  const columns = shallowRef<Columns<DataInfo>>([])
</script>

<template>
  <ProTable :columns="columns" />
</template>
```

## 表格属性

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bodyCell | 个性化单元格 | `v-slot:bodyCell="{text, record, index, column}"` | - |  |
| bordered | 是否展示外边框和列边框 | `boolean` | false |  |
| childrenColumnName | 指定树形结构的列名 | `string` | `children` |  |
| columns | 表格列的配置描述，具体项见[下表](#column) | `array` | - |  |
| components | 覆盖默认的 table 元素 | `object` | - |  |
| customFilterDropdown | 自定义筛选菜单，需要配合 `column.customFilterDropdown` 使用 | v-slot:customFilterDropdown="[FilterDropdownProps](https://antdv.com/components/table-cn#filterdropdownprops)" | - |  |
| customFilterIcon | 自定义筛选图标 | `v-slot:customFilterIcon="{filtered, column}"` | - |  |
| customHeaderRow | 设置头部行属性 | `Function(columns, index)` | - |  |
| customRow | 设置行属性 | `Function(record, index)` | - |  |
| dataSource | 数据数组 | object\[] |  |  |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |  |
| defaultExpandedRowKeys | 默认展开的行 | string\[] | - |  |
| emptyText | 自定义空数据时的显示内容 | v-slot:emptyText | - |  |
| expandedRowKeys(v-model) | 展开的行，控制属性 | string\[] | - |  |
| expandedRowRender | 额外的展开行 | Function(record, index, indent, expanded):VNode \| v-slot:expandedRowRender="{record, index, indent, expanded}" | - |  |
| expandFixed | 控制展开图标是否固定，可选 true `left` `right` | boolean \| string | false |  |
| expandColumnTitle | 自定义展开列表头 | v-slot | - |  |
| expandIcon | 自定义展开图标 | Function(props):VNode \| v-slot:expandIcon="props" | - |  |
| expandRowByClick | 通过点击行来展开子行 | boolean | `false` |  |
| footer | 表格尾部 | Function(currentPageData)\|v-slot:footer="currentPageData" |  |  |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | `() => TableHtmlElement` |  |
| headerCell | 个性化头部单元格 | v-slot:headerCell="{title, column}" | - |  |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |  |
| loading | 页面是否加载中 | boolean\|[object](/components/spin-cn) | false |  |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: `确定` <br> filterReset: `重置` <br> emptyText: `暂无数据` |  |
| pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination-cn/)文档，设为 false 时不展示和进行分页 | object \| `false` |  |  |
| rowClassName | 表格行的类名 | Function(record, index):string | - |  |
| rowExpandable | 设置是否允许行展开 | (record) => boolean | - |  |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string\|Function(record):string | 'key' |  |
| rowSelection | 列表项是否可选择，[配置项](#rowselection) | object | null |  |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | object | - |  |
| showExpandColumn | 设置是否展示行展开列 | boolean | true |  |
| showHeader | 是否显示表头 | boolean | true |  |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](/components/tooltip/) | true |  |
| size | 表格大小 | `large` \| `middle` \| `small` | `large` |  |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sticky | 设置粘性头部和滚动条 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | - |  |
| summary | 总结栏 | v-slot:summary | - |  |
| tableLayout | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| 'auto' \| 'fixed' | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` |  |
| title | 表格标题 | Function(currentPageData)\|v-slot:title="currentPageData" |  |  |
| transformCellText | 数据渲染前可以再次改变，一般用于空数据的默认配置，可以通过 [ConfigProvider](/components/config-provider-cn/) 全局统一配置 | Function({ text, column, record, index }) => any，此处的 text 是经过其它定义单元格 api 处理后的数据，有可能是 VNode \| string \| number 类型 | - |  |


## 新增属性

上面我们列举了`Antdv`的`Table`表格中的所有属性，下面我们针对`ProTable`新增的属性单独进行说明

