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

router.post('/',function(req,res){
  user.update(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
      res.status(500).send('DB error');
    }else{
      res.status(200).send('Success');
    }
  });
});

module.exports = router;
