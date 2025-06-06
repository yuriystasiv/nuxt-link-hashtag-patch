// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  // This reverts the new srcDir default from `app` back to your root directory
  srcDir: ".",
  // This specifies the directory prefix for `app/router.options.ts` and `app/spa-loading-template.html`
  dir: {
    app: "app",
  },
});
