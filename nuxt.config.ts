// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-16x16.png",
          sizes: "16x16",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
        },
      ],
      meta: [
        {
          name: "theme-color",
          content: "#EAA121",
        },
      ],
      titleTemplate: "%s | GSE",
    },
  },
  imports: {
    presets: [
      {
        from: "radix-vue",
        imports: [
          "useForwardPropsEmits",
          "useForwardProps",
          "useEmitAsProps",
          "Primitive",
        ],
      },
    ],
  },

  i18n: {
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
    },
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "ENGLISH",
        dir: "ltr",
      },
      {
        code: "ar",
        file: "ar.json",
        name: "عربى",
        dir: "rtl",
      },
    ],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  experimental: {
    typedPages: true,
  },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
})
