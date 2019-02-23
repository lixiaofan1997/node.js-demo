const db = require('../database.js');

var found = function(){};

/*查*/
found.prototype.getAll = function(cb){
    const sql = 'SELECT * from found';
    db.query(sql,function(err,result){
      if(err){
              cb(true);
                    return;
      }
          cb(false,result);          
    });
};


/*删*/
found.prototype.delItem = function(id,cb){
    const sql = 'DELETE FROM found WHERE item_id=?';
    db.query(sql,[id.item_id],function(err,result){
      if(err){
          cb(ture);
          return;
      }
          cb(false,result);     
    });
};


module.exports = found;

