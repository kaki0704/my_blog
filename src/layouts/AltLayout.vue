<template>
  <div>
    <md-toolbar class="fixed-toolbar" elevation="5">
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
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title md-accent">Contents Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon class="fa fa-home"></md-icon>
          <span class="md-list-item-text md-accent"><g-link class="nav__link" exact to="/">ホーム</g-link></span>
        </md-list-item>
        <md-list-item>
          <md-icon class="fa fa-address-book"></md-icon>
          <span class="md-list-item-text md-accent"><g-link class="nav__link" to="/about">サイトについて</g-link></span>
        </md-list-item>
        <md-list-item>
          <md-icon class="fa fa-book"></md-icon>
          <span class="md-list-item-text md-accent"><g-link class="nav__link" to="/blog">ブログ</g-link></span>
        </md-list-item>
        <md-list-item>
          <md-icon class="fa fa-twitter"></md-icon>
          <span class="md-list-item-text md-accent"><a class="nav__link" :href="twitter_href">Twitter</a></span>
        </md-list-item>
        <md-list-item>
          <md-icon class="fa fa-github"></md-icon>
          <span class="md-list-item-text md-accent"><a class="nav__link" :href="github_href">Github</a></span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <div class="slot">
      <slot/>
    </div>
    <Footer v-if="showFooter"></Footer>
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
import Footer from '~/components/Footer.vue'
export default {
  data: () =>({
    twitter_href: 'https://twitter.com/kaki_0704',
    github_href: 'https://github.com/yamady0704',
    showNavigation: false,
    showSidepanel: false
  }),
  components: {
    Footer
  },
  props: ['showFooter']
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.body {
  background: #EEEEEE;
  margin-bottom: 100px;
}

.layout {
  margin: 0;
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
  position: fixed;
}

.slot {
  max-width: 760px;
  margin: 0 auto;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
}

.md-accent {
  color: #ffffff;
}

.md-primary {
  color: #f66;
}

.nav__link {
  color: #fff
}

i.md-icon {
  color: #fff;
}

.md-drawer.md-theme-default {
  background-color:#2c2c2c;
  width: 300px;
  position: fixed;
}

.md-toolbar.md-transparent {
  background-color: #202020;
}

.md-list-item-content{
  margin-top: 20px;
}

a.link {
  margin-right: 30px;
}
</style>
