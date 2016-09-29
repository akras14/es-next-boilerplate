var path = require('path');
require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.jsx')
  },
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets"),
      path.resolve(__dirname, "./node_modules/bootstrap-sass/assets/stylesheets/bootstrap")
    ]
  }
};
