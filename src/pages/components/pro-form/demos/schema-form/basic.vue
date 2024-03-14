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
    dataIndex: 'input',
    title: '普通输入框',
  },
  {
    dataIndex: 'status',
    title: '选择框',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: { text: '未解决', status: 'Error' },
      closed: { text: '已解决', status: 'Success' },
      processing: { text: '解决中', status: 'Processing' },
    }
  },
  {
    dataIndex: 'radioGroup',
    valueType: 'radioGroup',
    title: '选择组',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: { text: '未解决', status: 'Error' },
      closed: { text: '已解决', status: 'Success' },
      processing: { text: '解决中', status: 'Processing' },
    }
  },
  {
    dataIndex: 'checkbox',
    valueType: 'checkbox',
    title: '单个框'
  },
  {
    dataIndex: 'checkboxGroup',
    valueType: 'checkboxGroup',
    title: '多选组',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: { text: '未解决', status: 'Error' },
      closed: { text: '已解决', status: 'Success' },
      processing: { text: '解决中', status: 'Processing' },
    }
  },
  {
    dataIndex: 'switch',
    valueType: 'switch',
    title: '开关'
  },
  {
    dataIndex: 'digit',
    valueType: 'digit',
    title: '数字输入框'
  },
  {
    dataIndex: 'password',
    valueType: 'password',
    title: '密码输入框'
  }
])
</script>

<template>
  <div>
    <SchemaForm :schemas="schemas" />
  </div>
</template>
