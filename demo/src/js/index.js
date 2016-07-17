var f1 = require('bundle?lazy!./lib/t1.js');
var f3 = require('bundle?lazy!./lib/jquery.js');
f1(function(t){
    console.log(t);
})
//f3(function () {
//    console.log($.fn.jquery);
//})
