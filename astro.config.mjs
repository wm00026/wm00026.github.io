import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://flak.github.io',
  markdown: {
    shikiConfig: {
      // Tokyo Night is a built-in Shiki theme — it's actually the same
      // palette your original .code-block CSS was already imitating
      // (#1a1b26 bg, #c0caf5 text), so the highlighted code will look
      // almost identical to what you had, just with real token colors.
      theme: 'tokyo-night',
      wrap: true,
    },
  },
});