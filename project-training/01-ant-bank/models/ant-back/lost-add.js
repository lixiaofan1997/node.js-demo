const db = require('../database.js');

var lost = function(){};

/*查*/
lost.prototype.getAll = function(cb){
  const sql = 'SELECT * from found';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.item_id,e.item_time,e.item_name,e.item_type,e.item_addr,e.item_date,e.item_content,e.item_pic,e.item_number );});
    cb(false,result);
  });
};

module.exports = lost;
