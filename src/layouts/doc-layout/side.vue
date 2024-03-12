<script lang="ts" setup>
import type { SiderConfigItem } from '@/config/sider'

defineOptions({
  inheritAttrs: false
})
const route = useRoute()
const sideMenus = shallowRef<SiderConfigItem[]>([])
const { siteConfig, siderMenu, headerMenu } = storeToRefs(useAppStore())

function formatSite(sides: SiderConfigItem[]) {
  const items: any[] = []
  for (const side of sides) {
    const item: Record<string, any> = {
      label: side.title,
      key: side.path,
      title: side.title,
    }
    if (side.items && side.items.length)
      item.children = formatSite(side.items)

    items.push(item)
  }
  return items
}
const items = shallowRef<any[]>([])

watch(() => route.path, () => {
  sideMenus.value = []
  const matched = route.matched ?? []

  const path = route.path
  const menus = siteConfig.value.siderbar ?? {}

  for (const key of matched) {
    if (menus[key.path]) {
      sideMenus.value = menus[key.path]
      headerMenu.value.selectedKeys = [key.path]
      break
    }
  }

  items.value = formatSite(sideMenus.value ?? [])
  siderMenu.value.selectedKeys = [path]
}, {
  immediate: true
})

const router = useRouter()

function handleChange(keys: any[]) {
  siderMenu.value.selectedKeys = keys
  router.push(keys[0])
}
</script>

<template>
  <div v-if="items.length" class="w-300px of-y-auto of-x-hidden fixed top-58px side-menu">
    <a-menu
      class="w-full h-full pt-16px"
      :selected-keys="siderMenu.selectedKeys"
      :items="items" mode="inline"
      @update:selected-keys="handleChange"
    />
  </div>
  <div v-if="items.length" class="w-300px flex-shrink-0" />
</template>

<style scoped lang="less">
.side-menu{
    height: calc(100vh - 58px);
}
</style>
