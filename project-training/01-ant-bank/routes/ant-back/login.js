const Logins = require('../../models/ant-back/login.js');
var express = require('express');
var router = express.Router();

var login = new Logins();

/* GET home page. */

router.get('/',function(req, res/*, next*/) {
  login.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;                
    }
    res.render('login',{items:result});      
  }); 
});


router.post('/',function(req,res){
  res.header('Access-Control-Allow-Origin','*');
 // console.log(req.body.item);
  //console.log(req.body);
  if(req.body !== '') {
    login.logIn(JSON.parse(req.body.item), (err,result) => {
      if(err){
        console.log(err);
        return;
      }
      res.send(JSON.parse(JSON.stringify(result)));
      console.log(result);
     
    });
  }
});


module.exports = router;
