<template>
  <div>
    <div class="flex items-center justify-center h-64 bg-indigo-500 gap-14">
      <h1 class="text-3xl text-white">{{ $t('messages.welcome') }}</h1>
    </div>
    <template
      ><MyButton :round="true" type="primary" :text="$t('messages.welcome')"
    /></template>
  </div>
</template>

