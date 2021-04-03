export default {
  ssr: false,
  target: "static",
  server: {
    port: 80,
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
    ],
    // link: [
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     href: "/Asset16 _32x32.png",
    //   },
    //   {
    //     rel: "stylesheet",
    //     href:
    //       "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
    //   },
    // ],
    // link: [
    //   {
    //     rel: "preconnect",
    //     href: "https://fonts.gstatic.com",
    //   },
    // ],
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href:
    //       "https://fonts.googleapis.com/css2?family=Kanit:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap",
    //   },
    // ],
    // link: [
    //   {
    //     rel: "stylesheet",
    //     href:
    //       "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap",
    //   },
    // ],
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
  plugins: ["~/plugins/vue-wow.js", "~/plugins/navbar-link.js"],
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
    locales: ["en", "th"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: require("./static/lang/en.json"),
        th: require("./static/lang/th.json"),
      },
    },
  },
  devtool: "inline-source-map",
  loaders: [{ test: /\.js$/, loader: "babel", query: { compact: false } }],
};

