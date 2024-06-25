<docs>
---
title: 手动赋值
---

手动赋值默认情况下是不会触发`depend`和`onDepend`，所以需要我们通过`SchemaForm`中的`onValueChange`和`onValuesChange`来进行控制实现。
</docs>

<script setup lang="ts">
import type { SchemaFormInstance, SchemaFormProps, SchemaItem } from '@antdv-pro/components'
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
const formRef = shallowRef<SchemaFormInstance>()
const handleValueChange: SchemaFormProps['onValueChange'] = (key, value, values, action) => {
  console.log(key, value, values, action)
}

const handleValuesChange: SchemaFormProps['onValuesChange'] = (values, action) => {
  const value = values.test
  if (value === 'C')
    action.setHideFields(['test1', 'test2'], false)
  else
    action.setHideFields(['test1', 'test2'], true)
}

function setValueData() {
  formRef.value?.setFieldsValue({
    test: 'C'
  })
}
</script>

<template>
  <a-button @click="setValueData">
    设置值
  </a-button>
  <SchemaForm
    ref="formRef"
    :schemas="schemas"
    @value-change="handleValueChange"
    @values-change="handleValuesChange"
  />
</template>

<style scoped>

</style>
