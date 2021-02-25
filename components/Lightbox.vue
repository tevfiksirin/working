<template>
  <div>
    <div id="app">
      <CoolLightBox :items="items" :index="index" @close="index = null">
      </CoolLightBox>

      <div class="container flex gap-4 pt-16 mx-auto images-wrapper">
        <div
          class="w-1/2 h-64 bg-right bg-cover image"
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  data: function () {
    return {
      items: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: 'Selam',
          thumb: '/img/first.jpg',
          src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
        },
      ],
      index: null,
    }
  },
}
</script>