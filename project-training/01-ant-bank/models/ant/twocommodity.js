const db = require('../database.js');

var twocommodity = function(){};
twocommodity.prototype.addTwocommodity  = function(obj,cb){
  const sql = 'INSERT INTO commodity(goods_name,goods_price,goods_type,username,goods_addr,goods_description,goods_date) VALUES(?,?,?,?,?,?,?)';
  db.query(sql,[obj.goods_name,obj.goods_price,obj.goods_type,obj.username,obj.goods_addr,obj.goods_description,obj.goods_date],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);                                                                                
  });
};

module.exports = twocommodity;

