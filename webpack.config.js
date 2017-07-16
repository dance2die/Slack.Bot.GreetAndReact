var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.json$/,
            loader: 'json'
        }],
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            },
        },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};