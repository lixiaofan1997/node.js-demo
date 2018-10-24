#!/usr/bin/node

const Readable=require('stream').Readable;

var src=new Readable();
var c='a'.charCodeAt(0);
src._read=()=>{
  src.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) src.push(null);
};
src.pipe(process.stdout);
