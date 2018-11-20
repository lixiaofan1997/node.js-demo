#!/usr/bin/node

const http=require('http'),
      log=console.log,
      fs=require('fs');
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  if(req.url==='/' && req.method==='GET'){
    show(req,res,uploadPage);
    return;

  }
  if(req.url==='/' &&  req.method ==='POST')
  {
    var data='';
    var das=data.split('\r\n');

    req.setEncoding('binary');
    req.on('data',(chunk)=>{
      data+=chunk;
    });
    req.on('end',()=>{
      log(data);
      log(data.split('\r\n'));
      var das=data.split('\r\n');
      var fileName=das[1].split(':')[2].split('=')[1];
      fileName=fileName.slice(1,fileName.length-1);
      log('filename:;',fileName);
      var fileDate=das[4];
      log('filedata:',fileData);
      fs.writeFileSync(fileName,filedata,'binary');
      
    });
    show()
    res.end('ok');
  }
  else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);
