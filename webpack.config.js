const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    fallback: {
      'path': false,
      'ejs': false,
      'node_modules': false,
      'fs': false,
    }
  },
  watch: true,
  entry: {
    index: path.resolve(__dirname, './client/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'views'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader'],
      }
    ]
  }
}