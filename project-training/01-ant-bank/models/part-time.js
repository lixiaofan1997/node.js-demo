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
    result.forEach((e) => {items.push(username,part_id,part_date,part_name,e.part_price,e.part_worktime,e.part_addr,e.part_content);});
    cb(false,result);
  });
};

/*增*/
user.prototype.addItem = function(id,username,cb){
  const sql = 'INSERT INTO partime_job(id,username) VALUES(?,?)';
  db.query(sql,[id,username],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(username,cb){
  const sql = 'DELETE FROM partime_job WHERE username=?';
  db.query(sql,[username],function(err,result){
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

/*改*/
user.prototype.update = function(id,username,cb){
  const sql = 'UPDATE partime_job SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = user;
