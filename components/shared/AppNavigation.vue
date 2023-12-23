<script>
export default {
  props: ["isOpen"],
  methods: {
    isRouteActive(id) {
      if (this.$route.path.includes(id.toLowerCase())) {
        return true
      } else {
        return false
      }
    }
}
};
</script>
<script setup>
const localePath = useLocalePath()
</script>
<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
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
    <NuxtLink :to="localePath('about', $i18n.locale)"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-cyan-700
        dark:hover:text-cyan-700
        sm:mx-4
        mb-2
        sm:py-2
        border-primary-light
        dark:border-secondary-dark"
        :class="{'nuxt-link-active': isRouteActive($t('menu.about')) }"
      :aria-label="$t('menu.about')"
      >{{$t('menu.about')}}</NuxtLink 
    >
  </div>
</template>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-500 dark:text-indigo-400;
}
</style>
