export function useLoadingCheck() {
  const loading = document.querySelector('body > #loading-app')
  if (loading) {
    const body = document.querySelector('body')
    if (body && body.contains(loading)) {
      setTimeout(() => {
        body.removeChild(loading)
      }, 100)
    }
  }
}
