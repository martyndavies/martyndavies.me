import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://martyndavies.me',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'static',
  adapter: cloudflare()
})