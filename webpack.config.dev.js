const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000,
  },
  devtool: 'source-map',
})

/**
 * Source map is gonna map the source code to the actual code running on the browser
 *
 */
