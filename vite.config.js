import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/RK/', // Adjust this if your app is served from a subpath
  plugins: [react()],
})
