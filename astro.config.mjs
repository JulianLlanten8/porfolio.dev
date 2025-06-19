import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [
    robotsTxt({
      policy: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
        { userAgent: 'Bingbot', allow: '/' },
      ],
      sitemap: true,
      host: 'https://julianll.dev/',
      additionalSitemaps: [
        'https://julianll.dev/sitemap.xml'
      ],
    }),
  ],
  site: 'https://julianll.dev/',
   vite: {
    plugins: [tailwindcss()],
  },
})
