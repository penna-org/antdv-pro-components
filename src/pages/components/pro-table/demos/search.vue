<docs lang="zh-CN">
---
title: 搜索demo
---

默认情况下会自带搜索部分，你可以通过配置某一列`search`的大小来控制哪一列可以被搜索。
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
  },
  {
    dataIndex: 'username',
    title: '账号'
  },
  {
    dataIndex: 'realName',
    title: '真实姓名'
  },
  {
    dataIndex: 'action',
    title: '操作',
    search: false
  }
])
const data = Array.from({ length: 10 }, (_, key) => ({
  key,
  name: `Edward King ${key}`,
  age: 32,
  address: `London, Park Lane no. ${key}`,
  username: `admin${key}`,
  realName: `刘${key}`
}))
</script>

<template>
  <div>
    <ProTable
      :columns="columns"
      :data-source="data"
    />
  </div>
</template>

<style scoped>

</style>
