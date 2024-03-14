<docs lang="zh-CN">
---
title: 依赖事件
---

当我们配置了`depend`属性后，我们就相当于和另外一个（多个）表单项建立了一个关联，
我们通过依赖字段`onDepend`事件来实现对关联字段的操作。
`onDepend`事件有两个参数，第一个参数你可以拿到变化表单项的`schema`、`value`以及整个表单项的`model`，
但是需要注意的是，第一个参数是只允许读取的，**不允许修改**。
第二个参数是一个`SchemaFormDependAction`对象，你可以通过这个对象来对关联字段进行操作。
</docs>

<script lang="ts" setup>
import type { SchemaItem } from '@antdv-enterprise/components'
import { SchemaForm } from '@antdv-enterprise/components'

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
    formItemProps: {
      rules: [
        {
          required: true,
          message: '城市不能为空',
          trigger: 'blur'
        }
      ]
    },
    onDepend(params, action) {
      if (params.value) {
      // 设置其他字段的值
        action.setFieldValue('address', `${params.value}-xxx`)
        // 校验其他字段的值
        action.validateFields(['validate'])
      }

      if (params.value === 'zhejiang') {
        // 设置当前字段的值
        action.setValue('hangzhou')
      } else if (params.value === 'jiangsu') {
        action.setValue('suzhou')
      } else {
        action.setValue(undefined)
        // 校验当前字段的值
        setTimeout(() => {
          action.validateCur()
        })
      }
    }
  },
  {
    dataIndex: 'address',
    title: '详细地址',
  },
  {
    dataIndex: 'validate',
    title: '校验',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '这个表单项不能为空',
          trigger: 'blur'
        }
      ]
    }
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>
