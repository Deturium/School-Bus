const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  mode: "development",

  context: path.resolve(__dirname, './'),

  entry: {
    app: './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // publicPath: 'static',
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
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      // minify: {
      //   caseSensitive: false,
      //   collapseBooleanAttributes: true,
      //   collapseWhitespace: true
      // },
    })
  ],

  resolve: {
    // alias: {
    //   'vue$': 'vue/dist/vue.esm.js'
    // },
    extensions: ['*', '.js', '.vue', '.json']
  },

  devServer: {
    contentBase: path.resolve(__dirname, './'),
    historyApiFallback: true,
    inline: true,
  },
};
