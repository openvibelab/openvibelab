import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp(target, duration = 1500) {
  const current = ref(0)
  let observer = null
  let el = null

  function animate() {
    const start = performance.now()
    const from = 0
    const to = target.value ?? target

    function step(now) {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      current.value = Math.floor(from + (to - from) * ease)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  function setRef(element) {
    el = element
  }

  onMounted(() => {
    if (!el) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { current, setRef }
}
