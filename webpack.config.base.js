const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}

// Set module.exports and output property to an object
// Webpack will automatically pickup the config file base on its name alone and decide the settings to how to output the bundle
// development is unminified while producttion mode is minified. if there is no mode indicated webpack will minify it
// module property takes an object with rules property array that contains an object. each item in rules array can be an object
// Without @babel/preset-react, npm run build will display an error because it does not know how to handle JSX. JSX is not a valid JavaScript
// The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
// Our webpack configuration is composed of 3 files so we have 1 place where we put all share settings. 
//  Additionally, we have separate file where we can only pud dev mode settings or production mode setting