const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')

/** @param {string} dir */
const fm = (dir) => path.join(__dirname, dir)

module.exports = {
  entry: './src/index.js',

  mode: 'development',
  devtool: 'source-map',

  devServer: {
    static: {
      directory: fm('dist'),
    },
    compress: false,
    port: 3000,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      '@components': fm('src/components'),
      '@pages': fm('src/pages'),
      '@containers': fm('src/containers'),
    },
  },

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
}
