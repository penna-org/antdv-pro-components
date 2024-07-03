<docs lang="zh-CN">
---
title: 基础用法
---

最简单实用`SchemaForm`的用法
</docs>

<script lang="ts" setup>
import type { SchemaFormInstance, SchemaItem } from '@antdv-pro/components'
import { SchemaForm } from '@antdv-pro/components'
import { shallowRef } from 'vue'

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
    dataIndex: 'status1',
    title: '选择框-1',
    valueEnum: {
      0: { text: '正常', value: 0 },
      1: { text: '禁用', value: 1 },
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
    dataIndex: 'digitRange',
    title: '数字范围',
    valueType: 'digitRange',
    serialize(value) {
      if (value)
        return value.filter((v: any) => v !== undefined && v !== null).join(',')
      return value
    },
    deserialize(value) {
      if (value && typeof value === 'string')
        return value.split(',').map(Number)

      return value
    },
  },
  {
    dataIndex: 'password',
    valueType: 'password',
    title: '密码输入框'
  },
  {
    dataIndex: 'date',
    valueType: 'date',
    title: '日期组件'
  },
  {
    dataIndex: 'dateTime',
    valueType: 'date',
    fieldProps: {
      showTime: true
    },
    title: '显示时间'
  },
  {
    dataIndex: 'week',
    valueType: 'week',
    title: '日期组件'
  },
  {
    dataIndex: 'dateRange',
    valueType: 'dateRange',
    title: '日期区间'
  },
  {
    dataIndex: 'time',
    valueType: 'time',
    title: '选择时间'
  },
  {
    dataIndex: 'timeRange',
    valueType: 'timeRange',
    title: '时间区间'
  },
  {
    dataIndex: 'autoComplete',
    valueType: 'autoComplete',
    title: '自动完成',
    fieldProps: {
      options: [
        {
          value: '/api'
        },
        {
          value: '/system'
        },
        {
          value: '/about'
        }
      ]
    }
  }
])
const formRef = shallowRef<SchemaFormInstance>()
function submit() {
  const data = formRef.value?.getFormData?.()

  console.log(data)
}
</script>

<template>
  <div>
    <SchemaForm ref="formRef" :schemas="schemas" />
    <div class="flex gap-4">
      <a-button @click="submit">
        获取数据
      </a-button>
    </div>
  </div>
</template>
