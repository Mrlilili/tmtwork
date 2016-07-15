/**
 * Created by admin-b on 2016/6/27.
 * fas
 */
//require.ensure(['./lib/t1','./lib/t2','./lib/jquery'], function (require) {
//    var content = require('./lib/t1');
//    document.open();
//    document.write('<h1>' + content + '</h1>');
//    document.close();
//
//    var content2 = require('./lib/t2');
//    document.open();
//    document.write('<h1>' + content2 + '</h1>');
//    document.close();
//    require('./lib/jquery');
//    //require('./lib/t1');
//    //require('./lib/t2');
//    console.log($.fn.jquery);
//})


//var font = require("bundle?lazy!./lib/t1.js");
//setTimeout(function () {
//    font(function (t) {
//        document.body.innerHTML = t;
//    })
//}, 5000)


var f1 = require('bundle?lazy!./lib/t1.js');

var f3 = require('bundle?lazy!./lib/jquery.js');
f3(function () {
    $('body').html($.fn.jquery);
})
//require('./lib/jquery.js')
//$('body').html($.fn.jquery);
////require('../css/style-b.scss');
//var t= require('./lib/t1.js');
//console.log(t);
//console.log('123465');
