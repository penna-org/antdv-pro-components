<script lang="ts" setup>
defineOptions({
  name: 'ProProvider',
})
</script>

<template>
  <a-config-provider>
    <a-app>
      <token-provider>
        <slot />
      </token-provider>
    </a-app>
  </a-config-provider>
</template>
