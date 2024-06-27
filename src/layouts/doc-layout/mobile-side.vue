<script setup lang="ts">
import { MenuFoldOutlined } from '@ant-design/icons-vue'
import { useSideMenu } from '@/layouts/doc-layout/side-menu.ts'

const open = shallowRef(false)
const { items, siderMenu, handleChange } = useSideMenu()
function handleClick() {
  open.value = !open.value
}
function handleSelection(keys: string[]) {
  handleChange(keys)
  open.value = false
}
</script>

<template>
  <div class="fixed z-100 top-100px right-10px w-40px h-40px bg-white flex items-center justify-center mobile-side">
    <span class="text-20px" @click="handleClick">
      <MenuFoldOutlined />
    </span>
  </div>
  <a-drawer v-model:open="open" :width="280" :closable="false" :body-style="{ padding: 0 }">
    <a-menu
      v-model:open-keys="siderMenu.open"
      class="w-full h-full"
      :selected-keys="siderMenu.selectedKeys"
      :items="items"
      mode="inline"
      @update:selected-keys="handleSelection"
    />
  </a-drawer>
</template>

<style scoped>
.mobile-side{
  background: transparent;
  box-shadow: 0 8px 24px #0000000d;
  backdrop-filter: blur(6px);
}
</style>
