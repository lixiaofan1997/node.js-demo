const db = require('../database.js');

var chat = function(){};

/*查*/
chat.prototype.getAll = function(cb){
        const sql = 'SELECT * from chat';
        db.query(sql,function(err,result){
          if(err){
                      cb(true)
                    return               
                  
          }
                    cb(false,result);             
                          
        });

};

module.exports = chat;

