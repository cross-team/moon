module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        // Integrate react-axe in production. This defaults to false.
        showInProduction: false,

        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
        // Context to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
        axeContext: {
          // Your axe-core context.
        }
      },
    },
  ],
}
