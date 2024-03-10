<script lang="ts" setup>
defineOptions({
  name: 'ProProvider',
})
</script>

<template>
  <a-config-provider>
    <a-app>
      <slot />
    </a-app>
  </a-config-provider>
</template>
