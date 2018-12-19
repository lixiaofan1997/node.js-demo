const Users = require('../../models/ant/beforeuser.js');
var express = require('express');
var router = express.Router();

var user = new Users();

router.post('/signup',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  user.getAll(req.body,(err,result)=>{
   // console.log(JSON.parse(JSON.stringify(req.body)));
    if(err){
      console.log(err);
      return;
    }
    res.json(JSON.parse(JSON.stringify(result)));
    //console.log(result);
  });
});

router.post('/signin',function(req,res){
  //res.header('Access-Control-Allow-Origin','*');
  user.addUser(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
      res.status(500).send('DB error');
    }else{
      res.status(200).send('Success');
    }    
  });
});

module.exports = router;
