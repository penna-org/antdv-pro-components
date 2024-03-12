import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md from 'haze-md/plugin'
import Components from 'unplugin-vue-components/vite'
import AntdvResolver from 'antdv-component-resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'

const base = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: './types/typed-router.d.ts',
      extendRoute(route) {
        const fileName = route.components.has('default') ? route.components.get('default') : ''
        if (fileName?.endsWith('.md'))
          route.addToMeta({ layout: 'doc' })
      }
    }),
    Layouts(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Components({
      resolvers: [
        AntdvResolver(),
      ],
      dts: './types/components.d.ts',
    }),
    AutoImport({
      dirs: [
        'src/stores',
        'src/composables'
      ],
      imports: [
        'vue',
        'pinia',
        '@vueuse/core',
        'vue-i18n',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: './types/auto-imports.d.ts',
    }),
    Unocss(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(base, 'src')
      },
      {
        find: /^@antdv-enterprise\/layout/,
        replacement: path.resolve(base, 'packages/layout/src'),
      },
      {
        find: /^@antdv-enterprise\/components/,
        replacement: path.resolve(base, 'packages/components/src'),
      },
    ]
  }
})
