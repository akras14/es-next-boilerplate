var path = require('path');
require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.es6')
  },
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.es6?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
