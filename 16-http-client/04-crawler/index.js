#!/usr/bin/node

const http=require('http'),url=require('url');
const cheerio=require('cheerio'),
      log=console.log;
var addr='http://edu.51cto.com/courselist/index-zh5.html'
http.get(addr,(res)=>{
  var html='';
  res.on('data',(data)=>{
    html+=data;
  });
  res.on('end',()=>{
    var $=cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text(),
      cTime=$(this).find('p.fl').text(),
      cTarget=$(this).find('div.course_target').text(),
      cURL=$(this).find('a').attr('href');
      if(cTime==='')return ;
      
      log('课时名称：',cName);
      log('课时数量：',cTime);
      log('课程网址：',cURL.trim());
      log('教学目标：',cTarget.trim());
      log('');


    });

  });

});
