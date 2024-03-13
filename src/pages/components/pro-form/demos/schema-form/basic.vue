<docs lang="zh-CN">
---
title: 基础用法
---

最简单实用`SchemaForm`的用法
</docs>

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
  },
  {
    dataIndex: 'status',
    title: '状态',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: { text: '未解决', status: 'Error' },
      closed: { text: '已解决', status: 'Success' },
      processing: { text: '解决中', status: 'Processing' },
    }
  }
])
</script>

<template>
  <div>
    <SchemaForm :schemas="schemas" />
  </div>
</template>
