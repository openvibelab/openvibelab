<script setup>
import { computed } from 'vue'
import { t } from '../lib/i18n.js'

defineProps({
  project: { type: Object, required: true }
})

const statusMap = computed(() => ({
  live:     { label: t('statusLive'), color: 'bg-green-100 text-green-700' },
  dev:      { label: t('statusDev'), color: 'bg-blue-100 text-blue-700' },
  queued:   { label: t('statusQueued'), color: 'bg-yellow-100 text-yellow-700' },
  paused:   { label: t('statusPaused'), color: 'bg-gray-100 text-gray-500' },
  upgraded: { label: t('statusUpgraded'), color: 'bg-brand-orange/10 text-brand-orange' },
}))
</script>

<template>
  <div class="group p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 hover:-translate-y-1 bg-white">
    <!-- header -->
    <div class="flex items-start justify-between mb-3">
      <span class="text-xs font-mono text-gray-400">Day {{ project.day }}</span>
      <span :class="['text-xs px-2 py-0.5 rounded-full font-medium', statusMap[project.status]?.color || 'bg-gray-100 text-gray-500']">
        {{ statusMap[project.status]?.label || project.status }}
      </span>
    </div>

    <!-- name -->
    <h3 class="text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors">
      {{ project.name }}
    </h3>

    <!-- desc -->
    <p class="text-gray-500 text-sm mb-4 leading-relaxed">{{ project.description }}</p>

    <!-- tech -->
    <div class="flex flex-wrap gap-1.5 mb-4">
      <span v-for="tech in project.tech" :key="tech" class="text-xs px-2 py-0.5 rounded-md bg-gray-50 text-gray-500">
        {{ tech }}
      </span>
    </div>

    <!-- links -->
    <div class="flex gap-3 pt-3 border-t border-gray-50">
      <a v-if="project.url" :href="project.url" target="_blank"
        class="text-sm text-brand-orange hover:text-brand-orange-light font-medium transition-colors">
        {{ t('cardTry') }}
      </a>
      <a v-if="project.repo" :href="project.repo" target="_blank"
        class="text-sm text-gray-400 hover:text-gray-600 font-medium transition-colors">
        {{ t('cardSource') }}
      </a>
    </div>
  </div>
</template>
