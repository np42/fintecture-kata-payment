require('module-alias/register');
const Process = require('cqes').Process;
const path    = require('path');

const props = { root: __dirname };
global.CQES = new Process.Process(props);
global.CQES.start();
