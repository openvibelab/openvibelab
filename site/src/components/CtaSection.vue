<script setup>
import config from '../data/config.json'
</script>

<template>
  <section class="py-24 px-6 bg-gradient-to-br from-brand-orange to-brand-orange-light">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
        你只需要有一个想法
      </h2>
      <p class="text-xl text-white/80 mb-10 max-w-xl mx-auto">
        不需要懂代码，不需要画原型。说出你觉得"要是有这个就好了"的东西，剩下的交给我。
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a :href="config.links.issueNew" target="_blank"
          class="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-brand-orange font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
          💡 提交我的需求
        </a>
        <a :href="config.links.issueList" target="_blank"
          class="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white/50 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
          看看别人提了什么
        </a>
      </div>
    </div>
  </section>
</template>
