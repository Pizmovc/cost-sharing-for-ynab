const path = require('path');

module.exports = {
  entry: './client/siteSrc/index.jsx',
  output: {
    filename: 'siteBundle.js',
    path: path.resolve(__dirname, 'client', 'site'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
