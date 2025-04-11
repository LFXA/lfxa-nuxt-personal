import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { setActivePinia, createPinia, defineStore } from 'pinia';
import { useBlogStore } from '../store/blog.js'; // adjust path to your store

global.fetch = vi.fn();

describe('useBlogStore', () => {
  let blogStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    blogStore = useBlogStore();
    fetch.mockReset();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('sets posts view', () => {
    const mockPosts = [{ id: 1, title: 'Test' }];
    blogStore.setPostsView(mockPosts);
    expect(blogStore.postsView).toEqual(mockPosts);
  });

  it('adds a post to posts', () => {
    const newPost = { id: 1, slug: 'my-post', title: 'Hello World' };
    blogStore.setPosts(newPost);
    expect(blogStore.posts).toContainEqual(newPost);
  });

  it('gets post by slug from state', () => {
    const post = { id: 1, slug: 'test-slug' };
    blogStore.posts = [post];
    const found = blogStore.getPostBySlug('test-slug');
    expect(found).toEqual(post);
  });

  it('fetchPostBySlug returns cached post', async () => {
    const cachedPost = { slug: 'cached', title: 'Cached Post' };
    blogStore.posts = [cachedPost];
    const result = await blogStore.fetchPostBySlug('cached');
    expect(fetch).not.toHaveBeenCalled();
    expect(result).toEqual(cachedPost);
  });

  it('fetchPostBySlug fetches and stores post if not cached', async () => {
    const post = { slug: 'new-post', title: 'New Post' };
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(post),
    });

    const result = await blogStore.fetchPostBySlug('new-post');

    expect(fetch).toHaveBeenCalledWith('https://dev.to/api/articles/lfxa/new-post');
    expect(blogStore.posts).toContainEqual(post);
    expect(result).toEqual(post);
  });

  it('fetchPosts fetches and sets postsView if not already present', async () => {
    const posts = [{ id: 1, title: 'Loaded Post' }];
    blogStore.postsView = [];

    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(posts),
    });

    await blogStore.fetchPosts();

    expect(fetch).toHaveBeenCalledWith('https://dev.to/api/articles?username=lfxa&state=all');
    expect(blogStore.postsView).toEqual(posts);
  });

  it('fetchPosts does not fetch if postsView already populated', async () => {
    blogStore.postsView = [{ id: 1 }];
    await blogStore.fetchPosts();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('handles fetchPostBySlug error', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(blogStore.fetchPostBySlug('error-slug')).rejects.toThrow('Network error');
    expect(blogStore.error).toBe(true);
  });

  it('handles fetchPosts error', async () => {
    blogStore.postsView = [];
    fetch.mockRejectedValueOnce(new Error('Failed'));

    await blogStore.fetchPosts();

    expect(blogStore.error).toBe(true);
  });
});