const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  // entry: './src/js/main.js',
  mode,
  target,
  devtool,

  devServer: {
    port: 3000,
    open: true,
    hot: true
  },

  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[hash][ext]'
  },

  externalsType: 'script',
  externals: {
    ymaps3: [
      'https://api-maps.yandex.ru/v3/?apikey=ec8bbc2e-4b6d-4dd2-866f-1be3c745869c&lang=ru_RU',
      'ymaps3'
    ]
  },
  devtool: 'cheap-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]]
          }
        }
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
