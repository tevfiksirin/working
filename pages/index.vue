<template>
  <div class="container mx-auto space-y-10">
    <h1 class="text-center text-3xl">Blog Posts</h1>
    <ul class="lg:grid lg:grid-cols-2 lg:gap-4">
      <li class="" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="border-2 lg:flex">
            <img
              class="w-full h-48 object-cover object-top"
              :src="article.img"
            />
            <div>
              <h2>{{ article.title }}</h2>
              <!-- <p>by {{ article.author.name }}</p> -->
              <p>{{ article.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>