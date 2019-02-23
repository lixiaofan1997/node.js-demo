#!/usr/bin/node

const http=require('http'),url=require('url');

var address=process.argv[2] ||'http://sample.wangding.in/web/one-div.html';
console.log('url:'address);
address=global.encodeURI(address);
const options = {
    hostname: url.parse(address).hostname,
    port:url.parse(address).port,
    path:url.psrse(address).path,
    method: 'POST',
    headers: {
    
       'User-Agents':'01-my-curl.js';                     
    }

};
http.request(options,(res)=>{
  console.log(`http/${res.httpVersion}${res.statusCode} ${res.statusMessage}`)
  console.log(res.headers);
console.log();
})
