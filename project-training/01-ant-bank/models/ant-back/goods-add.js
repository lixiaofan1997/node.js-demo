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


module.exports = goods;
