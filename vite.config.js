import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  rules: {
    'vue/multi-word-component-names': 'off',  
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
