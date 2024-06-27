import type { SiderConfigItem } from '@/config/sider.ts'

export function useSideMenu() {
  const route = useRoute()
  const sideMenus = shallowRef<SiderConfigItem[]>([])
  const { siteConfig, siderMenu, headerMenu } = storeToRefs(useAppStore())

  function formatSite(sides: SiderConfigItem[]) {
    const items: any[] = []
    for (const side of sides) {
      const item: Record<string, any> = {
        label: side.title,
        key: side.path,
        title: side.title,
      }
      if (side.items && side.items.length)
        item.children = formatSite(side.items)

      items.push(item)
    }
    return items
  }
  const items = shallowRef<any[]>([])

  watch(() => route.path, () => {
    sideMenus.value = []
    const matched = route.matched ?? []

    const path = route.path
    const menus = siteConfig.value.siderbar ?? {}

    for (const key of matched) {
      if (menus[key.path]) {
        sideMenus.value = menus[key.path]
        headerMenu.value.selectedKeys = [key.path]
        break
      }
    }

    const opensData = matched.filter(v => v.path !== path).map(v => v.path)
    siderMenu.value.open = [...new Set([...headerMenu.value.selectedKeys, ...siderMenu.value.open, ...opensData])]

    items.value = formatSite(sideMenus.value ?? [])
    siderMenu.value.selectedKeys = [path]
  }, {
    immediate: true
  })

  const router = useRouter()

  function handleChange(keys: any[]) {
    siderMenu.value.selectedKeys = keys
    router.push(keys[0])
  }
  return {
    handleChange,
    items,
    sideMenus,
    siderMenu,
    headerMenu,
  }
}
