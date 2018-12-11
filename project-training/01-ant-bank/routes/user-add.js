const Users = require('../models/user-add.js');
var express = require('express');
var router = express.Router();

var user = new Users();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  user.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('user-add',{items:result});
  }); 
});

router.post('/',function(req,res){
  user.addItem(req.body.item,function(err){
    if(err){
      res.status(500).send('DB error');
      return;
    }
  });
  user.getAll(function(err,items){
    if(err){
      res.status(500).send('DB error');
      return;
    }
    res.render('user-add',{items:items});
  });
});

router.delete('/',function(req,res){
  res.header('Access-Control-Allow-Origin', '*');
  if(req.body === '') {
    user.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });
      
  } else {
    user.delItem(req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('Delete OK');
      }
    });
  }
});


module.exports = router;
