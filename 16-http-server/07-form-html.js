#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring'),
      fs=require('fs');
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
  
   
   res.end(html);
  }
  else if(req.url === '/' && req.method === 'POST'){
    var data='';
    req.on('data',(chunk)=>{data+=chunk;})
    req.on('end',()=>{
        var list=qs.parse(data);
        if(list.item !=='')items.push(list.item);
        showPage(req,res);
      });
  }
  else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);
function showPage(req,res){
  var html=fs.readFileSync('todo-list-template.html').toString('utf8');
  var content=items.map(function(item){
    return '<li>'+item+'</li>';
  }).join('\n');
  html.replace('%',content);
  res.end(html);
}
