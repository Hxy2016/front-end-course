var path = require('path');
var srcPrefix = './assets/js-src/';
module.exports = {
  entry: {
    'app': srcPrefix + 'app'
  },
  output: {
    'path': 'assets/js',
    filename: '[name].js',
    trunkFilename: '[name].bundle.js',
    publicPath: '/assets/js/'// 用异步加载模块一定要加这个
  },
  module: {
      loaders: [
          { test: /\.html$/, loader: "html-loader" },
      ]
  },
  resolve: {
    alias: {
      // 'routes': path.resolve(__dirname, srcPrefix + 'routes'),
      vue: path.resolve(__dirname, "node_modules/vue/dist/vue.min.js"),
      vuex: path.resolve(__dirname, "node_modules/vuex/dist/vuex.min.js"),
      store: path.resolve(__dirname, 'assets/js-src/helper/store.js'),
      'vue-router': path.resolve(__dirname,'node_modules/vue-router/dist/vue-router.min.js'),
      'route-component': path.resolve(__dirname,'assets/js-src/helper/route-component.js'),
      'setting':  path.resolve(__dirname, 'setting.js')
    }
  }
};
