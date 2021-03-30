<template>
  <slither-slider :options="{ fullscreen: true, dots: false }">
    <!-- Slide 1 -->
    <div
      class="flex items-center justify-center text-white bg-red-600 slideHeight"
    >
      <div v-if="$i18n.locale == 'tr'" class="merhaba">
        <video width="320" height="240" controls>
          <source src="/video/tanitimTR.mp4" type="video/mp4" />
        </video>
      </div>
      <div v-if="$i18n.locale == 'en'" class="merhaba">
        <video width="320" height="240" controls>
          <source src="/video/tanitimTR.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <!-- Slide 2 -->
    <div
      class="flex items-center justify-center text-white bg-indigo-600 slideHeight"
    >
      <img class="merhaba" src="https://picsum.photos/id/237/200/300" />
    </div>

    <!-- Slide 3 -->
    <div
      class="flex items-center justify-center text-white bg-yellow-600 slideHeight"
    >
      <p class="text-5xl merhaba">Gawd</p>
    </div>
    <div
      class="flex items-center justify-center text-white bg-yellow-600 slideHeight"
    >
      <div class="h-64 bg-indigo-300 merhaba">
        <h2 class="text-5xl">
          Designing awesome brands <br />
          experiences
        </h2>
      </div>
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

<script>
export default {
  data() {
    return {
      animationObject: {
        classes: 'merhaba',
        duration: 2000,
      },
    }
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
.merhaba {
  -webkit-animation-name: merhaba;
  animation-name: merhaba;
  -webkit-animation-duration: 1.8s;
  animation-duration: 1.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes merhaba {
  0% {
    -webkit-transform: translateY(1000%);
    transform: translateY(1000%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes merhaba {
  0% {
    -webkit-transform: translateY(1000%);
    transform: translateY(1000%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>