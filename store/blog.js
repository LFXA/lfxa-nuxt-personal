export const useBlogStore = defineStore("blog", {
  state: () => ({
    postsView: [],
    posts: [],
    pending: false,
    error: false,
  }),
  actions: {
    setPostsView(newPosts) {
      this.postsView = newPosts;
    },
    setPosts(newPosts) {
      this.posts.push(newPosts);
    },
    async fetchPostBySlug(slug) {
      // Fetch a post by slug if not already in the store
      const existingPost = this.getPostBySlug(slug);
      if (existingPost) {
        return existingPost;
      }
      this.pending = true;
      try {
        const response = await fetch(
          `https://dev.to/api/articles/lfxa/${slug}`,
        );
        const data = await response.json();
        this.setPosts(data);
        return data;
      } catch (err) {
        this.error = true;
        console.error(err);
        throw err;
      } finally {
        this.pending = false;
      }
    },
    async fetchPosts() {
      if (!this.postsView || this.postsView.length === 0) {
        this.pending = true;
        try {
          const response = await fetch(
            `https://dev.to/api/articles?username=lfxa&state=all`,
          );
          const data = await response.json();
          this.setPostsView(data);
        } catch (err) {
          this.error = true;
        } finally {
          this.pending = false;
        }
      }
    },
  },
  getters: {
    getPostBySlug: (state) => {
      return (slug) => state.posts.find((post) => post.slug === slug);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot));
}
