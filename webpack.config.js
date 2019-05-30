var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: ['./test.js'],
  output: {
    path: path.join(__dirname),
  },
  plugins: [
    new webpack.DllReferencePlugin({
      scope: 'components',
      manifest: require('./components.json')
    })
  ],
};