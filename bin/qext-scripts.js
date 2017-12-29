#!/usr/bin/env node

'use strict';

var childProcess = require('child_process');
var program = require('commander');
var path = require('path');

program
  .version('0.1.11')
  .option('-b, --bundle', 'Bundle')
  .option('-d, --deploy', 'Deploy')
  .option('-w, --watch', 'Watch')
  .parse(process.argv);

if(program.bundle) childProcess.fork(path.resolve(__dirname, '../scripts/build.js'));
else if(program.deploy) childProcess.fork(path.resolve(__dirname, '../scripts/deploy.js'));
else if(program.watch) childProcess.fork(path.resolve(__dirname, '../scripts/watch.js'));
