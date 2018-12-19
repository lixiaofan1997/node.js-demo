const User = require('../models/ant/user.js');

var user = new User();

/*
user.addItem({id:1,username:'Jane',studentId:12,school:'河大',telNum:1234567,password:12,avatar:'',issue:12,goods:11,part_time:12,identity:'学生'},function(err){
  if(err){
    console.error(err);
  }
});
*/

/*
user.addUser({username:'weijia',studentId:123456,school:'河大',telNum:1234567,password:'1234',identity:'学生'},function(err){
  if(err){
    console.log(err);
  }else{
    console.log('OK!');
  }
});
*/
  
user.getAll({telNum:'15633744859'},function(err,items){
  console.log(items);
});
