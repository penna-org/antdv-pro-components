<script lang="ts" setup>
import type { SchemaItem } from '@antdv-enterprise/components'
import { SchemaForm } from '@antdv-enterprise/components'

const schemas = shallowRef<SchemaItem[]>([
  {
    dataIndex: 'age',
    title: '年龄',
  },
  {
    dataIndex: 'name',
    title: '姓名',
  }
])
</script>

<template>
  <div>
    <SchemaForm :schemas="schemas" />
  </div>
</template>
