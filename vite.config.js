import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/chatbot-dyc/',
  server: {
    host: true, // Permite acceso desde la red local
    port: 5173, // Puerto específico (opcional)
    open: true, // Abre automáticamente el navegador (opcional)
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gemini: ['@google/generative-ai']
        }
      }
    }
  }
})
