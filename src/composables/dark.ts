export const isDark = useDark()

export const toggleDark = useToggle(isDark)

export function usePreferredDarkAuto() {
  const { store, system } = useColorMode()
  return computed(() => {
    if (store.value === 'auto')
      return system.value
    else
      return store.value === 'dark'
  })
}
