const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: './style.css' })],
  devtool: 'source-map',
};
