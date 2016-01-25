var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
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
    new webpack.NoErrorsPlugin()
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