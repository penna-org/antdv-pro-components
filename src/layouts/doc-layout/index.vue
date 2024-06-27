<script lang="ts" setup>
import CommonHeader from '../common/header.vue'
import CommmonLayout from '../common/layout.vue'
import CommonContent from '../common/content.vue'
import { useAncher } from './ancher'
import Side from './side.vue'
import MobileSide from '@/layouts/doc-layout/mobile-side.vue'

useHandleClick()
const { isMobile } = useQueryBreakpoints()

const { anchors } = useAncher()

const docCls = computed(() => {
  const classs = []
  if (!isMobile.value)
    classs.push(...['haze-doc-shadow'])

  return classs
})
</script>

<template>
  <CommmonLayout>
    <CommonHeader />
    <CommonContent class="flex flex-col">
      <div class="flex h-full w-full">
        <Side v-if="!isMobile" />
        <MobileSide v-else />
        <div class="flex-1  justify-center w-full flex">
          <div class="vp-doc haze-doc w-full" :class="docCls">
            <RouterView />
          </div>
        </div>

        <template v-if="!isMobile && anchors && anchors.length">
          <div class="w-240px pr-24px flex-shrink-0 ">
            <a-anchor :items="anchors" :offset-top="80" />
          </div>
        </template>
      </div>
    </CommonContent>
  </CommmonLayout>
</template>

<style>
.haze-doc-shadow{
  box-shadow: 0 8px 24px #0000000d;
  border-radius: 8px;
  font-size: 16px;
}

@media (min-width: 1600px) {
  .haze-doc{
    max-width: 1152px;
  }
}

@media (min-width: 1200px) and (max-width: 1599px) {
  .haze-doc{
    max-width: 960px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .haze-doc{
    max-width: 720px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .haze-doc{
    max-width: 540px;
  }
}

@media (max-width: 767px) {
  .haze-doc{
    max-width: 100%;
  }
}

.dark{
  .vp-doc{
    img{
      opacity: 0.8;
    }
  }
}
</style>
