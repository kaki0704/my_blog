// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AltLayout from '~/layouts/AltLayout.vue';
import VueDisqus from 'vue-disqus';
import Vue from 'vue'
import VueMaterial from 'vue-material'
require('gridsome-plugin-remark-prismjs-all/themes/night-owl.css');
require('gridsome-plugin-remark-prismjs-all/themes/tomorrow.css');

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { lang: "ja" }
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
    href: "https://fonts.googleapis.com/css?family=Noto+Serif+JP|Oswald&display=swap"
  })
  head.link.push({
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP|Roboto:400i&display=swap"
  })
  // Set default layout as a global component
  Vue.component('Layout', AltLayout)
  Vue.use(VueDisqus)
  Vue.use(VueMaterial)
}
