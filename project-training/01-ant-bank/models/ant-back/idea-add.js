const db = require('../database.js');

var idea = function(){};

/*查*/
idea.prototype.getAll = function(cb){
  const sql = 'SELECT * from feedback';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.feed_id,e.feed_type,e.feed_content);});
    cb(false,result);
  });
};


module.exports = idea;
