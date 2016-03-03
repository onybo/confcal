var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './app/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [{ 
      test: /\.css$/, 
      loader: "style-loader!css-loader" 
    }
    ,{
      test: /\.tsx?$/,
      include: path.join(__dirname, 'app'),
      loaders: [
        'babel',
        'ts-loader'
      ]
    }
    ]
  }
};