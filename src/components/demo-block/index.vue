<script lang="ts" setup>
const props = defineProps<{
  src: string
}>()
const Comp = shallowRef()
const lang = shallowRef('zh-CN')
const info = shallowRef({})
const block = shallowRef({
  code: '',
  html: ''
})
async function loadComp() {
  const { default: comp } = await import(/* @vite-ignore */ props.src)
  Comp.value = comp
  const docs = comp.__docs ?? {}
  info.value = docs[lang.value] ?? docs.default ?? {}
  block.value = {
    code: decodeURIComponent(docs.block?.code ?? ''),
    html: decodeURIComponent(docs.block?.html ?? '')
  }
}
loadComp()
const showCode = shallowRef(false)
</script>

<template>
  <div class="flex flex-col demo-block">
    <div v-if="Comp" class="demo-block-component">
      <component :is="Comp" />
    </div>
    <div class="flex flex-col">
      <div class="flex items-center justify-center h-48px gap-4">
        <Expand />
        <UnExpand />
      </div>
      <template v-if="showCode">
        <div v-if="block.html" class="demo-code" v-html="block.html" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.demo-block{
  border:  1px solid var(--ant-pro-color-border-secondary);
  border-radius: 4px;

  &-component{
    padding: 24px;
  }
}
</style>
