<script setup>
import { computed } from 'vue'
import config from '../data/config.json'
import { t } from '../lib/i18n.js'

const socialLinks = computed(() => [
  { name: 'GitHub', url: config.links.github, icon: 'github' },
  { name: t('footerBilibili'), url: config.links.bilibili, icon: 'bilibili' },
  { name: t('footerXiaohongshu'), url: config.links.xiaohongshu, icon: 'xiaohongshu' },
  { name: t('footerWechat'), url: config.links.wechat, icon: 'wechat' },
])
</script>

<template>
  <footer class="py-16 px-6" style="background: #1e1a14;">
    <div class="max-w-4xl mx-auto">
      <!-- logo -->
      <div class="inline-flex items-center gap-2 mb-6">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #e65c2e;">
          <span class="text-white font-bold text-xs" style="font-family: Sora, sans-serif;">OV</span>
        </div>
        <span class="font-bold" style="color: #faf8f4; font-family: Sora, sans-serif;">OpenVibeLab</span>
      </div>

      <!-- social -->
      <div class="flex gap-3 mb-8">
        <template v-for="link in socialLinks" :key="link.name">
          <a v-if="link.url"
            :href="link.url" target="_blank"
            class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            :title="link.name"
            style="background: rgba(250, 248, 244, 0.06); color: #998e80;"
            @mouseenter="$el.style.background='rgba(250, 248, 244, 0.12)'; $el.style.color='#faf8f4'"
            @mouseleave="$el.style.background='rgba(250, 248, 244, 0.06)'; $el.style.color='#998e80'"
          >
            <svg v-if="link.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span v-else class="text-xs font-bold">{{ link.name[0] }}</span>
          </a>
          <span v-else
            class="w-10 h-10 rounded-xl flex items-center justify-center cursor-not-allowed"
            :title="link.name + ' ' + t('footerComingSoon')"
            style="background: rgba(250, 248, 244, 0.03); color: rgba(153, 142, 128, 0.4);"
          >
            <span class="text-xs font-bold">{{ link.name[0] }}</span>
          </span>
        </template>
      </div>

      <!-- tagline -->
      <p class="text-sm mb-2" style="color: #998e80;">{{ t('footerTagline') }}</p>
      <p class="text-xs" style="color: rgba(153, 142, 128, 0.6);">
        MIT License · openvibelab.com
      </p>
    </div>
  </footer>
</template>
