export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'working',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/glightbox/glightbox.min.css',
      },
    ],
    script: [{ src: '/glightbox/glightbox.min.js', body: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/i18n.js' },
    { src: '~plugins/v-img.client.js' },
    { src: '~plugins/slither-slider.client.js' },
    { src: '~plugins/v-animate.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxt/image',
    'nuxt-use-motion',
  ],
  tailwindcss: {
    jit: true,
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
  motion: {},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],
  // Storybook config
  storybook: {
    addons: ['@storybook/addon-a11y', '@storybook/addon-controls'],
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  i18n: {
    locales: [
      {
        code: 'tr',
        iso: 'tr-TR',
        file: 'tr.js',
        dir: 'ltr',
        name: 'Türkçe',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        dir: 'ltr',
        name: 'English',
      },
    ],
    defaultLocale: 'tr',
    lazy: 'true',
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'tr',
    },
    detectBrowserLanguage: false,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
