<template>
  <Layout>
    <h1>Books</h1>
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="padding: 1em;">
        <ul
          style="text-align: center;"
          v-for="edge in $page.allContentfulProduct.edges"
          :key="edge.node.id"
          class="md-layout-item md-large-size-50 md-medium-size-65 md-small-size-80 md-xsmall-size-100"
        >
          <md-card md-with-hover>
            <md-card-area>
              <md-card-media md-ratio="16:9">
                <g-image
                  :src="edge.node.image.file.url"
                  :alt="edge.node.image.title"
                  style="width: 100%; height: 100%; object-fit: contain;"
                />
              </md-card-media>

              <md-card-header>
                <div class="md-title">{{ edge.node.name }}</div>
                <md-icon class="fa fa-coins">
                </md-icon>
                  <div class="md-subhead">¥ {{ edge.node.price }}</div>
              </md-card-header>

              <md-card-content>
                {{ edge.node.description }}
              </md-card-content>
            </md-card-area>

            <md-card-actions md-alignment="right">
              <md-button
                class="snipcart-add-item cart-button md-raised"
                :data-item-id="edge.node.id"
                :data-item-name="edge.node.name"
                :data-item-image="edge.node.image.file.url"
                :data-item-price="edge.node.price"
                :data-item-url="edge.node.path"
              >
                <md-icon class="fa fa-cart-arrow-down" >

                </md-icon>
                カートに追加する
              </md-button>
            </md-card-actions>
          </md-card>
        </ul>
      </md-content>
    </div>
    <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allContentfulProduct (perPage: 6, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        name
        price
        description
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: { Pager },
  metaInfo: {
    title: "Products",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Code Artistry" },
      {
        name: "description",
        content:
          "Discover our entire range of luxury apparel. shoes, and accessories"
      },
      {
        name: "keywords",
        contetn: "Premium Jackets , High-End Clothing, Designer Sunglasses"
      }
    ],
    script: [
      {
        src: "https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.js",
        body: true,
        id: "snipcart",
        "data-api-key":
          "YzRmODk3MjktNjY3Yi00MmU4LTlkMTItNmM3MWVhNTQwZGI3NjM3MTc1MDc5MTMyOTYwMDYw"
      }
    ]
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 100px
}
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  color: black;
  padding: 8px 16px;
  float: left;
  margin-bottom: 20px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.cart-button {
  background-color: forestgreen;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
}

.pager {
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
