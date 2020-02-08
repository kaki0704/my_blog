<template>
  <Layout :showFooter="true">
    <h2 class="main-title md-display-1" style="font-weight: bold;">
      Everything thriving
    </h2>

    <p style="margin-bottom: 100px;">
      誰もが良いことがあるように願いたい。この言葉が大好きです。プログラミング初心者に向けて情報を発信していきます。
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
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email"/></label>
      </p>
      <p>
        <label
          >Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label
        >
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <md-button @click="showDialog = true">
      クリック
    </md-button>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>コンタクトをとる</md-dialog-title>

      <form @submit.prevent="validateForm" name="contact" method="POST" netlify>
        <md-card-content>
          <md-field md-clearable>
            <label for="emal">メールアドレス</label>
            <md-input type="email" name="email" id="email" autocomplete="email"
            v-model="form.email" />
            <span class="md-error" v-if="!$v.form.email.required">メールアドレスは必須です</span>
            <span class="md-error" v-else-if="!$v.form.email.email">不正なメールアドレスです</span>
          </md-field>
          <md-field md-clearable>
            <label for="message">メッセージ</label>
            <md-input type="text" name="message" id="message" autocomplete="false"
            v-model="form.message" />
            <span class="md-error" v-if="!$v.form.email.required">メールアドレスは必須です</span>
            <span class="md-error" v-else-if="!$v.form.email.email">不正なメールアドレスです</span>
          </md-field>
          <md-field>
            <label for="password">パスワード</label>
            <md-input type="password" name="password" id="password"
            autocomplete="password" v-model="form.password" />
            <span class="md-error" v-if="!$v.form.password.required">パスワードは必須です</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">パスワードは6文字以上で入力してください</span>
            <span class="md-error" v-else-if="!$v.form.password.maxLength">パスワードは20文字以内で入力してください</span>
          </md-field>
        </md-card-content>

        <md-dialog-actions>
          <md-button to="/">ログイン</md-button>
          <md-button class="md-primary md-raised" type="submit">登録</md-button>
        </md-dialog-actions>
      </form>
    </md-dialog>
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";
import { validationMixin } from 'vuelidate';
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  data: () => ({
    form: {
        email: '',
        password: '',
        message: ''
      },
    showDialog: false
  }),
  validations: {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20)
        }
      }
    },
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

<style scoped>
.home-links a {
  margin-right: 1rem;
}
.fa {
  color: gray;
}

.md-dialog {
  background-color: #f5f5f5;
  width: 60%
}

.sub-title {
  margin-top: 100px;
  color: gray;
  text-align: center;
  font-family: "Oswald", sans-serif;
}

.main-title {
  color: gray;
  text-align: center;
  font-family: "Oswald", sans-serif;
}

p {
  font-family: "Noto Sans JP", sans-serif;
}
</style>
