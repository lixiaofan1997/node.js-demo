const Twoissues = require('../../models/ant/twoissues.js');
var express = require('express');
var router = express.Router();

var twoissues = new Twoissues();

router.post('/yiwo',function(req,res){
   twoissues.addTwoissues(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
           res.status(500).send('DB error');                                                                                                                                       
    }else{
           res.status(200).send('Success');                                                                                          
    }                                      
  });
});
module.exports = router;

