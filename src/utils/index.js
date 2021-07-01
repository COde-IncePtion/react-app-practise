export const debounce = (fn, delay = 200) => {
  let timer = null

  return (...res) => {
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(() => fn(...res), delay)
    } else {
      timer = setTimeout(() => fn(...res), delay)
    }
  }
}

