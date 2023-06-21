const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        // 替换 webpack4 file-loader
        type:'asset/resource'
      }
    ]
  }
};
