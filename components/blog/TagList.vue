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
  <div
    class="flex flex-col text-ternary-dark dark:text-ternary-light lg:mt-0 my-5 md:ml-7"
  >
    <h3 class="text-2xl my-6">Tags</h3>
    <div class="flex flex-wrap">
      <div v-for="tag in tags" :key="tag.name">
        <NuxtLink
          v-if="tag.lang === $i18n.locale"
          :to="
            route.fullPath.includes(tag.name) ? 'blog' : 'blog?tag=' + tag.name
          "
          @click="backToTop()"
          ><div
            class="mb-3 mr-2 p-2 flex-1 text-md font-semibold w-fit h-fit text-center box-border hover:bg-slate-400 hover:dark:bg-cyan-700 shadow-lg rounded-3xl"
            :class="{
              'bg-blue-500 dark:bg-blue-500': route.query.tag === tag.name,
              'bg-slate-300 dark:bg-cyan-900': route.query.tag !== tag.name,
            }"
          >
            #{{ tag.name }}
            <span
              class="box-border px-2 rounded-full inline-flex overflow-hidden text-white dark:text-black dark:bg-slate-300 bg-cyan-900"
            >
              {{ tag.quantity }}</span
            >
          </div></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {

  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped></style>
