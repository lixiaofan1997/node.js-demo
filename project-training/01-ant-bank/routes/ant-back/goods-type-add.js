const GoodsTypes = require('../../models/ant-back/goods-type-add.js');
var express = require('express');
var router = express.Router();

var goodstype = new GoodsTypes();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  goodstype.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('goods-type-add',{items:result});
  }); 
});


module.exports = router;
