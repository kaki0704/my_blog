<template>
  <Layout>
    <h1>Blog</h1>
    <article v-for="edge in $page.allPost.edges" :key="edge.node.id" style="margin-bottom: 2em;">
      <!-- <div v-html="edge.node.content"/> -->
      <g-image :src="edge.node.cover_image" style="width: 100%"/>
      <h2>{{edge.node.title}}</h2>
      <p>{{edge.node.except}}</p>
      <p>Posted {{edge.node.date}} ・ {{edge.node.timeToRead}} min read</p>
      <div>
        <g-link style="padding-right: .25em" v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id"><md-button class="md-raised">{{tag.id}}</md-button></g-link>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
    </article>
    <Pager :info="$page.allPost.pageInfo" linkClass="pager"/>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost(perPage: 2, page: $page) @paginate {
    pageInfo{
      totalPages
      currentPage
    }
    edges {
      node {
        id
        content
        title
        except
        date (format: "MMMM Do, YYYY")
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image (width: 1000, height: 300, quality: 100, blur: 10)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: { Pager }
}
</script>

<style>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  color: black;
  padding: 8px 16px;
  float: left;
}
</style>