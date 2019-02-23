const Lost = require('../../models/ant-back/lost-add.js');
var express = require('express');
var router = express.Router();

var lost = new Lost();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  lost.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('lost-add',{items:result});
  }); 
});

module.exports = router;
