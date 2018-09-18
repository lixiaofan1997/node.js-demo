#!/usr/bin/node

console.log('start...');
const timeID =global.setInterval(loop,500);

function loop(){
  console.log('I will loop forever!');
}

global.setTimeout(()=>{
  global.clearInterval(timeID);
  
  console.log('end');},3000);

//console.log('start...');

//varcount=0;
//const timeID=global.setInterval(loop,500);

//function loop(){
  //console.log('I will loop forever');
//  if(++count == 10)global.clearInterval(timeID);
//}
