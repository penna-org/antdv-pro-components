<docs lang="zh-CN">
---
title: 规则联动
---

可以通过`action`的`setFormItemRules`方法动态设置表单项的校验规则。
</docs>

<script setup lang="ts">
import type { SchemaItem } from '@antdv-pro/components'
import { SchemaForm } from '@antdv-pro/components'

const schemas = shallowRef<SchemaItem[]>([
  {
    title: '姓名',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '请输入姓名'
        }
      ]
    },
    onValueChange(value, action) {
      if (value === 'a') {
        action.setFormItemRules('gender', [
          {
            required: true,
            message: '请输入性别'
          }
        ])
      } else {
        action.setFormItemRules('gender', [])
      }
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '请输入年龄'
        }
      ]
    }
  },
  {
    title: '性别',
    dataIndex: 'gender',
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>

<style scoped>

</style>
