/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `figures`,
        path: `${__dirname}/src/figures/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `vehicles`,
        path: `${__dirname}/src/vehicles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `playsets`,
        path: `${__dirname}/src/playsets/`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
