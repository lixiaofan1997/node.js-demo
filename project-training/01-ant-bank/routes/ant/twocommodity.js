const Twocommodity = require('../../models/ant/twocommodity.js');
var express = require('express');
var router = express.Router();

var twocommodity = new Twocommodity();

router.post('/wupin',function(req,res){
  twocommodity.addTwocommodity(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
        res.status(500).send('DB error');                                                                     
    }else{
         res.status(200).send('Success');                                                                           
    }                                
  });
});
module.exports = router;

