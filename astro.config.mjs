import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://konradkubczyk.com/",
  integrations: [
    tailwind(),
    sitemap(),
    svelte()
  ],
  outDir: "public",
  publicDir: "static",
  server: {
    port: 3000
  }
});
