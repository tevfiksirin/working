<template>
  <div>
    <div class="flex items-center justify-center h-64 bg-orange-600">
      <h1 class="pt-16 pb-16 text-5xl text-white">{{ $t('menu.work') }}</h1>
    </div>
    <div class="container flex justify-center gap-4 p-16 mx-auto">
      <nuxt-img
        sizes="sm:100vw md:50vw lg:400px"
        v-img:group
        class="object-cover w-64 h-64"
        src="/img/first.jpg"
      />
      <nuxt-img
        sizes="sm:100vw md:50vw lg:400px"
        v-img:group
        class="object-cover w-64 h-64"
        src="/img/second.jpg"
      />
    </div>
  </div>
</template>
<script>
export default {}
</script>
