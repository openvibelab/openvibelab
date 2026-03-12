<script setup>
import { t } from '../lib/i18n.js'
</script>

<template>
  <section class="py-24 px-6" style="background: #faf8f4;">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title text-left">{{ t('aboutTitle') }}</h2>
      <p class="section-subtitle text-left mx-0">{{ t('aboutSubtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-5">
        <div class="group p-6 rounded-xl border-2 transition-all duration-300" style="border-color: #d9d0c3; background: #fffcf7;" @mouseenter="$el.style.borderColor='#e65c2e'" @mouseleave="$el.style.borderColor='#d9d0c3'">
          <div class="text-3xl mb-4">🎯</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: Sora, sans-serif;">{{ t('aboutIdeas') }}</h3>
          <p style="color: #6d6358;" class="leading-relaxed">{{ t('aboutIdeasDesc') }}</p>
        </div>

        <div class="group p-6 rounded-xl border-2 transition-all duration-300" style="border-color: #d9d0c3; background: #fffcf7;" @mouseenter="$el.style.borderColor='#2a7d6f'" @mouseleave="$el.style.borderColor='#d9d0c3'">
          <div class="text-3xl mb-4">📖</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: Sora, sans-serif;">{{ t('aboutOpen') }}</h3>
          <p style="color: #6d6358;" class="leading-relaxed">{{ t('aboutOpenDesc') }}</p>
        </div>

        <div class="group p-6 rounded-xl border-2 transition-all duration-300" style="border-color: #d9d0c3; background: #fffcf7;" @mouseenter="$el.style.borderColor='#3d5a9e'" @mouseleave="$el.style.borderColor='#d9d0c3'">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: Sora, sans-serif;">{{ t('aboutUsable') }}</h3>
          <p style="color: #6d6358;" class="leading-relaxed">{{ t('aboutUsableDesc') }}</p>
        </div>

        <div class="group p-6 rounded-xl border-2 transition-all duration-300" style="border-color: #d9d0c3; background: #fffcf7;" @mouseenter="$el.style.borderColor='#e65c2e'" @mouseleave="$el.style.borderColor='#d9d0c3'">
          <div class="text-3xl mb-4">⭐</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: Sora, sans-serif;">{{ t('aboutGrow') }}</h3>
          <p style="color: #6d6358;" class="leading-relaxed">{{ t('aboutGrowDesc') }}</p>
        </div>
      </div>

      <!-- Vibe Coding -->
      <div class="mt-16 p-8 md:p-12 rounded-xl border-2" style="border-color: #d9d0c3; background: #f5f0e8;">
        <h3 class="text-2xl font-bold mb-4" style="font-family: Sora, sans-serif;">{{ t('aboutWhyTitle') }}</h3>
        <p style="color: #6d6358;" class="leading-relaxed text-lg">
          {{ t('aboutWhyP1') }}
          <strong style="color: #1e1a14;">{{ t('aboutWhyP2') }}</strong>
        </p>
        <p style="color: #6d6358;" class="leading-relaxed text-lg mt-2">
          {{ t('aboutWhyP3') }}
        </p>
      </div>
    </div>
  </section>
</template>
