<script setup>
import { computed } from 'vue'
import config from '../data/config.json'
import { t } from '../lib/i18n.js'

const props = defineProps({
  currentDay: { type: Number, default: 0 }
})

const progress = computed(() => Math.min((props.currentDay / config.totalDays) * 100, 100))
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
    <!-- bg glow -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-teal/15 rounded-full blur-[100px]"></div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- logo -->
      <div class="inline-flex items-center gap-3 mb-8">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-teal flex items-center justify-center">
          <span class="text-white font-bold text-xl">OV</span>
        </div>
        <span class="text-white text-2xl font-bold tracking-tight">OpenVibeLab</span>
      </div>

      <!-- headline -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        {{ t('heroDays') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-teal">Vibe Coding</span><br>
        {{ t('heroCount') }}
      </h1>

      <p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
        {{ t('heroSubtitle') }}
      </p>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <a :href="config.links.issueNew" target="_blank" class="btn-primary text-lg">
          {{ t('heroIdea') }}
        </a>
        <a href="#projects" class="btn-secondary !border-gray-600 !text-gray-300 hover:!border-brand-teal hover:!text-brand-teal text-lg">
          {{ t('heroProjects') }}
        </a>
      </div>

      <!-- progress -->
      <div class="max-w-md mx-auto">
        <div class="flex justify-between text-sm text-gray-500 mb-2">
          <span>Day {{ currentDay }}</span>
          <span>{{ currentDay }} / {{ config.totalDays }}</span>
        </div>
        <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-brand-orange to-brand-teal rounded-full transition-all duration-1000 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>
