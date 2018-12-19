const Twojob = require('../../models/ant/twojob.js');
var express = require('express');
var router = express.Router();

var twojob = new Twojob();

router.post('/jianzhi',function(req,res){
  twojob.addTwojob(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
         res.status(500).send('DB error');                                                                                 
    }else{
         res.status(200).send('Success');                                                                
    }                                            
  });
});
module.exports = router;


