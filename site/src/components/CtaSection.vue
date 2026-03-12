<script setup>
import config from '../data/config.json'
import { t } from '../lib/i18n.js'
</script>

<template>
  <section class="py-24 px-6" style="background: #e65c2e;">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold mb-6" style="color: #fffcf7; font-family: Sora, sans-serif;">
        {{ t('ctaTitle') }}
      </h2>
      <p class="text-xl mb-10 max-w-xl" style="color: rgba(255, 252, 247, 0.8);">
        {{ t('ctaDesc') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a :href="config.links.issueNew" target="_blank"
          class="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-0.5" style="background: #fffcf7; color: #e65c2e;">
          {{ t('ctaSubmit') }}
        </a>
        <a :href="config.links.issueList" target="_blank"
          class="inline-flex items-center justify-center px-10 py-4 rounded-xl border-2 font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5" style="border-color: rgba(255, 252, 247, 0.4); color: #fffcf7;">
          {{ t('ctaSeeOthers') }}
        </a>
      </div>
    </div>
  </section>
</template>
