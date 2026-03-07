<script setup>
import config from '../data/config.json'
</script>

<template>
  <section class="py-24 px-6 bg-gray-50/50">
    <div class="max-w-5xl mx-auto">
      <h2 class="section-title">怎么参与？</h2>
      <p class="section-subtitle">不管你是谁，都能参与这件事</p>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- non-coders -->
        <div class="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div class="text-4xl mb-4">💡</div>
          <h3 class="text-xl font-bold mb-4">不会写代码？</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
              <div>
                <span class="font-medium">提需求</span>
                <span class="text-gray-500"> — 告诉我你想要什么</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
              <div>
                <span class="font-medium">投票</span>
                <span class="text-gray-500"> — 给喜欢的需求点 👍</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
              <div>
                <span class="font-medium">反馈</span>
                <span class="text-gray-500"> — 用完之后说说感受</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
              <div>
                <span class="font-medium">传播</span>
                <span class="text-gray-500"> — 让更多人知道这件事</span>
              </div>
            </li>
          </ul>
          <a :href="config.links.issueNew" target="_blank" class="btn-primary mt-6 w-full text-base">
            提交我的想法
          </a>
        </div>

        <!-- coders -->
        <div class="p-8 rounded-3xl bg-brand-dark text-white">
          <div class="text-4xl mb-4">🛠️</div>
          <h3 class="text-xl font-bold mb-4">会写代码？</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
              <div>
                <span class="font-medium">贡献 PR</span>
                <span class="text-gray-400"> — 每个项目都欢迎</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
              <div>
                <span class="font-medium">修 Bug</span>
                <span class="text-gray-400"> — 发现问题直接改</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
              <div>
                <span class="font-medium">加功能</span>
                <span class="text-gray-400"> — 让项目变得更好</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
              <div>
                <span class="font-medium">核心成员</span>
                <span class="text-gray-400"> — 好项目一起长期维护</span>
              </div>
            </li>
          </ul>
          <a :href="config.links.github" target="_blank" class="inline-flex items-center justify-center w-full px-8 py-3 mt-6 rounded-full border-2 border-brand-teal text-brand-teal font-semibold text-base hover:bg-brand-teal hover:text-brand-dark transition-all duration-300">
            去 GitHub 看代码
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
