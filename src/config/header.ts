export const headerConfig = [
  {
    path: '/guide',
    title: '指引'
  },
  {
    path: '/components',
    title: '组件',
  }
] as const

export default headerConfig

export type HeaderPathKey = typeof headerConfig[number]['path']
