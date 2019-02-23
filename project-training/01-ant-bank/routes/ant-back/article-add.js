const Articles = require('../../models/ant-back/article-add.js');
var express = require('express');
var router = express.Router();

var article = new Articles();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  article.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('article-add',{items:result});
  }); 
});


module.exports = router;
