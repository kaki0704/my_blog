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

    <p style="margin-bottom: 100px;">
      プログラミング初心者に向けて情報を発信していきます。
    </p>
    <h2 class="sub-title md-display-1" style="font-weight: bold;">Hobby</h2>
    <ClientOnly>
      <carousel
        :per-page="1"
        :navigate-to="1"
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
        paginationColor="#abb1b5"
        :autoplayTimeout="4000"
        :adjustableHeight="true"
      >
        <slide>
          <g-image
            alt="chess"
            src="~/assets/images/hobby/chess.jpg"
            height="1200"
            width="1800"
            quality="100"
            class="image"
          />
        </slide>
        <slide class="hobby-slide">
          <g-image
            alt="running"
            src="~/assets/images/hobby/running.jpg"
            height="1200"
            width="1800"
            quality="100"
            class="image"
          />
        </slide>
        <slide>
          <g-image
            alt="reading"
            src="~/assets/images/hobby/reading.jpg"
            height="1200"
            width="1800"
            quality="100"
            class="image"
            fit="outside"
          />
        </slide>
        <slide>
          <g-image
            alt="programming"
            src="~/assets/images/hobby/programming.jpg"
            height="1200"
            width="1800"
            quality="100"
            class="image"
          />
        </slide>
      </carousel>
    </ClientOnly>
    <h2 class="sub-title md-display-1" style="font-weight: bold;">Skill</h2>
    <ClientOnly>
      <carousel
        :per-page="1"
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
        paginationColor="#abb1b5"
        :autoplayTimeout="4000"
      >
        <slide>
          <g-image
            alt="rails-ruby"
            src="~/assets/images/skill/ruby-rails.png"
            quality="100"
            height="430"
            width="1500"
            class="image"
            fit="contain"
            background="#eeeeee"
          />
        </slide>
        <slide>
          <g-image
            alt="vue-nuxt"
            src="~/assets/images/skill/vue-nuxt.png"
            quality="100"
            background="#fff"
            height="430"
            width="1500"
            fit="contain"
          />
        </slide>
        <slide>
          <g-image
            alt="reading"
            src="~/assets/images/skill/angular.png"
            quality="100"
            height="430"
            width="1500"
            fit="inside"
          />
        </slide>
        <slide>
          <g-image
            alt="graphql"
            src="~/assets/images/skill/graphql.png"
            quality="100"
            background="#fff"
            height="500"
            width="1500"
            fit="contain"
          />
        </slide>
      </carousel>
    </ClientOnly>
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Footer,
    Carousel: () =>
      import("vue-carousel")
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then(m => m.Slide)
        .catch()
  },
  name: "Index"
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.fa {
  color: gray;
}

.sub-title {
  margin-top: 100px;
  color: gray;
  text-align:  center;
  font-family: 'Oswald', sans-serif;
}

p {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
