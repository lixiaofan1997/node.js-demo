const Job = require('../../models/ant/partime_job.js');
var express = require('express');
var router = express.Router();

var job = new Job();

router.get('/',function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    job.getAll((err,result)=>{
      if(err){
       console.error(err);
       return;                
      }
      res.json(JSON.parse(JSON.stringify(result)));     
    });
});


router.post('/',function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    job.delItem(JSON.parse(JSON.stringify(req.body)),(err)=>{
      if(err){
        res.status(500).send('DB error');                      
      }else{
        res.status(200).send('Delete OK');                      
      }          
    });
});

module.exports = router;
