<script lang="ts" setup>
definePage({
  meta: {
    layout: 'home'
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div class="h-100vh w-full relative mt--58px pt-58px">
      <div class="absolute landing-home">
        <img src="../assets/bg-1.svg">
      </div>
      <div class="relative z-1 flex flex-col py-60px px-10px">
        <div class="flex items-center justify-center">
          <img class="w-140px h-140px" src="/logo.svg">
        </div>
        <div class="flex text-[var(--haze-text-color)] items-center text-55px justify-center font-600 text-center ">
          Antdv Pro 中后台管理框架
        </div>
        <div class="text-26px text-center text-[var(--ant-pro-color-text-tertiary)]">
          致力于中后台开发的模块化解决方案
        </div>

        <div class="flex items-center justify-center mt-16 gap-8">
          <a-button type="primary" size="large" shape="round">
            快 速 开 始
          </a-button>
          <a-button size="large" shape="round">
            项 目 介 绍
          </a-button>
          <a-button size="large" shape="round">
            项 目 演 示
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.landing-home{
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 z-index: 0;
 overflow: hidden;

  > img {
    width: 100vw;
    height: 100vh;
    transform: scale(2.2);
  }
}
</style>
