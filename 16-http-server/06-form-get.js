#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring'),
      log=console.log;
var items=[];
http.createServer((req,res)=>{
  if(url.parse(req.url).pathname ==='/' &&req.method ==='GET')
  {
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');
    var data=qs.parse(url.parse(req.url).query);
    log('query string:',url.parse(req.url).query);
    log('data:',data);

    if(typeof data.item != 'undefined'){items.push(data.item);}
  
    var html=''
    +'<!DOCTYPE html>'
    +'<html lang="en">'
    +'<head>'
    +'<meta charset="utf-8"/>'
    +'<title>todolist</title>'
    +'</head>'
    +'<body>'
    +'<h1>Todo List</h1>'
    +'<ul>'
    +items.map(function(item){
      return '<li>'+item+'</li>';
    }).join('\n')
    +'</ul>'
    +'<form method="GET" action="/">'
      +'<input type="text" name="item">'
      +'<input type="submit" value="Add Item">'
    +'</form>'
    +'</body>'
    +'</html>';
   res.end(html);
  }
  else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);
