<script setup>
import { computed } from 'vue'
import { t } from '../lib/i18n.js'

defineProps({
  project: { type: Object, required: true }
})

const statusMap = computed(() => ({
  live:     { label: t('statusLive'), color: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  dev:      { label: t('statusDev'), color: 'bg-blue-50 text-blue-700 border border-blue-200' },
  queued:   { label: t('statusQueued'), color: 'bg-amber-50 text-amber-700 border border-amber-200' },
  paused:   { label: t('statusPaused'), color: 'border border-stone-200 text-stone-500 bg-stone-50' },
  upgraded: { label: t('statusUpgraded'), color: 'border border-orange-200 text-orange-600 bg-orange-50' },
}))
</script>

<template>
  <div class="group p-6 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1"
       style="border-color: #d9d0c3; background: #fffcf7;"
       @mouseenter="$el.style.borderColor='#e65c2e'; $el.style.boxShadow='0 8px 32px rgba(230,92,46,0.08)'"
       @mouseleave="$el.style.borderColor='#d9d0c3'; $el.style.boxShadow='none'">
    <!-- header -->
    <div class="flex items-start justify-between mb-3">
      <span class="text-xs font-mono" style="color: #998e80;">Day {{ project.day }}</span>
      <span :class="['text-xs px-2 py-0.5 rounded-lg font-medium', statusMap[project.status]?.color || 'border border-stone-200 text-stone-500 bg-stone-50']">
        {{ statusMap[project.status]?.label || project.status }}
      </span>
    </div>

    <!-- name -->
    <h3 class="text-lg font-bold mb-2 transition-colors" style="font-family: Sora, sans-serif; color: #1e1a14;">
      {{ project.name }}
    </h3>

    <!-- desc -->
    <p class="text-sm mb-4 leading-relaxed" style="color: #6d6358;">{{ project.description }}</p>

    <!-- tech -->
    <div class="flex flex-wrap gap-1.5 mb-4">
      <span v-for="tech in project.tech" :key="tech" class="text-xs px-2 py-0.5 rounded-lg" style="background: #f0ece4; color: #6d6358;">
        {{ tech }}
      </span>
    </div>

    <!-- links -->
    <div class="flex gap-3 pt-3" style="border-top: 1px solid #e6e0d5;">
      <a v-if="project.url" :href="project.url" target="_blank"
        class="text-sm font-medium transition-colors" style="color: #e65c2e;">
        {{ t('cardTry') }}
      </a>
      <a v-if="project.repo" :href="project.repo" target="_blank"
        class="text-sm font-medium transition-colors" style="color: #998e80;">
        {{ t('cardSource') }}
      </a>
    </div>
  </div>
</template>
