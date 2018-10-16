#!/usr/bin/node
const fs=require('fs');

var file=process.argv[2] ||__filename;

var src=fs.createReadStream(file);

src.on('error',(err)=>{
  console.error(srr.message);
  
  process.exit(1);
});

src.on('open',function(){
  this.pipe(process.stdout);
});
