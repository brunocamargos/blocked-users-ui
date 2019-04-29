const path = require('path')

const include = path.join(__dirname, 'src')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        }
      },
      {
        test: /\.js$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        ],
        include
      }
    ]
  }
}