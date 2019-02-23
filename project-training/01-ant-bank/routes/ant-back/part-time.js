const Parttime = require('../../models/ant-back/part-time.js');
var express = require('express');
var router = express.Router();

var partTime = new Parttime();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  partTime.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('part-time',{items:result});
  }); 
});

router.post('/',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  //console.log(req.body);
  if(req.body !== '') {
    partTime.addItem(JSON.parse(req.body.item), (err) => {
      //console.log(req.body.item);
      if(err) {
        res.status(500).send('DB error!');
      }else {
        res.status(200).send('OK!');
      }       
    });
  }
});

router.delete('/',function(req,res){
  res.header('Access-Control-Allow-Origin', '*');
  if(req.body === '') {
    partTime.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });
      
  } else {
    partTime.delItem(req.body.item,function(err){
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
    partTime.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
