<script lang="ts" setup>
import CommonHeader from '../common/header.vue'
import CommmonLayout from '../common/layout.vue'
import CommonContent from '../common/content.vue'
</script>

<template>
  <CommmonLayout>
    <CommonHeader />
    <CommonContent>
      <div class="vp-doc haze-doc">
        <RouterView />
      </div>
    </CommonContent>
  </CommmonLayout>
</template>

<style lang="less">
.haze-doc{
  padding: 30px;

  h1{
    font-size: 30px;
    line-height: 1.2;
  }
}
</style>
