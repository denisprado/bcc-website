const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'xik8dji',
          families: ['Proxima Nova'],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-react-svg',

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-webpack-size',
  ],
};
