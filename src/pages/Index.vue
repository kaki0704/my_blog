<template>
  <Layout :showFooter="true">
    <div class="message title-message"  style="margin-bottom: 100px;">
      <h2 class="main-title md-display-1" style="font-weight: bold;">
        Carpe diem
      </h2>

      <p>
        - Carpe diem -
      </p>
      <p>
        一日一日その瞬間を楽しむように、仕事や趣味に取り組んでいます。
      </p>
      <p>
        プログラミングをやりたいのにどうしたらいいかわからない、
        どうやって仕事をしたらいいかわからない時に、このサイトで書いていることが助けになれば嬉しいです。
      </p>
    </div>
    <div class="message hobby-message"  style="margin-bottom: 100px;">
      <h2 class="sub-title md-display-1" style="font-weight: bold;">Hobby</h2>
      <p>
        中学校の頃からチェスを始め、今も趣味で対局することが多いです。制限時間が限られているBlitzよりも、じっくり考えて駒を進めるチェスが好きです。
      </p>
      <p  style="margin-bottom: 100px;">
        また、毎朝5km走ることが習慣になっていて、これをしないと頭が回らなかったり、体調崩したりするくらいランニング中毒者になっています。隙間の時間に本を読むことも好きで。技術書は仕事で必要となるのでもちろん読みますし、他にも経営の本を読んだりで月1冊のペースで読み進めています。
      </p>

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
    </div>
    <h2 class="sub-title md-display-1" style="font-weight: bold;">Skill</h2>
    <div class="message skill-message">
      <p>
        仕事ではRuby, Ruby on Railsを使用しています。
      </p>
      <p style="margin-bottom: 100px">
        このサイトの制作にはVue(Gridsome)とGraphQLを使用しました。
      </p>
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
    </div>
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: "",
      message: ""
    },
    showDialog: false
  }),
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  },
  metaInfo: {
    title: "Index"
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

<style scoped>
.home-links a {
  margin-right: 1rem;
}
.fa {
  color: gray;
}

.md-dialog {
  background-color: #f5f5f5;
  width: 60%;
}

.sub-title {
  margin-top: 100px;
  margin-bottom: 50px;
  color: gray;
  text-align: center;
  font-family: "Oswald", sans-serif;
}

.main-title {
  margin-bottom: 50px;
  color: gray;
  text-align: center;
  font-family: "Oswald", sans-serif;
}

p {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #404040;
}
</style>
