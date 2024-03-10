<script setup lang="ts">
const { providerData } = useDocs()
providerData()
</script>

<template>
  <ProProvider>
    <RouterView />
  </ProProvider>
</template>
