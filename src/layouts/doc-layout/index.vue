<script lang="ts" setup>
import CommonHeader from '../common/header.vue'
import CommmonLayout from '../common/layout.vue'
import CommonContent from '../common/content.vue'
import { useAncher } from './ancher'
import Side from './side.vue'

useHandleClick()
const { isMobile } = useQueryBreakpoints()

const { anchors } = useAncher()

const docCls = computed(() => {
  const classs = []
  if (!isMobile.value)
    classs.push(...['w-1000px', 'mx-auto', 'my-24px', 'haze-doc-shadow'])

  return classs
})
</script>

<template>
  <CommmonLayout>
    <CommonHeader />
    <CommonContent class="flex flex-col">
      <div class="flex flex-1 h-full w-full">
        <Side v-if="!isMobile" />
        <div class="vp-doc haze-doc" :class="docCls">
          <RouterView />
        </div>
        <template v-if="!isMobile && anchors && anchors.length">
          <div class="w-240px pr-24px flex-shrink-0">
            <a-anchor :items="anchors" :offset-top="80" />
          </div>
        </template>
      </div>
    </CommonContent>
  </CommmonLayout>
</template>

<style>
.haze-doc-shadow{
  box-shadow: var(--ant-pro-box-shadow-card);
  border-radius: 8px;
  font-size: 16px;
}
</style>
