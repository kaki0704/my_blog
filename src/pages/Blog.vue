<template>
  <Layout>
    <h1>Blog</h1>
    <article
      v-for="edge in $page.allPost.edges"
      :key="edge.node.id"
      style="margin-bottom: 2em;"
    >
      <md-card>
        <md-card-media>
          <md-ripple>
            <g-link :to="edge.node.path"
              ><g-image
                :src="edge.node.cover_image"
                style="width: 100%"
                fit="fill"
            /></g-link>
          </md-ripple>
        </md-card-media>
        <div class="article-content">
          <md-card-header>
            <div class="md-title">
              {{ edge.node.title }}
            </div>
            <div class="md-subhead">
              <p>投稿日：{{ edge.node.date }}</p>
            </div>
          </md-card-header>
          <md-card-content>
            {{ edge.node.except }}
          </md-card-content>
          <md-card-actions>
            <g-link :to="edge.node.path"
              ><md-button class="read-page">記事を読む >></md-button></g-link
            >
          </md-card-actions>
          <md-card-actions>
            カテゴリ：
            <g-link
              style="padding-right: .25em"
              class="category"
              v-for="tag in edge.node.tags"
              :to="tag.path"
              :key="tag.id"
              ><p class="category-link">{{ tag.id }}</p></g-link
            >
          </md-card-actions>
        </div>
      </md-card>
    </article>
    <div class="pager">
      <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost(perPage: 5, page: $page) @paginate {
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
        date (format: "YYYY/MM/DD")
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image (width: 700, height: 300, quality: 100, blur: 5)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: { Pager }
};
</script>

<style scoped>
.slot {
  font-family: "Noto Sans JP", sans-serif;
}
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  color: black;
  padding: 8px 16px;
  float: left;
  margin-bottom: 20px;
}

.category {
  margin-right: 10px;
}

p.category-link {
  font-family: "Noto Sans JP", sans-serif;
  color: #606060;
}

.read-page {
  font-family: "Noto Sans JP", sans-serif;
  color: #7f7fff;
}
</style>
