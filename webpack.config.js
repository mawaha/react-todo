const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './client.js',
  output: {
    path: __dirname + '/deploy',
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.(css)$/,
      exclude: /deploy/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    },
    {
      test: /\.(sass|scss)$/,
      exclude: /deploy/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [new ExtractTextPlugin('app.css')],
  watch: true
}