function scrollTo(el: Element, hash: string, smooth = false) {
  let target: Element | null = null

  try {
    target = el.classList.contains('header-anchor')
      ? el
      : document.getElementById(decodeURIComponent(hash).slice(1))
  }
  catch (e) {
    console.warn(e)
  }

  if (target) {
    const targetPadding = Number.parseInt(
      window.getComputedStyle(target).paddingTop,
      10,
    )
    const targetTop
            = window.scrollY
            + target.getBoundingClientRect().top
            - 80
            + targetPadding
    function scrollToTarget() {
      // only smooth scroll if distance is smaller than screen height.
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop)
      else window.scrollTo({ left: 0, top: targetTop, behavior: 'smooth' })
    }
    requestAnimationFrame(scrollToTarget)
  }
}

export function useHandleClick() {
  useEventListener('click', (e) => {
    const el = e.target as HTMLElement
    if (el.classList.contains('header-anchor') || el.classList.contains('demo-block-title')) {
      e.preventDefault()
      const anchor = el as HTMLAnchorElement
      const href = anchor.getAttribute('href')
      const currentUrl = new URL(location.href) // copy to keep old data

      if (href && href.startsWith('#')) {
        if (currentUrl.hash !== href) {
          history.pushState(null, '', href)
          window.dispatchEvent(new Event('hashchange'))
        }

        scrollTo(el, href, true)
      }
    }
  }, {
    capture: true,
  })
}
