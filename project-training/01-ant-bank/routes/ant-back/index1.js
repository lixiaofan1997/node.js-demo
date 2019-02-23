const Users = require('../../models/ant-back/user.js');
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
    res.render('index1',{items:result});
  }); 
});

module.exports = router;
