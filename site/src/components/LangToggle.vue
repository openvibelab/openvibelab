<template>
  <button @click="toggle" class="px-3 py-1.5 text-sm rounded-lg border-2 transition-colors font-medium" style="border-color: #d9d0c3; color: #6d6358; background: #fffcf7;" @mouseenter="$el.style.borderColor='#e65c2e'; $el.style.color='#e65c2e'" @mouseleave="$el.style.borderColor='#d9d0c3'; $el.style.color='#6d6358'">
    {{ locale === 'en' ? '中文' : 'EN' }}
  </button>
</template>

<script setup>
import { locale, setLocale } from '../lib/i18n.js'
function toggle() { setLocale(locale.value === 'en' ? 'zh' : 'en') }
</script>
