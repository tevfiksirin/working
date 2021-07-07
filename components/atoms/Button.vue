<template>
  <div>
    <button class="p-2 mt-4 text-white bg-red-500">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>