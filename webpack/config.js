import webpack from 'webpack';

module.exports = {
  entry: {
    'react-dropdown-menu': './src/index.js'
  },
  output: {
    path: './dist',
    library: 'ReactDropdownMenu',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?loose=all'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
