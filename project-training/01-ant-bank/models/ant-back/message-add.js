const db = require('../database.js');

var message = function(){};

/*查*/
message.prototype.getAll = function(cb){
  const sql = 'SELECT * from chat';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.chatting,e.content);});
    cb(false,result);
  });
};




module.exports = message;
