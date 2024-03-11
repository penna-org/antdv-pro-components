import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    const layouts = setupLayouts(routes)
    return layouts
  }
})

export default router
