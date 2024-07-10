<docs lang="zh-CN">
---
title: 基本的请求
---

你可以通过`request`来实现一个基础的请求
</docs>

<script setup lang="ts">
import { type Columns, ProTable } from '@antdv-pro/components'
import { Tag } from 'ant-design-vue'
import { sleep } from '@/utils/sleep.ts'

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
async function requestApi() {
  await sleep(2)
  const data: Data[] = Array.from({ length: 10 }, (_, key) => ({
    key,
    name: `Edward King ${key}`,
    age: 32,
    address: `London, Park Lane no. ${key}`
  }))

  return {
    data,
    total: 100,
    success: true
  }
}
</script>

<template>
  <div>
    <ProTable :columns="columns" :request="requestApi" />
  </div>
</template>

<style scoped>

</style>
