const Delivery = require('../../models/ant/twodelivery.js');
var express = require('express');
var router = express.Router();

var takedelivery = new Delivery();

/*
router.post('/daiqu',function(res,req){
    res.header('Access-Control-Allow-Origin','*');
   takedelivery.getAll(req.body,(err,result)=>{
      if(err){
              console.log(err);
                    return;
                        
      }
          res.json(JSON.parse(JSON.stringify(result)));
            
    });

});
*/

router.post('/daiqu',function(req,res){
 takedelivery.addDelivery(JSON.parse(JSON.stringify(req.body)),(err)=>{
    if(err){
      res.status(500).send('DB error');                
    }else{
      res.status(200).send('Success');                   
    }    
      
  });

});

module.exports = router;
