export function useAncher() {
  const anchors = ref<any[]>([])
  const { pageData } = useDocs()
  const route = useRoute()

  const getAnchers = (headers: any[]) => {
    const result: any[] = []
    for (const header of headers) {
      const anchor: Record<string, any> = {
        title: header.title,
        link: `#${header.slug}`,
        key: header.slug
      }

      const ancherDom = document.getElementById(header.slug)
      if (ancherDom) {
        let currentDom = ancherDom.nextElementSibling
        while (currentDom && !/H\d/i.test(currentDom.tagName)) {
          const aTag = currentDom.querySelector('.demo-block-title')
          if (aTag) {
            const id = aTag.getAttribute('data-id')
            const title = aTag.getAttribute('data-title')
            if (anchor.children) {
              anchor.children.push({
                title,
                link: `#${id}`,
                key: id
              })
            } else {
              anchor.children = [{
                title,
                link: `#${id}`,
                key: id
              }]
            }
          }
          currentDom = currentDom.nextElementSibling
        }
      }
      if (header.children && header.children.length > 0)
        anchor.children = getAnchers(header.children)
      result.push(anchor)
    }
    return result
  }
  watch(pageData, () => {
    anchors.value = getAnchers(pageData.value.headers || [])
  }, {
    flush: 'post'
  })

  watch(() => route.path, () => {
    anchors.value = []
  })

  onMounted(() => {
    // anchors.value = getAnchers(pageData.value.headers || [])
  })
  return {
  }
}
