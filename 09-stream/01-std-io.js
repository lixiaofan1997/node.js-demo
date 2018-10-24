#!/usr/bin/node

const  stdin=process.stdin;
stdin.resume();
const 
stdin.setEncoding('utf-8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
})
stdin.on('end',()=>{
  process.exit();
})
