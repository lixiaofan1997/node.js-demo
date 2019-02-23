#!/usr/bin/node

/*var pi=require('./02-export-var.js');

console.log('\nPI',pi);*/

var circle=require('./02-export-function.js');
console.log('\narea:\t\t',circle(20).area());
console.log('circumference:\t',circle(20).circumference());

var circle=require('./02-export-object');


