export const useDocs = createSharedComposable(() => {
  const pageData = ref<Record<string, any>>({})
  const providerData = () => {
    provide('__pageData__', (data: Record<string, any>) => {
      pageData.value = data
    })
  }

  return {
    providerData,
    pageData
  }
})
