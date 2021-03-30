<template>
  <div>
    <div class="flex items-center justify-center h-64 bg-indigo-500 gap-14">
      <h1 class="text-3xl text-white">{{ $t('menu.dude') }}</h1>
    </div>
    <content-image>
      <template #content-image-title> {{ $t('menu.dude') }} </template>
      <template #content-image-subtitle> subtitle </template>
      <template #content-image-resim>
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </template>
    </content-image>
  </div>
</template>