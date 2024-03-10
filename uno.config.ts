import {
    defineConfig,
    presetAttributify,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'
  
  import antdUnoTheme from './themes/antd-uno-theme.json'
  
  export default defineConfig({
    shortcuts: [],
    theme: {
      ...antdUnoTheme
    },
    presets: [
      presetUno(),
      presetAttributify()
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup()
    ],
    safelist: []
  })
  