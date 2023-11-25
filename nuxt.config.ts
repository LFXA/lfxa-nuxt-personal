// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  app: {
    head: {
      title: "LFXA personal.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    }
  },
  css: ['@/assets/app.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/i18n', 'nuxt-icon'],
  i18n: {
    customRoutes: 'config',   // disable custom route with page components
    pages: {
      about: {
        "pt-BR": '/sobre',
      },
      projects: {
        "pt-BR": '/projetos'
      }
    },
    locales: [
      {
        code: 'en-US',
        name: 'menu.english'
      },
      {
        code: 'pt-BR',
        name: 'menu.portuguese'
      }
    ],
    vueI18n: './i18n.config.ts'
  }
})