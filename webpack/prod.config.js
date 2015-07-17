import {merge} from 'lodash';
import webpack from 'webpack';
import config from './config';

module.exports = merge(config, {
  output: {
    filename: '[name].min.js'
  },
  plugins: config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
});
