export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  components: [
    {
      path: '~/components',
     pathPrefix: false,
    }
  ],
  css: ['~/assets/global.css'],
})
