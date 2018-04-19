const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  mode: "production",

  context: path.resolve(__dirname, './'),

  entry: {
    app: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/static/',
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]'
        }
      },
    ]
  },

  plugins: [
		new CleanWebpackPlugin([
			'dist',
		]),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: './static/favicon.ico',
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseWhitespace: true
      },
    }),

    // new ExtractTextPlugin('[name].[hash:8].css'),
  ],

  resolve: {
    alias: {
      '@': path.resolve('src/components'),
      '@@': path.resolve('src/containers'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  optimization: {
		minimizer: [
			new UglifyJsPlugin({
        parallel: true,
      })
    ],
  }
}
