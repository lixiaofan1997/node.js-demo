#!/usr/bin/node
const http=require('http');
http.createServer((res,req)=>
{
  console.log(res.header);
  req.pipe(process.stdout);
  res.end('ok');
 }).listen(8080);
