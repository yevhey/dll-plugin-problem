var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: 'development',
  resolve: { alias: {} },
  entry: {
    components: ['./beta'],
  },
  output: {
    path: path.join(__dirname, '..'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '..', '[name].json')
    })
  ]
};