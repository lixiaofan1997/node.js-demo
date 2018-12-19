const Parttime = require('../../models/ant-back/part-time-add.js');
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
    res.render('part-time-add',{items:result});
  }); 
});



module.exports = router;
