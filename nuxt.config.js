export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PyCon JP 2021',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'PyCon JP 2021 Confelence',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://2021.pycon.jp/' },
      { hid: 'og:title', property: 'og:title', content: 'PyCon JP 2021' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'PyCon JPは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/pyconjp/pycon.jp.2021/master/assets/images/ogp-logo.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ress'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/swiper' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      Roboto: true,
      Oswald: true,
      'Noto Sans JP': [400, 500, 600, 700, 900],
      'Source Sans Pro': [400, 500, 600, 700, 900],
      Montserrat: [400, 700, 900],
    },
    display: 'swap',
  },

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  i18n: {
    vueI18nLoader: true,
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
      },
      {
        code: 'ja',
        iso: 'ja',
        file: 'ja.json',
      },
    ],
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      silentTranslationWarn: true,
    },
  },
}
