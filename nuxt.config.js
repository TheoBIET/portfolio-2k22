export default {
  target: 'static',

  server: {
    port: 8080,
    host: '0.0.0.0',
  },

  head: {
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/scss/index.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [],

  build: {},
}
