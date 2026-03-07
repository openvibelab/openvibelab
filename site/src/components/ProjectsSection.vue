<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.json'
import config from '../data/config.json'

const activeFilter = ref('all')

const filters = [
  { key: 'all', label: '全部' },
  { key: 'live', label: '已上线' },
  { key: 'dev', label: '开发中' },
  { key: 'queued', label: '排队中' },
]

const filtered = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(p => p.status === activeFilter.value)
})

const hasProjects = computed(() => projects.length > 0)
</script>

<template>
  <section id="projects" class="py-24 px-6 bg-gray-50/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="section-title">项目展示</h2>
      <p class="section-subtitle">每一个都是社区的想法变成了现实</p>

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
        <h3 class="text-2xl font-bold text-gray-800 mb-3">还没有项目</h3>
        <p class="text-gray-500 mb-8 max-w-md mx-auto">
          第一个需求等你来提。你的想法可能就是第一个被实现的项目。
        </p>
        <a :href="config.links.issueNew" target="_blank" class="btn-primary">
          💡 提交第一个需求
        </a>
      </div>
    </div>
  </section>
</template>
