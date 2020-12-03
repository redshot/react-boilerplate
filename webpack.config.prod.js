const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html',
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
})

/**
 * Webpack is gonna include the React and ReactDOM libraries as part of the bundle every time we run our build
 * For our production build, we will externalize React and ReactDOM libraries and pull them from a CDN
 * externals is a key that's gonna take an object
 * We have the ability to variables and condition in our index.html file because of html webpack plugin
 *
 *
 */
