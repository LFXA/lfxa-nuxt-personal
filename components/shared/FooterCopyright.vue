<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      projectName: "Nuxt.js & Tailwind CSS Portfolio",
      author: "LFXA",
    };
  },
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      {{ $t("footerMsg1") + author + ". " + $t("footerMsg2") }}
      <a
        href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        {{ projectName }}
      </a>
    </div>
  </div>
</template>

<style scoped></style>
