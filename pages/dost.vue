<template>
  <div class="container pt-24 mx-auto">
    <figure :key="index" v-for="(item, index) in data">
      <a :href="item.src" class="resim">
        <nuxt-img
          format="webp"
          :src="item.src"
          sizes="sm:100vw md:50vw lg:400px"
          class="shadow-lg hover:shadow-2xl"
          :alt="item.alt"
        />
      </a>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          alt: 'nice block',
          src: '/timhan_resim/01.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/02.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/03.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/04.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/05.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/06.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/07.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/08.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/09.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/10.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/11.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/12.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/13.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/14.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/15.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/16.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/17.jpg',
        },
        {
          alt: 'nice block',
          src: '/timhan_resim/18.jpg',
        },
      ],
    }
  },
  mounted() {
    new GLightbox({
      selector: '.resim',
      touchNavigation: true,
      loop: true,
    })
  },
}
</script>

<style>
body {
  font: 1.1em Arial, Helvetica, sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 2px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

.container {
  column-count: 5;
  column-gap: 2px;
}
</style>