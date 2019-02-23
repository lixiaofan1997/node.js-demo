#!/usr/bin/node
console.log('i am child process.PID:',process.pid);

var timer=global.setInterval(()=>{
  console.log('time',Date.now());
},1500);
global.setTimeout(()=>{
  global.clearInterval(timer);
  console.log('ok!16 seconds.game over!');
},15000);
