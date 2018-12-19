const db = require('../database.js');

var takedelivery = function(){};

takedelivery.prototype.addDelivery  = function(obj,cb){
  const sql = 'INSERT INTO delivery(username,take_name,take_place,take_content,take_time) VALUES(?,?,?,?,?)';
  db.query(sql,[obj.username,obj.take_name,obj.take_place,obj.take_content,obj.take_time],function(err,result){
    console.log(obj);
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });

};
module.exports = takedelivery;


