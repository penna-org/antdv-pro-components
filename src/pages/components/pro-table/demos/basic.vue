<docs lang="zh-CN">
---
title: 基本使用
---

这是一个组件的基本用法。
</docs>

<script setup lang="ts">
import type { Columns } from '@antdv-enterprise/components'
import { ProTable } from '@antdv-enterprise/components'

interface Data {
  name: string
  age: number
  address: string
}
const columns = shallowRef<Columns<Data>>([
  {
    dataIndex: 'name',
    title: '姓名',
  },
  {
    dataIndex: 'age',
    title: '年龄'
  },
  {
    dataIndex: 'address',
    title: '地址'
  }
])
const data = Array.from({ length: 10 }, (_, key) => ({
  key,
  name: `Edward King ${key}`,
  age: 32,
  address: `London, Park Lane no. ${key}`
}))
</script>

<template>
  <div>
    <ProTable style="padding: 0" :columns="columns" :data-source="data" :search="false" :show-toolbar="false" />
  </div>
</template>

<style scoped>

</style>
