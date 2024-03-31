<script setup lang="ts">
import { SchemaForm } from '@antdv-enterprise/components'
import { shallowRef } from 'vue'

const schemas = shallowRef([
  {
    dataIndex: 'claimNo',
    title: '理赔号',
  },
  {
    dataIndex: 'claimAmt',
    title: '理赔金额',
    search: false
  },
  {
    dataIndex: 'claimStatus',
    title: '理赔状态',
    valueEnum: {
      0: { text: '未处理', status: 'Default' },
      1: { text: '处理中', status: 'Processing' },
      2: { text: '已处理', status: 'Success' },
      3: { text: '已拒绝', status: 'Error' },
    }
  },
  {
    dataIndex: 'applyTime',
    title: '申请时间',
    search: false
  },
  {
    dataIndex: 'applyResult',
    title: '申请结果',
    search: false
  },
  {
    dataIndex: 'remark',
    title: '备注',
    search: false
  },
  {
    dataIndex: 'action',
    title: '操作',
    search: false,
    hideInForm: true
  }
])
</script>

<template>
  <SchemaForm :schemas="schemas" />
</template>

<style scoped>

</style>
