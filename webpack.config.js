'use strict';

let path = require('path');
let port = 8000;
let webpack = require('webpack');
let srcPath = path.join(__dirname, '/../src');
let publicPath = '/assets/';
let additionalPaths = [];

module.exports = {
  port: port,
  debug: true,
  cache: true,
  devtool: 'eval',
  entry: {
    propertyDecorator: [
      'webpack-dev-server/client?http://127.0.0.1:8000',
      './src/propertyDecorator/'
    ],
    classDecorator: [
      'webpack-dev-server/client?http://127.0.0.1:8000',
      './src/classDecorator/'
    ],
    exam1:[
      'webpack-dev-server/client?http://127.0.0.1:8000',
      './src/exam/1/'
    ],
    exam2:[
      'webpack-dev-server/client?http://127.0.0.1:8000',
      './src/exam/2/'
    ]
  },
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: '[name].js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    hot: false,
    port: port,
    publicPath: publicPath,
    noInfo: false,
    stats: {
      colors: true,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      modules: false, // reduce log
      children: true,
      version: true,
      cached: true,
      cachedAssets: true,
      reasons: true,
      source: true,
      errorDetails: true
    }
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {}
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'standard',
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015']
        }
      }
    ]
  },

  standard: {
    parser: 'babel-eslint'
  },
  modulesDirectories: ['src', 'src/js', 'web_modules', 'bower_components', 'node_modules'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
