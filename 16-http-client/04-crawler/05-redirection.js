#!/usr/bin/node

const http=require('http');
const addr='http://www.sian.com/';
function getURL(addr){
  http.get(addr,(res)=>{
     log(`HTTP/${res.httpVersion}${res.statusCode}`)

    if(res.statusCode>300 && res.statusCode<400){
      var newAddr=res.headers['location'];
     log(`HTTP/${res.httpVersion}${res.statusCode}`)
      getURL(newAddr);
    }else{
      res.pipe(process.stdout);
    }
  });
}
getURL(addr){
  
}
