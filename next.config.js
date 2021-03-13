const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: false,
  target: 'serverless',
  env: {
    stripe_public_key: process.env.STRIPE_PK,
  },
})