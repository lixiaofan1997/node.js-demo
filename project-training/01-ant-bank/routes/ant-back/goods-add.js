const Goods = require('../../models/ant-back/goods-add.js');
var express = require('express');
var router = express.Router();

var good = new Goods();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  good.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('goods-add',{items:result});
  }); 
});


module.exports = router;
