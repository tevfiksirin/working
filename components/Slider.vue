<template>
  <div id="giris" class="">
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper ref="carousel" class="" :options="swiperOptions">
        <swiper-slide>
          <div
            class="bg-slide1 sm:bg-right-top item slider-one__slider-1"
            style="background-image: url(/img/first.jpg)"
          >
            <div class="items slider__content">
              <div
                class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
              >
                <img
                  src="/img/first.jpg"
                  class="w-3/12 shadow-lg outline-none h-64rounded active:outline-none focus:outline-none"
                  @click="toggleModal = !toggleModal"
                  alt=""
                />
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
            style="background-image: url(/img/second.jpg)"
          >
            <div class="items slider__content">
              <div
                class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
              >
                <p class="text-6xl font-bold text-white slider-one__text">
                  {{ $t('slider.general.title') }}
                </p>
                <div class="text-2xl slider-one__title tp-caption tp-resizeme">
                  {{ $t('slider.slide2.subTitle') }}
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
            style="background-image: url(/img/third.jpg)"
          >
            <div class="items slider__content">
              <div
                class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
              >
                <p class="text-6xl font-bold text-white slider-one__text">
                  {{ $t('slider.general.title2') }}
                </p>
                <div class="text-2xl slider-one__title tp-caption tp-resizeme">
                  {{ $t('slider.slide3.subTitle') }}
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
            style="background-image: url(/img/fourth.jpg)"
          >
            <div class="items slider__content">
              <div
                class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
              >
                <p class="text-6xl font-bold text-white slider-one__text">
                  {{ $t('slider.general.title') }}
                </p>
                <div class="text-2xl slider-one__title tp-caption tp-resizeme">
                  {{ $t('slider.slide4.subTitle') }}
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
          class="z-20 outline-none swiper-button swiper-button-prev"
        ></div>
        <div
          slot="button-next"
          class="z-20 outline-none swiper-button swiper-button-next"
        ></div>
      </swiper>
      <!-- MODAL CONTENT -->
      <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div v-if="toggleModal" class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
          >
            <!--
                Background overlay, show/hide based on modal state.

                Entering: "ease-out duration-300"
                  From: "opacity-0"
                  To: "opacity-100"
                Leaving: "ease-in duration-200"
                  From: "opacity-100"
                  To: "opacity-0"
            -->
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >
            <!--
                Modal panel, show/hide based on modal state.

                Entering: "ease-out duration-300"
                  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  To: "opacity-100 translate-y-0 sm:scale-100"
                Leaving: "ease-in duration-200"
                  From: "opacity-100 translate-y-0 sm:scale-100"
                  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            -->
            <div
              class="inline-block overflow-hidden text-left align-bottom transition-all transform shadow-xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="pb-4 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div class="">
                      <iframe
                        width="640"
                        height="450"
                        src="https://www.youtube.com/embed/mb1DdMxFLQY"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  @click="toggleModal = !toggleModal"
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Deactivate
                </button>
                <button
                  @click="toggleModal = !toggleModal"
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL CONTENT -->
    </client-only>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      toggleModal: false,
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