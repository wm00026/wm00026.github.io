import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wm00026.github.io',
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
      wrap: true,
    },
  },
});