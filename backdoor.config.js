const path = require('path');

module.exports = {
  entry: ['./backdoor/js/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'backdoor/dist')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
          plugins: ['add-module-exports', 'react-html-attrs', 'transform-class-properties']
        }
      }
    ]
  }
};