const db=require('./database.js');
TodoList.

var TodoList=function(){
  const sql='SELECT * from todo';
  var items=[];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
/*
<form action="/" method="post">
          <input type="text" name="item">
          <input type="submit" value="Add Item">
        </form>
        <ul><%- items.map(function(item){ return '<li>' + item + '</li>';  }).join('\n') %></ul*/
    TodoList.prototype.addItem=function(item,cb){
    var items=[];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    result.forEach((e)=>{
      items.push(e);});
    cb(false,items);
  });

    result.forEach((e)=>{
      it result.forEach((e)=>{
      items.push(e);});
    cb(false,items);
  });
TodoList.prototype.addItem=function(item,cb){
  
};
module.exports=TodoList;
