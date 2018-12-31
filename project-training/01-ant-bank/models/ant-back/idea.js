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
    result.forEach((e) => {items.push(e.feed_id,e.username,e.feed_type,e.feed_content);});
    cb(false,result);
  });
};

/*增*/
idea.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO feedback VALUES(?,?,?,?)';
  db.query(sql,[e.feed_id,e.username,e.feed_type,e.feed_content],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};
/*删*/
idea.prototype.delItem = function(feed_id,cb){
  const sql = 'DELETE FROM feedback WHERE feed_id=?';
  db.query(sql,[feed_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

idea.prototype.delAll = function(cb){
  const sql = 'DELETE FROM feedback';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
idea.prototype.update = function(id,username,cb){
  const sql = 'UPDATE feedback SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = idea;
