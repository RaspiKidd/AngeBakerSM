// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      title: 'Ange Baker Social Media ManagementSocial Media Manager for Small Businesses | Ange Baker',
      meta: [
        { name: 'description', 
          content: 'Helping small businesses and marketing consultants simplify social media with strategy, management and practical training that delivers results.' }
      ]
    }
  },

  nitro: {
    //preset: 'netlify',
    prerender: {
      routes: [
        '/contact',
        '/',
        '/about',
        '/services',
      ]
    }
  },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/image',
  ]
})