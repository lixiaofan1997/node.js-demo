const db = require('./database.js');

var user = function(){};

/*查*/
user.prototype.getAll = function(cb){
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

/*增*/
user.prototype.addItem = function(id,username,cb){
  const sql = 'INSERT INTO feedback(id,username) VALUES(?,?)';
  db.query(sql,[id,username],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(feed_id,cb){
  const sql = 'DELETE FROM feedback WHERE feed_id=?';
  db.query(sql,[feed_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

user.prototype.delAll = function(cb){
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
user.prototype.update = function(id,username,cb){
  const sql = 'UPDATE feedback SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = user;
