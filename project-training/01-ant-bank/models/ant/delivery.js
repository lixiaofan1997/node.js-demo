const db = require('../database.js');

var delivery = function(){};

/*查*/
delivery.prototype.getAll = function(cb){
      const sql = 'SELECT * from delivery';
      db.query(sql,function(err,result){
        if(err){
                        cb(true);
                                            return;               
        }
                  cb(false,result);                     
      });
};

/*删*/
delivery.prototype.delItem = function(id,cb){
  const sql = 'DELETE FROM delivery WHERE take_id=?';
  db.query(sql,[id.take_id],function(err,result){
    if(err){
      cb(ture);
      return;
    }
    cb(false,result);
  });
};

module.exports = delivery;

