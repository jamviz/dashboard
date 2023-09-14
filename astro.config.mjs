import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  site: 'https://jamviz.github.io',
  base: '/src/pages',
  integrations: [tailwind(), compress()],
});

