<template>
  <div class="flex flex-col sm:justify-between items-center md:p-6">
    <BlogGridSkeleton v-if="pending" />
    <div
      v-else-if="error"
      class="h-screen flex flex-col items-center container justify-center center text-primary-dark dark:text-primary-light"
    >
      <p>{{ $t("blog.withoutPosts") }}</p>
    </div>
    <BlogGrid v-else :posts="postsView" />
  </div>
</template>
<script setup lang="ts">
import { useBlogStore } from "../store/blog";
const store = useBlogStore();
const { postsView, pending, error } = storeToRefs(store);

onMounted(async () => {
  await store.fetchPosts();
});
</script>
<style scoped></style>
