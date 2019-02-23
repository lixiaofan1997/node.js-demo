#!/usr/bin/node

const log=console.log;

var buf1=new Buffer(256);
buf1[0]=0;

log('but1 length:',buf1.length);
log('\nbuf1:',buf1);

//通过循环，初始化buffer中的每个字节
for(var i=0;i<buf1.length;i++)
{
  buf1[i]=i;
}
log('\nbuf1:',buf1);

//
var  buf2=buf1.slice(250,256);
log('\nbuf2:',buf2);

buf2.fill(0);
log('\n buf2:',buf2);
//用数组初始化Buffer
var array=['a',0xba,0xdf,0x00,255,10];
var buf3=new Buffer(array);
log('\nbuf3:',buf3.length,buf3);

