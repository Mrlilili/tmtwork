var avalon = require('../lib/avalon');
var tpl = require('bundle?lazy!../template/modal.tpl');
require('../../css/style.scss')

setTimeout(function () {
    var x = tpl(function(){

    })
    console.log(x);
}, 2000)
//tpl(function(tpl){
//    avalon.component('ms-modal', {
//        template: tpl,
//        defaults: {
//            title: 'modal',
//            isShow: false,
//            cbProxy: function (state) {
//                var type = state?'onCancel':'onOk';
//                if(this.hasOwnProperty(type)){
//                    var ret = this[type];
//                    console.log(ret);
//                }
//                this.isShow = state;
//
//            }
//        }
//        ,
//        soleSlot: 'content'
//
//    })
//})

