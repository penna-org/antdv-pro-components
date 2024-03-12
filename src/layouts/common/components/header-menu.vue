<script lang="ts" setup>
import { BarsOutlined } from '@ant-design/icons-vue'

const { headerMenu, siderMenu, siteConfig } = storeToRefs(useAppStore())
const items = computed(() => {
  const headers = siteConfig.value.headers ?? []
  const items: any[] = []
  for (const header of headers) {
    items.push({
      key: header.path,
      title: header.title,
      label: header.title
    })
  }
  return items
})

const route = useRoute()
watch(() => route.path, () => {
  // 这里尝试存储其数据格式信息
  const item = items.value.find((item: any) => item.key === route.path)
  if (item) {
    headerMenu.value.selectedKeys = [item.key]
  } else {
    for (const key in siderMenu.value) {
      if (siteConfig.value.siderbar?.[key]?.find((item: any) => item.path === route.path)) {
        headerMenu.value.selectedKeys = [key]
        break
      }
    }
    headerMenu.value.selectedKeys = []
  }
}, {
  immediate: true
})

const { isMobile } = useQueryBreakpoints()
const router = useRouter()
function change(keys: any[]) {
  headerMenu.value.selectedKeys = keys
  router.push({ path: keys[0] })
}
</script>

<template>
  <a-menu
    v-if="!isMobile"
    :selected-keys="headerMenu.selectedKeys"
    mode="horizontal"
    :items="items"
    class="header-menu"
    @update:selected-keys="change"
  />
  <a-popover v-else placement="bottomRight">
    <template #content>
      <div w-260px>
        <a-menu
          :selected-keys="headerMenu.selectedKeys"
          mode="inline"
          :items="items"
          class="header-menu"
          @update:selected-keys="change"
        />
      </div>
    </template>
    <BarsOutlined />
  </a-popover>
</template>

<style scoped>
.header-menu{
  background-color: transparent !important;
  border-bottom: unset!important;
  border-right: unset!important;
}
</style>
