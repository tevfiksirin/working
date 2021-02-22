<template>
  <div>
    <div id="giris" class="inset-0 max-w-full min-h-screen">
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
              style="background-image: url(/img/second.jpg)"
            >
              <div class="items slider__content">
                <div
                  class="flex flex-col items-center min-w-full sm:px-16 sm:items-start"
                >
                  <p class="text-6xl font-bold text-white slider-one__text">
                    {{ $t('slider.general.title') }}
                  </p>
                  <div
                    class="text-2xl slider-one__title tp-caption tp-resizeme"
                  >
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
                  <div
                    class="text-2xl slider-one__title tp-caption tp-resizeme"
                  >
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
                  <div
                    class="text-2xl slider-one__title tp-caption tp-resizeme"
                  >
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
            class="outline-none swiper-button swiper-button-prev"
          ></div>
          <div
            slot="button-next"
            class="outline-none swiper-button swiper-button-next"
          ></div>
        </swiper>
      </client-only>
    </div>

    <div class="container mx-auto space-y-10">
      <h1 class="text-3xl text-center">{{ $t('pageHeader.blog') }}</h1>
      <ul class="lg:grid lg:grid-cols-2 lg:gap-4">
        <li class="" v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="
              localePath({ name: 'blog-slug', params: { slug: article.slug } })
            "
          >
            <div class="border-2 lg:flex">
              <img
                class="object-cover object-top w-full h-48"
                :src="article.img"
              />
              <div>
                <h2>{{ article.title }}</h2>
                <!-- <p>by {{ article.author.name }}</p> -->
                <p>{{ article.description }}</p>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params, $content }) {
    const { slug } = params
    const articles = await $content('articles', app.i18n.locale, slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
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