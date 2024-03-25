<docs lang="zh-CN">
---
title: 基础的远程请求
---

我们可以通过`request`实现获取远程数据。
</docs>

<script setup lang="ts">
import type { SchemaItem } from '@antdv-enterprise/components'
import { SchemaForm } from '@antdv-enterprise/components'

async function api(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: '全部',
          value: 'all'
        },
        {
          label: '未解决',
          value: 'open'
        },
        {
          label: '已解决',
          value: 'closed'
        },
        {
          label: '解决中',
          value: 'processing'
        }
      ])
    }, 3000)
  })
}
const schemas = shallowRef<SchemaItem[]>([
  {
    dataIndex: 'selectRemote',
    title: '远程选择框',
    valueType: 'select',
    request: api,
  },
  {
    dataIndex: 'select1',
    title: '测试',
    valueType: 'select',
    valueEnum: {
      a: { text: 'a', status: 'Default' },
      b: { text: 'b', status: 'Error' },
      c: { text: 'c', status: 'Success' },
      d: { text: 'd', status: 'Processing' },
    }
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>

<style scoped>

</style>
