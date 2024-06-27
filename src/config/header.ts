export interface HeaderConfig {
  path: string
  title: string
}

export const headerConfig: HeaderConfig[] = [
  {
    path: '/guide',
    title: '指引'
  },
  {
    path: '/backend',
    title: 'Java后端'
  },
  {
    path: '/components',
    title: '组件',
  }
] as const

export default headerConfig
