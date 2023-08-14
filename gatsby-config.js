const siteMetadata = require("./src/content/siteMetadata");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "businesses",
        path: "./src/content/",
      },
      __key: "businesses",
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: true,
        langKeyForNull: "en",
        prefixDefault: true,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Oswald",
              variants: ["400", "700"],
            },
            {
              family: "Lato",
              variants: ["300", "400"],
            },
            {
              family: "Rock Salt",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_TOKEN,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Italian Businesses`,
            mapping: { logo: `fileNode`, box: `fileNode`, logos: `fileNode`, subTextLogos: `fileNode` }
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `English Businesses`,
            mapping: { logo: `fileNode`, box: `fileNode`, logos: `fileNode`, subTextLogos: `fileNode` }
          },
        ]
      }
    }
  ],
};
