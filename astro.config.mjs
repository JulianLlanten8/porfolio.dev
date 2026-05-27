import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: 'https://julianll.dev/',
  integrations: [
    robotsTxt({
      policy: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
        { userAgent: 'Bingbot', allow: '/' },
      ],
      sitemap: true,
      host: 'https://julianll.dev/',
      additionalSitemaps: ['https://julianll.dev/sitemap.xml'],
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
})