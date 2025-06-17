import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt()],
  site: 'https://julianll.dev/',
   vite: {
    plugins: [tailwindcss()],
  },
})
