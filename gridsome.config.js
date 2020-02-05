// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Everything Thriving",
  siteDescription:
    "岐阜に住んでいる会社員がプログラミングなどについて発信していくサイトです。",
  icon: './src/assets/images/favicon.png',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/posts/**/*.md",
        route: "/posts/:id",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            route: '/tags/:id',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    BlogPost: "/posts/:id"
  },
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  },
  build: {
  vendor: ['外部ライブラリのパス']
  }
};
