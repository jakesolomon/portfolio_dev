module.exports = {
  siteMetadata: {
    title: "portfolio",
    description: "Front end developer"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-170128260-1",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/whiteJS.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
