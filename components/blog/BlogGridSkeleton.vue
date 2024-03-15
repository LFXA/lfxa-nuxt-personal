<template>
  <div
    class="grid grid-cols-6 container h-screen md:grid-flow-col grid-flow-row gap-4 justify-items-center my-10 mx-10 md:px-0"
  >
    <a class="md:col-span-4 col-span-5">
      <article class="flex flex-col gap-4 p-3 mb-6 lg:flex-row md:gap-8">
        <ReusableSkeletonLoader class="w-full h-48 sm:w-96 mb-4" />
        <div class="flex flex-col">
          <ReusableSkeletonLoader class="h-3.5 w-96 mb-4" />
          <ReusableSkeletonLoader class="h-2.5 w-96 mb-3" />
          <ReusableSkeletonLoader class="h-2.5 w-96 mb-4" />
        </div>
      </article>
    </a>
    <a v-for="i in 4" :key="i" class="lg:col-span-1 md:col-span-2 col-span-5">
      <article class="flex flex-col gap-4 rounded-lg p-3 mb-6">
        <ReusableSkeletonLoader class="w-1/2 h-48 sm:w-48 mb-4">
        </ReusableSkeletonLoader>
        <div class="flex flex-col">
          <ReusableSkeletonLoader class="h-3.5 w-48 mb-4 leading-7" />
          <ReusableSkeletonLoader class="h-2.5 w-48 mb-3" />
          <ReusableSkeletonLoader class="h-2.5 w-48 mb-4" />
        </div>
      </article>
    </a>
    <div class="md:row-span-2 row-span-1 col-span-5 md:col-span-2">
      <div
        class="flex flex-col text-ternary-dark dark:text-ternary-light lg:mt-0 lg:ml-7"
      >
        <h3 class="text-2xl my-6">Tags</h3>
        <div class="flex flex-wrap">
          <div>
            <ReusableSkeletonLoader
              v-for="i in 7"
              :key="i"
              class="mb-3 mr-2 p-2 w-full flex-1 text-md font-semibold h-fit box-border shadow-lg rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
