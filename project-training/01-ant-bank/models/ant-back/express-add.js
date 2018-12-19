const db = require('../database.js');

var exp = function(){};

/*查*/
exp.prototype.getAll = function(cb){
  const sql = 'SELECT * from delivery';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.take_id,e.take_time,e.take_name,e.take_place,e.take_content);});
    cb(false,result);
  });
};




module.exports = exp;
