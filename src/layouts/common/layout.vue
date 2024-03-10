<script lang="ts" setup>
defineProps<{
  hasSider?: boolean
}>()
</script>

<template>
  <a-layout v-bind="$props" class="haze-layout">
    <slot />
  </a-layout>
</template>

<style scoped lang="less">
.haze-layout {
  background-color: transparent;
}
</style>
