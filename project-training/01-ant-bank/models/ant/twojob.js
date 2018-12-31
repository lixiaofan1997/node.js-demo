const db = require('../database.js');

var twojob = function(){};
twojob.prototype.addTwojob  = function(obj,cb){
      const sql = 'INSERT INTO partime_job(username,part_date,part_name,part_price,part_worktime,part_addr,part_content) VALUES(?,?,?,?,?,?,?)';
      db.query(sql,[obj.username,obj.part_date,obj.part_name,obj.part_price,obj.part_worktime,obj.part_addr,obj.part_content],function(err,result){
             //console.log(obj);
             if(err){
                 cb(true);
                 return;                                                                                                 
     }                                      
      cb(false,result);                                         
     });
};
module.exports = twojob;
