<template>
  <Layout>
    <h1>Products</h1>
    <div  style="text-align: center;" v-for="edge in $page.allContentfulProduct.edges" :key="edge.node.id">
      <h2 style="margin-bottom: 0.25em;">
        {{ edge.node.name }}
      </h2>
      <span>{{ edge.node.price }}</span>
      <g-image
        :src="edge.node.image.file.url"
        style="width: 100%; height: 300px; object-fit: contain;"
        :alt="edge.node.image.title"
      />
      <p>{{ edge.node.description }}</p>
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
    ]
  }
};
</script>

<style>
  .pager {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    color: black;
    padding: 8px 16px;
    float: left;
    margin-bottom: 20px;
  }
</style>
