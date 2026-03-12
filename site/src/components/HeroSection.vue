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
  <section class="relative min-h-screen flex items-center overflow-hidden" style="background: #1e1a14;">
    <!-- Geometric accent shapes -->
    <div class="absolute top-0 right-0 w-1/3 h-full" style="background: #e65c2e; clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%); opacity: 0.08;"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full" style="border: 3px solid rgba(42, 125, 111, 0.2);"></div>

    <div class="relative z-10 px-6 md:px-12 max-w-6xl mx-auto w-full">
      <div class="max-w-3xl">
        <!-- Logo -->
        <div class="inline-flex items-center gap-3 mb-10">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: #e65c2e;">
            <span class="text-white font-bold text-lg" style="font-family: Sora, sans-serif;">OV</span>
          </div>
          <span class="text-xl font-bold tracking-tight" style="color: #faf8f4; font-family: Sora, sans-serif;">OpenVibeLab</span>
        </div>

        <!-- Headline — left aligned, not centered -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style="color: #faf8f4; font-family: Sora, sans-serif;">
          {{ t('heroDays') }} <span style="color: #e65c2e;">Vibe Coding</span><br>
          {{ t('heroCount') }}
        </h1>

        <p class="text-xl md:text-2xl mb-10 max-w-xl" style="color: #998e80;">
          {{ t('heroSubtitle') }}
        </p>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row gap-4 mb-16">
          <a :href="config.links.issueNew" target="_blank" class="btn-primary text-lg">
            {{ t('heroIdea') }}
          </a>
          <a href="#projects" class="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5" style="border-color: rgba(42, 125, 111, 0.5); color: #3a9e8c;">
            {{ t('heroProjects') }}
          </a>
        </div>

        <!-- Progress -->
        <div class="max-w-md">
          <div class="flex justify-between text-sm mb-2" style="color: #998e80;">
            <span>Day {{ currentDay }}</span>
            <span>{{ currentDay }} / {{ config.totalDays }}</span>
          </div>
          <div class="h-2 rounded-full overflow-hidden" style="background: rgba(250, 248, 244, 0.08);">
            <div
              class="h-full rounded-full transition-all duration-1000 ease-out"
              :style="{ width: progress + '%', background: '#e65c2e' }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <svg class="w-6 h-6 animate-bounce" style="color: #998e80;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>
