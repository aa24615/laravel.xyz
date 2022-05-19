import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  router: {
    options: {
      linkActiveClass: 'bg-gray-200 dark:bg-gray-700 text-gray-200',
      linkExactActiveClass: 'bg-gray-200 dark:bg-gray-700 text-gray-200',
    },
  },
  modules: [],
  supabase: {
    // Options
  },
  css: ['@/assets/styles/styles.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
