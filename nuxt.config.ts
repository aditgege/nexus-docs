import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  target: 'static',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
