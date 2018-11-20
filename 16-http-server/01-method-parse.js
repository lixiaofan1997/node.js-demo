#!/usr/bin/node

const http=requre('http');

http.createServer((req,res)=>{
  console.log('HTTP request method:',req.method);
})
switch(req.method){
  case'GET':
     select(req,res);
     break;
  case 'POST':
     creat(req,res);
     break;
  case 'PUT':
     update(req,res);
     break;
  case 'DELETE':
     remove(req,res);
     break;
  default:
     res.end('something wrong!');
  
}
}).listen(8080);
function select(req,res){
  send(res);
}
function create(req,res){
  send(res);
}
function update(req,res){
  send(res);
}
function remove(req,res){
  send(res);
}
function send(res){
  res.end('ok!');
}
