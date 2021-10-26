<template>
  <section class="text-gray-600 body-font">
    <div
      class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
    >
      <div
        class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
      >
        <h1
          class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"
        >
          <slot name="content-image-title">default</slot>
          <br class="hidden lg:inline-block" />readymade gluten
        </h1>
        <p class="mb-8 leading-relaxed">
          <slot name="content-image-subtitle">default</slot>
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            <slot name="content-image-button1">buton1</slot>
          </button>
          <button
            class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
          >
            <slot name="content-image-button2">default</slot>
          </button>
        </div>
      </div>
      <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <slot name="content-image-resim">default</slot>
      </div>
    </div>
  </section>
</template>


<script>
export default {}
</script>

<style>
</style>