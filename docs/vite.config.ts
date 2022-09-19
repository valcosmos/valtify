import vueJSX from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vueJSX()],
  base: '/'
})
