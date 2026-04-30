<script setup>
const route = useRoute();
const { locale } = useI18n();

if (route.query.to !== undefined) {
  const toPost = route.query.to.split(",");
  const index = locale.value === "pt-BR" ? 0 : 1;
  await navigateTo(`/blog/${toPost[index]}`);
}

watch(
  () => locale.value,
  () => {
    delete route.query.tag;
  },
);

const props = defineProps({
  posts: { type: Array },
  postPerPage: { default: 6, type: Number },
});

const visibleCount = ref(props.postPerPage);

const allFilteredPosts = computed(() => {
  return (
    props.posts?.filter((post) => {
      const postLang = post.canonical_url.split("/")[3];
      const isSameLanguage = postLang === locale.value;
      const hasTagQuery = route.query.tag !== undefined;
      return isSameLanguage && (!hasTagQuery || post.tag_list.includes(route.query.tag));
    }) ?? []
  );
});

const visiblePosts = computed(() => allFilteredPosts.value.slice(0, visibleCount.value));
const hasMore = computed(() => visibleCount.value < allFilteredPosts.value.length);

watch([() => route.query.tag, () => locale.value], () => {
  visibleCount.value = props.postPerPage;
});

const sentinel = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasMore.value) {
        visibleCount.value += props.postPerPage;
      }
    },
    { threshold: 0.1 },
  );

  watch(sentinel, (el) => {
    if (el) observer.observe(el);
  }, { immediate: true });

  onUnmounted(() => observer.disconnect());
});

const tags = computed(() => {
  const tagCounts = {};
  props.posts?.forEach((post) => {
    const lang = post.canonical_url.split("/")[3];
    post.tag_list.forEach((tag) => {
      const key = tag + ":" + lang;
      tagCounts[key] = (tagCounts[key] ?? 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([key, quantity]) => {
      const [name, lang] = key.split(":");
      return { name, quantity, lang };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
});
</script>

<template>
  <div
    v-if="allFilteredPosts.length"
    class="flex flex-col md:flex-row gap-8 container min-h-screen px-4 md:px-0"
  >
    <!-- Posts column -->
    <div class="flex-1 min-w-0">
      <TransitionGroup
        name="post"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <BlogPostListItem
          v-for="(post, index) in visiblePosts"
          :key="post.id"
          :featured="index === 0"
          :post="post"
        />
      </TransitionGroup>

      <div ref="sentinel" class="h-10 flex items-center justify-center mt-4">
        <span v-if="hasMore" class="text-gray-400 dark:text-gray-600 text-sm animate-pulse">
          ···
        </span>
      </div>
    </div>

    <!-- Sticky tag sidebar -->
    <aside class="md:w-1/3 flex-shrink-0 md:sticky md:top-20 md:self-start">
      <BlogTagList :tags="tags" />
    </aside>
  </div>
</template>

<style scoped>
.post-move,
.post-enter-active,
.post-leave-active {
  transition: all 0.5s ease;
}
.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
