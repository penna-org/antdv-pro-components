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
  }
])
</script>

<template>
  <div>
    <SchemaForm :schemas="schemas" />
  </div>
</template>
