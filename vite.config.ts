import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3000,
    https: false,
    proxy: {

    }
  },
  optimizeDeps: {
    // include: ["moment", "echarts", "axios", "mockjs"]
  },
  plugins: [vue()],
  alias: {
    '/@': path.resolve(__dirname, './src')
  },
})
