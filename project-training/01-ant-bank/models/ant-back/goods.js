const db = require('../database.js');

var goods = function(){};

/*查*/
goods.prototype.getAll = function(cb){
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
goods.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO commodity VALUES(?,?,?,?,?,?,?,?,?)';
  db.query(sql,[e.goods_id,e.goods_name,e.goods_price,e.goods_type,e.username,e.goods_addr, e.goods_description,e.goods_date,e.goods_pic],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
goods.prototype.delItem = function(goods_id,cb){
  const sql = 'DELETE FROM commodity WHERE goods_id=?';
  db.query(sql,[goods_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

goods.prototype.delAll = function(cb){
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
goods.prototype.update = function(id,username,cb){
  const sql = 'UPDATE commodity SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = goods;
