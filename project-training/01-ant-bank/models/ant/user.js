const db = require('../database.js');

var user = function(){};

/*查*/
user.prototype.getAll = function(cb){
  const sql = 'SELECT * from users';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
                          
    }
    result.forEach((e) => {items.push(e.id,e.username,e.studentId,e.school,e.telNum,e.password,e.avatar,e.issue,e.goods,e.part_time);});
    cb(false,result);
                  
  });

};


module.exports = user;
