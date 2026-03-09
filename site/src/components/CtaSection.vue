<script setup>
import config from '../data/config.json'
import { t } from '../lib/i18n.js'
</script>

<template>
  <section class="py-24 px-6 bg-gradient-to-br from-brand-orange to-brand-orange-light">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
        {{ t('ctaTitle') }}
      </h2>
      <p class="text-xl text-white/80 mb-10 max-w-xl mx-auto">
        {{ t('ctaDesc') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a :href="config.links.issueNew" target="_blank"
          class="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-brand-orange font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
          {{ t('ctaSubmit') }}
        </a>
        <a :href="config.links.issueList" target="_blank"
          class="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
          {{ t('ctaSeeOthers') }}
        </a>
      </div>
    </div>
  </section>
</template>
