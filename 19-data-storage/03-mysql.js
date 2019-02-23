#!/usr/bin/node

const mysql=require('mysql');
const con=mysql.createConnection(
    {
      host:'localhost',
      user:'root',
    
      password:'1997lxf',
      database:'test'
      
} );
con.connect();

//operation db插入
const sql='insert  into  books(book_id,title,status)values(?,?,?)';
con.query(sql,[2,'node.js实战',0],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});  

/*
  const sql='insert  into  books(book_id,title,status)values(?,?,?)';
  con.query(sql,[2,'node.js实战',0],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);*/


/*con.query(sql,[100],function(err,result){
    if(err){
    console.error(err);
    process.exit(100);
    }
    console.log(result);
});*/
  const sql='update books  set title=? where book_id=?';
  con.query(sql,['mysql programming',2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);

});


const sql='delete from books where book_id=?';
con.query(sql,[2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});
//操作数据库的时候就能关闭了
con.end();
