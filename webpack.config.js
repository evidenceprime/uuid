const path = require('path');
const babelConfig = require('./babel.config.json');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'uuid.js',
    library: 'uuid',
    libraryTarget: 'umd',
  },
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig.env.commonjsBrowser,
        },
        exclude: /node_modules/,
      },
    ],
  },
};
