import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';



export default {

  entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(import.meta.dirname, 'dist'),
      assetModuleFilename: '[name][ext][query]',
    },
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
      },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    allowedHosts: "all",
    },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.scss$/i,
        use: ["style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true
              }
            }
          }
        ]
      },
      
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
      
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin()
  ],
  };