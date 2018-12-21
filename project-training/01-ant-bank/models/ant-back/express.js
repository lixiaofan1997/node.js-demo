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

/*增*/
exp.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO delivery VALUES(?,?,?,?,?,?)';
  db.query(sql,[e.take_id,e.username,e.take_time,e.take_name,e.take_place,e.take_content],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
exp.prototype.delItem = function(take_id,cb){
  const sql = 'DELETE FROM delivery WHERE take_id=?';
  db.query(sql,[take_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

exp.prototype.delAll = function(cb){
  const sql = 'DELETE FROM delivery';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
exp.prototype.update = function(id,username,cb){
  const sql = 'UPDATE delivery SET username = ? WHERE take_id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = exp;
