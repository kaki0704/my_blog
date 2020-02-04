<template>
  <Layout>
    <h1>タグ: {{ $page.tag.title }}</h1>
    <article
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      style="margin-bottom: 2em;"
    >
      <md-card>
        <md-card-media>
          <md-ripple>
            <g-image :src="edge.node.cover_image" style="width: 100%" />
          </md-ripple>
        </md-card-media>
        <md-card-header>
          <div class="md-title">
            {{ edge.node.title }}
          </div>
          <div class="md-subhead">
            <p>
              Posted {{ edge.node.date }} ・ {{ edge.node.timeToRead }} min read
            </p>
          </div>
        </md-card-header>
        <md-card-content>
          {{ edge.node.except }}
        </md-card-content>
        <md-card-actions>
          <g-link :to="edge.node.path"
            ><md-button>Read Post >></md-button></g-link
          >
        </md-card-actions>
        <md-card-actions>
          <g-link
            style="padding-right: .25em"
            v-for="tag in edge.node.tags"
            :to="tag.path"
            :key="tag.id"
            ><md-button class="md-raised" :md-ripple="false">{{
              tag.id
            }}</md-button></g-link
          >
        </md-card-actions>
      </md-card>
    </article>
  </Layout>
</template>

<page-query>
query($id: String!){
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
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
  }
}
</page-query>
