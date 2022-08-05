module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.redbarongames.co.uk/',
    title: 'Developer Portfolio for Conor Watson',
    description: 'Developer Portfolio built with React, Gatsby and GraphQL',
    image: `/favicon.png`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-fontawesome-css',
    // 'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-static-page-modal',
      options: {
        pageRendererPath: `${__dirname}/src/library/components/PageRenderer.tsx`,
        routes: ['/portfolio/:slug/', '/blog/:slug/'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
        stages: ['DRAFT', 'PUBLISHED'].filter(stage => process.env.NODE_ENV !== 'production' || stage === 'PUBLISHED'),
      },
    },
  ],
};
