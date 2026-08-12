import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset URLs relative so the build works on GitHub Pages
// under any repo name, paired with hash-based routing.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
