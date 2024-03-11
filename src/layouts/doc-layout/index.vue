<script lang="ts" setup>
import CommonHeader from '../common/header.vue'
import CommmonLayout from '../common/layout.vue'
import CommonContent from '../common/content.vue'

const route = useRoute()
const docFullPage = computed(() => {
  return route.meta?.docFullPage ?? false
})

const { isMobile } = useQueryBreakpoints()

const docsClass = computed(() => {
  const classs = []
  if (!docFullPage.value && !isMobile.value) {
    classs.push(...['max-w-1200px', 'm-auto'])
  } else {
    // TODO
  }
  return classs
})
</script>

<template>
  <CommmonLayout>
    <CommonHeader />
    <CommonContent>
      <div class="vp-doc haze-doc" :class="docsClass">
        <RouterView />
      </div>
    </CommonContent>
  </CommmonLayout>
</template>
