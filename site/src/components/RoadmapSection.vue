<script setup>
const steps = [
  { icon: '💡', title: '社区提需求', desc: '你说你想要什么' },
  { icon: '🔵', title: '快速开发', desc: '1-3 天做出 MVP' },
  { icon: '🟢', title: '上线可用', desc: '部署到 openvibelab.com' },
  { icon: '👥', title: '社区共建', desc: '反馈 + PR 贡献' },
  { icon: '⭐', title: '正式产品', desc: '小程序 / App / 持续运营' },
]
</script>

<template>
  <section class="py-24 px-6 bg-brand-dark">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title !text-white">项目进化路线</h2>
      <p class="section-subtitle !text-gray-400">每个项目都有机会从一个想法变成一个真正的产品</p>

      <!-- desktop: horizontal -->
      <div class="hidden md:flex items-start justify-between relative mt-8">
        <!-- connector line -->
        <div class="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-orange via-brand-teal to-brand-orange/50"></div>

        <div v-for="(step, i) in steps" :key="i" class="relative flex flex-col items-center text-center w-1/5">
          <div class="w-20 h-20 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-center text-3xl mb-4 relative z-10">
            {{ step.icon }}
          </div>
          <h3 class="text-white font-bold text-sm mb-1">{{ step.title }}</h3>
          <p class="text-gray-500 text-xs">{{ step.desc }}</p>
        </div>
      </div>

      <!-- mobile: vertical -->
      <div class="md:hidden space-y-6 mt-8">
        <div v-for="(step, i) in steps" :key="i" class="flex items-start gap-4">
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center text-2xl shrink-0">
              {{ step.icon }}
            </div>
            <div v-if="i < steps.length - 1" class="w-0.5 h-6 bg-gray-700 mt-2"></div>
          </div>
          <div class="pt-3">
            <h3 class="text-white font-bold text-sm">{{ step.title }}</h3>
            <p class="text-gray-500 text-xs">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <p class="text-center text-gray-500 mt-12 text-sm max-w-lg mx-auto">
        大部分项目会停在 MVP 阶段，这很正常。但那些真正击中需求的项目，我们会把它做成真正的产品。参与过贡献的人，就是共创者。
      </p>
    </div>
  </section>
</template>
