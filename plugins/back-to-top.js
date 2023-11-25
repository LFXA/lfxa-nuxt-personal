import BackToTop from "vue-backtotop";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(BackToTop)
})