export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config
  app: {
    head: {
      title: 'Gym tools',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      noscript: [{ children: 'JavaScript is required' }],
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css', '~/assets/css/microtip.css'],
  i18n: {
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix',
    customRoutes: 'config',
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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_gym-tools',
      redirectOn: 'root',
    },
    pages: {
      index: {
        en: '/',
        es: '/',
      },
      users: {
        en: '/users',
        es: '/usuarios',
      },
      settings: {
        en: '/settings',
        es: '/configuracion',
      },
      'settings/index/profile': {
        en: '/settings/profile',
        es: '/configuracion/perfil',
      },
      'settings/index/appearance': {
        en: '/settings/appearance',
        es: '/configuracion/aspecto',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/click-outside.js'],
});
