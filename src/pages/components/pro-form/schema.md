# SchemaForm

这是基于Schema进行渲染的表单，其中表单的数据是和表格中的`columns`的数据格式是一致的，降低学习成本。

## 基本使用

在`@antdv-enterprise/components`中可以直接进行导入我们的`SchemaForm`组件，然后进行使用。

```vue
<script lang="ts" setup>
import { SchemaForm, SchemaItem } from '@antdv-enterprise/components'
interface Data {
  name: string
  age: number
}
const schemas: SchemaItem<Data> = [
  {
    dataIndex: 'name',
    title: '姓名',
  },
  {
    dataIndex: 'age',
    title: '年龄',
  }
]
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>
```

## 代码演示

<demo src="./demos/schema-form/basic.vue" />