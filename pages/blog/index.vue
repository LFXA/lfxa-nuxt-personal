<template>
  <div
    class="flex flex-col sm:justify-between items-center dark:bg-ternary-dark md:px-10 md:py-10"
  >
    <BlogGridSkeleton v-if="pending" />
    <BlogGrid v-else :posts="posts" />
  </div>
</template>
<script setup lang="ts">
const { data: posts, pending } = await useLazyFetch(
  "https://dev.to/api/articles?username=lfxa&state=all",
);
</script>
<style scoped></style>
