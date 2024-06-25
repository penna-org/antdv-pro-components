<docs lang="zh-CN">
---
title: 依赖关联
---

通过`depend`属性配合`onDepend`事件，轻松实现表单项之前的关联关系。
</docs>

<script lang="ts" setup>
import type { SchemaFormDependAction, SchemaItem } from '@antdv-pro/components'
import { SchemaForm } from '@antdv-pro/components'

const schemas = shallowRef<SchemaItem[]>([
  {
    dataIndex: 'province',
    title: '选择省份',
    valueEnum: [
      {
        label: '浙江',
        value: 'zhejiang'
      },
      {
        label: '江苏',
        value: 'jiangsu'
      }
    ],
    depend: ['city']
  },
  {
    dataIndex: 'city',
    title: '选择城市',
    valueEnum: [
      {
        label: '杭州',
        value: 'hangzhou',
      },
      {
        label: '苏州',
        value: 'suzhou',
      }
    ],
    onDepend(params, action: SchemaFormDependAction) {
      if (params.value === 'zhejiang')
        action.setValue('hangzhou')
      else if (params.value === 'jiangsu')
        action.setValue('suzhou')
      else
        action.setValue(undefined)
    }
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>
