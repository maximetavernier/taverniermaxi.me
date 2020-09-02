const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = {
  mode: 'none',
  entry: [
    resolve('build/bundle.js'),
  ],
  output: {
    filename: 'index.js',
    path: resolve('assets/js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [ 'style-loader', 'css-loader' ],
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx'],
    alias: {
      '@components': resolve('build/www/components'),
      '@models': resolve('build/www/models'),
    }
  }
};