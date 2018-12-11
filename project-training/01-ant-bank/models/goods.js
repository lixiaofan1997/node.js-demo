const db = require('./database.js');

var user = function(){};

/*查*/
user.prototype.getAll = function(cb){
  const sql = 'SELECT * from commodity';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.goods_id,e.goods_name,e.goods_price,e.goods_type,e.username,e.goods_addr, e.goods_description,e.goods_date,e.goods_pic);});
    cb(false,result);
  });
};

/*增*/
user.prototype.addItem = function(id,username,cb){
  const sql = 'INSERT INTO commodity(id,username) VALUES(?,?)';
  db.query(sql,[id,username],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(username,cb){
  const sql = 'DELETE FROM commodity WHERE username=?';
  db.query(sql,[username],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

user.prototype.delAll = function(cb){
  const sql = 'DELETE FROM commodity';
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
  const sql = 'UPDATE commodity SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = user;
