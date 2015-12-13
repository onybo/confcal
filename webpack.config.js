module.exports = {  
  entry: './app/entry.ts',
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx']
  },
  // Add minification
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}