const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  lintOnSave: false,
  publicPath: isProd ? "/vue-paper-dashboard/" : ""
};
