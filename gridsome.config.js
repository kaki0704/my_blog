// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Carpe diem",
  siteDescription:
    "岐阜に住んでいるエンジニアがプログラミングなどについて発信していくサイトです。",
  icon: "./src/assets/images/favicon.png",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "2jhe3v0pth54", // required
        accessToken: "G3XjcSuQ6hSFPWAsmrvLpYDD0D9__MThRT-qyI96wnA", // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/posts/**/*.md",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Post: "/posts/:id",
    Tag: "/tags/:id",
    ContentfulProduct: "/products/:id"
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["gridsome-plugin-remark-prismjs-all"]
    }
  }
};
