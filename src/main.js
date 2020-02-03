// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AltLayout from '~/layouts/AltLayout.vue';
import VueDisqus from 'vue-disqus';
import Vue from 'vue'
import VueMaterial from 'vue-material'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "en" }
  head.bodyAttrs = { class: "body" }
  head.link.push({
    rel: 'stylesheet',
    href: "https://unpkg.com/vue-material/dist/vue-material.min.css"
  })
  head.link.push({
    rel: 'stylesheet',
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  })
  head.link.push({
    rel: 'stylesheet',
    href: "dist/vue-material-components.min.js"
  })
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
  Vue.use(VueDisqus)
  Vue.use(VueMaterial)
}
