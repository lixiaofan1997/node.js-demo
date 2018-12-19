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


module.exports = user;
