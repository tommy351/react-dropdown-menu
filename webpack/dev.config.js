import {merge} from 'lodash';
import config from './config';

module.exports = merge(config, {
  output: {
    filename: '[name].js'
  }
});
