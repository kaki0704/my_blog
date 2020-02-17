<template>
  <Layout>
    <h1>Products</h1>

    <div
      style="text-align: center;"
      v-for="edge in $page.allContentfulProduct.edges"
      :key="edge.node.id"
    >
      <div>
        <md-card>
          <md-card-area>
            <md-card-media>
              <g-image
                :src="edge.node.image.file.url"
                :alt="edge.node.image.title"
                style="width: 100%; height: 200px; object-fit: inside;"
              />
            </md-card-media>

            <md-card-header>
              <div class="md-title">{{ edge.node.name }}</div>
              <div class="md-subhead">¥ {{ edge.node.price }}</div>
            </md-card-header>

            <md-card-content>
              {{ edge.node.description }}
            </md-card-content>
          </md-card-area>

          <md-card-actions md-alignment="right">
            <button
              class="snipcart-add-item cart-button"
              :data-item-id="edge.node.id"
              :data-item-name="edge.node.name"
              :data-item-image="edge.node.image.file.url"
              :data-item-price="edge.node.price"
              :data-item-url="edge.node.path"
            >
              カートに追加する
            </button>
          </md-card-actions>
        </md-card>
      </div>
      <md-divider class="md-inset"></md-divider>
    </div>
    <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allContentfulProduct (perPage: 2, page: $page) @paginate{
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
  font-size: 1rem;
}
</style>
