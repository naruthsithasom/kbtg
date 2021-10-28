 export default {
  loading: {
    continuous: false,
    color: '#fff'
  },
  ssr: false,
  target: "static",
  server: {
    port: 3000,
  },
  head: {
    title: "KBTG INSPIRE",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "" },
      { ["http-equiv"]: "X-UA-Compatible", content: "IE-edge" },
      { hid: "description", name: "description", content: "" },
      {name:"facebook-domain-verification" ,content:"854k12xqe83ikkh3n6kxdwmhcifa9a"},
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon32.svg",
      },
    ],
  },
  css: [
    { src: "~/assets/css/reset.css" },
    { src: "~/assets/css/print.css" },
    { src: "~/assets/css/bootstrap.min.css" },
    { src: "~/assets/css/layout.css" },
    { src: "~/assets/flexslider/flexslider.css" },
    { src: "~/assets/WOW-master/css/libs/animate.css" },
    { src: "~/assets/WOW-master/css/site.css" },
  ],
  plugins: [
    "~/plugins/vue-wow.js",
    "~/plugins/navbar-link.js",
    "~/plugins/axios.js",
  ],
  components: true,
  babel: { compact: true },
  buildModules: [],
  build: {},
  bootstrapVue: {
    icons: true,
  },
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/proxy",
    "nuxt-i18n",
  ],
  axios: {
    proxy: true,
  },
  // proxy: {
  //   "/api/": {
  //     target: process.env.AXIOS_SERVER,
  //     pathRewrite: { "^/api/": "" },
  //   },
  // },
  i18n: {
     locales: [
      { code: "en", iso: "en-US", file: "./static/lang/en.json" },
      { code: "th", iso: "th-TH", file: "./static/lang/en.json" },
    ],
    noPrefixDefaultLocale: true,
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "",
      messages: {
        en: require("./static/lang/en.json"),
        th: require("./static/lang/th.json"),
      },
    },
  },
  };
