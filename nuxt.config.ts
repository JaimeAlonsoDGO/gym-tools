export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css', '~/assets/css/microtip.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English',
      },
      {
        code: 'es',
        file: 'es-ES.js',
        name: 'Español',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'es',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
