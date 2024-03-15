<script setup lang="ts">
const route = useRoute();
const localePath = useLocalePath();
const slug = route.params.slug;
const { locale } = useI18n();

onBeforeRouteLeave(async (to, from, next) => {
  if (
    post.value &&
    to.fullPath.split("/").pop() === from.fullPath.split("/").pop()
  ) {
    const last = post.value.canonical_url.split("/").pop();
    const toPost = last.replace("blog?to=", "").split(",");
    const index = locale.value === "pt-BR" ? 0 : 1;
    await next(`/${locale.value}/blog/${toPost[index]}`);
  }
  next();
});

const { data: post, pending } = await useFetch(
  "https://dev.to/api/articles/lfxa/" + slug,
  { lazy: true, server: false },
);
</script>
<template>
  <div
    v-if="!post || pending"
    class="h-screen flex flex-col items-center container justify-center center text-primary-dark dark:text-primary-light"
  >
    <p>{{ $t("blog.withoutPost") }}</p>
  </div>
  <div
    v-else-if="post && !pending"
    class="max-w-3xl px-4 sm:px-6 xl:max-w-5xl container m-auto mb-10"
  >
    <article>
      <div class="mb-10">
        <div class="relative z-0">
          <img
            :src="post.cover_image"
            :alt="post.title"
            class="flex rounded-md my-7"
          />
          <div
            class="absolute inset-0 flex flex-col items-center justify-center backdrop-contrast-50 bg-black/30 text-center text-primary-light rounded-md font-bold"
          >
            <h1 class="lg:text-5xl md:text-2xl text-md mt-6">
              {{ post.title }}
            </h1>
            <p class="my-7 md:text-md text-sm">
              {{ formatDate(post.published_at, $i18n.locale) }} -
              {{ post.reading_time_minutes }} {{ $t("blog.minRead") }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
      >
        <div
          class="blog-post xl:col-span-3 xl:row-span-2 space-y-6 text-xl text-primary-dark dark:text-primary-light"
          v-html="post.body_html"
        ></div>

        <div
          class="pt-4 divide-gray-200 text-md font-medium xl:col-start-1 xl:row-start-1"
        >
          <NuxtLink
            :to="localePath('blog', $i18n.locale)"
            class="text-primary-dark dark:text-primary-light hover:text-primary-600 dark:hover:text-primary-400"
          >
            &larr; {{ $t("blog.backToTheBlog") }}
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>
