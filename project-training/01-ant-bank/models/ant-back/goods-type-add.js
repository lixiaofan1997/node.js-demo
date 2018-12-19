const db = require('../database.js');

var goodstype = function(){};

/*查*/
goodstype.prototype.getAll = function(cb){
  const sql = 'SELECT * from groups';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.goods_type,e.good_num);});
    cb(false,result);
  });
};



module.exports = goodstype;
