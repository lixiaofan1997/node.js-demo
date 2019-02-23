#!usr/bin/node

const http=require('http');
  fs=require('fs');
var filename=process.argv[2];
var buf=fs.readFileSync(filename);
var dataURL='data:image/png;base64,'+buf.toString('base64');

var html='<!DOCTYPE html><html><head><title>hello</title></head><body><img src="'+dataURL+'"></body></html>';

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);
