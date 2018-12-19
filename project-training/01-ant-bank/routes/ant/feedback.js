const Feedback = require('../../models/ant/feedback.js');
var express = require('express');
var router = express.Router();

var feed = new Feedback();

router.post('/',function(req,res){
  feed.addItem(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
      res.status(500).send('DB error');
    }else{
      res.status(200).send('Success');
    }
  });
});

module.exports = router;
