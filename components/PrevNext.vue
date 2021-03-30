<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="localePath({ name: 'blog-slug', params: { slug: prev.slug } })"
      class="font-bold bg-indigo-500 hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="localePath({ name: 'blog-slug', params: { slug: next.slug } })"
      class="font-bold bg-yellow-500 hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>