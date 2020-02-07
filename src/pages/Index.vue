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
    <ClientOnly>
      <carousel
        :per-page="1"
        :navigate-to=1
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
        paginationColor="#abb1b5"
        :autoplayTimeout="4000"
      >
        <slide>
          <g-image
            alt="Example image"
            src="~/assets/images/1.jpg"
            height="1200"
            width="1800"
            quality="100"
          />
        </slide>
        <slide>
          <g-image
            alt="Example image"
            src="~/assets/images/2.jpg"
            height="1200"
            width="1800"
            quality="100"
          />
        </slide>
        <slide>
          <g-image
            alt="Example image"
            src="~/assets/images/3.jpg"
            height="1200"
            width="1800"
            quality="100"
          />
        </slide>
        <slide>
          <g-image
            alt="Example image"
            src="~/assets/images/4.jpg"
            height="1200"
            width="1800"
            quality="100"
          />
        </slide>
        <slide>
          <g-image
            alt="Example image"
            src="~/assets/images/5.jpg"
            height="1200"
            width="1800"
          />
        </slide>
      </carousel>
    </ClientOnly>
    <h2 class="sub-title md-headline" style="font-weight: bold;">Hobby</h2>
    <ClientOnly>
      <carousel
        :per-page="1"
        :navigate-to=1
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
          <p class="md-headline">Chess</p>
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
          <p class="md-headline">Running</p>
        </slide>
        <slide>
          <g-image
            alt="reading"
            src="~/assets/images/hobby/reading.jpg"
            height="1200"
            width="1800"
            quality="100"
            class="image"
            fit=outside
          />
          <p class="md-headline">Reading</p>
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
          <p class="md-headline">Programming</p>
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

.VueCarousel-slide {
  position: relative;
}

.VueCarousel-slide p {
  position:absolute;
  color: whitesmoke;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  top:70%;
  left:50%;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
}

.VueCarousel-slide image {
  width: 100%;
}
</style>
