import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'
import path from 'node:path'

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin(), tailwindcss()],
    resolve: {
    alias: { '@': path.resolve('./src') },
    tsconfigPaths: true
  },
})
