import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://localhost:5173/Intensivao-javascript_3-Vite-React-Hashtaurante/",
})