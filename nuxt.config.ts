// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

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

  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
})
