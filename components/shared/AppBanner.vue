<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {};
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left center">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-primary-dark dark:text-primary-light uppercase"
      >
        {{ $t("home.titleApresentation") }}
        <div class="wrapper-expand">
          <span class="expand-space"
            >L<span class="expand l-expand">ucas</span></span
          >
          <span class="expand-space"
            >F<span class="expand fx-expand">eli</span>X</span
          >
          <span>A<span class="expand a-expand">quino</span></span>
        </div>
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        {{ $t("home.descriptionApresentation") }}
      </p>
      <div class="flex justify-center sm:block mb-5">
        <a
          :href="$i18n.locale == 'pt-BR' ? '/LFXA-pt.pdf' : '/LFXA-en.pdf'"
          download=""
          class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg dark:shadow-slate-400 rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo- 00 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="$colorMode.value == 'dark'"
        src="/developer-dark.svg"
        alt="Developer Dark"
      />
      <img v-else src="/developer.svg" alt="Developer Light" />
    </div>
  </section>
</template>

<style scoped></style>
