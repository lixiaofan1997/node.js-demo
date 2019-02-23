const db = require('../database.js');

var job = function(){};

/*查*/
job.prototype.getAll = function(cb){
  const sql = 'SELECT * from partime_job';
    db.query(sql,function(err,result){
      if(err){
        cb(true);
        return; 
      }
      cb(false,result);         
    });
};

/*删*/
job.prototype.delItem = function(id,cb){
    const sql = 'DELETE FROM partime_job WHERE part_id=?';
    db.query(sql,[id.part_id],function(err,result){
      if(err){
              cb(ture);
                    return;
                        
      }
          cb(false,result);
            
    });

};



module.exports = job;

