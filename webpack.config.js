const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/thumb.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library:'kaleys'
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
      },
      // {
      //   test: '/\.scss$/',
      //   use: ExtractTextPlugin.extract({
      //     use: [
      //       'css-loader',
      //       'scss-loader'
      //     ]
      //   })
      // }
    ]
  },

  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new ExtractTextPlugin('style.css'), //报错
    // new htmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html'
    // })
  ]
}