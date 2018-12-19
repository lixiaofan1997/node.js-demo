const Ideas = require('../../models/ant-back/idea-add.js');
var express = require('express');
var router = express.Router();

var idea = new Ideas();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  idea.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('idea-add',{items:result});
  }); 
});



module.exports = router;
