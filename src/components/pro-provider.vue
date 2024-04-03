<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh'

defineOptions({
  name: 'ProProvider',
})
dayjs.locale('zh')
const { themeConfig } = storeToRefs(useAppStore())
</script>

<template>
  <a-config-provider :theme="themeConfig" :locale="zhCN">
    <a-app>
      <token-provider>
        <slot />
      </token-provider>
    </a-app>
  </a-config-provider>
</template>
