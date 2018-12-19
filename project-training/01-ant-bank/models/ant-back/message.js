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

/*增*/
message.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO chat VALUES(?,?,?)';
  db.query(sql,[e.username,e.chatting,e.content],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
message.prototype.delItem = function(username,cb){
  const sql = 'DELETE FROM chat WHERE username=?';
  db.query(sql,[username],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

message.prototype.delAll = function(cb){
  const sql = 'DELETE FROM chat';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
message.prototype.update = function(id,username,cb){
  const sql = 'UPDATE chat SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = message;
