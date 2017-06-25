const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');
const gutil = require('gulp-util');
const openURL = require('openurl').open;

gulp.task('webpack-dev', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new gutil.PluginError('webpack', err);

    gutil.log('[webpack]', stats.toString({
      chunks: false,
      colors: true,
    }));

    callback();
  });
});

gulp.task('webpack-dev-server', () => {
  const myConfig = Object.create(webpackConfig);

  new WebpackDevServer(webpack(myConfig), {
    publicPath: `/${myConfig.output.publicPath}`,
    stats: {
      colors: true,
    },
  }).listen(8080, 'localhost', (err) => {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    openURL('http://localhost:8080/webpack-dev-server/index.html');
  });
});

gulp.task('default', ['webpack-dev', 'webpack-dev-server']);
