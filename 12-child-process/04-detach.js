#!/usr/bin/node
const cp=require('child_process');

console.log('I am father process.pid:',process.pid);

cp.spawn('node',['./02-child.js'],{detached:true,stdio:['ignore',1,2]});


//cmd.stdout.pipe(process.stdout);
setTimeout(()=>{
  console.log('Father game over!');
  process.exit();
},6000);
