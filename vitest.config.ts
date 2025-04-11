import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // or 'node' if you're not using any DOM APIs
    globals: true,
  },
});
