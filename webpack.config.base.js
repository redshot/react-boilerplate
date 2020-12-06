const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}

/**
 * Set module.exports and output property to an object
 * The command to run the project in npm run dev, npm run build or depending on the config in package.json
 * npm i -D name-of-package saves the package as devdependency, npm i -S name-of-package saves the package as runtime dependency
 * Webpack will automatically pickup the config file base on its name alone and decide the settings to how to output the bundle
 * development is unminified while producttion mode is minified. if there is no mode indicated webpack will minify it
 * module property takes an object with rules property array that contains an object. each item in rules array can be an object
 * Without @babel/preset-react, npm run build will display an error because it does not know how to handle JSX. JSX is not a valid JavaScript
 *  @babel/preset-env is a collection of babel plugins to transform modern JavaScript code, depending on the target browser we specify in the configuration.
 * The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
 * Our webpack configuration is composed of 3 files so we have 1 place where we put all share settings.
 *  Additionally, we have separate file where we can only pud dev mode settings or production mode setting
 * webpack-dev-server watches the files and will do the build in the dist folder then send the signal to the browser to reload the page
 * We need plugin-proposal-class-properties package to understand proposed javascript features syntax like state = { count: 0 }.
 * test: /\.js$/ and test: /\.js$/ contains regular expression test for js and css extensions
 * css-loader is gonna allow webpack to handle css syntax while style-loader is gonna take the css and inject the style tag into html runtime
 * react-hot-loader can update the part of the page without reloading the whole page
 * As the app gets more complex, we will be able to keep an eye of the size of our bundle through webpack-bundle-analyzer
 * @babel-polyfill is gonna handle features that are not available in older browsers.
 *  Polyfills can add to the size(Parsed size) of your app bundle
 *  A lot of newer browsers support new features so if we know the browsers that we are targeting, it will be nice to set the features that we only need base our target browsers
 *  Without any configuration, preset-env is gonna act like the preset for es2015, 2016, 2017 and 2018 but with specification we can target environments to customize the build(app bundle)
 *  targets:{} and useBuiltIns: 'entry' config is gonna control the polyfill that will be needed from core-js
 *  core-js is a collection of polyfills. A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
 * React.lazy and suspense allows us to asynchronously load modules only when we need it. By splitting our code, we can keep our initial bundle small on load
 * Do not execute "npm test" in terminal with config "test": "jest" in Windows 10. It's not recommended.
 *  If you want to use jest command, replace "jest" with use "node_modules/.bin/jest"
 * The jest test is gonna have a problem with JSX and it will say we don't have standard javascript and we need to transform the code order to test it.
 *  By default, babel loader is gonna find .babelrc and use its options
 * Eslint helps avoid common javascript errors. Enter "npm run lint" on terminal to execute eslint on project
 * Eslint-plugin-jsx-a11y checks jsx for potential accessbility issues
 * Husky allows us to ensure that our code is formatted and well-tested before committing to git
 * React strictmode is gonna give us warnings and anything that is deprecated(this might only happen in development mode)
 *  - Will warn in the console
 *
 *
 */
