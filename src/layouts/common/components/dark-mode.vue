<script setup lang="ts">
defineOptions({
  name: 'DarkMode'
})
const checkDark = computed(() => {
  return isDark.value
})

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

async function func(e: MouseEvent) {
  const x = e.clientX
  const y = e.clientY
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await (document as any).startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
}
</script>

<template>
  <div
    flex items-center justify-center
    h-full cursor-pointer
    text-5
    @click="func"
  >
    <template v-if="checkDark">
      <CarbonMoon />
    </template>
    <template v-else>
      <CarbonSun />
    </template>
  </div>
</template>

<style scoped>

</style>
