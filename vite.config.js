import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/org GitHub Pages site (username.github.io) -> base '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
