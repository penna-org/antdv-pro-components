<script lang="ts" setup>
import { useClipboard } from '@pennajs/utils/dist/vue'
import { LinkOutlined } from '@ant-design/icons-vue'
import { camelCase } from 'lodash-es'
import Icon from './icon.vue'
import demosData from './globs'

const props = defineProps<{
  src: string
  link?: string
  iframe?: boolean
}>()
const message = useMessage()
const Comp = shallowRef()
const lang = shallowRef('zh-CN')
const info = shallowRef<Record<string, any>>({})
const block = shallowRef({
  code: '',
  html: ''
})

const title = computed(() => {
  return info.value.title ?? ''
})

function tryDecoded(str: string) {
  try {
    return decodeURIComponent(str)
  } catch (e) {
    return str
  }
}

const desc = computed(() => {
  return tryDecoded(info.value.desc ?? '')
})
async function loadComp() {
  const { default: comp } = (demosData as any)[props.src]
  Comp.value = comp
  const docs = comp.__docs ?? {}
  info.value = docs[lang.value] ?? docs.default ?? {}
  block.value = {
    code: tryDecoded(docs.block?.code ?? ''),
    html: tryDecoded(docs.block?.html ?? '')
  }
}
loadComp()
const { copy, copied } = useClipboard()
const showCode = shallowRef(false)
function handleExpand() {
  showCode.value = !showCode.value
}

function handleCopy() {
  if (copied.value)
    return
  if (!block.value.code)
    return
  copy(block.value.code)
  message.success('Copy success')
}
if (props.iframe && !props.link)
  console.warn('iframe模式下必须传入link')
const id = computed(() => camelCase(props.src))
</script>

<template>
  <div :id="id" class="flex flex-col demo-block mb-4">
    <template v-if="iframe && link">
      <IframeBlock :src="link" />
    </template>
    <template v-else>
      <div v-if="Comp" class="demo-block-component vp-raw">
        <component :is="Comp" />
      </div>
    </template>

    <div class="flex flex-col">
      <div v-if="title">
        <a :href="`#${id}`" :data-id="id" class="demo-block-title" :data-title="title" />
        <div v-if="desc" class="demo-block-desc" v-html="desc" />
      </div>
      <div class="flex items-center justify-center h-38px gap-4 demo-block-actions">
        <Icon :tooltip="copied ? undefined : '复制内容'" @click="handleCopy">
          <FileCopy v-if="!copied" :class="`code-expand-icon-${!copied ? 'show' : 'hide'}`" />
          <FileSuccess v-else :class="`code-expand-icon-${copied ? 'show' : 'hide'}`" style="color: var(--ant-pro-color-primary-text)" />
        </Icon>
        <Icon v-if="link" tooltip="在新窗口打开">
          <a :href="link" class="icon-show" target="_blank">
            <LinkOutlined />
          </a>
        </Icon>
        <Icon :tooltip="!showCode ? '显示代码' : '隐藏代码'" @click="handleExpand">
          <UnExpand v-if="showCode" :class="`code-expand-icon-${showCode ? 'show' : 'hide'}`" />
          <Expand v-else :class="`code-expand-icon-${!showCode ? 'show' : 'hide'}`" />
        </Icon>
      </div>
      <template v-if="showCode">
        <div v-if="block.html" class="demo-code" v-html="block.html" />
      </template>
    </div>
  </div>
</template>

<style  lang="less">
.demo-block{
  border:  1px solid var(--ant-pro-color-border-secondary);
  border-radius: 4px;

  &-component{
    padding: 24px;
  }

  &-title{
    position: relative;
    display: block;
    border-top: 1px solid var(--ant-pro-color-border-secondary);

    &::after{
      content: attr(data-title);
      position: absolute;
      top: -0.75em;
      left: 1.5em;
      padding: 0 8px;
      background-color: var(--vp-c-bg);
      color: var(--ant-pro-color-text);
      font-size: 14px;
      border-radius: 2px;
    }
  }

  &-desc{
    padding: 8px 24px;
  }

  &-actions{
    border-top: 1px dashed var(--ant-pro-color-border-secondary);
  }

  .code-expand-icon-hide{
    opacity: 0;
    pointer-events: none;
  }

  .code-expand-icon-show, .code-expand-icon-hide{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    box-shadow: none;
    transition: all .4s;
    user-select: none;
    color: var(--ant-pro-color-text);
  }

  .icon-show{
    opacity: 0.55;
    color: var(--ant-pro-color-text);
  }

  .icon-show:hover{
    opacity: 1;
    color: var(--ant-pro-color-text);

  }
  .code-expand-icon-show{
    opacity: 0.55;
    pointer-events: auto;
  }

  .code-expand-icon-show:hover{
      opacity: 1;
  }

  div[class*=language-]{
    border-radius: 0!important;
    margin: 0!important;
  }
}
</style>
