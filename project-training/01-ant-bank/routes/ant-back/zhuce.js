const Zhuces = require('../../models/ant-back/zhuce.js');
var express = require('express');
var router = express.Router();

var zhuce = new Zhuces();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  zhuce.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('zhuce',{items:result});
  }); 
});

router.post('/',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
  console.log(req.body.item);
  console.log(typeof req.body.item);
  console.log(req.body);
  
//  var obj=JSON.parse(req.body.item);
  if (typeof req.body.item !== 'undefined') {
         obj = JSON.parse(req.body.item);        
	console.log(obj);       
         zhuce.addItem(obj,(err)=>{
           if(err){
             res.status(500);
             res.send('DB error new');
           }else{
            res.status(200);
            res.send('ok');
           }
         })
  } else {
         console.log('输出undefined'); 
  }
  
 // console.log(obj)
//  console.log(typeof obj)
 // var obj={username:"hhh",tel:'1',password:'1'};
  //if(req.body !== '') {
    //zhuce.addItem(obj, (err) => {
     // if(err) {
       // console.log('err111')
       // res.status(500)
       // res.send('DB error!');
     // }else {
       // res.status(200)
        //res.send('OK!');
      //}       
    //});
  //}
});

router.delete('/',function(req,res){
  res.header('Access-Control-Allow-Origin', '*');
  if(req.body === '') {
    zhuce.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });
      
  } else {
    zhuce.delItem(req.body.item,function(err){
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
    zhuce.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
