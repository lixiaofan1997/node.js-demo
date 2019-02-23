const db = require('../database.js');

var feedback = function(){};

feedback.prototype.addItem = function(obj,cb){
  const sql = 'INSERT INTO feedback(feed_type,feed_content) VALUES(?,?)';
  db.query(sql,[obj.feed_type,obj.feed_content],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

module.exports = feedback;
