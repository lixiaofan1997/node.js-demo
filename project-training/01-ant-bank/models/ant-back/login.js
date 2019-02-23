const db = require('../database.js');

var login = function(){};

/*查*/

login.prototype.getAll = function(cb){
    const sql = 'SELECT * from manager';
    var items = [];
    db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                                    
    }
    result.forEach((e) => {items.push(e.username,e.tel,e.password)});
    cb(false,result);              
  });
};



login.prototype.logIn = function(e,cb){
  const sql = 'SELECT * from manager WHERE tel=?';
  //var items = [];

  db.query(sql,[e.tel],function(err,result){
    if(err){
      cb(true);
      return;                
    }
    console.log('ahhhhh'+result);
    //result.forEach((e) => {items.push(e.username,e.tel,e.password);});
    cb(false,result);
  });
};

/*增*/
login.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO issues VALUES(?,?,?)';
  db.query(sql,[e.username,e.tel,e.password],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

module.exports = login;
