#!/usr/bin/node

const http=require('http'),log=console.log;
http.createServer((req,res)=>{
  if(req.url==='/' &&  req.method ==='POST')
  {
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    req.pipe(process.stdout);
    res.end('ok');
  }
  else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);
