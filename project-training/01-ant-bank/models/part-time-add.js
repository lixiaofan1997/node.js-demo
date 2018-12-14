const db = require('./database.js');

var user = function(){};

/*查*/
user.prototype.getAll = function(cb){
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

/*增*/
user.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO partime_job VALUES(?,?,?,?,?,?,?,?)';
  db.query(sql,[e.username,e.part_id,e.part_date,e.part_name,e.part_price,e.part_worktime,e.part_addr,e.part_content],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(part_id,cb){
  const sql = 'DELETE FROM partime_job WHERE part_id=?';
  db.query(sql,[part_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

user.prototype.delAll = function(cb){
  const sql = 'DELETE FROM partime_job';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};



module.exports = user;
