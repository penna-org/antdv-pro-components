<script lang="ts" setup>
defineOptions({
  name: 'ProProvider',
})
const { themeConfig } = storeToRefs(useAppStore())
</script>

<template>
  <a-config-provider :theme="themeConfig">
    <a-app>
      <token-provider>
        <slot />
      </token-provider>
    </a-app>
  </a-config-provider>
</template>
