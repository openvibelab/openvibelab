<script setup>
import { ref, computed, onMounted } from 'vue'
import stats from '../data/stats.json'
import { t } from '../lib/i18n.js'

const items = computed(() => [
  { label: t('statsProjects'), value: stats.totalProjects, icon: '📦' },
  { label: t('statsLive'), value: stats.liveProjects, icon: '🟢' },
  { label: t('statsRequests'), value: stats.communityRequests, icon: '💡' },
  { label: t('statsContributors'), value: stats.contributors, icon: '👥' },
])

const displayed = ref(items.value.map(() => 0))
const sectionRef = ref(null)

function animateNumbers() {
  const duration = 1200
  const start = performance.now()

  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    items.value.forEach((item, i) => {
      displayed.value[i] = Math.floor(item.value * ease)
    })
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  if (!sectionRef.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateNumbers()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="py-20 px-6 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(item, i) in items" :key="i" class="text-center p-6">
          <div class="text-3xl mb-2">{{ item.icon }}</div>
          <div class="text-4xl md:text-5xl font-bold text-brand-dark mb-1">
            {{ displayed[i] }}
          </div>
          <div class="text-sm text-gray-400">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
