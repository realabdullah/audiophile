// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          name: "description",
          content:
            "Audiophile, your best all-in-one stop for high-quality audio gear.",
        },
      ],
    },
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/core/_variables.scss"; @import "@/assets/scss/utils/_mixins.scss";`,
        },
      },
    },
  },
  imports: {
    dirs: ["store"],
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  devtools: { enabled: true },
});
