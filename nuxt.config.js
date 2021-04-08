 
export default {
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: "custom",
  //       path: "*",
  //       component: resolve(__dirname, "pages/404.vue"),
  //     });
  //   },
  // },
  loading: {
    continuous: true,
  },
  ssr: false,
  target: "static",
  server: {
    port: 80,
  },
  // static: {
  //   prefix: false,
  // },
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
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon32.svg",
      },
    ],
  
  },
  script: [
    {
      src: "js/bootstrap.bundle.min.js",
    },
    {
      src: "js/agenda-tap.js",
    },
  ],
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
  buildModules: [],
  build: {},
  bootstrapVue: {
    icons: false,
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
  proxy: {
    "/api/": {
      target: process.env.AXIOS_SERVER,
      pathRewrite: { "^/api/": "" },
    },
  },
  i18n: {
    // parsePages: false,
    // encodePaths: false,
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
  // devtool: "inline-source-map",
  // loaders: [{ test: /\.js$/, loader: "babel", query: { compact: false } }],
};
