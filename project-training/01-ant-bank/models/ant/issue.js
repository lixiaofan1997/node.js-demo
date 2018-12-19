const db = require('../database.js');

var issue = function(){};

/*查*/
issue.prototype.getAll = function(cb){
  const sql = 'SELECT * from issues';
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
                          
    }
    cb(false,result);
                  
  });

};

/*删*/
issue.prototype.delItem = function(id,cb){
    const sql = 'DELETE FROM issues WHERE issue_id=?';
    db.query(sql,[id.issue_id],function(err,result){
      if(err){
              cb(ture);
                    return;                        
      }
          cb(false,result);           
    });
};

module.exports = issue;
