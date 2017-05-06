// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var assetsRoot = path.resolve(__dirname, '../dist');
var indexFile = path.resolve(__dirname, '../dist/index.html');
var assetsPublicPath = '/'
if (process.env.ASSETS_FOLDER && process.env.ASSETS_FOLDER === 'docs') {
  assetsRoot = path.resolve(__dirname, '../docs');
  indexFile = path.resolve(__dirname, '../docs/index.html');
  assetsPublicPath=''; //no slash for github static live demo
  console.log("Building for live-demo on github")
}
module.exports = {
  build: {
    env: require('./prod.env'),
    index: indexFile,
    assetsRoot: assetsRoot,
    assetsSubDirectory: 'static',
    assetsPublicPath: assetsPublicPath,
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
