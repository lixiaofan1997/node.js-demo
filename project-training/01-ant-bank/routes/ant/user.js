const Users = require('../../models/ant/user.js');
var express = require('express');
var router = express.Router();

var user = new Users();

router.get('/',function(req,res){
  res.header('Access-Control-Allow-Origin', '*');
  user.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.json(JSON.parse(JSON.stringify(result)));
  });
});

module.exports = router;
