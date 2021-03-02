<template>
  <div>
    <div class="flex items-center justify-center h-64 bg-orange-600">
      <h1 class="pt-16 pb-16 text-5xl text-white">{{ $t('menu.work') }}</h1>
    </div>
    <div class="container p-16 mx-auto">
      <img v-img:group class="object-cover w-64 h-64" src="/img/first.jpg" />
      <img v-img:group class="object-cover w-64 h-64" src="/img/second.jpg" />
    </div>
    <div class="relative" style="padding-top: 56.25%">
      <iframe
        class="absolute inset-0 w-full h-full p-16"
        src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {}
</script>
