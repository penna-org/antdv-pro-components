import type { HeaderConfig } from './header'
import type { SiderConfigItem } from './sider'
import { headerConfig } from './header'
import { siderConfig } from './sider'

export interface SiteConfig {
  title?: string
  logo?: string
  headers?: HeaderConfig[]
  siderbar?: Record<string, SiderConfigItem[]>
}

export default {
  title: 'Pro Components',
  logo: '/logo.svg',
  headers: headerConfig,
  siderbar: siderConfig
} as SiteConfig
