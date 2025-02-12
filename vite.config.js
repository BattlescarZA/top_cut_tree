import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '8526-196-210-33-56.ngrok-free.app',
      '.ngrok-free.app' // Allow all ngrok subdomains
    ]
  }
})
