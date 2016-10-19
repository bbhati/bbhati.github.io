var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test:  /\.js$/, loader: 'babel', query: {presets: ['react', 'es2015']}, exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" }
		]        
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
