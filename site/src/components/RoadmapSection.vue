<script setup>
import { computed } from 'vue'
import { t } from '../lib/i18n.js'

const steps = computed(() => [
  { icon: '💡', title: t('roadmapStep1'), desc: t('roadmapStep1Desc'), color: '#e65c2e' },
  { icon: '🔵', title: t('roadmapStep2'), desc: t('roadmapStep2Desc'), color: '#3d5a9e' },
  { icon: '🟢', title: t('roadmapStep3'), desc: t('roadmapStep3Desc'), color: '#2a7d6f' },
  { icon: '👥', title: t('roadmapStep4'), desc: t('roadmapStep4Desc'), color: '#e65c2e' },
  { icon: '⭐', title: t('roadmapStep5'), desc: t('roadmapStep5Desc'), color: '#3d5a9e' },
])
</script>

<template>
  <section class="py-24 px-6" style="background: #1e1a14;">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title text-left" style="color: #faf8f4;">{{ t('roadmapTitle') }}</h2>
      <p class="section-subtitle text-left mx-0" style="color: #998e80;">{{ t('roadmapSubtitle') }}</p>

      <!-- desktop: horizontal -->
      <div class="hidden md:flex items-start justify-between relative mt-8">
        <!-- connector line -->
        <div class="absolute top-10 left-[10%] right-[10%] h-0.5" style="background: rgba(230, 92, 46, 0.3);"></div>

        <div v-for="(step, i) in steps" :key="i" class="relative flex flex-col items-center text-center w-1/5">
          <div class="w-20 h-20 rounded-xl flex items-center justify-center text-3xl mb-4 relative z-10 border-2"
               :style="{ borderColor: step.color + '30', background: step.color + '0a' }">
            {{ step.icon }}
          </div>
          <h3 class="font-bold text-sm mb-1" style="color: #faf8f4; font-family: Sora, sans-serif;">{{ step.title }}</h3>
          <p class="text-xs" style="color: #998e80;">{{ step.desc }}</p>
        </div>
      </div>

      <!-- mobile: vertical -->
      <div class="md:hidden space-y-6 mt-8">
        <div v-for="(step, i) in steps" :key="i" class="flex items-start gap-4">
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 border-2"
                 :style="{ borderColor: step.color + '30', background: step.color + '0a' }">
              {{ step.icon }}
            </div>
            <div v-if="i < steps.length - 1" class="w-0.5 h-6 mt-2" style="background: rgba(230, 92, 46, 0.2);"></div>
          </div>
          <div class="pt-3">
            <h3 class="font-bold text-sm" style="color: #faf8f4; font-family: Sora, sans-serif;">{{ step.title }}</h3>
            <p class="text-xs" style="color: #998e80;">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <p class="mt-12 text-sm max-w-lg" style="color: #998e80;">
        {{ t('roadmapNote') }}
      </p>
    </div>
  </section>
</template>
