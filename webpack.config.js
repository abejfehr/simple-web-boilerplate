// Webpack configuration file
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('./dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[hash].js',
    publicPath: 'dist/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap'}),
    }],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  devtool: '#source-map',
};
