<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="fixed-toolbar" elevation="5">
        <small>
          <md-button class="md-icon-button" @click="showNavigation = true">
            <md-icon class="fa fa-bars"></md-icon>
          </md-button>
        </small>
        <g-link exact to="/">
          <md-button class="md-title md-accent">
            {{ $static.metaData.siteName }}
          </md-button>
        </g-link>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title md-accent">Contents Menu</span>
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
              ><g-link class="nav__link" to="/about">サイトについて</g-link></span
            >
          </md-list-item>
          <md-list-item>
            <md-icon class="fa fa-book"></md-icon>
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
      <md-app-content>
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
                alt="top"
                src="~/assets/images/top-chess.jpg"
                height="700"
                width="1800"
                class="home-image"
              />
            </slide>
            <slide>
              <g-image
                alt="top"
                src="~/assets/images/dark-mountain.jpg"
                height="700"
                width="1800"
                class="home-image"
              />
            </slide>
          </carousel>
        </ClientOnly>
        <div class="slot">
          <slot />
        </div>
        <Footer v-if="showFooter"></Footer>
      </md-app-content>
    </md-app>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Footer from "~/components/Footer.vue";
export default {
  data: () => ({
    twitter_href: "https://twitter.com/kaki_0704",
    github_href: "https://github.com/yamady0704",
    showNavigation: false,
    showSidepanel: false
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
  props: ["showFooter"]
};
</script>
<style>
body {
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.body {
  background: #eeeeee;
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
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
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
</style>
