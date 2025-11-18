import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xxcelltowing.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()],
  adapter: netlify({
    devFeatures: {
      environmentVariables: true
    }
  })
});
