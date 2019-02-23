const Message = require('../../models/ant-back/message-add.js');
var express = require('express');
var router = express.Router();

var message = new Message();

/* GET home page. */
router.get('/',function(req, res/*, next*/) {
  message.getAll((err,result)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('message-add',{items:result});
  }); 
});


module.exports = router;
