<template>
  <Layout>
    <div v-html="$page.post.content"></div>
    <vue-disqus shortname="personal-blog-c67j95p6xz" identifier="$page.post.id"></vue-disqus>
  </Layout>
</template>

<page-query>
query ($path: String!){
  post(path: $path) {
    id
    content
  }
}
</page-query>