<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
function goHome() {
  if (route.path === '/')
    return

  router.push({ path: '/' })
}
</script>

<template>
  <a-layout-header class="haze-layout-header">
    <div class="flex">
      <div class="flex items-center mr-4 cursor-pointer" @click="goHome">
        <img src="@/assets/logo.svg" style="height: 34px;width: 34px;">
        <h1 class="font-500 text-4.5 ml-1">
          商业版文档
        </h1>
      </div>
      <div class="flex-1 flex items-center">
        中间
      </div>
      <div class="flex items-center min-w-200px flex-shrink-0 justify-end">
        右边
      </div>
    </div>
  </a-layout-header>
  <div style="height: 58px;" />
</template>

<style scoped lang="less">
.haze-layout-header{
  padding-inline: 20px;
  background-color: var(--haze-header-bg);
  box-shadow: var(--haze-header-shadow);
  height: 58px;
  position: fixed;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  width: 100%;
  line-height: 58px;
}
</style>
