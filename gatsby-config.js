require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Snigur Stepan blog`,
    description: `Личный блог Снигур Степана. Здесь я размещаю различные гайды, полезные и интересные статьи. В моем блоге в основном содержатся статьи посвещенные front-end тематике. Приятного времяпрепровождения!`,
    author: `@SnigurStepan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `snigur-stepan-blog`,
        short_name: `st-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fkdh5smbnoli`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
  ],
}
