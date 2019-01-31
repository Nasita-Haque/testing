const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./frontend/app.jsx",
  output: {
    path: path.join(__dirname,'/frontend/public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude:/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/preset-react']
        }
      },
       {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  watch: true
};