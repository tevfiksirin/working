<template>
  <div class="container mx-auto text-center">
    <article class="flex flex-col space-y-10">
      <h1 class="text-3xl">{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <div class="max-w-xl mx-auto">
        <img class="" :src="article.img" :alt="article.alt" />
      </div>
      <div class="w-full">
        <p class="bg-pink-500 text-white inline-block py-2 px-3">
          {{ $t('date.date') }}: {{ formatDate(article.createdAt) }}
        </p>
      </div>
      <div class="w-full">
        <prev-next
          class="text-white inline-block py-2 px-3"
          :prev="prev"
          :next="next"
        />
      </div>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params, $content }) {
    const { slug } = params
    const article = await $content('articles', app.i18n.locale, slug).fetch()
    const [prev, next] = await $content('articles', app.i18n.locale)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(slug)
      .fetch()
    return { article, prev, next }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }
      return new Date(date).toLocaleDateString('tr', options)
    },
  },
}
</script>
