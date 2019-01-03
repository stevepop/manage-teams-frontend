const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    "element-ui/lib/theme-chalk/index.css",
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/axios",
    "~/plugins/filters",
    "~/plugins/mixins/user",
    "~/plugins/element-ui",
    "~/plugins/mixins/validation",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faCog', 'faCalendar', 'faHome', 'faCircle', 'faCheck', 'faSpinner']
        }
      ]
    }]
  ],
    
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://127.0.0.1:4000'
  },

  router: {
   
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "/auth/me",
            method: "get",
            propertyName: "data"
          },
          logout: {
            url: "logout",
            method: "post"
          }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      home: '/'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
