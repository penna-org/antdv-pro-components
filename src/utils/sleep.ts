export function sleep(timer: number = 3) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, timer * 1000)
  })
}
