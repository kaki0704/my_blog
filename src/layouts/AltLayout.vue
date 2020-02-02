<template>

  <div>
    <md-toolbar class="fixed-toolbar" elevation="5">
      <h3 class="md-title" style="flex: 1">
        <g-link exact to="/">
          <md-button class="md-primary">
            {{ $static.metaData.siteName }}
          </md-button>
        </g-link>
      </h3>
      <g-link class="nav__link" exact to="/"><md-button class="md-accent">Home</md-button></g-link>
      <g-link class="nav__link" to="/about"><md-button class="md-accent">About</md-button></g-link>
      <g-link class="nav__link" to="/blog"><md-button class="md-accent">Blog</md-button></g-link>
      <g-link class="nav__link" to="/products"><md-button class="md-accent">Product</md-button></g-link>
    </md-toolbar>
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

.active {
  color: #f66;
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
  margin-left: 20px;
}
</style>
