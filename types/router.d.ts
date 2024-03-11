import 'vue-router'

declare module 'vue-router'{
  import type { RouteRecordRaw } from 'vue-router'

  export interface RouteMeta {
    title?: string
  }

}

export {}
