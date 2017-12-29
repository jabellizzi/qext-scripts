'use strict';

var Rx = require('rxjs');

export default function(extensionName) {
  return Observable.create(observer => {
    // Define webpack compiler
    const compiler = webpack({
      entry: [`./src/index.js`],
      output: {
        path: `${process.cwd()}/dist/${extensionName}`,
        filename: `${extensionName}.js`
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader' }
            ]
          }
        ]
      }
    });


    // Compile once, then complete Observable
    compiler.run((err, stats) => {
      console.log("[webpack:build]", stats.toString({colors: true}));
      observer.next(chart);
    })
  })
}