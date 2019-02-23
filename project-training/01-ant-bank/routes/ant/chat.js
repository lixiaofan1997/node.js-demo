const Chat = require('../../models/ant/chat.js');
var express = require('express');
var router = express.Router();

var chat = new Chat();

router.get('/',function(req,res){
      res.header('Access-Control-Allow-Origin', '*');
      chat.getAll((err,result)=>{
        if(err){
                        console.error(err);
                                            return;
                                                                    
                                                  
        }
                  res.json(JSON.parse(JSON.stringify(result)));
                              
                      
      });


});

module.exports = router;

