<script lang="ts" setup>
</script>

<template>
  <a-layout-header class="haze-layout-header">
    测试
  </a-layout-header>
  <div style="height: 58px;" />
</template>

<style scoped lang="less">
.haze-layout-header{
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
