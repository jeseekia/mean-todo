var webpack = require('webpack'),
       path = require('path');

module.exports = {
    //Tell webpack where the source code lives
    context: __dirname + '/app',
    //Tell webpack the first file to load
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    //Where the bundle will go when webpack is done
    output: {
        path: __dirname + '/public/scripts',
        filename: 'todo.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
