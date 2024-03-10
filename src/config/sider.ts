import type { HeaderPathKey } from './header'

export interface SiderConfigItem {
  path: string
  title: string
}

export type SiderPathKey = HeaderPathKey

export const siderConfig: Record<SiderPathKey, SiderConfigItem[]> = {
  '/guide': [],
  '/components': []
}
