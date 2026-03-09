<script setup>
import { t } from '../lib/i18n.js'
</script>

<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="section-title">{{ t('aboutTitle') }}</h2>
      <p class="section-subtitle">{{ t('aboutSubtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="group p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300">
          <div class="text-3xl mb-4">🎯</div>
          <h3 class="text-lg font-bold mb-2">{{ t('aboutIdeas') }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ t('aboutIdeasDesc') }}</p>
        </div>

        <div class="group p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300">
          <div class="text-3xl mb-4">📖</div>
          <h3 class="text-lg font-bold mb-2">{{ t('aboutOpen') }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ t('aboutOpenDesc') }}</p>
        </div>

        <div class="group p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="text-lg font-bold mb-2">{{ t('aboutUsable') }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ t('aboutUsableDesc') }}</p>
        </div>

        <div class="group p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300">
          <div class="text-3xl mb-4">⭐</div>
          <h3 class="text-lg font-bold mb-2">{{ t('aboutGrow') }}</h3>
          <p class="text-gray-500 leading-relaxed">{{ t('aboutGrowDesc') }}</p>
        </div>
      </div>

      <!-- Vibe Coding -->
      <div class="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-orange-50/30">
        <h3 class="text-2xl font-bold mb-4">{{ t('aboutWhyTitle') }}</h3>
        <p class="text-gray-600 leading-relaxed text-lg">
          {{ t('aboutWhyP1') }}
          <strong class="text-gray-900">{{ t('aboutWhyP2') }}</strong>
        </p>
        <p class="text-gray-600 leading-relaxed text-lg mt-2">
          {{ t('aboutWhyP3') }}
        </p>
      </div>
    </div>
  </section>
</template>
