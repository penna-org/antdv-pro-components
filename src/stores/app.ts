import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import { theme } from 'ant-design-vue'
import type { SiteConfig } from '../config/site'
import config from '../config/site'

export const useAppStore = defineStore('app', () => {
  const themeConfig = computed<ThemeConfig>(() => {
    const token: ThemeConfig['token'] = {
      colorBgContainer: '#fff',
      colorBgLayout: '#f0f2f5'
    }
    const algorithm = []
    if (isDark.value) {
      token.colorBgContainer = 'rgb(36,37,37)'
      token.colorBgLayout = '#2a2c2c'
      algorithm.push(theme.darkAlgorithm)
    }

    return {
      token,
      algorithm
    }
  })

  const siteConfig = ref<SiteConfig>(config)

  const headerMenu = ref<{
    selectedKeys: string[]
    open: string[]
  }>({
    selectedKeys: [],
    open: []
  })

  const siderMenu = ref<{
    selectedKeys: string[]
    open: string[]
  }>({
    selectedKeys: [],
    open: []
  })

  return {
    themeConfig,
    siteConfig,
    headerMenu,
    siderMenu
  }
})
