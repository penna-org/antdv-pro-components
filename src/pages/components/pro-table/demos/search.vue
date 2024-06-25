<docs lang="zh-CN">
---
title: 搜索demo
---

默认情况下会自带搜索部分，你可以通过配置某一列`search`的大小来控制哪一列可以被搜索。
</docs>

<script setup lang="ts">
import type { Columns } from '@antdv-pro/components'
import { ProTable } from '@antdv-pro/components'
import { Tag } from 'ant-design-vue'

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
    dataIndex: 'sex',
    title: '性别',
    valueEnum: {
      0: {
        text: '男',
        status: 'Success',
        render() {
          return h(Tag, {
            color: 'processing'
          }, { default: () => '男' })
        }
      },
      1: {
        text: '女',
        status: 'Error',
        render() {
          return h(Tag, {
            color: 'warning'
          }, { default: () => '女' })
        }
      }
    }
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
  realName: `刘${key}`,
  sex: key % 2 ? 0 : 1
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
