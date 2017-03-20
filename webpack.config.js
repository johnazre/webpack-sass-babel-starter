module.exports = {

  // define entry point
  entry: './src/index.js',

  // define output point
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  // define loaders
  module: {
    loaders: [
      {
        test: /\.js$/, // file extension to test for
        exclude: /(node_modules)/, // doesn't include the node_modules folder
        loader: 'babel-loader', 
        query: 'env' // npm installed babel-preset-env, so the query here is the "env"
      },
      {
        test: /\.scss$/, 
        loader: 'style-loader!css-loader!sass-loader', // To add loaders, use !
      },
    ]
  }
}