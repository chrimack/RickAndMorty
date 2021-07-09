const path = require('path');

const ENTRY = path.join(__dirname, 'client', 'src', 'index.jsx');
const OUTPUT = path.join(__dirname, 'client', 'dist');

module.exports = {
  entry: ENTRY,
  output: {
    path: OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}