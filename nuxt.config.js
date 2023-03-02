export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel Obode - Frontend Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Daniel Obode a.k.a Hoodiedan is a Frontend Engineer based in Lagos, Nigeria. He specializes in using frontend frameworks to convert UI mockups to sleek high performant websites and web applications.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Daniel Obode' },

      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-desc', property:'og:description', content: 'Daniel Obode a.k.a Hoodiedan is a Frontend Engineer based in Lagos, Nigeria. He specializes in using frontend frameworks to convert UI mockups to sleek high performant websites and web applications.' },
      { hid: 'og:image', property:'og:image', content: './my-logo.jpeg' },
      { hid: 'og-title', property:'og:title', content: 'Daniel Obode - Frontend Developer' },
      // { hid: 'og-url', property: 'og:url', content: 'https://domain.com/my-post' },

      { hid: 'description', name:'twitter:description', content: 'Daniel Obode a.k.a Hoodiedan is a Frontend Engineer based in Lagos, Nigeria. He specializes in using frontend frameworks to convert UI mockups to sleek high performant websites and web applications.' },
      { hid: 'image', name:'twitter:image', content: './assets/images/handsome.jpeg' },
      { hid: 'title', name:'twitter:title', content: 'Daniel Obode - Frontend Developer' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './my-logo.jpeg' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' },
      { rel:"preconnect", href:"https://fonts.googleapis.com" },
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossOriginIsolated: true },
      { href:"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap", rel:"stylesheet" }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
      },
      {
        src: 'https://kit.fontawesome.com/95cad2bb6a.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/main.css',
  ],

  js: [
    'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js'
  ],

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop + 80, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src:'~/plugins/cursor-fx.client.ts', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
