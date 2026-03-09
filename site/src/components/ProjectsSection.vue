<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.json'
import config from '../data/config.json'
import { t } from '../lib/i18n.js'

const activeFilter = ref('all')

const filters = computed(() => [
  { key: 'all', label: t('filterAll') },
  { key: 'live', label: t('filterLive') },
  { key: 'dev', label: t('filterDev') },
  { key: 'queued', label: t('filterQueued') },
])

const filtered = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.status === activeFilter.value)
})

const hasProjects = computed(() => projects.length > 0)
</script>

<template>
  <section id="projects" class="py-24 px-6 bg-gray-50/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title">{{ t('projectsTitle') }}</h2>
      <p class="section-subtitle">{{ t('projectsSubtitle') }}</p>

      <!-- filters -->
      <div v-if="hasProjects" class="flex justify-center gap-2 mb-12">
        <button
          v-for="f in filters" :key="f.key"
          @click="activeFilter = f.key"
          :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
            activeFilter === f.key
              ? 'bg-brand-orange text-white'
              : 'bg-white text-gray-500 hover:text-brand-orange border border-gray-200'
          ]"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- project grid -->
      <div v-if="hasProjects" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="p in filtered" :key="p.id" :project="p" />
      </div>

      <!-- empty state -->
      <div v-else class="text-center py-20">
        <div class="text-6xl mb-6">🚀</div>
        <h3 class="text-2xl font-bold text-gray-800 mb-3">{{ t('projectsEmpty') }}</h3>
        <p class="text-gray-500 mb-8 max-w-md mx-auto">
          {{ t('projectsEmptyDesc') }}
        </p>
        <a :href="config.links.issueNew" target="_blank" class="btn-primary">
          {{ t('projectsEmptyCta') }}
        </a>
      </div>
    </div>
  </section>
</template>
