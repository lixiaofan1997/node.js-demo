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
    result.forEach((e) => {items.push(e.part_id,e.username,e.part_date,e.part_name,e.part_price,e.part_worktime,e.part_addr,e.part_content,e.part_head);});
    cb(false,result);
  });
};

/*增*/
partTime.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO partime_job VALUES(?,?,?,?,?,?,?,?,?)';
  db.query(sql,[e.part_id,e.username,e.part_date,e.part_name,e.part_price,e.part_worktime,e.part_addr,e.part_content,e.part_head],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
partTime.prototype.delItem = function(part_id,cb){
  const sql = 'DELETE FROM partime_job WHERE part_id=?';
  db.query(sql,[part_id],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

partTime.prototype.delAll = function(cb){
  const sql = 'DELETE FROM partime_job';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
partTime.prototype.update = function(id,username,cb){
  const sql = 'UPDATE partime_job SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = partTime;
