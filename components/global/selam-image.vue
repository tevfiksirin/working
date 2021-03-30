<template>
  <div>
    <img
      class="object-cover object-center rounded"
      alt="hero"
      :src="imageUrl"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
</style>