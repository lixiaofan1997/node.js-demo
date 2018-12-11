const Users = require('../models/user.js');

var user = new Users();

user.getAll(function(err,items){
  console.log(items);
});
/*
user.addItem(2,'weijia',function(err){
  if(err){
    console.error(err);
  }
});
*/

/*
user.delItem('魏佳',function(err){
  if(err){
    console.error(err);
  }
});
*/

/*
user.update(1,'weijia',function(err){
  if(err){
    console.log(err);
  }
});
*/

