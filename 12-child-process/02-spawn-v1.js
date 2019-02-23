#!/usr/bin/node

const cp=require('child_process');
console.log('I am father process.PID:',process.pid);
var cmd=cp.spawn('cat',['02-spawn-v1.js']);
cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
