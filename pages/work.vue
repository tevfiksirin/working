<template>
  <section class="">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center gap-2">
        <div class="w-3/4 mt-16 mb-16 sm:h-32 sm:w-1/4">
          <a href="/video/tanitimTR.mp4" class="resim">
            <nuxt-img
              format="webp"
              src="/img/first.jpg"
              sizes="sm:100vw md:50vw lg:400px"
              class="shadow-lg rounded-2xl hover:shadow-2xl"
              alt="Suda Eriyen Nakış Telası"
            />
          </a>
        </div>
        <div class="w-3/4 mt-16 mb-16 sm:h-32 sm:w-1/4">
          <a href="/img/second.jpg" class="resim">
            <nuxt-img
              format="webp"
              sizes="sm:100vw md:50vw lg:400px"
              src="/img/second.jpg"
              class="shadow-lg rounded-2xl hover:shadow-2xl"
              alt="Suda Eriyen Nakış Telası"
            />
          </a>
        </div>
        <div class="w-3/4 mt-16 mb-16 sm:h-32 sm:w-1/4">
          <a href="/img/third.jpg" class="resim">
            <nuxt-img
              format="webp"
              sizes="sm:100vw md:50vw lg:400px"
              src="/img/third.jpg"
              class="shadow-lg rounded-2xl hover:shadow-2xl"
              alt="Suda Eriyen Nakış Telası"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    new GLightbox({
      selector: '.resim',
      touchNavigation: true,
      loop: true,
    })
  },
}
</script>