import env from 'dotenv'
env.config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ss-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/animate.css',
    '@/assets/css/flaticon.css',
    '@/assets/css/slick.css',
    '@/assets/css/line-awesome.min.css',
    '@/assets/css/nice-select.css',
    '@/assets/css/style.css',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/helpers.js', ssr:true},
    { src: '@/plugins/axios.js', ssr: false, },
    { src: '@/plugins/vuex-persist.js', ssr: false },
    { src: '@/plugins/light-gallery.js', ssr: false },
    { src: '@/plugins/js/jquery-3.6.0.min.js', ssr: false},
    { src: '@/plugins/js/jquery-migrate.min.js', ssr:false},
    { src: '@/plugins/js/slick.js', ssr:false},
    { src: "@/plugins/dynamic-map.js", ssr: false},
    { src: '@/plugins/js/jquery.nice-select.js', ssr:false},
    { src: '@/plugins/js/jquery.nicescroll.min.js', ssr:false},
    { src: '@/plugins/js/chart.js', ssr:false},
    { src: '@/plugins/js/main.js', ssr:false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/moment'
  ],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', 
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    /**
     * // Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyD2GMYKUwavEpi4r7nE7RWab7H0zO1Ptww",
        authDomain: "celv-collect.firebaseapp.com",
        projectId: "celv-collect",
        storageBucket: "celv-collect.appspot.com",
        messagingSenderId: "391820490847",
        appId: "1:391820490847:web:7e9ec236917543e83943ea",
        measurementId: "G-FEQ3XF1RP9"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
     */
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: 'celv-collect.firebaseapp.com',
          projectId: 'celv-collect',
          storageBucket: 'celv-collect.appspot.com',
          messagingSenderId: '391820490847',
          appId: '1:391820490847:web:7e9ec236917543e83943ea',
          measurementId: 'G-FEQ3XF1RP9'
        },
        services: {
          auth: {
            ssr: true
          },
          database: true,
        }
      }
    ]
  ],

  // Realtime Database in Firebase
  database: {
    emulatorPort: process.env.NODE_ENV === 'development' ? 3000 : undefined,
    emulatorHost: 'localhost',
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },

  auth: {
    persistence: 'local', // default
    ssr: true,
    emulatorPort: 3000,
    emulatorHost: process.env.WEB_BASE_URL,
  },

  /** Axios default configuration */
  axios: {
    /* baseURL: 'http://localhost:8088/api/v1/' unused as we use proxy */
    proxy: true,
  },

  /** Proxy object is used to prevent CORS problems */
  proxy: {},

  toast: {
    position: 'top-center',
    duration: 3000,
    keepOnHover: true,
    singleton: true,
    theme: "bubble",
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // External Resources
  head: {
    title: 'Search Service',
    script: [
      {
        src:"https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
      },
      {
        src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js", 
        integrity:"sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8", 
        crossorigin:"anonymous" ,
        body: true,
      },
    ]
  },
}
