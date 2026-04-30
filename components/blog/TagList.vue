<script setup>
const route = useRoute();
defineProps({
  tags: {
    required: true,
    type: Array,
  },
});
</script>
<template>
  <div class="flex flex-col text-ternary-dark dark:text-ternary-light">
    <h3 class="text-2xl mb-4 mt-8">Tags</h3>
    <div class="flex flex-wrap gap-2">
      <template v-for="tag in tags" :key="tag.name + tag.lang">
      <NuxtLink
        v-if="tag.lang === $i18n.locale"
        :to="route.fullPath.includes(tag.name) ? 'blog' : 'blog?tag=' + tag.name"
      >
        <div
          class="px-3 py-1.5 text-sm font-semibold shadow-md rounded-3xl transition-colors"
          :class="{
            'bg-blue-500 dark:bg-blue-500 text-white': route.query.tag === tag.name,
            'bg-slate-300 dark:bg-cyan-900 hover:bg-slate-400 hover:dark:bg-cyan-700': route.query.tag !== tag.name,
          }"
        >
          #{{ tag.name }}
          <span class="ml-1 px-1.5 py-0.5 rounded-full text-xs text-white dark:text-black dark:bg-slate-300 bg-cyan-900">
            {{ tag.quantity }}
          </span>
        </div>
      </NuxtLink>
      </template>
    </div>
  </div>
</template>
