module.exports = {
  pathPrefix: "/big-reach-landing",
  siteMetadata: {
    title: `BigReach`,
    description: `software consultancy`,
    logo: `/src/images/logo.png`,
    author: `@bigreach`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: ``,
        background_color: `#ffffff`,
        theme_color: `#e6b31e`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
