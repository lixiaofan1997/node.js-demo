const db = require('../database.js');

var good = function(){};

/*查*/
good.prototype.getAll = function(cb){
      const sql = 'SELECT * from commodity';
      db.query(sql,function(err,result){
        if(err){
          cb(true)
          return               
        }
          cb(false,result);             
      });
};

/*删*/
good.prototype.delItem = function(id,cb){
    const sql = 'DELETE FROM commodity WHERE goods_id=?';
    db.query(sql,[id.goods_id],function(err,result){
      if(err){
              cb(ture);
                    return;
                        
      }
          cb(false,result);
            
    });

};



module.exports = good;

