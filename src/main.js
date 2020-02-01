// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AltLayout from '~/layouts/AltLayout.vue';
import VueDisqus from 'vue-disqus';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "en" }
  head.bodyAttrs = { class: "body" }
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
  Vue.use(VueDisqus)
  Vue.use(VueMaterial)
}
