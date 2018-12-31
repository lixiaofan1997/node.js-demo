const db = require('../database.js');

var user = function(){};

user.prototype.getAll = function(obj,cb){
  const sql = 'SELECT * from users WHERE telNum = ?';
  db.query(sql,[obj.telNum],function(err,result){
    //console.log(tel);
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
    //console.log(result);
  });
};

user.prototype.addUser = function(obj,cb){
  const sql = 'INSERT INTO users(username,studentId,school,telNum,password,identity) VALUES(?,?,?,?,?,?)';
  db.query(sql,[obj.username,obj.studentId,obj.school,obj.telNum,obj.password,obj.identity],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

module.exports = user;
