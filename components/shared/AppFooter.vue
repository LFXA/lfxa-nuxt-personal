<script>
import { mapState } from "vuex";
import FooterCopyright from "./FooterCopyright.vue";
export default {
  components: { FooterCopyright },
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
};
</script>

<template>
  <div>
    <div
      class="pt-10 p-4 border-t-1 border-primary-light dark:border-secondary-dark bg-slate-200 dark:bg-secondary-dark"
    >
      <!-- Footer social links -->
      <div class="flex flex-col justify-center items-center mb-6 sm:mb-10">
        <ul class="flex gap-4 sm:gap-6">
          <a
            v-for="social in socialProfiles"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-3 duration-500"
          >
            <client-only>
              <font-awesome-icon
                :icon="['fab', social.icon]"
                class="text-xl w-4 sm:w-4 h-3 sm:h-2"
              />
            </client-only>
          </a>
        </ul>
      </div>
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>
