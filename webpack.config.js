const path = require('path');
const HtmlWebpackPlugin =require ('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
    filename: "./css/style.css", 
    })
    ],
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
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"], 
      },
         {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]'
        }
      }
    ],
  },
};