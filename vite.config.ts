import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  md from "haze-md/plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),md()
  ],
})
