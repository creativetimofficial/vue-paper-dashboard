const markdownParser = require('./markdownParser')
const path = require('path');
module.exports = {
  base: '/vue-material-dashboard/documentation/',
  markdown: {
    config: markdownParser
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../../src')
  },
  head: [
    ['link', { rel: 'stylesheet', href: `https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css` }]
  ],
  title: 'Vue Paper Dashboard',
  themeConfig: {
    repo: 'cristijora/vue-paper-dashboard',
    editLinks: true,
    sidebar: [
      '/',
      '/component-docs/dependencies',
      '/component-docs/filestructure',
      '/component-docs/buttons',
      '/component-docs/cards',
      '/component-docs/dropdown',
      '/component-docs/inputs',
      '/component-docs/tables',
      '/component-docs/notifications',
    ]
  }
};
