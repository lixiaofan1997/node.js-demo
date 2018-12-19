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

/*增*/
lost.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO found VALUES(?,?,?,?,?,?,?,?,?,?)';
  db.query(sql,[e.username,e.item_id,e.item_time,e.item_name,e.item_type,e.item_addr,e.item_date,e.item_content,e.item_pic,e.item_number],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
lost.prototype.delItem = function(item_id,cb){
  const sql = 'DELETE FROM found WHERE item_id=?';
  db.query(sql,[item_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

lost.prototype.delAll = function(cb){
  const sql = 'DELETE FROM found';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
lost.prototype.update = function(id,username,cb){
  const sql = 'UPDATE found SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = lost;
