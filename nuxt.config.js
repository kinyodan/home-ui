
// eslint-disable-next-line nuxt/no-cjs-in-config
const fs = require('fs')
// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')

const ENV_DEV = true

// Development Environment
// let port = 3000
let host = 'localhost'
let https = false

// Production Environment
if (ENV_DEV === false) {
  // port = 3000 // make sure this port is open on your server you can do that via WHM or talk to you hosting company
  // eslint-disable-next-line no-unused-vars
  host = 'wankimani.com'
  // eslint-disable-next-line no-unused-vars
  https = {
    key: fs.readFileSync(
      path.resolve(__dirname, './../../ssl/keys/<ssl-key-file-name>.key')
    ),
    cert: fs.readFileSync(
      path.resolve(__dirname, './../../ssl/certs/<ssl-crt-file-name>.crt')
    ),
  }
}

export default {
  debug: true,
  ssr: true,
  target: 'server',

  server: {
    host: '0.0.0.0',
    // port,
    timing: false,
  },
  static: {
    prefix: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wankimani',
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
