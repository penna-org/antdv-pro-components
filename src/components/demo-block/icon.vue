<script lang="ts" setup>
defineProps<{
  tooltip?: string
}>()
</script>

<template>
  <a-tooltip>
    <template v-if="tooltip" #title>
      {{ tooltip }}
    </template>
    <span class="flex items-center relative cursor-pointer w-15px h-15px">
      <slot />
    </span>
  </a-tooltip>
</template>
