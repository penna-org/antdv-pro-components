import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    const layouts = setupLayouts(routes)
    return layouts
  },
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition)
    {
      let top = savedPosition.top
      if (top > 0)
        top = Math.max(top - 80, 0)

      return {
        ...savedPosition,
        top,
        behavior: 'smooth'
      } as any
    }

    if (to.hash)
    {
      return {
        el: to.hash,
        top: 30,
        behavior: 'auto'
      }
    }
  }
})

export default router
