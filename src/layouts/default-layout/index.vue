<script lang="ts" setup>
import CommonHeader from '../common/header.vue'
import CommmonLayout from '../common/layout.vue'
import CommonContent from '../common/content.vue'
</script>

<template>
  <CommmonLayout>
    <CommonHeader />
    <CommonContent>
      <RouterView />
    </CommonContent>
  </CommmonLayout>
</template>
