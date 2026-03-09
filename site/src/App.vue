<script setup>
import { computed } from 'vue'
import { Analytics } from '@vercel/analytics/vue'
import config from './data/config.json'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import RoadmapSection from './components/RoadmapSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StatsSection from './components/StatsSection.vue'
import ParticipateSection from './components/ParticipateSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterSection from './components/FooterSection.vue'
import LangToggle from './components/LangToggle.vue'

const currentDay = computed(() => {
  const start = new Date(config.startDate)
  const now = new Date()
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24))
  return Math.max(0, Math.min(diff, config.totalDays))
})
</script>

<template>
  <Analytics />
  <div class="fixed top-4 right-4 z-50">
    <LangToggle />
  </div>
  <div class="min-h-screen">
    <HeroSection :currentDay="currentDay" />
    <AboutSection />
    <RoadmapSection />
    <StatsSection />
    <ProjectsSection />
    <ParticipateSection />
    <CtaSection />
    <FooterSection />
  </div>
</template>
