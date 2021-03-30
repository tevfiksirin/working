<template>
  <div class="pt-24">
    <div class="container mx-auto text-center">
      <BreadCrumb :link="$t('menu.blog')" :title="article.title" />
      <article class="flex flex-col space-y-10">
        <h1 class="text-3xl">{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <div class="max-w-xl mx-auto">
          <img class="" :src="article.img" :alt="article.alt" />
          <p class="text-sm text-gray-700">
            {{ $t('date.date') }} : {{ article.createdAt | formatDate }}
          </p>
        </div>

        <div class="w-full">
          <prev-next class="px-3 py-2 text-white" :prev="prev" :next="next" />
        </div>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>
<script>
import { format } from 'date-fns'

export default {
  filters: {
    formatDate() {
      return format(new Date(), 'dd/MM/yyyy')
    },
  },
  async asyncData({ app, params, $content }) {
    const { slug } = params
    const article = await $content('articles', app.i18n.locale, slug).fetch()
    const [prev, next] = await $content('articles', app.i18n.locale)
      .only(['title', 'slug'])
      .sortBy('sorting', 'desc')
      .surround(slug)
      .fetch()
    return { article, prev, next }
  },
}
</script>
