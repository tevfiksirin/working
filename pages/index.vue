<template>
  <div>
    <Hu />
    <div class="container mx-auto space-y-10">
      <h1 class="text-3xl text-center">{{ $t('pageHeader.blog') }}</h1>
      <ul class="lg:grid lg:grid-cols-2 lg:gap-4">
        <li class="" v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="
              localePath({ name: 'blog-slug', params: { slug: article.slug } })
            "
          >
            <div class="border-2 lg:flex">
              <img
                class="object-cover object-top w-full h-48"
                :src="article.img"
              />
              <div>
                <h2>{{ article.title }}</h2>
                <!-- <p>by {{ article.author.name }}</p> -->
                <p>{{ article.description }}</p>
                <!-- {{ $t('date.date') }} : {{ article.createdAt | formatDate }} -->
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params, $content }) {
    const { slug } = params
    const articles = await $content('articles', app.i18n.locale, slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
