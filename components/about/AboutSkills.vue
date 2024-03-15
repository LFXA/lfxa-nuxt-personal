<script>
import { mapState } from "vuex";
export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutMeTools"]),
  },
};
</script>
<template>
  <div class="mt-10 sm:mt-20 bg-slate-200 dark:bg-ternary-dark shadow-sm">
    <div
      class="font-general-regular container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 content-start text-left"
    >
      <div
        v-for="aboutTools in aboutMeTools"
        :key="aboutTools.id"
        class="mb-20 p-6 shrink sm:mb-0"
      >
        <p
          class="font-general-semibold text-ternary-dark dark:text-ternary-light text-xl"
        >
          {{ $t(aboutTools.title) }}
        </p>
        <div
          class="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-4 justify-items-start mt-5"
        >
          <div
            v-for="tool in aboutTools.tools"
            :key="tool.text"
            class="box-border hover:bg-slate-400 h-16 w-full bg-slate-300 dark:bg-cyan-900 hover:dark:bg-cyan-700 shadow-lg rounded-lg justify-self-auto flex justify-center items-center"
          >
            <div class="rounded-lg flex mx-3">
              <Icon :name="tool.icon" class="flex-shrink-0 h-5 w-5" />
            </div>
            <span
              class="flex-1 text-md text-ternary-dark dark:text-ternary-light"
              >{{ tool.text }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
