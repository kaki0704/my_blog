<template>
  <div>
    <transition name="fade" appear mode="out-in">
      <md-app md-mode="fixed">
        <md-app-toolbar class="fixed-toolbar" elevation="5">
          <small>
            <md-button class="md-icon-button" @click="showNavigation = true">
              <md-icon class="fa fa-bars"></md-icon>
            </md-button>
          </small>
          <g-link exact to="/">
            <md-button
              class="md-title md-accent"
              style="font-family: 'Oswald', sans-serif; padding-left: 10px;"
            >
              {{ $static.metadata.siteName }}
            </md-button>
          </g-link>
          <div class="md-toolbar-section-end">
            <small>
              <md-button class="md-icon-button" @click="showDialog = true">
                <md-icon class="fa fa-envelope"></md-icon>
              </md-button>
            </small>
          </div>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="showNavigation" md-swipeable>
          <md-toolbar class="md-transparent" md-elevation="0">
            <span
              class="md-title md-accent"
              style="font-family: 'Oswald', sans-serif;"
              >Contents Menu</span
            >
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon class="fa fa-home"></md-icon>
              <span class="md-list-item-text md-accent"
                ><g-link class="nav__link" exact to="/">ホーム</g-link></span
              >
            </md-list-item>
            <md-list-item>
              <md-icon class="fa fa-address-book"></md-icon>
              <span class="md-list-item-text md-accent"
                ><g-link class="nav__link" to="/about"
                  >サイトについて</g-link
                ></span
              >
            </md-list-item>
            <md-list-item>
              <md-icon class="fa fa-file"></md-icon>
              <span class="md-list-item-text md-accent"
                ><g-link class="nav__link" to="/blog">ブログ</g-link></span
              >
            </md-list-item>
            <md-list-item>
              <md-icon class="fa fa-twitter"></md-icon>
              <span class="md-list-item-text md-accent"
                ><a class="nav__link" :href="twitter_href" target="_blank"
                  >Twitter</a
                ></span
              >
            </md-list-item>
            <md-list-item>
              <md-icon class="fa fa-github"></md-icon>
              <span class="md-list-item-text md-accent"
                ><a class="nav__link" :href="github_href" target="_brank"
                  >Github</a
                ></span
              >
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content style="padding: 0px;">
          <ClientOnly>
            <carousel
              :per-page="1"
              :navigate-to="1"
              :loop="true"
              :autoplay="true"
              paginationColor="#abb1b5"
              :autoplayTimeout="3000"
              :adjustableHeight="true"
              :paginationEnabled="false"
            >
              <slide>
                <g-image
                  alt="top"
                  src="~/assets/images/top-chess.jpg"
                  height="500"
                  width="2000"
                  class="home-image"
                />
              </slide>
              <slide>
                <g-image
                  alt="top"
                  src="~/assets/images/3.jpg"
                  height="500"
                  width="2000"
                  class="home-image"
                />
              </slide>
              <slide>
                <g-image
                  alt="top"
                  src="~/assets/images/1.jpg"
                  height="500"
                  width="2000"
                  class="home-image"
                />
              </slide>
              <slide>
                <g-image
                  alt="top"
                  src="~/assets/images/2.jpg"
                  height="500"
                  width="2000"
                  class="home-image"
                />
              </slide>
            </carousel>
          </ClientOnly>
          <div class="md-layout md-alignment-center">
            <md-dialog :md-active.sync="showDialog" style="max-height: 85%">
              <md-dialog-title>
                お問い合わせ
              </md-dialog-title>
              <form
                name="contact"
                method="post"
                @submit.prevent="sendingMessage"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div class="sender-info" style="padding: 1em">
                  <md-field :class="getValidationClass('name')">
                    <label for="name" class="label">名前</label>
                    <md-input
                      name="name"
                      id="name"
                      autocomplete="given-name"
                      v-model="form.name"
                      :disabled="sending"
                      class="md-accent"
                    />
                    <span
                      class="md-error md-primary"
                      v-if="!$v.form.name.required"
                      >名前の入力は必須です</span
                    >
                    <span
                      class="md-error md-primary"
                      v-else-if="!$v.form.name.minlength"
                      >名前は３文字以上で入力して下さい</span
                    >
                  </md-field>
                  <md-field :class="getValidationClass('email')">
                    <label for="email" class="label">メールアドレス</label>
                    <md-input
                      name="email"
                      id="email"
                      autocomplete="email"
                      v-model="form.email"
                      :disabled="sending"
                      class="md-accent"
                    />
                    <span
                      class="md-error md-primary"
                      v-if="!$v.form.email.required"
                      >メールアドレスは必須です。</span
                    >
                    <span
                      class="md-error md-primary"
                      v-else-if="!$v.form.name.email"
                      >不正なメールアドレスです。再度ご確認ください</span
                    >
                  </md-field>
                  <md-field :class="getValidationClass('message')">
                    <label for="message">メッセージ</label>
                    <md-textarea
                      name="message"
                      id="message"
                      autocomplete="message"
                      v-model="form.message"
                      :disabled="sending"
                      class="md-accent"
                    />
                    <span
                      class="md-error md-primary"
                      v-if="!$v.form.message.required"
                      >メッセージは必須です。</span
                    >
                  </md-field>
                  <md-button
                    @click="showDialog = false"
                    style="color: white; background-color: gray"
                    >キャンセル</md-button
                  >
                  <md-button
                    type="submit"
                    style="color: white; background-color: lightgreen"
                    >メッセージを送る</md-button
                  >
                </div>
              </form>
            </md-dialog>
          </div>
          <div class="slot">
            <slot />
          </div>
          <Footer v-if="showFooter"></Footer>
        </md-app-content>
      </md-app>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "~/components/Footer.vue";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data: () => ({
    twitter_href: "https://twitter.com/kaki_0704",
    github_href: "https://github.com/yamady0704",
    showNavigation: false,
    showDialog: false,
    sending: false,
    form: {
      name: "",
      email: "",
      message: ""
    }
  }),
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
  props: ["showFooter"],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      message: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    sendingMessage(e) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sending = true;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.form
          })
        })
          .then(() => this.$router.push("/success"))
          .catch(error => alert(error));
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  }
};
</script>

<style>
body {
  font-family: "Noto Sans JP", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.body {
  background: #eeeeee;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.8s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.md-app {
  max-height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

.md-app-content {
  padding: 0px;
}

.md-title {
  padding-left: 20px;
  font-weight: bold;
}

.active {
  color: #fff;
}
.md-toolbar.fixed-toolbar {
  background: #2c2c2c;
}

.slot {
  max-width: 760px;
  margin: 0 auto;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 100px;
  align-items: center;
}

.md-accent {
  color: #ffffff;
}

.md-primary {
  color: #f66;
}

.nav__link {
  color: #fff;
}

i.md-icon {
  color: #fff;
}

.md-drawer.md-theme-default {
  background-color: #2c2c2c;
  width: 250px;
  position: fixed;
}

.md-toolbar.md-transparent {
  background-color: #202020;
}

.md-list-item-content {
  margin-top: 20px;
}

a.link {
  margin-right: 30px;
}

code {
  background-color: #2c2c2c;
}

.home-image {
  padding: -500%;
}

.md-dialog {
  background-color: #2c2c2c;
  color: #eeeeee;
  width: 40%;
}

.md-dialog-title {
  background-color: #2c2c2c;
  color: white;
  text-align: center;
}

.submit-button {
  margin-bottom: 20px;
}

.md-field:after {
  background-color: darkgray;
}
</style>
