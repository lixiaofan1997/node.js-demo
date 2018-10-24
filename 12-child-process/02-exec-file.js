#!/usr/bin/node

const cp=require('child_process');
console.log('I am father process.Pid:',process.pid);

cp.execFile('node',['./02-child.js'],(err,stdout)=>{
  if(err){
    console.error(err.message);
    process.exit(100);
  }
  console.log(stdout);
 
});
