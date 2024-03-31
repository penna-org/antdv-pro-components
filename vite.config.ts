import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { tsxResolveTypes } from 'vite-plugin-tsx-resolve-types'
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
    vueJsx(),
    tsxResolveTypes(),
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
        find: 'dayjs',
        replacement: 'dayjs/esm',
      },
      {
        find: /^dayjs\/locale/,
        replacement: 'dayjs/esm/locale',
      },
      {
        find: /^dayjs\/plugin/,
        replacement: 'dayjs/esm/plugin',
      },
      // {
      //   find: 'vue-i18n',
      //   replacement: mode === 'development' ? 'vue-i18n/dist/vue-i18n.esm-browser.js' : 'vue-i18n/dist/vue-i18n.esm-bundler.js',
      // },
      {
        find: /^ant-design-vue\/es$/,
        replacement: 'ant-design-vue/es',
      },
      {
        find: /^ant-design-vue\/dist$/,
        replacement: 'ant-design-vue/dist',
      },
      {
        find: /^ant-design-vue\/lib$/,
        replacement: 'ant-design-vue/es',
      },
      {
        find: /^ant-design-vue$/,
        replacement: 'ant-design-vue/es',
      },
      {
        find: 'lodash',
        replacement: 'lodash-es',
      },
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
  },
  server: {
    port: 7556
  },
  optimizeDeps: {
    exclude: ['ant-design-vue']
  }
})
