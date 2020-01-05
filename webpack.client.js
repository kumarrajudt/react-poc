const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const clientConfig = {
  target: 'web',
  entry: {
    app: path.resolve(__dirname, './src/client/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ]
      }
    ]
  }
}

module.exports = clientConfig;