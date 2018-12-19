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

/*增*/
article.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO issues VALUES(?,?,?,?,?,?)';
  db.query(sql,[e.username,e.issue_id,e.issue_lable,e.issue_time,e.issue_content,e.issue_pic],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
article.prototype.delItem = function(issue_id,cb){
  const sql = 'DELETE FROM issues WHERE issue_id=?';
  db.query(sql,[issue_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

article.prototype.delAll = function(cb){
  const sql = 'DELETE FROM issues';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
article.prototype.update = function(id,username,cb){
  const sql = 'UPDATE issues SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = article;