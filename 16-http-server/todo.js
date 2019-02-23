var items;
get(show);
function get(cb){
  document.getElementById('output').innerHTML="";
  fetch('http:192.168.179.144:8080').then(function(res){
    res.text().then(function(data){
      items=JSON.parse(data);
      cb;
    });
  });
}
function show(){
  var str='<ul>\n';
  for(var i=0;i<items.length;i++){
    str+='<li>'+items[i]+'</li>\n';
  }
  str+='</ul>';
  document.getElementById.innerHTML=str;
}
function add(){}
