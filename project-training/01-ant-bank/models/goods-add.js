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
user.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO commodity VALUES(?,?,?,?,?,?,?,?,?,?)';
  db.query(sql,[e.goods_id,e.goods_name,e.goods_price,e.goods_type,e.username,e.goods_addr, e.goods_description,e.goods_date,e.goods_pic],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(id,cb){
  const sql = 'DELETE FROM commodity WHERE id=?';
  db.query(sql,[id],function(err,result){
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



module.exports = user;
