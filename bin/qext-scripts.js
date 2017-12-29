#!/usr/bin/env node

'use strict';

var childProcess = require('child_process');
var program = require('commander');
var path = require('path');
// var childProcess = require('child_process');

program
  .version('0.1.11')
  .option('-b, --bundle', 'Bundle')
  .option('-d, --deploy', 'Deploy')
  .option('-s, --start', 'Start')
  .parse(process.argv);

if(program.bundle) childProcess.fork(path.resolve(__dirname, '../scripts/build.js'));
  


// const path = require('path');
// const childProcess = require('child_process');

// const args = process.argv.slice(2);
// const script = args[0];

// switch(script) {
//   case 'build':
//   case 'deploy':
//   case 'start': {
//     childProcess.fork(path.resolve(__dirname, `../scripts/${script}.js`))
//     break;
//   }
//   default: 
//     console.log('Unknown script ' +script);
//     break;
// }
