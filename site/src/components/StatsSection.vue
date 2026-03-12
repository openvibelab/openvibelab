<script setup>
import { ref, computed, onMounted } from 'vue'
import stats from '../data/stats.json'
import { t } from '../lib/i18n.js'

const items = computed(() => [
  { label: t('statsProjects'), value: stats.totalProjects, icon: '📦', color: '#e65c2e' },
  { label: t('statsLive'), value: stats.liveProjects, icon: '🟢', color: '#2a7d6f' },
  { label: t('statsRequests'), value: stats.communityRequests, icon: '💡', color: '#3d5a9e' },
  { label: t('statsContributors'), value: stats.contributors, icon: '👥', color: '#e65c2e' },
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
  <section ref="sectionRef" class="py-20 px-6" style="background: #f0ece4;">
    <div class="max-w-5xl mx-auto">
      <!-- Varied layout, NOT identical grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(item, i) in items" :key="i"
             class="p-6 rounded-xl text-left border-2"
             :class="i === 0 ? 'md:col-span-2 md:row-span-1' : ''"
             style="border-color: #d9d0c3; background: #fffcf7;">
          <div class="text-2xl mb-3">{{ item.icon }}</div>
          <div class="font-bold tabular-nums mb-1"
               :class="i === 0 ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'"
               :style="{ color: item.color, fontFamily: 'Sora, sans-serif' }">
            {{ displayed[i] }}
          </div>
          <div class="text-sm" style="color: #6d6358;">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
