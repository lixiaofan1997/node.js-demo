//普通路由
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.end('hello world');
});
//支持多个路由的处理函数
function c1(req,res,next){
  console.log('c1');
  next();
}
function c2(req,res,next){
  console.log('c2');
  next();
}
//写在里面的不用next，外面的需要next
app.get('/abc',[c1,c2],function(req,res,next){
  console.log('abc');
},function(req,res){
  console.log('def');
  res.end('ok!');
});
app.listen(8080);
