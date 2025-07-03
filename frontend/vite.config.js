import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    server: {
    proxy: {
      '/api': 'http://127.0.0.1:8000',  // Pointage vers le backend Laravel
      '/sanctum/csrf-cookie': 'http://127.0.0.1:8000',  // CSRF cookie route
    },
    port: 5174,  // Si vous souhaitez spécifier explicitement le port de Vite
  },
})
