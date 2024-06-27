<script lang="ts" setup>
import DarkMode from './components/dark-mode.vue'
import HeaderMenu from './components/header-menu.vue'

const router = useRouter()
const route = useRoute()
const message = useMessage()
const { siteConfig } = storeToRefs(useAppStore())
function goHome() {
  if (route.path === '/') {
    message.success('当前已经是首页')
    return
  }

  router.push({ path: '/' })
}
const { isMobile } = useQueryBreakpoints()

const headerCls = computed(() => {
  const cls: string[] = []
  if (!isMobile.value)
    cls.push('ml-2')

  return cls
})
</script>

<template>
  <a-layout-header class="haze-layout-header">
    <div :class="headerCls" class="flex px-24px h-full">
      <div
        class="flex items-center mr-4 cursor-pointer flex-shrink-0"
        @click="goHome"
      >
        <img :src="siteConfig.logo" style="height: 34px;width: 34px;">
        <h1 v-if="!isMobile" class="font-500 text-4.5 ml-4">
          {{ siteConfig.title ?? '项目文档' }}
        </h1>
      </div>
      <div class="flex-1 flex items-center justify-end px-6">
        <HeaderMenu v-if="!isMobile" />
      </div>
      <div class="flex items-center flex-shrink-0 justify-end gap-3 text-5">
        <DarkMode />
        <HeaderMenu v-if="isMobile" />
      </div>
    </div>
  </a-layout-header>
</template>

<style scoped lang="less">
.haze-layout-header{
  padding-inline: unset;
  background-color: var(--haze-header-bg);
  //box-shadow: var(--haze-header-shadow);
  box-sizing: border-box;
  border-bottom: var(--haze-header-border);
  height: 58px;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  width: 100%;
  line-height: 58px;
}
</style>
