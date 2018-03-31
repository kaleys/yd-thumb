const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/thumb.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  },
  // devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new ExtractTextPlugin('style.css'), //报错
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}