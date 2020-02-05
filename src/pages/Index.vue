<template>
  <Layout :showFooter="true">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      alt="Example image"
      src="~/assets/images/top_image.jpeg"
      height="800"
      width="1800"
    />

    <h1>Hello, world!</h1>

    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
    </p>

    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="false"
      :navigationEnabled="true"
      :loop="true"
    >
      <slide>
        <g-image
          alt="Example image"
          src="~/assets/images/1.jpg"
          height="800"
          width="1800"
        />
      </slide>
      <slide>
        <g-image
          alt="Example image"
          src="~/assets/images/2.jpg"
          height="800"
          width="1800"
        />
      </slide>
      <slide>
        <g-image
          alt="Example image"
          src="~/assets/images/3.jpg"
          height="800"
          width="1800"
        />
      </slide>
      <slide>
        <g-image
          alt="Example image"
          src="~/assets/images/4.jpg"
          height="800"
          width="1800"
        />
      </slide>
      <slide>
        <g-image
          alt="Example image"
          src="~/assets/images/5.jpg"
          height="800"
          width="1800"
        />
      </slide>
    </carousel>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
    <!-- <Footer></Footer> -->
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Footer,
    Carousel,
    Slide
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.VueCarousel-dot {
  background-color:darkgray;
}
</style>
