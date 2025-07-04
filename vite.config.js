import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: "/",
  server: {
    allowedHosts: [
      'plankton-app-g3ztv.ondigitalocean.app',
      'webdev.diveley.net'],
    open: true,
    port: 8080
  },
});
