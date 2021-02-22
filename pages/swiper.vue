<template>
  <div class="relative">
    <div class="inset-0 flex w-full h-full">
      <!-- component: only render Swiper on browser env -->
      <client-only>
        <swiper
          ref="carousel"
          class="inset-0 w-full min-h-full swiper"
          :options="swiperOptions"
          @ready="onSwiperRedied"
          @clickSlide="onSwiperClickSlide"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
        >
          <swiper-slide>
            <div
              class="bg-slide1 sm:bg-right-top item slider-one__slider-1"
              style="background-image: url(/img/slide-video_1.jpg)"
            >
              <div class="items slider__content">
                <div
                  class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
                >
                  <h2>video gelecek</h2>
                </div>
                <!-- /.slider-one__text -->
              </div>
              <!-- /.container -->
            </div>
            <!-- /.item -->
          </swiper-slide>

          <swiper-slide>
            <div
              class="bg-center item slider-one__slider-1"
              style="background-image: url(/img/slide2.jpg)"
            >
              <div class="items slider__content">
                <div
                  class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
                >
                  <p class="text-6xl font-bold text-white slider-one__text">
                    Timhan Tekstil
                  </p>
                  <div
                    class="text-2xl slider-one__title tp-caption tp-resizeme"
                  >
                    Güçlü Tedarikçiniz!
                  </div>
                </div>
                <!-- /.slider-one__text -->
              </div>
              <!-- /.container -->
            </div>
            <!-- /.item -->
          </swiper-slide>
          <swiper-slide>
            <div
              class="bg-center item slider-one__slider-1"
              style="background-image: url(/img/slide3.jpg)"
            >
              <div class="items slider__content">
                <div
                  class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
                >
                  <p class="text-6xl font-bold text-white slider-one__text">
                    Tekstil Tedarikçiniz
                  </p>
                  <div
                    class="text-2xl slider-one__title tp-caption tp-resizeme"
                  >
                    Seri üretim üsssünüz
                  </div>
                </div>
                <!-- /.slider-one__text -->
              </div>
              <!-- /.container -->
            </div>
            <!-- /.item -->
          </swiper-slide>
          <swiper-slide>
            <div
              class="bg-center item slider-one__slider-1"
              style="background-image: url(/img/slide4.jpg)"
            >
              <div class="items slider__content">
                <div
                  class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
                >
                  <p class="text-6xl font-bold text-white slider-one__text">
                    Timhan Tekstil
                  </p>
                  <div
                    class="text-2xl slider-one__title tp-caption tp-resizeme"
                  >
                    Tekstilde çözüm ortağınız
                  </div>
                </div>
                <!-- /.slider-one__text -->
              </div>
              <!-- /.container -->
            </div>
            <!-- /.item -->
          </swiper-slide>
          <!-- If we need navigation buttons -->
          <div
            slot="button-prev"
            class="outline-none swiper-button swiper-button-prev"
          ></div>
          <div
            slot="button-next"
            class="outline-none swiper-button swiper-button-next"
          ></div>
        </swiper>
      </client-only>
      <!-- directive: render origin html on server & render Swiper on browser -->
      <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
      <!-- <div
      class="swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper-nuxt',
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
  },
}
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  color: #4fd1c5 !important;
}
.selam {
  min-height: 100vh;
}
.items {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>