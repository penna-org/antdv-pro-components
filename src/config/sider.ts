export interface SiderConfigItem {
  path: string
  title: string
}

export const siderConfig: Record<string, SiderConfigItem[]> = {
  '/guide': [
    {
      path: '/guide',
      title: '指南'
    },
    {
      path: '/guide/quickstart',
      title: '快速上手'
    }
  ],
  '/components': []
}
