const Expresses = require('../../models/ant-back/express-add.js');
var express = require('express');
var router = express.Router();

var exp = new Expresses();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  exp.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('express-add',{items:result});
  }); 
});


module.exports = router;
