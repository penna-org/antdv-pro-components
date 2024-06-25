<docs>
---
title: 动态显示隐藏表单项
---

配合`depend`和`onDepend`实现动态显示和隐藏表单项
</docs>

<script setup lang="ts">
import type { SchemaItem } from '@antdv-pro/components'
import { SchemaForm } from '@antdv-pro/components'

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
    },
    onValueChange(value, action) {
      if (value === 'C')
        action.setHideFields(['test1', 'test2'], false)
      else
        action.setHideFields(['test1', 'test2'], true)
    },
  },
  {
    dataIndex: 'test1',
    title: '测试2',
    hideInForm: true,
    // onDepend(params, action) {
    //   if (params.value === 'A')
    //     action.setHideInForm('test1', false)
    //   else
    //     action.setHideInForm('test1', true)
    // },
  },
  {
    dataIndex: 'test2',
    title: '测试3',
    hideInForm: true,
    // onDepend(params, action) {
    //   if (params.value === 'B')
    //     action.setHideInForm('test2', false)
    //   else
    //     action.setHideInForm('test2', true)
    // },
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>

<style scoped>

</style>
