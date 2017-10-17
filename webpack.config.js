//babel transfer ES2015 to ES5

const path = require('path'); // this is node js technology
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    // The Entry Point = index.js = the first file should be executed
    // index file is the bootstrap file
    entry: './src/index.js',

    // Output property: where to save the property
    output: {
        // a path generate by node helper( no matter in what os )
        path: path.resolve(__dirname, 'build'), // save to the build folder
        // file name is up to you. most people use bundle.js
        filename: 'bundle.js',
        // handle the large image / directory
        publicPath: 'build/'
    },
    // to run rules/loader
    module: {
        rules: [
            {
                use: 'babel-loader',
                // apply to all js file. babel should only apply to js file not css
                test: /\.js$/,
            },
            {
              // loader is applied from right to left
              //use: ['style-loader', 'css-loader'],
              // loader and user are mostly the same thing, loader is legacy property
              // Plugin prevent thing to be bundled
              loader: ExtractTextPlugin.extract({
                  loader: 'css-loader'
              }),
              test: /\.css$/,
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
                // again. order matters, image-webpack-loader is applied first
                {
                    loader: 'url-loader',
                    // if over 40000 bytes, save to a different file
                    options: { limit: 40000 }
                },
                'image-webpack-loader'
              ]
            }
        ]
    },
    plugins: [
      // throw all css files into style.css
      new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;


// babel-loader teaches babel how to work with webpack

// babel-core how out output file

// babel-preset-env rule set for transfering es2015 to es5
