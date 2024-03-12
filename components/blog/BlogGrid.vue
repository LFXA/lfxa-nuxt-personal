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
  posts: {
    type: Array,
  },
  postPerPage: {
    default: 4,
    type: Number,
  },
});

const currentPage = ref(1);

const filteredBlogPosts = computed(() => {
  return props.posts
    ?.filter((post) => {
      const postLang = post.canonical_url.split("/")[3];
      const isSameLanguage = postLang === locale.value;
      const hasTagQuery = route.query.tag !== undefined;
      return (
        isSameLanguage &&
        (!hasTagQuery || post.tag_list.includes(route.query.tag))
      );
    })
    .slice(
      props.postPerPage * (currentPage.value - 1),
      currentPage.value * props.postPerPage,
    );
});

const totalPages = computed(() =>
  Math.ceil(filteredBlogPosts.value.length / props.postPerPage),
);

const tags = computed(() => {
  const tagCounts = {};
  // add lang filter
  props.posts?.forEach((post) => {
    const lang = post.canonical_url.split("/")[3];
    post.tag_list.forEach((tag) => {
      const key = tag + ":" + lang;
      if (tagCounts[key]) {
        tagCounts[key]++;
      } else {
        tagCounts[key] = 1;
      }
    });
  });

  const output = [];
  for (const tagLang in tagCounts) {
    const key = tagLang.split(":");
    output.push({ name: key[0], quantity: tagCounts[tagLang], lang: key[1] });
  }
  output.sort((a, b) => a.name.localeCompare(b.name));
  return output;
});
</script>

<template>
  <div
    v-if="filteredBlogPosts?.length"
    class="grid grid-cols-5 container h-full md:grid-flow-col grid-flow-row gap-4 justify-items-center mx-5 md:px-0"
  >
    <TransitionGroup name="post">
      <BlogPostListItem
        v-for="(post, index) in filteredBlogPosts"
        :key="index"
        :featured="filteredBlogPosts[0].id === post.id"
        :post="post"
      />
    </TransitionGroup>
    <BlogTagList class="md:row-span-2 row-span-1 col-span-5" :tags="tags" />
    <SharedPagination
      v-show="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @next-page="currentPage++"
      @prev-page="currentPage--"
    />
  </div>
  <div
    v-else
    class="h-screen flex flex-col items-center container justify-center center text-primary-dark dark:text-primary-light"
  >
    <p>{{ $t("blog.withoutPosts") }}</p>
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