#!/usr/bin/node

const cp=require('child_process');
console.log('I am child process.PID',process.pid);
process.send('child process is start!pid:'+process.pid);

process.on('message',(msg)=>{
  console.log('message from father:',msg);
})
