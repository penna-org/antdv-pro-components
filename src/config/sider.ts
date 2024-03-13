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
  '/backend': [
    {
      path: '/backend',
      title: '项目介绍'
    },
    {
      path: '/backend/setup',
      title: '开发环境准备',
      items: [
        {
          path: '/backend/setup/build',
          title: 'JAVA开发环境搭建'
        },
        {
          path: '/backend/setup/import',
          title: 'IDEA导入项目'
        }
      ]
    }
  ],
  '/components': [
    {
      path: '/components',
      title: '介绍'
    },
    {
      path: '/components/pro-form',
      title: '高级表单',
      items: [
        {
          path: '/components/pro-form/schema',
          title: 'SchemaForm'
        }
      ]
    }
  ]
}
