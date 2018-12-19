const db = require('../database.js');

var found = function(){};
found.prototype.addFound  = function(obj,cb){
    const sql = 'INSERT INTO found(username,item_time,item_name,item_type,item_addr,item_date,item_content,item_number) VALUES(?,?,?,?,?,?,?,?)';
    db.query(sql,[obj.username,obj.item_time,obj.item_name,obj.item_type,obj.item_addr,obj.item_date,obj.item_content,obj.item_number],function(err,result){
          console.log(obj);
          if(err){
                  cb(true);
                        return;
                            
          }
              cb(false,result);
                
    });

};

module.exports = found;
