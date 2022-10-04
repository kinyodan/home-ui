export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Art Factory HTML CSS Template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "author", content: "Template Mo"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      { rel: "stylesheet", type: "text/css", href: "/css/bootstrap.min.css"},
      { rel: "stylesheet", type: "text/css", href: "/css/font-awesome.css"},
      { rel: "stylesheet", type: "text/css", href: "/css/templatemo-art-factory.css"},
      { rel: "stylesheet", type: "text/css", href: "/css/owl-carousel.css"}
    ],
    script: [
      {  src: "/js/jquery-2.1.0.min.js",         
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
      },
     {  src: "/js/popper.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
     },
     {  src: "/js/bootstrap.min.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
     },
     {  src: "/js/owl-carousel.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
     },
     {  src: "/js/scrollreveal.min.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
     },
     {  src: "/js/waypoints.min.js", 
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
     },
     {  src: "/js/jquery.counterup.min.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
      },
      {  src: "/js/imgfix.min.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
      },
      {  src: "/js/custom.js",
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
      },
      {
        src: 'https://use.fontawesome.com/615cd18d3e.js',
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
      },
      {
        src: 'https://apis.google.com/js/platform.js',
        type: 'text/javascript',
        defer: true,
        body: true,
        rel: 'dns-prefetch',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
