<script setup>
import config from '../data/config.json'
import { t } from '../lib/i18n.js'
</script>

<template>
  <section class="py-24 px-6" style="background: #f0ece4;">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title text-left">{{ t('participateTitle') }}</h2>
      <p class="section-subtitle text-left mx-0">{{ t('participateSubtitle') }}</p>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- non-coders -->
        <div class="p-8 rounded-xl border-2" style="border-color: #d9d0c3; background: #fffcf7;">
          <div class="text-4xl mb-4">💡</div>
          <h3 class="text-xl font-bold mb-4" style="font-family: Sora, sans-serif;">{{ t('participateNoCoder') }}</h3>
          <ul class="space-y-3">
            <li v-for="(item, i) in [
              { title: t('participateSubmit'), desc: t('participateSubmitDesc') },
              { title: t('participateVote'), desc: t('participateVoteDesc') },
              { title: t('participateFeedback'), desc: t('participateFeedbackDesc') },
              { title: t('participateSpread'), desc: t('participateSpreadDesc') },
            ]" :key="i" class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-lg flex items-center justify-center text-sm shrink-0 mt-0.5 font-bold" style="background: rgba(230, 92, 46, 0.08); color: #e65c2e;">{{ i + 1 }}</span>
              <div>
                <span class="font-medium" style="color: #1e1a14;">{{ item.title }}</span>
                <span style="color: #6d6358;"> — {{ item.desc }}</span>
              </div>
            </li>
          </ul>
          <a :href="config.links.issueNew" target="_blank" class="btn-primary mt-6 w-full text-base">
            {{ t('participateSubmitCta') }}
          </a>
        </div>

        <!-- coders -->
        <div class="p-8 rounded-xl" style="background: #1e1a14;">
          <div class="text-4xl mb-4">🛠️</div>
          <h3 class="text-xl font-bold mb-4" style="color: #faf8f4; font-family: Sora, sans-serif;">{{ t('participateCoder') }}</h3>
          <ul class="space-y-3">
            <li v-for="(item, i) in [
              { title: t('participatePR'), desc: t('participatePRDesc') },
              { title: t('participateBug'), desc: t('participateBugDesc') },
              { title: t('participateFeature'), desc: t('participateFeatureDesc') },
              { title: t('participateCore'), desc: t('participateCoreDesc') },
            ]" :key="i" class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-lg flex items-center justify-center text-sm shrink-0 mt-0.5 font-bold" style="background: rgba(42, 125, 111, 0.15); color: #3a9e8c;">{{ i + 1 }}</span>
              <div>
                <span class="font-medium" style="color: #faf8f4;">{{ item.title }}</span>
                <span style="color: #998e80;"> — {{ item.desc }}</span>
              </div>
            </li>
          </ul>
          <a :href="config.links.github" target="_blank" class="inline-flex items-center justify-center w-full px-8 py-3 mt-6 rounded-xl border-2 font-semibold text-base transition-all duration-300" style="border-color: #2a7d6f; color: #3a9e8c;">
            {{ t('participateGithub') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
