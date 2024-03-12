<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="font-general-regular m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <!-- <NuxtLink
      to="/projects"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
      "
      aria-label="Projects"
      >Projects</NuxtLink
    > -->
    <NuxtLink
      v-for="menu in menus"
      :key="menu.name"
      :to="localePath(menu.name, $i18n.locale)"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-cyan-700 dark:hover:text-cyan-700 sm:mx-4 mb-2 sm:py-2 border-primary-light dark:border-secondary-dark"
      :class="{
        'nuxt-link-active': isRouteActive(
          menu.i18n ? $t('menu.' + menu.name) : menu.name,
        ),
      }"
      :aria-label="menu.i18n ? $t('menu.' + menu.name) : menu.name"
      >{{
        menu.i18n ? $t("menu." + menu.name) : capitalizeFirstLetter(menu.name)
      }}</NuxtLink
    >
  </div>
</template>
<script>
export default {
  props: ["isOpen"],
  data() {
    return {
      menus: [
        { name: "about", i18n: true },
        { name: "blog", i18n: false },
      ],
    };
  },
  methods: {
    isRouteActive(id) {
      if (this.$route.path.includes(id.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>
<script setup>
const localePath = useLocalePath();
</script>
<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-500 dark:text-indigo-400;
}
</style>
