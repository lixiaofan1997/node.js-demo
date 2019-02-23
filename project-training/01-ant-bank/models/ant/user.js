const db = require('../database.js');

var user = function(){};

/*查*/
user.prototype.getAll = function(cb){
  const sql = 'SELECT * from users';
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
                          
    }
    cb(false,result);
                  
  });

};

/*改*/
user.prototype.update = function(obj,cb){
  const sql = 'UPDATE users SET username=?,telNum=?,password=? WHERE id=?';
  db.query(sql,[obj.username,obj.telNum,obj.password,obj.id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

module.exports = user;
