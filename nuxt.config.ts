// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Kanit: [300, 400, 500, 700],
      Prompt: [300, 400, 500, 700],
    },
    display: 'swap',
  },
})