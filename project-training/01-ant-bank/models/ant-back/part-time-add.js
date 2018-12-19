const db = require('../database.js');

var partTime = function(){};

/*查*/
partTime.prototype.getAll = function(cb){
  const sql = 'SELECT * from partime_job';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.part_id,e.part_date,e.part_name,e.part_price,e.part_worktime,e.part_addr,e.part_content);});
    cb(false,result);
  });
};




module.exports = partTime;
