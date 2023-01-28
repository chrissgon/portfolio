// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  imports: {
    dirs: ["store"],
  },

  css: ["@/assets/index.css"],

  app: {
    head: {
      title: "Chrissgon Portfolio",

      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js",
        },
        {
          src: "/parallax.js",
        },
      ],
    },
  },

  tailwindcss: {
    viewer: false,
  },
});
