const path = require('path')

const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const pathResolver = (...paths) => path.resolve(__dirname, ...paths)

module.exports = {
  mode: 'development',

  entry: pathResolver('src/main.tsx'),

  resolve: {
    extensions: [".ts", ".tsx", '.js'],
  },

  plugins: [
    new ForkTsCheckerPlugin(),
    new HtmlPlugin({ template: pathResolver('src/index.html') }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff2$/,
        type: 'asset/resource'
      }
    ]
  }
}
