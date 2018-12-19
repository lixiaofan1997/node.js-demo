const db = require('../database.js');

var article = function(){};

/*查*/
article.prototype.getAll = function(cb){
  const sql = 'SELECT * from issues';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.issue_id,e.issue_lable,e.issue_time,e.issue_content,e.issue_pic);});
    cb(false,result);
  });
};


module.exports = article;
