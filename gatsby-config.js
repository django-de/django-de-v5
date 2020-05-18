const postCssPresetEnv = require(`postcss-preset-env`)

const siteUrl = `https://www.django-verein.de/`

module.exports = {
  siteMetadata: {
    title: `Deutscher Django-Verein e.V.`,
    description: `
      Der Deutsche Django Verein wurde im Jahr 2009 gegründet, um Django im
      deutschsprachigen Raum weiter bekannt zu machen und um eine zentrale
      Anlaufstelle für Entwickler und Benutzer von Django-basierter Software
      zu bieten.`,
    siteUrl: siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/Termine`,
        name: `termine`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/Assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/Tätigkeitsberichte`,
        name: `taetigkeitsberichte`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deutscher Django-Verein e.V.`,
        short_name: `Django e.V.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#43b78b`,
        display: `minimal-ui`,
        icon: `logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [postCssPresetEnv({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        whitelist: ["appointment", "gatsby-resp-image-wrapper"],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
      },
    },
    `gatsby-plugin-no-sourcemaps`,
  ],
}
