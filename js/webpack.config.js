/* global __dirname, require, module*/

const pkg = require('./package.json');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'Miracle';
let plugins = [], outputFile;

if (env === 'build') {
  // plugins.push(new webpack.BannerPlugin([
  //   pkg.name + ' v' + pkg.version + ' published at ' + new Date()
  // ].join('\n')));

  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  // plugins.push(new webpack.BannerPlugin([
  //   pkg.name + ' v' + pkg.version + ' published at ' + new Date()
  // ].join('\n')));
  
  outputFile = libraryName + '.js';
}

const config = {
  entry: './src/index.js',
  // devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
