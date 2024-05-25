import { defineConfig, Plugin } from 'vite'

export default defineConfig({
  clearScreen: false,
  plugins: [
  ],
  define: {
    __DEV__: 'true',
    __BROWSER__: 'true',
  },
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
})