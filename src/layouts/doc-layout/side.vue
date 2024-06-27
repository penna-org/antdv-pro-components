<script lang="ts" setup>
import { useSideMenu } from '@/layouts/doc-layout/side-menu.ts'

defineOptions({
  inheritAttrs: false
})
const { items, siderMenu, handleChange } = useSideMenu()
</script>

<template>
  <div v-if="items.length" class="of-y-auto of-x-hidden sticky top-58px side-menu w-280px flex-shrink-0">
    <a-menu
      v-model:open-keys="siderMenu.open"
      class="w-full h-full pt-16px"
      :selected-keys="siderMenu.selectedKeys"
      :items="items" mode="inline"
      @update:selected-keys="handleChange"
    />
  </div>
</template>

<style scoped lang="less">
.side-menu{
  height: calc(100vh - 58px);
}
</style>
