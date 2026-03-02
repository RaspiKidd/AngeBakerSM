// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      title: 'Your Social Brand',
      meta: [
        { name: 'description', content: 'Your brand description here' }
      ]
    }
  },

  nitro: {
    preset: 'static'
  },
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image',
  ]
})