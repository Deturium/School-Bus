const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  devtool: 'eval-source-map',

  mode: "development",

  context: path.resolve(__dirname, './'),

  entry: {
    app: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunks/[name].[hash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader'
      //   ],
      // },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]'
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: './static/favicon.ico',
    })
  ],

  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src/components'),
      '@@': path.resolve('src/containers'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  devServer: {
    contentBase: path.resolve(__dirname, './'),
    historyApiFallback: true,
    open: true,
    proxy: {
      "/api": {
        // target: "https://www.zjusec.com",
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: {
          // '^/api/v1': ''
        },
      },
    }
  },
}
