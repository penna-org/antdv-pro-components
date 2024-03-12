export interface SiderConfigItem {
  path: string
  title: string
  items?: SiderConfigItem[]
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
    },
    {
      path: '/guide/test',
      title: '测试'
    }
  ],
  '/components': []
}
