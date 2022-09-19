/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX()],
  base: '/valtify/',
  test: {
    // open test api env like jest
    globals: true,
    // simulate the dom env
    environment: 'happy-dom',
    // support tsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})
