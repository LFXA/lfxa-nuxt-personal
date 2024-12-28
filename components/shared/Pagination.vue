<script setup>
defineProps({
  currentPage: {
    required: true,
    type: Number,
  },
  totalPages: {
    required: true,
    type: Number,
  },
});
</script>
<template>
  <div
    class="text-primary-dark dark:text-primary-light"
  >
    <nav class="flex justify-around">
      <button
        rel="previous"
        :class="{ 'cursor-auto disabled:opacity-50': !prevPage }"
        :disabled="!prevPage"
        @click="decreasePage"
      >
        {{ $t("paginationPrev") }}
      </button>
      <span> {{ currentPage }} {{ $t("paginationOf") }} {{ totalPages }} </span>
      <button
        rel="next"
        :class="{ 'cursor-auto disabled:opacity-50': !nextPage }"
        :disabled="!nextPage"
        @click="increasePage"
      >
        {{ $t("paginationNext") }}
      </button>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
    prevPage: function () {
      return parseInt(this.currentPage) - 1 > 0;
    },
    nextPage: function () {
      return parseInt(this.currentPage) + 1 <= parseInt(this.totalPages);
    },
  },
  methods: {
    increasePage() {
      this.$emit("next-page");
    },
    decreasePage() {
      this.$emit("prev-page");
    },
  },
};
</script>
