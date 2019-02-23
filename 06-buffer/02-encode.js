#!/usr/bin/node
const log=console.log,
      usr=process.argv[2],
      pwd=process.argv[3];
if(process.argv.length!==4){
  console.log('命令行格式:cmd username password');
  process.exit(1);
}
log('usr name: %s\npassword:%s',usr,pwd);
const buf=new Buffer(usr+':'+pwd);
log('base64:',buf.toString('base64'));

