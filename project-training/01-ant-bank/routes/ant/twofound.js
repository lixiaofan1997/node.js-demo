const Found = require('../../models/ant/twofound.js');
var express = require('express');
var router = express.Router();

var found = new Found();

router.post('/shiwu',function(req,res){
  found.addFound(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
            res.status(500).send('DB error');                
                
    }else{
            res.status(200).send('Success');                   
                
    }    
          
      
  });


});

module.exports = router;
