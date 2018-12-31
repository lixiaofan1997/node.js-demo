const db = require('../database.js');

var twoissues = function(){};
twoissues.prototype.addTwoissues  = function(obj,cb){
        const sql = 'INSERT INTO issues(username,issue_time,issue_content) VALUES(?,?,?)';
        db.query(sql,[obj.username,obj.issue_time,obj.issue_content],function(err,result){
             //console.log(obj);
             if(err){
             cb(true);
             return;                                                                                                          
            }
             cb(false,result);
     });
};

module.exports = twoissues;

