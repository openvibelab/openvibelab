<script setup>
import config from '../data/config.json'
import { t } from '../lib/i18n.js'
</script>

<template>
  <section class="py-24 px-6 bg-gray-50/50">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title">{{ t('participateTitle') }}</h2>
      <p class="section-subtitle">{{ t('participateSubtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- non-coders -->
        <div class="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div class="text-4xl mb-4">💡</div>
          <h3 class="text-xl font-bold mb-4">{{ t('participateNoCoder') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
              <div>
                <span class="font-medium">{{ t('participateSubmit') }}</span>
                <span class="text-gray-500"> — {{ t('participateSubmitDesc') }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
              <div>
                <span class="font-medium">{{ t('participateVote') }}</span>
                <span class="text-gray-500"> — {{ t('participateVoteDesc') }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
              <div>
                <span class="font-medium">{{ t('participateFeedback') }}</span>
                <span class="text-gray-500"> — {{ t('participateFeedbackDesc') }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
              <div>
                <span class="font-medium">{{ t('participateSpread') }}</span>
                <span class="text-gray-500"> — {{ t('participateSpreadDesc') }}</span>
              </div>
            </li>
          </ul>
          <a :href="config.links.issueNew" target="_blank" class="btn-primary mt-6 w-full text-base">
            {{ t('participateSubmitCta') }}
          </a>
        </div>

        <!-- coders -->
        <div class="p-8 rounded-3xl bg-brand-dark text-white">
          <div class="text-4xl mb-4">🛠️</div>
          <h3 class="text-xl font-bold mb-4">{{ t('participateCoder') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
              <div>
                <span class="font-medium">{{ t('participatePR') }}</span>
                <span class="text-gray-400"> — {{ t('participatePRDesc') }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
              <div>
                <span class="font-medium">{{ t('participateBug') }}</span>
                <span class="text-gray-400"> — {{ t('participateBugDesc') }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
              <div>
                <span class="font-medium">{{ t('participateFeature') }}</span>
                <span class="text-gray-400"> — {{ t('participateFeatureDesc') }}</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
              <div>
                <span class="font-medium">{{ t('participateCore') }}</span>
                <span class="text-gray-400"> — {{ t('participateCoreDesc') }}</span>
              </div>
            </li>
          </ul>
          <a :href="config.links.github" target="_blank" class="inline-flex items-center justify-center w-full px-8 py-3 mt-6 rounded-full border-2 border-brand-teal text-brand-teal font-semibold text-base hover:bg-brand-teal hover:text-brand-dark transition-all duration-300">
            {{ t('participateGithub') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
