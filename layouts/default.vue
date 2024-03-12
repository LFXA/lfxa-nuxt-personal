<template>
  <div
    class="bg-slate-100 mx-auto dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <!-- App header -->
    <AppHeader />

    <!-- Render contents with transition -->
    <NuxtPage />

    <!-- App footer -->
    <AppFooter />

    <!-- Go back to top when scrolled down -->
    <div
      class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
    >
      <BackToTop />
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";

export default {
  components: { AppFooter, BackToTop, AppHeader },
  data: () => {
    return {};
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.page-enter-active {
  animation: coming 0.9s;
  animation-delay: 0.2s;
  opacity: 0;
}

.page-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
