const Users = require('../models/article.js');
var express = require('express');
var router = express.Router();

var user = new Users();

/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  user.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('aticle',{items:result});
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
    res.render('aticle',{items:items});
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

router.put('/',function(req,res){
  if(typeof req.query.id === 'undefined'){
    res.status(404).send('Not found!');
  }else{
    user.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
