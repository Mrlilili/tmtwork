webpackJsonp([1],{

/***/ 4:
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-mask\"  ms-visible=\"@isShow\" ms-effect=\"{is:'modal'}\">\r\n    <div class=\"modal-box\">\r\n        <div class=\"modal-header\">\r\n            <h3>{{@title}}</h3>\r\n            <i class=\"icon-collapse-alt icon-large modal-close\" ms-click=\"@cbProxy(false)\"></i>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <slot name=\"content\"></slot>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"btn\" ms-click=\"@cbProxy(false)\">取 消</button>\r\n            <button class=\"btn btn-primary\" ms-click=\"@cbProxy(true)\">确 定</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }

});