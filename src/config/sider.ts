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
      path: '/components/schema-form',
      title: 'SchemaForm',
      items: [
        {
          path: '/components/schema-form/basic',
          title: '基础使用'
        },
        {
          path: '/components/schema-form/depend',
          title: '联动关系'
        },
        {
          path: '/components/schema-form/request',
          title: '远程请求'
        },
        {
          path: '/components/schema-form/hide',
          title: '动态字段'
        },
        {
          path: '/components/schema-form/rules',
          title: '动态校验'
        },
        {
          path: '/components/schema-form/value-change',
          title: '赋值变化'
        }
      ]
    },
    {
      path: '/components/pro-table',
      title: 'ProTable',
      items: [
        {
          path: '/components/pro-table/basic',
          title: '基础使用'
        },
        {
          path: '/components/pro-table/toolbar',
          title: '工具栏'
        },
        {
          path: '/components/pro-table/request',
          title: '远程请求'
        }
      ]
    }
  ]
}
