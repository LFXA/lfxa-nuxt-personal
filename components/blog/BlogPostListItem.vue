<template>
  <NuxtLink
    :to="'blog/' + post.slug"
    class="mr-4"
    :class="{
      'md:col-span-4 col-span-6': featured,
      'md:col-span-2 lg:col-span-1 row-span-1 col-span-6': !featured,
    }"
  >
    <article
      v-if="post.slug"
      class="flex flex-col gap-4 rounded-lg hover:shadow-xl hover:dark:shadow-slate-400 p-3 mb-6"
      :class="{ 'lg:flex-row md:gap-8': featured }"
      :data-content-id="post.id"
    >
      <div v-if="post.cover_image" class="image">
        <NuxtImg
          :src="post.cover_image"
          :alt="post.title"
          width="16"
          height="9"
          class="w-full aspect-w-16 aspect-h-9 object-cover rounded-md"
        />
      </div>
      <div class="flex flex-col">
        <div
          class="text-2xl mb-2 text-primary-dark dark:text-primary-light font-semibold leading-7"
        >
          <h1>
            {{ post.title }}
          </h1>
        </div>

        <p class="text-ternary-dark dark:text-ternary-light mb-4 leading-7">
          {{ post.description }}
        </p>
        <time class="text-gray-500 dark:text-white mb-3">
          {{ formatDate(post.published_at, $i18n.locale) }}
        </time>
        <span class="text-sm text-gray-500 dark:text-white"
          >{{ post.reading_time_minutes }} {{ $t("blog.minRead") }}</span
        >
      </div>
    </article>
  </NuxtLink>
</template>
<script setup lang="ts">
type Post = {
  path: string;
  title: string;
  readable_publish_date: string;
  description: string;
  tag_list?: string[];
};

defineProps({
  post: {
    type: Object,
    required: true,
    validator: (value: Post) => {
      if (value?.path && value.title) {
        return true;
      }
      return false;
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
</script>
