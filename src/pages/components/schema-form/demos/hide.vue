<docs>
---
title: 动态显示隐藏表单项
---

配合`depend`和`onDepend`实现动态显示和隐藏表单项
</docs>

<script setup lang="ts">
import type { SchemaItem } from '@antdv-enterprise/components'
import { SchemaForm } from '@antdv-enterprise/components'

const schemas = shallowRef<SchemaItem[]>([
  {
    dataIndex: 'test',
    title: '测试1',
    depend: ['test1', 'test2'],
    valueEnum: {
      A: {
        text: 'A',
      },
      B: {
        text: 'B'
      },
      C: {
        text: 'C'
      }
    }
  },
  {
    dataIndex: 'test1',
    title: '测试2',
    hideInForm: true,
    onDepend(params, action) {
      if (params.value === 'A')
        action.setHideInForm('test1', false)
      else
        action.setHideInForm('test1', true)
    },
  },
  {
    dataIndex: 'test2',
    title: '测试3',
    hideInForm: true,
    onDepend(params, action) {
      if (params.value === 'B')
        action.setHideInForm('test2', false)
      else
        action.setHideInForm('test2', true)
    },
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>

<style scoped>

</style>
