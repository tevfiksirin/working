<template>
  <slither-slider :options="{ fullscreen: true, dots: false }">
    <!-- Slide 1 -->
    <div
      class="flex items-center justify-center text-white bg-red-600 slideHeight"
    >
      <div v-if="$i18n.locale == 'tr'" v-animate-css="animationObject">
        <video width="320" height="240" controls>
          <source src="/video/tanitimTR.mp4" type="video/mp4" />
        </video>
      </div>
      <div v-if="$i18n.locale == 'en'" v-animate-css="animationObject">
        <video width="320" height="240" controls>
          <source src="/video/tanitimTR.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <!-- Slide 2 -->
    <div
      class="flex items-center justify-center text-white bg-indigo-600 slideHeight"
    >
      Mah
      <img
        v-animate-css="animationObject"
        src="https://picsum.photos/id/237/200/300"
      />
    </div>

    <!-- Slide 3 -->
    <div
      class="flex items-center justify-center text-white bg-yellow-600 slideHeight"
    >
      <p class="text-5xl" v-animate-css="animationObject">Gawd</p>
    </div>

    <template slot="previous">
      <div class="w-8 h-8 text-white bg-blue-400 hover:bg-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </template>
    <template slot="next">
      <div class="w-8 h-8 text-white bg-blue-400 hover:bg-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div> </template
  ></slither-slider>
</template>
  </slither-slider>
</template>
<script>
export default {
  data() {
    return {
      animationObject: {
        classes: 'slideInUp',
        duration: 2000,
      },
    }
  },
  mounted() {
    new GLightbox({
      selector: '.video',
      touchNavigation: true,
      loop: true,
    })
  },
}
</script>
<style>
.slither-slider-controls {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;
}
.slideHeight {
  height: 100vh;
}
</style>