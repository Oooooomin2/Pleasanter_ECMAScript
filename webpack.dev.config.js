module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    index: ['@babel/polyfill','whatwg-fetch', './src/index.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      }
    ]
  }
};