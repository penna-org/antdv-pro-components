<script setup lang="ts">
import { App } from 'ant-design-vue'

defineOptions({
  name: 'ProTokenProvider',
})
const { registerComposable } = useAntd()
const { message, modal, notification } = App.useApp()
registerComposable({
  message,
  modal,
  notification,
} as any)
</script>

<template>
  <slot />
</template>

<style scoped>

</style>
