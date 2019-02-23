const db = require('../database.js');

var zhuce = function(){};

/*查*/
zhuce.prototype.getAll = function(cb){
  const sql = 'SELECT * from manager';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.username,e.tel,e.password);});
    cb(false,result);
  });
};

/*增*/
zhuce.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO manager VALUES(?,?,?)';
  //console.log("e",e);
  db.query(sql,[e.username,e.tel,e.password],function(err,result){
    if(err){
      cb(true);
      console.log('error 123')
      return;
    }
    cb(false,result);
  });
};

/*删*/
zhuce.prototype.delItem = function(tel,cb){
  const sql = 'DELETE FROM manager WHERE tel=?';
  db.query(sql,[tel],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

zhuce.prototype.delAll = function(cb){
  const sql = 'DELETE FROM manager';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
zhuce.prototype.update = function(id,username,cb){
  const sql = 'UPDATE manager SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

module.exports = zhuce;
