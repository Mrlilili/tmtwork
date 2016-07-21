/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by admin-b on 2016/7/21.
	 * fas
	 */
	var avalon = __webpack_require__(1);
	__webpack_require__(2);

	avalon.define({
	    $id:'test',

	})

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * built in 2016-7-7:1 version 2.10 by 司徒正美
	 * 重构ms-controller, ms-important指令
	 * 虚拟DOM移除template属性
	 * 修正ms-for的排序问题
	 * fix 在chrome与firefox下删掉select中的空白节点，会影响到selectedIndex BUG  
	 * ms-widget, ms-controller, ms-important生成的VM与对应的DOM都保存起来,
	 * 并在avalon.vdomAdaptor中还原
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["avalon"] = factory();
		else
			root["avalon"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		
		var avalon = __webpack_require__(1) //这个版本兼容IE6

		__webpack_require__(8)
		__webpack_require__(15)
		__webpack_require__(19)
		__webpack_require__(35)
		__webpack_require__(71)
		avalon.onComponentDispose = __webpack_require__(75)
		__webpack_require__(76)

		module.exports = avalon




	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		
		__webpack_require__(2)
		var avalon = __webpack_require__(3)
		var browser = __webpack_require__(4)

		avalon.shadowCopy(avalon, browser)

		__webpack_require__(5)
		__webpack_require__(6)
		__webpack_require__(7)

		module.exports = avalon

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		
		/**
		 * 此模块不依赖任何模块,用于修复语言的底层缺陷
		 */

		var ohasOwn = Object.prototype.hasOwnProperty

		if (!'司徒正美'.trim) {
		    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		    String.prototype.trim = function () {
		        return this.replace(rtrim, '')
		    }
		}
		var hasDontEnumBug = !({
		    'toString': null
		}).propertyIsEnumerable('toString'),
		        hasProtoEnumBug = (function () {
		        }).propertyIsEnumerable('prototype'),
		        dontEnums = [
		            'toString',
		            'toLocaleString',
		            'valueOf',
		            'hasOwnProperty',
		            'isPrototypeOf',
		            'propertyIsEnumerable',
		            'constructor'
		        ],
		        dontEnumsLength = dontEnums.length;
		if (!Object.keys) {
		    Object.keys = function (object) { //ecma262v5 15.2.3.14
		        var theKeys = []
		        var skipProto = hasProtoEnumBug && typeof object === 'function'
		        if (typeof object === 'string' || (object && object.callee)) {
		            for (var i = 0; i < object.length; ++i) {
		                theKeys.push(String(i))
		            }
		        } else {
		            for (var name in object) {
		                if (!(skipProto && name === 'prototype') &&
		                        ohasOwn.call(object, name)) {
		                    theKeys.push(String(name))
		                }
		            }
		        }

		        if (hasDontEnumBug) {
		            var ctor = object.constructor,
		                    skipConstructor = ctor && ctor.prototype === object
		            for (var j = 0; j < dontEnumsLength; j++) {
		                var dontEnum = dontEnums[j]
		                if (!(skipConstructor && dontEnum === 'constructor') && ohasOwn.call(object, dontEnum)) {
		                    theKeys.push(dontEnum)
		                }
		            }
		        }
		        return theKeys
		    }
		}
		if (!Array.isArray) {
		    Array.isArray = function (a) {
		        return Object.prototype.toString.call(a) === '[object Array]'
		    }
		}

		if (!Array.isArray.bind) {
		    Function.prototype.bind = function (scope) {
		        if (arguments.length < 2 && scope === void 0)
		            return this
		        var fn = this,
		                argv = arguments
		        return function () {
		            var args = [],
		                    i
		            for (i = 1; i < argv.length; i++)
		                args.push(argv[i])
		            for (i = 0; i < arguments.length; i++)
		                args.push(arguments[i])
		            return fn.apply(scope, args)
		        }
		    }
		}
		//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
		/**
		* Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		* on host objects like NamedNodeMap, NodeList, and HTMLCollection
		* (technically, since host objects have been implementation-dependent,
		* at least before ES6, IE hasn't needed to work this way).
		* Also works on strings, fixes IE < 9 to allow an explicit undefined
		* for the 2nd argument (as in Firefox), and prevents errors when
		* called on other DOM objects.
		*/

		var _slice = Array.prototype.slice
		try {
		    // Can't be used with DOM elements in IE < 9
		    _slice.call(document.documentElement)
		} catch (e) { // Fails in IE < 9
		    // This will work for genuine arrays, array-like objects,
		    // NamedNodeMap (attributes, entities, notations),
		    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
		    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
		    Array.prototype.slice = function (begin, end) {
		        // IE < 9 gets unhappy with an undefined end argument
		        end = (typeof end !== 'undefined') ? end : this.length

		        // For native Array objects, we use the native slice function
		        if (Array.isArray(this) ) {
		            return _slice.call(this, begin, end)
		        }

		        // For array like object we handle it ourselves.
		        var i, cloned = [],
		                size, len = this.length

		        // Handle negative value for "begin"
		        var start = begin || 0
		        start = (start >= 0) ? start : len + start

		        // Handle negative value for "end"
		        var upTo = (end) ? end : len
		        if (end < 0) {
		            upTo = len + end
		        }

		        // Actual expected size of the slice
		        size = upTo - start

		        if (size > 0) {
		            cloned = new Array(size)
		            if (this.charAt) {
		                for (i = 0; i < size; i++) {
		                    cloned[i] = this.charAt(start + i)
		                }
		            } else {
		                for (i = 0; i < size; i++) {
		                    cloned[i] = this[start + i]
		                }
		            }
		        }

		        return cloned
		    }
		}

		function iterator(vars, body, ret) {
		    var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' +
		            body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') +
		            '}' + ret
		    /* jshint ignore:start */
		    return Function('fn,scope', fun)
		    /* jshint ignore:end */
		}

		var ap = Array.prototype
		if (!/\[native code\]/.test(ap.map)) {
		    var shim = {
		        //定位操作，返回数组中第一个等于给定参数的元素的索引值。
		        indexOf: function (item, index) {
		            var n = this.length,
		                    i = ~~index
		            if (i < 0)
		                i += n
		            for (; i < n; i++)
		                if (this[i] === item)
		                    return i
		            return -1
		        },
		        //定位操作，同上，不过是从后遍历。
		        lastIndexOf: function (item, index) {
		            var n = this.length,
		                    i = index == null ? n - 1 : index
		            if (i < 0)
		                i = Math.max(0, n + i)
		            for (; i >= 0; i--)
		                if (this[i] === item)
		                    return i
		            return -1
		        },
		        //迭代操作，将数组的元素挨个儿传入一个函数中执行。Prototype.js的对应名字为each。
		        forEach: iterator('', '_', ''),
		        //迭代类 在数组中的每个项上运行一个函数，如果此函数的值为真，则此元素作为新数组的元素收集起来，并返回新数组
		        filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
		        //收集操作，将数组的元素挨个儿传入一个函数中执行，然后把它们的返回值组成一个新数组返回。Prototype.js的对应名字为collect。
		        map: iterator('r=[],', 'r[i]=_', 'return r'),
		        //只要数组中有一个元素满足条件（放进给定函数返回true），那么它就返回true。Prototype.js的对应名字为any。
		        some: iterator('', 'if(_)return true', 'return false'),
		        //只有数组中的元素都满足条件（放进给定函数返回true），它才返回true。Prototype.js的对应名字为all。
		        every: iterator('', 'if(!_)return false', 'return true')
		    }

		    for (var i in shim) {
		        ap[i] = shim[i]
		    }
		}
		module.exports = {}

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {//avalon的核心,这里都是一些不存在异议的*核心*方法与属性
		function avalon(el) {
		    return new avalon.init(el)
		}

		global.avalon = avalon
		if(typeof window !== 'undefined'){
		    window.avalon = avalon
		}

		avalon.init = function (el) {
		    this[0] = this.element = el
		}

		avalon.fn = avalon.prototype = avalon.init.prototype


		avalon.shadowCopy = function (destination, source) {
		    for (var property in source) {
		        destination[property] = source[property]
		    }
		    return destination
		}

		var rword = /[^, ]+/g

		var hasConsole = global.console

		avalon.shadowCopy(avalon, {
		    noop: function () {
		    },
		    //切割字符串为一个个小块，以空格或逗号分开它们，结合replace实现字符串的forEach
		    rword: rword,
		    inspect: ({}).toString,
		    ohasOwn: ({}).hasOwnProperty,
		    log: function () {
		        if (hasConsole && avalon.config.debug) {
		            // http://stackoverflow.com/questions/8785624/how-to-safely-wrap-console-log
		            Function.apply.call(console.log, console, arguments)
		        }
		    },
		    warn: function () {
		        if (hasConsole && avalon.config.debug) {
		            var method = console.warn || console.log
		            // http://qiang106.iteye.com/blog/1721425
		            Function.apply.call(method, console, arguments)
		        }
		    },
		    error: function (str, e) {
		        throw (e || Error)(str)
		    },
		    //将一个以空格或逗号隔开的字符串或数组,转换成一个键值都为1的对象
		    oneObject: function (array, val) {
		        if (typeof array === 'string') {
		            array = array.match(rword) || []
		        }
		        var result = {},
		                value = val !== void 0 ? val : 1
		        for (var i = 0, n = array.length; i < n; i++) {
		            result[array[i]] = value
		        }
		        return result
		    }

		})

		module.exports = avalon
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {var window = global
		var browser = {
		    window: window,
		    document: {//方便在nodejs环境不会报错
		        createElement: function () {
		            return {}
		        },
		        createElementNS: function(){
		            return {}
		        },
		        contains: Boolean
		    },
		    root: {
		        outerHTML: 'x'
		    },
		    msie: NaN,
		    modern: true,
		    avalonDiv: {},
		    avalonFragment: null
		}

		if(window.location && window.navigator && window.window){
		    var document = window.document
		    browser.document = document
		    browser.modern = window.dispatchEvent
		    browser.root = document.documentElement
		    browser.avalonDiv = document.createElement('div')
		    browser.avalonFragment = document.createDocumentFragment()
		    if (window.VBArray) {
		        browser.msie = document.documentMode || (window.XMLHttpRequest ? 7 : 6)
		    }
		}


		module.exports = browser
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		//这里放置存在异议的方法

		var serialize = avalon.inspect
		var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/
		var rnative = /\[native code\]/ //判定是否原生函数
		var rarraylike = /(Array|List|Collection|Map|Arguments)\]$/
		var ohasOwn = avalon.ohasOwn
		// avalon.quote
		//https://github.com/bestiejs/json3/blob/master/lib/json3.js
		var Escapes = {
		    92: "\\\\",
		    34: '\\"',
		    8: "\\b",
		    12: "\\f",
		    10: "\\n",
		    13: "\\r",
		    9: "\\t"
		}

		// Internal: Converts `value` into a zero-padded string such that its
		// length is at least equal to `width`. The `width` must be <= 6.
		var leadingZeroes = "000000"
		var toPaddedString = function (width, value) {
		    // The `|| 0` expression is necessary to work around a bug in
		    // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
		    return (leadingZeroes + (value || 0)).slice(-width)
		};
		var unicodePrefix = "\\u00"
		var escapeChar = function (character) {
		    var charCode = character.charCodeAt(0), escaped = Escapes[charCode]
		    if (escaped) {
		        return escaped
		    }
		    return unicodePrefix + toPaddedString(2, charCode.toString(16))
		};
		var reEscape = /[\x00-\x1f\x22\x5c]/g
		function quote(value) {
		    reEscape.lastIndex = 0
		    return '"' + ( reEscape.test(value)? String(value).replace(reEscape, escapeChar) : value ) + '"'
		}

		avalon.quote = typeof JSON !== 'undefined' ? JSON.stringify : quote

		// avalon.type
		var class2type = {}
		'Boolean Number String Function Array Date RegExp Object Error'.replace(avalon.rword, function (name) {
		    class2type['[object ' + name + ']'] = name.toLowerCase()
		})

		avalon.type = function (obj) { //取得目标的类型
		    if (obj == null) {
		        return String(obj)
		    }
		    // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
		    return typeof obj === 'object' || typeof obj === 'function' ?
		            class2type[serialize.call(obj)] || 'object' :
		            typeof obj
		}

		var rfunction = /^\s*\bfunction\b/

		avalon.isFunction = typeof alert === 'object' ? function (fn) {
		    try {
		        return rfunction.test(fn + '')
		    } catch (e) {
		        return false
		    }
		} : function (fn) {
		    return serialize.call(fn) === '[object Function]'
		}

		avalon.isWindow = function (obj) {
		    if (!obj)
		        return false
		    // 利用IE678 window == document为true,document == window竟然为false的神奇特性
		    // 标准浏览器及IE9，IE10等使用 正则检测
		    return obj == obj.document && obj.document != obj //jshint ignore:line
		}


		function isWindow(obj) {
		    return rwindow.test(serialize.call(obj))
		}

		if (isWindow(avalon.window)) {
		    avalon.isWindow = isWindow
		}

		var enu, enumerateBUG
		for (enu in avalon({})) {
		    break
		}
		enumerateBUG = enu !== '0' //IE6下为true, 其他为false

		/*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
		avalon.isPlainObject = function (obj, key) {
		    if (!obj || avalon.type(obj) !== 'object' || obj.nodeType || avalon.isWindow(obj)) {
		        return false
		    }
		    try { //IE内置对象没有constructor
		        if (obj.constructor &&
		                !ohasOwn.call(obj, 'constructor') &&
		                !ohasOwn.call(obj.constructor.prototype || {}, 'isPrototypeOf')) {
		            return false
		        }
		    } catch (e) { //IE8 9会在这里抛错
		        return false
		    }
		    if (enumerateBUG) {
		        for (key in obj) {
		            return ohasOwn.call(obj, key)
		        }
		    }
		    for (key in obj) {
		    }
		    return key === void 0 || ohasOwn.call(obj, key)
		}


		if (rnative.test(Object.getPrototypeOf)) {
		    avalon.isPlainObject = function (obj) {
		        // 简单的 typeof obj === 'object'检测，会致使用isPlainObject(window)在opera下通不过
		        return serialize.call(obj) === '[object Object]' &&
		                Object.getPrototypeOf(obj) === Object.prototype
		    }
		}

		//与jQuery.extend方法，可用于浅拷贝，深拷贝
		avalon.mix = avalon.fn.mix = function () {
		    var options, name, src, copy, copyIsArray, clone,
		            target = arguments[0] || {},
		            i = 1,
		            length = arguments.length,
		            deep = false

		    // 如果第一个参数为布尔,判定是否深拷贝
		    if (typeof target === 'boolean') {
		        deep = target
		        target = arguments[1] || {}
		        i++
		    }

		    //确保接受方为一个复杂的数据类型
		    if (typeof target !== 'object' && !avalon.isFunction(target)) {
		        target = {}
		    }

		    //如果只有一个参数，那么新成员添加于mix所在的对象上
		    if (i === length) {
		        target = this
		        i--
		    }

		    for (; i < length; i++) {
		        //只处理非空参数
		        if ((options = arguments[i]) != null) {
		            for (name in options) {
		                try {
		                    src = target[name]
		                    copy = options[name] //当options为VBS对象时报错
		                } catch (e) {
		                    continue
		                }

		                // 防止环引用
		                if (target === copy) {
		                    continue
		                }
		                if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

		                    if (copyIsArray) {
		                        copyIsArray = false
		                        clone = src && Array.isArray(src) ? src : []

		                    } else {
		                        clone = src && avalon.isPlainObject(src) ? src : {}
		                    }

		                    target[name] = avalon.mix(deep, clone, copy)
		                } else if (copy !== void 0) {
		                    target[name] = copy
		                }
		            }
		        }
		    }
		    return target
		}

		/*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
		function isArrayLike(obj) {
		    if (!obj)
		        return false
		    var n = obj.length
		    if (n === (n >>> 0)) { //检测length属性是否为非负整数
		        var type = serialize.call(obj).slice(8, -1)
		        if (rarraylike.test(type))
		            return false
		        if (type === 'Array')
		            return true
		        try {
		            if ({}.propertyIsEnumerable.call(obj, 'length') === false) { //如果是原生对象
		                return rfunction.test(obj.item || obj.callee)
		            }
		            return true
		        } catch (e) { //IE的NodeList直接抛错
		            return !obj.window //IE6-8 window
		        }
		    }
		    return false
		}


		avalon.each = function (obj, fn) {
		    if (obj) { //排除null, undefined
		        var i = 0
		        if (isArrayLike(obj)) {
		            for (var n = obj.length; i < n; i++) {
		                if (fn(i, obj[i]) === false)
		                    break
		            }
		        } else {
		            for (i in obj) {
		                if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
		                    break
		                }
		            }
		        }
		    }
		}

		module.exports = {
		    avalon: avalon,
		    isArrayLike: isArrayLike
		}



	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		var cssHooks = {}
		var rhyphen = /([a-z\d])([A-Z]+)/g
		var rcamelize = /[-_][^-_]/g
		var rhashcode = /\d\.\d{4}/
		var rescape = /[-.*+?^${}()|[\]\/\\]/g

		var _slice = [].slice
		function defaultParse(cur, pre, binding) {
		       cur[binding.name] = avalon.parseExpr(binding)
		}
		avalon.shadowCopy(avalon, {
		    caches: {}, //avalon2.0 新增
		    vmodels: {},
		    filters: {},
		    components: {},//放置组件的类
		    directives: {},
		    eventHooks: {},
		    eventListeners: {},
		    validators: {},
		    scopes: {},
		    cssHooks: cssHooks,
		    parsers: {
		        number: function (a) {
		            return a === '' ? '' : /\d\.$/.test(a) ? a : parseFloat(a) || 0
		        },
		        string: function (a) {
		            return a === null || a === void 0 ? '' : a + ''
		        },
		        boolean: function (a) {
		            if(a === '')
		                return a
		            return a === 'true'|| a == '1'
		        }
		    },
		    version: "2.10",
		    slice: function (nodes, start, end) {
		        return _slice.call(nodes, start, end)
		    },
		    css: function (node, name, value, fn) {
		        //读写删除元素节点的样式
		        if (node instanceof avalon) {
		            node = node[0]
		        }
		        if(node.nodeType !==1){
		            return
		        }
		        var prop = avalon.camelize(name)
		        name = avalon.cssName(prop) || prop
		        if (value === void 0 || typeof value === 'boolean') { //获取样式
		            fn = cssHooks[prop + ':get'] || cssHooks['@:get']
		            if (name === 'background') {
		                name = 'backgroundColor'
		            }
		            var val = fn(node, name)
		            return value === true ? parseFloat(val) || 0 : val
		        } else if (value === '') { //请除样式
		            node.style[name] = ''
		        } else { //设置样式
		            if (value == null || value !== value) {
		                return
		            }
		            if (isFinite(value) && !avalon.cssNumber[prop]) {
		                value += 'px'
		            }
		            fn = cssHooks[prop + ':set'] || cssHooks['@:set']
		            fn(node, name, value)
		        }
		    },
		    directive: function (name, definition) {
		        definition.parse = definition.parse || defaultParse
		        return this.directives[name] = definition
		    },
		    isObject: function (a) {//1.6新增
		        return a !== null && typeof a === 'object'
		    },
		    /* avalon.range(10)
		     => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		     avalon.range(1, 11)
		     => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		     avalon.range(0, 30, 5)
		     => [0, 5, 10, 15, 20, 25]
		     avalon.range(0, -10, -1)
		     => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
		     avalon.range(0)
		     => []*/
		    range: function (start, end, step) { // 用于生成整数数组
		        step || (step = 1)
		        if (end == null) {
		            end = start || 0
		            start = 0
		        }
		        var index = -1,
		                length = Math.max(0, Math.ceil((end - start) / step)),
		                result = new Array(length)
		        while (++index < length) {
		            result[index] = start
		            start += step
		        }
		        return result
		    },
		    hyphen: function (target) {
		        //转换为连字符线风格
		        return target.replace(rhyphen, '$1-$2').toLowerCase()
		    },
		    camelize: function (target) {
		        //提前判断，提高getStyle等的效率
		        if (!target || target.indexOf('-') < 0 && target.indexOf('_') < 0) {
		            return target
		        }
		        //转换为驼峰风格
		        return target.replace(rcamelize, function (match) {
		            return match.charAt(1).toUpperCase()
		        })
		    },
		    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
		    makeHashCode: function (prefix) {
		        prefix = prefix || 'avalon'
		        return String(Math.random() + Math.random()).replace(rhashcode, prefix)
		    },
		    escapeRegExp: function (target) {
		        //http://stevenlevithan.com/regex/xregexp/
		        //将字符串安全格式化为正则表达式的源码
		        return (target + '').replace(rescape, '\\$&')
		    },
		    Array: {
		        merge: function (target, other) {
		            //合并两个数组 avalon2新增
		            target.push.apply(target, other)
		        },
		        ensure: function (target, item) {
		            //只有当前数组不存在此元素时只添加它
		            if (target.indexOf(item) === -1) {
		                return target.push(item)
		            }
		        },
		        removeAt: function (target, index) {
		            //移除数组中指定位置的元素，返回布尔表示成功与否
		            return !!target.splice(index, 1).length
		        },
		        remove: function (target, item) {
		            //移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
		            var index = target.indexOf(item)
		            if (~index)
		                return avalon.Array.removeAt(target, index)
		            return false
		        }
		    }
		})

		if(typeof performance !== 'undefined' && performance.now){
		    avalon.makeHashCode = function (prefix) {
		        prefix = prefix || 'avalon'
		        return (prefix + performance.now()).replace('.', '')
		    }
		}

		var UUID = 1
		module.exports = {
		    //生成事件回调的UUID(用户通过ms-on指令)
		    avalon: avalon,
		    getLongID: function (fn) {
		        return fn.uuid || (fn.uuid = avalon.makeHashCode('e'))
		    },
		    //生成事件回调的UUID(用户通过avalon.bind)
		    getShortID: function (fn) {
		        return fn.uuid || (fn.uuid = '_' + (++UUID))
		    }
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		
		function kernel(settings) {
		    for (var p in settings) {
		        if (!avalon.ohasOwn.call(settings, p))
		            continue
		        var val = settings[p]
		        if (typeof kernel.plugins[p] === 'function') {
		            kernel.plugins[p](val)
		        } else if (typeof kernel[p] === 'object') {
		            avalon.shadowCopy(kernel[p], val)
		        } else {
		            kernel[p] = val
		        }
		    }
		    return this
		}

		avalon.config = kernel

		var plugins = {
		    interpolate: function (array) {
		        var openTag = array[0]
		        var closeTag = array[1]
		        /*eslint-disable */
		        if (openTag === closeTag) {
		            throw new SyntaxError('openTag!==closeTag')
		        }
		        var test = openTag + 'test' + closeTag
		        var div = avalon.avalonDiv
		        div.innerHTML = test
		        if (div.innerHTML !== test && div.innerHTML.indexOf('&lt;') > -1) {
		            throw new SyntaxError('此定界符不合法')
		        }
		        div.innerHTML = ''
		        /*eslint-enable */
		        kernel.openTag = openTag
		        kernel.closeTag = closeTag
		        var o = avalon.escapeRegExp(openTag)
		        var c = avalon.escapeRegExp(closeTag)
		        kernel.rexpr = new RegExp(o + '([\\s\\S]*)' + c)
		        kernel.rexprg = new RegExp(o + '([\\s\\S]*)' + c, 'g')
		        kernel.rbind = new RegExp(o + '[\\s\\S]*' + c + '|\\bms-|\\bslot\\b')
		    }
		}
		kernel.plugins = plugins
		avalon.config({
		    interpolate: ['{{', '}}'],
		    debug: true
		})


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		
		var number = __webpack_require__(9)
		var escape = __webpack_require__(10)
		var sanitize = __webpack_require__(11)
		var date = __webpack_require__(12)
		var arrayFilters = __webpack_require__(13)
		var eventFilters = __webpack_require__(14)
		var filters = avalon.filters

		function K(a) {
		    return a
		}

		avalon.__format__ = function (name) {
		    var fn = filters[name]
		    if (fn) {
		        return fn.get ? fn.get : fn
		    }
		    return K
		}


		avalon.mix(filters, {
		    uppercase: function (str) {
		        return String(str).toUpperCase()
		    },
		    lowercase: function (str) {
		        return String(str).toLowerCase()
		    },
		    truncate: function (str, length, truncation) {
		        //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
		        length = length || 30
		        truncation = typeof truncation === "string" ? truncation : "..."
		        return str.length > length ?
		                str.slice(0, length - truncation.length) + truncation :
		                String(str)
		    },
		    camelize: avalon.camelize,
		    date: date,
		    escape: escape,
		    sanitize: sanitize,
		    number: number,
		    currency: function (amount, symbol, fractionSize) {
		        return (symbol || "\uFFE5") +
		                number(amount,
		                        isFinite(fractionSize) ? fractionSize : 2)
		    }
		}, arrayFilters, eventFilters)







		module.exports = avalon

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		function number(number, decimals, point, thousands) {
		    //form http://phpjs.org/functions/number_format/
		    //number 必需，要格式化的数字
		    //decimals 可选，规定多少个小数位。
		    //point 可选，规定用作小数点的字符串（默认为 . ）。
		    //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
		    number = (number + '')
		            .replace(/[^0-9+\-Ee.]/g, '')
		    var n = !isFinite(+number) ? 0 : +number,
		            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
		            sep = thousands || ",",
		            dec = point || ".",
		            s = '',
		            toFixedFix = function (n, prec) {
		                var k = Math.pow(10, prec)
		                return '' + (Math.round(n * k) / k)
		                        .toFixed(prec)
		            }
		    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
		    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
		            .split('.')
		    if (s[0].length > 3) {
		        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
		    }
		    if ((s[1] || '')
		            .length < prec) {
		        s[1] = s[1] || ''
		        s[1] += new Array(prec - s[1].length + 1)
		                .join('0')
		    }
		    return s.join(dec)
		}

		module.exports = number

		//处理 货币 http://openexchangerates.github.io/accounting.js/

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		
		var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
		var rnoalphanumeric = /([^\#-~| |!])/g

		function escape(str) {
		    //将字符串经过 str 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt 
		    return String(str).
		            replace(/&/g, '&amp;').
		            replace(rsurrogate, function (value) {
		                var hi = value.charCodeAt(0)
		                var low = value.charCodeAt(1)
		                return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';'
		            }).
		            replace(rnoalphanumeric, function (value) {
		                return '&#' + value.charCodeAt(0) + ';'
		            }).
		            replace(/</g, '&lt;').
		            replace(/>/g, '&gt;')
		}

		module.exports = escape

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim
		var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g
		var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig
		var rsanitize = {
		    a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
		    img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
		    form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
		}


		//https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
		//    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
		//    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
		//    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
		//    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
		//    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
		module.exports = function sanitize(str) {
		    return str.replace(rscripts, "").replace(ropen, function (a, b) {
		        var match = a.toLowerCase().match(/<(\w+)\s/)
		        if (match) { //处理a标签的href属性，img标签的src属性，form标签的action属性
		            var reg = rsanitize[match[1]]
		            if (reg) {
		                a = a.replace(reg, function (s, name, value) {
		                    var quote = value.charAt(0)
		                    return name + "=" + quote + "javascript:void(0)" + quote// jshint ignore:line
		                })
		            }
		        }
		        return a.replace(ron, " ").replace(/\s+/g, " ") //移除onXXX事件
		    })
		}


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/*
		 'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
		 'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
		 'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
		 'MMMM': Month in year (January-December)
		 'MMM': Month in year (Jan-Dec)
		 'MM': Month in year, padded (01-12)
		 'M': Month in year (1-12)
		 'dd': Day in month, padded (01-31)
		 'd': Day in month (1-31)
		 'EEEE': Day in Week,(Sunday-Saturday)
		 'EEE': Day in Week, (Sun-Sat)
		 'HH': Hour in day, padded (00-23)
		 'H': Hour in day (0-23)
		 'hh': Hour in am/pm, padded (01-12)
		 'h': Hour in am/pm, (1-12)
		 'mm': Minute in hour, padded (00-59)
		 'm': Minute in hour (0-59)
		 'ss': Second in minute, padded (00-59)
		 's': Second in minute (0-59)
		 'a': am/pm marker
		 'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
		 format string can also be one of the following predefined localizable formats:
		 
		 'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
		 'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
		 'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
		 'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
		 'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
		 'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
		 'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
		 'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
		 */

		function toInt(str) {
		    return parseInt(str, 10) || 0
		}

		function padNumber(num, digits, trim) {
		    var neg = ''
		    if (num < 0) {
		        neg = '-'
		        num = -num
		    }
		    num = '' + num
		    while (num.length < digits)
		        num = '0' + num
		    if (trim)
		        num = num.substr(num.length - digits)
		    return neg + num
		}

		function dateGetter(name, size, offset, trim) {
		    return function (date) {
		        var value = date["get" + name]()
		        if (offset > 0 || value > -offset)
		            value += offset
		        if (value === 0 && offset === -12) {
		            value = 12
		        }
		        return padNumber(value, size, trim)
		    }
		}

		function dateStrGetter(name, shortForm) {
		    return function (date, formats) {
		        var value = date["get" + name]()
		        var get = (shortForm ? ("SHORT" + name) : name).toUpperCase()
		        return formats[get][value]
		    }
		}

		function timeZoneGetter(date) {
		    var zone = -1 * date.getTimezoneOffset()
		    var paddedZone = (zone >= 0) ? "+" : ""
		    paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2)
		    return paddedZone
		}
		//取得上午下午

		function ampmGetter(date, formats) {
		    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1]
		}
		var DATE_FORMATS = {
		    yyyy: dateGetter("FullYear", 4),
		    yy: dateGetter("FullYear", 2, 0, true),
		    y: dateGetter("FullYear", 1),
		    MMMM: dateStrGetter("Month"),
		    MMM: dateStrGetter("Month", true),
		    MM: dateGetter("Month", 2, 1),
		    M: dateGetter("Month", 1, 1),
		    dd: dateGetter("Date", 2),
		    d: dateGetter("Date", 1),
		    HH: dateGetter("Hours", 2),
		    H: dateGetter("Hours", 1),
		    hh: dateGetter("Hours", 2, -12),
		    h: dateGetter("Hours", 1, -12),
		    mm: dateGetter("Minutes", 2),
		    m: dateGetter("Minutes", 1),
		    ss: dateGetter("Seconds", 2),
		    s: dateGetter("Seconds", 1),
		    sss: dateGetter("Milliseconds", 3),
		    EEEE: dateStrGetter("Day"),
		    EEE: dateStrGetter("Day", true),
		    a: ampmGetter,
		    Z: timeZoneGetter
		}
		var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
		var raspnetjson = /^\/Date\((\d+)\)\/$/
		function dateFilter(date, format) {
		    var locate = dateFilter.locate,
		            text = "",
		            parts = [],
		            fn, match
		    format = format || "mediumDate"
		    format = locate[format] || format
		    if (typeof date === "string") {
		        if (/^\d+$/.test(date)) {
		            date = toInt(date)
		        } else if (raspnetjson.test(date)) {
		            date = +RegExp.$1
		        } else {
		            var trimDate = date.trim()
		            var dateArray = [0, 0, 0, 0, 0, 0, 0]
		            var oDate = new Date(0)
		            //取得年月日
		            trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
		                var array = c.length === 4 ? [c, a, b] : [a, b, c]
		                dateArray[0] = toInt(array[0])     //年
		                dateArray[1] = toInt(array[1]) - 1 //月
		                dateArray[2] = toInt(array[2])     //日
		                return ""
		            })
		            var dateSetter = oDate.setFullYear
		            var timeSetter = oDate.setHours
		            trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
		                dateArray[3] = toInt(a) //小时
		                dateArray[4] = toInt(b) //分钟
		                dateArray[5] = toInt(c) //秒
		                if (d) {                //毫秒
		                    dateArray[6] = Math.round(parseFloat("0." + d) * 1000)
		                }
		                return ""
		            })
		            var tzHour = 0
		            var tzMin = 0
		            trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
		                dateSetter = oDate.setUTCFullYear
		                timeSetter = oDate.setUTCHours
		                if (symbol) {
		                    tzHour = toInt(symbol + c)
		                    tzMin = toInt(symbol + d)
		                }
		                return ''
		            })

		            dateArray[3] -= tzHour
		            dateArray[4] -= tzMin
		            dateSetter.apply(oDate, dateArray.slice(0, 3))
		            timeSetter.apply(oDate, dateArray.slice(3))
		            date = oDate
		        }
		    }
		    if (typeof date === 'number') {
		        date = new Date(date)
		    }
		    if (avalon.type(date) !== 'date') {
		        return
		    }
		    while (format) {
		        match = rdateFormat.exec(format)
		        if (match) {
		            parts = parts.concat(match.slice(1))
		            format = parts.pop()
		        } else {
		            parts.push(format)
		            format = null
		        }
		    }
		    parts.forEach(function (value) {
		        fn = DATE_FORMATS[value]
		        text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'")
		    })
		    return text
		}


		var locate = {
		    AMPMS: {
		        0: '上午',
		        1: '下午'
		    },
		    DAY: {
		        0: '星期日',
		        1: '星期一',
		        2: '星期二',
		        3: '星期三',
		        4: '星期四',
		        5: '星期五',
		        6: '星期六'
		    },
		    MONTH: {
		        0: '1月',
		        1: '2月',
		        2: '3月',
		        3: '4月',
		        4: '5月',
		        5: '6月',
		        6: '7月',
		        7: '8月',
		        8: '9月',
		        9: '10月',
		        10: '11月',
		        11: '12月'
		    },
		    SHORTDAY: {
		        '0': '周日',
		        '1': '周一',
		        '2': '周二',
		        '3': '周三',
		        '4': '周四',
		        '5': '周五',
		        '6': '周六'
		    },
		    fullDate: 'y年M月d日EEEE',
		    longDate: 'y年M月d日',
		    medium: 'yyyy-M-d H:mm:ss',
		    mediumDate: 'yyyy-M-d',
		    mediumTime: 'H:mm:ss',
		    'short': 'yy-M-d ah:mm',
		    shortDate: 'yy-M-d',
		    shortTime: 'ah:mm'
		}
		locate.SHORTMONTH = locate.MONTH
		dateFilter.locate = locate

		module.exports = dateFilter

	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		
		function orderBy(array, criteria, reverse) {
		    var type = avalon.type(array)
		    if (type !== 'array' && type !== 'object')
		        throw 'orderBy只能处理对象或数组'
		    var order = (reverse && reverse < 0) ? -1 : 1

		    if (typeof criteria === 'string') {
		        var key = criteria
		        criteria = function (a) {
		            return a && a[key]
		        }
		    }
		    array = convertArray(array)
		    array.forEach(function (el) {
		        el.order = criteria(el.value, el.key)
		    })
		    array.sort(function (left, right) {
		        var a = left.order
		        var b = right.order
		        if (Number.isNaN(a) && Number.isNaN(b)) {
		            return 0
		        }
		        return a === b ? 0 : a > b ? order : -order
		    })
		    var isArray = type === 'array'
		    var target = isArray ? [] : {}
		    return recovery(target, array, function (el) {
		        if (isArray) {
		            target.push(el.value)
		        } else {
		            target[el.key] = el.value
		        }
		    })
		}

		function filterBy(array, search) {
		    var type = avalon.type(array)
		    if (type !== 'array' && type !== 'object')
		        throw 'filterBy只能处理对象或数组'
		    var args = avalon.slice(arguments, 2)
		    var stype = avalon.type(search)
		    if (stype === 'function') {
		        var criteria = search
		    } else if (stype === 'string' || stype === 'number' ) {
		        if (search === '') {
		            return array
		        } else {
		            var reg = new RegExp(avalon.escapeRegExp(search), 'i')
		            criteria = function(el){
		                return reg.test(el)
		            }
		        }
		    } else {
		        return array
		    }

		    array = convertArray(array).filter(function (el, i) {
		        return !!criteria.apply(el, [el.value,i].concat(args) )
		    })
		    var isArray = type === 'array'
		    var target = isArray ? [] : {}
		    return recovery(target, array, function (el) {
		        if (isArray) {
		            target.push(el.value)
		        } else {
		            target[el.key] = el.value
		        }
		    })
		}

		function selectBy(data, array, defaults) {
		    if (avalon.isObject(data) && !Array.isArray(data)) {
		        var target = []
		        return recovery(target, array, function (name) {
		            target.push(data.hasOwnProperty(name) ? data[name] : defaults ? defaults[name] : '')
		        })
		    } else {
		        return data
		    }
		}

		Number.isNaN = Number.isNaN || function (a) {
		    return a !== a
		}

		function limitBy(input, limit, begin) {
		    var type = avalon.type(input)
		    if (type !== 'array' && type !== 'object')
		        throw 'limitBy只能处理对象或数组'
		    //尝试将limit转换数值
		    if (Math.abs(Number(limit)) === Infinity) {
		        limit = Number(limit)
		    } else {
		        limit = parseInt(limit, 10)
		    }
		    //转换不了返回
		    if (Number.isNaN(limit)) {
		        return input
		    }
		    //将目标转换为数组
		    if (type === 'object') {
		        input = convertArray(input)
		    }
		    limit = Math.min(input.length, limit)
		    begin = (!begin || Number.isNaN(begin)) ? 0 : ~~begin
		    if (begin < 0) {
		        begin = Math.max(0, input.length + begin)
		    }

		    var data = []
		    for (var i = begin; i < limit; i++) {
		        data.push(input[i])
		    }
		    var isArray = type === 'array'
		    if (isArray) {
		        return data
		    }
		    var target = {}
		    return recovery(target, data, function (el) {
		        target[el.key] = el.value
		    })
		}

		function recovery(ret, array, callback) {
		    for (var i = 0, n = array.length; i < n; i++) {
		        callback(array[i])
		    }
		    return ret
		}


		function convertArray(array) {
		    var ret = [], i = 0
		    avalon.each(array, function (key, value) {
		        ret[i++] = {
		            value: value,
		            key: key
		        }
		    })
		    return ret
		}

		module.exports = {
		    limitBy: limitBy,
		    orderBy: orderBy,
		    selectBy: selectBy,
		    filterBy: filterBy
		}

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		
		var eventFilters = {
		    stop: function (e) {
		        e.stopPropagation()
		        return e
		    },
		    prevent: function (e) {
		        e.preventDefault()
		        return e
		    }
		}
		var keyCode = {
		    esc: 27,
		    tab: 9,
		    enter: 13,
		    space: 32,
		    del: 46,
		    up: 38,
		    left: 37,
		    right: 39,
		    down: 40
		}

		avalon.each(keyCode, function (name, keyCode) {
		    eventFilters[name] = function (e) {
		        if (e.which !== keyCode) {
		            e.$return = true
		        }
		        return e
		    }
		})

		module.exports = eventFilters

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * 虚拟DOM的4大构造器
		 */
		var VText = __webpack_require__(16)
		var VComment = __webpack_require__(17)
		var VElement = __webpack_require__(18)

		avalon.vdomAdaptor = function (obj, method) {
		    if (!obj) {//obj在ms-for循环里面可能是null
		        return (method === "toHTML" ? '' :
		            avalon.avalonFragment.cloneNode(false))
		    }
		    switch (obj.nodeType) {
		        case 3:
		            return VText.prototype[method].call(obj)
		        case 8:
		            return VComment.prototype[method].call(obj)
		        case 1:
		            return VElement.prototype[method].call(obj)
		        default:
		            if (Array.isArray(obj)) {
		                if (method === "toHTML") {
		                    return obj.map(function (a) {
		                        return avalon.vdomAdaptor(a, 'toHTML')
		                    }).join('')
		                } else {
		                    var f = avalon.avalonFragment.cloneNode(false)
		                    obj.forEach(function (a) {
		                        f.appendChild(avalon.vdomAdaptor(a, 'toDOM'))
		                    })
		                    return f
		                }
		            }
		    }
		}

		module.exports = {
		    VText: VText,
		    VComment: VComment,
		    VElement: VElement
		}


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		var rexpr = avalon.config.rexpr

		function VText(text) {
		    if (typeof text === 'string') {
		        this.type = '#text'
		        this.nodeValue = text
		        this.skipContent = !rexpr.test(text)
		        this.nodeType = 3
		    } else {
		        for (var i in text) {
		            this[i] = text[i]
		        }
		    }
		}

		VText.prototype = {
		    constructor: VText,
		    toDOM: function () {
		       var a =  VText.decoder = VText.decoder || document.createElement('p')
		       a.innerHTML = this.nodeValue
		       return a.removeChild(a.firstChild) 
		    },
		    toHTML: function () {
		        return this.nodeValue
		    }
		}

		module.exports = VText

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		
		function VComment(text) {
		    if (typeof text === 'string') {
		        this.type = '#comment'
		        this.nodeValue = text
		        this.skipContent = true
		        this.nodeType = 8
		    } else {
		        for (var i in text) {
		            this[i] = text[i]
		        }
		    }
		}
		VComment.prototype = {
		    constructor: VComment,
		    toDOM: function () {
		        return document.createComment(this.nodeValue)
		    },
		    toHTML: function () {
		        return '<!--' + this.nodeValue + '-->'
		    }
		}

		module.exports = VComment

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		
		function VElement(type, props, children) {
		    if (typeof type === 'object') {
		        for (var i in type) {
		            this[i] = type[i]
		        }
		    } else {
		        this.nodeType = 1
		        this.type = type
		        this.props = props
		        this.children = children
		    }
		}
		function skipFalseAndFunction(a) {
		    return a !== false && (Object(a) !== a)
		}
		var specal = {
		    "class": function (dom, val) {
		        dom.className = val
		    },
		    style: function (dom, val) {
		        dom.style.cssText = val
		    },
		    'for': function (dom, val) {
		        dom.htmlFor = val
		    }
		}

		function createVML(type) {
		    if (document.styleSheets.length < 31) {
		        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
		    } else {
		        // no more room, add to the existing one
		        // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
		        document.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
		    }
		    var arr = type.split(':')
		    if (arr.length === 1) {
		        arr.unshift('v')
		    }
		    var tag = arr[1]
		    var ns = arr[0]
		    if (!document.namespaces[ns]) {
		        document.namespaces.add(ns, "urn:schemas-microsoft-com:vml")
		    }
		    return  document.createElement('<' + ns + ':' + tag + ' class="rvml">');
		}

		function createSVG(type) {
		    return document.createElementNS('http://www.w3.org/2000/svg', type)
		}
		var svgTags = avalon.oneObject('circle,defs,ellipse,image,line,' +
		        'path,polygon,polyline,rect,symbol,text,use,g,svg')
		var VMLTags = avalon.oneObject('shape,line,polyline,rect,roundrect,oval,arc,' +
		        'curve,background,image,shapetype,group,fill,' +
		        'stroke,shadow, extrusion, textbox, imagedata, textpath')

		var rvml = /^\w+\:\w+/

		VElement.prototype = {
		    constructor: VElement,
		    toDOM: function () {
		        var dom, tagName = this.type
		        if (avalon.modern && svgTags[tagName]) {
		            dom = createSVG(tagName)
		        } else if (!avalon.modern && (VMLTags[tagName] || rvml.test(tagName))) {
		            dom = createVML(tagName)
		        } else {
		            dom = document.createElement(tagName)
		        }
		        var wid = this.props['ms-important'] ||
		                this.props['ms-controller'] || this.wid
		        if (wid) {
		            var scope = avalon.scopes[wid]
		            var element = scope && scope.vmodel && scope.vmodel.$element
		            if (element) {
		                var oldVdom = element.vtree[0]
		                if(oldVdom.children){
		                    this.children = oldVdom.children
		                }
		                return element
		            }
		        }
		        for (var i in this.props) {
		            var val = this.props[i]
		            if (skipFalseAndFunction(val)) {
		                if (specal[i] && avalon.msie < 8) {
		                    specal[i](dom, val)
		                } else {
		                    dom.setAttribute(i, val + '')
		                }
		            }
		        }
		        var c = this.children || []
		        var template = c[0] ? c[0].nodeValue : ''
		        switch (this.type) {
		            case 'script':
		                dom.text = template
		                break
		            case 'style':
		                if ('styleSheet' in dom) {
		                    dom.setAttribute('type', 'text/css')
		                    dom.styleSheet.cssText = template
		                } else {
		                    dom.innerHTML = template
		                }
		                break
		            case 'template':
		                dom.innerHTML = template
		                break
		            case 'noscript':
		                dom.textContent = template
		                break
		            default:
		                if (!this.isVoidTag) {
		                    this.children.forEach(function (c) {
		                        c && dom.appendChild(avalon.vdomAdaptor(c, 'toDOM'))
		                    })
		                }
		                break
		        }
		        return dom
		    },
		    toHTML: function () {
		        var arr = []
		        for (var i in this.props) {
		            var val = this.props[i]
		            if (skipFalseAndFunction(val)) {
		                arr.push(i + '=' + avalon.quote(this.props[i] + ''))
		            }
		        }
		        arr = arr.length ? ' ' + arr.join(' ') : ''
		        var str = '<' + this.type + arr
		        if (this.isVoidTag) {
		            return str + '/>'
		        }
		        str += '>'
		        if (this.children.length) {
		            str += this.children.map(function (c) {
		                return c ? avalon.vdomAdaptor(c, 'toHTML') : ''
		            }).join('')
		        } 
		        return str + '</' + this.type + '>'
		    }
		}

		module.exports = VElement

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 *                          DOM Api
		 * shim,class,data,css,val,html,event,ready  
		 * ------------------------------------------------------------
		 */
		__webpack_require__(20)
		__webpack_require__(21)
		__webpack_require__(22)
		__webpack_require__(25)
		__webpack_require__(26)
		__webpack_require__(27)
		__webpack_require__(30)
		__webpack_require__(32)

		module.exports = avalon

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		function fixContains(root, el) {
		    try { //IE6-8,游离于DOM树外的文本节点，访问parentNode有时会抛错
		        while ((el = el.parentNode))
		            if (el === root)
		                return true
		        return false
		    } catch (e) {
		        return false
		    }
		}

		avalon.contains = fixContains
		//IE6-11的文档对象没有contains
		if (!avalon.document.contains) {
		    avalon.document.contains = function (b) {
		        return fixContains(document, b)
		    }
		}

		if (window.Node && !document.createTextNode('x').contains) {
		    Node.prototype.contains = function (arg) {//IE6-8没有Node对象
		        return !!(this.compareDocumentPosition(arg) & 16)
		    }
		}

		//firefox 到11时才有outerHTML
		if (window.HTMLElement && !avalon.root.outerHTML) {
		    HTMLElement.prototype.__defineGetter__('outerHTML', function () {
		        var div = document.createElement('div')
		        div.appendChild(this)
		        return div.innerHTML
		    })
		}




	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		var rnowhite = /\S+/g
		var fakeClassListMethods = {
		    _toString: function () {
		        var node = this.node
		        var cls = node.className
		        var str = typeof cls === 'string' ? cls : cls.baseVal
		        var match = str.match(rnowhite)
		        return match ? match.join(' ') : ''
		    },
		    _contains: function (cls) {
		        return (' ' + this + ' ').indexOf(' ' + cls + ' ') > -1
		    },
		    _add: function (cls) {
		        if (!this.contains(cls)) {
		            this._set(this + ' ' + cls)
		        }
		    },
		    _remove: function (cls) {
		        this._set((' ' + this + ' ').replace(' ' + cls + ' ', ' '))
		    },
		    __set: function (cls) {
		        cls = cls.trim()
		        var node = this.node
		        if (typeof node.className === 'object') {
		            //SVG元素的className是一个对象 SVGAnimatedString { baseVal='', animVal=''}，只能通过set/getAttribute操作
		            node.setAttribute('class', cls)
		        } else {
		            node.className = cls
		        }
		    } //toggle存在版本差异，因此不使用它
		}

		function fakeClassList(node) {
		    if (!('classList' in node)) {
		        node.classList = {
		            node: node
		        }
		        for (var k in fakeClassListMethods) {
		            node.classList[k.slice(1)] = fakeClassListMethods[k]
		        }
		    }
		    return node.classList
		}


		'add,remove'.replace(avalon.rword, function (method) {
		    avalon.fn[method + 'Class'] = function (cls) {
		        var el = this[0] || {}
		        //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
		        if (cls && typeof cls === 'string' && el.nodeType === 1) {
		            cls.replace(rnowhite, function (c) {
		                fakeClassList(el)[method](c)
		            })
		        }
		        return this
		    }
		})

		avalon.fn.mix({
		    hasClass: function (cls) {
		        var el = this[0] || {}
		        return el.nodeType === 1 && fakeClassList(el).contains(cls)
		    },
		    toggleClass: function (value, stateVal) {
		        var isBool = typeof stateVal === 'boolean'
		        var me = this
		        String(value).replace(rnowhite, function (c) {
		            var state = isBool ? stateVal : !me.hasClass(c)
		            me[state ? 'addClass' : 'removeClass'](c)
		        })
		        return this
		    }
		})



	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		
		var propMap = __webpack_require__(23)
		var isVML = __webpack_require__(24)
		var rsvg =/^\[object SVG\w*Element\]$/
		var ramp = /&amp;/g

		function attrUpdate(node, vnode) {
		    var attrs = vnode.changeAttr
		    if (!node || node.nodeType !== 1 ) {
		        return
		    }
		    if (attrs) {
		        for (var attrName in attrs) {
		            var val = attrs[attrName]
		            // 处理路径属性
		            if (attrName === 'href' || attrName === 'src') {
		                if (!node.hasAttribute) {
		                    val = String(val).replace(ramp, '&') //处理IE67自动转义的问题
		                }
		                node[attrName] = val
		                if (window.chrome && node.tagName === 'EMBED') {
		                    var parent = node.parentNode //#525  chrome1-37下embed标签动态设置src不能发生请求
		                    var comment = document.createComment('ms-src')
		                    parent.replaceChild(comment, node)
		                    parent.replaceChild(node, comment)
		                }
		                //处理HTML5 data-*属性
		            } else if (attrName.indexOf('data-') === 0) {
		                node.setAttribute(attrName, val)

		            } else {
		                var propName = propMap[attrName] || attrName
		                if (typeof node[propName] === 'boolean') {
		                    node[propName] = !!val
		                  
		                    //布尔属性必须使用el.xxx = true|false方式设值
		                    //如果为false, IE全系列下相当于setAttribute(xxx,''),
		                    //会影响到样式,需要进一步处理
		                }

		                if (val === false ) {//移除属性
		                    node.removeAttribute(propName)
		                    continue
		                }
		                //SVG只能使用setAttribute(xxx, yyy), VML只能使用node.xxx = yyy ,
		                //HTML的固有属性必须node.xxx = yyy
		             
		                var isInnate = rsvg.test(node) ? false :
		                        (!avalon.modern && isVML(node)) ? true :
		                        attrName in node.cloneNode(false)
		                if (isInnate) {
		                    node[propName] = val + ''
		                } else {
		                    node.setAttribute(attrName, val)
		                }

		            }

		        }
		        vnode.changeAttr = null
		    }
		}

		var rvalidchars = /^[\],:{}\s]*$/,
		    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
		    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g

		avalon.parseJSON = avalon.window.JSON ? JSON.parse : function (data) {
		    if (typeof data === 'string') {
		        data = data.trim();
		        if (data) {
		            if (rvalidchars.test(data.replace(rvalidescape, '@')
		                    .replace(rvalidtokens, ']')
		                    .replace(rvalidbraces, ''))) {
		                return (new Function('return ' + data))() // jshint ignore:line
		            }
		        }
		        avalon.error('Invalid JSON: ' + data)
		    }
		    return data
		}


		avalon.fn.attr = function (name, value) {
		    if (arguments.length === 2) {
		        this[0].setAttribute(name, value)
		        return this
		    } else {
		        return this[0].getAttribute(name)
		    }
		}

		module.exports = attrUpdate

	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		var propMap = {//不规则的属性名映射
		    'accept-charset': 'acceptCharset',
		    'char': 'ch',
		    charoff: 'chOff',
		    'class': 'className',
		    'for': 'htmlFor',
		    'http-equiv': 'httpEquiv'
		}
		/*
		contenteditable不是布尔属性
		http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
		contenteditable=''
		contenteditable='events'
		contenteditable='caret'
		contenteditable='plaintext-only'
		contenteditable='true'
		contenteditable='false'
		 */
		var bools = ['autofocus,autoplay,async,allowTransparency,checked,controls',
		    'declare,disabled,defer,defaultChecked,defaultSelected,',
		    'isMap,loop,multiple,noHref,noResize,noShade',
		    'open,readOnly,selected'
		].join(',')

		bools.replace(/\w+/g, function (name) {
		    propMap[name.toLowerCase()] = name
		})

		var anomaly = ['accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan',
		    'dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,'+
		    'marginWidth,marginHeight,rowSpan,tabIndex,useMap,vSpace,valueType,vAlign'
		].join(',')

		anomaly.replace(/\w+/g, function (name) {
		    propMap[name.toLowerCase()] = name
		})

		module.exports = propMap


	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		function isVML(src) {
		    var nodeName = src.nodeName
		    return nodeName.toLowerCase() === nodeName && src.scopeName && src.outerText === ''
		}

		module.exports = isVML

	/***/ },
	/* 25 */
	/***/ function(module, exports) {

		var root = avalon.root
		var window = avalon.window
		var camelize = avalon.camelize
		var cssHooks = avalon.cssHooks

		var prefixes = ['', '-webkit-', '-o-', '-moz-', '-ms-']
		var cssMap = {
		    'float': window.Range ? 'cssFloat' : 'styleFloat'
		}
		avalon.cssNumber = avalon.oneObject('animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom')

		avalon.cssName = function (name, host, camelCase) {
		    if (cssMap[name]) {
		        return cssMap[name]
		    }
		    host = host || root.style || {}
		    for (var i = 0, n = prefixes.length; i < n; i++) {
		        camelCase = camelize(prefixes[i] + name)
		        if (camelCase in host) {
		            return (cssMap[name] = camelCase)
		        }
		    }
		    return null
		}


		avalon.fn.css = function (name, value) {
		    if (avalon.isPlainObject(name)) {
		        for (var i in name) {
		            avalon.css(this, i, name[i])
		        }
		    } else {
		        var ret = avalon.css(this, name, value)
		    }
		    return ret !== void 0 ? ret : this
		}

		avalon.fn.position = function () {
		    var offsetParent, offset,
		            elem = this[0],
		            parentOffset = {
		                top: 0,
		                left: 0
		            }
		    if (!elem) {
		        return parentOffset
		    }
		    if (this.css('position') === 'fixed') {
		        offset = elem.getBoundingClientRect()
		    } else {
		        offsetParent = this.offsetParent() //得到真正的offsetParent
		        offset = this.offset() // 得到正确的offsetParent
		        if (offsetParent[0].tagName !== 'HTML') {
		            parentOffset = offsetParent.offset()
		        }
		        parentOffset.top += avalon.css(offsetParent[0], 'borderTopWidth', true)
		        parentOffset.left += avalon.css(offsetParent[0], 'borderLeftWidth', true)

		        // Subtract offsetParent scroll positions
		        parentOffset.top -= offsetParent.scrollTop()
		        parentOffset.left -= offsetParent.scrollLeft()
		    }
		    return {
		        top: offset.top - parentOffset.top - avalon.css(elem, 'marginTop', true),
		        left: offset.left - parentOffset.left - avalon.css(elem, 'marginLeft', true)
		    }
		}
		avalon.fn.offsetParent = function () {
		    var offsetParent = this[0].offsetParent
		    while (offsetParent && avalon.css(offsetParent, 'position') === 'static') {
		        offsetParent = offsetParent.offsetParent;
		    }
		    return avalon(offsetParent || root)
		}

		cssHooks['@:set'] = function (node, name, value) {
		    try {
		        //node.style.width = NaN;node.style.width = 'xxxxxxx';
		        //node.style.width = undefine 在旧式IE下会抛异常
		        node.style[name] = value
		    } catch (e) {
		    }
		}

		if (window.getComputedStyle) {
		    cssHooks['@:get'] = function (node, name) {
		        if (!node || !node.style) {
		            throw new Error('getComputedStyle要求传入一个节点 ' + node)
		        }
		        var ret, styles = getComputedStyle(node, null)
		        if (styles) {
		            ret = name === 'filter' ? styles.getPropertyValue(name) : styles[name]
		            if (ret === '') {
		                ret = node.style[name] //其他浏览器需要我们手动取内联样式
		            }
		        }
		        return ret
		    }
		    cssHooks['opacity:get'] = function (node) {
		        var ret = cssHooks['@:get'](node, 'opacity')
		        return ret === '' ? '1' : ret
		    }
		} else {
		    var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i
		    var rposition = /^(top|right|bottom|left)$/
		    var ralpha = /alpha\([^)]*\)/i
		    var ie8 = !!window.XDomainRequest
		    var salpha = 'DXImageTransform.Microsoft.Alpha'
		    var border = {
		        thin: ie8 ? '1px' : '2px',
		        medium: ie8 ? '3px' : '4px',
		        thick: ie8 ? '5px' : '6px'
		    }
		    cssHooks['@:get'] = function (node, name) {
		        //取得精确值，不过它有可能是带em,pc,mm,pt,%等单位
		        var currentStyle = node.currentStyle
		        var ret = currentStyle[name]
		        if ((rnumnonpx.test(ret) && !rposition.test(ret))) {
		            //①，保存原有的style.left, runtimeStyle.left,
		            var style = node.style,
		                    left = style.left,
		                    rsLeft = node.runtimeStyle.left
		            //②由于③处的style.left = xxx会影响到currentStyle.left，
		            //因此把它currentStyle.left放到runtimeStyle.left，
		            //runtimeStyle.left拥有最高优先级，不会style.left影响
		            node.runtimeStyle.left = currentStyle.left
		            //③将精确值赋给到style.left，然后通过IE的另一个私有属性 style.pixelLeft
		            //得到单位为px的结果；fontSize的分支见http://bugs.jquery.com/ticket/760
		            style.left = name === 'fontSize' ? '1em' : (ret || 0)
		            ret = style.pixelLeft + 'px'
		            //④还原 style.left，runtimeStyle.left
		            style.left = left
		            node.runtimeStyle.left = rsLeft
		        }
		        if (ret === 'medium') {
		            name = name.replace('Width', 'Style')
		            //border width 默认值为medium，即使其为0'
		            if (currentStyle[name] === 'none') {
		                ret = '0px'
		            }
		        }
		        return ret === '' ? 'auto' : border[ret] || ret
		    }
		    cssHooks['opacity:set'] = function (node, name, value) {
		        var style = node.style
		        var opacity = isFinite(value) && value <= 1 ? 'alpha(opacity=' + value * 100 + ')' : ''
		        var filter = style.filter || '';
		        style.zoom = 1
		        //不能使用以下方式设置透明度
		        //node.filters.alpha.opacity = value * 100
		        style.filter = (ralpha.test(filter) ?
		                filter.replace(ralpha, opacity) :
		                filter + ' ' + opacity).trim()
		        if (!style.filter) {
		            style.removeAttribute('filter')
		        }
		    }
		    cssHooks['opacity:get'] = function (node) {
		        //这是最快的获取IE透明值的方式，不需要动用正则了！
		        var alpha = node.filters.alpha || node.filters[salpha],
		                op = alpha && alpha.enabled ? alpha.opacity : 100
		        return (op / 100) + '' //确保返回的是字符串
		    }
		}

		'top,left'.replace(avalon.rword, function (name) {
		    cssHooks[name + ':get'] = function (node) {
		        var computed = cssHooks['@:get'](node, name)
		        return /px$/.test(computed) ? computed :
		                avalon(node).position()[name] + 'px'
		    }
		})

		var cssShow = {
		    position: 'absolute',
		    visibility: 'hidden',
		    display: 'block'
		}

		var rdisplayswap = /^(none|table(?!-c[ea]).+)/

		function showHidden(node, array) {
		    //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
		    if (node.offsetWidth <= 0) { //opera.offsetWidth可能小于0
		        if (rdisplayswap.test(cssHooks['@:get'](node, 'display'))) {
		            var obj = {
		                node: node
		            }
		            for (var name in cssShow) {
		                obj[name] = node.style[name]
		                node.style[name] = cssShow[name]
		            }
		            array.push(obj)
		        }
		        var parent = node.parentNode
		        if (parent && parent.nodeType === 1) {
		            showHidden(parent, array)
		        }
		    }
		}
		avalon.each({
		    Width: 'width',
		    Height: 'height'
		}, function (name, method) {
		    var clientProp = 'client' + name,
		            scrollProp = 'scroll' + name,
		            offsetProp = 'offset' + name
		    cssHooks[method + ':get'] = function (node, which, override) {
		        var boxSizing = -4
		        if (typeof override === 'number') {
		            boxSizing = override
		        }
		        which = name === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom']
		        var ret = node[offsetProp] // border-box 0
		        if (boxSizing === 2) { // margin-box 2
		            return ret + avalon.css(node, 'margin' + which[0], true) + avalon.css(node, 'margin' + which[1], true)
		        }
		        if (boxSizing < 0) { // padding-box  -2
		            ret = ret - avalon.css(node, 'border' + which[0] + 'Width', true) - avalon.css(node, 'border' + which[1] + 'Width', true)
		        }
		        if (boxSizing === -4) { // content-box -4
		            ret = ret - avalon.css(node, 'padding' + which[0], true) - avalon.css(node, 'padding' + which[1], true)
		        }
		        return ret
		    }
		    cssHooks[method + '&get'] = function (node) {
		        var hidden = [];
		        showHidden(node, hidden);
		        var val = cssHooks[method + ':get'](node)
		        for (var i = 0, obj; obj = hidden[i++]; ) {
		            node = obj.node
		            for (var n in obj) {
		                if (typeof obj[n] === 'string') {
		                    node.style[n] = obj[n]
		                }
		            }
		        }
		        return val
		    }
		    avalon.fn[method] = function (value) { //会忽视其display
		        var node = this[0]
		        if (arguments.length === 0) {
		            if (node.setTimeout) { //取得窗口尺寸
		                return node['inner' + name] ||
		                        node.document.documentElement[clientProp] ||
		                        node.document.body[clientProp] //IE6下前两个分别为undefined,0
		            }
		            if (node.nodeType === 9) { //取得页面尺寸
		                var doc = node.documentElement
		                //FF chrome    html.scrollHeight< body.scrollHeight
		                //IE 标准模式 : html.scrollHeight> body.scrollHeight
		                //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
		                return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp])
		            }
		            return cssHooks[method + '&get'](node)
		        } else {
		            return this.css(method, value)
		        }
		    }
		    avalon.fn['inner' + name] = function () {
		        return cssHooks[method + ':get'](this[0], void 0, -2)
		    }
		    avalon.fn['outer' + name] = function (includeMargin) {
		        return cssHooks[method + ':get'](this[0], void 0, includeMargin === true ? 2 : 0)
		    }
		})

		avalon.fn.offset = function () { //取得距离页面左右角的坐标
		    var node = this[0],
		            box = {
		                left: 0,
		                top: 0
		            }
		    if (!node || !node.tagName || !node.ownerDocument) {
		        return box
		    }
		    var doc = node.ownerDocument,
		            body = doc.body,
		            root = doc.documentElement,
		            win = doc.defaultView || doc.parentWindow
		    if (!avalon.contains(root, node)) {
		        return box
		    }
		    //http://hkom.blog1.fc2.com/?mode=m&no=750 body的偏移量是不包含margin的
		    //我们可以通过getBoundingClientRect来获得元素相对于client的rect.
		    //http://msdn.microsoft.com/en-us/library/ms536433.aspx
		    if (node.getBoundingClientRect) {
		        box = node.getBoundingClientRect() // BlackBerry 5, iOS 3 (original iPhone)
		    }
		    //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
		    var clientTop = root.clientTop || body.clientTop,
		            clientLeft = root.clientLeft || body.clientLeft,
		            scrollTop = Math.max(win.pageYOffset || 0, root.scrollTop, body.scrollTop),
		            scrollLeft = Math.max(win.pageXOffset || 0, root.scrollLeft, body.scrollLeft)
		    // 把滚动距离加到left,top中去。
		    // IE一些版本中会自动为HTML元素加上2px的border，我们需要去掉它
		    // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
		    return {
		        top: box.top + scrollTop - clientTop,
		        left: box.left + scrollLeft - clientLeft
		    }
		}

		//生成avalon.fn.scrollLeft, avalon.fn.scrollTop方法
		avalon.each({
		    scrollLeft: 'pageXOffset',
		    scrollTop: 'pageYOffset'
		}, function (method, prop) {
		    avalon.fn[method] = function (val) {
		        var node = this[0] || {},
		                win = getWindow(node),
		                top = method === 'scrollTop'
		        if (!arguments.length) {
		            return win ? (prop in win) ? win[prop] : root[method] : node[method]
		        } else {
		            if (win) {
		                win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop())
		            } else {
		                node[method] = val
		            }
		        }
		    }
		})

		function getWindow(node) {
		    return node.window || node.defaultView || node.parentWindow || false
		}

	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		function getValType(elem) {
		    var ret = elem.tagName.toLowerCase()
		    return ret === 'input' && /checkbox|radio/.test(elem.type) ? 'checked' : ret
		}
		var roption = /^<option(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s+value[\s=]/i
		var valHooks = {
		    'option:get': avalon.msie ? function (node) {
		        //在IE11及W3C，如果没有指定value，那么node.value默认为node.text（存在trim作），但IE9-10则是取innerHTML(没trim操作)
		        //specified并不可靠，因此通过分析outerHTML判定用户有没有显示定义value
		        return roption.test(node.outerHTML) ? node.value : node.text.trim()
		    } : function (node) {
		        return node.value
		    },
		    'select:get': function (node, value) {
		        var option, options = node.options,
		                index = node.selectedIndex,
		                getter = valHooks['option:get'],
		                one = node.type === 'select-one' || index < 0,
		                values = one ? null : [],
		                max = one ? index + 1 : options.length,
		                i = index < 0 ? max : one ? index : 0
		        for (; i < max; i++) {
		            option = options[i]
		            //IE6-9在reset后不会改变selected，需要改用i === index判定
		            //我们过滤所有disabled的option元素，但在safari5下，
		            //如果设置optgroup为disable，那么其所有孩子都disable
		            //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
		            if ((option.selected || i === index) && !option.disabled &&
		                    (!option.parentNode.disabled || option.parentNode.tagName !== 'OPTGROUP')
		                    ) {
		                value = getter(option)
		                if (one) {
		                    return value
		                }
		                //收集所有selected值组成数组返回
		                values.push(value)
		            }
		        }
		        return values
		    },
		    'select:set': function (node, values, optionSet) {
		        values = [].concat(values) //强制转换为数组
		        var getter = valHooks['option:get']
		        for (var i = 0, el; el = node.options[i++]; ) {
		            if ((el.selected = values.indexOf(getter(el)) > -1)) {
		                optionSet = true
		            }
		        }
		        if (!optionSet) {
		            node.selectedIndex = -1
		        }
		    }
		}

		avalon.fn.val = function (value) {
		    var node = this[0]
		    if (node && node.nodeType === 1) {
		        var get = arguments.length === 0
		        var access = get ? ':get' : ':set'
		        var fn = valHooks[getValType(node) + access]
		        if (fn) {
		            var val = fn(node, value)
		        } else if (get) {
		            return (node.value || '').replace(/\r/g, '')
		        } else {
		            node.value = value
		        }
		    }
		    return get ? val : this
		}

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var Cache = __webpack_require__(28)

		var fixCloneNode = __webpack_require__(29)

		var rhtml = /<|&#?\w+;/
		var htmlCache = new Cache(128)
		var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig

		avalon.parseHTML = function (html) {
		    var fragment = avalon.avalonFragment.cloneNode(false)
		    //处理非字符串
		    if (typeof html !== 'string') {
		        return fragment
		    }
		    //处理非HTML字符串
		    if (!rhtml.test(html)) {
		        return document.createTextNode(html)
		    }

		    html = html.replace(rxhtml, '<$1></$2>').trim()
		    var hasCache = htmlCache.get(html)
		    if (hasCache) {
		        return fixCloneNode(hasCache)
		    }
		    var vnodes = avalon.lexer(html, false, 1000)
		    for(var i = 0, el; el = vnodes[i++];){
		        fragment.appendChild(avalon.vdomAdaptor(el,'toDOM'))
		    }
		    if (html.length < 1024) {
		        htmlCache.put(html, fixCloneNode(fragment))
		    }
		    return fragment
		}

		avalon.innerHTML = function (node, html) {
		    if (!avalon.modern && (!rcreate.test(html) && !rnest.test(html))) {
		        try {
		            node.innerHTML = html
		            return
		        } catch (e) {
		        }
		    }
		    var parsed = this.parseHTML(html)
		    this.clearHTML(node).appendChild(parsed)
		}

		avalon.clearHTML = function (node) {
		    node.textContent = ''
		    while (node.lastChild) {
		        node.removeChild(node.lastChild)
		    }
		    return node
		}



	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		// https://github.com/rsms/js-lru
		function LRU(maxLength) {
		    this.size = 0
		    this.limit = maxLength
		    this.head = this.tail = void 0
		    this._keymap = {}
		}

		var p = LRU.prototype

		p.put = function (key, value) {
		    var entry = {
		        key: key,
		        value: value
		    }
		    this._keymap[key] = entry
		    if (this.tail) {
		        this.tail.newer = entry
		        entry.older = this.tail
		    } else {
		        this.head = entry
		    }
		    this.tail = entry
		    if (this.size === this.limit) {
		        this.shift()
		    } else {
		        this.size++
		    }
		    return value
		}

		p.shift = function () {
		    var entry = this.head
		    if (entry) {
		        this.head = this.head.newer
		        this.head.older =
		                entry.newer =
		                entry.older =
		                this._keymap[entry.key] = void 0
		        delete this._keymap[entry.key] //#1029
		    }
		}
		p.get = function (key) {
		    var entry = this._keymap[key]
		    if (entry === void 0)
		        return
		    if (entry === this.tail) {
		        return  entry.value
		    }
		    // HEAD--------------TAIL
		    //   <.older   .newer>
		    //  <--- add direction --
		    //   A  B  C  <D>  E
		    if (entry.newer) {
		        if (entry === this.head) {
		            this.head = entry.newer
		        }
		        entry.newer.older = entry.older // C <-- E.
		    }
		    if (entry.older) {
		        entry.older.newer = entry.newer // C. --> E
		    }
		    entry.newer = void 0 // D --x
		    entry.older = this.tail // D. --> E
		    if (this.tail) {
		        this.tail.newer = entry // E. <-- D
		    }
		    this.tail = entry
		    return entry.value
		}

		module.exports = LRU


	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		var rcheckedType = /radio|checkbox/

		function fix(dest, src) {
		    if (dest.nodeType !== 1) {
		        return
		    }
		    var nodeName = dest.nodeName.toLowerCase()
		    if (nodeName === 'object') {
		        if (dest.parentNode) {
		            dest.outerHTML = src.outerHTML
		        }

		    } else if (nodeName === 'input' && rcheckedType.test(src.type)) {

		        dest.defaultChecked = dest.checked = src.checked

		        if (dest.value !== src.value) {
		            dest.value = src.value
		        }

		    } else if (nodeName === 'option') {
		        dest.defaultSelected = dest.selected = src.defaultSelected
		    } else if (nodeName === 'input' || nodeName === 'textarea') {
		        dest.defaultValue = src.defaultValue
		    }
		}


		function getAll(context) {
		    return typeof context.getElementsByTagName !== "undefined" ?
		            context.getElementsByTagName("*") :
		            typeof context.querySelectorAll !== "undefined" ?
		            context.querySelectorAll("*") : []
		}

		function fixCloneNode(src) {
		    var target = src.cloneNode(true)
		    if (avalon.modern)
		        return target
		    var t = getAll(target)
		    var s = getAll(src)
		    avalon.each(s, function (i) {
		        fix(t[i], s[i])
		    })
		    return target
		}

		module.exports = fixCloneNode

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var document = avalon.document
		var window = avalon.window
		var root = avalon.root
		var W3C = avalon.modern

		var getShortID = __webpack_require__(6).getShortID
		//http://www.feiesoft.com/html/events.html
		//http://segmentfault.com/q/1010000000687977/a-1020000000688757
		var canBubbleUp = __webpack_require__(31)

		if (!W3C) {
		    delete canBubbleUp.change
		    delete canBubbleUp.select
		}

		//canBubbleUp.touchstart = 1
		//canBubbleUp.touchstart = 1
		//canBubbleUp.touchstart = 1

		var eventHooks = avalon.eventHooks
		/*绑定事件*/
		avalon.bind = function (elem, type, fn) {
		    if (elem.nodeType === 1) {
		        var value = elem.getAttribute('avalon-events') || ''
		        //如果是使用ms-on-*绑定的回调,其uuid格式为e12122324,
		        //如果是使用bind方法绑定的回调,其uuid格式为_12
		        var uuid = getShortID(fn)
		        var hook = eventHooks[type]
		        if(hook){
		            type = hook.type || type
		            if (hook.fix) {
		                fn = hook.fix(elem, fn)
		                fn.uuid = uuid
		            }
		        }
		        var key = type + ':' + uuid
		        avalon.eventListeners[fn.uuid] = fn
		        if (value.indexOf(type + ':') === -1) {//同一种事件只绑定一次
		            if (canBubbleUp[type] || (avalon.modern && focusBlur[type])) {
		                delegateEvent(type)
		            } else {
		                nativeBind(elem, type, dispatch)
		            }
		        }
		        var keys = value.split(',')
		        if (keys[0] === '') {
		            keys.shift()
		        }
		        if (keys.indexOf(key) === -1) {
		            keys.push(key)
		            elem.setAttribute('avalon-events', keys.join(','))
		            //将令牌放进avalon-events属性中
		        }

		    } else {
		        nativeBind(elem, type, fn)
		    }
		    return fn //兼容之前的版本
		}

		avalon.unbind = function (elem, type, fn) {
		    if (elem.nodeType === 1) {
		        var value = elem.getAttribute('avalon-events') || ''
		        switch (arguments.length) {
		            case 1:
		                nativeUnBind(elem, type, dispatch)
		                elem.removeAttribute('avalon-events')
		                break
		            case 2:
		                value = value.split(',').filter(function (str) {
		                    return str.indexOf(type + ':') === -1
		                }).join(',')
		                elem.setAttribute('avalon-events', value)
		                break
		            default:
		                var search = type + ':' + fn.uuid
		                value = value.split(',').filter(function (str) {
		                    return str !== search
		                }).join(',')
		                elem.setAttribute('avalon-events', value)
		                delete avalon.eventListeners[fn.uuid]
		                break
		        }
		    } else {
		        nativeUnBind(elem, type, fn)
		    }
		}

		var typeRegExp = {}
		function collectHandlers(elem, type, handlers) {
		    var value = elem.getAttribute('avalon-events')
		    if (value && (elem.disabled !== true || type !== 'click')) {
		        var uuids = []
		        var reg = typeRegExp[type] || (typeRegExp[type] = new RegExp(type + '\\:([^,\\s]+)', 'g'))
		        value.replace(reg, function (a, b) {
		            uuids.push(b)
		            return a
		        })
		        if (uuids.length) {
		            handlers.push({
		                elem: elem,
		                uuids: uuids
		            })
		        }
		    }
		    elem = elem.parentNode
		    var g = avalon.gestureEvents || {}
		    if (elem && elem.getAttribute && (canBubbleUp[type] || g[type])) {
		        collectHandlers(elem, type, handlers)
		    }

		}
		var rhandleHasVm = /^e/
		function dispatch(event) {
		    event = new avEvent(event)
		    var type = event.type
		    var elem = event.target
		    var handlers = []
		    collectHandlers(elem, type, handlers)
		    var i = 0, j, uuid, handler
		    while ((handler = handlers[i++]) && !event.cancelBubble) {
		        var host = event.currentTarget = handler.elem
		        j = 0
		        while ((uuid = handler.uuids[ j++ ]) &&
		                !event.isImmediatePropagationStopped) {
		            
		            var fn = avalon.eventListeners[uuid]
		            if (fn) {
		                var vm = rhandleHasVm.test(uuid) ? handler.elem._ms_context_ : 0
		                if (vm && vm.$hashcode === false) {
		                    return avalon.unbind(elem, type, fn)
		                }
		   
		                var ret = fn.call(vm || elem, event, host._ms_local)
		                
		                if(ret === false){
		                    event.preventDefault()
		                    event.stopPropagation()
		                }
		            }
		        }
		    }
		}

		var focusBlur = {
		    focus: true,
		    blur: true
		}
		var nativeBind = W3C ? function (el, type, fn, capture) {
		    el.addEventListener(type, fn, capture)
		} : function (el, type, fn) {
		    el.attachEvent('on' + type, fn)
		}
		var nativeUnBind = W3C ? function (el, type, fn) {
		    el.removeEventListener(type, fn)
		} : function (el, type, fn) {
		    el.detachEvent('on' + type, fn)
		}

		function delegateEvent(type) {
		    var value = root.getAttribute('delegate-events') || ''
		    if (value.indexOf(type) === -1) {
		        var arr = value.match(avalon.rword) || []
		        arr.push(type)
		        root.setAttribute('delegate-events', arr.join(','))
		        nativeBind(root, type, dispatch, !!focusBlur[type])
		    }
		}

		avalon.fireDom = function (elem, type, opts) {
		    if (document.createEvent) {
		        var hackEvent = document.createEvent('Events')
		        hackEvent.initEvent(type, true, true, opts)
		        avalon.shadowCopy(hackEvent, opts)

		        elem.dispatchEvent(hackEvent)
		    } else if (root.contains(elem)) {//IE6-8触发事件必须保证在DOM树中,否则报'SCRIPT16389: 未指明的错误'
		        hackEvent = document.createEventObject()
		        avalon.shadowCopy(hackEvent, opts)
		        elem.fireEvent('on' + type, hackEvent)
		    }
		}

		var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/
		var rvendor = /^(?:ms|webkit|moz)/
		function avEvent(event) {
		    if (event.originalEvent) {
		        return this
		    }
		    for (var i in event) {
		        if (!rvendor.test(i) && typeof event[i] !== 'function') {
		            this[i] = event[i]
		        }
		    }
		    if (!this.target) {
		        this.target = event.srcElement
		    }
		    var target = this.target
		    if (this.which == null && event.type.indexOf('key') === 0) {
		        this.which = event.charCode != null ? event.charCode : event.keyCode
		    } else if (rmouseEvent.test(event.type) && !('pageX' in this)) {
		        var doc = target.ownerDocument || document
		        var box = doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement
		        this.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0)
		        this.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0)
		        this.wheelDeltaY = this.wheelDelta
		        this.wheelDeltaX = 0
		    }
		    this.timeStamp = new Date() - 0
		    this.originalEvent = event
		}
		avEvent.prototype = {
		    preventDefault: function () {
		        var e = this.originalEvent;
		        this.returnValue = false
		        if (e) {
		            e.returnValue = false
		            if (e.preventDefault) {
		                e.preventDefault()
		            }
		        }
		    },
		    stopPropagation: function () {
		        var e = this.originalEvent
		        this.cancelBubble = true
		        if (e) {
		            e.cancelBubble = true
		            if (e.stopPropagation) {
		                e.stopPropagation()
		            }
		        }
		    },
		    stopImmediatePropagation: function () {
		        var e = this.originalEvent
		        this.isImmediatePropagationStopped = true
		        if (e.stopImmediatePropagation) {
		            e.stopImmediatePropagation()
		        }
		        this.stopPropagation()
		    }
		}

		//针对firefox, chrome修正mouseenter, mouseleave
		if (!('onmouseenter' in root)) {
		    avalon.each({
		        mouseenter: 'mouseover',
		        mouseleave: 'mouseout'
		    }, function (origType, fixType) {
		        eventHooks[origType] = {
		            type: fixType,
		            fix: function (elem, fn) {
		                return function (e) {
		                    var t = e.relatedTarget
		                    if (!t || (t !== elem && !(elem.compareDocumentPosition(t) & 16))) {
		                        delete e.type
		                        e.type = origType
		                        return fn.apply(this, arguments)
		                    }
		                }
		            }
		        }
		    })
		}
		//针对IE9+, w3c修正animationend
		avalon.each({
		    AnimationEvent: 'animationend',
		    WebKitAnimationEvent: 'webkitAnimationEnd'
		}, function (construct, fixType) {
		    if (window[construct] && !eventHooks.animationend) {
		        eventHooks.animationend = {
		            type: fixType
		        }
		    }
		})
		//针对IE6-8修正input
		if (!('oninput' in document.createElement('input'))) {
		    eventHooks.input = {
		        type: 'propertychange',
		        fix: function (elem, fn) {
		            return function (e) {
		                if (e.propertyName === 'value') {
		                    e.type = 'input'
		                    return fn.apply(this, arguments)
		                }
		            }
		        }
		    }
		}
		if (document.onmousewheel === void 0) {
		    /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
		     firefox DOMMouseScroll detail 下3 上-3
		     firefox wheel detlaY 下3 上-3
		     IE9-11 wheel deltaY 下40 上-40
		     chrome wheel deltaY 下100 上-100 */
		    var fixWheelType = document.onwheel !== void 0 ? 'wheel' : 'DOMMouseScroll'
		    var fixWheelDelta = fixWheelType === 'wheel' ? 'deltaY' : 'detail'
		    eventHooks.mousewheel = {
		        type: fixWheelType,
		        fix: function (elem, fn) {
		            return function (e) {
		                var delta = e[fixWheelDelta] > 0 ? -120 : 120
		                e.wheelDelta = ~~elem._ms_wheel_ + delta
		                elem._ms_wheel_ = e.wheelDeltaY = e.wheelDelta

		                e.wheelDeltaX = 0
		                if (Object.defineProperty) {
		                    Object.defineProperty(e, 'type', {
		                        value: 'mousewheel'
		                    })
		                }
		                return fn.apply(this, arguments)
		            }
		        }
		    }
		}

		avalon.fn.bind = function (type, fn, phase) {
		    if (this[0]) { //此方法不会链
		        return avalon.bind(this[0], type, fn, phase)
		    }
		}

		avalon.fn.unbind = function (type, fn, phase) {
		    if (this[0]) {
		        avalon.unbind(this[0], type, fn, phase)
		    }
		    return this
		}
		avalon.$$unbind = function (node) {
		    var nodes = node.getElementsByTagName('*')
		    //IE6-7这样取所有子孙节点会混入注释节点
		    avalon.each(nodes, function (i, el) {
		        if (el.nodeType === 1 && el.getAttribute('avalon-events')) {
		            avalon.unbind(el)
		        }
		    })
		}

	/***/ },
	/* 31 */
	/***/ function(module, exports) {

		//http://www.feiesoft.com/html/events.html
		//http://segmentfault.com/q/1010000000687977/a-1020000000688757
		module.exports = {
		    click: true,
		    dblclick: true,
		    keydown: true,
		    keypress: true,
		    keyup: true,
		    mousedown: true,
		    mousemove: true,
		    mouseup: true,
		    mouseover: true,
		    mouseout: true,
		    wheel: true,
		    mousewheel: true,
		    input: true,
		    change: true,
		    beforeinput: true,
		    compositionstart: true,
		    compositionupdate: true,
		    compositionend: true,
		    select: true,
		    //http://blog.csdn.net/lee_magnum/article/details/17761441
		    cut: true,
		    copy: true,
		    paste: true,
		    beforecut: true,
		    beforecopy: true,
		    beforepaste: true,
		    focusin: true,
		    focusout: true,
		    DOMFocusIn: true,
		    DOMFocusOut: true,
		    DOMActivate: true,
		    dragend: true,
		    datasetchanged: true
		}

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var scan = __webpack_require__(33)

		var document = avalon.document
		var window = avalon.window
		var root = avalon.root

		var readyList = [], isReady
		var fireReady = function (fn) {
		    isReady = true

		    while (fn = readyList.shift()) {
		        fn(avalon)
		    }
		}

		function doScrollCheck() {
		    try { //IE下通过doScrollCheck检测DOM树是否建完
		        root.doScroll('left')
		        fireReady()
		    } catch (e) {
		        setTimeout(doScrollCheck)
		    }
		}

		if (document.readyState === 'complete') {
		    setTimeout(fireReady) //如果在domReady之外加载
		} else if (document.addEventListener) {
		    document.addEventListener('DOMContentLoaded', fireReady)
		} else if (document.attachEvent) {
		    document.attachEvent('onreadystatechange', function () {
		        if (document.readyState === 'complete') {
		            fireReady()
		        }
		    })
		    try {
		        var isTop = window.frameElement === null
		    } catch (e) {
		    }
		    if (root.doScroll && isTop && window.external) {//fix IE iframe BUG
		        doScrollCheck()
		    }
		}
		if (window.document) {
		    avalon.bind(window, 'load', fireReady)
		}
		avalon.ready = function (fn) {
		    if (!isReady) {
		        readyList.push(fn)
		    } else {
		        fn(avalon)
		    }
		}

		avalon.ready(function(){
		    scan(document.body)
		})



	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var getHTML = __webpack_require__(34)
		var first = true
		function scan(nodes) {
		    for (var i = 0, elem; elem = nodes[i++]; ) {
		        if (elem.nodeType === 1) {
		            var $id = getController(elem)

		            var vm = avalon.vmodels[$id]
		            if (vm && !vm.$element) {
		                avalon(elem).removeClass('ms-controller')
		                vm.$element = elem
		                var now = new Date()
		                //IE6-8下元素的outerHTML前面会有空白
		                var text = getHTML(elem)//elem.outerHTML
		                elem.vtree = avalon.lexer(text)
		                avalon.speedUp(elem.vtree)
		                var now2 = new Date()
		                first && avalon.log('构建虚拟DOM耗时', now2 - now, 'ms')
		                vm.$render = avalon.render(elem.vtree)
		                avalon.scopes[vm.$id] = {
		                    vmodel: vm,
		                    local: {},
		                    isTemp: true
		                }
		                var now3 = new Date()
		                first && avalon.log('构建当前vm的$render方法耗时 ', now3 - now2, 'ms\n',
		                        '如果此时间太长,达100ms以上\n',
		                        '建议将当前ms-controller拆分成多个ms-controlelr,减少每个vm管辖的区域')
		                avalon.rerenderStart = now3
		                first = false
		                avalon.batch($id)

		            } else if (!$id) {
		                scan(elem.childNodes)
		            }
		        }
		    }
		}

		module.exports = avalon.scan = function (a) {
		    if (!a || !a.nodeType) {
		        avalon.warn('[avalon.scan] first argument must be element , documentFragment, or document')
		        return
		    }
		    scan([a])
		}

		function getController(a) {
		    return a.getAttribute('ms-controller') || a.getAttribute('ms-important')
		}

	/***/ },
	/* 34 */
	/***/ function(module, exports) {

		var noChild = avalon.oneObject("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr")

		function getHTML(el) {
		    switch (el.nodeType) {
		        case 1:
		            var type = el.nodeName.toLowerCase()
		            return '<' + type + getAttributes(el.attributes) +
		                    (noChild[type] ? '/>' : ('>' + getChild(el) + '</' + type + '>'))
		        case 3:
		            return el.nodeValue
		        case 8:
		            return '<!--' + el.nodeValue + '-->'
		    }
		}


		function getAttributes(array) {
		    var ret = []
		    for (var i = 0, attr; attr = array[i++]; ) {
		        if (attr.specified) {
		            ret.push(attr.name.toLowerCase()+'="' + escapeHtml(attr.value) + '"')
		        }
		    }
		    var str = ret.join(' ')
		    return str ? ' ' + str : ''
		}

		function getChild(el) {
		    var ret = ''
		    for (var i = 0, node; node = el.childNodes[i++]; ) {
		        ret += getHTML(node)
		    }
		    return ret
		}
		var matchHtmlRegExp = /["'&<>]/;

		function escapeHtml(string) {
		    var str = '' + string;
		    var match = matchHtmlRegExp.exec(str);

		    if (!match) {
		        return str;
		    }

		    var escape;
		    var html = '';
		    var index = 0;
		    var lastIndex = 0;

		    for (index = match.index; index < str.length; index++) {
		        switch (str.charCodeAt(index)) {
		            case 34: // "
		                escape = '&quot;';
		                break;
		            case 38: // &
		                escape = '&amp;';
		                break;
		            case 39: // '
		                escape = '&#39;';
		                break;
		            case 60: // <
		                escape = '&lt;';
		                break;
		            case 62: // >
		                escape = '&gt;';
		                break;
		            default:
		                continue;
		        }

		        if (lastIndex !== index) {
		            html += str.substring(lastIndex, index);
		        }

		        lastIndex = index + 1;
		        html += escape;
		    }

		    return lastIndex !== index
		            ? html + str.substring(lastIndex, index)
		            : html;
		}
		//https://github.com/nthtran/vdom-to-html
		module.exports = getHTML


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(36)
		__webpack_require__(38)
		//处理属性样式
		__webpack_require__(40)

		__webpack_require__(41)
		__webpack_require__(42)
		////处理内容
		__webpack_require__(43)
		__webpack_require__(44)
		__webpack_require__(45)
		////需要用到事件的
		__webpack_require__(53)
		__webpack_require__(54)
		__webpack_require__(55)
		__webpack_require__(62)
		__webpack_require__(63)
		//
		////处理逻辑
		__webpack_require__(64)
		__webpack_require__(65)
		//
		__webpack_require__(66)
		__webpack_require__(69)
		//优先级 ms-important, ms-controller, ms-for, ms-widget, ms-effect, ms-if
		//.......
		//ms-duplex


	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		// 抽离出来公用
		var update = __webpack_require__(37)

		avalon.directive('important', {
		    priority: 1,
		    parse: function (copy, src, binding) {
		        var quoted = avalon.quote(binding.expr)
		        copy[binding.name] = quoted
		        copy.local = '{}'
		        copy.vmodel = '(function(){ return __vmodel__ = avalon.vmodels[' + quoted + ']})()'
		        src.$prepend = ['(function(__vmodel__){',
		            'var important = avalon.scopes[' + quoted + ']',
		            'if(important){avalon.log("不进入"+' + quoted + ');return }',
		        ].join('\n') + '\n'
		        src.$append = '\n})();'
		    },
		    diff: function (copy, src, name) {
		        if (src.vmodel !== copy.vmodel) {
		            src['ms-controller'] = copy[name]
		            src.local = copy.local
		            src.vmodel = copy.vmodel
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom, parent) {
		        avalon.directives.controller.update(dom, vdom, parent, 'important')
		    }
		})


	/***/ },
	/* 37 */
	/***/ function(module, exports) {

		module.exports = function (vdom, update, hookName) {
		    if (hookName) {
		        vdom.afterChange = vdom.afterChange || []
		        avalon.Array.ensure(vdom.afterChange, update)
		    } else {
		        var dom = vdom.dom
		        update(vdom.dom, vdom, dom && dom.parentNode)
		    }
		}


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		// 抽离出来公用
		var update = __webpack_require__(37)
		var reconcile = __webpack_require__(39)

		var cache = {}
		avalon.mediatorFactoryCache = function (__vmodel__, __present__) {
		    var a = __vmodel__.$hashcode
		    var b = __present__.$hashcode
		    var id = a + b
		    if (cache[id]) {
		        return cache[id]
		    }
		    var c = avalon.mediatorFactory(__vmodel__, __present__)
		    return  cache[id] = c
		}
		avalon.directive('controller', {
		    priority: 2,
		    parse: function (copy, src, binding) {
		        var quoted = avalon.quote(binding.expr)
		        copy[binding.name] = quoted
		        copy.local = '__local__'
		        copy.vmodel = [
		            '(function(){',
		            'var vm = avalon.vmodels[' + quoted + ']',
		            'if(vm && __vmodel__&& vm !== __vmodel__){',
		            'return __vmodel__ = avalon.mediatorFactoryCache(__vmodel__, vm)',
		            '}else if(vm){',
		            'return __vmodel__ = vm',
		            '}',
		            '})()'
		        ].join('\n')

		        src.$prepend = '(function(__vmodel__){'
		        src.$append = '\n})(__vmodel__);'
		    },
		    diff: function (copy, src, name) {
		        if (src[name] !== copy[name]) {
		            src[name] = copy[name]
		            src.local = copy.local
		            src.vmodel = copy.vmodel
		            update(src, this.update)

		        }
		    },
		    update: function (dom, vdom, parent, important) {
		        var vmodel = vdom.vmodel
		        var local = vdom.local
		        var id = vdom['ms-controller']
		        var scope = avalon.scopes[id]
		        if (scope) {
		            return
		        }
		        delete vdom.vmodel
		        delete vdom.local
		        var top = avalon.vmodels[id]
		        var render = avalon.render([vdom], local)
		        vmodel.$render = render
		        vmodel.$element = dom
		        reconcile([dom], vdom, parent)
		        dom.vtree = [vdom]
		        if (top !== vmodel) {
		            top.$render = top.$render || render
		            top.$element = top.$element || dom
		        }
		        var needFire = important ? vmodel : top
		        var scope = avalon.scopes[id] = {
		            vmodel: vmodel,
		            local: local
		        }
		        update(vdom, function () {
		            var events = needFire.$events["onReady"]
		            if (events) {
		                needFire.$fire('onReady')
		                delete needFire.$events.onReady
		            }
		            scope.isMount = true
		        }, 'afterChange')

		    }
		})


	/***/ },
	/* 39 */
	/***/ function(module, exports) {

		/*
		 * 
		 节点对齐算法
		 元素节点是1＋其类型
		 文本节点是3＋其是否能移除
		 注释节点是8＋其内容
		 发现不一样，就对真实DOM树添加或删除
		 添加的是 ms-for,ms-for-end占位的注释节点
		 删除的是多余的空白文本节点,与IE6-8私下添加的奇怪节点
		 */
		var rretain = /[\S\xA0]/
		function getType(node) {
		    switch (node.nodeType) {
		        case 3:
		            return '3' + (/[\S\xA0]/.test(node.nodeValue) ? 'retain' : 'remove')
		        case 1:
		            return '1' + (node.nodeName || node.type).toLowerCase()
		        case 8:
		            return '8' + node.nodeValue

		    }

		}


		var rforRange = /^8ms\-for/

		function reconcile(nodes, vnodes, parent) {
		    //遍平化虚拟DOM树
		    vnodes = flatten(vnodes)
		    var map = {}
		    var vn = vnodes.length
		    if (vn === 0)
		        return

		    vnodes.forEach(function (el, index) {
		        map[index] = getType(el)
		    })
		    var newNodes = [], change = false, el, i = 0
		    var breakLoop = 0
		    while (true) {
		        el = nodes[i++]
		        if (breakLoop++ > 5000) {
		            break
		        }
		        var vtype = el && getType(el)
		        var v = newNodes.length
		        if (map[v] === vtype) {
		            newNodes.push(el)
		            var vnode = vnodes[v]

		            if (vnode.dynamic) {
		                vnode.dom = el
		            }

		            if (el.nodeType === 1 && !vnode.isVoidTag && !containers[vnode.type]) {
		                if (el.type === 'select-one') {
		                    //在chrome与firefox下删掉select中的空白节点，会影响到selectedIndex
		                    var fixIndex = el.selectedIndex
		                }
		                reconcile(el.childNodes, vnode.children, el)
		                if (el.type === 'select-one') {
		                    el.selectedIndex = fixIndex
		                }
		            }
		        } else {
		            change = true
		            if (rforRange.test(map[v])) {
		                var vv = vnodes[v]
		                var nn = document.createComment(vv.nodeValue)
		                vv.dom = nn
		                newNodes.push(nn)
		                i = Math.max(0, --i)
		            }
		        }
		        if (newNodes.length === vn) {
		            break
		        }
		    }
		    // console.log(newNodes.length, vnodes.length)
		    if (change) {
		        var f = document.createDocumentFragment(), i = 0
		        while (el = newNodes[i++]) {
		            f.appendChild(el)
		        }
		        while (parent.firstChild) {
		            parent.removeChild(parent.firstChild)
		        }
		        parent.appendChild(f)
		    }
		}
		var containers = avalon.oneObject('script,style,xmp,template,noscript,textarea')
		function flatten(nodes) {
		    var arr = []
		    for (var i = 0, el; el = nodes[i]; i++) {
		        if (Array.isArray(el)) {
		            arr = arr.concat(flatten(el))
		        } else {
		            arr.push(el)
		        }
		    }
		    return arr
		}

		module.exports = reconcile

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		
		var attrUpdate = __webpack_require__(22)
		var update = __webpack_require__(37)

		avalon.directive('attr', {
		    diff: function (copy, src, name) {
		        var a = copy[name]
		        var p = src[name]
		        if (a && typeof a === 'object') {
		            a = a.$model || a //安全的遍历VBscript
		            if (Array.isArray(a)) {//转换成对象
		                a = avalon.mix.apply({}, a)
		            }
		            if (typeof p !== 'object') {//如果一开始为空
		                src.changeAttr = src[name] = a
		            } else {
		                var patch = {}
		                var hasChange = false
		                for (var i in a) {//diff差异点
		                    if (a[i] !== p[i]) {
		                        hasChange = true
		                        patch[i] = a[i]
		                    }
		                }
		                if (hasChange) {
		                    src[name] = a
		                    src.changeAttr = patch
		                }
		            }
		            if (src.changeAttr) {
		                update(src, this.update )
		            }
		        }
		        delete copy[name]//释放内存
		    },
		    //dom, vnode
		    update: attrUpdate
		})


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		
		var update = __webpack_require__(37)

		avalon.directive('css', {
		    diff: function (copy, src, name) {
		        var a = copy[name]
		        var p = src[name]
		        if (Object(a) === a) {
		            
		            a = a.$model || a//安全的遍历VBscript
		            if (Array.isArray(a)) {//转换成对象
		                a = avalon.mix.apply({}, a)
		            }
		            if (typeof p !== 'object') {//如果一开始为空
		                src.changeStyle = src[name] = a
		            } else {
		                var patch = {}
		                var hasChange = false
		                for (var i in a) {//diff差异点
		                    if (a[i] !== p[i]) {
		                        hasChange = true
		                        patch[i] = a[i]
		                    }
		                }
		                if (hasChange) {
		                    src[name] = a
		                    src.changeStyle = patch
		                }
		            }
		            if (src.changeStyle) {
		                update(src, this.update)
		            }
		        }
		        delete copy[name]//释放内存
		    },
		    update: function (dom, vdom) {
		        var change = vdom.changeStyle
		        var wrap = avalon(dom)
		        for (var name in change) {
		            wrap.css(name, change[name])
		        }
		        delete vdom.changeStyle
		    }
		})


	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(37)

		var none = 'none'
		function parseDisplay(elem, val) {
		    //用于取得此类标签的默认display值
		    var doc = elem.ownerDocument
		    var nodeName = elem.nodeName
		    var key = '_' + nodeName
		    if (!parseDisplay[key]) {
		        var temp = doc.body.appendChild(doc.createElement(nodeName))
		        if (avalon.modern) {
		            val = getComputedStyle(temp, null).display
		        } else {
		            val = temp.currentStyle.display
		        }
		        doc.body.removeChild(temp)
		        if (val === none) {
		            val = 'block'
		        }
		        parseDisplay[key] = val
		    }
		    return parseDisplay[key]
		}

		avalon.parseDisplay = parseDisplay

		avalon.directive('visible', {
		    diff: function (copy, src, name) {
		        var c = !!copy[name]
		        if (c !== src[name]) {
		            src[name] = c
		            update(src, this.update )
		        }
		    },
		    update: function (dom, vdom) { 
		        if(!dom || dom.nodeType !== 1){
		            return
		        }
		        var show = vdom['ms-visible']
		        var display = dom.style.display
		        var value
		        if (show) {
		            if (display === none) {
		                value = vdom.displayValue
		                if (!value) {
		                    dom.style.display = ''
		                }
		            }
		            if (dom.style.display === '' && avalon(dom).css('display') === none &&
		                    // fix firefox BUG,必须挂到页面上
		                    avalon.contains(dom.ownerDocument, dom)) {

		                value = parseDisplay(dom)
		            }
		        } else {
		            if (display !== none) {
		                value = none
		                vdom.displayValue = display
		            }
		        }
		        function cb(){
		           if (value !== void 0) {
		              dom.style.display = value
		           }
		        }
		        avalon.applyEffect(dom, vdom, {
		            hook: show ? 'onEnterDone': 'onLeaveDone',
		            cb: cb
		        })
		    }
		})



	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(37)

		avalon.directive('expr', {
		    parse: avalon.noop,
		    diff: function (copy, src) {
		        var copyValue = copy.nodeValue + ''
		        if (copyValue !== src.nodeValue) {
		            src.nodeValue = copyValue
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom) {
		        if (dom) {
		            dom.nodeValue = vdom.nodeValue
		        } else {
		            avalon.warn('[', vdom.nodeValue, ']找到对应的文本节点赋值')
		        }
		    }
		})




	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		//此指令实际上不会操作DOM,交由expr指令处理
		var update = __webpack_require__(37)

		avalon.directive('text', {
		    parse: function (copy, src, binding) {
		        copy[binding.name] = 1
		        src.children = []
		        copy.children = '[{\nnodeType:3,\ntype:"#text",\ndynamic:true,' +
		                '\nnodeValue:avalon.parsers.string(' +
		                avalon.parseExpr(binding) + ')}]'
		    },
		    diff: function (copy, src) {
		        if(!src.children.length){
		           update(src, this.update)
		        }
		    },
		    update: function(dom, vdom){
		        if (dom && !vdom.isVoidTag ) {
		            var parent = dom
		            while (parent.firstChild) {
		                parent.removeChild(parent.firstChild)
		            }
		            var dom = document.createTextNode('x')
		            parent.appendChild(dom)
		            var a = {nodeType: 3, type:'#text', dom: dom}
		            vdom.children.push(a)
		        }
		    }
		})

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(37)
		var parseView = __webpack_require__(46)
		var reconcile = __webpack_require__(39)


		avalon.directive('html', {
		    parse: function (copy, src, binding) {
		        if (!src.isVoidTag) {
		            //将渲染函数的某一部分存起来,渲在c方法中转换为函数
		            copy[binding.name] = avalon.parseExpr(binding)
		            copy.vmodel = '__vmodel__'
		            copy.local = '__local__'
		        } else {
		            copy.children = '[]'
		        }
		    },
		    diff: function (copy, src, name) {
		        var copyValue = copy[name] + ''
		        if (copyValue !== src[name]) {
		            src[name] = copyValue
		            var oldTree = avalon.lexer(copyValue)
		            avalon.speedUp(oldTree)
		            src.children = oldTree
		            var render = avalon.render(oldTree,copy.local)
		            src.render = render
		            var newTree = render(copy.vmodel, copy.local)
		            copy.children = newTree
		            update(src, this.update)
		        } else {
		            var newTree = src.render(copy.vmodel, copy.local)
		            copy.children = newTree
		        }
		    },

		    update: function (dom, vdom, parent) {
		        avalon.clearHTML(dom)
		        var f = avalon.vdomAdaptor(vdom.children)
		        reconcile(f.childNodes, vdom.children, f)
		        dom.appendChild(f)
		    }
		})


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		
		var parseExpr = __webpack_require__(47)
		var extractBindings = __webpack_require__(50)
		var parseDelimiter = __webpack_require__(51)
		var stringify = __webpack_require__(52)
		var config = avalon.config
		var quote = avalon.quote
		var makeHashCode = avalon.makeHashCode
		var r = __webpack_require__(49)
		var rident = r.ident
		var rsp = r.sp

		var rmsFor = /^\s*ms\-for:/
		var rmsForEnd = /^\s*ms\-for\-end:/
		function wrapDelimiter(expr) {
		    return rident.test(expr) ? expr : parseExpr(expr, 'text')
		}

		function add(a) {
		    return 'vnodes.push(' + a + ');'
		}
		function addTag(obj) {
		    return add(stringify(obj))
		}

		function parseNodes(source, inner) {
		    //ms-important， ms-controller ， ms-for 不可复制，省得死循环
		    //ms-important --> ms-controller --> ms-for --> ms-widget --> ms-effect --> ms-if
		    var buffer = inner ? [] : ['\nvar vnodes = [];']

		    for (var i = 0, el; el = source[i++]; ) {
		        var vnode = parseNode(el)
		        if (el.$prepend) {
		            buffer.push(el.$prepend)
		        }
		        var append = el.$append
		        delete el.$append
		        delete el.$prepend
		        if (vnode) {
		            buffer.push(vnode + '\n')
		        }
		        if (append) {
		            buffer.push(append)
		        }
		    }
		    if (!inner) {
		        buffer.push('return vnodes\n')
		    }
		    return buffer.join('\n')
		}



		function parseNode(source) {
		    var directives = avalon.directives
		    if (source.nodeType === 3) {
		        if (config.rexpr.test(source.nodeValue)) {
		            return add(stringifyText(source))
		        } else {
		            return addTag(source)
		        }
		    } else if (source.nodeType === 1) {

		        var copy = {
		            props: {},
		            type: source.type,
		            nodeType: 1
		        }
		        var bindings = extractBindings(copy, source.props)
		        copy.order = bindings.map(function (b) {
		            //将ms-*的值变成函数,并赋给copy.props[ms-*]
		            //如果涉及到修改结构,则在source添加$append,$prepend
		            directives[b.type].parse(copy, source, b)
		            return b.name

		        }).join(',')

		        if (source.isVoidTag) {
		            copy.isVoidTag = true
		        } else {
		            if (!('children' in copy)) {
		                var pChildren = source.children
		                if (pChildren.length) {
		                    copy.children = '(function(){' + parseNodes(pChildren) + '})()'
		                } else {
		                    copy.children = '[]'
		                }
		            }
		        }
		        if (source.skipContent)
		            copy.skipContent = true
		        if (source.skipAttrs)
		            copy.skipAttrs = true

		        return addTag(copy)

		    } else if (source.nodeType === 8) {
		        var nodeValue = source.nodeValue
		        if (rmsFor.test(nodeValue)) {// 处理ms-for指令
		            if (nodeValue.indexOf('ms-for:') !== 0) {
		                avalon.error('ms-for指令前不能有空格')
		            }
		            var copy = {
		                dynamic: 'for',
		                vmodel: '__vmodel__'
		            }
		            for (var i in source) {
		                if (source.hasOwnProperty(i)) {
		                    copy[i] = source[i]
		                }
		            }

		            directives['for'].parse(copy, source, source)

		            return addTag(copy)

		        } else if (rmsForEnd.test(nodeValue)) {
		            if (nodeValue.indexOf('ms-for-end:') !== 0) {
		                avalon.error('ms-for-end指令前不能有空格')
		            }
		            source.$append = addTag({
		                nodeType: 8,
		                type: '#comment',
		                nodeValue: source.signature,
		                key: 'traceKey'
		            }) +
		                    '\n},__local__,vnodes)\n' +
		                    addTag({
		                        nodeType: 8,
		                        type: "#comment",
		                        signature: source.signature,
		                        nodeValue: "ms-for-end:"
		                    }) + '\n'

		            return ''
		        } else if (nodeValue.indexOf('ms-js:') === 0) {//插入JS声明语句
		            var statement = parseExpr(nodeValue.replace('ms-js:', ''), 'js') + '\n'
		            var ret = addTag(source)
		            var match = statement.match(rstatement)
		            if (match && match[1]) {
		                source.$append = (source.$append || '') + statement +
		                        "\n__local__." + match[1] + ' = ' + match[1] + '\n'
		            } else {
		                avalon.warn(nodeValue + ' parse fail!')
		            }
		            return ret
		        } else {
		            return addTag(source)
		        }
		    } else if (Array.isArray(source)) {
		        source.$append = parseNodes(source, true)
		    }
		}
		var rstatement = /^\s*var\s+([$\w]+)\s*\=\s*\S+/

		function stringifyText(el) {
		    var array = parseDelimiter(el.nodeValue)//返回一个数组
		    var nodeValue = ''
		    if (array.length === 1) {
		        nodeValue = wrapDelimiter(array[0].expr)
		    } else {
		        var token = array.map(function (el) {
		            return el.type ? wrapDelimiter(el.expr) : quote(el.expr)
		        }).join(' + ')
		        nodeValue = 'String(' + token + ')'
		    }
		    return '{\ntype: "#text",\nnodeType:3,\ndynamic:true,\nnodeValue: ' + nodeValue + '\n}'
		}

		module.exports = parseNodes


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		

		//缓存求值函数，以便多次利用
		var evaluatorPool = __webpack_require__(48)

		var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g
		var rstring = __webpack_require__(49).string
		var rfill = /\?\?\d+/g
		var brackets = /\(([^)]*)\)/

		var rshortCircuit = /\|\|/g
		var rpipeline = /\|(?=\w)/
		var ruselessSp = /\s*(\.|\|)\s*/g

		var rAt = /(^|[^\w\u00c0-\uFFFF_])(@|##)(?=[$\w])/g
		var rhandleName = /^(?:\@|##)[$\w]+$/i

		var rfilters = /\|.+/g
		var rvar = /((?:\@|\$|\#\#)?\w+)/g

		function collectLocal(str, ret) {
		    var arr = str.replace(rfilters, '').match(rvar)
		    if (arr) {
		        arr.filter(function (el) {
		            if (!/^[@\d\-]/.test(el) &&
		                    el.slice(0, 2) !== '##' &&
		                    el !== '$event' && !avalon.keyMap[el]) {
		                ret[el] = 1
		            }
		        })
		    }
		}

		function extLocal(ret) {
		    var arr = []
		    for (var i in ret) {
		        arr.push('var ' + i + ' = __local__[' + avalon.quote(i) + ']')
		    }
		    return arr
		}

		function parseExpr(str, category) {
		    var binding = {}
		    category = category || 'other'
		    if (typeof str === 'object') {
		        category = str.type
		        binding = str
		        str = binding.expr
		    }
		    if (typeof str !== 'string')
		        return ''
		    var cacheID = str
		    var cacheStr = evaluatorPool.get(category + ':' + cacheID)

		    if (cacheStr) {
		        return cacheStr
		    }

		    var number = 1
		//相同的表达式生成相同的函数
		    var maps = {}
		    function dig(a) {
		        var key = '??' + number++
		        maps[key] = a
		        return key
		    }

		    function fill(a) {
		        return maps[a]
		    }

		    var input = str.replace(rregexp, dig).//移除所有正则
		            replace(rstring, dig).//移除所有字符串
		            replace(rescape, fescape).
		            replace(rshortCircuit, dig).//移除所有短路或
		            replace(ruselessSp, '$1').//移除. |两端空白
		            split(rpipeline) //使用管道符分离所有过滤器及表达式的正体
		    //还原body
		    var _body = input.shift()
		    var local = {}
		    var body = _body.replace(rfill, fill).trim()
		    if (category === 'on' && rhandleName.test(body)) {
		        body = body + '($event)'
		    }

		    body = body.replace(rAt, '$1__vmodel__.')
		    if (category === 'js') {
		        return evaluatorPool.put(category + ':' + cacheID, body)
		    } else if (category === 'on') {
		        collectLocal(_body, local)
		    }

		//处理表达式的过滤器部分

		    var filters = input.map(function (str) {
		        collectLocal(str.replace(/^\w+/g, ""), local)
		        str = str.replace(rfill, fill).replace(rAt, '$1__vmodel__.') //还原
		        var hasBracket = false
		        str = str.replace(brackets, function (a, b) {
		            hasBracket = true
		            return /\S/.test(b) ?
		                    '(__value__,' + b + ');' :
		                    '(__value__);'
		        })
		        if (!hasBracket) {
		            str += '(__value__);'
		        }
		        str = str.replace(/(\w+)/, 'avalon.__format__("$1")')
		        return '__value__ = ' + str
		    })
		    var ret = []
		    if (category === 'on') {
		        filters = filters.map(function (el) {
		            return el.replace(/__value__/g, '$event')
		        })
		        if (filters.length) {
		            filters.push('if($event.$return){\n\treturn;\n}')
		        }
		        if (!avalon.modern) {
		            body = body.replace(/__vmodel__\.([^(]+)\(([^)]*)\)/, function (a, b, c) {
		                return '__vmodel__.' + b + ".call(__vmodel__" + (/\S/.test(c) ? ',' + c : "") + ")"
		            })
		        }

		        ret = ['function ms_on($event, __local__){',
		            'try{',
		            extLocal(local).join('\n'),
		            '\tvar __vmodel__ = this;',
		            '\t' + body,
		            '}catch(e){',
		            quoteError(str, category),
		            '}',
		            '}']
		        filters.unshift(2, 0)
		    } else if (category === 'duplex') {

		//从vm中得到当前属性的值
		        var getterBody = [
		            'function (__vmodel__){',
		            'try{',
		            'return ' + body + '\n',
		            '}catch(e){',
		            quoteError(str, category).replace('parse', 'get'),
		            '}',
		            '}']
		        evaluatorPool.put('duplex:' + cacheID, getterBody.join('\n'))
		        //给vm同步某个属性
		        var setterBody = [
		            'function (__vmodel__,__value__){',
		            'try{',
		            '\t' + body + ' = __value__',
		            '}catch(e){',
		            quoteError(str, category).replace('parse', 'set'),
		            '}',
		            '}']
		        evaluatorPool.put('duplex:set:' + cacheID, setterBody.join('\n'))
		        //对某个值进行格式化
		        if (input.length) {
		            var formatBody = [
		                'function (__vmodel__, __value__){',
		                'try{',
		                filters.join('\n'),
		                'return __value__\n',
		                '}catch(e){',
		                quoteError(str, category).replace('parse', 'format'),
		                '}',
		                '}']
		            evaluatorPool.put('duplex:format:' + cacheID, formatBody.join('\n'))
		        }
		        return  evaluatorPool.get('duplex:' + cacheID)
		    } else {
		        ret = [
		            '(function(){',
		            'try{',
		            'var __value__ = ' + body,
		            (category === 'text' ?
		                    'return avalon.parsers.string(__value__)' :
		                    'return __value__'),
		            '}catch(e){',
		            quoteError(str, category),
		            '\treturn ""',
		            '}',
		            '})()'
		        ]
		        filters.unshift(3, 0)
		    }
		    ret.splice.apply(ret, filters)
		    cacheStr = ret.join('\n')
		    evaluatorPool.put(category + ':' + cacheID, cacheStr)
		    return cacheStr

		}

		function quoteError(str, type) {
		    return '\tavalon.warn(e, ' +
		            avalon.quote('parse ' + type + ' binding【 ' + str + ' 】fail')
		            + ')'
		}

		module.exports = avalon.parseExpr = parseExpr
		var rescape = /&(quot|lt|gt|amp|#\d+);/g
		var rescapeOne = {
		    quot: '"',
		    lt: '<',
		    gt: '>',
		    amp: '&'
		}
		var fescape = function(a, b){
		    if(rescapeOne[b]){
		       return rescapeOne[b]
		    }else{
		       return rescapeOne[b] = String.fromCharCode(parseInt(b.slice(1), 10));
		    }
		}


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		
		var Cache = __webpack_require__(28)
		//缓存求值函数，以便多次利用
		module.exports = new Cache(512)


	/***/ },
	/* 49 */
	/***/ function(module, exports) {

		module.exports = {
		    ident: /^[$a-zA-Z_][$a-zA-Z0-9_]*$/,
		    sp: /^\s+$/, //全部都是空白,
		    leftSp: /^\s+/, //左边空白
		    rightSp: /s+$/, //右边空白,
		    binding: /^ms-(\w+)-?(.*)/, //绑定属性,
		    string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
		}

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var directives = avalon.directives
		var rbinding = __webpack_require__(49).binding
		var eventMap = avalon.oneObject('animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit')

		function extractBindings(cur, props) {
		    var bindings = []
		    var skip = 'ms-skip' in props
		    var uniq = {}
		    for (var i in props) {
		        var value = props[i], match

		        if (!skip && (match = i.match(rbinding))) {
		            var type = match[1]
		            var param = match[2] || ''
		            var name = i
		            if (eventMap[type]) {
		                var order = parseFloat(param) || 0
		                param = type
		                type = 'on'
		            }
		            name = 'ms-' + type + (param ? '-' + param : '')
		            if (i !== name) {
		                delete props[i]
		                props[name] = value
		            }
		            if (directives[type]) {

		                var binding = {
		                    type: type,
		                    param: param,
		                    name: name,
		                    expr: value,
		                    priority: directives[type].priority || type.charCodeAt(0) * 100
		                }
		                if (type === 'on') {
		                    order = order || 0
		                    binding.name += '-' + order
		                    binding.priority += param.charCodeAt(0) * 100 + order
		                }
		                if (!uniq[binding.name]) {
		                    uniq[binding.name] = 1
		                    bindings.push(binding)
		                }
		            }
		        } else {
		            cur.props[i] = props[i]
		        }
		    }
		    bindings.sort(byPriority)

		    return bindings
		}

		function byPriority(a, b) {
		    return a.priority - b.priority
		}

		module.exports = extractBindings


	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var rline = /\r?\n/g
		var r = __webpack_require__(49)
		var config = avalon.config

		function parseDelimiter(str) {
		    var tokens = [],
		            value, start = 0,
		            stop
		    do {
		        stop = str.indexOf(config.openTag, start)
		        if (stop === -1) {
		            break
		        }
		        value = str.slice(start, stop)
		        if (start === 0) {
		            value = value.replace(r.leftSp, '')
		        }
		        if (value) { // {{ 左边的文本
		            tokens.push({
		                expr: value
		            })
		        }
		        start = stop + config.openTag.length
		        stop = str.indexOf(config.closeTag, start)
		        if (stop === -1) {
		            break
		        }
		        value = str.slice(start, stop)
		        if (value) { //处理{{ }}插值表达式
		            tokens.push({
		                expr: value.replace(rline, ''),
		                type: '{{}}'
		            })
		        }
		        start = stop + avalon.config.closeTag.length
		    } while (1)
		    value = str.slice(start)

		    var lastText = value.replace(r.rightSp, '')
		    if (lastText) { //}} 右边的文本
		        tokens.push({
		            expr: lastText.replace(/^\s+$/,' ')
		        })
		    }
		    return tokens
		}

		module.exports = parseDelimiter


	/***/ },
	/* 52 */
	/***/ function(module, exports) {

		var keyMap = avalon.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false," +
		        "finally,for,function,if,in,instanceof,new,null,return,switch,this," +
		        "throw,true,try,typeof,var,void,while,with," + /* 关键字*/
		        "abstract,boolean,byte,char,class,const,double,enum,export,extends," +
		        "final,float,goto,implements,import,int,interface,long,native," +
		        "package,private,protected,public,short,static,super,synchronized," +
		        "throws,transient,volatile")
		avalon.keyMap = keyMap
		  var quoted = {
		      type: 1,
		      template: 1,
		      innerHTML: 1,
		      outerHTML: 1,
		      order: 1,
		      nodeValue: 1,
		      dynamic: 1,
		      signature: 1,
		      wid: 1,
		      cid: 1
		  }

		var rneedQuote = /[W-]/
		var quote = avalon.quote
		function fixKey(k) {
		    return (rneedQuote.test(k) || keyMap[k]) ? quote(k) : k
		}

		function stringify(obj) {
		    var arr1 = []
		//字符不用东西包起来就变成变量
		    for (var i in obj) {
		        if (i === 'props') {
		            var arr2 = []
		            for (var k in obj.props) {
		                var kv = obj.props[k]
		                if (typeof kv === 'string') {
		                    kv = quote(kv)
		                }
		                arr2.push(fixKey(k) + ': ' + kv)
		            }
		            arr1.push('props: {' + arr2.join(',\n') + '}')
		        } else if(obj.hasOwnProperty(i) && i !== 'dom') {
		           
		            var v = obj[i]
		            if (typeof v === 'string') {
		                v = quoted[i] ? quote(v) : v
		            }
		            arr1.push(fixKey(i) + ':' + v)
		        }
		    }
		    return '{\n' + arr1.join(',\n') + '}'
		}

		module.exports = stringify


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		//根据VM的属性值或表达式的值切换类名，ms-class='xxx yyy zzz:flag'
		//http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
		var markID = __webpack_require__(6).getLongID
		var update = __webpack_require__(37)

		function classNames() {
		    var classes = []
		    for (var i = 0; i < arguments.length; i++) {
		        var arg = arguments[i]
		        var argType = typeof arg
		        if (argType === 'string' || argType === 'number' || arg === true) {
		            classes.push(arg)
		        } else if (Array.isArray(arg)) {
		            classes.push(classNames.apply(null, arg))
		        } else if (argType === 'object') {
		            for (var key in arg) {
		                if (arg.hasOwnProperty(key) && arg[key]) {
		                    classes.push(key)
		                }
		            }
		        }
		    }

		    return classes.join(' ')
		}

		var directives = avalon.directives
		avalon.directive('class', {
		    diff: function (copy, src, name) {
		        var type = name.slice(3)
		        var copyValue = copy[name]
		        var srcValue = src[name] || ''

		        if (!src.classEvent) {
		            var classEvent = {}
		            if (type === 'hover') {//在移出移入时切换类名
		                classEvent.mouseenter = activateClass
		                classEvent.mouseleave = abandonClass
		            } else if (type === 'active') {//在获得焦点时切换类名
		                src.props.tabindex = copy.props.tabindex || -1
		                classEvent.tabIndex = src.props.tabindex
		                classEvent.mousedown = activateClass
		                classEvent.mouseup = abandonClass
		                classEvent.mouseleave = abandonClass
		            }
		            src.classEvent = classEvent
		        }

		        var className = classNames(copyValue)
		        var uniq = {}, arr = []
		        className.replace(/\S+/g, function (el) {
		            if (!uniq[el]) {
		                uniq[el] = 1
		                arr.push(el)
		            }
		        })
		        
		        className = arr.join(' ')
		       
		        if (srcValue !== className) {
		            src[name] = className
		            src['change-' + type] = className
		            update(src, this.update, type)
		        }
		    },
		    update: function (dom, vdom) {
		        if (!dom || dom.nodeType !== 1)
		            return
		        var classEvent = vdom.classEvent
		        if (classEvent) {
		            for (var i in classEvent) {
		                if (i === 'tabIndex') {
		                    dom[i] = classEvent[i]
		                } else {
		                    avalon.bind(dom, i, classEvent[i])
		                }
		            }
		            vdom.classEvent = {}
		        }
		        var names = ['class', 'hover', 'active']
		        names.forEach(function (type) {
		            var name = 'change-' + type
		            var value = vdom[name]
		            if (value === void 0)
		                return
		            if (type === 'class') {
		                dom && setClass(dom, vdom)
		            } else {
		                var oldType = dom.getAttribute('change-' + type)
		                if (oldType) {
		                    avalon(dom).removeClass(oldType)
		                }
		                dom.setAttribute(name, value)
		            }
		        })
		    }
		})

		directives.active = directives.hover = directives['class']


		var classMap = {
		    mouseenter: 'change-hover',
		    mouseleave: 'change-hover',
		    mousedown: 'change-active',
		    mouseup: 'change-active'
		}

		function activateClass(e) {
		    var elem = e.target
		    avalon(elem).addClass(elem.getAttribute(classMap[e.type]) || '')
		}

		function abandonClass(e) {
		    var elem = e.target
		    var name = classMap[e.type]
		    avalon(elem).removeClass(elem.getAttribute(name) || '')
		    if (name !== 'change-active') {
		        avalon(elem).removeClass(elem.getAttribute('change-active') || '')
		    }
		}

		function setClass(dom, vdom) {
		    var old = dom.getAttribute('old-change-class')
		    var neo = vdom['ms-class']
		    if (old !== neo) {
		        avalon(dom).removeClass(old).addClass(neo)
		        dom.setAttribute('old-change-class', neo)
		    }

		}

		markID(activateClass)
		markID(abandonClass)




	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		var markID = __webpack_require__(6).getLongID
		var Cache = __webpack_require__(28)
		var eventCache = new Cache(128)
		var quote = avalon.quote
		var update = __webpack_require__(37)

		//Ref: http://developers.whatwg.org/webappapis.html#event-handler-idl-attributes
		// The assumption is that future DOM event attribute names will begin with
		// 'on' and be composed of only English letters.
		var revent = /^ms-on-([a-z]+)/
		var rfilters = /\|.+/g
		var rvar = /((?:\@|\$|\#\#)?\w+)/g
		var rstring = __webpack_require__(49).string
		//基于事件代理的高性能事件绑定
		avalon.directive('on', {
		    priority: 3000,
		    parse: function (copy, src, binding) {
		        var underline = binding.name.replace('ms-on-', 'e').replace('-', '_')
		        var uuid = underline + '_' + binding.expr.
		                replace(/\s/g, '').
		                replace(/[^$a-z]/ig, function (e) {
		                    return e.charCodeAt(0)
		                })

		        var quoted = avalon.quote(uuid)
		        var fn = '(function(){\n' +
		                'var fn610 = ' +
		                avalon.parseExpr(binding, 'on') +
		                '\nfn610.uuid =' + quoted + ';\nreturn fn610})()'
		        copy.vmodel = '__vmodel__'
		        copy.local = '__local__'
		        copy[binding.name] = fn

		    },
		    diff: function (copy, src, name) {
		        var fn = copy[name]
		        var uuid = fn.uuid
		        var type = uuid.split('_').shift()
		        var search = type.slice(1) + ':' + uuid
		        var srcFn = src[name]
		        var hasChange = false
		        if (!srcFn || srcFn.uuid !== uuid) {
		            src[name] = fn
		            src.addEvents = src.addEvents || {}
		            src.addEvents[search] = fn
		            avalon.eventListeners.uuid = fn
		            hasChange = true
		        }
		        if (diffObj(src.local|| {}, copy.local)) {
		            hasChange = true
		        }
		        if (hasChange) {
		            src.local = copy.local
		            src.vmodel = copy.vmodel
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom) {
		        if (!dom || dom.nodeType > 1) //在循环绑定中，这里为null
		            return
		        var key, type, listener
		        dom._ms_context_ = vdom.vmodel
		        dom._ms_local = vdom.local
		        for (key in vdom.addEvents) {
		            type = key.split(':').shift()
		            listener = vdom.addEvents[key]
		            avalon.bind(dom, type, listener)
		        }
		        delete vdom.addEvents
		    }
		})

		function diffObj(a, b) {
		    for (var i in a) {//diff差异点
		        if (a[i] !== b[i]) {
		            return true
		        }
		    }
		    return false
		}

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		
		var update = __webpack_require__(37)
		var evaluatorPool = __webpack_require__(48)
		var stringify = __webpack_require__(52)

		var rchangeFilter = /\|\s*change\b/
		var rcheckedType = /^(?:checkbox|radio)$/
		var rdebounceFilter = /\|\s*debounce(?:\(([^)]+)\))?/
		var updateModelByEvent = __webpack_require__(56)
		var updateModelByValue = __webpack_require__(59)
		var updateModel = __webpack_require__(57)
		var updateView = __webpack_require__(60)
		var addValidateField = __webpack_require__(61)


		avalon.directive('duplex', {
		    priority: 2000,
		    parse: function (copy, src, binding) {
		        var expr = binding.expr
		        var etype = src.props.type
		        //处理数据转换器
		        var parser = binding.param, dtype
		        var isChecked = false
		        parser = parser ? parser.split('-').map(function (a) {
		            if (a === 'checked') {
		                isChecked = true
		            }
		            return a
		        }) : []

		        if (rcheckedType.test(etype) && isChecked) {
		            //如果是radio, checkbox,判定用户使用了checked格式函数没有
		            parser = []
		            dtype = 'radio'
		        }

		        if (!/input|textarea|select/.test(src.type)) {
		            if ('contenteditable' in src.props) {
		                dtype = 'contenteditable'
		            }
		        } else if (!dtype) {
		            dtype = src.type === 'select' ? 'select' :
		                    etype === 'checkbox' ? 'checkbox' :
		                    etype === 'radio' ? 'radio' :
		                    'input'
		        }
		        var isChanged = false, debounceTime = 0
		        //判定是否使用了 change debounce 过滤器
		        if (dtype === 'input' || dtype === 'contenteditable') {
		            var isString = true
		            if (rchangeFilter.test(expr)) {
		                isChanged = true
		            }
		            if (!isChanged) {
		                var match = expr.match(rdebounceFilter)
		                if (match) {
		                    debounceTime = parseInt(match[1], 10) || 300
		                }
		            }
		        }


		        var changed = copy.props['data-duplex-changed']
		        copy.parser = avalon.quote(parser + "")
		        copy.modelValue = '(' + avalon.parseExpr(binding, 'duplex') + ')(__vmodel__)'// 输出原始数据
		        var format = evaluatorPool.get('duplex:format:' + expr)

		        copy.duplexData = stringify({
		            type: dtype, //这个决定绑定什么事件
		            vmodel: '__vmodel__',
		            isChecked: isChecked,
		            isString: !!isString,
		            isChanged: isChanged, //这个决定同步的频数
		            debounceTime: debounceTime, //这个决定同步的频数
		            format: format || 'function(vm, a){return a}',
		            set: evaluatorPool.get('duplex:set:' + expr),
		            callback: changed ? avalon.parseExpr(changed, 'on') : 'avalon.noop'
		        })

		    },
		    diff: function (copy, src) {

		        if (!src.duplexData) {
		            //第一次为原始虚拟DOM添加duplexData
		            var data = src.duplexData = copy.duplexData
		            data.parser = copy.parser ? copy.parser.split(',') : []
		            data.parse = parseValue
		            var curValue = copy.modelValue
		        } else {
		            data = src.duplexData
		            var curValue = copy.modelValue
		            var preValue = data.modelValue
		            //#1502
		            if (!Array.isArray(curValue) &&
		                    curValue === preValue) {
		                return
		            }
		        }
		        copy.duplexData = 0
		        if (data.isString) {//输出到页面时要格式化
		            var value = data.parse(curValue)
		            if (value !== curValue) {
		                data.set(data.vmodel, value)
		                return
		            }
		            curValue = value
		        }
		        data.modelValue = curValue
		        if (data.isString) {//输出到页面时要格式化
		            value = data.format(data.vmodel, curValue + '')
		            if (value !== curValue + '') {
		                data.set(data.vmodel, value)
		                return
		            }
		            curValue = value
		        }
		        data.viewValue = curValue
		        update(src, this.update, 'afterChange')
		    },
		    update: function (dom, vdom) {
		        if (dom && dom.nodeType === 1) {
		            if (!dom.__ms_duplex__) {
		                dom.__ms_duplex__ = vdom.duplexData
		                updateModelByEvent(dom, vdom)
		            }
		            var data = dom.__ms_duplex__

		            data.dom = dom
		            addValidateField(dom, vdom)
		            if (data.isString
		                    && !avalon.msie
		                    && updateModelByValue === false
		                    && !dom.valueHijack) {
		                //chrome 42及以下版本需要这个hack

		                dom.valueHijack = updateModel
		                var intervalID = setInterval(function () {
		                    if (!avalon.contains(avalon.root, dom)) {
		                        clearInterval(intervalID)
		                    } else {
		                        dom.valueHijack()
		                    }
		                }, 30)
		            }

		            updateView[data.type].call(data)


		        }

		    }
		})

		function parseValue(val) {
		    for (var i = 0, k; k = this.parser[i++]; ) {
		        var fn = avalon.parsers[k]
		        if (fn) {
		            val = fn.call(this, val)
		        }
		    }
		    return val
		}

		/*
		 vm[ms-duplex]  →  原始modelValue →  格式化后比较   →   输出页面
		 ↑                                                ↓
		 比较modelValue  ←  parsed后得到modelValue  ← 格式化后比较 ←  原始viewValue
		 */

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		/* 
		 * 通过绑定事件同步vmodel
		 * 总共有三种方式同步视图
		 * 1. 各种事件 input, change, click, propertychange, keydown...
		 * 2. value属性重写
		 * 3. 定时器轮询
		 */
		var updateModel = __webpack_require__(57)
		var markID = __webpack_require__(6).getShortID
		var msie = avalon.msie
		var window = avalon.window
		var document = avalon.document
		function updateModelByEvent(node, vnode) {
		    var events = {}
		    var data = vnode.duplexData
		    data.update = updateModel
		    //添加需要监听的事件
		    switch (data.type) {
		        case 'radio':
		        case 'checkbox':
		            events.click = updateModel
		            break
		        case 'select':
		            events.change = updateModel
		            break
		        case 'contenteditable':
		            if (data.isChanged) {
		                events.blur = updateModel
		            } else {
		                if (avalon.modern) {
		                    if (window.webkitURL) {
		                        // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
		                        // https://bugs.webkit.org/show_bug.cgi?id=110742
		                        events.webkitEditableContentChanged = updateModel
		                    } else if (window.MutationEvent) {
		                        events.DOMCharacterDataModified = updateModel
		                    }
		                    events.input = updateModel
		                } else {
		                    events.keydown = updateModelKeyDown
		                    events.paste = updateModelDelay
		                    events.cut = updateModelDelay
		                    events.focus = closeComposition
		                    events.blur = openComposition
		                }

		            }
		            break
		        case 'input':
		            if (data.isChanged) {
		                events.change = updateModel
		            } else {
		                //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
		                //http://www.matts411.com/post/internet-explorer-9-oninput/
		                if (msie) {//处理输入法问题
		                    events.keyup = updateModelKeyDown
		                }

		                if (msie < 9) {
		                    events.propertychange = updateModelHack
		                    events.paste = updateModelDelay
		                    events.cut = updateModelDelay
		                } else {
		                    events.input = updateModel
		                }
		                //IE6-8的propertychange有BUG,第一次用JS修改值时不会触发,而且你是全部清空value也不会触发
		                //IE9的propertychange不支持自动完成,退格,删除,复制,贴粘,剪切或点击右边的小X的清空操作
		                //IE11微软拼音好像才会触发compositionstart 不会触发compositionend
		                //https://github.com/RubyLouvre/avalon/issues/1368#issuecomment-220503284
		                if(!msie || msie > 9){
		                    events.compositionstart = openComposition
		                    events.compositionend = closeComposition
		                }
		                if (!msie) {

		                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
		                    //如果当前浏览器支持Int8Array,那么我们就不需要以下这些事件来打补丁了
		                    if (!/\[native code\]/.test(window.Int8Array)) {
		                        events.keydown = updateModelKeyDown //safari < 5 opera < 11
		                        events.paste = updateModelDelay//safari < 5
		                        events.cut = updateModelDelay//safari < 5 
		                        if (window.netscape) {
		                            // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
		                            events.DOMAutoComplete = updateModel
		                        }
		                    }
		                }
		            }
		            break
		    }

		    if (/password|text/.test(vnode.props.type)) {
		        events.focus = openCaret //判定是否使用光标修正功能 
		        events.blur = closeCaret
		        data.getCaret = getCaret
		        data.setCaret = setCaret
		    }

		    for (var name in events) {
		        avalon.bind(node, name, events[name])
		    }
		}


		function updateModelHack(e) {
		    if (e.propertyName === 'value') {
		        updateModel.call(this, e)
		    }
		}

		function updateModelDelay(e) {
		    var elem = this
		    setTimeout(function () {
		        updateModel.call(elem, e)
		    }, 0)
		}


		function openCaret() {
		    this.caret = true
		}

		function closeCaret() {
		    this.caret = false
		}
		function openComposition() {
		    this.composing = true
		}

		function closeComposition(e) {
		    this.composing = false
		    updateModelDelay.call(this, e)
		}

		function updateModelKeyDown(e) {
		    var key = e.keyCode
		    // ignore
		    //    command            modifiers                   arrows
		    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
		        return
		    updateModel.call(this, e)
		}

		markID(openCaret)
		markID(closeCaret)
		markID(openComposition)
		markID(closeComposition)
		markID(updateModel)
		markID(updateModelHack)
		markID(updateModelDelay)
		markID(updateModelKeyDown)

		//IE6-8要处理光标时需要异步
		var mayBeAsync = function (fn) {
		    setTimeout(fn, 0)
		}
		var setCaret = function (target, cursorPosition) {
		    var range
		    if (target.createTextRange) {
		        mayBeAsync(function () {
		            target.focus()
		            range = target.createTextRange()
		            range.collapse(true)
		            range.moveEnd('character', cursorPosition)
		            range.moveStart('character', cursorPosition)
		            range.select()
		        })
		    } else {
		        target.focus()
		        if (target.selectionStart !== undefined) {
		            target.setSelectionRange(cursorPosition, cursorPosition)
		        }
		    }
		}

		var getCaret = function (target) {
		    var start = 0
		    var normalizedValue
		    var range
		    var textInputRange
		    var len
		    var endRange

		    if (typeof target.selectionStart == "number" && typeof target.selectionEnd == "number") {
		        start = target.selectionStart
		    } else {
		        range = document.selection.createRange()

		        if (range && range.parentElement() == target) {
		            len = target.value.length
		            normalizedValue = target.value.replace(/\r\n/g, "\n")

		            textInputRange = target.createTextRange()
		            textInputRange.moveToBookmark(range.getBookmark())

		            endRange = target.createTextRange()
		            endRange.collapse(false)

		            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
		                start = len
		            } else {
		                start = -textInputRange.moveStart("character", -len)
		                start += normalizedValue.slice(0, start).split("\n").length - 1
		            }
		        }
		    }

		    return start
		}

		module.exports = updateModelByEvent

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		var updateModelMethods = __webpack_require__(58)

		function updateModelHandle(e) {
		    var elem = this
		    var field = this.__ms_duplex__
		    if (elem.composing || elem.value === field.lastViewValue){
		        //防止onpropertychange引发爆栈
		        return
		    }
		   if (elem.caret) {
		        try {
		            var pos = field.getCaret(elem)
		            field.pos = pos
		        } catch (e) {
		            avalon.warn('fixCaret error', e)
		        }
		    }
		    if (field.debounceTime > 4) {
		        var timestamp = new Date()
		        var left = timestamp - field.time || 0
		        field.time = timestamp
		        if (left >= field.debounceTime) {
		            updateModelMethods[field.type].call(field)
		        } else {
		            clearTimeout(field.debounceID)
		            field.debounceID = setTimeout(function () {
		                updateModelMethods[field.type].call(field)
		            }, left)
		        }
		    } else {
		        updateModelMethods[field.type].call(field)
		    }
		}

		module.exports = updateModelHandle

	/***/ },
	/* 58 */
	/***/ function(module, exports) {

		var updateModelMethods = {
		    input: function (prop) {//处理单个value值处理
		        var data = this
		        prop = prop || 'value'
		        var dom = data.dom
		        var rawValue = dom[prop]
		      
		        var parsedValue = data.parse(rawValue)
		        var formatedValue = data.format(data.vmodel, parsedValue)
		        data.lastViewValue = formatedValue
		        //有时候parse后一致,vm不会改变,但input里面的值
		        if (parsedValue !== data.modelValue) {
		            data.set(data.vmodel, parsedValue)
		            callback(data)
		        }
		       
		        dom[prop] = formatedValue
		      
		        var pos = data.pos
		        if (dom.caret ) {
		            data.setCaret(dom, pos)
		         }
		        //vm.aaa = '1234567890'
		        //处理 <input ms-duplex='@aaa|limitBy(8)'/>{{@aaa}} 这种格式化同步不一致的情况 

		    },
		    radio: function () {
		        var data = this
		        if (data.isChecked) {
		            var val = !data.modelValue
		            data.set(data.vmodel, val)
		            callback(data)
		        } else {
		            updateModelMethods.input.call(data)
		            data.lastViewValue = NaN
		        }
		    },
		    checkbox: function () {
		        var data = this
		        var array = data.modelValue
		        if (!Array.isArray(array)) {
		            avalon.warn('ms-duplex应用于checkbox上要对应一个数组')
		            array = [array]
		        }
		        var method = data.dom.checked ? 'ensure' : 'remove'
		        
		        if (array[method]) {
		            var val = data.parse(data.dom.value)
		            array[method](val)
		            callback(data)
		        }

		    },
		    select: function () {
		        var data = this
		        var val = avalon(data.dom).val() //字符串或字符串数组
		        if (val + '' !== this.modelValue + '') {
		            if (Array.isArray(val)) { //转换布尔数组或其他
		                val = val.map(function (v) {
		                    return data.parse(v)
		                })
		            } else {
		                val = data.parse(val)
		            }
		            data.set(data.vmodel, val)
		            callback(data)
		        }
		    },
		    contenteditable: function () {
		        updateModelMethods.input.call(this, 'innerHTML')
		    }
		}

		function callback(data) {
		    if (data.callback) {
		        data.callback.call(data.vmodel, {
		            type: 'changed',
		            target: data.dom
		        })
		    }
		}



		module.exports = updateModelMethods


	/***/ },
	/* 59 */
	/***/ function(module, exports) {

		var valueHijack = false
		try { //#272 IE9-IE11, firefox
		    var setters = {}
		    var aproto = HTMLInputElement.prototype
		    var bproto = HTMLTextAreaElement.prototype
		    function newSetter(value) { // jshint ignore:line
		        setters[this.tagName].call(this, value)
		        if (!this.caret && this._ms_field_) {
		            this._ms_field_.update.call(this)
		        }
		    }
		    var inputProto = HTMLInputElement.prototype
		    Object.getOwnPropertyNames(inputProto) //故意引发IE6-8等浏览器报错
		    setters['INPUT'] = Object.getOwnPropertyDescriptor(aproto, 'value').set

		    Object.defineProperty(aproto, 'value', {
		        set: newSetter
		    })
		    setters['TEXTAREA'] = Object.getOwnPropertyDescriptor(bproto, 'value').set
		    Object.defineProperty(bproto, 'value', {
		        set: newSetter
		    })
		    valueHijack = true
		} catch (e) {
		    //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
		    // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
		    // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
		}
		module.exports = valueHijack

	/***/ },
	/* 60 */
	/***/ function(module, exports) {

		
		var updateView = {
		    input: function () {//处理单个value值处理
		        this.dom.value = this.viewValue
		    },
		    radio: function () {//处理单个checked属性
		        var checked
		        if (this.isChecked) {
		            checked = !!this.modelValue
		        } else {
		            checked = this.viewValue + '' === this.dom.value
		        }
		        var dom = this.dom
		        if (avalon.msie === 6) {
		            setTimeout(function () {
		                //IE8 checkbox, radio是使用defaultChecked控制选中状态，
		                //并且要先设置defaultChecked后设置checked
		                //并且必须设置延迟
		                dom.defaultChecked = checked
		                dom.checked = checked
		            }, 31)
		        } else {
		            dom.checked = checked
		        }
		    },
		    checkbox: function () {//处理多个checked属性
		        var checked = false
		        var dom = this.dom
		        var value = dom.value
		        for (var i = 0; i < this.modelValue.length; i++) {
		            var el = this.modelValue[i]
		            if (el + '' === value) {
		                checked = true
		            }
		        }
		        dom.checked = checked
		    },
		    select: function () {//处理子级的selected属性
		        var a = Array.isArray(this.viewValue) ?
		                this.viewValue.map(String) : this.viewValue + ''
		        avalon(this.dom).val(a)
		    },
		    contenteditable: function () {//处理单个innerHTML
		        this.dom.innerHTML = this.viewValue
		        this.update.call(this.dom)
		    }
		}

		module.exports = updateView


	/***/ },
	/* 61 */
	/***/ function(module, exports) {

		
		module.exports = function addField(node, vnode) {
		    var field = node.__ms_duplex__
		    var rules = vnode['ms-rules']
		    if (rules && !field.validator) {
		        while (node && node.nodeType === 1) {
		            var validator = node._ms_validator_
		            if (validator) {
		                field.rules = rules
		                field.validator = validator
		                if(avalon.Array.ensure(validator.fields, field)){
		                    validator.addField(field)
		                }
		                break
		            }
		            node = node.parentNode
		        }
		    }
		}


	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(37)

		var dir = avalon.directive('validate', {
		//验证单个表单元素
		    diff: function (copy, src, name) {
		        var validator = copy[name]
		        var p = src[name]
		        if (p && p.onError && p.addField) {
		            return
		        } else if (Object(validator) === validator) {
		            src.vmValidator = validator
		            if (validator.$id) {//转换为普通对象
		                validator = validator.$model
		            }
		           
		            src[name] = validator
		            for (var name in dir.defaults) {
		                if (!validator.hasOwnProperty(name)) {
		                    validator[name] = dir.defaults[name]
		                }
		            }
		            validator.fields = validator.fields || []
		            update(src, this.update)

		        }
		    },
		    update: function (dom, vdom) {
		        var validator = vdom['ms-validate']
		        dom._ms_validator_ = validator
		        validator.dom = dom
		        var v = vdom.vmValidator 
		        try{
		           v.onManual = onManual
		        }catch(e){}
		        delete vdom.vmValidator 
		        dom.setAttribute("novalidate", "novalidate")
		        function onManual() {
		            dir.validateAll.call(validator, validator.onValidateAll)
		        }
		        if (validator.validateAllInSubmit) {
		            avalon.bind(dom, "submit", function (e) {
		                e.preventDefault()
		                onManual()
		            })
		        }
		       
		        if (typeof validator.onInit === "function") { //vmodels是不包括vmodel的
		            validator.onInit.call(dom, {
		                type: 'init',
		                target: dom,
		                validator: validator
		            })
		        }
		    },
		    validateAll: function (callback) {
		        var validator = this
		        var fn = typeof callback === "function" ? callback : validator.onValidateAll
		        var promise = validator.fields.filter(function (field) {
		            var el = field.dom
		            return el && !el.disabled && validator.dom.contains(el)
		        }).map(function (field) {
		            return dir.validate(field, true)
		        })
		        var reasons = []
		        Promise.all(promise).then(function (array) {
		            for (var i = 0, el; el = array[i++]; ) {
		                reasons = reasons.concat(el)
		            }
		            if (validator.deduplicateInValidateAll) {
		                var uniq = {}
		                reasons = reasons.filter(function (field) {
		                    var el = field.dom
		                    var uuid = el.uniqueID || (el.uniqueID = setTimeout("1"))
		                    if (uniq[uuid]) {
		                        return false
		                    } else {
		                        uniq[uuid] = true
		                        return true
		                    }
		                })
		            }
		            fn.call(validator.dom, reasons) //这里只放置未通过验证的组件
		        })
		    },
		    addField: function (field) {
		        var validator = this
		        var node = field.dom
		        if (validator.validateInKeyup && (!field.isChanged && !field.debounceTime)) {
		            avalon.bind(node, 'keyup', function (e) {
		                dir.validate(field, 0, e)
		            })
		        }
		        if (validator.validateInBlur) {
		            avalon.bind(node, 'blur', function (e) {
		                dir.validate(field, 0, e)
		            })
		        }
		        if (validator.resetInFocus) {
		            avalon.bind(node, 'focus', function (e) {
		                validator.onReset.call(node, e, field)
		            })
		        }
		    },
		    validate: function (field, isValidateAll, event) {
		        var promises = []
		        var value = field.modelValue
		        var elem = field.dom
		        var validator = field.validator
		        if (elem.disabled)
		            return
		        for (var ruleName in field.rules) {
		            var ruleValue = field.rules[ruleName]
		            if (ruleValue === false)
		                continue
		            var hook = avalon.validators[ruleName]
		            var resolve, reject
		            promises.push(new Promise(function (a, b) {
		                resolve = a
		                reject = b
		            }))
		            var next = function (a) {
		                if (field.norequired && value === "") {
		                    a = true
		                }
		                if (a) {
		                    resolve(true)
		                } else {
		                    var reason = {
		                        element: elem,
		                        data: field.data,
		                        message: elem.getAttribute("data-" + ruleName + "-message") || elem.getAttribute("data-message") || hook.message,
		                        validateRule: ruleName,
		                        getMessage: getMessage
		                    }
		                    resolve(reason)
		                }
		            }
		            field.data = {}
		            field.data[ruleName] = ruleValue
		            hook.get(value, field, next)
		        }
		        var reasons = []
		        //如果promises不为空，说明经过验证拦截器
		        var lastPromise = Promise.all(promises).then(function (array) {
		            for (var i = 0, el; el = array[i++]; ) {
		                if (typeof el === "object") {
		                    reasons.push(el)
		                }
		            }
		            if (!isValidateAll) {
		                if (reasons.length) {
		                    validator.onError.call(elem, reasons, event)
		                } else {
		                    validator.onSuccess.call(elem, reasons, event)
		                }
		                validator.onComplete.call(elem, reasons, event)
		            }
		            return reasons
		        })
		        return lastPromise
		    }
		})

		var rformat = /\\?{{([^{}]+)\}}/gm

		function getMessage() {
		    var data = this.data || {}
		    return this.message.replace(rformat, function (_, name) {
		        return data[name] == null ? "" : data[name]
		    })
		}
		dir.defaults = {
		    addField: dir.addField,//供内部使用,收集此元素底下的所有ms-duplex的域对象
		    onError: avalon.noop,
		    onSuccess: avalon.noop,
		    onComplete: avalon.noop,
		    onManual: avalon.noop,
		    onReset: avalon.noop,
		    onValidateAll: avalon.noop,
		    validateInBlur: true, //@config {Boolean} true，在blur事件中进行验证,触发onSuccess, onError, onComplete回调
		    validateInKeyup: true, //@config {Boolean} true，在keyup事件中进行验证,触发onSuccess, onError, onComplete回调
		    validateAllInSubmit: true, //@config {Boolean} true，在submit事件中执行onValidateAll回调
		    resetInFocus: true, //@config {Boolean} true，在focus事件中执行onReset回调,
		    deduplicateInValidateAll: false //@config {Boolean} false，在validateAll回调中对reason数组根据元素节点进行去重
		}

	/***/ },
	/* 63 */
	/***/ function(module, exports) {

		avalon.directive('rules', {
		     parse: function (copy, src, binding) {
		        var rules = binding.expr
		        if (/{.+}/.test(rules)) {
		           copy[binding.name] = avalon.parseExpr(binding)
		        }
		    },
		    diff: function(copy, src, name){
		        src[name] = copy[name]
		    }
		})
		function isRegExp(value) {
		    return avalon.type(value) === 'regexp'
		}
		var rmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i
		var rurl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
		function isCorrectDate(value) {
		    if (typeof value === "string" && value) { //是字符串但不能是空字符
		        var arr = value.split("-") //可以被-切成3份，并且第1个是4个字符
		        if (arr.length === 3 && arr[0].length === 4) {
		            var year = ~~arr[0] //全部转换为非负整数
		            var month = ~~arr[1] - 1
		            var date = ~~arr[2]
		            var d = new Date(year, month, date)
		            return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date
		        }
		    }
		    return false
		}
		avalon.shadowCopy(avalon.validators, {
		    pattern: {
		        message: '必须匹配{{pattern}}这样的格式',
		        get: function (value, field, next) {
		            var elem = field.element
		            var data = field.data
		            if (!isRegExp(data.pattern)) {
		                var h5pattern = elem.getAttribute("pattern")
		                data.pattern = new RegExp('^(?:' + h5pattern + ')$')
		            }
		            next(data.pattern.test(value))
		            return value
		        }
		    },
		    digits: {
		        message: '必须整数',
		        get: function (value, field, next) {//整数
		            next(/^\-?\d+$/.test(value))
		            return value
		        }
		    },
		    number: {
		        message: '必须数字',
		        get: function (value, field, next) {//数值
		            next(isFinite(value))
		            return value
		        }
		    },
		    required: {
		        message: '必须填写',
		        get: function (value, field, next) {
		            next(value !== "")
		            return value
		        }
		    },
		    equalto: {
		        message: '密码输入不一致',
		        get: function (value, field, next) {
		            var id = String(field.data.equalto)
		            var other = avalon(document.getElementById(id)).val() || ""
		            next(value === other)
		            return value
		        }
		    },
		    date: {
		        message: '日期格式不正确',
		        get: function (value, field, next) {
		            var data = field.data
		            if (avalon.type(data.date) === 'regexp') {
		                next(data.date.test(value))
		            } else {
		                next(isCorrectDate(value))
		            }
		            return value
		        }
		    },
		    url: {
		        message: 'URL格式不正确',
		        get: function (value, field, next) {
		            next(rurl.test(value))
		            return value
		        }
		    },
		    email: {
		        message: 'email格式不正确',
		        get: function (value, field, next) {
		            next(rmail.test(value))
		            return value
		        }
		    },
		    minlength: {
		        message: '最少输入{{minlength}}个字',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.minlength, 10)
		            next(value.length >= num)
		            return value
		        }
		    },
		    maxlength: {
		        message: '最多输入{{maxlength}}个字',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.maxlength, 10)
		            next(value.length <= num)
		            return value
		        }
		    },
		    min: {
		        message: '输入值不能小于{{min}}',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.min, 10)
		            next(parseFloat(value) >= num)
		            return value
		        }
		    },
		    max: {
		        message: '输入值不能大于{{max}}',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.max, 10)
		            next(parseFloat(value) <= num)
		            return value
		        }
		    },
		    chs: {
		        message: '必须是中文字符',
		        get: function (value, field, next) {
		            next(/^[\u4e00-\u9fa5]+$/.test(value))
		            return value
		        }
		    }
		})

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(37)
		//ms-imporant ms-controller ms-for ms-widget ms-effect ms-if   ...
		avalon.directive('if', {
		    priority: 6,
		    diff: function (copy, src, name) {
		        var c = !!copy[name]
		        if (!c) {
		            copy.nodeType = 8
		            copy.order = ""
		            //不再执行子孙节点的操作
		            copy.skipContent = true
		        }
		        if (c !== src[name]) {
		            src[name] = c
		            if (c && src.nodeType === 1) {
		                return
		            }
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom, parent) {
		        var show = vdom['ms-if']
		        if (show) {
		            //要移除元素节点,在对应位置上插入注释节点
		            //console.log(vdom.nodeType,vdom.dom)
		            vdom.nodeType = 1
		            var comment = vdom.comment
		            parent = comment.parentNode
		            parent.replaceChild(dom, comment)
		            avalon.applyEffect(dom, vdom, {
		                hook: 'onEnterDone'
		            })
		        } else {

		            avalon.applyEffect(dom, vdom, {
		                hook: 'onLeaveDone',
		                cb: function () {
		                    var comment = document.createComment('ms-if')
		                    //去掉注释节点临时添加的ms-effect
		                    parent.replaceChild(comment, dom)
		                    vdom.nodeType = 8
		                    vdom.comment = comment
		                }
		            })
		        }
		    }
		})



	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		var rforPrefix = /ms-for\:\s*/
		var rforLeft = /^\s*\(\s*/
		var rforRight = /\s*\)\s*$/
		var rforSplit = /\s*,\s*/
		var rforAs = /\s+as\s+([$\w]+)/
		var rident = __webpack_require__(49).ident
		var update = __webpack_require__(37)

		var rinvalid = /^(null|undefined|NaN|window|this|\$index|\$id)$/
		var reconcile = __webpack_require__(39)
		var Cache = __webpack_require__(28)
		var cache = new Cache(100)

		function enterAction(src, key) {
		    var tmpl = src.template + '<!--' + src.signature + '-->'
		    var t = cache.get(tmpl)
		    if (!t) {
		        var vdomTemplate = avalon.lexer(tmpl)
		        avalon.speedUp(vdomTemplate)
		        t = cache.put(tmpl, vdomTemplate)
		    }
		    return {
		        action: 'enter',
		        children: avalon.mix(true, [], t),
		        key: key
		    }
		}

		function getTraceKey(item) {
		    var type = typeof item
		    return item && type === 'object' ? item.$hashcode : type + ':' + item
		}
		//IE6-8,function后面没有空格
		var rfunction = /^\s*function\s*\(([^\)]+)\)/
		avalon._each = function (obj, fn, local, vnodes) {
		    var repeat = []
		    vnodes.push(repeat)
		    var str = (fn + "").match(rfunction)
		    var args = str[1]
		    var arr = args.match(avalon.rword)
		    if (Array.isArray(obj)) {
		        for (var i = 0; i < obj.length; i++) {
		            iterator(i, obj[i], local, fn, arr[0], arr[1], repeat, true)
		        }
		    } else {
		        for (var i in obj) {
		            if (obj.hasOwnProperty(i)) {
		                iterator(i, obj[i], local, fn, arr[0], arr[1], repeat)
		            }
		        }
		    }
		}

		function iterator(index, item, vars, fn, k1, k2, repeat, isArray) {
		    var key = isArray ? getTraceKey(item) : index
		    var local = {}
		    local[k1] = index
		    local[k2] = item
		    for (var k in vars) {
		        if (!(k in local)) {
		            local[k] = vars[k]
		        }
		    }
		    fn(index, item, key, local, repeat)
		}


		avalon.directive('for', {
		    priority: 3,
		    parse: function (copy, src, binding) {
		        var str = src.nodeValue, aliasAs
		        str = str.replace(rforAs, function (a, b) {
		            if (!rident.test(b) || rinvalid.test(b)) {
		                avalon.error('alias ' + b + ' is invalid --- must be a valid JS identifier which is not a reserved name.')
		            } else {
		                aliasAs = b
		            }
		            return ''
		        })

		        var arr = str.replace(rforPrefix, '').split(' in ')
		        var assign = 'var loop = ' + avalon.parseExpr(arr[1]) + ' \n'
		        var alias = aliasAs ? 'var ' + aliasAs + ' = loop\n' : ''
		        var kv = arr[0].replace(rforLeft, '').replace(rforRight, '').split(rforSplit)

		        if (kv.length === 1) {//确保avalon._each的回调有三个参数
		            kv.unshift('$key')
		        }
		        kv.push('traceKey')
		        kv.push('__local__')
		        kv.push('vnodes')
		        src.$append = assign + alias + 'avalon._each(loop,function('
		                + kv.join(', ') + '){\n'
		                + (aliasAs ? '__local__[' + avalon.quote(aliasAs) + ']=loop\n' : '')

		    },
		    diff: function (copy, src, curRepeat, preRepeat, end) {
		        //将curRepeat转换成一个个可以比较的component,并求得compareText
		        preRepeat = preRepeat || []
		        //preRepeat不为空时
		        src.preRepeat = preRepeat
		        var curItems = prepareCompare(curRepeat, copy)
		        if (src.compareText === copy.compareText) {
		            //如果个数与key一致,那么说明此数组没有发生排序,立即返回
		            return
		        }
		        if (!src.preItems) {
		            src.preItems = prepareCompare(preRepeat, src)
		        }
		        src.compareText = copy.compareText
		        //for指令只做添加删除操作
		        var cache = src.cache
		        var i, c, p
		        
		         function enterAction2(src, key) {//IE6-8下不能使用缓存
		                var template = src.template + '<!--' + src.signature + '-->'
		                var vdomTemplate = avalon.lexer(template)
		                avalon.speedUp(vdomTemplate)
		            return {
		                action: 'enter',
		                children: vdomTemplate,
		                key: key
		            }
		        }
		        if(avalon.msie <= 8){
		            enterAction = enterAction2
		        }

		        if (!cache || isEmptyObject(cache)) {
		            /* eslint-disable no-cond-assign */
		            var cache = src.cache = {}
		            src.preItems.length = 0
		            for (i = 0; c = curItems[i]; i++) {
		                var p = enterAction(src, c.key)
		                src.preItems.push(p)
		                p.action = 'enter'
		                p.index = i
		                saveInCache(cache, p)
		            }
		            src.removes = []
		            /* eslint-enable no-cond-assign */
		        } else {
		            var newCache = {}
		            /* eslint-disable no-cond-assign */
		            var fuzzy = []
		            for (i = 0; c = curItems[i++]; ) {
		                var p = isInCache(cache, c.key)
		                if (p) {
		                    p.action = 'move'
		                    p.oldIndex = p.index
		                    p.index = c.index
		                    saveInCache(newCache, p)
		                } else {
		                    //如果找不到就进行模糊搜索
		                    fuzzy.push(c)
		                }

		            }
		            for (var i = 0, c; c = fuzzy[i++]; ) {
		                p = fuzzyMatchCache(cache, c.key)
		                if (p) {
		                    p.action = 'move'
		                    // clearData(p.children)
		                    p.oldIndex = p.index

		                    p.index = c.index
		                } else {
		                    p = enterAction(src, c.key)
		                    p.index = c.index
		                    src.preItems.push(p)
		                }
		                saveInCache(newCache, p)
		            }
		            src.preItems.sort(function (a, b) {
		                return a.index - b.index
		            })

		            /* eslint-enable no-cond-assign */
		            src.cache = newCache
		            var removes = []

		            for (var i in cache) {
		                p = cache[i]
		                p.action = 'leave'
		                removes.push(p)
		                if (p.arr) {
		                    p.arr.forEach(function (m) {
		                        m.action = 'leave'
		                        removes.push(m)
		                    })
		                    delete p.arr
		                }
		            }
		            src.removes = removes
		        }

		        var cb = avalon.caches[src.cid]
		        var vm = copy.vmodel
		        if (end && cb) {
		            end.afterChange = [function (dom) {
		                    cb.call(vm, {
		                        type: 'rendered',
		                        target: dom,
		                        signature: src.signature
		                    })
		                }]
		        }

		        update(src, this.update)
		        return true

		    },
		    update: function (dom, vdom, parent) {
		        var key = vdom.signature
		        var range = getEndRepeat(dom)
		        var doms = range.slice(1, -1)
		        var endRepeat = range.pop()
		        var DOMs = splitDOMs(doms, key)
		        var check = doms[doms.length - 1]
		        if (check && check.nodeValue !== key) {
		            do {//去掉最初位于循环节点中的内容
		                var prev = endRepeat.previousSibling
		                if (prev === dom || prev.nodeValue === key) {
		                    break
		                }
		                if (prev) {
		                    parent.removeChild(prev)
		                } else {
		                    break
		                }
		            } while (true);
		        }
		        for (var i = 0, el; el = vdom.removes[i++]; ) {
		            var removeNodes = DOMs[el.index]
		            if (removeNodes) {
		                removeNodes.forEach(function (n, k) {
		                    if (n.parentNode) {
		                        avalon.applyEffect(n, el.children[k], {
		                            hook: 'onLeaveDone',
		                            cb: function () {
		                                n.parentNode.removeChild(n)
		                            },
		                            staggerKey: key + 'leave'
		                        })
		                    }
		                })
		                el.children.length = 0
		            }
		        }
		        vdom.removes = []
		        var insertPoint = dom
		        var fragment = avalon.avalonFragment
		        var domTemplate
		        var keep = []
		        for (var i = 0; i < vdom.preItems.length; i++) {
		            var com = vdom.preItems[i]
		            var children = com.children
		            if (com.action === 'leave') {
		                continue
		            }
		            keep.push(com)
		            if (com.action === 'enter') {
		                if (!domTemplate) {
		                    //创建用于拷贝的数据,包括虚拟DOM与真实DOM 
		                    domTemplate = avalon.vdomAdaptor(children, 'toDOM')
		                }
		                var newFragment = domTemplate.cloneNode(true)
		                var cnodes = avalon.slice(newFragment.childNodes)
		                reconcile(cnodes, children, parent)//关联新的虚拟DOM与真实DOM
		                parent.insertBefore(newFragment, insertPoint.nextSibling)
		                applyEffects(cnodes, children, {
		                    hook: 'onEnterDone',
		                    staggerKey: key + 'enter'
		                })
		            } else if (com.action === 'move') {

		                var cnodes = DOMs[com.oldIndex] || []
		                if (com.index !== com.oldIndex) {
		                    var moveFragment = fragment.cloneNode(false)
		                    for (var k = 0, cc; cc = cnodes[k++]; ) {
		                        moveFragment.appendChild(cc)
		                    }
		                    parent.insertBefore(moveFragment, insertPoint.nextSibling)
		                   // reconcile(cnodes, children, parent)
		                    applyEffects(cnodes, children, {
		                        hook: 'onMoveDone',
		                        staggerKey: key + 'move'
		                    })
		                }
		            }

		            insertPoint = cnodes[cnodes.length - 1]

		            if (!insertPoint) {
		                break
		            }
		        }
		        
		        vdom.preRepeat.length = 0
		        vdom.preItems.length = 0
		        keep.forEach(function (el) {
		            vdom.preItems.push(el)
		            
		            range.push.apply(vdom.preRepeat, el.children)
		        })

		    }

		})

		function isEmptyObject(a) {
		    for (var i in a) {
		        return false
		    }
		    return true
		}
		function splitDOMs(nodes, signature) {
		    var items = []
		    var item = []
		    for (var i = 0, el; el = nodes[i++]; ) {
		        if (el.nodeType === 8 && el.nodeValue === signature) {
		            item.push(el)
		            items.push(item)
		            item = []
		        } else {
		            item.push(el)
		        }
		    }
		    return items
		}

		//将要循环的节点根据锚点元素再分成一个个更大的单元,用于diff
		function prepareCompare(nodes, cur) {
		    var splitText = cur.signature
		    var items = []
		    var keys = []
		    var com = {
		        children: []
		    }

		    for (var i = 0, el; el = nodes[i]; i++) {
		        if (el.nodeType === 8 && el.nodeValue === splitText) {
		            com.children.push(el)
		            com.key = el.key
		            keys.push(el.key)
		            com.index = items.length
		            items.push(com)
		            com = {
		                children: []
		            }
		        } else {
		            com.children.push(el)
		        }
		    }

		    cur.compareText = keys.length + '|' + keys.join(';;')
		    return items
		}


		function getEndRepeat(node) {
		    var isBreak = 0, ret = []
		    while (node) {
		        if (node.nodeType === 8) {
		            if (node.nodeValue.indexOf('ms-for:') === 0) {
		                ++isBreak
		            } else if (node.nodeValue.indexOf('ms-for-end:') === 0) {
		                --isBreak
		            }
		        }
		        ret.push(node)
		        node = node.nextSibling
		        if (isBreak === 0) {
		            break
		        }
		    }
		    return ret
		}


		var rfuzzy = /^(string|number|boolean)/
		var rkfuzzy = /^_*(string|number|boolean)/
		function fuzzyMatchCache(cache, id) {
		    var m = id.match(rfuzzy)
		    if (m) {
		        var fid = m[1]
		        for (var i in cache) {
		            var n = i.match(rkfuzzy)
		            if (n && n[1] === fid) {
		                return isInCache(cache, i)
		            }
		        }
		    }
		}

		// 新位置: 旧位置
		function isInCache(cache, id) {
		    var c = cache[id]
		    if (c) {
		        var arr = c.arr
		        if (arr) {
		            var r = arr.pop()
		            if (!arr.length) {
		                c.arr = 0
		            }
		            return r
		        }
		        delete cache[id]
		        return c
		    }
		}
		//[1,1,1] number1 number1_ number1__
		function saveInCache(cache, component) {
		    var trackId = component.key
		    if (!cache[trackId]) {
		        cache[trackId] = component
		    } else {
		        var c = cache[trackId]
		        var arr = c.arr || (c.arr = [])
		        arr.push(component)
		    }
		}
		var applyEffects = function (nodes, vnodes, opts) {
		    vnodes.forEach(function (el, i) {
		        avalon.applyEffect(nodes[i], vnodes[i], opts)
		    })
		}


	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(37)
		var reconcile = __webpack_require__(39)
		var createComponent = __webpack_require__(67)

		avalon.component = function (name, definition) {
		    //这是定义组件的分支,并将列队中的同类型对象移除
		    if (!avalon.components[name]) {
		        avalon.components[name] = definition
		    }//这里没有返回值
		}
		avalon.directive('widget', {
		    parse: function (copy, src, binding) {
		        src.wid = src.wid || avalon.makeHashCode('w')
		        //将渲染函数的某一部分存起来,渲在c方法中转换为函数
		        copy[binding.name] = avalon.parseExpr(binding)
		        copy.vmodel = '__vmodel__'
		        copy.local = '__local__'
		    },
		    define: function () {
		        return avalon.mediatorFactory.apply(this, arguments)
		    },
		    diff: function (copy, src, name) {
		        var a = copy[name]
		        var p = src[name]
		        src.vmodel = copy.vmodel
		        src.local = copy.local
		        src.copy = copy
		        if (Object(a) === a) {
		            a = a.$model || a//安全的遍历VBscript
		            if (Array.isArray(a)) {//转换成对象
		                a = avalon.mix.apply({}, a)
		            }
		            var is = a.is || src.props.is
		            if (!src[is + "-vm"]) {
		                if (!createComponent(src, copy, is)) {
		                    //替换成注释节点
		                    update(src, this.mountComment)
		                    return
		                }
		            }
		            var renderComponent = src[is + '-vm'].$render
		            var newTree = renderComponent(src[is + '-vm'], src.local)

		            var componentRoot = newTree[0]
		            if (componentRoot && isComponentReady(componentRoot)) {
		                if (src[is + '-mount']) {//update
		                    updateCopy(copy, componentRoot)
		                    update(src, this.updateComponent)
		                } else {//mount
		                    src.copy = copy
		                    src.newCopy = componentRoot
		                    update(src, this.mountComponent)
		                }
		            } else {
		                update(src, this.mountComment)
		            }

		        }
		    },
		    mountComment: function (dom, vdom, parent) {
		        var copy = vdom.copy
		        copy.nodeType = vdom.nodeType = 8
		        copy.nodeValue = vdom.nodeType = 'unresolved component placeholder'
		        copy.children = []
		        var comment = document.createComment(copy.nodeValue)
		        vdom.dom = comment
		        parent.replaceChild(comment, dom)
		    },
		    updateComponent: function (dom, vdom) {
		        var is = vdom.is
		        var vm = vdom[is + '-vm']
		        var viewChangeObservers = vm.$events.onViewChange
		        if (viewChangeObservers && viewChangeObservers.length) {
		            update(vdom, viewChangeHandle, 'afterChange')
		        }
		    },
		    
		    mountComponent: function (dom, vdom, parent) {
		        var is = vdom.is
		        var vm = vdom[is + '-vm']
		        var copy = vdom.copy
		        var newCopy = vdom.newCopy
		        delete vdom.newCopy
		       
		        var scope = avalon.scopes[vm.$id]  
		        if (scope && scope.vmodel) {  
		            var com = scope.vmodel.$element
		            newCopy = com.vtree[0]
		            updateCopy(vdom, newCopy)
		            parent.replaceChild(com, dom)
		            com.vtree = [vdom]
		            vdom[is + '-vm'] = scope.vmodel
		            vdom[is + '-mount'] = true
		            return
		        }
		        
		        //更新原始虚拟DOM树
		        updateCopy(copy, newCopy )  
		        var vtree = vdom[is + '-vtree']
		        //更新另一个刷数据用的虚拟DOM树
		        updateCopy(vdom, vtree[0] )
		        var com = avalon.vdomAdaptor(vdom, 'toDOM')
		        vm.$fire('onInit', {
		            type: 'init',
		            vmodel: vm,
		            is: is
		        })
		        reconcile([com], [vdom])
		        parent.replaceChild(com, dom)
		        vdom.dom = com
		        avalon.onComponentDispose(com)
		       
		        vdom[is + '-mount'] = true
		        //--------------
		        vm.$element = com
		        com.vtree = [vdom]
		        avalon.scopes[vm.$id] = {
		            vmodel: vm,
		            isMount: 2,
		            local: vdom.local
		        }
		        //--------------
		        update(vdom, function () {
		            vm.$fire('onReady', {
		                type: 'ready',
		                target: com,
		                vmodel: vm,
		                is: is
		            })
		        }, 'afterChange')

		        update(vdom, function () {
		            vdom[is + '-html'] = avalon.vdomAdaptor(vdom, 'toHTML')
		        }, 'afterChange')

		    }
		})

		function updateCopy(copy, newCopy) {
		    copy.children = []
		    avalon.mix(copy, newCopy)
		    copy.local = copy.isVoidTag = copy.skipContent = 0
		}

		function viewChangeHandle(dom, vdom) {
		    var is = vdom.is
		    var vm = vdom[is + '-vm']
		    var preHTML = vdom[is + '-html']
		    var curHTML = avalon.vdomAdaptor(vdom, 'toHTML')
		    if (preHTML !== curHTML) {
		        vdom[is + '-html'] = curHTML
		        vm.$fire('onViewChange', {
		            type: 'viewchange',
		            target: dom,
		            vmodel: vm,
		            is: is
		        })
		    }
		}



		function isComponentReady(vnode) {
		    var isReady = true
		    try {
		        hasUnresolvedComponent(vnode)
		    } catch (e) {
		        isReady = false
		    }
		    return isReady
		}

		function hasUnresolvedComponent(vnode) {
		    vnode.children.forEach(function (el) {
		        if (el.nodeType === 8) {
		            if (el.nodeValue === 'unresolved component placeholder') {
		                throw 'unresolved'
		            }
		        } else if (el.children) {
		            hasUnresolvedComponent(el)
		        }
		    })
		}

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		var skipArray = __webpack_require__(68)

		var componentContainers = {wbr: 1, xmp: 1, template: 1}
		var events = 'onInit,onReady,onViewChange,onDispose'
		var componentEvents = avalon.oneObject(events)
		var protected = events.split(',').concat('is', 'define')

		function createComponent(src, copy, is) {
		    var type = src.type
		    //判定用户传入的标签名是否符合规格
		    if (!componentContainers[type] && !isCustomTag(type)) {
		        avalon.warn(type + '不合适做组件的标签')
		        return
		    }
		    //开始初始化组件
		    var hooks = {}
		    //用户只能操作顶层VM
		    //只有$id,is的对象就是emptyOption
		    var rawOption = copy['ms-widget']
		    var isEmpty = false
		    if (!rawOption) {
		        isEmpty = true
		        options = []
		    } else {
		        var options = [].concat(rawOption)
		        options.forEach(function (a) {
		            if (a && typeof a === 'object') {
		                mixinHooks(hooks, (a.$model || a), true)
		            }
		        })
		        isEmpty = isEmptyOption(hooks)
		    }
		    var definition = avalon.components[is]
		    //初始化组件失败,因为连组件的定义都没有加载
		    if (!definition) {
		        return
		    }
		    var skipProps = protected.concat()
		    //得到组件在顶层vm的配置对象名
		    var configName = is.replace(/-/g, '_')

		    var topVm = copy.vmodel
		    try {//如果用户在ms-widget没定义东西那么从vm中取默认东西
		        var vmOption = topVm[configName]
		        if (isEmpty && vmOption && typeof vmOption === 'object') {
		            hooks = {}
		            options = [vmOption]
		            mixinHooks(hooks, vmOption.$model || vmOption, true)
		            skipProps.push(configName)
		        }
		    } catch (e) {
		    }


		    //将用户声明组件用的自定义标签(或xmp.template)的template转换成虚拟DOM
		    if (componentContainers[type] && src.children[0]) {
		        src.children = avalon.lexer(src.children[0].nodeValue)
		    }
		    src.isVoidTag = src.skipContent = 0

		    //开始构建组件的vm的配置对象

		    var define = hooks.define
		    define = define || avalon.directives.widget.define
		    if (!hooks.$id) {
		        avalon.warn('warning!', is, '组件最好在ms-widget配置对象中指定全局不重复的$id以提高性能!\n',
		                '若在ms-for循环中可以利用 ($index,el) in @array 中的$index拼写你的$id\n',
		                '如 ms-widget="{is:\'ms-button\',$id:\'btn\'+$index}"'
		                )
		    }
		    var $id = hooks.$id || src.wid

		    var defaults = avalon.mix(true, {}, definition.defaults)
		    mixinHooks(hooks, defaults, false)

		    var vmodel = define.apply(function (a, b) {
		        skipProps.forEach(function (k) {
		            delete a[k]
		            delete b[k]
		        })
		    }, [topVm, defaults].concat(options))

		    if (!avalon.modern) {//增强对IE的兼容
		        for (var i in vmodel) {
		            if (!skipArray[i] && typeof vmodel[i] === 'function') {
		                vmodel[i] = vmodel[i].bind(vmodel)
		            }
		        }
		    }

		    vmodel.$id = $id

		    //开始构建组件的虚拟DOM
		    var finalTemplate = definition.template.trim()
		    if (typeof definition.getTemplate === 'function') {
		        finalTemplate = definition.getTemplate(vmodel, finalTemplate)
		    }

		    var vtree = avalon.lexer(finalTemplate)
		    if (vtree.length > 1) {
		        avalon.error('组件必须用一个元素包起来')
		    }

		    var componentRoot = vtree[0]

		    avalon.vmodels[$id] = vmodel

		    //将用户标签中的属性合并到组件标签的属性里
		    avalon.mix(componentRoot.props, src.props)
		    delete componentRoot.props['ms-widget']
		    componentRoot.props.wid = $id
		    //抽取用户标签里带slot属性的元素,替换组件的虚拟DOM树中的slot元素

		    if (definition.soleSlot) {
		        var slots = {}
		        var slotName = definition.soleSlot
		        slots[slotName] = /\S/.test(src.template) ?
		                src.children : newText(slotName)
		        mergeTempale(vtree, slots)
		    } else if (!src.isVoidTag) {
		        insertSlots(vtree, src, definition.soleSlot)
		    }
		    avalon.speedUp(vtree)
		    for (var e in componentEvents) {
		        if (hooks[e]) {
		            hooks[e].forEach(function (fn) {
		                vmodel.$watch(e, fn)
		            })
		        }
		    }
		    var render = avalon.render(vtree, src.local)
		    vmodel.$render = render
		    src[is + '-vm'] = vmodel
		    src[is + '-vtree'] = vtree
		    return src.is = is

		}
		module.exports = createComponent

		function newText(name) {
		    return {
		        nodeType: 3,
		        nodeValue: '{{##' + name + '}}',
		        type: "#text",
		        dynamic: true
		    }
		}
		function isEmptyOption(opt) {
		    for (var k in opt) {
		        if (k === 'is' || k === '$id')
		            continue
		        return false
		    }
		    return true
		}

		function insertSlots(vtree, node, soleSlot) {
		    var slots = {}
		    if (soleSlot) {
		        slots[soleSlot] = node.children
		    } else {
		        node.children.forEach(function (el) {
		            if (el.nodeType === 1) {
		                var name = el.props.slot || 'default'
		                if (slots[name]) {
		                    slots[name].push(el)
		                } else {
		                    slots[name] = [el]
		                }
		            }
		        })
		    }
		    mergeTempale(vtree, slots)
		}

		function mergeTempale(vtree, slots) {
		    for (var i = 0, node; node = vtree[i++]; ) {
		        if (node.nodeType === 1) {
		            if (node.type === 'slot') {
		                var name = node.props.name || 'default'
		                if (slots[name]) {
		                    var s = slots[name].length ? slots[name] : newText(name)
		                    vtree.splice.apply(vtree, [i - 1, 1].concat(s))
		                }
		            } else {
		                mergeTempale(node.children, slots)
		            }
		        }
		    }

		    return vtree
		}

		//必须以字母开头,结尾以字母或数字结束,中间至少出现一次"-",
		//并且不能大写字母,特殊符号,"_","$",汉字
		var rcustomTag = /^[a-z]([a-z\d]+\-)+[a-z\d]+$/

		function isCustomTag(type) {
		    return rcustomTag.test(type)
		}

		function mixinHooks(target, option, overwrite) {
		    for (var k in option) {
		        var v = option[k]
		        //如果是生命周期钩子,总是不断收集
		        if (componentEvents[k]) {
		            if (k in target) {
		                target[k].push(v)
		            } else {
		                target[k] = [option[k]]
		            }
		        } else {
		            if (overwrite) {
		                target[k] = v
		            }
		        }
		    }
		}

	/***/ },
	/* 68 */
	/***/ function(module, exports) {

		/**
		 * 
		$$skipArray:是系统级通用的不可监听属性
		$skipArray: 是当前对象特有的不可监听属性

		 不同点是
		 $$skipArray被hasOwnProperty后返回false
		 $skipArray被hasOwnProperty后返回true
		 */

		module.exports = avalon.oneObject('$id,$render,$track,$element,$watch,$fire,$events,$model,$skipArray,$accessors,$hashcode,$run,$wait,__proxy__,__data__,__const__')

	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		var support = __webpack_require__(70)
		var Cache = __webpack_require__(28)
		var update = __webpack_require__(37)

		avalon.directive('effect', {
		    priority: 5,
		    diff: function (copy, src, name) {
		        var copyObj = copy[name]
		        copyObj = copy.$model || copyObj
		        if(typeof copyObj === 'string'){
		            var is = copyObj
		            copyObj = {
		                is: is
		            }
		           
		        }else if (Array.isArray(copyObj)) {
		            copyObj = avalon.mix.apply({}, copyObj)
		        }
		    
		        copyObj.action = copyObj.action || 'enter'
		       
		        if (Object(copyObj) === copyObj) {
		            var srcObj = src[name]
		            if ( Object(srcObj) !== srcObj || diffObj(copyObj, srcObj ))  {
		                src[name] = copyObj
		                update(src, this.update, 'afterChange')
		            }
		        }
		        delete copy[name]
		    },
		    update: function (dom, vnode, parent, option) {
		        if(dom.animating ){
		            return
		        }
		        dom.animating = true
		        var localeOption = vnode['ms-effect']
		        var type = localeOption.is
		        option = option || {}
		        if(!type){//如果没有指定类型
		            return avalon.warn('need is option')
		        }
		      
		        var effects = avalon.effects
		        if(support.css && !effects[type]){
		            avalon.effect(type, {})
		        }
		        var globalOption = effects[type]
		        if(!globalOption){//如果没有定义特效
		            return avalon.warn(type+' effect is undefined')
		        }
		        var action = option.action || localeOption.action
		        var Effect = avalon.Effect
		        if (typeof Effect.prototype[action] !== 'function'){
		            return avalon.warn(action+' action is undefined')
		        }   
		        var effect = new Effect(dom)
		        var finalOption = avalon.mix(option, globalOption, localeOption)
		        if (finalOption.queue) {
		            animationQueue.push(function () {
		                effect[action](finalOption)
		            })
		            callNextAnimation()
		        } else {
		            setTimeout(function(){
		               effect[action](finalOption)
		            },4)
		        }
		    }
		})
		function diffObj(a, b){
		    for(var i in a){
		        if(a[i] !== b[i])
		            return true
		    }
		    return false
		}

		var animationQueue = []
		function callNextAnimation() {
		    if (animationQueue.lock)
		        return
		    var fn = animationQueue[0]
		    if (fn) {
		       callNextAnimation.lock = true
		       fn()
		    }
		}

		avalon.effects = {}
		//这里定义CSS动画


		avalon.effect = function (name, definition) {
		    avalon.effects[name] = definition || {}
		    if (support.css) {
		        if (!definition.enterClass) {
		            definition.enterClass = name + '-enter'
		        }
		        if (!definition.enterActiveClass) {
		            definition.enterActiveClass = definition.enterClass + '-active'
		        }
		        if (!definition.leaveClass) {
		            definition.leaveClass = name + '-leave'
		        }
		        if (!definition.leaveActiveClass) {
		            definition.leaveActiveClass = definition.leaveClass + '-active'
		        }
		    }
		    if (!definition.action) {
		        definition.action = 'enter'
		    }
		}


		var Effect = function (el) {
		    this.el = el
		}
		avalon.Effect = Effect
		Effect.prototype = {
		    enter: createAction('Enter'),
		    leave: createAction('Leave'),
		    move: createAction('Move')
		}

		var rsecond = /\d+s$/
		function toMillisecond(str){
		   var ratio = rsecond.test(str) ? 1000 : 1
		   return parseFloat(str) * ratio
		}

		function execHooks(options, name, el) {
		    var list = options[name]
		    list = Array.isArray(list) ? list : typeof list === 'function' ? [list] : []
		    list.forEach(function (fn) {
		       fn && fn(el)
		    })
		}
		 var staggerCache = new Cache(128)

		function createAction(action) {
		    var lower = action.toLowerCase()
		    return function (option) {
		        var elem = this.el
		        var $el = avalon(elem)
		        var enterAnimateDone
		        var staggerTime = isFinite(option.stagger) ? option.stagger * 1000 : 0
		        if(staggerTime){
		            if(option.staggerKey){
		                var stagger = staggerCache.get(option.staggerKey) || 
		                        staggerCache.put(option.staggerKey, {
		                    count:0,
		                    items:0
		                })
		                stagger.count++
		                stagger.items++
		            }
		        }
		        var staggerIndex = stagger && stagger.count || 0
		        var animationDone = function(e) {
		            var isOk = e !== false
		            elem.animating = void 0
		            enterAnimateDone = true
		            var dirWord = isOk ? 'Done' : 'Abort'
		            execHooks(option, 'on' + action + dirWord, elem)
		            avalon.unbind(elem,support.transitionEndEvent)
		            avalon.unbind(elem,support.animationEndEvent)
		            if(stagger){
		                if(--stagger.items === 0){
		                    stagger.count = 0
		                }
		            }
		            if(option.queue){
		                animationQueue.lock = false
		                animationQueue.shift()
		                callNextAnimation()
		            }
		        }
		        execHooks(option, 'onBefore' + action, elem)

		        if (option[lower]) {
		            option[lower](elem, function (ok) {
		                animationDone(ok !== false)
		            })
		        } else if (support.css) {
		            
		            $el.addClass(option[lower + 'Class'])
		            if(lower === 'leave'){
		                $el.removeClass(option.enterClass+' '+option.enterActiveClass)
		            }else if(lower === 'enter'){
		                $el.removeClass(option.leaveClass+' '+option.leaveActiveClass)
		            }

		            $el.bind(support.transitionEndEvent, animationDone)
		            $el.bind(support.animationEndEvent, animationDone)
		            setTimeout(function () {
		                enterAnimateDone = avalon.root.offsetWidth === NaN
		                $el.addClass(option[lower + 'ActiveClass'])
		                var computedStyles = window.getComputedStyle(elem)
		                var tranDuration = computedStyles[support.transitionDuration]
		                var animDuration = computedStyles[support.animationDuration]
		                var time = toMillisecond(tranDuration) || toMillisecond(animDuration)
		                if (!time === 0) {
		                    animationDone(false)
		                }else if(!staggerTime ){
		                    setTimeout(function(){
		                        if(!enterAnimateDone){
		                            animationDone(false)
		                        }
		                    },time + 130 )
		                }
		            }, 17+ staggerTime * staggerIndex)// = 1000/60
		        }
		    }
		}

		avalon.applyEffect = function(node, vnode, opts){
		    var cb = opts.cb
		    var hook = opts.hook
		    var curEffect = vnode['ms-effect']
		    if(curEffect && !avalon.document.hidden ){
		        var old = curEffect[hook]
		        if(cb){
		            if(Array.isArray(old)){
		                old.push(cb)
		            }else if(old){
		                curEffect[hook] = [old, cb]
		            }else{
		                curEffect[hook] = [cb]
		            }
		        }
		        getAction(opts)
		        node.animate = true
		        avalon.directives.effect.update(node,vnode, 0, avalon.shadowCopy({},opts) ) 

		    }else if(cb){
		        cb()
		    }
		}

		function getAction(opts){
		    if(!opts.acton){
		        opts.action = opts.hook.replace(/^on/,'').replace(/Done$/,'').toLowerCase()
		    }
		}



	/***/ },
	/* 70 */
	/***/ function(module, exports) {

		/**
		 * ------------------------------------------------------------
		 * 检测浏览器对CSS动画的支持与API名
		 * ------------------------------------------------------------
		 */
		var supportTransition = false
		var supportAnimation = false
		var supportCSS = false
		var transitionEndEvent
		var animationEndEvent
		var transitionDuration = avalon.cssName('transition-duration')
		var animationDuration = avalon.cssName('animation-duration')

		var checker = {
		    TransitionEvent: 'transitionend',
		    WebKitTransitionEvent: 'webkitTransitionEnd',
		    OTransitionEvent: 'oTransitionEnd',
		    otransitionEvent: 'otransitionEnd'
		}
		var window = avalon.window
		var tran
		//有的浏览器同时支持私有实现与标准写法，比如webkit支持前两种，Opera支持1、3、4
		for (var name in checker) {
		    if (window[name]) {
		        tran = checker[name]
		        break
		    }
		    try {
		        var a = document.createEvent(name)
		        tran = checker[name]
		        break;
		    } catch (e) {
		    }
		}
		if (typeof tran === 'string') {
		    supportTransition = true
		    supportCSS = true
		    transitionEndEvent = tran
		}

		//animationend有两个可用形态
		//IE10+, Firefox 16+ & Opera 12.1+: animationend
		//Chrome/Safari: webkitAnimationEnd
		//http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
		//IE10也可以使用MSAnimationEnd监听，但是回调里的事件 type依然为animationend
		//  el.addEventListener('MSAnimationEnd', function(e) {
		//     alert(e.type)// animationend！！！
		// })
		checker = {
		    'AnimationEvent': 'animationend',
		    'WebKitAnimationEvent': 'webkitAnimationEnd'
		}
		var ani
		for (name in checker) {
		    if (window[name]) {
		        ani = checker[name];
		        break;
		    }
		}
		if (typeof ani === 'string') {
		    supportAnimation = true
		    supportCSS = true
		    animationEndEvent = ani
		}

		module.exports = {
		    transition: supportTransition,
		    animation: supportAnimation,
		    css: supportCSS,
		    transitionEndEvent: transitionEndEvent,
		    animationEndEvent: animationEndEvent,
		    transitionDuration: transitionDuration,
		    animationDuration: animationDuration
		}

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		
		avalon.lexer = __webpack_require__(72)
		avalon.diff = __webpack_require__(73)
		avalon.batch = __webpack_require__(74)
		// dispatch与patch 为内置模块
		var parseView = __webpack_require__(46)

		function render(vtree, local) {
		    var _body = Array.isArray(vtree) ? parseView(vtree) : vtree
		    var _local = []
		    if (local) {
		        for (var i in local) {
		            _local.push('var ' + i + ' = __local__['+avalon.quote(i)+']')
		        }
		    }
		    var body = '__local__ = __local__ || {};\n' +
		            _local.join(';\n')+'\n' + _body
		    var fn = Function('__vmodel__', '__local__', body)

		    return fn
		}
		avalon.render = render

		module.exports = avalon


	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * lexer 将字符串变成一个虚拟DOM树,方便以后进一步变成模板函数
		 * 此阶段只会生成VElement,VText,VComment
		 * ------------------------------------------------------------
		 */

		var makeHashCode = avalon.makeHashCode
		var vdom = __webpack_require__(15)
		var VText = vdom.VText
		var VComment = vdom.VComment


		//匹配只有开标签的无内容元素（Void elements 或 self-contained tags）
		//http://www.colorglare.com/2014/02/03/to-close-or-not-to-close.html
		//http://blog.jobbole.com/61514/

		//var rfullTag = /^<([^\s>\/=.$<]+)(?:\s+[^=\s]+(?:=[^>\s]+)?)*\s*>(?:[\s\S]*)<\/\1>/
		//var rvoidTag = /^<([^\s>\/=.$<]+)\s*([^>]*?)\/?>/
		var rfullTag = /^<([-A-Za-z0-9_]+)(?:\s+[^=\s]+(?:=[^>\s]+)?)*\s*>(?:[\s\S]*)<\/\1>/
		var rvoidTag = /^<([-A-Za-z0-9_]+)\s*([^>]*?)\/?>/
		var rtext = /^[^<]+/
		var rcomment = /^<!--([\w\W]*?)-->/

		var rnumber = /\d+/g
		var rmsForStart = /^\s*ms\-for\:/
		var rmsForEnd = /^\s*ms\-for\-end/
		var r = __webpack_require__(49)
		var rsp = r.sp
		var rfill = /\?\?\d+/g
		var rleftSp = r.leftSp
		var rstring = r.string


		var config = avalon.config


		var maps = {}
		var number = 1
		function dig(a) {
		    var key = '??' + number++
		    maps[key] = a
		    return key
		}
		function fill(a) {
		    var val = maps[a]
		    return val
		}
		var rhasString = /=["']/
		var rlineSp = /\n\s*/g
		function fixLongAttrValue(attr) {
		    return rhasString.test(attr) ?
		            attr.replace(rlineSp, '').replace(rstring, dig) : attr
		}
		function lexer(text, curDeep) {
		    var nodes = []
		    if (typeof curDeep !== 'number') {
		        curDeep = 0
		    }
		    if (!curDeep) {
		        text = text.replace(rstring, dig)
		    }
		    do {
		        var outerHTML = ''
		        var node = false
		        var match = text.match(rtext)
		        if (match) {//尝试匹配文本
		            outerHTML = match[0]
		            node = {
		                type: '#text',
		                nodeType: 3,
		                nodeValue: outerHTML.replace(rfill, fill)
		            }

		        }

		        if (!node) {//尝试匹配注释
		            match = text.match(rcomment)
		            if (match) {
		                outerHTML = match[0]
		                node = {
		                    type: '#comment',
		                    nodeType: 8,
		                    nodeValue: match[1].replace(rfill, fill)
		                }
		            }
		        }


		        if (!node) {//尝试匹配拥有闭标签的元素节点
		            match = text.match(rfullTag)
		            if (match) {
		                outerHTML = match[0]//贪婪匹配 outerHTML,可能匹配过多
		                var type = match[1].toLowerCase()//nodeName
		                outerHTML = clipOuterHTML(outerHTML, type)

		                match = outerHTML.match(rvoidTag) //抽取所有属性

		                var props = {}
		                if (match[2]) {
		                    handleProps(fixLongAttrValue(match[2]), props)
		                }

		                var innerHTML = outerHTML.slice(match[0].length,
		                        (type.length + 3) * -1) //抽取innerHTML
		                node = {
		                    nodeType: 1,
		                    type: type,
		                    props: props,
		                    children: []
		                }
		                node = modifyProps(node, nodes, curDeep, innerHTML,
		                        innerHTML.replace(rfill, fill).trim())


		            }
		        }

		        if (!node) {
		            match = text.match(rvoidTag)
		            if (match) {//尝试匹配自闭合标签
		                outerHTML = match[0]
		                type = match[1].toLowerCase()
		                props = {}
		                if (match[2]) {
		                    handleProps(fixLongAttrValue(match[2]), props)
		                }
		                node = {
		                    nodeType: 1,
		                    type: type,
		                    props: props,
		                    children: [],
		                    isVoidTag: true
		                }
		                node = modifyProps(node, nodes, curDeep, '', '')
		            }
		        }

		        if (node) {//从text中移除被匹配的部分
		            if (node.nodeType !== 3 || /\S/.test(node.nodeValue)) {
		                nodes.push(node)
		            }
		            text = text.slice(outerHTML.length)
		            if (node.nodeType === 8) {
		                if (rmsForStart.test(node.nodeValue)) {

		                    node.signature = node.signature || makeHashCode('for')
		                    node.dynamic = 'for'
		                } else if (rmsForEnd.test(node.nodeValue)) {
		                    //将 ms-for与ms-for-end:之间的节点塞到一个数组中
		                    nodes.pop()
		                    markeRepeatRange(nodes, node)
		                }
		            }
		        } else {
		            break
		        }
		    } while (1);
		    if (!curDeep) {
		        maps = {}
		    }
		    return nodes
		}



		function markeRepeatRange(nodes, end) {

		    var array = [], start, deep = 1
		    while (start = nodes.pop()) {
		        if (start.nodeType === 8) {
		            if (rmsForEnd.test(start.nodeValue)) {
		                ++deep
		            } else if (rmsForStart.test(start.nodeValue)) {
		                --deep
		                if (deep === 0) {
		                    end.signature = start.signature
		                    nodes.push(start, array, end)
		                    start.template = array.map(function (a) {
		                        return avalon.vdomAdaptor(a, 'toHTML')
		                    }).join('')
		                    break
		                }
		            }
		        }
		        array.unshift(start)
		    }

		}

		//用于创建适配某一种标签的正则表达式
		var openStr = '(?:\\s+[^>=]*?(?:=[^>]+?)?)*>'
		var tagCache = {}// 缓存所有匹配开标签闭标签的正则
		var rchar = /./g
		var regArgs = avalon.msie < 9 ? 'ig' : 'g'//IE6-8，标签名都是大写
		function clipOuterHTML(matchText, type) {
		    var opens = []
		    var closes = []
		    var ropen = tagCache[type + 'open'] ||
		            (tagCache[type + 'open'] = new RegExp('<' + type + openStr, regArgs))
		    var rclose = tagCache[type + 'close'] ||
		            (tagCache[type + 'close'] = new RegExp('<\/' + type + '>', regArgs))

		    /* jshint ignore:start */
		    matchText.replace(ropen, function (_, b) {
		        //注意,页面有时很长,b的数值就很大,如
		        //000000000<000000011>000000041<000000066>000000096<000000107>
		        opens.push(('0000000000' + b + '<').slice(-10))//取得所有开标签的位置
		        return _.replace(rchar, '1')
		    }).replace(rclose, function (_, b) {
		        closes.push(('0000000000' + b + '>').slice(-10))//取得所有闭标签的位置               
		    })

		    /* jshint ignore:end */
		    //<div><div>01</div><div>02</div></div><div>222</div><div>333</div>
		    //会变成000<005<012>018<025>031>037<045>051<059>
		    //再变成<<><>><><>
		    //最后获取正确的>的索引值,这里为<<><>>的最后一个字符,
		    var pos = opens.concat(closes).sort()
		    var gtlt = pos.join('').replace(rnumber, '')
		    var k = 0, last = 0

		    for (var i = 0, n = gtlt.length; i < n; i++) {
		        var c = gtlt.charAt(i)
		        if (c === '<') {
		            k += 1
		        } else {
		            k -= 1
		        }
		        if (k === 0) {
		            last = i
		            break
		        }
		    }
		    var findex = parseFloat(pos[last]) + type.length + 3 // (</>为三个字符)
		    return matchText.slice(0, findex) //取得正确的outerHTML
		}


		function modifyProps(node, nodes, curDeep, innerHTML, template) {
		    var type = node.type
		    var props = node.props
		    switch (type) {
		        case 'style':
		        case 'script':
		        case 'noscript':
		        case 'template':
		        case 'textarea':
		        case 'xmp':
		            node.skipContent = true

		            if (template) {
		                node.children.push(new VText(template))
		            } else {
		                node.children = []
		            }
		            if (type === 'textarea') {
		                props.type = 'textarea'
		                node.children.length = 0
		            }
		            break
		        case 'input':
		            if (!props.type) {
		                props.type = 'text'
		            }
		            break
		        case 'select':
		            if (props.hasOwnProperty('multiple')) {
		                props.multiple = 'multiple'
		                node.multiple = true
		            }
		            break

		        case 'option':
		            node.children.push(new VText(trimHTML(template)))
		            break
		        default:
		            if (/^ms-/.test(type)) {
		                props.is = type
		                if (!props['ms-widget']) {
		                    props['ms-widget'] = '{is:' + avalon.quote(type) + '}'
		                }
		            }
		            break
		    }

		    if (!node.isVoidTag && !node.skipContent) {
		        var childs = lexer(innerHTML, curDeep + 1)
		        node.children = childs
		        if (type === 'table') {
		            addTbody(node.children)
		        }
		    }
		    var forExpr = props['ms-for']
		    if (forExpr) {
		        var cb = props['data-for-rendered']
		        var cid = cb + ':cb'
		        delete props['ms-for']
		        nodes.push({
		            nodeType: 8,
		            type: '#comment',
		            nodeValue: 'ms-for:' + forExpr,
		            signature: makeHashCode('for'),
		            dynamic: 'for',
		            cid: cid
		        })

		        if (cb && !avalon.caches[cid]) {
		            avalon.caches[cid] = Function('return ' + avalon.parseExpr(cb, 'on'))()
		        }

		        nodes.push(node)
		        return {
		            nodeType: 8,
		            type: '#comment',
		            dynamic: true,
		            nodeValue: 'ms-for-end:'
		        }
		    }

		    return node
		}
		//如果直接将tr元素写table下面,那么浏览器将将它们(相邻的那几个),放到一个动态创建的tbody底下
		function addTbody(nodes) {
		    var tbody, needAddTbody = false, count = 0, start = 0, n = nodes.length
		    for (var i = 0; i < n; i++) {
		        var node = nodes[i]
		        if (!tbody) {
		            if (node.type === 'tr') {
		                tbody = {
		                    nodeType: 1,
		                    type: 'tbody',
		                    children: [],
		                    props: {}
		                }
		                tbody.children.push(node)
		                needAddTbody = true
		                if (start === 0)
		                    start = i
		                nodes[i] = tbody
		            }
		        } else {
		            if (node.type !== 'tr' && node.nodeType === 1) {
		                tbody = false
		            } else {
		                tbody.children.push(node)
		                count++
		                nodes[i] = 0
		            }
		        }
		    }

		    if (needAddTbody) {
		        for (i = start; i < n; i++) {
		            if (nodes[i] === 0) {
		                nodes.splice(i, 1)
		                i--
		                count--
		                if (count === 0) {
		                    break
		                }
		            }
		        }
		    }
		}


		var ramp = /&amp;/g
		var rnowhite = /\S+/g
		var rquote = /&quot;/g
		var rnogutter = /\s*=\s*/g
		//https://github.com/RubyLouvre/avalon/issues/1501
		function handleProps(str, props) {
		    str.replace(rnogutter, '=').replace(rnowhite, function (el) {
		        var arr = el.split('='), value = arr[1] || '',
		                name = arr[0].toLowerCase()
		        if (arr.length === 2) {
		            if (value.indexOf('??') === 0) {
		                value = value.replace(rfill, fill).
		                        slice(1, -1)
		            }
		        }
		        props[name] = value
		    })
		}


		//form prototype.js
		var rtrimHTML = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi
		function trimHTML(v) {
		    return String(v).replace(rtrimHTML, '').trim()
		}


		module.exports = lexer

		avalon.speedUp = function (arr) {
		    for (var i = 0; i < arr.length; i++) {
		        hasDirective(arr[i])
		    }
		}

		function hasDirective(a) {
		    switch (a.nodeType) {
		        case 3:
		            if (config.rbind.test(a.nodeValue)) {
		                a.dynamic = 'expr'
		                return true
		            } else {
		                a.skipContent = true
		                return false
		            }
		        case 8:
		            if (a.dynamic) {
		                return true
		            } else {
		                a.skipContent = true
		                return false
		            }
		        case 1:

		            if (a.props['ms-skip']) {
		                a.skipAttrs = true
		                a.skipContent = true
		                return false
		            }
		            if (/^ms\-/.test(a.type)) {
		                a.dynamic = true
		            }
		            if (hasDirectiveAttrs(a.props)) {
		                a.dynamic = true
		            } else {
		                a.skipAttrs = true
		            }
		            if (a.isVoidTag && !a.dynamic) {
		                a.skipContent = true
		                return false
		            }
		            var hasDirective = childrenHasDirective(a.children)
		            if (!hasDirective && !a.dynamic) {
		                a.skipContent = true
		                return false
		            }
		            return true
		        default:
		            if (Array.isArray(a)) {
		                return childrenHasDirective(a)
		            }
		    }
		}

		function childrenHasDirective(arr) {
		    var ret = false
		    for (var i = 0, el; el = arr[i++]; ) {
		        if (hasDirective(el)) {
		            ret = true
		        }
		    }
		    return ret
		}

		function hasDirectiveAttrs(props) {
		    if ('ms-skip' in props)
		        return false
		    for (var i in props) {
		        if (i.indexOf('ms-') === 0) {
		            return true
		        }
		    }
		    return false
		}

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * diff 对比新旧两个虚拟DOM树,根据directive中的diff方法为新虚拟DOM树
		 * 添加change, afterChange更新钩子
		 * ------------------------------------------------------------
		 */
		var emptyArr = []
		// 防止被引用
		var emptyObj = function () {
		    return {
		        children: [], props: {}
		    }
		}
		var directives = avalon.directives
		var rbinding = __webpack_require__(49).binding

		function diff(copys, sources) {
		    for (var i = 0; i < copys.length; i++) {
		        var copy = copys[i]
		        var src = sources[i] || emptyObj()
		    
		        switch (copy.nodeType) {
		            case 3:
		                if (copy.dynamic) {
		                    directives.expr.diff(copy, src)
		                }
		                break
		            case 8:
		                if (copy.dynamic === 'for') {
		                    directives['for'].diff(copy, src,
		                    copys[i+1],sources[i+1],sources[i+2]) 
		                }
		                if(src.afterChange){
		                    execHooks(src, src.afterChange)
		                }
		                break
		            case 1:
		                if (copy.order) {
		                    diffProps(copy, src)
		                }
		                if (!copy.skipContent && !copy.isVoidTag ) {
		                    diff(copy.children, src.children || emptyArr, copy)
		                }
		                if(src.afterChange){
		                    execHooks(src, src.afterChange)
		                }
		                break
		            default: 
		                if(Array.isArray(copy)){
		                   diff(copy, src)
		                }
		                break
		        }
		    }
		}

		function execHooks(el, hooks) {
		    if (hooks.length) {
		        for (var hook, i = 0; hook = hooks[i++];) {
		           hook(el.dom, el)
		        }
		    }
		    delete el.afterChange
		}

		function diffProps(copys, sources) {
		    var order = copys.order
		    if (order) {
		        var directiveType
		        try {
		           order.replace(avalon.rword, function (name) {
		                var match = name.match(rbinding)
		                var type = match && match[1]
		                directiveType = type
		                if (directives[type]) {
		                    directives[type].diff(copys, sources || emptyObj(), name)
		                }
		                if(copys.order !== order){
		                    throw "break"
		                }
		               
		            })
		            
		        } catch (e) {
		            if(e !== 'break'){
		                avalon.log(directiveType, e, e.stack || e.message, 'diffProps error')
		            }else{
		                diffProps(copys, sources)
		            }
		        }
		    }


		}
		avalon.diffProps = diffProps
		module.exports = diff


	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		
		/**
		 * ------------------------------------------------------------
		 * batch 同时对N个视图进行全量更新
		 * ------------------------------------------------------------
		 */

		var reconcile = __webpack_require__(39)

		//如果正在更新一个子树,那么将它放到
		var needRenderIds = []
		var renderingID = false
		avalon.suspendUpdate = 0


		function batchUpdate(id) {
		    if (renderingID) {
		        return avalon.Array.ensure(needRenderIds, id)
		    } else {
		        renderingID = id
		    }

		    var scope = avalon.scopes[id]
		    if (!scope || !document.nodeName || avalon.suspendUpdate) {
		        return renderingID = null
		    }
		    var vm = scope.vmodel
		    var dom = vm.$element
		    var source = dom.vtree || []
		    var renderFn = vm.$render
		    var copy = renderFn(scope.vmodel, scope.local)
		    if (scope.isTemp) {
		        //在最开始时,替换作用域的所有节点,确保虚拟DOM与真实DOM是对齐的
		        reconcile([dom], source, dom.parentNode)
		        delete avalon.scopes[id]
		    }
		    avalon.diff(copy, source)


		    var index = needRenderIds.indexOf(renderingID)
		    renderingID = 0
		    if (index > -1) {
		        var removed = needRenderIds.splice(index, 1)
		        return batchUpdate(removed[0])
		    }

		    var more = needRenderIds.shift()
		    if (more) {
		        batchUpdate(more)
		    }
		}



		module.exports = avalon.batch = batchUpdate


	/***/ },
	/* 75 */
	/***/ function(module, exports) {

		

		//http://stackoverflow.com/questions/11425209/are-dom-mutation-observers-slower-than-dom-mutation-events
		//http://stackoverflow.com/questions/31798816/simple-mutationobserver-version-of-domnoderemovedfromdocument
		function byMutationEvent(dom) {
		    dom.addEventListener("DOMNodeRemovedFromDocument", function () {
		        fireDisposeHookDelay(dom)
		    })
		}
		//用于IE8+, firefox
		function byRewritePrototype() {
		    if (byRewritePrototype.execute) {
		        return
		    }
		//https://www.web-tinker.com/article/20618.html?utm_source=tuicool&utm_medium=referral
		//IE6-8虽然暴露了Element.prototype,但无法重写已有的DOM API
		    byRewritePrototype.execute = true
		    var p = Node.prototype
		    function rewite(name, fn) {
		        var cb = p[name]
		        p[name] = function (a, b) {
		            return  fn.call(this, cb, a, b)
		        }
		    }
		    rewite('removeChild', function (fn, a, b) {
		        fn.call(this, a, b)
		        if (a.nodeType === 1) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })

		    rewite('replaceChild', function (fn, a, b) {
		        fn.call(this, a, b)
		        if (a.nodeType === 1) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })
		    //访问器属性需要用getOwnPropertyDescriptor处理
		    var ep = Element.prototype, oldSetter
		    function newSetter(html) {
		        var all = avalon.slice(this.getElementsByTagName('*'))
		        oldSetter.call(this, html)
		        fireDisposedComponents(all)
		    }
		    if (!Object.getOwnPropertyDescriptor) {
		        oldSetter = ep.__lookupSetter__('innerHTML')
		        ep.__defineSetter__('innerHTML', newSetter)
		    } else {
		        var obj = Object.getOwnPropertyDescriptor(ep, 'innerHTML')
		        oldSetter = obj.set
		        obj.set = newSetter
		        Object.defineProperty(ep, 'innerHTML', obj)
		    }
		    
		    rewite('appendChild', function (fn, a) {
		        fn.call(this, a)
		        if (a.nodeType === 1 && this.nodeType === 11) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })

		    rewite('insertBefore', function (fn, a, b) {
		        fn.call(this, a, b)
		        if (a.nodeType === 1 && this.nodeType === 11) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })
		}

		//用于IE6~8
		var checkDisposeNodes = []
		var checkID = 0
		function byPolling(dom) {
		    avalon.Array.ensure(checkDisposeNodes, dom)
		    if (!checkID) {
		        checkID = setInterval(function () {
		            for (var i = 0, el; el = checkDisposeNodes[i]; ) {
		                if (false === fireDisposeHook(el)) {
		                    avalon.Array.removeAt(checkDisposeNodes, i)
		                } else {
		                    i++
		                }
		            }
		            if (checkDisposeNodes.length == 0) {
		                clearInterval(checkID)
		                checkID = 0
		            }
		        }, 700)
		    }
		}


		module.exports = function onComponentDispose(dom) {
		    if (window.chrome && window.MutationEvent) {
		        byMutationEvent(dom)
		    } else if (avalon.modern && typeof window.Node === 'function') {
		        byRewritePrototype(dom)
		    } else {
		        byPolling(dom)
		    }
		}

		function inDomTree(el) {
		    while (el) {
		        if (el.nodeType === 9) {
		            return true
		        }
		        el = el.parentNode
		    }
		    return false
		}

		function fireDisposeHook(el) {
		    if (el.nodeType === 1 && el.getAttribute('wid') && !inDomTree(el)) {
		        var wid = el.getAttribute('wid')
		        var docker = avalon.scopes[ wid ]
		        if(!docker)
		            return
		        var vm = docker.vmodel
		        docker.vmodel.$fire("onDispose", {
		            type: 'dispose',
		            target: el,
		            vmodel: vm
		        })
		        if (docker && !el.getAttribute('cached')) {
		            delete docker.vmodel
		            delete avalon.scopes[ wid ]
		        }
		        return false
		    }
		}

		function fireDisposeHookDelay(a){
		    setTimeout(function () {
		        fireDisposeHook(a)
		    },4)
		}
		function fireDisposedComponents(nodes) {
		    for (var i = 0, el; el = nodes[i++]; ) {
		        fireDisposeHook(el)
		    }
		}

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * avalon基于纯净的Object.defineProperties的vm工厂 
		 * masterFactory,slaveFactory,mediatorFactory, ArrayFactory
		 * ------------------------------------------------------------
		 */

		var share = __webpack_require__(77)
		var createViewModel = __webpack_require__(81)

		var isSkip = share.isSkip
		var toJson = share.toJson
		var $$midway = share.$$midway
		var $$skipArray = share.$$skipArray

		var makeAccessor = share.makeAccessor
		var initViewModel = share.initViewModel
		var modelAccessor = share.modelAccessor
		var modelAdaptor = share.modelAdaptor
		var makeHashCode = avalon.makeHashCode


		//一个vm总是为Observer的实例
		function Observer() {
		}

		function masterFactory(definition, heirloom, options) {

		    var $skipArray = {}
		    if (definition.$skipArray) {//收集所有不可监听属性
		        $skipArray = avalon.oneObject(definition.$skipArray)
		        delete definition.$skipArray
		    }

		    var keys = {}
		    options = options || {}
		    heirloom = heirloom || {}
		    var accessors = {}
		    var hashcode = makeHashCode('$')
		    var pathname = options.pathname || ''
		    options.id = options.id || hashcode
		    options.hashcode = options.hashcode || hashcode
		    var key, sid, spath
		    for (key in definition) {
		        if ($$skipArray[key])
		            continue
		        var val = keys[key] = definition[key]
		        if (!isSkip(key, val, $skipArray)) {
		            sid = options.id + '.' + key
		            spath = pathname ? pathname + '.' + key : key
		            accessors[key] = makeAccessor(sid, spath, heirloom)
		        }
		    }

		    accessors.$model = modelAccessor
		    var $vmodel = new Observer()
		    $vmodel = createViewModel($vmodel, accessors, definition)

		    for (key in keys) {
		        //对普通监控属性或访问器属性进行赋值
		        $vmodel[key] = keys[key]

		        //删除系统属性
		        if (key in $skipArray) {
		            delete keys[key]
		        } else {
		            keys[key] = true
		        }
		    }
		    initViewModel($vmodel, heirloom, keys, accessors, options)

		    return $vmodel
		}

		$$midway.masterFactory = masterFactory
		var empty = {}
		function slaveFactory(before, after, heirloom, options) {
		    var keys = {}
		    var skips = {}
		    var accessors = {}
		    heirloom = heirloom || {}
		    var pathname = options.pathname
		    var resue = before.$accessors || {}
		    var key, sid, spath
		    for (key in after) {
		        if ($$skipArray[key])
		            continue
		        keys[key] = true//包括可监控与不可监控的
		        if (!isSkip(key, after[key], empty)) {
		            if (resue[key]) {
		                accessors[key] = resue[key]
		            } else {
		                sid = options.id + '.' + key
		                spath = pathname ? pathname + '.' + key : key
		                accessors[key] = makeAccessor(sid, spath, heirloom)
		            }
		        } else {
		            skips[key] = after[key]
		            delete after[key]
		        }
		    }

		    options.hashcode = before.$hashcode || makeHashCode('$')
		    accessors.$model = modelAccessor
		    var $vmodel = new Observer()
		    $vmodel = createViewModel($vmodel, accessors, skips)

		    for (key in skips) {
		        $vmodel[key] = skips[key]
		    }

		    initViewModel($vmodel, heirloom, keys, accessors, options)

		    return $vmodel
		}

		$$midway.slaveFactory = slaveFactory

		function mediatorFactory(before, after) {
		    var keys = {}, key
		    var accessors = {}
		    var unresolve = {}
		    var heirloom = {}
		    var arr = avalon.slice(arguments)
		    var $skipArray = {}
		    for (var i = 0; i < arr.length; i++) {
		        var obj = arr[i]
		        //收集所有键值对及访问器属性
		        var config
		        var configName
		        for (var key in obj) {
		            if(!obj.hasOwnProperty(key)){
		                continue
		            }
		            if(key === '$skipArray' && Array.isArray(obj.$skipArray)){
		                obj.$skipArray.forEach(function(el){
		                    $skipArray[el] = 1
		                })
		            }
		            keys[key] = obj[key]
		            var $accessors = obj.$accessors
		            if ($accessors && $accessors[key]) {
		                if (arr.indexOf(obj[key]) === -1) {
		                    accessors[key] = $accessors[key]
		                } else { //去掉vm那个配置对象
		                    config = keys[key]
		                    configName = key
		                    delete keys[key]
		                }
		            } else if (typeof keys[key] !== 'function') {
		                unresolve[key] = 1
		            }
		        }
		    }
		    if (typeof this === 'function') {
		        this(keys, unresolve)
		    }
		    for (key in unresolve) {
		        //系统属性跳过,已经有访问器的属性跳过
		        if ($$skipArray[key] || accessors[key])
		            continue
		        if (!isSkip(key, keys[key], $skipArray)) {
		            accessors[key] = makeAccessor(before.$id, key, heirloom)
		            accessors[key].set(keys[key])
		        }
		    }

		    var $vmodel = new Observer()
		    $vmodel = createViewModel($vmodel, accessors, keys)

		    for (key in keys) {
		        if (!accessors[key]) {//添加不可监控的属性
		            $vmodel[key] = keys[key]
		        }
		        //用于通过配置对象触发组件的$watch回调
		        if (configName && accessors[key] && config.hasOwnProperty(key)) {
		            var $$ = accessors[key]
		            if (!$$.get.$decompose) {
		                $$.get.$decompose = {}
		            }
		            $$.get.$decompose[configName+'.'+key] = $vmodel
		        }

		        if (key in $$skipArray) {
		            delete keys[key]
		        } else {
		            keys[key] = true
		        }

		    }

		    initViewModel($vmodel, heirloom, keys, accessors, {
		        id: before.$id,
		        hashcode: makeHashCode('$'),
		        master: true
		    })

		    return $vmodel
		}


		$$midway.mediatorFactory = avalon.mediatorFactory = mediatorFactory

		var __array__ = share.__array__


		var ap = Array.prototype
		var _splice = ap.splice
		function notifySize(array, size) {
		    if (array.length !== size) {
		        array.notify('length', array.length, size, true)
		    }
		}

		__array__.removeAll = function (all) { //移除N个元素
		    var size = this.length
		    if (Array.isArray(all)) {
		        for (var i = this.length - 1; i >= 0; i--) {
		            if (all.indexOf(this[i]) !== -1) {
		                _splice.call(this, i, 1)
		            }
		        }
		    } else if (typeof all === 'function') {
		        for (i = this.length - 1; i >= 0; i--) {
		            var el = this[i]
		            if (all(el, i)) {
		                _splice.call(this, i, 1)
		            }
		        }
		    } else {
		        _splice.call(this, 0, this.length)

		    }
		    if (!avalon.modern) {
		        this.$model = toJson(this)
		    }
		    notifySize(this, size)
		    this.notify()
		}


		var __method__ = ['push', 'pop', 'shift', 'unshift', 'splice']

		__method__.forEach(function (method) {
		    var original = ap[method]
		    __array__[method] = function (a, b) {
		        // 继续尝试劫持数组元素的属性
		        var args = [], size = this.length

		        if (method === 'splice' && Object(this[0]) === this[0]) {
		            var old = this.slice(a, b)
		            var neo = ap.slice.call(arguments, 2)
		            var args = [a, b]
		            for (var j = 0, jn = neo.length; j < jn; j++) {
		                var item = old[j]

		                args[j + 2] = modelAdaptor(neo[j], item, (item && item.$events || {}), {
		                    id: this.$id + '.*',
		                    master: true
		                })
		            }

		        } else {
		            for (var i = 0, n = arguments.length; i < n; i++) {
		                args[i] = modelAdaptor(arguments[i], 0, {}, {
		                    id: this.$id + '.*',
		                    master: true
		                })
		            }
		        }
		        var result = original.apply(this, args)
		        if (!avalon.modern) {
		            this.$model = toJson(this)
		        }
		        notifySize(this, size)
		        this.notify()
		        return result
		    }
		})

		'sort,reverse'.replace(avalon.rword, function (method) {
		    __array__[method] = function () {
		        ap[method].apply(this, arguments)
		        if (!avalon.modern) {
		            this.$model = toJson(this)
		        }
		        this.notify()
		        return this
		    }
		})


		module.exports = avalon
		//使用这个来扁平化数据  https://github.com/gaearon/normalizr
		//使用Promise  https://github.com/stefanpenner/es6-promise
		//使用这个AJAX库 https://github.com/matthew-andrews/isomorphic-fetch

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		var share = __webpack_require__(78)
		var canHideProperty = __webpack_require__(80)
		var initEvents = share.initEvents

		/*
		 * toJson
		 * hideProperty
		 * initViewModel
		 */

		function toJson(val) {
		    var xtype = avalon.type(val)
		    if (xtype === 'array') {
		        var array = []
		        for (var i = 0; i < val.length; i++) {
		            array[i] = toJson(val[i])
		        }
		        return array
		    } else if (xtype === 'object') {
		        var obj = {}
		        for (i in val) {
		            if (i === '__proxy__' || i === '__data__' || i === '__const__')
		                continue
		            if (val.hasOwnProperty(i)) {
		                var value = val[i]
		                obj[i] = value && value.nodeType ? value : toJson(value)
		            }
		        }
		        return obj
		    }
		    return val
		}

		function hideProperty(host, name, value) {
		    if (canHideProperty) {
		        Object.defineProperty(host, name, {
		            value: value,
		            writable: true,
		            enumerable: false,
		            configurable: true
		        })
		    } else {
		        host[name] = value
		    }
		}

		var modelAccessor = {
		    get: function () {
		        return toJson(this)
		    },
		    set: avalon.noop,
		    enumerable: false,
		    configurable: true
		}

		function initViewModel($vmodel, heirloom, keys, accessors, options) {

		    if (options.array) {
		        if (avalon.modern) {
		            Object.defineProperty($vmodel, '$model', modelAccessor)
		        } else {
		            $vmodel.$model = toJson($vmodel)
		        }
		    } else {
		        function hasOwnKey(key) {
		            return keys[key] === true
		        }
		        hideProperty($vmodel, '$accessors', accessors)
		        hideProperty($vmodel, 'hasOwnProperty', hasOwnKey)
		        hideProperty($vmodel, '$track', Object.keys(keys).sort().join(';;'))
		    }
		    hideProperty($vmodel, '$id', options.id)
		    hideProperty($vmodel, '$hashcode', options.hashcode)
		    if (options.master === true) {
		        hideProperty($vmodel, '$run', function () {
		            run.call($vmodel)
		        })
		        hideProperty($vmodel, '$wait', function () {
		            wait.call($vmodel)
		        })
		        hideProperty($vmodel, '$element', null)
		        hideProperty($vmodel, '$render', 0)
		        initEvents($vmodel, heirloom)
		    }
		}

		function wait() {
		    this.$events.$$wait$$ = true
		}

		function run() {
		    var host = this.$events
		    delete host.$$wait$$
		    if (host.$$dirty$$) {
		        delete host.$$dirty$$
		        avalon.rerenderStart = new Date
		        var id = this.$id
		        var dotIndex = id.indexOf('.')
		        if (dotIndex > 0) {
		            avalon.batch(id.slice(0, dotIndex))
		        } else {
		            avalon.batch(id)
		        }
		    }
		}

		share.$$midway.initViewModel = initViewModel

		share.$$midway.hideProperty = hideProperty

		var mixin = {
		    toJson: toJson,
		    initViewModel: initViewModel,
		    modelAccessor: modelAccessor
		}
		for (var i in share) {
		    mixin[i] = share[i]
		}

		module.exports = mixin


	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {

		
		var $$midway = {}
		var $$skipArray = __webpack_require__(68)
		var dispatch = __webpack_require__(79)
		var $emit = dispatch.$emit
		var $watch = dispatch.$watch
		/*
		 * initEvents
		 * isSkip
		 * modelAdaptor
		 * makeAccessor
		 */

		function initEvents($vmodel, heirloom) {
		    heirloom.__vmodel__ = $vmodel
		    var hide = $$midway.hideProperty

		    hide($vmodel, '$events', heirloom)
		    hide($vmodel, '$watch', function () {
		        if (arguments.length === 2) {
		            return $watch.apply($vmodel, arguments)
		        } else {
		            throw '$watch方法参数不对'
		        }
		    })
		    hide($vmodel, '$fire', function (expr, a, b) {
		        var list = $vmodel.$events[expr]
		        $emit(list, $vmodel, expr, a, b)
		    })
		}

		var rskip = /function|window|date|regexp|element/i

		function isSkip(key, value, skipArray) {
		    // 判定此属性能否转换访问器
		    return key.charAt(0) === '$' ||
		            skipArray[key] ||
		            (rskip.test(avalon.type(value))) ||
		            (value && value.nodeName && value.nodeType > 0)
		}

		function modelAdaptor(definition, old, heirloom, options) {
		    //如果数组转换为监控数组
		    if (Array.isArray(definition)) {
		        return $$midway.arrayFactory(definition, old, heirloom, options)
		    } else if (Object(definition) === definition && typeof definition !== 'function') {
		        //如果此属性原来就是一个VM,拆分里面的访问器属性
		        if (old && old.$id) {
		            ++avalon.suspendUpdate
		            //1.5带来的优化方案
		            if (old.$track !== Object.keys(definition).sort().join(';;')) {
		                var vm = $$midway.slaveFactory(old, definition, heirloom, options)
		            } else {
		                vm = old
		            }
		            for (var i in definition) {
		                if ($$skipArray[i])
		                    continue
		                vm[i] = definition[i]
		            }
		            --avalon.suspendUpdate
		            return vm
		        } else {
		            vm = $$midway.masterFactory(definition, heirloom, options)
		            return vm
		        }
		    } else {
		        return definition
		    }
		}
		$$midway.modelAdaptor = modelAdaptor


		function makeAccessor(sid, spath, heirloom) {
		    var old = NaN
		    function get() {
		        return old
		    }
		    get.heirloom = heirloom
		    return {
		        get: get,
		        set: function (val) {
		            if (old === val) {
		                return
		            }
		            var vm = heirloom.__vmodel__
		            if (val && typeof val === 'object') {
		                val = $$midway.modelAdaptor(val, old, heirloom, {
		                    pathname: spath,
		                    id: sid
		                })
		            }
		            var older = old
		            old = val
		            if (this.$hashcode && vm ) {
		                vm.$events.$$dirty$$ = true
		                if(vm.$events.$$wait$$)
		                    return
		                //★★确保切换到新的events中(这个events可能是来自oldProxy)               
		                if (heirloom !== vm.$events) {
		                    get.heirloom = vm.$events
		                }
		                //如果这个属性是组件配置对象中的属性,那么它需要触发组件的回调
		                emitWidget(get.$decompose, spath, val, older)
		                //触发普通属性的回调
		                if (spath.indexOf('*') === -1) {
		                    $emit(get.heirloom[spath], vm, spath, val, older)
		                }
		                //如果这个属性是数组元素上的属性
		                emitArray(sid, vm, spath, val, older)
		                //如果这个属性存在通配符
		                emitWildcard(get.heirloom, vm, spath, val, older)
		                vm.$events.$$dirty$$ = false
		                batchUpdateView(vm.$id)
		            }
		        },
		        enumerable: true,
		        configurable: true
		    }
		}

		function batchUpdateView(id) {
		    avalon.rerenderStart = new Date
		    var dotIndex = id.indexOf('.')
		    if (dotIndex > 0) {
		        avalon.batch(id.slice(0, dotIndex))
		    } else {
		        avalon.batch(id)
		    }
		}

		var rtopsub = /([^.]+)\.(.+)/
		function emitArray(sid, vm, spath, val, older) {
		    if (sid.indexOf('.*.') > 0) {
		        var arr = sid.match(rtopsub)
		        var top = avalon.vmodels[ arr[1] ]
		        if (top) {
		            var path = arr[2]
		            $emit(top.$events[ path ], vm, spath, val, older)
		        }
		    }
		}

		function emitWidget(whole, spath, val, older) {
		    if (whole && whole[spath]) {
		        var wvm = whole[spath]
		        if (!wvm.$hashcode) {
		            delete whole[spath]
		        } else {
		            var wpath = spath.replace(/^[^.]+\./, '')
		            if (wpath !== spath) {
		                $emit(wvm.$events[wpath], wvm, wpath, val, older)
		            }
		        }
		    }
		}

		function emitWildcard(obj, vm, spath, val, older) {
		    if (obj.__fuzzy__) {
		        obj.__fuzzy__.replace(avalon.rword, function (expr) {
		            var list = obj[expr]
		            var reg = list.reg
		            if (reg && reg.test(spath)) {
		                $emit(list, vm, spath, val, older)
		            }
		            return expr
		        })
		    }
		}


		function define(definition) {
		    var $id = definition.$id
		    if (!$id && avalon.config.debug) {
		        avalon.warn('vm.$id must be specified')
		    }
		    if (avalon.vmodels[$id]) {
		        throw Error('error:[' + $id + '] had defined!')
		    }
		    var vm = $$midway.masterFactory(definition, {}, {
		        pathname: '',
		        id: $id,
		        master: true
		    })

		    return avalon.vmodels[$id] = vm

		}

		function arrayFactory(array, old, heirloom, options) {
		    if (old && old.splice) {
		        var args = [0, old.length].concat(array)
		        ++avalon.suspendUpdate
		        old.splice.apply(old, args)
		        --avalon.suspendUpdate
		        return old
		    } else {
		        for (var i in __array__) {
		            array[i] = __array__[i]
		        }

		        array.notify = function (a, b, c, d) {
		            var vm = heirloom.__vmodel__
		            if (vm) {
		                var path = a === null || a === void 0 ?
		                        options.pathname :
		                        options.pathname + '.' + a
		                vm.$fire(path, b, c)
		                if (!d && !heirloom.$$wait$$ && !avalon.suspendUpdate ) {
		                    batchUpdateView(vm.$id)
		                }
		            }
		        }

		        var hashcode = avalon.makeHashCode('$')
		        options.array = true
		        options.hashcode = hashcode
		        options.id = options.id || hashcode
		        $$midway.initViewModel(array, heirloom, {}, {}, options)

		        for (var j = 0, n = array.length; j < n; j++) {
		            array[j] = modelAdaptor(array[j], 0, {}, {
		                id: array.$id + '.*',
		                master: true
		            })
		        }
		        return array
		    }
		}
		$$midway.arrayFactory = arrayFactory

		var __array__ = {
		    set: function (index, val) {
		        if (((index >>> 0) === index) && this[index] !== val) {
		            if (index > this.length) {
		                throw Error(index + 'set方法的第一个参数不能大于原数组长度')
		            }
		            this.splice(index, 1, val)
		        }
		    },
		    contains: function (el) { //判定是否包含
		        return this.indexOf(el) !== -1
		    },
		    ensure: function (el) {
		        if (!this.contains(el)) { //只有不存在才push
		            this.push(el)
		        }
		        return this
		    },
		    pushArray: function (arr) {
		        return this.push.apply(this, arr)
		    },
		    remove: function (el) { //移除第一个等于给定值的元素
		        return this.removeAt(this.indexOf(el))
		    },
		    removeAt: function (index) { //移除指定索引上的元素
		        if ((index >>> 0) === index) {
		            return this.splice(index, 1)
		        }
		        return []
		    },
		    clear: function () {
		        this.removeAll()
		        return this
		    }
		}
		avalon.define = define

		module.exports = {
		    $$midway: $$midway,
		    $$skipArray: $$skipArray,
		    isSkip: isSkip,
		    __array__: __array__,
		    initEvents: initEvents,
		    makeAccessor: makeAccessor,
		    modelAdaptor: modelAdaptor
		}

	/***/ },
	/* 79 */
	/***/ function(module, exports) {

		
		/**
		 * ------------------------------------------------------------
		 * 属性监听系统 
		 * ------------------------------------------------------------
		 */

		function adjustVm(vm, expr) {
		    var toppath = expr.split(".")[0], other
		    try {
		        if (vm.hasOwnProperty(toppath)) {
		            if (vm.$accessors) {
		                other = vm.$accessors[toppath].get.heirloom.__vmodel__
		            } else {
		                other = Object.getOwnPropertyDescriptor(vm, toppath).get.heirloom.__vmodel__
		            }

		        }
		    } catch (e) {
		    }
		    return other || vm
		}

		function toRegExp(expr) {
		    var arr = expr.split('.')
		    return new RegExp("^" + arr.map(function (el) {
		        return el === '*' ? '(?:[^.]+)' : el
		    }).join('\\.') + '$', 'i')
		}
		function addFuzzy(add, obj, expr) {
		    if (add) {
		        if (obj.__fuzzy__) {
		            if (obj.__fuzzy__.indexOf(',' + expr) === -1) {
		                obj.__fuzzy__ += ',' + expr
		            }
		        } else {
		            obj.__fuzzy__ = expr
		        }
		    }
		}

		function $watch(expr, callback) {
		    var fuzzy = expr.indexOf('.*') > 0 || expr === '*'
		    var vm = fuzzy ? this : $watch.adjust(this, expr)
		    var hive = vm.$events
		    var list = hive[expr] || (hive[expr] = [])
		    if (fuzzy) {
		        list.reg = list.reg || toRegExp(expr)
		    }
		    addFuzzy(fuzzy, hive, expr)
		    if (vm !== this) {
		        addFuzzy(fuzzy, this.$events, expr)
		        this.$events[expr] = list
		    }

		    avalon.Array.ensure(list, callback)

		    return function () {
		        avalon.Array.remove(list, callback)
		    }
		}

		$watch.adjust = adjustVm
		/**
		 * $fire 方法的内部实现
		 * 
		 * @param {Array} list 订阅者数组
		 * @param {Component} vm
		 * @param {String} path 监听属性名或路径
		 * @param {Any} a 当前值 
		 * @param {Any} b 过去值
		 * @param {Number} i 如果抛错,让下一个继续执行
		 * @returns {undefined}
		 */
		function $emit(list, vm, path, a, b, i) {
		    if (list && list.length) {
		        try {
		            for (i = i || list.length - 1; i >= 0; i--) {
		                var callback = list[i]
		                callback.call(vm, a, b, path)
		            }
		        } catch (e) {
		            if (i - 1 > 0)
		                $emit(list, vm, path, a, b, i - 1)
		            avalon.log(e, path)
		        }

		    }
		}


		module.exports = {
		    $emit: $emit,
		    $watch: $watch,
		    adjustVm: adjustVm
		}


	/***/ },
	/* 80 */
	/***/ function(module, exports) {

		//如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
		//标准浏览器使用__defineGetter__, __defineSetter__实现
		var flag = true
		try {
		    Object.defineProperty({}, '_', {
		        value: 'x'
		    })
		} catch (e) {
		    flag = false
		}

		module.exports = flag

	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		
		var canHideProperty = __webpack_require__(80)
		var $$skipArray = __webpack_require__(68)


		var defineProperties = Object.defineProperties
		var defineProperty

		var expose = new Date() - 0

		if (!canHideProperty) {
		    if ('__defineGetter__' in avalon) {
		        defineProperty = function (obj, prop, desc) {
		            if ('value' in desc) {
		                obj[prop] = desc.value
		            }
		            if ('get' in desc) {
		                obj.__defineGetter__(prop, desc.get)
		            }
		            if ('set' in desc) {
		                obj.__defineSetter__(prop, desc.set)
		            }
		            return obj
		        }
		        defineProperties = function (obj, descs) {
		            for (var prop in descs) {
		                if (descs.hasOwnProperty(prop)) {
		                    defineProperty(obj, prop, descs[prop])
		                }
		            }
		            return obj
		        }
		    }
		    if (avalon.msie) {
		        var VBClassPool = {}
		        window.execScript([// jshint ignore:line
		            'Function parseVB(code)',
		            '\tExecuteGlobal(code)',
		            'End Function' //转换一段文本为VB代码
		        ].join('\n'), 'VBScript');
		        
		        function VBMediator(instance, accessors, name, value) {// jshint ignore:line
		            var accessor = accessors[name]
		            if (arguments.length === 4) {
		                accessor.set.call(instance, value)
		            } else {
		                return accessor.get.call(instance)
		            }
		        }
		        defineProperties = function (name, accessors, properties) {
		            // jshint ignore:line
		            var buffer = []
		            buffer.push(
		                    '\r\n\tPrivate [__data__], [__proxy__]',
		                    '\tPublic Default Function [__const__](d' + expose + ', p' + expose + ')',
		                    '\t\tSet [__data__] = d' + expose + ': set [__proxy__] = p' + expose,
		                    '\t\tSet [__const__] = Me', //链式调用
		                    '\tEnd Function')
		            //添加普通属性,因为VBScript对象不能像JS那样随意增删属性，必须在这里预先定义好
		            var uniq = {
		               __proxy__: true,
		               __data__: true,
		               __const__: true
		            }

		            //添加访问器属性 
		            for (name in accessors) {
		                uniq[name] = true
		                buffer.push(
		                        //由于不知对方会传入什么,因此set, let都用上
		                        '\tPublic Property Let [' + name + '](val' + expose + ')', //setter
		                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
		                        '\tEnd Property',
		                        '\tPublic Property Set [' + name + '](val' + expose + ')', //setter
		                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
		                        '\tEnd Property',
		                        '\tPublic Property Get [' + name + ']', //getter
		                        '\tOn Error Resume Next', //必须优先使用set语句,否则它会误将数组当字符串返回
		                        '\t\tSet[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
		                        '\tIf Err.Number <> 0 Then',
		                        '\t\t[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
		                        '\tEnd If',
		                        '\tOn Error Goto 0',
		                        '\tEnd Property')

		            }
		            for (name in properties) {
		                if (uniq[name] !== true) {
		                    uniq[name] = true
		                    buffer.push('\tPublic [' + name + ']')
		                }
		            }
		            for (name in $$skipArray) {
		                if (uniq[name] !== true) {
		                    uniq[name] = true
		                    buffer.push('\tPublic [' + name + ']')
		                }
		            }
		            buffer.push('\tPublic [' + 'hasOwnProperty' + ']')
		            buffer.push('End Class')
		            var body = buffer.join('\r\n')
		            var className = VBClassPool[body]
		            if (!className) {
		                className = avalon.makeHashCode('VBClass')
		                
		                window.parseVB('Class ' + className + body)
		                window.parseVB([
		                    'Function ' + className + 'Factory(a, b)', //创建实例并传入两个关键的参数
		                    '\tDim o',
		                    '\tSet o = (New ' + className + ')(a, b)',
		                    '\tSet ' + className + 'Factory = o',
		                    'End Function'
		                ].join('\r\n'))
		                VBClassPool[body] = className
		            }
		            var ret = window[className + 'Factory'](accessors, VBMediator) //得到其产品
		            return ret //得到其产品
		        }
		    }
		}

		module.exports = defineProperties


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var avalon = __webpack_require__(1);
	__webpack_require__(3)

	avalon.component('ms-modal', {
	    template: __webpack_require__(13),
	    defaults: {
	        title: 'modal',
	        isShow: true
	    }
	})

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.i(__webpack_require__(6), "");

	// module
	exports.push([module.id, ".btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #d9d9d9;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 2px 14px;\n  font-size: 14px;\n  border-radius: 6px;\n  -webkit-user-select: none;\n  user-select: none;\n  color: #666;\n  outline: none;\n  background-color: #fff; }\n  .btn:hover {\n    background: #f7f7f7; }\n  .btn:active {\n    background: #efefef;\n    transition: none; }\n  .btn:disabled {\n    color: #ccc;\n    cursor: no-drop; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #45bff6;\n    border-color: #45bff6; }\n  .btn-primary:active {\n    color: #fff;\n    background-color: #15aff4;\n    border-color: #15aff4;\n    transition: none; }\n  .btn-primary:disabled {\n    color: #fff;\n    background-color: #8ed8fa;\n    border-color: #8ed8fa;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5FBC29;\n  border-color: #5FBC29; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #6ad12e;\n    border-color: #6ad12e; }\n  .btn-success:active {\n    color: #fff;\n    background-color: #54a724;\n    border-color: #54a724;\n    transition: none; }\n  .btn-success:disabled {\n    color: #fff;\n    background-color: #96df6c;\n    border-color: #96df6c;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-info {\n  color: #fff;\n  background-color: #01B3CA;\n  border-color: #01B3CA; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #01c9e3;\n    border-color: #01c9e3; }\n  .btn-info:active {\n    color: #fff;\n    background-color: #019db1;\n    border-color: #019db1;\n    transition: none; }\n  .btn-info:disabled {\n    color: #fff;\n    background-color: #33e7fe;\n    border-color: #33e7fe;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #FAC450;\n  border-color: #FAC450; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #fbcc69;\n    border-color: #fbcc69; }\n  .btn-warning:active {\n    color: #fff;\n    background-color: #f9bc37;\n    border-color: #f9bc37;\n    transition: none; }\n  .btn-warning:disabled {\n    color: #fff;\n    background-color: #fde5b3;\n    border-color: #fde5b3;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #E01515;\n  border-color: #E01515; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #ea2424;\n    border-color: #ea2424; }\n  .btn-danger:active {\n    color: #fff;\n    background-color: #c91313;\n    border-color: #c91313;\n    transition: none; }\n  .btn-danger:disabled {\n    color: #fff;\n    background-color: #f16a6a;\n    border-color: #f16a6a;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-lg {\n  padding: 6px 18px; }\n\n.btn-sm {\n  padding: 0px 10px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.modal-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(55, 55, 55, 0.6);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.confirm-content {\n  padding-left: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.modal-confirm {\n  width: 400px;\n  box-sizing: border-box;\n  padding: 30px 40px;\n  background-color: #fff;\n  border-radius: 6px;\n  transition: transform .3s ease; }\n  .modal-confirm i {\n    color: #fa0;\n    font-size: 24px;\n    position: relative;\n    top: 2px; }\n  .modal-confirm .confirm-btns {\n    text-align: right; }\n\n.modal-box {\n  width: 520px;\n  box-sizing: border-box;\n  background-color: #fff;\n  border-radius: 6px; }\n\n@media only screen and (max-width: 640px) {\n  .modal-confirm {\n    width: 100%;\n    margin: 0 20px;\n    padding: 10px 20px; }\n  .modal-box {\n    width: 100%;\n    margin: 0 20px; } }\n\n.modal-header {\n  padding: 13px 18px 14px 16px;\n  border-bottom: 1px solid #e9e9e9;\n  position: relative; }\n  .modal-header i {\n    position: absolute;\n    right: 20px;\n    top: 15px;\n    font-size: 14px;\n    cursor: pointer; }\n  .modal-header h3 {\n    font-size: 14px; }\n\n.modal-body {\n  padding: 16px; }\n\n.modal-close {\n  color: #000;\n  font-weight: 700; }\n\n.modal-footer {\n  padding: 10px 18px 10px 10px;\n  border-top: 1px solid #e9e9e9;\n  background: #fff;\n  border-radius: 0 0 6px 6px;\n  text-align: right; }\n\n.modal-enter {\n  opacity: 0; }\n\n.modal-enter-active {\n  opacity: 1; }\n  .modal-enter-active .modal-confirm {\n    transform: scale(1.1); }\n  .modal-enter-active .modal-box {\n    transform: scale(1.1); }\n\n.modal-leave {\n  opacity: 1; }\n\n.modal-leave-active {\n  opacity: 0; }\n  .modal-leave-active .modal-confirm {\n    transform: scale(1.1); }\n  .modal-leave-active .modal-box {\n    transform: scale(1.1); }\n\n.modal-enter, .modal-leave {\n  transition: all .3s ease; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*!\r\n *  Font Awesome 3.2.1\r\n *  the iconic font designed for Bootstrap\r\n *  ------------------------------------------------------------------------------\r\n *  The full suite of pictographic icons, examples, and documentation can be\r\n *  found at http://fontawesome.io.  Stay up to date on Twitter at\r\n *  http://twitter.com/fontawesome.\r\n *\r\n *  License\r\n *  ------------------------------------------------------------------------------\r\n *  - The Font Awesome font is licensed under SIL OFL 1.1 -\r\n *    http://scripts.sil.org/OFL\r\n *  - Font Awesome CSS, LESS, and SASS files are licensed under MIT License -\r\n *    http://opensource.org/licenses/mit-license.html\r\n *  - Font Awesome documentation licensed under CC BY 3.0 -\r\n *    http://creativecommons.org/licenses/by/3.0/\r\n *  - Attribution is no longer required in Font Awesome 3.0, but much appreciated:\r\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\r\n *\r\n *  Author - Dave Gandy\r\n *  ------------------------------------------------------------------------------\r\n *  Email: dave@fontawesome.io\r\n *  Twitter: http://twitter.com/byscuits\r\n *  Work: Lead Product Designer @ Kyruus - http://kyruus.com\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url(" + __webpack_require__(7) + ");\r\n  src: url(" + __webpack_require__(8) + "?#iefix&v=3.2.1) format('embedded-opentype'),\r\n      url(" + __webpack_require__(9) + ") format('woff'),\r\n      url(" + __webpack_require__(10) + ") format('truetype'), \r\n      url(" + __webpack_require__(11) + "#fontawesomeregular?v=3.2.1) format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n/* FONT AWESOME CORE\r\n * -------------------------- */\r\n[class^=\"icon-\"],\r\n[class*=\" icon-\"] {\r\n  font-family: FontAwesome;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  text-decoration: inherit;\r\n  -webkit-font-smoothing: antialiased;\r\n  *margin-right: .3em;\r\n}\r\n[class^=\"icon-\"]:before,\r\n[class*=\" icon-\"]:before {\r\n  text-decoration: inherit;\r\n  display: inline-block;\r\n  speak: none;\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.icon-large:before {\r\n  vertical-align: -10%;\r\n  font-size: 1.3333333333333333em;\r\n}\r\n/* makes sure icons active on rollover in links */\r\na [class^=\"icon-\"],\r\na [class*=\" icon-\"] {\r\n  display: inline;\r\n}\r\n/* increased font size for icon-large */\r\n[class^=\"icon-\"].icon-fixed-width,\r\n[class*=\" icon-\"].icon-fixed-width {\r\n  display: inline-block;\r\n  width: 1.1428571428571428em;\r\n  text-align: right;\r\n  padding-right: 0.2857142857142857em;\r\n}\r\n[class^=\"icon-\"].icon-fixed-width.icon-large,\r\n[class*=\" icon-\"].icon-fixed-width.icon-large {\r\n  width: 1.4285714285714286em;\r\n}\r\n.icons-ul {\r\n  margin-left: 2.142857142857143em;\r\n  list-style-type: none;\r\n}\r\n.icons-ul > li {\r\n  position: relative;\r\n}\r\n.icons-ul .icon-li {\r\n  position: absolute;\r\n  left: -2.142857142857143em;\r\n  width: 2.142857142857143em;\r\n  text-align: center;\r\n  line-height: inherit;\r\n}\r\n[class^=\"icon-\"].hide,\r\n[class*=\" icon-\"].hide {\r\n  display: none;\r\n}\r\n.icon-muted {\r\n  color: #eeeeee;\r\n}\r\n.icon-light {\r\n  color: #ffffff;\r\n}\r\n.icon-dark {\r\n  color: #333333;\r\n}\r\n.icon-border {\r\n  border: solid 1px #eeeeee;\r\n  padding: .2em .25em .15em;\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.icon-2x {\r\n  font-size: 2em;\r\n}\r\n.icon-2x.icon-border {\r\n  border-width: 2px;\r\n  -webkit-border-radius: 4px;\r\n  -moz-border-radius: 4px;\r\n  border-radius: 4px;\r\n}\r\n.icon-3x {\r\n  font-size: 3em;\r\n}\r\n.icon-3x.icon-border {\r\n  border-width: 3px;\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  border-radius: 5px;\r\n}\r\n.icon-4x {\r\n  font-size: 4em;\r\n}\r\n.icon-4x.icon-border {\r\n  border-width: 4px;\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n}\r\n.icon-5x {\r\n  font-size: 5em;\r\n}\r\n.icon-5x.icon-border {\r\n  border-width: 5px;\r\n  -webkit-border-radius: 7px;\r\n  -moz-border-radius: 7px;\r\n  border-radius: 7px;\r\n}\r\n.pull-right {\r\n  float: right;\r\n}\r\n.pull-left {\r\n  float: left;\r\n}\r\n[class^=\"icon-\"].pull-left,\r\n[class*=\" icon-\"].pull-left {\r\n  margin-right: .3em;\r\n}\r\n[class^=\"icon-\"].pull-right,\r\n[class*=\" icon-\"].pull-right {\r\n  margin-left: .3em;\r\n}\r\n/* BOOTSTRAP SPECIFIC CLASSES\r\n * -------------------------- */\r\n/* Bootstrap 2.0 sprites.less reset */\r\n[class^=\"icon-\"],\r\n[class*=\" icon-\"] {\r\n  display: inline;\r\n  width: auto;\r\n  height: auto;\r\n  line-height: normal;\r\n  vertical-align: baseline;\r\n  background-image: none;\r\n  background-position: 0% 0%;\r\n  background-repeat: repeat;\r\n  margin-top: 0;\r\n}\r\n/* more sprites.less reset */\r\n.icon-white,\r\n.nav-pills > .active > a > [class^=\"icon-\"],\r\n.nav-pills > .active > a > [class*=\" icon-\"],\r\n.nav-list > .active > a > [class^=\"icon-\"],\r\n.nav-list > .active > a > [class*=\" icon-\"],\r\n.navbar-inverse .nav > .active > a > [class^=\"icon-\"],\r\n.navbar-inverse .nav > .active > a > [class*=\" icon-\"],\r\n.dropdown-menu > li > a:hover > [class^=\"icon-\"],\r\n.dropdown-menu > li > a:hover > [class*=\" icon-\"],\r\n.dropdown-menu > .active > a > [class^=\"icon-\"],\r\n.dropdown-menu > .active > a > [class*=\" icon-\"],\r\n.dropdown-submenu:hover > a > [class^=\"icon-\"],\r\n.dropdown-submenu:hover > a > [class*=\" icon-\"] {\r\n  background-image: none;\r\n}\r\n/* keeps Bootstrap styles with and without icons the same */\r\n.btn [class^=\"icon-\"].icon-large,\r\n.nav [class^=\"icon-\"].icon-large,\r\n.btn [class*=\" icon-\"].icon-large,\r\n.nav [class*=\" icon-\"].icon-large {\r\n  line-height: .9em;\r\n}\r\n.btn [class^=\"icon-\"].icon-spin,\r\n.nav [class^=\"icon-\"].icon-spin,\r\n.btn [class*=\" icon-\"].icon-spin,\r\n.nav [class*=\" icon-\"].icon-spin {\r\n  display: inline-block;\r\n}\r\n.nav-tabs [class^=\"icon-\"],\r\n.nav-pills [class^=\"icon-\"],\r\n.nav-tabs [class*=\" icon-\"],\r\n.nav-pills [class*=\" icon-\"],\r\n.nav-tabs [class^=\"icon-\"].icon-large,\r\n.nav-pills [class^=\"icon-\"].icon-large,\r\n.nav-tabs [class*=\" icon-\"].icon-large,\r\n.nav-pills [class*=\" icon-\"].icon-large {\r\n  line-height: .9em;\r\n}\r\n.btn [class^=\"icon-\"].pull-left.icon-2x,\r\n.btn [class*=\" icon-\"].pull-left.icon-2x,\r\n.btn [class^=\"icon-\"].pull-right.icon-2x,\r\n.btn [class*=\" icon-\"].pull-right.icon-2x {\r\n  margin-top: .18em;\r\n}\r\n.btn [class^=\"icon-\"].icon-spin.icon-large,\r\n.btn [class*=\" icon-\"].icon-spin.icon-large {\r\n  line-height: .8em;\r\n}\r\n.btn.btn-small [class^=\"icon-\"].pull-left.icon-2x,\r\n.btn.btn-small [class*=\" icon-\"].pull-left.icon-2x,\r\n.btn.btn-small [class^=\"icon-\"].pull-right.icon-2x,\r\n.btn.btn-small [class*=\" icon-\"].pull-right.icon-2x {\r\n  margin-top: .25em;\r\n}\r\n.btn.btn-large [class^=\"icon-\"],\r\n.btn.btn-large [class*=\" icon-\"] {\r\n  margin-top: 0;\r\n}\r\n.btn.btn-large [class^=\"icon-\"].pull-left.icon-2x,\r\n.btn.btn-large [class*=\" icon-\"].pull-left.icon-2x,\r\n.btn.btn-large [class^=\"icon-\"].pull-right.icon-2x,\r\n.btn.btn-large [class*=\" icon-\"].pull-right.icon-2x {\r\n  margin-top: .05em;\r\n}\r\n.btn.btn-large [class^=\"icon-\"].pull-left.icon-2x,\r\n.btn.btn-large [class*=\" icon-\"].pull-left.icon-2x {\r\n  margin-right: .2em;\r\n}\r\n.btn.btn-large [class^=\"icon-\"].pull-right.icon-2x,\r\n.btn.btn-large [class*=\" icon-\"].pull-right.icon-2x {\r\n  margin-left: .2em;\r\n}\r\n/* Fixes alignment in nav lists */\r\n.nav-list [class^=\"icon-\"],\r\n.nav-list [class*=\" icon-\"] {\r\n  line-height: inherit;\r\n}\r\n/* EXTRAS\r\n * -------------------------- */\r\n/* Stacked and layered icon */\r\n.icon-stack {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  vertical-align: -35%;\r\n}\r\n.icon-stack [class^=\"icon-\"],\r\n.icon-stack [class*=\" icon-\"] {\r\n  display: block;\r\n  text-align: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-size: 1em;\r\n  line-height: inherit;\r\n  *line-height: 2em;\r\n}\r\n.icon-stack .icon-stack-base {\r\n  font-size: 2em;\r\n  *line-height: 1em;\r\n}\r\n/* Animated rotating icon */\r\n.icon-spin {\r\n  display: inline-block;\r\n  -moz-animation: spin 2s infinite linear;\r\n  -o-animation: spin 2s infinite linear;\r\n  -webkit-animation: spin 2s infinite linear;\r\n  animation: spin 2s infinite linear;\r\n}\r\n/* Prevent stack and spinners from being taken inline when inside a link */\r\na .icon-stack,\r\na .icon-spin {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n}\r\n@-moz-keyframes spin {\r\n  0% {\r\n    -moz-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -moz-transform: rotate(359deg);\r\n  }\r\n}\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n  }\r\n}\r\n@-o-keyframes spin {\r\n  0% {\r\n    -o-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -o-transform: rotate(359deg);\r\n  }\r\n}\r\n@-ms-keyframes spin {\r\n  0% {\r\n    -ms-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -ms-transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n/* Icon rotations and mirroring */\r\n.icon-rotate-90:before {\r\n  -webkit-transform: rotate(90deg);\r\n  -moz-transform: rotate(90deg);\r\n  -ms-transform: rotate(90deg);\r\n  -o-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\r\n}\r\n.icon-rotate-180:before {\r\n  -webkit-transform: rotate(180deg);\r\n  -moz-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n  -o-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\r\n}\r\n.icon-rotate-270:before {\r\n  -webkit-transform: rotate(270deg);\r\n  -moz-transform: rotate(270deg);\r\n  -ms-transform: rotate(270deg);\r\n  -o-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\r\n}\r\n.icon-flip-horizontal:before {\r\n  -webkit-transform: scale(-1, 1);\r\n  -moz-transform: scale(-1, 1);\r\n  -ms-transform: scale(-1, 1);\r\n  -o-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n.icon-flip-vertical:before {\r\n  -webkit-transform: scale(1, -1);\r\n  -moz-transform: scale(1, -1);\r\n  -ms-transform: scale(1, -1);\r\n  -o-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n/* ensure rotation occurs inside anchor tags */\r\na .icon-rotate-90:before,\r\na .icon-rotate-180:before,\r\na .icon-rotate-270:before,\r\na .icon-flip-horizontal:before,\r\na .icon-flip-vertical:before {\r\n  display: inline-block;\r\n}\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n.icon-glass:before {\r\n  content: \"\\F000\";\r\n}\r\n.icon-music:before {\r\n  content: \"\\F001\";\r\n}\r\n.icon-search:before {\r\n  content: \"\\F002\";\r\n}\r\n.icon-envelope-alt:before {\r\n  content: \"\\F003\";\r\n}\r\n.icon-heart:before {\r\n  content: \"\\F004\";\r\n}\r\n.icon-star:before {\r\n  content: \"\\F005\";\r\n}\r\n.icon-star-empty:before {\r\n  content: \"\\F006\";\r\n}\r\n.icon-user:before {\r\n  content: \"\\F007\";\r\n}\r\n.icon-film:before {\r\n  content: \"\\F008\";\r\n}\r\n.icon-th-large:before {\r\n  content: \"\\F009\";\r\n}\r\n.icon-th:before {\r\n  content: \"\\F00A\";\r\n}\r\n.icon-th-list:before {\r\n  content: \"\\F00B\";\r\n}\r\n.icon-ok:before {\r\n  content: \"\\F00C\";\r\n}\r\n.icon-remove:before {\r\n  content: \"\\F00D\";\r\n}\r\n.icon-zoom-in:before {\r\n  content: \"\\F00E\";\r\n}\r\n.icon-zoom-out:before {\r\n  content: \"\\F010\";\r\n}\r\n.icon-power-off:before,\r\n.icon-off:before {\r\n  content: \"\\F011\";\r\n}\r\n.icon-signal:before {\r\n  content: \"\\F012\";\r\n}\r\n.icon-gear:before,\r\n.icon-cog:before {\r\n  content: \"\\F013\";\r\n}\r\n.icon-trash:before {\r\n  content: \"\\F014\";\r\n}\r\n.icon-home:before {\r\n  content: \"\\F015\";\r\n}\r\n.icon-file-alt:before {\r\n  content: \"\\F016\";\r\n}\r\n.icon-time:before {\r\n  content: \"\\F017\";\r\n}\r\n.icon-road:before {\r\n  content: \"\\F018\";\r\n}\r\n.icon-download-alt:before {\r\n  content: \"\\F019\";\r\n}\r\n.icon-download:before {\r\n  content: \"\\F01A\";\r\n}\r\n.icon-upload:before {\r\n  content: \"\\F01B\";\r\n}\r\n.icon-inbox:before {\r\n  content: \"\\F01C\";\r\n}\r\n.icon-play-circle:before {\r\n  content: \"\\F01D\";\r\n}\r\n.icon-rotate-right:before,\r\n.icon-repeat:before {\r\n  content: \"\\F01E\";\r\n}\r\n.icon-refresh:before {\r\n  content: \"\\F021\";\r\n}\r\n.icon-list-alt:before {\r\n  content: \"\\F022\";\r\n}\r\n.icon-lock:before {\r\n  content: \"\\F023\";\r\n}\r\n.icon-flag:before {\r\n  content: \"\\F024\";\r\n}\r\n.icon-headphones:before {\r\n  content: \"\\F025\";\r\n}\r\n.icon-volume-off:before {\r\n  content: \"\\F026\";\r\n}\r\n.icon-volume-down:before {\r\n  content: \"\\F027\";\r\n}\r\n.icon-volume-up:before {\r\n  content: \"\\F028\";\r\n}\r\n.icon-qrcode:before {\r\n  content: \"\\F029\";\r\n}\r\n.icon-barcode:before {\r\n  content: \"\\F02A\";\r\n}\r\n.icon-tag:before {\r\n  content: \"\\F02B\";\r\n}\r\n.icon-tags:before {\r\n  content: \"\\F02C\";\r\n}\r\n.icon-book:before {\r\n  content: \"\\F02D\";\r\n}\r\n.icon-bookmark:before {\r\n  content: \"\\F02E\";\r\n}\r\n.icon-print:before {\r\n  content: \"\\F02F\";\r\n}\r\n.icon-camera:before {\r\n  content: \"\\F030\";\r\n}\r\n.icon-font:before {\r\n  content: \"\\F031\";\r\n}\r\n.icon-bold:before {\r\n  content: \"\\F032\";\r\n}\r\n.icon-italic:before {\r\n  content: \"\\F033\";\r\n}\r\n.icon-text-height:before {\r\n  content: \"\\F034\";\r\n}\r\n.icon-text-width:before {\r\n  content: \"\\F035\";\r\n}\r\n.icon-align-left:before {\r\n  content: \"\\F036\";\r\n}\r\n.icon-align-center:before {\r\n  content: \"\\F037\";\r\n}\r\n.icon-align-right:before {\r\n  content: \"\\F038\";\r\n}\r\n.icon-align-justify:before {\r\n  content: \"\\F039\";\r\n}\r\n.icon-list:before {\r\n  content: \"\\F03A\";\r\n}\r\n.icon-indent-left:before {\r\n  content: \"\\F03B\";\r\n}\r\n.icon-indent-right:before {\r\n  content: \"\\F03C\";\r\n}\r\n.icon-facetime-video:before {\r\n  content: \"\\F03D\";\r\n}\r\n.icon-picture:before {\r\n  content: \"\\F03E\";\r\n}\r\n.icon-pencil:before {\r\n  content: \"\\F040\";\r\n}\r\n.icon-map-marker:before {\r\n  content: \"\\F041\";\r\n}\r\n.icon-adjust:before {\r\n  content: \"\\F042\";\r\n}\r\n.icon-tint:before {\r\n  content: \"\\F043\";\r\n}\r\n.icon-edit:before {\r\n  content: \"\\F044\";\r\n}\r\n.icon-share:before {\r\n  content: \"\\F045\";\r\n}\r\n.icon-check:before {\r\n  content: \"\\F046\";\r\n}\r\n.icon-move:before {\r\n  content: \"\\F047\";\r\n}\r\n.icon-step-backward:before {\r\n  content: \"\\F048\";\r\n}\r\n.icon-fast-backward:before {\r\n  content: \"\\F049\";\r\n}\r\n.icon-backward:before {\r\n  content: \"\\F04A\";\r\n}\r\n.icon-play:before {\r\n  content: \"\\F04B\";\r\n}\r\n.icon-pause:before {\r\n  content: \"\\F04C\";\r\n}\r\n.icon-stop:before {\r\n  content: \"\\F04D\";\r\n}\r\n.icon-forward:before {\r\n  content: \"\\F04E\";\r\n}\r\n.icon-fast-forward:before {\r\n  content: \"\\F050\";\r\n}\r\n.icon-step-forward:before {\r\n  content: \"\\F051\";\r\n}\r\n.icon-eject:before {\r\n  content: \"\\F052\";\r\n}\r\n.icon-chevron-left:before {\r\n  content: \"\\F053\";\r\n}\r\n.icon-chevron-right:before {\r\n  content: \"\\F054\";\r\n}\r\n.icon-plus-sign:before {\r\n  content: \"\\F055\";\r\n}\r\n.icon-minus-sign:before {\r\n  content: \"\\F056\";\r\n}\r\n.icon-remove-sign:before {\r\n  content: \"\\F057\";\r\n}\r\n.icon-ok-sign:before {\r\n  content: \"\\F058\";\r\n}\r\n.icon-question-sign:before {\r\n  content: \"\\F059\";\r\n}\r\n.icon-info-sign:before {\r\n  content: \"\\F05A\";\r\n}\r\n.icon-screenshot:before {\r\n  content: \"\\F05B\";\r\n}\r\n.icon-remove-circle:before {\r\n  content: \"\\F05C\";\r\n}\r\n.icon-ok-circle:before {\r\n  content: \"\\F05D\";\r\n}\r\n.icon-ban-circle:before {\r\n  content: \"\\F05E\";\r\n}\r\n.icon-arrow-left:before {\r\n  content: \"\\F060\";\r\n}\r\n.icon-arrow-right:before {\r\n  content: \"\\F061\";\r\n}\r\n.icon-arrow-up:before {\r\n  content: \"\\F062\";\r\n}\r\n.icon-arrow-down:before {\r\n  content: \"\\F063\";\r\n}\r\n.icon-mail-forward:before,\r\n.icon-share-alt:before {\r\n  content: \"\\F064\";\r\n}\r\n.icon-resize-full:before {\r\n  content: \"\\F065\";\r\n}\r\n.icon-resize-small:before {\r\n  content: \"\\F066\";\r\n}\r\n.icon-plus:before {\r\n  content: \"\\F067\";\r\n}\r\n.icon-minus:before {\r\n  content: \"\\F068\";\r\n}\r\n.icon-asterisk:before {\r\n  content: \"\\F069\";\r\n}\r\n.icon-exclamation-sign:before {\r\n  content: \"\\F06A\";\r\n}\r\n.icon-gift:before {\r\n  content: \"\\F06B\";\r\n}\r\n.icon-leaf:before {\r\n  content: \"\\F06C\";\r\n}\r\n.icon-fire:before {\r\n  content: \"\\F06D\";\r\n}\r\n.icon-eye-open:before {\r\n  content: \"\\F06E\";\r\n}\r\n.icon-eye-close:before {\r\n  content: \"\\F070\";\r\n}\r\n.icon-warning-sign:before {\r\n  content: \"\\F071\";\r\n}\r\n.icon-plane:before {\r\n  content: \"\\F072\";\r\n}\r\n.icon-calendar:before {\r\n  content: \"\\F073\";\r\n}\r\n.icon-random:before {\r\n  content: \"\\F074\";\r\n}\r\n.icon-comment:before {\r\n  content: \"\\F075\";\r\n}\r\n.icon-magnet:before {\r\n  content: \"\\F076\";\r\n}\r\n.icon-chevron-up:before {\r\n  content: \"\\F077\";\r\n}\r\n.icon-chevron-down:before {\r\n  content: \"\\F078\";\r\n}\r\n.icon-retweet:before {\r\n  content: \"\\F079\";\r\n}\r\n.icon-shopping-cart:before {\r\n  content: \"\\F07A\";\r\n}\r\n.icon-folder-close:before {\r\n  content: \"\\F07B\";\r\n}\r\n.icon-folder-open:before {\r\n  content: \"\\F07C\";\r\n}\r\n.icon-resize-vertical:before {\r\n  content: \"\\F07D\";\r\n}\r\n.icon-resize-horizontal:before {\r\n  content: \"\\F07E\";\r\n}\r\n.icon-bar-chart:before {\r\n  content: \"\\F080\";\r\n}\r\n.icon-twitter-sign:before {\r\n  content: \"\\F081\";\r\n}\r\n.icon-facebook-sign:before {\r\n  content: \"\\F082\";\r\n}\r\n.icon-camera-retro:before {\r\n  content: \"\\F083\";\r\n}\r\n.icon-key:before {\r\n  content: \"\\F084\";\r\n}\r\n.icon-gears:before,\r\n.icon-cogs:before {\r\n  content: \"\\F085\";\r\n}\r\n.icon-comments:before {\r\n  content: \"\\F086\";\r\n}\r\n.icon-thumbs-up-alt:before {\r\n  content: \"\\F087\";\r\n}\r\n.icon-thumbs-down-alt:before {\r\n  content: \"\\F088\";\r\n}\r\n.icon-star-half:before {\r\n  content: \"\\F089\";\r\n}\r\n.icon-heart-empty:before {\r\n  content: \"\\F08A\";\r\n}\r\n.icon-signout:before {\r\n  content: \"\\F08B\";\r\n}\r\n.icon-linkedin-sign:before {\r\n  content: \"\\F08C\";\r\n}\r\n.icon-pushpin:before {\r\n  content: \"\\F08D\";\r\n}\r\n.icon-external-link:before {\r\n  content: \"\\F08E\";\r\n}\r\n.icon-signin:before {\r\n  content: \"\\F090\";\r\n}\r\n.icon-trophy:before {\r\n  content: \"\\F091\";\r\n}\r\n.icon-github-sign:before {\r\n  content: \"\\F092\";\r\n}\r\n.icon-upload-alt:before {\r\n  content: \"\\F093\";\r\n}\r\n.icon-lemon:before {\r\n  content: \"\\F094\";\r\n}\r\n.icon-phone:before {\r\n  content: \"\\F095\";\r\n}\r\n.icon-unchecked:before,\r\n.icon-check-empty:before {\r\n  content: \"\\F096\";\r\n}\r\n.icon-bookmark-empty:before {\r\n  content: \"\\F097\";\r\n}\r\n.icon-phone-sign:before {\r\n  content: \"\\F098\";\r\n}\r\n.icon-twitter:before {\r\n  content: \"\\F099\";\r\n}\r\n.icon-facebook:before {\r\n  content: \"\\F09A\";\r\n}\r\n.icon-github:before {\r\n  content: \"\\F09B\";\r\n}\r\n.icon-unlock:before {\r\n  content: \"\\F09C\";\r\n}\r\n.icon-credit-card:before {\r\n  content: \"\\F09D\";\r\n}\r\n.icon-rss:before {\r\n  content: \"\\F09E\";\r\n}\r\n.icon-hdd:before {\r\n  content: \"\\F0A0\";\r\n}\r\n.icon-bullhorn:before {\r\n  content: \"\\F0A1\";\r\n}\r\n.icon-bell:before {\r\n  content: \"\\F0A2\";\r\n}\r\n.icon-certificate:before {\r\n  content: \"\\F0A3\";\r\n}\r\n.icon-hand-right:before {\r\n  content: \"\\F0A4\";\r\n}\r\n.icon-hand-left:before {\r\n  content: \"\\F0A5\";\r\n}\r\n.icon-hand-up:before {\r\n  content: \"\\F0A6\";\r\n}\r\n.icon-hand-down:before {\r\n  content: \"\\F0A7\";\r\n}\r\n.icon-circle-arrow-left:before {\r\n  content: \"\\F0A8\";\r\n}\r\n.icon-circle-arrow-right:before {\r\n  content: \"\\F0A9\";\r\n}\r\n.icon-circle-arrow-up:before {\r\n  content: \"\\F0AA\";\r\n}\r\n.icon-circle-arrow-down:before {\r\n  content: \"\\F0AB\";\r\n}\r\n.icon-globe:before {\r\n  content: \"\\F0AC\";\r\n}\r\n.icon-wrench:before {\r\n  content: \"\\F0AD\";\r\n}\r\n.icon-tasks:before {\r\n  content: \"\\F0AE\";\r\n}\r\n.icon-filter:before {\r\n  content: \"\\F0B0\";\r\n}\r\n.icon-briefcase:before {\r\n  content: \"\\F0B1\";\r\n}\r\n.icon-fullscreen:before {\r\n  content: \"\\F0B2\";\r\n}\r\n.icon-group:before {\r\n  content: \"\\F0C0\";\r\n}\r\n.icon-link:before {\r\n  content: \"\\F0C1\";\r\n}\r\n.icon-cloud:before {\r\n  content: \"\\F0C2\";\r\n}\r\n.icon-beaker:before {\r\n  content: \"\\F0C3\";\r\n}\r\n.icon-cut:before {\r\n  content: \"\\F0C4\";\r\n}\r\n.icon-copy:before {\r\n  content: \"\\F0C5\";\r\n}\r\n.icon-paperclip:before,\r\n.icon-paper-clip:before {\r\n  content: \"\\F0C6\";\r\n}\r\n.icon-save:before {\r\n  content: \"\\F0C7\";\r\n}\r\n.icon-sign-blank:before {\r\n  content: \"\\F0C8\";\r\n}\r\n.icon-reorder:before {\r\n  content: \"\\F0C9\";\r\n}\r\n.icon-list-ul:before {\r\n  content: \"\\F0CA\";\r\n}\r\n.icon-list-ol:before {\r\n  content: \"\\F0CB\";\r\n}\r\n.icon-strikethrough:before {\r\n  content: \"\\F0CC\";\r\n}\r\n.icon-underline:before {\r\n  content: \"\\F0CD\";\r\n}\r\n.icon-table:before {\r\n  content: \"\\F0CE\";\r\n}\r\n.icon-magic:before {\r\n  content: \"\\F0D0\";\r\n}\r\n.icon-truck:before {\r\n  content: \"\\F0D1\";\r\n}\r\n.icon-pinterest:before {\r\n  content: \"\\F0D2\";\r\n}\r\n.icon-pinterest-sign:before {\r\n  content: \"\\F0D3\";\r\n}\r\n.icon-google-plus-sign:before {\r\n  content: \"\\F0D4\";\r\n}\r\n.icon-google-plus:before {\r\n  content: \"\\F0D5\";\r\n}\r\n.icon-money:before {\r\n  content: \"\\F0D6\";\r\n}\r\n.icon-caret-down:before {\r\n  content: \"\\F0D7\";\r\n}\r\n.icon-caret-up:before {\r\n  content: \"\\F0D8\";\r\n}\r\n.icon-caret-left:before {\r\n  content: \"\\F0D9\";\r\n}\r\n.icon-caret-right:before {\r\n  content: \"\\F0DA\";\r\n}\r\n.icon-columns:before {\r\n  content: \"\\F0DB\";\r\n}\r\n.icon-sort:before {\r\n  content: \"\\F0DC\";\r\n}\r\n.icon-sort-down:before {\r\n  content: \"\\F0DD\";\r\n}\r\n.icon-sort-up:before {\r\n  content: \"\\F0DE\";\r\n}\r\n.icon-envelope:before {\r\n  content: \"\\F0E0\";\r\n}\r\n.icon-linkedin:before {\r\n  content: \"\\F0E1\";\r\n}\r\n.icon-rotate-left:before,\r\n.icon-undo:before {\r\n  content: \"\\F0E2\";\r\n}\r\n.icon-legal:before {\r\n  content: \"\\F0E3\";\r\n}\r\n.icon-dashboard:before {\r\n  content: \"\\F0E4\";\r\n}\r\n.icon-comment-alt:before {\r\n  content: \"\\F0E5\";\r\n}\r\n.icon-comments-alt:before {\r\n  content: \"\\F0E6\";\r\n}\r\n.icon-bolt:before {\r\n  content: \"\\F0E7\";\r\n}\r\n.icon-sitemap:before {\r\n  content: \"\\F0E8\";\r\n}\r\n.icon-umbrella:before {\r\n  content: \"\\F0E9\";\r\n}\r\n.icon-paste:before {\r\n  content: \"\\F0EA\";\r\n}\r\n.icon-lightbulb:before {\r\n  content: \"\\F0EB\";\r\n}\r\n.icon-exchange:before {\r\n  content: \"\\F0EC\";\r\n}\r\n.icon-cloud-download:before {\r\n  content: \"\\F0ED\";\r\n}\r\n.icon-cloud-upload:before {\r\n  content: \"\\F0EE\";\r\n}\r\n.icon-user-md:before {\r\n  content: \"\\F0F0\";\r\n}\r\n.icon-stethoscope:before {\r\n  content: \"\\F0F1\";\r\n}\r\n.icon-suitcase:before {\r\n  content: \"\\F0F2\";\r\n}\r\n.icon-bell-alt:before {\r\n  content: \"\\F0F3\";\r\n}\r\n.icon-coffee:before {\r\n  content: \"\\F0F4\";\r\n}\r\n.icon-food:before {\r\n  content: \"\\F0F5\";\r\n}\r\n.icon-file-text-alt:before {\r\n  content: \"\\F0F6\";\r\n}\r\n.icon-building:before {\r\n  content: \"\\F0F7\";\r\n}\r\n.icon-hospital:before {\r\n  content: \"\\F0F8\";\r\n}\r\n.icon-ambulance:before {\r\n  content: \"\\F0F9\";\r\n}\r\n.icon-medkit:before {\r\n  content: \"\\F0FA\";\r\n}\r\n.icon-fighter-jet:before {\r\n  content: \"\\F0FB\";\r\n}\r\n.icon-beer:before {\r\n  content: \"\\F0FC\";\r\n}\r\n.icon-h-sign:before {\r\n  content: \"\\F0FD\";\r\n}\r\n.icon-plus-sign-alt:before {\r\n  content: \"\\F0FE\";\r\n}\r\n.icon-double-angle-left:before {\r\n  content: \"\\F100\";\r\n}\r\n.icon-double-angle-right:before {\r\n  content: \"\\F101\";\r\n}\r\n.icon-double-angle-up:before {\r\n  content: \"\\F102\";\r\n}\r\n.icon-double-angle-down:before {\r\n  content: \"\\F103\";\r\n}\r\n.icon-angle-left:before {\r\n  content: \"\\F104\";\r\n}\r\n.icon-angle-right:before {\r\n  content: \"\\F105\";\r\n}\r\n.icon-angle-up:before {\r\n  content: \"\\F106\";\r\n}\r\n.icon-angle-down:before {\r\n  content: \"\\F107\";\r\n}\r\n.icon-desktop:before {\r\n  content: \"\\F108\";\r\n}\r\n.icon-laptop:before {\r\n  content: \"\\F109\";\r\n}\r\n.icon-tablet:before {\r\n  content: \"\\F10A\";\r\n}\r\n.icon-mobile-phone:before {\r\n  content: \"\\F10B\";\r\n}\r\n.icon-circle-blank:before {\r\n  content: \"\\F10C\";\r\n}\r\n.icon-quote-left:before {\r\n  content: \"\\F10D\";\r\n}\r\n.icon-quote-right:before {\r\n  content: \"\\F10E\";\r\n}\r\n.icon-spinner:before {\r\n  content: \"\\F110\";\r\n}\r\n.icon-circle:before {\r\n  content: \"\\F111\";\r\n}\r\n.icon-mail-reply:before,\r\n.icon-reply:before {\r\n  content: \"\\F112\";\r\n}\r\n.icon-github-alt:before {\r\n  content: \"\\F113\";\r\n}\r\n.icon-folder-close-alt:before {\r\n  content: \"\\F114\";\r\n}\r\n.icon-folder-open-alt:before {\r\n  content: \"\\F115\";\r\n}\r\n.icon-expand-alt:before {\r\n  content: \"\\F116\";\r\n}\r\n.icon-collapse-alt:before {\r\n  content: \"\\F117\";\r\n}\r\n.icon-smile:before {\r\n  content: \"\\F118\";\r\n}\r\n.icon-frown:before {\r\n  content: \"\\F119\";\r\n}\r\n.icon-meh:before {\r\n  content: \"\\F11A\";\r\n}\r\n.icon-gamepad:before {\r\n  content: \"\\F11B\";\r\n}\r\n.icon-keyboard:before {\r\n  content: \"\\F11C\";\r\n}\r\n.icon-flag-alt:before {\r\n  content: \"\\F11D\";\r\n}\r\n.icon-flag-checkered:before {\r\n  content: \"\\F11E\";\r\n}\r\n.icon-terminal:before {\r\n  content: \"\\F120\";\r\n}\r\n.icon-code:before {\r\n  content: \"\\F121\";\r\n}\r\n.icon-reply-all:before {\r\n  content: \"\\F122\";\r\n}\r\n.icon-mail-reply-all:before {\r\n  content: \"\\F122\";\r\n}\r\n.icon-star-half-full:before,\r\n.icon-star-half-empty:before {\r\n  content: \"\\F123\";\r\n}\r\n.icon-location-arrow:before {\r\n  content: \"\\F124\";\r\n}\r\n.icon-crop:before {\r\n  content: \"\\F125\";\r\n}\r\n.icon-code-fork:before {\r\n  content: \"\\F126\";\r\n}\r\n.icon-unlink:before {\r\n  content: \"\\F127\";\r\n}\r\n.icon-question:before {\r\n  content: \"\\F128\";\r\n}\r\n.icon-info:before {\r\n  content: \"\\F129\";\r\n}\r\n.icon-exclamation:before {\r\n  content: \"\\F12A\";\r\n}\r\n.icon-superscript:before {\r\n  content: \"\\F12B\";\r\n}\r\n.icon-subscript:before {\r\n  content: \"\\F12C\";\r\n}\r\n.icon-eraser:before {\r\n  content: \"\\F12D\";\r\n}\r\n.icon-puzzle-piece:before {\r\n  content: \"\\F12E\";\r\n}\r\n.icon-microphone:before {\r\n  content: \"\\F130\";\r\n}\r\n.icon-microphone-off:before {\r\n  content: \"\\F131\";\r\n}\r\n.icon-shield:before {\r\n  content: \"\\F132\";\r\n}\r\n.icon-calendar-empty:before {\r\n  content: \"\\F133\";\r\n}\r\n.icon-fire-extinguisher:before {\r\n  content: \"\\F134\";\r\n}\r\n.icon-rocket:before {\r\n  content: \"\\F135\";\r\n}\r\n.icon-maxcdn:before {\r\n  content: \"\\F136\";\r\n}\r\n.icon-chevron-sign-left:before {\r\n  content: \"\\F137\";\r\n}\r\n.icon-chevron-sign-right:before {\r\n  content: \"\\F138\";\r\n}\r\n.icon-chevron-sign-up:before {\r\n  content: \"\\F139\";\r\n}\r\n.icon-chevron-sign-down:before {\r\n  content: \"\\F13A\";\r\n}\r\n.icon-html5:before {\r\n  content: \"\\F13B\";\r\n}\r\n.icon-css3:before {\r\n  content: \"\\F13C\";\r\n}\r\n.icon-anchor:before {\r\n  content: \"\\F13D\";\r\n}\r\n.icon-unlock-alt:before {\r\n  content: \"\\F13E\";\r\n}\r\n.icon-bullseye:before {\r\n  content: \"\\F140\";\r\n}\r\n.icon-ellipsis-horizontal:before {\r\n  content: \"\\F141\";\r\n}\r\n.icon-ellipsis-vertical:before {\r\n  content: \"\\F142\";\r\n}\r\n.icon-rss-sign:before {\r\n  content: \"\\F143\";\r\n}\r\n.icon-play-sign:before {\r\n  content: \"\\F144\";\r\n}\r\n.icon-ticket:before {\r\n  content: \"\\F145\";\r\n}\r\n.icon-minus-sign-alt:before {\r\n  content: \"\\F146\";\r\n}\r\n.icon-check-minus:before {\r\n  content: \"\\F147\";\r\n}\r\n.icon-level-up:before {\r\n  content: \"\\F148\";\r\n}\r\n.icon-level-down:before {\r\n  content: \"\\F149\";\r\n}\r\n.icon-check-sign:before {\r\n  content: \"\\F14A\";\r\n}\r\n.icon-edit-sign:before {\r\n  content: \"\\F14B\";\r\n}\r\n.icon-external-link-sign:before {\r\n  content: \"\\F14C\";\r\n}\r\n.icon-share-sign:before {\r\n  content: \"\\F14D\";\r\n}\r\n.icon-compass:before {\r\n  content: \"\\F14E\";\r\n}\r\n.icon-collapse:before {\r\n  content: \"\\F150\";\r\n}\r\n.icon-collapse-top:before {\r\n  content: \"\\F151\";\r\n}\r\n.icon-expand:before {\r\n  content: \"\\F152\";\r\n}\r\n.icon-euro:before,\r\n.icon-eur:before {\r\n  content: \"\\F153\";\r\n}\r\n.icon-gbp:before {\r\n  content: \"\\F154\";\r\n}\r\n.icon-dollar:before,\r\n.icon-usd:before {\r\n  content: \"\\F155\";\r\n}\r\n.icon-rupee:before,\r\n.icon-inr:before {\r\n  content: \"\\F156\";\r\n}\r\n.icon-yen:before,\r\n.icon-jpy:before {\r\n  content: \"\\F157\";\r\n}\r\n.icon-renminbi:before,\r\n.icon-cny:before {\r\n  content: \"\\F158\";\r\n}\r\n.icon-won:before,\r\n.icon-krw:before {\r\n  content: \"\\F159\";\r\n}\r\n.icon-bitcoin:before,\r\n.icon-btc:before {\r\n  content: \"\\F15A\";\r\n}\r\n.icon-file:before {\r\n  content: \"\\F15B\";\r\n}\r\n.icon-file-text:before {\r\n  content: \"\\F15C\";\r\n}\r\n.icon-sort-by-alphabet:before {\r\n  content: \"\\F15D\";\r\n}\r\n.icon-sort-by-alphabet-alt:before {\r\n  content: \"\\F15E\";\r\n}\r\n.icon-sort-by-attributes:before {\r\n  content: \"\\F160\";\r\n}\r\n.icon-sort-by-attributes-alt:before {\r\n  content: \"\\F161\";\r\n}\r\n.icon-sort-by-order:before {\r\n  content: \"\\F162\";\r\n}\r\n.icon-sort-by-order-alt:before {\r\n  content: \"\\F163\";\r\n}\r\n.icon-thumbs-up:before {\r\n  content: \"\\F164\";\r\n}\r\n.icon-thumbs-down:before {\r\n  content: \"\\F165\";\r\n}\r\n.icon-youtube-sign:before {\r\n  content: \"\\F166\";\r\n}\r\n.icon-youtube:before {\r\n  content: \"\\F167\";\r\n}\r\n.icon-xing:before {\r\n  content: \"\\F168\";\r\n}\r\n.icon-xing-sign:before {\r\n  content: \"\\F169\";\r\n}\r\n.icon-youtube-play:before {\r\n  content: \"\\F16A\";\r\n}\r\n.icon-dropbox:before {\r\n  content: \"\\F16B\";\r\n}\r\n.icon-stackexchange:before {\r\n  content: \"\\F16C\";\r\n}\r\n.icon-instagram:before {\r\n  content: \"\\F16D\";\r\n}\r\n.icon-flickr:before {\r\n  content: \"\\F16E\";\r\n}\r\n.icon-adn:before {\r\n  content: \"\\F170\";\r\n}\r\n.icon-bitbucket:before {\r\n  content: \"\\F171\";\r\n}\r\n.icon-bitbucket-sign:before {\r\n  content: \"\\F172\";\r\n}\r\n.icon-tumblr:before {\r\n  content: \"\\F173\";\r\n}\r\n.icon-tumblr-sign:before {\r\n  content: \"\\F174\";\r\n}\r\n.icon-long-arrow-down:before {\r\n  content: \"\\F175\";\r\n}\r\n.icon-long-arrow-up:before {\r\n  content: \"\\F176\";\r\n}\r\n.icon-long-arrow-left:before {\r\n  content: \"\\F177\";\r\n}\r\n.icon-long-arrow-right:before {\r\n  content: \"\\F178\";\r\n}\r\n.icon-apple:before {\r\n  content: \"\\F179\";\r\n}\r\n.icon-windows:before {\r\n  content: \"\\F17A\";\r\n}\r\n.icon-android:before {\r\n  content: \"\\F17B\";\r\n}\r\n.icon-linux:before {\r\n  content: \"\\F17C\";\r\n}\r\n.icon-dribbble:before {\r\n  content: \"\\F17D\";\r\n}\r\n.icon-skype:before {\r\n  content: \"\\F17E\";\r\n}\r\n.icon-foursquare:before {\r\n  content: \"\\F180\";\r\n}\r\n.icon-trello:before {\r\n  content: \"\\F181\";\r\n}\r\n.icon-female:before {\r\n  content: \"\\F182\";\r\n}\r\n.icon-male:before {\r\n  content: \"\\F183\";\r\n}\r\n.icon-gittip:before {\r\n  content: \"\\F184\";\r\n}\r\n.icon-sun:before {\r\n  content: \"\\F185\";\r\n}\r\n.icon-moon:before {\r\n  content: \"\\F186\";\r\n}\r\n.icon-archive:before {\r\n  content: \"\\F187\";\r\n}\r\n.icon-bug:before {\r\n  content: \"\\F188\";\r\n}\r\n.icon-vk:before {\r\n  content: \"\\F189\";\r\n}\r\n.icon-weibo:before {\r\n  content: \"\\F18A\";\r\n}\r\n.icon-renren:before {\r\n  content: \"\\F18B\";\r\n}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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DUANE/8AEw1ADRMTDUANE/8AEw1ADRMTDUANEwMAEw1ADRMTDUANE/8AEw1ADRMTDUANE/8AEw1ADRMTDUANEwIAEw1ADRMTDUANE/8AEw1ADRMTDUANEwEAEw1ADRMTDUANE/8AAYD7gAGAEw0BQA0TAgAmGvsAGiYmGgUAGibgQA0TEw1ADRMT80ANExMNQA0TEw1ADRMTDUANExPzQA0TEw1ADRMT/fNADRMTDUANExPzQA0TEw1ADRMT80ANExMNQA0TE/NADRMTDUANExP980ANExMNQA0TE/NADRMTDUANExPzQA0TEw1ADRMT80ANExMNQA0TE/3zQA0TEw1ADRMT80ANExMNQA0TE/NADRMTDUANExP+80ANExMNQA0TE/NADRMTDUANExMNQA0TEw1ADRMT+pMGAPoA4A0TEw0FYPmAGiYmGgaAGiYmAA0AAP8ABYAGAAAPAB8ALwA/AE8AXwBvAH8AjwCfALcA2wD1AAAlFRQGKwEiJj0BNDY7ATIWNRUUBisBIiY9ATQ2OwEyFgUVFAYrASImPQE0NjsBMhYlFRQGKwEiJj0BNDY7ATIWARUUBisBIiY9ATQ2OwEyFiUVFAYrASImPQE0NjsBMhYlFRQGKwEiJj0BNDY7ATIWARUUBisBIiY9ATQ2OwEyFiUVFAYrASImPQE0NjsBMhYFFRQGKwEiJj0BNDY7ATIWASERIRUUBiMhIiY9ASERITU0NjMhMhYVGQE0JisBIgYdASM1NCYrASIGFREUFjsBMjY9ATMVFBY7ATI2JREUBiMhIiY1ETQ2MyERNDYzITIWFREhMhYBgBMNQA0TEw1ADRMTDUANExMNQA0TAQATDUANExMNQA0T/wATDUANExMNQA0TAwATDUANExMNQA0T/wATDUANExMNQA0T/wATDUANExMNQA0TAgATDUANExMNQA0T/wATDUANExMNQA0TAQATDUANExMNQA0T/wABgP8AOCj+QCg4/wABgBMNAUANExMNQA0TgBMNQA0TEw1ADROAEw1ADRMCACYa+wAaJiYaAUA4KAHAKDgBQBom4EANExMNQA0TE/NADRMTDUANExMNQA0TEw1ADRMT80ANExMNQA0TE/3zQA0TEw1ADRMT80ANExMNQA0TE/NADRMTDUANExP+80ANExMNQA0TE/NADRMTDUANExMNQA0T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BoAAAAWAAAAEAAAABwAAAAYAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAeAAAAGAAAABAAAAAYAAAAEAAAABwAAAAaAAAAGgAAABwAAAAQAAAAHAAAABoAAegWAAAAGAAAABgAAAAaAAAAHAAAABAAAAAYCAAEEgAA1BIAAdQYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAABABgAAAAaAADUGgAA1BwAAAAYAAAAGAAANBYAAAAWAAAAGgAB6BgAAAAYAAAAHAAAABYAAAAcAAAAHAAAABwAAEAWAAAAGgAAABwAAAAcAAAAGAAAABoAANQaAADUHgAAABoAAAAaAAAAHgAAAAwAAQAcAAAAHgAAABgAAAAYAAAAHAAAABwAAAAeAAAAHAAAABgAAAAYAAAADgAAABwAAAAaAAAAGAAAABIAAAAcAAAAGAAAABoAAAAYAAAAGgAAABgAAAAWAAAAFgAAABQAAAAYAAAAGgAAsAwAAAAYAAAAGgAAAB4AAAAWAAAAGAAAABwAAAAaAAAAGAAACBwAAAAcAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABoAAFQcAAAAFgAAFBwAAAAYAAAAHgAAABoAAEAeAAAAGgABzBwAAAQcAAAAFgAAEBgAAAAYAAAAGAAAABwAAAAcAAA8HAAAABgAAAAaAAAAGgAAbBwAAQAYAAAAGAAAABgAAAAaAAAAHgAAABAAAAAQAAAACgABAAoAAAAaAAAAEAAAABAAAAAQAAAAHAAAABgAAAAYAAAAHAAAoBwAAAAcAAAAHAAAAA4AAAQcAAAAGgAAABwAAAAQAAAAHAAAAB4AAAAeAAAAFgAAABYAAAAcAAAAGgAAAB4AAAAWAAAAFAAAABYAAAAWAAAAHgABABwAAAAeAAAAGgABABgAAAAYAAAAEAAAtBAAADQSAAE0EgABNAoAALQKAAA0EgABNBIAATQeAAAAHgAAABIAAAAMAAAAGAAAABoAAAAaAAAAGIAAABgAAAAcAAAAGgAAABoAAAAeAAAAEgAAABIAAAAYAAAAGAAAABgAAAAeAAAAHgAAABwAAQAcAAEAGgAANB4AALQcAAAAGgAACBYAAAgaAAAAEAAAABoAAAAQAAGACgAAAAoAAYgYAAAUGAAAF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AG0AZQAuAGkAbwBXAGUAYgBmAG8AbgB0ACAAMQAuADAAVwBlAGQAIABKAHUAbgAgADEAMgAgADEAMAA6ADUANwA6ADIAMQAgADIAMAAxADMAAgAAAAAAAP96AFoAAAAAAAAAAAAAAAAAAAAAAAAAAAGHAAAAAQACAAMBAgCOAIsAigCNAJABAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwCMAJIAjwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEADgDvAA0BcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZIBkwGUAZUBlgGXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwHQAdEB0gHTAdQB1QHWAdcB2AHZAdoB2wHcAd0B3gHfAeAB4QHiAeMB5AHlAeYB5wHoAekB6gHrAewB7QHuAe8B8AHxAfIB8wH0AfUB9gH3AfgB+QH6AfsB/AH9Af4B/wIAAgECAgIDAgQCBQIGAgcCCAIJAgoCCwIMAg0CDgIPAhACEQISAhMCFAIVAhYCFwAiAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiANICYwJkAmUCZgJnAmgCaQJqAmsCbAJtAm4CbwJwAnECcgJzAnQCdQJ2AJQHdW5pMDBBMAd1bmkyMDAwB3VuaTIwMDEHdW5pMjAwMgd1bmkyMDAzB3VuaTIwMDQHdW5pMjAwNQd1bmkyMDA2B3VuaTIwMDcHdW5pMjAwOAd1bmkyMDA5B3VuaTIwMEEHdW5pMjAyRgd1bmkyMDVGB3VuaUUwMDAFZ2xhc3MFbXVzaWMGc2VhcmNoCGVudmVsb3BlBWhlYXJ0BHN0YXIKc3Rhcl9lbXB0eQR1c2VyBGZpbG0IdGhfbGFyZ2UCdGgHdGhfbGlzdAJvawZyZW1vdmUHem9vbV9pbgh6b29tX291dANvZmYGc2lnbmFsA2NvZwV0cmFzaARob21lCGZpbGVfYWx0BHRpbWUEcm9hZAxkb3dubG9hZF9hbHQIZG93bmxvYWQGdXBsb2FkBWluYm94C3BsYXlfY2lyY2xlBnJlcGVhdAdyZWZyZXNoCGxpc3RfYWx0BGxvY2sEZmxhZwpoZWFkcGhvbmVzCnZvbHVtZV9vZmYLdm9sdW1lX2Rvd24Jdm9sdW1lX3VwBnFyY29kZQdiYXJjb2RlA3RhZwR0YWdzBGJvb2sIYm9va21hcmsFcHJpbnQGY2FtZXJhBGZvbnQEYm9sZAZpdGFsaWMLdGV4dF9oZWlnaHQKdGV4dF93aWR0aAphbGlnbl9sZWZ0DGFsaWduX2NlbnRlcgthbGlnbl9yaWdodA1hbGlnbl9qdXN0aWZ5BGxpc3QLaW5kZW50X2xlZnQMaW5kZW50X3JpZ2h0DmZhY2V0aW1lX3ZpZGVvB3BpY3R1cmUGcGVuY2lsCm1hcF9tYXJrZXIGYWRqdXN0BHRpbnQEZWRpdAVzaGFyZQVjaGVjawRtb3ZlDXN0ZXBfYmFja3dhcmQNZmFzdF9iYWNrd2FyZAhiYWNrd2FyZARwbGF5BXBhdXNlBHN0b3AHZm9yd2FyZAxmYXN0X2ZvcndhcmQMc3RlcF9mb3J3YXJkBWVqZWN0DGNoZXZyb25fbGVmdA1jaGV2cm9uX3JpZ2h0CXBsdXNfc2lnbgptaW51c19zaWduC3JlbW92ZV9zaWduB29rX3NpZ24NcXVlc3Rpb25fc2lnbglpbmZvX3NpZ24Kc2NyZWVuc2hvdA1yZW1vdmVfY2lyY2xlCW9rX2NpcmNsZQpiYW5fY2lyY2xlCmFycm93X2xlZnQLYXJyb3dfcmlnaHQIYXJyb3dfdXAKYXJyb3dfZG93bglzaGFyZV9hbHQLcmVzaXplX2Z1bGwMcmVzaXplX3NtYWxsEGV4Y2xhbWF0aW9uX3NpZ24EZ2lmdARsZWFmBGZpcmUIZXllX29wZW4JZXllX2Nsb3NlDHdhcm5pbmdfc2lnbgVwbGFuZQhjYWxlbmRhcgZyYW5kb20HY29tbWVudAZtYWduZXQKY2hldnJvbl91cAxjaGV2cm9uX2Rvd24HcmV0d2VldA1zaG9wcGluZ19jYXJ0DGZvbGRlcl9jbG9zZQtmb2xkZXJfb3Blbg9yZXNpemVfdmVydGljYWwRcmVzaXplX2hvcml6b250YWwJYmFyX2NoYXJ0DHR3aXR0ZXJfc2lnbg1mYWNlYm9va19zaWduDGNhbWVyYV9yZXRybwNrZXkEY29ncwhjb21tZW50cw10aHVtYnNfdXBfYWx0D3RodW1ic19kb3duX2FsdAlzdGFyX2hhbGYLaGVhcnRfZW1wdHkHc2lnbm91dA1saW5rZWRpbl9zaWduB3B1c2hwaW4NZXh0ZXJuYWxfbGluawZzaWduaW4GdHJvcGh5C2dpdGh1Yl9zaWduCnVwbG9hZF9hbHQFbGVtb24FcGhvbmULY2hlY2tfZW1wdHkOYm9va21hcmtfZW1wdHkKcGhvbmVfc2lnbgd0d2l0dGVyCGZhY2Vib29rBmdpdGh1YgZ1bmxvY2sLY3JlZGl0X2NhcmQDcnNzA2hkZAhidWxsaG9ybgRiZWxsC2NlcnRpZmljYXRlCmhhbmRfcmlnaHQJaGFuZF9sZWZ0B2hhbmRfdXAJaGFuZF9kb3duEWNpcmNsZV9hcnJvd19sZWZ0EmNpcmNsZV9hcnJvd19yaWdodA9jaXJjbGVfYXJyb3dfdXARY2lyY2xlX2Fycm93X2Rvd24FZ2xvYmUGd3JlbmNoBXRhc2tzBmZpbHRlcglicmllZmNhc2UKZnVsbHNjcmVlbgVncm91cARsaW5rBWNsb3VkBmJlYWtlcgNjdXQEY29weQpwYXBlcl9jbGlwBHNhdmUKc2lnbl9ibGFuawdyZW9yZGVyAnVsAm9sDXN0cmlrZXRocm91Z2gJdW5kZXJsaW5lBXRhYmxlBW1hZ2ljBXRydWNrCXBpbnRlcmVzdA5waW50ZXJlc3Rfc2lnbhBnb29nbGVfcGx1c19zaWduC2dvb2dsZV9wbHVzBW1vbmV5CmNhcmV0X2Rvd24IY2FyZXRfdXAKY2FyZXRfbGVmdAtjYXJldF9yaWdodAdjb2x1bW5zBHNvcnQJc29ydF9kb3duB3NvcnRfdXAMZW52ZWxvcGVfYWx0CGxpbmtlZGluBHVuZG8FbGVnYWwJZGFzaGJvYXJkC2NvbW1lbnRfYWx0DGNvbW1lbnRzX2FsdARib2x0B3NpdGVtYXAIdW1icmVsbGEFcGFzdGUKbGlnaHRfYnVsYghleGNoYW5nZQ5jbG91ZF9kb3dubG9hZAxjbG91ZF91cGxvYWQHdXNlcl9tZAtzdGV0aG9zY29wZQhzdWl0Y2FzZQhiZWxsX2FsdAZjb2ZmZWUEZm9vZA1maWxlX3RleHRfYWx0CGJ1aWxkaW5nCGhvc3BpdGFsCWFtYnVsYW5jZQZtZWRraXQLZmlnaHRlcl9qZXQEYmVlcgZoX3NpZ24EZjBmZRFkb3VibGVfYW5nbGVfbGVmdBJkb3VibGVfYW5nbGVfcmlnaHQPZG91YmxlX2FuZ2xlX3VwEWRvdWJsZV9hbmdsZV9kb3duCmFuZ2xlX2xlZnQLYW5nbGVfcmlnaHQIYW5nbGVfdXAKYW5nbGVfZG93bgdkZXNrdG9wBmxhcHRvcAZ0YWJsZXQMbW9iaWxlX3Bob25lDGNpcmNsZV9ibGFuawpxdW90ZV9sZWZ0C3F1b3RlX3JpZ2h0B3NwaW5uZXIGY2lyY2xlBXJlcGx5CmdpdGh1Yl9hbHQQZm9sZGVyX2Nsb3NlX2FsdA9mb2xkZXJfb3Blbl9hbHQKZXhwYW5kX2FsdAxjb2xsYXBzZV9hbHQFc21pbGUFZnJvd24DbWVoB2dhbWVwYWQIa2V5Ym9hcmQIZmxhZ19hbHQOZmxhZ19jaGVja2VyZWQIdGVybWluYWwEY29kZQlyZXBseV9hbGwPc3Rhcl9oYWxmX2VtcHR5DmxvY2F0aW9uX2Fycm93BGNyb3AJY29kZV9mb3JrBnVubGluawRfMjc5C2V4Y2xhbWF0aW9uC3N1cGVyc2NyaXB0CXN1YnNjcmlwdARfMjgzDHB1enpsZV9waWVjZQptaWNyb3Bob25lDm1pY3JvcGhvbmVfb2ZmBnNoaWVsZA5jYWxlbmRhcl9lbXB0eRFmaXJlX2V4dGluZ3Vpc2hlcgZyb2NrZXQGbWF4Y2RuEWNoZXZyb25fc2lnbl9sZWZ0EmNoZXZyb25fc2lnbl9yaWdodA9jaGV2cm9uX3NpZ25fdXARY2hldnJvbl9zaWduX2Rvd24FaHRtbDUEY3NzMwZhbmNob3IKdW5sb2NrX2FsdAhidWxsc2V5ZRNlbGxpcHNpc19ob3Jpem9udGFsEWVsbGlwc2lzX3ZlcnRpY2FsBF8zMDMJcGxheV9zaWduBnRpY2tldA5taW51c19zaWduX2FsdAtjaGVja19taW51cwhsZXZlbF91cApsZXZlbF9kb3duCmNoZWNrX3NpZ24JZWRpdF9zaWduBF8zMTIKc2hhcmVfc2lnbgdjb21wYXNzCGNvbGxhcHNlDGNvbGxhcHNlX3RvcARfMzE3A2V1cgNnYnADdXNkA2lucgNqcHkDY255A2tydwNidGMEZmlsZQlmaWxlX3RleHQQc29ydF9ieV9hbHBoYWJldARfMzI5EnNvcnRfYnlfYXR0cmlidXRlcxZzb3J0X2J5X2F0dHJpYnV0ZXNfYWx0DXNvcnRfYnlfb3JkZXIRc29ydF9ieV9vcmRlcl9hbHQEXzMzNARfMzM1DHlvdXR1YmVfc2lnbgd5b3V0dWJlBHhpbmcJeGluZ19zaWduDHlvdXR1YmVfcGxheQdkcm9wYm94DXN0YWNrZXhjaGFuZ2UJaW5zdGFncmFtBmZsaWNrcgNhZG4EZjE3MQ5iaXRidWNrZXRfc2lnbgZ0dW1ibHILdHVtYmxyX3NpZ24PbG9uZ19hcnJvd19kb3duDWxvbmdfYXJyb3dfdXAPbG9uZ19hcnJvd19sZWZ0EGxvbmdfYXJyb3dfcmlnaHQHd2luZG93cwdhbmRyb2lkBWxpbnV4B2RyaWJibGUFc2t5cGUKZm91cnNxdWFyZQZ0cmVsbG8GZmVtYWxlBG1hbGUGZ2l0dGlwA3N1bgRfMzY2B2FyY2hpdmUDYnVnAnZrBXdlaWJvBnJlbnJlbgRfMzcyBF8zNzMEXzM3NAAAAAFRuIxRAAA="

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWV0YWRhdGE+PC9tZXRhZGF0YT4NCjxkZWZzPg0KPGZvbnQgaWQ9ImZvbnRhd2Vzb21lcmVndWxhciIgaG9yaXotYWR2LXg9IjE1MzYiID4NCjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxNzkyIiBhc2NlbnQ9IjE1MzYiIGRlc2NlbnQ9Ii0yNTYiIC8+DQo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iNDQ4IiAvPg0KPGdseXBoIHVuaWNvZGU9IiAiICBob3Jpei1hZHYteD0iNDQ4IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDA5OyIgaG9yaXotYWR2LXg9IjQ0OCIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hhMDsiIGhvcml6LWFkdi14PSI0NDgiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4YTg7IiBob3Jpei1hZHYteD0iMTc5MiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hhOTsiIGhvcml6LWFkdi14PSIxNzkyIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGFlOyIgaG9yaXotYWR2LXg9IjE3OTIiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4YjQ7IiBob3Jpei1hZHYteD0iMTc5MiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hjNjsiIGhvcml6LWFkdi14PSIxNzkyIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDA7IiBob3Jpei1hZHYteD0iNzY4IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDE7IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDI7IiBob3Jpei1hZHYteD0iNzY4IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDM7IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDQ7IiBob3Jpei1hZHYteD0iNTEyIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDU7IiBob3Jpei1hZHYteD0iMzg0IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDY7IiBob3Jpei1hZHYteD0iMjU2IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDc7IiBob3Jpei1hZHYteD0iMjU2IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDg7IiBob3Jpei1hZHYteD0iMTkyIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMDk7IiBob3Jpei1hZHYteD0iMzA3IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIwMGE7IiBob3Jpei1hZHYteD0iODUiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4MjAyZjsiIGhvcml6LWFkdi14PSIzMDciIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4MjA1ZjsiIGhvcml6LWFkdi14PSIzODQiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4MjEyMjsiIGhvcml6LWFkdi14PSIxNzkyIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeDIyMWU7IiBob3Jpei1hZHYteD0iMTc5MiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3gyMjYwOyIgaG9yaXotYWR2LXg9IjE3OTIiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTAwMDsiIGhvcml6LWFkdi14PSI1MDAiIGQ9Ik0wIDB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMDA7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE2OTkgMTM1MHEwIC0zNSAtNDMgLTc4bC02MzIgLTYzMnYtNzY4aDMyMHEyNiAwIDQ1IC0xOXQxOSAtNDV0LTE5IC00NXQtNDUgLTE5aC04OTZxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NXQ0NSAxOWgzMjB2NzY4bC02MzIgNjMycS00MyA0MyAtNDMgNzhxMCAyMyAxOCAzNi41dDM4IDE3LjV0NDMgNGgxNDA4cTIzIDAgNDMgLTR0MzggLTE3LjV0MTggLTM2LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMDE7IiBkPSJNMTUzNiAxMzEydi0xMTIwcTAgLTUwIC0zNCAtODl0LTg2IC02MC41dC0xMDMuNSAtMzJ0LTk2LjUgLTEwLjV0LTk2LjUgMTAuNXQtMTAzLjUgMzJ0LTg2IDYwLjV0LTM0IDg5dDM0IDg5dDg2IDYwLjV0MTAzLjUgMzJ0OTYuNSAxMC41cTEwNSAwIDE5MiAtMzl2NTM3bC03NjggLTIzN3YtNzA5cTAgLTUwIC0zNCAtODl0LTg2IC02MC41dC0xMDMuNSAtMzJ0LTk2LjUgLTEwLjV0LTk2LjUgMTAuNXQtMTAzLjUgMzJ0LTg2IDYwLjV0LTM0IDg5IHQzNCA4OXQ4NiA2MC41dDEwMy41IDMydDk2LjUgMTAuNXExMDUgMCAxOTIgLTM5djk2N3EwIDMxIDE5IDU2LjV0NDkgMzUuNWw4MzIgMjU2cTEyIDQgMjggNHE0MCAwIDY4IC0yOHQyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMDI7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTExNTIgNzA0cTAgMTg1IC0xMzEuNSAzMTYuNXQtMzE2LjUgMTMxLjV0LTMxNi41IC0xMzEuNXQtMTMxLjUgLTMxNi41dDEzMS41IC0zMTYuNXQzMTYuNSAtMTMxLjV0MzE2LjUgMTMxLjV0MTMxLjUgMzE2LjV6TTE2NjQgLTEyOHEwIC01MiAtMzggLTkwdC05MCAtMzhxLTU0IDAgLTkwIDM4bC0zNDMgMzQycS0xNzkgLTEyNCAtMzk5IC0xMjRxLTE0MyAwIC0yNzMuNSA1NS41dC0yMjUgMTUwdC0xNTAgMjI1dC01NS41IDI3My41IHQ1NS41IDI3My41dDE1MCAyMjV0MjI1IDE1MHQyNzMuNSA1NS41dDI3My41IC01NS41dDIyNSAtMTUwdDE1MCAtMjI1dDU1LjUgLTI3My41cTAgLTIyMCAtMTI0IC0zOTlsMzQzIC0zNDNxMzcgLTM3IDM3IC05MHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAwMzsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTY2NCAzMnY3NjhxLTMyIC0zNiAtNjkgLTY2cS0yNjggLTIwNiAtNDI2IC0zMzhxLTUxIC00MyAtODMgLTY3dC04Ni41IC00OC41dC0xMDIuNSAtMjQuNWgtMWgtMXEtNDggMCAtMTAyLjUgMjQuNXQtODYuNSA0OC41dC04MyA2N3EtMTU4IDEzMiAtNDI2IDMzOHEtMzcgMzAgLTY5IDY2di03NjhxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWgxNDcycTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTE2NjQgMTA4M3YxMXYxMy41dC0wLjUgMTMgdC0zIDEyLjV0LTUuNSA5dC05IDcuNXQtMTQgMi41aC0xNDcycS0xMyAwIC0yMi41IC05LjV0LTkuNSAtMjIuNXEwIC0xNjggMTQ3IC0yODRxMTkzIC0xNTIgNDAxIC0zMTdxNiAtNSAzNSAtMjkuNXQ0NiAtMzcuNXQ0NC41IC0zMS41dDUwLjUgLTI3LjV0NDMgLTloMWgxcTIwIDAgNDMgOXQ1MC41IDI3LjV0NDQuNSAzMS41dDQ2IDM3LjV0MzUgMjkuNXEyMDggMTY1IDQwMSAzMTdxNTQgNDMgMTAwLjUgMTE1LjV0NDYuNSAxMzEuNXogTTE3OTIgMTEyMHYtMTA4OHEwIC02NiAtNDcgLTExM3QtMTEzIC00N2gtMTQ3MnEtNjYgMCAtMTEzIDQ3dC00NyAxMTN2MTA4OHEwIDY2IDQ3IDExM3QxMTMgNDdoMTQ3MnE2NiAwIDExMyAtNDd0NDcgLTExM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAwNDsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNODk2IC0xMjhxLTI2IDAgLTQ0IDE4bC02MjQgNjAycS0xMCA4IC0yNy41IDI2dC01NS41IDY1LjV0LTY4IDk3LjV0LTUzLjUgMTIxdC0yMy41IDEzOHEwIDIyMCAxMjcgMzQ0dDM1MSAxMjRxNjIgMCAxMjYuNSAtMjEuNXQxMjAgLTU4dDk1LjUgLTY4LjV0NzYgLTY4cTM2IDM2IDc2IDY4dDk1LjUgNjguNXQxMjAgNTh0MTI2LjUgMjEuNXEyMjQgMCAzNTEgLTEyNHQxMjcgLTM0NHEwIC0yMjEgLTIyOSAtNDUwbC02MjMgLTYwMCBxLTE4IC0xOCAtNDQgLTE4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDA1OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNjY0IDg4OXEwIC0yMiAtMjYgLTQ4bC0zNjMgLTM1NGw4NiAtNTAwcTEgLTcgMSAtMjBxMCAtMjEgLTEwLjUgLTM1LjV0LTMwLjUgLTE0LjVxLTE5IDAgLTQwIDEybC00NDkgMjM2bC00NDkgLTIzNnEtMjIgLTEyIC00MCAtMTJxLTIxIDAgLTMxLjUgMTQuNXQtMTAuNSAzNS41cTAgNiAyIDIwbDg2IDUwMGwtMzY0IDM1NHEtMjUgMjcgLTI1IDQ4cTAgMzcgNTYgNDZsNTAyIDczbDIyNSA0NTVxMTkgNDEgNDkgNDF0NDkgLTQxbDIyNSAtNDU1IGw1MDIgLTczcTU2IC05IDU2IC00NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAwNjsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTEzNyA1MzJsMzA2IDI5N2wtNDIyIDYybC0xODkgMzgybC0xODkgLTM4MmwtNDIyIC02MmwzMDYgLTI5N2wtNzMgLTQyMWwzNzggMTk5bDM3NyAtMTk5ek0xNjY0IDg4OXEwIC0yMiAtMjYgLTQ4bC0zNjMgLTM1NGw4NiAtNTAwcTEgLTcgMSAtMjBxMCAtNTAgLTQxIC01MHEtMTkgMCAtNDAgMTJsLTQ0OSAyMzZsLTQ0OSAtMjM2cS0yMiAtMTIgLTQwIC0xMnEtMjEgMCAtMzEuNSAxNC41dC0xMC41IDM1LjVxMCA2IDIgMjBsODYgNTAwIGwtMzY0IDM1NHEtMjUgMjcgLTI1IDQ4cTAgMzcgNTYgNDZsNTAyIDczbDIyNSA0NTVxMTkgNDEgNDkgNDF0NDkgLTQxbDIyNSAtNDU1bDUwMiAtNzNxNTYgLTkgNTYgLTQ2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDA3OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xNDA4IDEzMXEwIC0xMjAgLTczIC0xODkuNXQtMTk0IC02OS41aC04NzRxLTEyMSAwIC0xOTQgNjkuNXQtNzMgMTg5LjVxMCA1MyAzLjUgMTAzLjV0MTQgMTA5dDI2LjUgMTA4LjV0NDMgOTcuNXQ2MiA4MXQ4NS41IDUzLjV0MTExLjUgMjBxOSAwIDQyIC0yMS41dDc0LjUgLTQ4dDEwOCAtNDh0MTMzLjUgLTIxLjV0MTMzLjUgMjEuNXQxMDggNDh0NzQuNSA0OHQ0MiAyMS41cTYxIDAgMTExLjUgLTIwdDg1LjUgLTUzLjV0NjIgLTgxIHQ0MyAtOTcuNXQyNi41IC0xMDguNXQxNCAtMTA5dDMuNSAtMTAzLjV6TTEwODggMTAyNHEwIC0xNTkgLTExMi41IC0yNzEuNXQtMjcxLjUgLTExMi41dC0yNzEuNSAxMTIuNXQtMTEyLjUgMjcxLjV0MTEyLjUgMjcxLjV0MjcxLjUgMTEyLjV0MjcxLjUgLTExMi41dDExMi41IC0yNzEuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAwODsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNMzg0IC02NHYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXpNMzg0IDMyMHYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXpNMzg0IDcwNHYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjggcS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMTI4cTAgLTI2IDE5IC00NXQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV6TTE0MDggLTY0djUxMnEwIDI2IC0xOSA0NXQtNDUgMTloLTc2OHEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTUxMnEwIC0yNiAxOSAtNDV0NDUgLTE5aDc2OHEyNiAwIDQ1IDE5dDE5IDQ1ek0zODQgMTA4OHYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1IHQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV6TTE3OTIgLTY0djEyOHEwIDI2IC0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTEyOHEwIC0yNiAxOSAtNDV0NDUgLTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1ek0xNDA4IDcwNHY1MTJxMCAyNiAtMTkgNDV0LTQ1IDE5aC03NjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di01MTJxMCAtMjYgMTkgLTQ1dDQ1IC0xOWg3NjhxMjYgMCA0NSAxOXQxOSA0NXpNMTc5MiAzMjB2MTI4IHEwIDI2IC0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTEyOHEwIC0yNiAxOSAtNDV0NDUgLTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1ek0xNzkyIDcwNHYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXpNMTc5MiAxMDg4djEyOHEwIDI2IC0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMCAtNDUgLTE5IHQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXpNMTkyMCAxMjQ4di0xMzQ0cTAgLTY2IC00NyAtMTEzdC0xMTMgLTQ3aC0xNjAwcS02NiAwIC0xMTMgNDd0LTQ3IDExM3YxMzQ0cTAgNjYgNDcgMTEzdDExMyA0N2gxNjAwcTY2IDAgMTEzIC00N3Q0NyAtMTEzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDA5OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik03NjggNTEydi0zODRxMCAtNTIgLTM4IC05MHQtOTAgLTM4aC01MTJxLTUyIDAgLTkwIDM4dC0zOCA5MHYzODRxMCA1MiAzOCA5MHQ5MCAzOGg1MTJxNTIgMCA5MCAtMzh0MzggLTkwek03NjggMTI4MHYtMzg0cTAgLTUyIC0zOCAtOTB0LTkwIC0zOGgtNTEycS01MiAwIC05MCAzOHQtMzggOTB2Mzg0cTAgNTIgMzggOTB0OTAgMzhoNTEycTUyIDAgOTAgLTM4dDM4IC05MHpNMTY2NCA1MTJ2LTM4NHEwIC01MiAtMzggLTkwdC05MCAtMzggaC01MTJxLTUyIDAgLTkwIDM4dC0zOCA5MHYzODRxMCA1MiAzOCA5MHQ5MCAzOGg1MTJxNTIgMCA5MCAtMzh0MzggLTkwek0xNjY0IDEyODB2LTM4NHEwIC01MiAtMzggLTkwdC05MCAtMzhoLTUxMnEtNTIgMCAtOTAgMzh0LTM4IDkwdjM4NHEwIDUyIDM4IDkwdDkwIDM4aDUxMnE1MiAwIDkwIC0zOHQzOCAtOTB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMGE7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTUxMiAyODh2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTUxMiA4MDB2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTExNTIgMjg4di0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0zMjAgcS00MCAwIC02OCAyOHQtMjggNjh2MTkycTAgNDAgMjggNjh0NjggMjhoMzIwcTQwIDAgNjggLTI4dDI4IC02OHpNNTEyIDEzMTJ2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTExNTIgODAwdi0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0zMjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOCBoMzIwcTQwIDAgNjggLTI4dDI4IC02OHpNMTc5MiAyODh2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTExNTIgMTMxMnYtMTkycTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMzIwcS00MCAwIC02OCAyOHQtMjggNjh2MTkycTAgNDAgMjggNjh0NjggMjhoMzIwcTQwIDAgNjggLTI4dDI4IC02OHpNMTc5MiA4MDB2LTE5MiBxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0zMjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOGgzMjBxNDAgMCA2OCAtMjh0MjggLTY4ek0xNzkyIDEzMTJ2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMGI7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTUxMiAyODh2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTUxMiA4MDB2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTE3OTIgMjg4di0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC05NjAgcS00MCAwIC02OCAyOHQtMjggNjh2MTkycTAgNDAgMjggNjh0NjggMjhoOTYwcTQwIDAgNjggLTI4dDI4IC02OHpNNTEyIDEzMTJ2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTMyMHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh6TTE3OTIgODAwdi0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC05NjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOCBoOTYwcTQwIDAgNjggLTI4dDI4IC02OHpNMTc5MiAxMzEydi0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC05NjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOGg5NjBxNDAgMCA2OCAtMjh0MjggLTY4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDBjOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNjcxIDk3MHEwIC00MCAtMjggLTY4bC03MjQgLTcyNGwtMTM2IC0xMzZxLTI4IC0yOCAtNjggLTI4dC02OCAyOGwtMTM2IDEzNmwtMzYyIDM2MnEtMjggMjggLTI4IDY4dDI4IDY4bDEzNiAxMzZxMjggMjggNjggMjh0NjggLTI4bDI5NCAtMjk1bDY1NiA2NTdxMjggMjggNjggMjh0NjggLTI4bDEzNiAtMTM2cTI4IC0yOCAyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMGQ7IiBob3Jpei1hZHYteD0iMTQwOCIgZD0iTTEyOTggMjE0cTAgLTQwIC0yOCAtNjhsLTEzNiAtMTM2cS0yOCAtMjggLTY4IC0yOHQtNjggMjhsLTI5NCAyOTRsLTI5NCAtMjk0cS0yOCAtMjggLTY4IC0yOHQtNjggMjhsLTEzNiAxMzZxLTI4IDI4IC0yOCA2OHQyOCA2OGwyOTQgMjk0bC0yOTQgMjk0cS0yOCAyOCAtMjggNjh0MjggNjhsMTM2IDEzNnEyOCAyOCA2OCAyOHQ2OCAtMjhsMjk0IC0yOTRsMjk0IDI5NHEyOCAyOCA2OCAyOHQ2OCAtMjhsMTM2IC0xMzZxMjggLTI4IDI4IC02OCB0LTI4IC02OGwtMjk0IC0yOTRsMjk0IC0yOTRxMjggLTI4IDI4IC02OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAwZTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTAyNCA3MzZ2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMjI0di0yMjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djIyNGgtMjI0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgyMjR2MjI0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41di0yMjRoMjI0IHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTExNTIgNzA0cTAgMTg1IC0xMzEuNSAzMTYuNXQtMzE2LjUgMTMxLjV0LTMxNi41IC0xMzEuNXQtMTMxLjUgLTMxNi41dDEzMS41IC0zMTYuNXQzMTYuNSAtMTMxLjV0MzE2LjUgMTMxLjV0MTMxLjUgMzE2LjV6TTE2NjQgLTEyOHEwIC01MyAtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNXEtNTQgMCAtOTAgMzhsLTM0MyAzNDJxLTE3OSAtMTI0IC0zOTkgLTEyNHEtMTQzIDAgLTI3My41IDU1LjUgdC0yMjUgMTUwdC0xNTAgMjI1dC01NS41IDI3My41dDU1LjUgMjczLjV0MTUwIDIyNXQyMjUgMTUwdDI3My41IDU1LjV0MjczLjUgLTU1LjV0MjI1IC0xNTB0MTUwIC0yMjV0NTUuNSAtMjczLjVxMCAtMjIwIC0xMjQgLTM5OWwzNDMgLTM0M3EzNyAtMzcgMzcgLTkweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDEwOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xMDI0IDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC01NzZxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDU3NnExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTExNTIgNzA0cTAgMTg1IC0xMzEuNSAzMTYuNXQtMzE2LjUgMTMxLjV0LTMxNi41IC0xMzEuNXQtMTMxLjUgLTMxNi41dDEzMS41IC0zMTYuNXQzMTYuNSAtMTMxLjV0MzE2LjUgMTMxLjV0MTMxLjUgMzE2LjV6IE0xNjY0IC0xMjhxMCAtNTMgLTM3LjUgLTkwLjV0LTkwLjUgLTM3LjVxLTU0IDAgLTkwIDM4bC0zNDMgMzQycS0xNzkgLTEyNCAtMzk5IC0xMjRxLTE0MyAwIC0yNzMuNSA1NS41dC0yMjUgMTUwdC0xNTAgMjI1dC01NS41IDI3My41dDU1LjUgMjczLjV0MTUwIDIyNXQyMjUgMTUwdDI3My41IDU1LjV0MjczLjUgLTU1LjV0MjI1IC0xNTB0MTUwIC0yMjV0NTUuNSAtMjczLjVxMCAtMjIwIC0xMjQgLTM5OWwzNDMgLTM0M3EzNyAtMzcgMzcgLTkweiAiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxMTsiIGQ9Ik0xNTM2IDY0MHEwIC0xNTYgLTYxIC0yOTh0LTE2NCAtMjQ1dC0yNDUgLTE2NHQtMjk4IC02MXQtMjk4IDYxdC0yNDUgMTY0dC0xNjQgMjQ1dC02MSAyOThxMCAxODIgODAuNSAzNDN0MjI2LjUgMjcwcTQzIDMyIDk1LjUgMjV0ODMuNSAtNTBxMzIgLTQyIDI0LjUgLTk0LjV0LTQ5LjUgLTg0LjVxLTk4IC03NCAtMTUxLjUgLTE4MXQtNTMuNSAtMjI4cTAgLTEwNCA0MC41IC0xOTguNXQxMDkuNSAtMTYzLjV0MTYzLjUgLTEwOS41IHQxOTguNSAtNDAuNXQxOTguNSA0MC41dDE2My41IDEwOS41dDEwOS41IDE2My41dDQwLjUgMTk4LjVxMCAxMjEgLTUzLjUgMjI4dC0xNTEuNSAxODFxLTQyIDMyIC00OS41IDg0LjV0MjQuNSA5NC41cTMxIDQzIDg0IDUwdDk1IC0yNXExNDYgLTEwOSAyMjYuNSAtMjcwdDgwLjUgLTM0M3pNODk2IDE0MDh2LTY0MHEwIC01MiAtMzggLTkwdC05MCAtMzh0LTkwIDM4dC0zOCA5MHY2NDBxMCA1MiAzOCA5MHQ5MCAzOHQ5MCAtMzh0MzggLTkweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDEyOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0yNTYgOTZ2LTE5MnEwIC0xNCAtOSAtMjN0LTIzIC05aC0xOTJxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDE5MnExNCAwIDIzIC05dDkgLTIzek02NDAgMjI0di0zMjBxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMTkycS0xNCAwIC0yMyA5dC05IDIzdjMyMHEwIDE0IDkgMjN0MjMgOWgxOTJxMTQgMCAyMyAtOXQ5IC0yM3pNMTAyNCA0ODB2LTU3NnEwIC0xNCAtOSAtMjN0LTIzIC05aC0xOTJxLTE0IDAgLTIzIDl0LTkgMjMgdjU3NnEwIDE0IDkgMjN0MjMgOWgxOTJxMTQgMCAyMyAtOXQ5IC0yM3pNMTQwOCA4NjR2LTk2MHEwIC0xNCAtOSAtMjN0LTIzIC05aC0xOTJxLTE0IDAgLTIzIDl0LTkgMjN2OTYwcTAgMTQgOSAyM3QyMyA5aDE5MnExNCAwIDIzIC05dDkgLTIzek0xNzkyIDEzNzZ2LTE0NzJxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMTkycS0xNCAwIC0yMyA5dC05IDIzdjE0NzJxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMTM7IiBkPSJNMTAyNCA2NDBxMCAxMDYgLTc1IDE4MXQtMTgxIDc1dC0xODEgLTc1dC03NSAtMTgxdDc1IC0xODF0MTgxIC03NXQxODEgNzV0NzUgMTgxek0xNTM2IDc0OXYtMjIycTAgLTEyIC04IC0yM3QtMjAgLTEzbC0xODUgLTI4cS0xOSAtNTQgLTM5IC05MXEzNSAtNTAgMTA3IC0xMzhxMTAgLTEyIDEwIC0yNXQtOSAtMjNxLTI3IC0zNyAtOTkgLTEwOHQtOTQgLTcxcS0xMiAwIC0yNiA5bC0xMzggMTA4cS00NCAtMjMgLTkxIC0zOCBxLTE2IC0xMzYgLTI5IC0xODZxLTcgLTI4IC0zNiAtMjhoLTIyMnEtMTQgMCAtMjQuNSA4LjV0LTExLjUgMjEuNWwtMjggMTg0cS00OSAxNiAtOTAgMzdsLTE0MSAtMTA3cS0xMCAtOSAtMjUgLTlxLTE0IDAgLTI1IDExcS0xMjYgMTE0IC0xNjUgMTY4cS03IDEwIC03IDIzcTAgMTIgOCAyM3ExNSAyMSA1MSA2Ni41dDU0IDcwLjVxLTI3IDUwIC00MSA5OWwtMTgzIDI3cS0xMyAyIC0yMSAxMi41dC04IDIzLjV2MjIycTAgMTIgOCAyM3QxOSAxMyBsMTg2IDI4cTE0IDQ2IDM5IDkycS00MCA1NyAtMTA3IDEzOHEtMTAgMTIgLTEwIDI0cTAgMTAgOSAyM3EyNiAzNiA5OC41IDEwNy41dDk0LjUgNzEuNXExMyAwIDI2IC0xMGwxMzggLTEwN3E0NCAyMyA5MSAzOHExNiAxMzYgMjkgMTg2cTcgMjggMzYgMjhoMjIycTE0IDAgMjQuNSAtOC41dDExLjUgLTIxLjVsMjggLTE4NHE0OSAtMTYgOTAgLTM3bDE0MiAxMDdxOSA5IDI0IDlxMTMgMCAyNSAtMTBxMTI5IC0xMTkgMTY1IC0xNzBxNyAtOCA3IC0yMiBxMCAtMTIgLTggLTIzcS0xNSAtMjEgLTUxIC02Ni41dC01NCAtNzAuNXEyNiAtNTAgNDEgLTk4bDE4MyAtMjhxMTMgLTIgMjEgLTEyLjV0OCAtMjMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxNDsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNNTEyIDgwMHYtNTc2cTAgLTE0IC05IC0yM3QtMjMgLTloLTY0cS0xNCAwIC0yMyA5dC05IDIzdjU3NnEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzIC05dDkgLTIzek03NjggODAwdi01NzZxMCAtMTQgLTkgLTIzdC0yMyAtOWgtNjRxLTE0IDAgLTIzIDl0LTkgMjN2NTc2cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMgLTl0OSAtMjN6TTEwMjQgODAwdi01NzZxMCAtMTQgLTkgLTIzdC0yMyAtOWgtNjRxLTE0IDAgLTIzIDl0LTkgMjN2NTc2IHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzIC05dDkgLTIzek0xMTUyIDc2djk0OGgtODk2di05NDhxMCAtMjIgNyAtNDAuNXQxNC41IC0yN3QxMC41IC04LjVoODMycTMgMCAxMC41IDguNXQxNC41IDI3dDcgNDAuNXpNNDgwIDExNTJoNDQ4bC00OCAxMTdxLTcgOSAtMTcgMTFoLTMxN3EtMTAgLTIgLTE3IC0xMXpNMTQwOCAxMTIwdi02NHEwIC0xNCAtOSAtMjN0LTIzIC05aC05NnYtOTQ4cTAgLTgzIC00NyAtMTQzLjV0LTExMyAtNjAuNWgtODMyIHEtNjYgMCAtMTEzIDU4LjV0LTQ3IDE0MS41djk1MmgtOTZxLTE0IDAgLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloMzA5bDcwIDE2N3ExNSAzNyA1NCA2M3Q3OSAyNmgzMjBxNDAgMCA3OSAtMjZ0NTQgLTYzbDcwIC0xNjdoMzA5cTE0IDAgMjMgLTl0OSAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMTU7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE0MDggNTQ0di00ODBxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0zODR2Mzg0aC0yNTZ2LTM4NGgtMzg0cS0yNiAwIC00NSAxOXQtMTkgNDV2NDgwcTAgMSAwLjUgM3QwLjUgM2w1NzUgNDc0bDU3NSAtNDc0cTEgLTIgMSAtNnpNMTYzMSA2MTNsLTYyIC03NHEtOCAtOSAtMjEgLTExaC0zcS0xMyAwIC0yMSA3bC02OTIgNTc3bC02OTIgLTU3N3EtMTIgLTggLTI0IC03cS0xMyAyIC0yMSAxMWwtNjIgNzRxLTggMTAgLTcgMjMuNXQxMSAyMS41IGw3MTkgNTk5cTMyIDI2IDc2IDI2dDc2IC0yNmwyNDQgLTIwNHYxOTVxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjN2LTQwOGwyMTkgLTE4MnExMCAtOCAxMSAtMjEuNXQtNyAtMjMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxNjsiIGhvcml6LWFkdi14PSIxMjgwIiBkPSJNMTI4IDBoMTAyNHY3NjhoLTQxNnEtNDAgMCAtNjggMjh0LTI4IDY4djQxNmgtNTEydi0xMjgwek03NjggODk2aDM3NnEtMTAgMjkgLTIyIDQxbC0zMTMgMzEzcS0xMiAxMiAtNDEgMjJ2LTM3NnpNMTI4MCA4NjR2LTg5NnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTEwODhxLTQwIDAgLTY4IDI4dC0yOCA2OHYxMzQ0cTAgNDAgMjggNjh0NjggMjhoNjQwcTQwIDAgODggLTIwdDc2IC00OGwzMTIgLTMxMnEyOCAtMjggNDggLTc2dDIwIC04OHogIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMTc7IiBkPSJNODk2IDk5MnYtNDQ4cTAgLTE0IC05IC0yM3QtMjMgLTloLTMyMHEtMTQgMCAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWgyMjR2MzUycTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMgLTl0OSAtMjN6TTEzMTIgNjQwcTAgMTQ4IC03MyAyNzN0LTE5OCAxOTh0LTI3MyA3M3QtMjczIC03M3QtMTk4IC0xOTh0LTczIC0yNzN0NzMgLTI3M3QxOTggLTE5OHQyNzMgLTczdDI3MyA3M3QxOTggMTk4dDczIDI3M3pNMTUzNiA2NDAgcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDE4OyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik0xMTExIDU0MHY0bC0yNCAzMjBxLTEgMTMgLTExIDIyLjV0LTIzIDkuNWgtMTg2cS0xMyAwIC0yMyAtOS41dC0xMSAtMjIuNWwtMjQgLTMyMHYtNHEtMSAtMTIgOCAtMjB0MjEgLThoMjQ0cTEyIDAgMjEgOHQ4IDIwek0xODcwIDczcTAgLTczIC00NiAtNzNoLTcwNHExMyAwIDIyIDkuNXQ4IDIyLjVsLTIwIDI1NnEtMSAxMyAtMTEgMjIuNXQtMjMgOS41aC0yNzJxLTEzIDAgLTIzIC05LjV0LTExIC0yMi41bC0yMCAtMjU2IHEtMSAtMTMgOCAtMjIuNXQyMiAtOS41aC03MDRxLTQ2IDAgLTQ2IDczcTAgNTQgMjYgMTE2bDQxNyAxMDQ0cTggMTkgMjYgMzN0MzggMTRoMzM5cS0xMyAwIC0yMyAtOS41dC0xMSAtMjIuNWwtMTUgLTE5MnEtMSAtMTQgOCAtMjN0MjIgLTloMTY2cTEzIDAgMjIgOXQ4IDIzbC0xNSAxOTJxLTEgMTMgLTExIDIyLjV0LTIzIDkuNWgzMzlxMjAgMCAzOCAtMTR0MjYgLTMzbDQxNyAtMTA0NHEyNiAtNjIgMjYgLTExNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxOTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTI4MCAxOTJxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1ek0xNTM2IDE5MnEwIDI2IC0xOSA0NXQtNDUgMTl0LTQ1IC0xOXQtMTkgLTQ1dDE5IC00NXQ0NSAtMTl0NDUgMTl0MTkgNDV6TTE2NjQgNDE2di0zMjBxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0xNDcycS00MCAwIC02OCAyOHQtMjggNjh2MzIwcTAgNDAgMjggNjh0NjggMjhoNDY1bDEzNSAtMTM2IHE1OCAtNTYgMTM2IC01NnQxMzYgNTZsMTM2IDEzNmg0NjRxNDAgMCA2OCAtMjh0MjggLTY4ek0xMzM5IDk4NXExNyAtNDEgLTE0IC03MGwtNDQ4IC00NDhxLTE4IC0xOSAtNDUgLTE5dC00NSAxOWwtNDQ4IDQ0OHEtMzEgMjkgLTE0IDcwcTE3IDM5IDU5IDM5aDI1NnY0NDhxMCAyNiAxOSA0NXQ0NSAxOWgyNTZxMjYgMCA0NSAtMTl0MTkgLTQ1di00NDhoMjU2cTQyIDAgNTkgLTM5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDFhOyIgZD0iTTExMjAgNjA4cTAgLTEyIC0xMCAtMjRsLTMxOSAtMzE5cS0xMSAtOSAtMjMgLTl0LTIzIDlsLTMyMCAzMjBxLTE1IDE2IC03IDM1cTggMjAgMzAgMjBoMTkydjM1MnEwIDE0IDkgMjN0MjMgOWgxOTJxMTQgMCAyMyAtOXQ5IC0yM3YtMzUyaDE5MnExNCAwIDIzIC05dDkgLTIzek03NjggMTE4NHEtMTQ4IDAgLTI3MyAtNzN0LTE5OCAtMTk4dC03MyAtMjczdDczIC0yNzN0MTk4IC0xOTh0MjczIC03M3QyNzMgNzN0MTk4IDE5OHQ3MyAyNzMgdC03MyAyNzN0LTE5OCAxOTh0LTI3MyA3M3pNMTUzNiA2NDBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDN0Mjc5LjUgLTI3OS41dDEwMyAtMzg1LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMWI7IiBkPSJNMTExOCA2NjBxLTggLTIwIC0zMCAtMjBoLTE5MnYtMzUycTAgLTE0IC05IC0yM3QtMjMgLTloLTE5MnEtMTQgMCAtMjMgOXQtOSAyM3YzNTJoLTE5MnEtMTQgMCAtMjMgOXQtOSAyM3EwIDEyIDEwIDI0bDMxOSAzMTlxMTEgOSAyMyA5dDIzIC05bDMyMCAtMzIwcTE1IC0xNiA3IC0zNXpNNzY4IDExODRxLTE0OCAwIC0yNzMgLTczdC0xOTggLTE5OHQtNzMgLTI3M3Q3MyAtMjczdDE5OCAtMTk4dDI3MyAtNzN0MjczIDczdDE5OCAxOTggdDczIDI3M3QtNzMgMjczdC0xOTggMTk4dC0yNzMgNzN6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDFjOyIgZD0iTTEwMjMgNTc2aDMxNnEtMSAzIC0yLjUgOHQtMi41IDhsLTIxMiA0OTZoLTcwOGwtMjEyIC00OTZxLTEgLTIgLTIuNSAtOHQtMi41IC04aDMxNmw5NSAtMTkyaDMyMHpNMTUzNiA1NDZ2LTQ4MnEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE0MDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXY0ODJxMCA2MiAyNSAxMjNsMjM4IDU1MnExMCAyNSAzNi41IDQydDUyLjUgMTdoODMycTI2IDAgNTIuNSAtMTd0MzYuNSAtNDJsMjM4IC01NTIgcTI1IC02MSAyNSAtMTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDFkOyIgZD0iTTExODQgNjQwcTAgLTM3IC0zMiAtNTVsLTU0NCAtMzIwcS0xNSAtOSAtMzIgLTlxLTE2IDAgLTMyIDhxLTMyIDE5IC0zMiA1NnY2NDBxMCAzNyAzMiA1NnEzMyAxOCA2NCAtMWw1NDQgLTMyMHEzMiAtMTggMzIgLTU1ek0xMzEyIDY0MHEwIDE0OCAtNzMgMjczdC0xOTggMTk4dC0yNzMgNzN0LTI3MyAtNzN0LTE5OCAtMTk4dC03MyAtMjczdDczIC0yNzN0MTk4IC0xOTh0MjczIC03M3QyNzMgNzN0MTk4IDE5OHQ3MyAyNzN6TTE1MzYgNjQwIHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxZTsiIGQ9Ik0xNTM2IDEyODB2LTQ0OHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTQ0OHEtNDIgMCAtNTkgNDBxLTE3IDM5IDE0IDY5bDEzOCAxMzhxLTE0OCAxMzcgLTM0OSAxMzdxLTEwNCAwIC0xOTguNSAtNDAuNXQtMTYzLjUgLTEwOS41dC0xMDkuNSAtMTYzLjV0LTQwLjUgLTE5OC41dDQwLjUgLTE5OC41dDEwOS41IC0xNjMuNXQxNjMuNSAtMTA5LjV0MTk4LjUgLTQwLjVxMTE5IDAgMjI1IDUydDE3OSAxNDdxNyAxMCAyMyAxMnExNCAwIDI1IC05IGwxMzcgLTEzOHE5IC04IDkuNSAtMjAuNXQtNy41IC0yMi41cS0xMDkgLTEzMiAtMjY0IC0yMDQuNXQtMzI3IC03Mi41cS0xNTYgMCAtMjk4IDYxdC0yNDUgMTY0dC0xNjQgMjQ1dC02MSAyOTh0NjEgMjk4dDE2NCAyNDV0MjQ1IDE2NHQyOTggNjFxMTQ3IDAgMjg0LjUgLTU1LjV0MjQ0LjUgLTE1Ni41bDEzMCAxMjlxMjkgMzEgNzAgMTRxMzkgLTE3IDM5IC01OXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAyMTsiIGQ9Ik0xNTExIDQ4MHEwIC01IC0xIC03cS02NCAtMjY4IC0yNjggLTQzNC41dC00NzggLTE2Ni41cS0xNDYgMCAtMjgyLjUgNTV0LTI0My41IDE1N2wtMTI5IC0xMjlxLTE5IC0xOSAtNDUgLTE5dC00NSAxOXQtMTkgNDV2NDQ4cTAgMjYgMTkgNDV0NDUgMTloNDQ4cTI2IDAgNDUgLTE5dDE5IC00NXQtMTkgLTQ1bC0xMzcgLTEzN3E3MSAtNjYgMTYxIC0xMDJ0MTg3IC0zNnExMzQgMCAyNTAgNjV0MTg2IDE3OXExMSAxNyA1MyAxMTcgcTggMjMgMzAgMjNoMTkycTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTUzNiAxMjgwdi00NDhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC00NDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NWwxMzggMTM4cS0xNDggMTM3IC0zNDkgMTM3cS0xMzQgMCAtMjUwIC02NXQtMTg2IC0xNzlxLTExIC0xNyAtNTMgLTExN3EtOCAtMjMgLTMwIC0yM2gtMTk5cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2N3E2NSAyNjggMjcwIDQzNC41dDQ4MCAxNjYuNSBxMTQ2IDAgMjg0IC01NS41dDI0NSAtMTU2LjVsMTMwIDEyOXExOSAxOSA0NSAxOXQ0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDIyOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0zODQgMzUydi02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTM4NCA2MDh2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXogTTM4NCA4NjR2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTUzNiAzNTJ2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtOTYwcS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg5NjBxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNMTUzNiA2MDh2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtOTYwcS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg5NjBxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xNTM2IDg2NHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC05NjBxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDk2MHExMyAwIDIyLjUgLTkuNSB0OS41IC0yMi41ek0xNjY0IDE2MHY4MzJxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC0xNDcycS0xMyAwIC0yMi41IC05LjV0LTkuNSAtMjIuNXYtODMycTAgLTEzIDkuNSAtMjIuNXQyMi41IC05LjVoMTQ3MnExMyAwIDIyLjUgOS41dDkuNSAyMi41ek0xNzkyIDEyNDh2LTEwODhxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTE0NzJxLTY2IDAgLTExMyA0N3QtNDcgMTEzdjEwODhxMCA2NiA0NyAxMTN0MTEzIDQ3aDE0NzJxNjYgMCAxMTMgLTQ3IHQ0NyAtMTEzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDIzOyIgaG9yaXotYWR2LXg9IjExNTIiIGQ9Ik0zMjAgNzY4aDUxMnYxOTJxMCAxMDYgLTc1IDE4MXQtMTgxIDc1dC0xODEgLTc1dC03NSAtMTgxdi0xOTJ6TTExNTIgNjcydi01NzZxMCAtNDAgLTI4IC02OHQtNjggLTI4aC05NjBxLTQwIDAgLTY4IDI4dC0yOCA2OHY1NzZxMCA0MCAyOCA2OHQ2OCAyOGgzMnYxOTJxMCAxODQgMTMyIDMxNnQzMTYgMTMydDMxNiAtMTMydDEzMiAtMzE2di0xOTJoMzJxNDAgMCA2OCAtMjh0MjggLTY4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDI0OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0zMjAgMTI4MHEwIC03MiAtNjQgLTExMHYtMTI2NnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTI2NnEtNjQgMzggLTY0IDExMHEwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjV0OTAuNSAtMzcuNXQzNy41IC05MC41ek0xNzkyIDEyMTZ2LTc2M3EwIC0yNSAtMTIuNSAtMzguNXQtMzkuNSAtMjcuNXEtMjE1IC0xMTYgLTM2OSAtMTE2cS02MSAwIC0xMjMuNSAyMnQtMTA4LjUgNDggdC0xMTUuNSA0OHQtMTQyLjUgMjJxLTE5MiAwIC00NjQgLTE0NnEtMTcgLTkgLTMzIC05cS0yNiAwIC00NSAxOXQtMTkgNDV2NzQycTAgMzIgMzEgNTVxMjEgMTQgNzkgNDNxMjM2IDEyMCA0MjEgMTIwcTEwNyAwIDIwMCAtMjl0MjE5IC04OHEzOCAtMTkgODggLTE5cTU0IDAgMTE3LjUgMjF0MTEwIDQ3dDg4IDQ3dDU0LjUgMjFxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDI1OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNjY0IDY1MHEwIC0xNjYgLTYwIC0zMTRsLTIwIC00OWwtMTg1IC0zM3EtMjIgLTgzIC05MC41IC0xMzYuNXQtMTU2LjUgLTUzLjV2LTMycTAgLTE0IC05IC0yM3QtMjMgLTloLTY0cS0xNCAwIC0yMyA5dC05IDIzdjU3NnEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzIC05dDkgLTIzdi0zMnE3MSAwIDEzMCAtMzUuNXQ5MyAtOTUuNWw2OCAxMnEyOSA5NSAyOSAxOTNxMCAxNDggLTg4IDI3OXQtMjM2LjUgMjA5dC0zMTUuNSA3OCB0LTMxNS41IC03OHQtMjM2LjUgLTIwOXQtODggLTI3OXEwIC05OCAyOSAtMTkzbDY4IC0xMnEzNCA2MCA5MyA5NS41dDEzMCAzNS41djMycTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMgLTl0OSAtMjN2LTU3NnEwIC0xNCAtOSAtMjN0LTIzIC05aC02NHEtMTQgMCAtMjMgOXQtOSAyM3YzMnEtODggMCAtMTU2LjUgNTMuNXQtOTAuNSAxMzYuNWwtMTg1IDMzbC0yMCA0OXEtNjAgMTQ4IC02MCAzMTRxMCAxNTEgNjcgMjkxdDE3OSAyNDIuNSB0MjY2IDE2My41dDMyMCA2MXQzMjAgLTYxdDI2NiAtMTYzLjV0MTc5IC0yNDIuNXQ2NyAtMjkxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDI2OyIgaG9yaXotYWR2LXg9Ijc2OCIgZD0iTTc2OCAxMTg0di0xMDg4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOXQtNDUgMTlsLTMzMyAzMzNoLTI2MnEtMjYgMCAtNDUgMTl0LTE5IDQ1djM4NHEwIDI2IDE5IDQ1dDQ1IDE5aDI2MmwzMzMgMzMzcTE5IDE5IDQ1IDE5dDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMjc7IiBob3Jpei1hZHYteD0iMTE1MiIgZD0iTTc2OCAxMTg0di0xMDg4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOXQtNDUgMTlsLTMzMyAzMzNoLTI2MnEtMjYgMCAtNDUgMTl0LTE5IDQ1djM4NHEwIDI2IDE5IDQ1dDQ1IDE5aDI2MmwzMzMgMzMzcTE5IDE5IDQ1IDE5dDQ1IC0xOXQxOSAtNDV6TTExNTIgNjQwcTAgLTc2IC00Mi41IC0xNDEuNXQtMTEyLjUgLTkzLjVxLTEwIC01IC0yNSAtNXEtMjYgMCAtNDUgMTguNXQtMTkgNDUuNXEwIDIxIDEyIDM1LjV0MjkgMjV0MzQgMjN0MjkgMzUuNSB0MTIgNTd0LTEyIDU3dC0yOSAzNS41dC0zNCAyM3QtMjkgMjV0LTEyIDM1LjVxMCAyNyAxOSA0NS41dDQ1IDE4LjVxMTUgMCAyNSAtNXE3MCAtMjcgMTEyLjUgLTkzdDQyLjUgLTE0MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAyODsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNzY4IDExODR2LTEwODhxMCAtMjYgLTE5IC00NXQtNDUgLTE5dC00NSAxOWwtMzMzIDMzM2gtMjYycS0yNiAwIC00NSAxOXQtMTkgNDV2Mzg0cTAgMjYgMTkgNDV0NDUgMTloMjYybDMzMyAzMzNxMTkgMTkgNDUgMTl0NDUgLTE5dDE5IC00NXpNMTE1MiA2NDBxMCAtNzYgLTQyLjUgLTE0MS41dC0xMTIuNSAtOTMuNXEtMTAgLTUgLTI1IC01cS0yNiAwIC00NSAxOC41dC0xOSA0NS41cTAgMjEgMTIgMzUuNXQyOSAyNXQzNCAyM3QyOSAzNS41IHQxMiA1N3QtMTIgNTd0LTI5IDM1LjV0LTM0IDIzdC0yOSAyNXQtMTIgMzUuNXEwIDI3IDE5IDQ1LjV0NDUgMTguNXExNSAwIDI1IC01cTcwIC0yNyAxMTIuNSAtOTN0NDIuNSAtMTQyek0xNDA4IDY0MHEwIC0xNTMgLTg1IC0yODIuNXQtMjI1IC0xODguNXEtMTMgLTUgLTI1IC01cS0yNyAwIC00NiAxOXQtMTkgNDVxMCAzOSAzOSA1OXE1NiAyOSA3NiA0NHE3NCA1NCAxMTUuNSAxMzUuNXQ0MS41IDE3My41dC00MS41IDE3My41IHQtMTE1LjUgMTM1LjVxLTIwIDE1IC03NiA0NHEtMzkgMjAgLTM5IDU5cTAgMjYgMTkgNDV0NDUgMTlxMTMgMCAyNiAtNXExNDAgLTU5IDIyNSAtMTg4LjV0ODUgLTI4Mi41ek0xNjY0IDY0MHEwIC0yMzAgLTEyNyAtNDIyLjV0LTMzOCAtMjgzLjVxLTEzIC01IC0yNiAtNXEtMjYgMCAtNDUgMTl0LTE5IDQ1cTAgMzYgMzkgNTlxNyA0IDIyLjUgMTAuNXQyMi41IDEwLjVxNDYgMjUgODIgNTFxMTIzIDkxIDE5MiAyMjd0NjkgMjg5dC02OSAyODkgdC0xOTIgMjI3cS0zNiAyNiAtODIgNTFxLTcgNCAtMjIuNSAxMC41dC0yMi41IDEwLjVxLTM5IDIzIC0zOSA1OXEwIDI2IDE5IDQ1dDQ1IDE5cTEzIDAgMjYgLTVxMjExIC05MSAzMzggLTI4My41dDEyNyAtNDIyLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMjk7IiBob3Jpei1hZHYteD0iMTQwOCIgZD0iTTM4NCAzODR2LTEyOGgtMTI4djEyOGgxMjh6TTM4NCAxMTUydi0xMjhoLTEyOHYxMjhoMTI4ek0xMTUyIDExNTJ2LTEyOGgtMTI4djEyOGgxMjh6TTEyOCAxMjloMzg0djM4M2gtMzg0di0zODN6TTEyOCA4OTZoMzg0djM4NGgtMzg0di0zODR6TTg5NiA4OTZoMzg0djM4NGgtMzg0di0zODR6TTY0MCA2NDB2LTY0MGgtNjQwdjY0MGg2NDB6TTExNTIgMTI4di0xMjhoLTEyOHYxMjhoMTI4ek0xNDA4IDEyOHYtMTI4aC0xMjh2MTI4aDEyOHogTTE0MDggNjQwdi0zODRoLTM4NHYxMjhoLTEyOHYtMzg0aC0xMjh2NjQwaDM4NHYtMTI4aDEyOHYxMjhoMTI4ek02NDAgMTQwOHYtNjQwaC02NDB2NjQwaDY0MHpNMTQwOCAxNDA4di02NDBoLTY0MHY2NDBoNjQweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDJhOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik02MyAwaC02M3YxNDA4aDYzdi0xNDA4ek0xMjYgMWgtMzJ2MTQwN2gzMnYtMTQwN3pNMjIwIDFoLTMxdjE0MDdoMzF2LTE0MDd6TTM3NyAxaC0zMXYxNDA3aDMxdi0xNDA3ek01MzQgMWgtNjJ2MTQwN2g2MnYtMTQwN3pNNjYwIDFoLTMxdjE0MDdoMzF2LTE0MDd6TTcyMyAxaC0zMXYxNDA3aDMxdi0xNDA3ek03ODYgMWgtMzF2MTQwN2gzMXYtMTQwN3pNOTQzIDFoLTYzdjE0MDdoNjN2LTE0MDd6TTExMDAgMWgtNjN2MTQwN2g2M3YtMTQwN3ogTTEyMjYgMWgtNjN2MTQwN2g2M3YtMTQwN3pNMTM1MiAxaC02M3YxNDA3aDYzdi0xNDA3ek0xNDQ2IDFoLTYzdjE0MDdoNjN2LTE0MDd6TTE2MzUgMWgtOTR2MTQwN2g5NHYtMTQwN3pNMTY5OCAxaC0zMnYxNDA3aDMydi0xNDA3ek0xNzkyIDBoLTYzdjE0MDhoNjN2LTE0MDh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMmI7IiBkPSJNNDQ4IDEwODhxMCA1MyAtMzcuNSA5MC41dC05MC41IDM3LjV0LTkwLjUgLTM3LjV0LTM3LjUgLTkwLjV0MzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTE1MTUgNTEycTAgLTUzIC0zNyAtOTBsLTQ5MSAtNDkycS0zOSAtMzcgLTkxIC0zN3EtNTMgMCAtOTAgMzdsLTcxNSA3MTZxLTM4IDM3IC02NC41IDEwMXQtMjYuNSAxMTd2NDE2cTAgNTIgMzggOTB0OTAgMzhoNDE2cTUzIDAgMTE3IC0yNi41dDEwMiAtNjQuNSBsNzE1IC03MTRxMzcgLTM5IDM3IC05MXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAyYzsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNNDQ4IDEwODhxMCA1MyAtMzcuNSA5MC41dC05MC41IDM3LjV0LTkwLjUgLTM3LjV0LTM3LjUgLTkwLjV0MzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTE1MTUgNTEycTAgLTUzIC0zNyAtOTBsLTQ5MSAtNDkycS0zOSAtMzcgLTkxIC0zN3EtNTMgMCAtOTAgMzdsLTcxNSA3MTZxLTM4IDM3IC02NC41IDEwMXQtMjYuNSAxMTd2NDE2cTAgNTIgMzggOTB0OTAgMzhoNDE2cTUzIDAgMTE3IC0yNi41dDEwMiAtNjQuNSBsNzE1IC03MTRxMzcgLTM5IDM3IC05MXpNMTg5OSA1MTJxMCAtNTMgLTM3IC05MGwtNDkxIC00OTJxLTM5IC0zNyAtOTEgLTM3cS0zNiAwIC01OSAxNHQtNTMgNDVsNDcwIDQ3MHEzNyAzNyAzNyA5MHEwIDUyIC0zNyA5MWwtNzE1IDcxNHEtMzggMzggLTEwMiA2NC41dC0xMTcgMjYuNWgyMjRxNTMgMCAxMTcgLTI2LjV0MTAyIC02NC41bDcxNSAtNzE0cTM3IC0zOSAzNyAtOTF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMmQ7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE2MzkgMTA1OHE0MCAtNTcgMTggLTEyOWwtMjc1IC05MDZxLTE5IC02NCAtNzYuNSAtMTA3LjV0LTEyMi41IC00My41aC05MjNxLTc3IDAgLTE0OC41IDUzLjV0LTk5LjUgMTMxLjVxLTI0IDY3IC0yIDEyN3EwIDQgMyAyN3Q0IDM3cTEgOCAtMyAyMS41dC0zIDE5LjVxMiAxMSA4IDIxdDE2LjUgMjMuNXQxNi41IDIzLjVxMjMgMzggNDUgOTEuNXQzMCA5MS41cTMgMTAgMC41IDMwdC0wLjUgMjhxMyAxMSAxNyAyOHQxNyAyMyBxMjEgMzYgNDIgOTJ0MjUgOTBxMSA5IC0yLjUgMzJ0MC41IDI4cTQgMTMgMjIgMzAuNXQyMiAyMi41cTE5IDI2IDQyLjUgODQuNXQyNy41IDk2LjVxMSA4IC0zIDI1LjV0LTIgMjYuNXEyIDggOSAxOHQxOCAyM3QxNyAyMXE4IDEyIDE2LjUgMzAuNXQxNSAzNXQxNiAzNnQxOS41IDMydDI2LjUgMjMuNXQzNiAxMS41dDQ3LjUgLTUuNWwtMSAtM3EzOCA5IDUxIDloNzYxcTc0IDAgMTE0IC01NnQxOCAtMTMwbC0yNzQgLTkwNiBxLTM2IC0xMTkgLTcxLjUgLTE1My41dC0xMjguNSAtMzQuNWgtODY5cS0yNyAwIC0zOCAtMTVxLTExIC0xNiAtMSAtNDNxMjQgLTcwIDE0NCAtNzBoOTIzcTI5IDAgNTYgMTUuNXQzNSA0MS41bDMwMCA5ODdxNyAyMiA1IDU3cTM4IC0xNSA1OSAtNDN6TTU3NSAxMDU2cS00IC0xMyAyIC0yMi41dDIwIC05LjVoNjA4cTEzIDAgMjUuNSA5LjV0MTYuNSAyMi41bDIxIDY0cTQgMTMgLTIgMjIuNXQtMjAgOS41aC02MDhxLTEzIDAgLTI1LjUgLTkuNSB0LTE2LjUgLTIyLjV6TTQ5MiA4MDBxLTQgLTEzIDIgLTIyLjV0MjAgLTkuNWg2MDhxMTMgMCAyNS41IDkuNXQxNi41IDIyLjVsMjEgNjRxNCAxMyAtMiAyMi41dC0yMCA5LjVoLTYwOHEtMTMgMCAtMjUuNSAtOS41dC0xNi41IC0yMi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDJlOyIgaG9yaXotYWR2LXg9IjEyODAiIGQ9Ik0xMTY0IDE0MDhxMjMgMCA0NCAtOXEzMyAtMTMgNTIuNSAtNDF0MTkuNSAtNjJ2LTEyODlxMCAtMzQgLTE5LjUgLTYydC01Mi41IC00MXEtMTkgLTggLTQ0IC04cS00OCAwIC04MyAzMmwtNDQxIDQyNGwtNDQxIC00MjRxLTM2IC0zMyAtODMgLTMzcS0yMyAwIC00NCA5cS0zMyAxMyAtNTIuNSA0MXQtMTkuNSA2MnYxMjg5cTAgMzQgMTkuNSA2MnQ1Mi41IDQxcTIxIDkgNDQgOWgxMDQ4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDJmOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0zODQgMGg4OTZ2MjU2aC04OTZ2LTI1NnpNMzg0IDY0MGg4OTZ2Mzg0aC0xNjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxNjBoLTY0MHYtNjQwek0xNTM2IDU3NnEwIDI2IC0xOSA0NXQtNDUgMTl0LTQ1IC0xOXQtMTkgLTQ1dDE5IC00NXQ0NSAtMTl0NDUgMTl0MTkgNDV6TTE2NjQgNTc2di00MTZxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0yMjR2LTE2MHEwIC00MCAtMjggLTY4dC02OCAtMjhoLTk2MHEtNDAgMCAtNjggMjh0LTI4IDY4IHYxNjBoLTIyNHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djQxNnEwIDc5IDU2LjUgMTM1LjV0MTM1LjUgNTYuNWg2NHY1NDRxMCA0MCAyOCA2OHQ2OCAyOGg2NzJxNDAgMCA4OCAtMjB0NzYgLTQ4bDE1MiAtMTUycTI4IC0yOCA0OCAtNzZ0MjAgLTg4di0yNTZoNjRxNzkgMCAxMzUuNSAtNTYuNXQ1Ni41IC0xMzUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAzMDsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNOTYwIDg2NHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXQtODQuNSAtMjAzLjV0LTIwMy41IC04NC41dC0yMDMuNSA4NC41dC04NC41IDIwMy41dDg0LjUgMjAzLjV0MjAzLjUgODQuNXpNMTY2NCAxMjgwcTEwNiAwIDE4MSAtNzV0NzUgLTE4MXYtODk2cTAgLTEwNiAtNzUgLTE4MXQtMTgxIC03NWgtMTQwOHEtMTA2IDAgLTE4MSA3NXQtNzUgMTgxdjg5NnEwIDEwNiA3NSAxODF0MTgxIDc1aDIyNGw1MSAxMzYgcTE5IDQ5IDY5LjUgODQuNXQxMDMuNSAzNS41aDUxMnE1MyAwIDEwMy41IC0zNS41dDY5LjUgLTg0LjVsNTEgLTEzNmgyMjR6TTk2MCAxMjhxMTg1IDAgMzE2LjUgMTMxLjV0MTMxLjUgMzE2LjV0LTEzMS41IDMxNi41dC0zMTYuNSAxMzEuNXQtMzE2LjUgLTEzMS41dC0xMzEuNSAtMzE2LjV0MTMxLjUgLTMxNi41dDMxNi41IC0xMzEuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAzMTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNzI1IDk3N2wtMTcwIC00NTBxNzMgLTEgMTUzLjUgLTJ0MTE5IC0xLjV0NTIuNSAtMC41bDI5IDJxLTMyIDk1IC05MiAyNDFxLTUzIDEzMiAtOTIgMjExek0yMSAtMTI4aC0yMWwyIDc5cTIyIDcgODAgMThxODkgMTYgMTEwIDMxcTIwIDE2IDQ4IDY4bDIzNyA2MTZsMjgwIDcyNGg3NWg1M2wxMSAtMjFsMjA1IC00ODBxMTAzIC0yNDIgMTI0IC0yOTdxMzkgLTEwMiA5NiAtMjM1cTI2IC01OCA2NSAtMTY0cTI0IC02NyA2NSAtMTQ5IHEyMiAtNDkgMzUgLTU3cTIyIC0xOSA2OSAtMjNxNDcgLTYgMTAzIC0yN3E2IC0zOSA2IC01N3EwIC0xNCAtMSAtMjZxLTgwIDAgLTE5MiA4cS05MyA4IC0xODkgOHEtNzkgMCAtMTM1IC0ybC0yMDAgLTExbC01OCAtMnEwIDQ1IDQgNzhsMTMxIDI4cTU2IDEzIDY4IDIzcTEyIDEyIDEyIDI3dC02IDMybC00NyAxMTRsLTkyIDIyOGwtNDUwIDJxLTI5IC02NSAtMTA0IC0yNzRxLTIzIC02NCAtMjMgLTg0cTAgLTMxIDE3IC00MyBxMjYgLTIxIDEwMyAtMzJxMyAwIDEzLjUgLTJ0MzAgLTV0NDAuNSAtNnExIC0yOCAxIC01OHEwIC0xNyAtMiAtMjdxLTY2IDAgLTM0OSAyMGwtNDggLThxLTgxIC0xNCAtMTY3IC0xNHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAzMjsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNNTU1IDE1cTc2IC0zMiAxNDAgLTMycTEzMSAwIDIxNiA0MXQxMjIgMTEzcTM4IDcwIDM4IDE4MXEwIDExNCAtNDEgMTgwcS01OCA5NCAtMTQxIDEyNnEtODAgMzIgLTI0NyAzMnEtNzQgMCAtMTAxIC0xMHYtMTQ0bC0xIC0xNzNsMyAtMjcwcTAgLTE1IDEyIC00NHpNNTQxIDc2MXE0MyAtNyAxMDkgLTdxMTc1IDAgMjY0IDY1dDg5IDIyNHEwIDExMiAtODUgMTg3cS04NCA3NSAtMjU1IDc1cS01MiAwIC0xMzAgLTEzcTAgLTQ0IDIgLTc3IHE3IC0xMjIgNiAtMjc5bC0xIC05OHEwIC00MyAxIC03N3pNMCAtMTI4bDIgOTRxNDUgOSA2OCAxMnE3NyAxMiAxMjMgMzFxMTcgMjcgMjEgNTFxOSA2NiA5IDE5NGwtMiA0OTdxLTUgMjU2IC05IDQwNHEtMSA4NyAtMTEgMTA5cS0xIDQgLTEyIDEycS0xOCAxMiAtNjkgMTVxLTMwIDIgLTExNCAxM2wtNCA4M2wyNjAgNmwzODAgMTNsNDUgMXE1IDAgMTQgMC41dDE0IDAuNXExIDAgMjEuNSAtMC41dDQwLjUgLTAuNWg3NHE4OCAwIDE5MSAtMjcgcTQzIC0xMyA5NiAtMzlxNTcgLTI5IDEwMiAtNzZxNDQgLTQ3IDY1IC0xMDR0MjEgLTEyMnEwIC03MCAtMzIgLTEyOHQtOTUgLTEwNXEtMjYgLTIwIC0xNTAgLTc3cTE3NyAtNDEgMjY3IC0xNDZxOTIgLTEwNiA5MiAtMjM2cTAgLTc2IC0yOSAtMTYxcS0yMSAtNjIgLTcxIC0xMTdxLTY2IC03MiAtMTQwIC0xMDhxLTczIC0zNiAtMjAzIC02MHEtODIgLTE1IC0xOTggLTExbC0xOTcgNHEtODQgMiAtMjk4IC0xMXEtMzMgLTMgLTI3MiAtMTF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMzM7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTAgLTEyNmwxNyA4NXE0IDEgNzcgMjBxNzYgMTkgMTE2IDM5cTI5IDM3IDQxIDEwMWwyNyAxMzlsNTYgMjY4bDEyIDY0cTggNDQgMTcgODQuNXQxNiA2N3QxMi41IDQ2LjV0OSAzMC41dDMuNSAxMS41bDI5IDE1N2wxNiA2M2wyMiAxMzVsOCA1MHYzOHEtNDEgMjIgLTE0NCAyOHEtMjggMiAtMzggNGwxOSAxMDNsMzE3IC0xNHEzOSAtMiA3MyAtMnE2NiAwIDIxNCA5cTMzIDIgNjggNC41dDM2IDIuNXEtMiAtMTkgLTYgLTM4IHEtNyAtMjkgLTEzIC01MXEtNTUgLTE5IC0xMDkgLTMxcS02NCAtMTYgLTEwMSAtMzFxLTEyIC0zMSAtMjQgLTg4cS05IC00NCAtMTMgLTgycS00NCAtMTk5IC02NiAtMzA2bC02MSAtMzExbC0zOCAtMTU4bC00MyAtMjM1bC0xMiAtNDVxLTIgLTcgMSAtMjdxNjQgLTE1IDExOSAtMjFxMzYgLTUgNjYgLTEwcS0xIC0yOSAtNyAtNThxLTcgLTMxIC05IC00MXEtMTggMCAtMjMgLTFxLTI0IC0yIC00MiAtMnEtOSAwIC0yOCAzcS0xOSA0IC0xNDUgMTcgbC0xOTggMnEtNDEgMSAtMTc0IC0xMXEtNzQgLTcgLTk4IC05eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDM0OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik04MSAxNDA3bDU0IC0yN3EyMCAtNSAyMTEgLTVoMTMwbDE5IDNsMTE1IDFsMjE1IC0xaDI5M2wzNCAtMnExNCAtMSAyOCA3dDIxIDE2bDcgOGw0MiAxcTE1IDAgMjggLTF2LTEwNC41dDEgLTEzMS41bDEgLTEwMGwtMSAtNThxMCAtMzIgLTQgLTUxcS0zOSAtMTUgLTY4IC0xOHEtMjUgNDMgLTU0IDEyOHEtOCAyNCAtMTUuNSA2Mi41dC0xMS41IDY1LjV0LTYgMjlxLTEzIDE1IC0yNyAxOXEtNyAyIC00Mi41IDJ0LTEwMy41IC0xdC0xMTEgLTEgcS0zNCAwIC02NyAtNXEtMTAgLTk3IC04IC0xMzZsMSAtMTUydi0zMzJsMyAtMzU5bC0xIC0xNDdxLTEgLTQ2IDExIC04NXE0OSAtMjUgODkgLTMycTIgMCAxOCAtNXQ0NCAtMTN0NDMgLTEycTMwIC04IDUwIC0xOHE1IC00NSA1IC01MHEwIC0xMCAtMyAtMjlxLTE0IC0xIC0zNCAtMXEtMTEwIDAgLTE4NyAxMHEtNzIgOCAtMjM4IDhxLTg4IDAgLTIzMyAtMTRxLTQ4IC00IC03MCAtNHEtMiAyMiAtMiAyNmwtMSAyNnY5cTIxIDMzIDc5IDQ5IHExMzkgMzggMTU5IDUwcTkgMjEgMTIgNTZxOCAxOTIgNiA0MzNsLTUgNDI4cS0xIDYyIC0wLjUgMTE4LjV0MC41IDEwMi41dC0yIDU3dC02IDE1cS02IDUgLTE0IDZxLTM4IDYgLTE0OCA2cS00MyAwIC0xMDAgLTEzLjV0LTczIC0yNC41cS0xMyAtOSAtMjIgLTMzdC0yMiAtNzV0LTI0IC04NHEtNiAtMTkgLTE5LjUgLTMydC0yMC41IC0xM3EtNDQgMjcgLTU2IDQ0djI5N3Y4NnpNMTc0NCAxMjhxMzMgMCA0MiAtMTguNXQtMTEgLTQ0LjUgbC0xMjYgLTE2MnEtMjAgLTI2IC00OSAtMjZ0LTQ5IDI2bC0xMjYgMTYycS0yMCAyNiAtMTEgNDQuNXQ0MiAxOC41aDgwdjEwMjRoLTgwcS0zMyAwIC00MiAxOC41dDExIDQ0LjVsMTI2IDE2MnEyMCAyNiA0OSAyNnQ0OSAtMjZsMTI2IC0xNjJxMjAgLTI2IDExIC00NC41dC00MiAtMTguNWgtODB2LTEwMjRoODB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMzU7IiBkPSJNODEgMTQwN2w1NCAtMjdxMjAgLTUgMjExIC01aDEzMGwxOSAzbDExNSAxbDQ0NiAtMWgzMThsMzQgLTJxMTQgLTEgMjggN3QyMSAxNmw3IDhsNDIgMXExNSAwIDI4IC0xdi0xMDQuNXQxIC0xMzEuNWwxIC0xMDBsLTEgLTU4cTAgLTMyIC00IC01MXEtMzkgLTE1IC02OCAtMThxLTI1IDQzIC01NCAxMjhxLTggMjQgLTE1LjUgNjIuNXQtMTEuNSA2NS41dC02IDI5cS0xMyAxNSAtMjcgMTlxLTcgMiAtNTguNSAydC0xMzguNSAtMXQtMTI4IC0xIHEtOTQgMCAtMTI3IC01cS0xMCAtOTcgLTggLTEzNmwxIC0xNTJ2NTJsMyAtMzU5bC0xIC0xNDdxLTEgLTQ2IDExIC04NXE0OSAtMjUgODkgLTMycTIgMCAxOCAtNXQ0NCAtMTN0NDMgLTEycTMwIC04IDUwIC0xOHE1IC00NSA1IC01MHEwIC0xMCAtMyAtMjlxLTE0IC0xIC0zNCAtMXEtMTEwIDAgLTE4NyAxMHEtNzIgOCAtMjM4IDhxLTgyIDAgLTIzMyAtMTNxLTQ1IC01IC03MCAtNXEtMiAyMiAtMiAyNmwtMSAyNnY5cTIxIDMzIDc5IDQ5IHExMzkgMzggMTU5IDUwcTkgMjEgMTIgNTZxNiAxMzcgNiA0MzNsLTUgNDRxMCAyNjUgLTIgMjc4cS0yIDExIC02IDE1cS02IDUgLTE0IDZxLTM4IDYgLTE0OCA2cS01MCAwIC0xNjguNSAtMTR0LTEzMi41IC0yNHEtMTMgLTkgLTIyIC0zM3QtMjIgLTc1dC0yNCAtODRxLTYgLTE5IC0xOS41IC0zMnQtMjAuNSAtMTNxLTQ0IDI3IC01NiA0NHYyOTd2ODZ6TTE1MDUgMTEzcTI2IC0yMCAyNiAtNDl0LTI2IC00OWwtMTYyIC0xMjYgcS0yNiAtMjAgLTQ0LjUgLTExdC0xOC41IDQydjgwaC0xMDI0di04MHEwIC0zMyAtMTguNSAtNDJ0LTQ0LjUgMTFsLTE2MiAxMjZxLTI2IDIwIC0yNiA0OXQyNiA0OWwxNjIgMTI2cTI2IDIwIDQ0LjUgMTF0MTguNSAtNDJ2LTgwaDEwMjR2ODBxMCAzMyAxOC41IDQydDQ0LjUgLTExeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDM2OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNzkyIDE5MnYtMTI4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTY2NHEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDE2NjRxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNDA4IDU3NnYtMTI4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTI4MHEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDEyODBxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNjY0IDk2MHYtMTI4cTAgLTI2IC0xOSAtNDUgdC00NSAtMTloLTE1MzZxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxNTM2cTI2IDAgNDUgLTE5dDE5IC00NXpNMTI4MCAxMzQ0di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xMTUycS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMTE1MnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMzc7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE3OTIgMTkydi0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xNjY0cS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMTY2NHEyNiAwIDQ1IC0xOXQxOSAtNDV6TTE0MDggNTc2di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC04OTZxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWg4OTZxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNjY0IDk2MHYtMTI4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOSBoLTE0MDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxNDA4cTI2IDAgNDUgLTE5dDE5IC00NXpNMTI4MCAxMzQ0di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC02NDBxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWg2NDBxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDM4OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNzkyIDE5MnYtMTI4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTY2NHEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDE2NjRxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNzkyIDU3NnYtMTI4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTI4MHEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDEyODBxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNzkyIDk2MHYtMTI4cTAgLTI2IC0xOSAtNDUgdC00NSAtMTloLTE1MzZxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxNTM2cTI2IDAgNDUgLTE5dDE5IC00NXpNMTc5MiAxMzQ0di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xMTUycS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMTE1MnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwMzk7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE3OTIgMTkydi0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xNjY0cS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMTY2NHEyNiAwIDQ1IC0xOXQxOSAtNDV6TTE3OTIgNTc2di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xNjY0cS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMTY2NHEyNiAwIDQ1IC0xOXQxOSAtNDV6TTE3OTIgOTYwdi0xMjhxMCAtMjYgLTE5IC00NSB0LTQ1IC0xOWgtMTY2NHEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDE2NjRxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNzkyIDEzNDR2LTEyOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE2NjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxNjY0cTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAzYTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMjU2IDIyNHYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTkycS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTkycTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMjU2IDYwOHYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTkycS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTkycTEzIDAgMjIuNSAtOS41IHQ5LjUgLTIyLjV6TTI1NiA5OTJ2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTE5MnEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDE5MnExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTE3OTIgMjI0di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xMzQ0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTM0NCBxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0yNTYgMTM3NnYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTkycS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTkycTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTc5MiA2MDh2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTEzNDRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXYxOTJxMCAxMyA5LjUgMjIuNSB0MjIuNSA5LjVoMTM0NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTE3OTIgOTkydi0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xMzQ0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTM0NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTE3OTIgMTM3NnYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTM0NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MiBxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxMzQ0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjAzYjsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMzg0IDk5MnYtNTc2cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNXEtMTQgMCAtMjMgOWwtMjg4IDI4OHEtOSA5IC05IDIzdDkgMjNsMjg4IDI4OHE5IDkgMjMgOXExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTE3OTIgMjI0di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xNzI4cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTcyOHExMyAwIDIyLjUgLTkuNSB0OS41IC0yMi41ek0xNzkyIDYwOHYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTA4OHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDEwODhxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xNzkyIDk5MnYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTA4OHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDEwODggcTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTc5MiAxMzc2di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xNzI4cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTcyOHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwM2M7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTM1MiA3MDRxMCAtMTQgLTkgLTIzbC0yODggLTI4OHEtOSAtOSAtMjMgLTlxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY1NzZxMCAxMyA5LjUgMjIuNXQyMi41IDkuNXExNCAwIDIzIC05bDI4OCAtMjg4cTkgLTkgOSAtMjN6TTE3OTIgMjI0di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xNzI4cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTcyOHExMyAwIDIyLjUgLTkuNSB0OS41IC0yMi41ek0xNzkyIDYwOHYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTA4OHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDEwODhxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xNzkyIDk5MnYtMTkycTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtMTA4OHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDEwODggcTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTc5MiAxMzc2di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xNzI4cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTcyOHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwM2Q7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE3OTIgMTE4NHYtMTA4OHEwIC00MiAtMzkgLTU5cS0xMyAtNSAtMjUgLTVxLTI3IDAgLTQ1IDE5bC00MDMgNDAzdi0xNjZxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTcwNHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2NzA0cTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg3MDRxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV2LTE2NWw0MDMgNDAycTE4IDE5IDQ1IDE5cTEyIDAgMjUgLTUgcTM5IC0xNyAzOSAtNTl6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwM2U7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTY0MCA5NjBxMCAtODAgLTU2IC0xMzZ0LTEzNiAtNTZ0LTEzNiA1NnQtNTYgMTM2dDU2IDEzNnQxMzYgNTZ0MTM2IC01NnQ1NiAtMTM2ek0xNjY0IDU3NnYtNDQ4aC0xNDA4djE5MmwzMjAgMzIwbDE2MCAtMTYwbDUxMiA1MTJ6TTE3NjAgMTI4MGgtMTYwMHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTEyMTZxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWgxNjAwcTEzIDAgMjIuNSA5LjV0OS41IDIyLjV2MTIxNiBxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41ek0xOTIwIDEyNDh2LTEyMTZxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTE2MDBxLTY2IDAgLTExMyA0N3QtNDcgMTEzdjEyMTZxMCA2NiA0NyAxMTN0MTEzIDQ3aDE2MDBxNjYgMCAxMTMgLTQ3dDQ3IC0xMTN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNDA7IiBkPSJNMzYzIDBsOTEgOTFsLTIzNSAyMzVsLTkxIC05MXYtMTA3aDEyOHYtMTI4aDEwN3pNODg2IDkyOHEwIDIyIC0yMiAyMnEtMTAgMCAtMTcgLTdsLTU0MiAtNTQycS03IC03IC03IC0xN3EwIC0yMiAyMiAtMjJxMTAgMCAxNyA3bDU0MiA1NDJxNyA3IDcgMTd6TTgzMiAxMTIwbDQxNiAtNDE2bC04MzIgLTgzMmgtNDE2djQxNnpNMTUxNSAxMDI0cTAgLTUzIC0zNyAtOTBsLTE2NiAtMTY2bC00MTYgNDE2bDE2NiAxNjVxMzYgMzggOTAgMzggcTUzIDAgOTEgLTM4bDIzNSAtMjM0cTM3IC0zOSAzNyAtOTF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNDE7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTc2OCA4OTZxMCAxMDYgLTc1IDE4MXQtMTgxIDc1dC0xODEgLTc1dC03NSAtMTgxdDc1IC0xODF0MTgxIC03NXQxODEgNzV0NzUgMTgxek0xMDI0IDg5NnEwIC0xMDkgLTMzIC0xNzlsLTM2NCAtNzc0cS0xNiAtMzMgLTQ3LjUgLTUydC02Ny41IC0xOXQtNjcuNSAxOXQtNDYuNSA1MmwtMzY1IDc3NHEtMzMgNzAgLTMzIDE3OXEwIDIxMiAxNTAgMzYydDM2MiAxNTB0MzYyIC0xNTB0MTUwIC0zNjJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNDI7IiBkPSJNNzY4IDk2djEwODhxLTE0OCAwIC0yNzMgLTczdC0xOTggLTE5OHQtNzMgLTI3M3Q3MyAtMjczdDE5OCAtMTk4dDI3MyAtNzN6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDQzOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik01MTIgMzg0cTAgMzYgLTIwIDY5cS0xIDEgLTE1LjUgMjIuNXQtMjUuNSAzOHQtMjUgNDR0LTIxIDUwLjVxLTQgMTYgLTIxIDE2dC0yMSAtMTZxLTcgLTIzIC0yMSAtNTAuNXQtMjUgLTQ0dC0yNS41IC0zOHQtMTUuNSAtMjIuNXEtMjAgLTMzIC0yMCAtNjlxMCAtNTMgMzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTEwMjQgNTEycTAgLTIxMiAtMTUwIC0zNjJ0LTM2MiAtMTUwdC0zNjIgMTUwdC0xNTAgMzYyIHEwIDE0NSA4MSAyNzVxNiA5IDYyLjUgOTAuNXQxMDEgMTUxdDk5LjUgMTc4dDgzIDIwMS41cTkgMzAgMzQgNDd0NTEgMTd0NTEuNSAtMTd0MzMuNSAtNDdxMjggLTkzIDgzIC0yMDEuNXQ5OS41IC0xNzh0MTAxIC0xNTF0NjIuNSAtOTAuNXE4MSAtMTI3IDgxIC0yNzV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNDQ7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTg4OCAzNTJsMTE2IDExNmwtMTUyIDE1MmwtMTE2IC0xMTZ2LTU2aDk2di05Nmg1NnpNMTMyOCAxMDcycS0xNiAxNiAtMzMgLTFsLTM1MCAtMzUwcS0xNyAtMTcgLTEgLTMzdDMzIDFsMzUwIDM1MHExNyAxNyAxIDMzek0xNDA4IDQ3OHYtMTkwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC04MzJxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djgzMnEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoODMyIHE2MyAwIDExNyAtMjVxMTUgLTcgMTggLTIzcTMgLTE3IC05IC0yOWwtNDkgLTQ5cS0xNCAtMTQgLTMyIC04cS0yMyA2IC00NSA2aC04MzJxLTY2IDAgLTExMyAtNDd0LTQ3IC0xMTN2LTgzMnEwIC02NiA0NyAtMTEzdDExMyAtNDdoODMycTY2IDAgMTEzIDQ3dDQ3IDExM3YxMjZxMCAxMyA5IDIybDY0IDY0cTE1IDE1IDM1IDd0MjAgLTI5ek0xMzEyIDEyMTZsMjg4IC0yODhsLTY3MiAtNjcyaC0yODh2Mjg4ek0xNzU2IDEwODRsLTkyIC05MiBsLTI4OCAyODhsOTIgOTJxMjggMjggNjggMjh0NjggLTI4bDE1MiAtMTUycTI4IC0yOCAyOCAtNjh0LTI4IC02OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA0NTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTQwOCA1NDd2LTI1OXEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtODMycS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY4MzJxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDI1NXYwcTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXEwIC0yNyAtMjYgLTMycS03NyAtMjYgLTEzMyAtNjBxLTEwIC00IC0xNiAtNGgtMTEycS02NiAwIC0xMTMgLTQ3dC00NyAtMTEzdi04MzJxMCAtNjYgNDcgLTExM3QxMTMgLTQ3aDgzMiBxNjYgMCAxMTMgNDd0NDcgMTEzdjIxNHEwIDE5IDE4IDI5cTI4IDEzIDU0IDM3cTE2IDE2IDM1IDhxMjEgLTkgMjEgLTI5ek0xNjQ1IDEwNDNsLTM4NCAtMzg0cS0xOCAtMTkgLTQ1IC0xOXEtMTIgMCAtMjUgNXEtMzkgMTcgLTM5IDU5djE5MmgtMTYwcS0zMjMgMCAtNDM4IC0xMzFxLTExOSAtMTM3IC03NCAtNDczcTMgLTIzIC0yMCAtMzRxLTggLTIgLTEyIC0ycS0xNiAwIC0yNiAxM3EtMTAgMTQgLTIxIDMxdC0zOS41IDY4LjV0LTQ5LjUgOTkuNSB0LTM4LjUgMTE0dC0xNy41IDEyMnEwIDQ5IDMuNSA5MXQxNCA5MHQyOCA4OHQ0NyA4MS41dDY4LjUgNzR0OTQuNSA2MS41dDEyNC41IDQ4LjV0MTU5LjUgMzAuNXQxOTYuNSAxMWgxNjB2MTkycTAgNDIgMzkgNTlxMTMgNSAyNSA1cTI2IDAgNDUgLTE5bDM4NCAtMzg0cTE5IC0xOSAxOSAtNDV0LTE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA0NjsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTQwOCA2MDZ2LTMxOHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtODMycS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY4MzJxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDgzMnE2MyAwIDExNyAtMjVxMTUgLTcgMTggLTIzcTMgLTE3IC05IC0yOWwtNDkgLTQ5cS0xMCAtMTAgLTIzIC0xMHEtMyAwIC05IDJxLTIzIDYgLTQ1IDZoLTgzMnEtNjYgMCAtMTEzIC00N3QtNDcgLTExM3YtODMyIHEwIC02NiA0NyAtMTEzdDExMyAtNDdoODMycTY2IDAgMTEzIDQ3dDQ3IDExM3YyNTRxMCAxMyA5IDIybDY0IDY0cTEwIDEwIDIzIDEwcTYgMCAxMiAtM3EyMCAtOCAyMCAtMjl6TTE2MzkgMTA5NWwtODE0IC04MTRxLTI0IC0yNCAtNTcgLTI0dC01NyAyNGwtNDMwIDQzMHEtMjQgMjQgLTI0IDU3dDI0IDU3bDExMCAxMTBxMjQgMjQgNTcgMjR0NTcgLTI0bDI2MyAtMjYzbDY0NyA2NDdxMjQgMjQgNTcgMjR0NTcgLTI0bDExMCAtMTEwIHEyNCAtMjQgMjQgLTU3dC0yNCAtNTd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNDc7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE3OTIgNjQwcTAgLTI2IC0xOSAtNDVsLTI1NiAtMjU2cS0xOSAtMTkgLTQ1IC0xOXQtNDUgMTl0LTE5IDQ1djEyOGgtMzg0di0zODRoMTI4cTI2IDAgNDUgLTE5dDE5IC00NXQtMTkgLTQ1bC0yNTYgLTI1NnEtMTkgLTE5IC00NSAtMTl0LTQ1IDE5bC0yNTYgMjU2cS0xOSAxOSAtMTkgNDV0MTkgNDV0NDUgMTloMTI4djM4NGgtMzg0di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5dC00NSAxOWwtMjU2IDI1NnEtMTkgMTkgLTE5IDQ1IHQxOSA0NWwyNTYgMjU2cTE5IDE5IDQ1IDE5dDQ1IC0xOXQxOSAtNDV2LTEyOGgzODR2Mzg0aC0xMjhxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NWwyNTYgMjU2cTE5IDE5IDQ1IDE5dDQ1IC0xOWwyNTYgLTI1NnExOSAtMTkgMTkgLTQ1dC0xOSAtNDV0LTQ1IC0xOWgtMTI4di0zODRoMzg0djEyOHEwIDI2IDE5IDQ1dDQ1IDE5dDQ1IC0xOWwyNTYgLTI1NnExOSAtMTkgMTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDQ4OyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik05NzkgMTM5NXExOSAxOSAzMiAxM3QxMyAtMzJ2LTE0NzJxMCAtMjYgLTEzIC0zMnQtMzIgMTNsLTcxMCA3MTBxLTkgOSAtMTMgMTl2LTY3OHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTEyOHEtMjYgMCAtNDUgMTl0LTE5IDQ1djE0MDhxMCAyNiAxOSA0NXQ0NSAxOWgxMjhxMjYgMCA0NSAtMTl0MTkgLTQ1di02NzhxNCAxMSAxMyAxOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA0OTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTc0NyAxMzk1cTE5IDE5IDMyIDEzdDEzIC0zMnYtMTQ3MnEwIC0yNiAtMTMgLTMydC0zMiAxM2wtNzEwIDcxMHEtOSA5IC0xMyAxOXYtNzEwcTAgLTI2IC0xMyAtMzJ0LTMyIDEzbC03MTAgNzEwcS05IDkgLTEzIDE5di02NzhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xMjhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxNDA4cTAgMjYgMTkgNDV0NDUgMTloMTI4cTI2IDAgNDUgLTE5dDE5IC00NXYtNjc4cTQgMTEgMTMgMTlsNzEwIDcxMCBxMTkgMTkgMzIgMTN0MTMgLTMydi03MTBxNCAxMSAxMyAxOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA0YTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTYxOSAxMzk1cTE5IDE5IDMyIDEzdDEzIC0zMnYtMTQ3MnEwIC0yNiAtMTMgLTMydC0zMiAxM2wtNzEwIDcxMHEtOCA5IC0xMyAxOXYtNzEwcTAgLTI2IC0xMyAtMzJ0LTMyIDEzbC03MTAgNzEwcS0xOSAxOSAtMTkgNDV0MTkgNDVsNzEwIDcxMHExOSAxOSAzMiAxM3QxMyAtMzJ2LTcxMHE1IDExIDEzIDE5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDRiOyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xMzg0IDYwOWwtMTMyOCAtNzM4cS0yMyAtMTMgLTM5LjUgLTN0LTE2LjUgMzZ2MTQ3MnEwIDI2IDE2LjUgMzZ0MzkuNSAtM2wxMzI4IC03MzhxMjMgLTEzIDIzIC0zMXQtMjMgLTMxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDRjOyIgZD0iTTE1MzYgMTM0NHYtMTQwOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTUxMnEtMjYgMCAtNDUgMTl0LTE5IDQ1djE0MDhxMCAyNiAxOSA0NXQ0NSAxOWg1MTJxMjYgMCA0NSAtMTl0MTkgLTQ1ek02NDAgMTM0NHYtMTQwOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTUxMnEtMjYgMCAtNDUgMTl0LTE5IDQ1djE0MDhxMCAyNiAxOSA0NXQ0NSAxOWg1MTJxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDRkOyIgZD0iTTE1MzYgMTM0NHYtMTQwOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE0MDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxNDA4cTAgMjYgMTkgNDV0NDUgMTloMTQwOHEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNGU7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTQ1IC0xMTVxLTE5IC0xOSAtMzIgLTEzdC0xMyAzMnYxNDcycTAgMjYgMTMgMzJ0MzIgLTEzbDcxMCAtNzEwcTggLTggMTMgLTE5djcxMHEwIDI2IDEzIDMydDMyIC0xM2w3MTAgLTcxMHExOSAtMTkgMTkgLTQ1dC0xOSAtNDVsLTcxMCAtNzEwcS0xOSAtMTkgLTMyIC0xM3QtMTMgMzJ2NzEwcS01IC0xMCAtMTMgLTE5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDUwOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik00NSAtMTE1cS0xOSAtMTkgLTMyIC0xM3QtMTMgMzJ2MTQ3MnEwIDI2IDEzIDMydDMyIC0xM2w3MTAgLTcxMHE4IC04IDEzIC0xOXY3MTBxMCAyNiAxMyAzMnQzMiAtMTNsNzEwIC03MTBxOCAtOCAxMyAtMTl2Njc4cTAgMjYgMTkgNDV0NDUgMTloMTI4cTI2IDAgNDUgLTE5dDE5IC00NXYtMTQwOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTEyOHEtMjYgMCAtNDUgMTl0LTE5IDQ1djY3OHEtNSAtMTAgLTEzIC0xOWwtNzEwIC03MTAgcS0xOSAtMTkgLTMyIC0xM3QtMTMgMzJ2NzEwcS01IC0xMCAtMTMgLTE5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDUxOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik00NSAtMTE1cS0xOSAtMTkgLTMyIC0xM3QtMTMgMzJ2MTQ3MnEwIDI2IDEzIDMydDMyIC0xM2w3MTAgLTcxMHE4IC04IDEzIC0xOXY2NzhxMCAyNiAxOSA0NXQ0NSAxOWgxMjhxMjYgMCA0NSAtMTl0MTkgLTQ1di0xNDA4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTI4cS0yNiAwIC00NSAxOXQtMTkgNDV2Njc4cS01IC0xMCAtMTMgLTE5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDUyOyIgaG9yaXotYWR2LXg9IjE1MzgiIGQ9Ik0xNCA1NTdsNzEwIDcxMHExOSAxOSA0NSAxOXQ0NSAtMTlsNzEwIC03MTBxMTkgLTE5IDEzIC0zMnQtMzIgLTEzaC0xNDcycS0yNiAwIC0zMiAxM3QxMyAzMnpNMTQ3MyAwaC0xNDA4cS0yNiAwIC00NSAxOXQtMTkgNDV2MjU2cTAgMjYgMTkgNDV0NDUgMTloMTQwOHEyNiAwIDQ1IC0xOXQxOSAtNDV2LTI1NnEwIC0yNiAtMTkgLTQ1dC00NSAtMTl6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNTM7IiBob3Jpei1hZHYteD0iMTE1MiIgZD0iTTc0MiAtMzdsLTY1MiA2NTFxLTM3IDM3IC0zNyA5MC41dDM3IDkwLjVsNjUyIDY1MXEzNyAzNyA5MC41IDM3dDkwLjUgLTM3bDc1IC03NXEzNyAtMzcgMzcgLTkwLjV0LTM3IC05MC41bC00ODYgLTQ4Nmw0ODYgLTQ4NXEzNyAtMzggMzcgLTkxdC0zNyAtOTBsLTc1IC03NXEtMzcgLTM3IC05MC41IC0zN3QtOTAuNSAzN3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA1NDsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNMTA5OSA3MDRxMCAtNTIgLTM3IC05MWwtNjUyIC02NTFxLTM3IC0zNyAtOTAgLTM3dC05MCAzN2wtNzYgNzVxLTM3IDM5IC0zNyA5MXEwIDUzIDM3IDkwbDQ4NiA0ODZsLTQ4NiA0ODVxLTM3IDM5IC0zNyA5MXEwIDUzIDM3IDkwbDc2IDc1cTM2IDM4IDkwIDM4dDkwIC0zOGw2NTIgLTY1MXEzNyAtMzcgMzcgLTkweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDU1OyIgZD0iTTEyMTYgNTc2djEyOHEwIDI2IC0xOSA0NXQtNDUgMTloLTI1NnYyNTZxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0yNTZoLTI1NnEtMjYgMCAtNDUgLTE5dC0xOSAtNDV2LTEyOHEwIC0yNiAxOSAtNDV0NDUgLTE5aDI1NnYtMjU2cTAgLTI2IDE5IC00NXQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV2MjU2aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1ek0xNTM2IDY0MHEwIC0yMDkgLTEwMyAtMzg1LjUgdC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDN0Mjc5LjUgLTI3OS41dDEwMyAtMzg1LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNTY7IiBkPSJNMTIxNiA1NzZ2MTI4cTAgMjYgLTE5IDQ1dC00NSAxOWgtNzY4cS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMTI4cTAgLTI2IDE5IC00NXQ0NSAtMTloNzY4cTI2IDAgNDUgMTl0MTkgNDV6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNSB0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA1NzsiIGQ9Ik0xMTQ5IDQxNHEwIDI2IC0xOSA0NWwtMTgxIDE4MWwxODEgMTgxcTE5IDE5IDE5IDQ1cTAgMjcgLTE5IDQ2bC05MCA5MHEtMTkgMTkgLTQ2IDE5cS0yNiAwIC00NSAtMTlsLTE4MSAtMTgxbC0xODEgMTgxcS0xOSAxOSAtNDUgMTlxLTI3IDAgLTQ2IC0xOWwtOTAgLTkwcS0xOSAtMTkgLTE5IC00NnEwIC0yNiAxOSAtNDVsMTgxIC0xODFsLTE4MSAtMTgxcS0xOSAtMTkgLTE5IC00NXEwIC0yNyAxOSAtNDZsOTAgLTkwcTE5IC0xOSA0NiAtMTkgcTI2IDAgNDUgMTlsMTgxIDE4MWwxODEgLTE4MXExOSAtMTkgNDUgLTE5cTI3IDAgNDYgMTlsOTAgOTBxMTkgMTkgMTkgNDZ6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDU4OyIgZD0iTTEyODQgODAycTAgMjggLTE4IDQ2bC05MSA5MHEtMTkgMTkgLTQ1IDE5dC00NSAtMTlsLTQwOCAtNDA3bC0yMjYgMjI2cS0xOSAxOSAtNDUgMTl0LTQ1IC0xOWwtOTEgLTkwcS0xOCAtMTggLTE4IC00NnEwIC0yNyAxOCAtNDVsMzYyIC0zNjJxMTkgLTE5IDQ1IC0xOXEyNyAwIDQ2IDE5bDU0MyA1NDNxMTggMTggMTggNDV6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDMgdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA1OTsiIGQ9Ik04OTYgMTYwdjE5MnEwIDE0IC05IDIzdC0yMyA5aC0xOTJxLTE0IDAgLTIzIC05dC05IC0yM3YtMTkycTAgLTE0IDkgLTIzdDIzIC05aDE5MnExNCAwIDIzIDl0OSAyM3pNMTE1MiA4MzJxMCA4OCAtNTUuNSAxNjN0LTEzOC41IDExNnQtMTcwIDQxcS0yNDMgMCAtMzcxIC0yMTNxLTE1IC0yNCA4IC00MmwxMzIgLTEwMHE3IC02IDE5IC02cTE2IDAgMjUgMTJxNTMgNjggODYgOTJxMzQgMjQgODYgMjRxNDggMCA4NS41IC0yNnQzNy41IC01OSBxMCAtMzggLTIwIC02MXQtNjggLTQ1cS02MyAtMjggLTExNS41IC04Ni41dC01Mi41IC0xMjUuNXYtMzZxMCAtMTQgOSAtMjN0MjMgLTloMTkycTE0IDAgMjMgOXQ5IDIzcTAgMTkgMjEuNSA0OS41dDU0LjUgNDkuNXEzMiAxOCA0OSAyOC41dDQ2IDM1dDQ0LjUgNDh0MjggNjAuNXQxMi41IDgxek0xNTM2IDY0MHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNSB0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDN0Mjc5LjUgLTI3OS41dDEwMyAtMzg1LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNWE7IiBkPSJNMTAyNCAxNjB2MTYwcTAgMTQgLTkgMjN0LTIzIDloLTk2djUxMnEwIDE0IC05IDIzdC0yMyA5aC0zMjBxLTE0IDAgLTIzIC05dC05IC0yM3YtMTYwcTAgLTE0IDkgLTIzdDIzIC05aDk2di0zMjBoLTk2cS0xNCAwIC0yMyAtOXQtOSAtMjN2LTE2MHEwIC0xNCA5IC0yM3QyMyAtOWg0NDhxMTQgMCAyMyA5dDkgMjN6TTg5NiAxMDU2djE2MHEwIDE0IC05IDIzdC0yMyA5aC0xOTJxLTE0IDAgLTIzIC05dC05IC0yM3YtMTYwcTAgLTE0IDkgLTIzIHQyMyAtOWgxOTJxMTQgMCAyMyA5dDkgMjN6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDViOyIgZD0iTTExOTcgNTEyaC0xMDlxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxMDlxLTMyIDEwOCAtMTEyLjUgMTg4LjV0LTE4OC41IDExMi41di0xMDlxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xMjhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMDlxLTEwOCAtMzIgLTE4OC41IC0xMTIuNXQtMTEyLjUgLTE4OC41aDEwOXEyNiAwIDQ1IC0xOXQxOSAtNDV2LTEyOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTEwOSBxMzIgLTEwOCAxMTIuNSAtMTg4LjV0MTg4LjUgLTExMi41djEwOXEwIDI2IDE5IDQ1dDQ1IDE5aDEyOHEyNiAwIDQ1IC0xOXQxOSAtNDV2LTEwOXExMDggMzIgMTg4LjUgMTEyLjV0MTEyLjUgMTg4LjV6TTE1MzYgNzA0di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xNDNxLTM3IC0xNjEgLTE1NC41IC0yNzguNXQtMjc4LjUgLTE1NC41di0xNDNxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xMjhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxNDMgcS0xNjEgMzcgLTI3OC41IDE1NC41dC0xNTQuNSAyNzguNWgtMTQzcS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMTQzcTM3IDE2MSAxNTQuNSAyNzguNXQyNzguNSAxNTQuNXYxNDNxMCAyNiAxOSA0NXQ0NSAxOWgxMjhxMjYgMCA0NSAtMTl0MTkgLTQ1di0xNDNxMTYxIC0zNyAyNzguNSAtMTU0LjV0MTU0LjUgLTI3OC41aDE0M3EyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNWM7IiBkPSJNMTA5NyA0NTdsLTE0NiAtMTQ2cS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTEzNyAxMzdsLTEzNyAtMTM3cS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTE0NiAxNDZxLTEwIDEwIC0xMCAyM3QxMCAyM2wxMzcgMTM3bC0xMzcgMTM3cS0xMCAxMCAtMTAgMjN0MTAgMjNsMTQ2IDE0NnExMCAxMCAyMyAxMHQyMyAtMTBsMTM3IC0xMzdsMTM3IDEzN3ExMCAxMCAyMyAxMHQyMyAtMTBsMTQ2IC0xNDZxMTAgLTEwIDEwIC0yM3QtMTAgLTIzIGwtMTM3IC0xMzdsMTM3IC0xMzdxMTAgLTEwIDEwIC0yM3QtMTAgLTIzek0xMzEyIDY0MHEwIDE0OCAtNzMgMjczdC0xOTggMTk4dC0yNzMgNzN0LTI3MyAtNzN0LTE5OCAtMTk4dC03MyAtMjczdDczIC0yNzN0MTk4IC0xOTh0MjczIC03M3QyNzMgNzN0MTk4IDE5OHQ3MyAyNzN6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjUgdDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA1ZDsiIGQ9Ik0xMTcxIDcyM2wtNDIyIC00MjJxLTE5IC0xOSAtNDUgLTE5dC00NSAxOWwtMjk0IDI5NHEtMTkgMTkgLTE5IDQ1dDE5IDQ1bDEwMiAxMDJxMTkgMTkgNDUgMTl0NDUgLTE5bDE0NyAtMTQ3bDI3NSAyNzVxMTkgMTkgNDUgMTl0NDUgLTE5bDEwMiAtMTAycTE5IC0xOSAxOSAtNDV0LTE5IC00NXpNMTMxMiA2NDBxMCAxNDggLTczIDI3M3QtMTk4IDE5OHQtMjczIDczdC0yNzMgLTczdC0xOTggLTE5OHQtNzMgLTI3M3Q3MyAtMjczdDE5OCAtMTk4IHQyNzMgLTczdDI3MyA3M3QxOTggMTk4dDczIDI3M3pNMTUzNiA2NDBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDN0Mjc5LjUgLTI3OS41dDEwMyAtMzg1LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNWU7IiBkPSJNMTMxMiA2NDNxMCAxNjEgLTg3IDI5NWwtNzU0IC03NTNxMTM3IC04OSAyOTcgLTg5cTExMSAwIDIxMS41IDQzLjV0MTczLjUgMTE2LjV0MTE2IDE3NC41dDQzIDIxMi41ek0zMTMgMzQ0bDc1NSA3NTRxLTEzNSA5MSAtMzAwIDkxcS0xNDggMCAtMjczIC03M3QtMTk4IC0xOTl0LTczIC0yNzRxMCAtMTYyIDg5IC0yOTl6TTE1MzYgNjQzcTAgLTE1NyAtNjEgLTMwMHQtMTYzLjUgLTI0NnQtMjQ1IC0xNjR0LTI5OC41IC02MXQtMjk4LjUgNjEgdC0yNDUgMTY0dC0xNjMuNSAyNDZ0LTYxIDMwMHQ2MSAyOTkuNXQxNjMuNSAyNDUuNXQyNDUgMTY0dDI5OC41IDYxdDI5OC41IC02MXQyNDUgLTE2NHQxNjMuNSAtMjQ1LjV0NjEgLTI5OS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDYwOyIgZD0iTTE1MzYgNjQwdi0xMjhxMCAtNTMgLTMyLjUgLTkwLjV0LTg0LjUgLTM3LjVoLTcwNGwyOTMgLTI5NHEzOCAtMzYgMzggLTkwdC0zOCAtOTBsLTc1IC03NnEtMzcgLTM3IC05MCAtMzdxLTUyIDAgLTkxIDM3bC02NTEgNjUycS0zNyAzNyAtMzcgOTBxMCA1MiAzNyA5MWw2NTEgNjUwcTM4IDM4IDkxIDM4cTUyIDAgOTAgLTM4bDc1IC03NHEzOCAtMzggMzggLTkxdC0zOCAtOTFsLTI5MyAtMjkzaDcwNHE1MiAwIDg0LjUgLTM3LjUgdDMyLjUgLTkwLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNjE7IiBkPSJNMTQ3MiA1NzZxMCAtNTQgLTM3IC05MWwtNjUxIC02NTFxLTM5IC0zNyAtOTEgLTM3cS01MSAwIC05MCAzN2wtNzUgNzVxLTM4IDM4IC0zOCA5MXQzOCA5MWwyOTMgMjkzaC03MDRxLTUyIDAgLTg0LjUgMzcuNXQtMzIuNSA5MC41djEyOHEwIDUzIDMyLjUgOTAuNXQ4NC41IDM3LjVoNzA0bC0yOTMgMjk0cS0zOCAzNiAtMzggOTB0MzggOTBsNzUgNzVxMzggMzggOTAgMzhxNTMgMCA5MSAtMzhsNjUxIC02NTFxMzcgLTM1IDM3IC05MHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA2MjsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTYxMSA1NjVxMCAtNTEgLTM3IC05MGwtNzUgLTc1cS0zOCAtMzggLTkxIC0zOHEtNTQgMCAtOTAgMzhsLTI5NCAyOTN2LTcwNHEwIC01MiAtMzcuNSAtODQuNXQtOTAuNSAtMzIuNWgtMTI4cS01MyAwIC05MC41IDMyLjV0LTM3LjUgODQuNXY3MDRsLTI5NCAtMjkzcS0zNiAtMzggLTkwIC0zOHQtOTAgMzhsLTc1IDc1cS0zOCAzOCAtMzggOTBxMCA1MyAzOCA5MWw2NTEgNjUxcTM1IDM3IDkwIDM3cTU0IDAgOTEgLTM3bDY1MSAtNjUxIHEzNyAtMzkgMzcgLTkxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDYzOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNjExIDcwNHEwIC01MyAtMzcgLTkwbC02NTEgLTY1MnEtMzkgLTM3IC05MSAtMzdxLTUzIDAgLTkwIDM3bC02NTEgNjUycS0zOCAzNiAtMzggOTBxMCA1MyAzOCA5MWw3NCA3NXEzOSAzNyA5MSAzN3E1MyAwIDkwIC0zN2wyOTQgLTI5NHY3MDRxMCA1MiAzOCA5MHQ5MCAzOGgxMjhxNTIgMCA5MCAtMzh0MzggLTkwdi03MDRsMjk0IDI5NHEzNyAzNyA5MCAzN3E1MiAwIDkxIC0zN2w3NSAtNzVxMzcgLTM5IDM3IC05MXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA2NDsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTc5MiA4OTZxMCAtMjYgLTE5IC00NWwtNTEyIC01MTJxLTE5IC0xOSAtNDUgLTE5dC00NSAxOXQtMTkgNDV2MjU2aC0yMjRxLTk4IDAgLTE3NS41IC02dC0xNTQgLTIxLjV0LTEzMyAtNDIuNXQtMTA1LjUgLTY5LjV0LTgwIC0xMDF0LTQ4LjUgLTEzOC41dC0xNy41IC0xODFxMCAtNTUgNSAtMTIzcTAgLTYgMi41IC0yMy41dDIuNSAtMjYuNXEwIC0xNSAtOC41IC0yNXQtMjMuNSAtMTBxLTE2IDAgLTI4IDE3cS03IDkgLTEzIDIyIHQtMTMuNSAzMHQtMTAuNSAyNHEtMTI3IDI4NSAtMTI3IDQ1MXEwIDE5OSA1MyAzMzNxMTYyIDQwMyA4NzUgNDAzaDIyNHYyNTZxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTlsNTEyIC01MTJxMTkgLTE5IDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA2NTsiIGQ9Ik03NTUgNDgwcTAgLTEzIC0xMCAtMjNsLTMzMiAtMzMybDE0NCAtMTQ0cTE5IC0xOSAxOSAtNDV0LTE5IC00NXQtNDUgLTE5aC00NDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXY0NDhxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTlsMTQ0IC0xNDRsMzMyIDMzMnExMCAxMCAyMyAxMHQyMyAtMTBsMTE0IC0xMTRxMTAgLTEwIDEwIC0yM3pNMTUzNiAxMzQ0di00NDhxMCAtMjYgLTE5IC00NXQtNDUgLTE5dC00NSAxOWwtMTQ0IDE0NGwtMzMyIC0zMzIgcS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTExNCAxMTRxLTEwIDEwIC0xMCAyM3QxMCAyM2wzMzIgMzMybC0xNDQgMTQ0cS0xOSAxOSAtMTkgNDV0MTkgNDV0NDUgMTloNDQ4cTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA2NjsiIGQ9Ik03NjggNTc2di00NDhxMCAtMjYgLTE5IC00NXQtNDUgLTE5dC00NSAxOWwtMTQ0IDE0NGwtMzMyIC0zMzJxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtMTE0IDExNHEtMTAgMTAgLTEwIDIzdDEwIDIzbDMzMiAzMzJsLTE0NCAxNDRxLTE5IDE5IC0xOSA0NXQxOSA0NXQ0NSAxOWg0NDhxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNTIzIDEyNDhxMCAtMTMgLTEwIC0yM2wtMzMyIC0zMzJsMTQ0IC0xNDRxMTkgLTE5IDE5IC00NXQtMTkgLTQ1IHQtNDUgLTE5aC00NDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXY0NDhxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTlsMTQ0IC0xNDRsMzMyIDMzMnExMCAxMCAyMyAxMHQyMyAtMTBsMTE0IC0xMTRxMTAgLTEwIDEwIC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA2NzsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNMTQwOCA4MDB2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTQxNnYtNDE2cTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTkycS00MCAwIC02OCAyOHQtMjggNjh2NDE2aC00MTZxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOGg0MTZ2NDE2cTAgNDAgMjggNjh0NjggMjhoMTkycTQwIDAgNjggLTI4dDI4IC02OHYtNDE2aDQxNnE0MCAwIDY4IC0yOHQyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNjg7IiBob3Jpei1hZHYteD0iMTQwOCIgZD0iTTE0MDggODAwdi0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0xMjE2cS00MCAwIC02OCAyOHQtMjggNjh2MTkycTAgNDAgMjggNjh0NjggMjhoMTIxNnE0MCAwIDY4IC0yOHQyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNjk7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE0ODIgNDg2cTQ2IC0yNiA1OS41IC03Ny41dC0xMi41IC05Ny41bC02NCAtMTEwcS0yNiAtNDYgLTc3LjUgLTU5LjV0LTk3LjUgMTIuNWwtMjY2IDE1M3YtMzA3cTAgLTUyIC0zOCAtOTB0LTkwIC0zOGgtMTI4cS01MiAwIC05MCAzOHQtMzggOTB2MzA3bC0yNjYgLTE1M3EtNDYgLTI2IC05Ny41IC0xMi41dC03Ny41IDU5LjVsLTY0IDExMHEtMjYgNDYgLTEyLjUgOTcuNXQ1OS41IDc3LjVsMjY2IDE1NGwtMjY2IDE1NCBxLTQ2IDI2IC01OS41IDc3LjV0MTIuNSA5Ny41bDY0IDExMHEyNiA0NiA3Ny41IDU5LjV0OTcuNSAtMTIuNWwyNjYgLTE1M3YzMDdxMCA1MiAzOCA5MHQ5MCAzOGgxMjhxNTIgMCA5MCAtMzh0MzggLTkwdi0zMDdsMjY2IDE1M3E0NiAyNiA5Ny41IDEyLjV0NzcuNSAtNTkuNWw2NCAtMTEwcTI2IC00NiAxMi41IC05Ny41dC01OS41IC03Ny41bC0yNjYgLTE1NHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA2YTsiIGQ9Ik03NjggMTQwOHEyMDkgMCAzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41dC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzek04OTYgMTYxdjE5MHEwIDE0IC05IDIzLjV0LTIyIDkuNWgtMTkycS0xMyAwIC0yMyAtMTB0LTEwIC0yM3YtMTkwcTAgLTEzIDEwIC0yM3QyMyAtMTBoMTkyIHExMyAwIDIyIDkuNXQ5IDIzLjV6TTg5NCA1MDVsMTggNjIxcTAgMTIgLTEwIDE4cS0xMCA4IC0yNCA4aC0yMjBxLTE0IDAgLTI0IC04cS0xMCAtNiAtMTAgLTE4bDE3IC02MjFxMCAtMTAgMTAgLTE3LjV0MjQgLTcuNWgxODVxMTQgMCAyMy41IDcuNXQxMC41IDE3LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNmI7IiBkPSJNOTI4IDE4MHY1NnY0Njh2MTkyaC0zMjB2LTE5MnYtNDY4di01NnEwIC0yNSAxOCAtMzguNXQ0NiAtMTMuNWgxOTJxMjggMCA0NiAxMy41dDE4IDM4LjV6TTQ3MiAxMDI0aDE5NWwtMTI2IDE2MXEtMjYgMzEgLTY5IDMxcS00MCAwIC02OCAtMjh0LTI4IC02OHQyOCAtNjh0NjggLTI4ek0xMTYwIDExMjBxMCA0MCAtMjggNjh0LTY4IDI4cS00MyAwIC02OSAtMzFsLTEyNSAtMTYxaDE5NHE0MCAwIDY4IDI4dDI4IDY4ek0xNTM2IDg2NHYtMzIwIHEwIC0xNCAtOSAtMjN0LTIzIC05aC05NnYtNDE2cTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTA4OHEtNDAgMCAtNjggMjh0LTI4IDY4djQxNmgtOTZxLTE0IDAgLTIzIDl0LTkgMjN2MzIwcTAgMTQgOSAyM3QyMyA5aDQ0MHEtOTMgMCAtMTU4LjUgNjUuNXQtNjUuNSAxNTguNXQ2NS41IDE1OC41dDE1OC41IDY1LjVxMTA3IDAgMTY4IC03N2wxMjggLTE2NWwxMjggMTY1cTYxIDc3IDE2OCA3N3E5MyAwIDE1OC41IC02NS41dDY1LjUgLTE1OC41IHQtNjUuNSAtMTU4LjV0LTE1OC41IC02NS41aDQ0MHExNCAwIDIzIC05dDkgLTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDZjOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xMjgwIDgzMnEwIDI2IC0xOSA0NXQtNDUgMTlxLTE3MiAwIC0zMTggLTQ5LjV0LTI1OS41IC0xMzR0LTIzNS41IC0yMTkuNXEtMTkgLTIxIC0xOSAtNDVxMCAtMjYgMTkgLTQ1dDQ1IC0xOXEyNCAwIDQ1IDE5cTI3IDI0IDc0IDcxdDY3IDY2cTEzNyAxMjQgMjY4LjUgMTc2dDMxMy41IDUycTI2IDAgNDUgMTl0MTkgNDV6TTE3OTIgMTAzMHEwIC05NSAtMjAgLTE5M3EtNDYgLTIyNCAtMTg0LjUgLTM4M3QtMzU3LjUgLTI2OCBxLTIxNCAtMTA4IC00MzggLTEwOHEtMTQ4IDAgLTI4NiA0N3EtMTUgNSAtODggNDJ0LTk2IDM3cS0xNiAwIC0zOS41IC0zMnQtNDUgLTcwdC01Mi41IC03MHQtNjAgLTMycS0zMCAwIC01MSAxMXQtMzEgMjR0LTI3IDQycS0yIDQgLTYgMTF0LTUuNSAxMHQtMyA5LjV0LTEuNSAxMy41cTAgMzUgMzEgNzMuNXQ2OCA2NS41dDY4IDU2dDMxIDQ4cTAgNCAtMTQgMzh0LTE2IDQ0cS05IDUxIC05IDEwNHEwIDExNSA0My41IDIyMHQxMTkgMTg0LjUgdDE3MC41IDEzOXQyMDQgOTUuNXE1NSAxOCAxNDUgMjUuNXQxNzkuNSA5dDE3OC41IDZ0MTYzLjUgMjR0MTEzLjUgNTYuNWwyOS41IDI5LjV0MjkuNSAyOHQyNyAyMHQzNi41IDE2dDQzLjUgNC41cTM5IDAgNzAuNSAtNDZ0NDcuNSAtMTEydDI0IC0xMjR0OCAtOTZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNmQ7IiBob3Jpei1hZHYteD0iMTQwOCIgZD0iTTE0MDggLTE2MHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xMzQ0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxMzQ0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTE1MiA4OTZxMCAtNzggLTI0LjUgLTE0NHQtNjQgLTExMi41dC04Ny41IC04OHQtOTYgLTc3LjV0LTg3LjUgLTcydC02NCAtODEuNXQtMjQuNSAtOTYuNXEwIC05NiA2NyAtMjI0bC00IDFsMSAtMSBxLTkwIDQxIC0xNjAgODN0LTEzOC41IDEwMHQtMTEzLjUgMTIyLjV0LTcyLjUgMTUwLjV0LTI3LjUgMTg0cTAgNzggMjQuNSAxNDR0NjQgMTEyLjV0ODcuNSA4OHQ5NiA3Ny41dDg3LjUgNzJ0NjQgODEuNXQyNC41IDk2LjVxMCA5NCAtNjYgMjI0bDMgLTFsLTEgMXE5MCAtNDEgMTYwIC04M3QxMzguNSAtMTAwdDExMy41IC0xMjIuNXQ3Mi41IC0xNTAuNXQyNy41IC0xODR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNmU7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE2NjQgNTc2cS0xNTIgMjM2IC0zODEgMzUzcTYxIC0xMDQgNjEgLTIyNXEwIC0xODUgLTEzMS41IC0zMTYuNXQtMzE2LjUgLTEzMS41dC0zMTYuNSAxMzEuNXQtMTMxLjUgMzE2LjVxMCAxMjEgNjEgMjI1cS0yMjkgLTExNyAtMzgxIC0zNTNxMTMzIC0yMDUgMzMzLjUgLTMyNi41dDQzNC41IC0xMjEuNXQ0MzQuNSAxMjEuNXQzMzMuNSAzMjYuNXpNOTQ0IDk2MHEwIDIwIC0xNCAzNHQtMzQgMTRxLTEyNSAwIC0yMTQuNSAtODkuNSB0LTg5LjUgLTIxNC41cTAgLTIwIDE0IC0zNHQzNCAtMTR0MzQgMTR0MTQgMzRxMCA4NiA2MSAxNDd0MTQ3IDYxcTIwIDAgMzQgMTR0MTQgMzR6TTE3OTIgNTc2cTAgLTM0IC0yMCAtNjlxLTE0MCAtMjMwIC0zNzYuNSAtMzY4LjV0LTQ5OS41IC0xMzguNXQtNDk5LjUgMTM5dC0zNzYuNSAzNjhxLTIwIDM1IC0yMCA2OXQyMCA2OXExNDAgMjI5IDM3Ni41IDM2OHQ0OTkuNSAxMzl0NDk5LjUgLTEzOXQzNzYuNSAtMzY4cTIwIC0zNSAyMCAtNjl6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNzA7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTU1NSAyMDFsNzggMTQxcS04NyA2MyAtMTM2IDE1OXQtNDkgMjAzcTAgMTIxIDYxIDIyNXEtMjI5IC0xMTcgLTM4MSAtMzUzcTE2NyAtMjU4IDQyNyAtMzc1ek05NDQgOTYwcTAgMjAgLTE0IDM0dC0zNCAxNHEtMTI1IDAgLTIxNC41IC04OS41dC04OS41IC0yMTQuNXEwIC0yMCAxNCAtMzR0MzQgLTE0dDM0IDE0dDE0IDM0cTAgODYgNjEgMTQ3dDE0NyA2MXEyMCAwIDM0IDE0dDE0IDM0ek0xMzA3IDExNTFxMCAtNyAtMSAtOSBxLTEwNSAtMTg4IC0zMTUgLTU2NnQtMzE2IC01NjdsLTQ5IC04OXEtMTAgLTE2IC0yOCAtMTZxLTEyIDAgLTEzNCA3MHEtMTYgMTAgLTE2IDI4cTAgMTIgNDQgODdxLTE0MyA2NSAtMjYzLjUgMTczdC0yMDguNSAyNDVxLTIwIDMxIC0yMCA2OXQyMCA2OXExNTMgMjM1IDM4MCAzNzF0NDk2IDEzNnE4OSAwIDE4MCAtMTdsNTQgOTdxMTAgMTYgMjggMTZxNSAwIDE4IC02dDMxIC0xNS41dDMzIC0xOC41dDMxLjUgLTE4LjV0MTkuNSAtMTEuNSBxMTYgLTEwIDE2IC0yN3pNMTM0NCA3MDRxMCAtMTM5IC03OSAtMjUzLjV0LTIwOSAtMTY0LjVsMjgwIDUwMnE4IC00NSA4IC04NHpNMTc5MiA1NzZxMCAtMzUgLTIwIC02OXEtMzkgLTY0IC0xMDkgLTE0NXEtMTUwIC0xNzIgLTM0Ny41IC0yNjd0LTQxOS41IC05NWw3NCAxMzJxMjEyIDE4IDM5Mi41IDEzN3QzMDEuNSAzMDdxLTExNSAxNzkgLTI4MiAyOTRsNjMgMTEycTk1IC02NCAxODIuNSAtMTUzdDE0NC41IC0xODRxMjAgLTM0IDIwIC02OXogIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNzE7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTEwMjQgMTYxdjE5MHEwIDE0IC05LjUgMjMuNXQtMjIuNSA5LjVoLTE5MnEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIzLjV2LTE5MHEwIC0xNCA5LjUgLTIzLjV0MjIuNSAtOS41aDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMy41ek0xMDIyIDUzNWwxOCA0NTlxMCAxMiAtMTAgMTlxLTEzIDExIC0yNCAxMWgtMjIwcS0xMSAwIC0yNCAtMTFxLTEwIC03IC0xMCAtMjFsMTcgLTQ1N3EwIC0xMCAxMCAtMTYuNXQyNCAtNi41aDE4NSBxMTQgMCAyMy41IDYuNXQxMC41IDE2LjV6TTEwMDggMTQ2OWw3NjggLTE0MDhxMzUgLTYzIC0yIC0xMjZxLTE3IC0yOSAtNDYuNSAtNDZ0LTYzLjUgLTE3aC0xNTM2cS0zNCAwIC02My41IDE3dC00Ni41IDQ2cS0zNyA2MyAtMiAxMjZsNzY4IDE0MDhxMTcgMzEgNDcgNDl0NjUgMTh0NjUgLTE4dDQ3IC00OXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA3MjsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNMTM3NiAxMzc2cTQ0IC01MiAxMiAtMTQ4dC0xMDggLTE3MmwtMTYxIC0xNjFsMTYwIC02OTZxNSAtMTkgLTEyIC0zM2wtMTI4IC05NnEtNyAtNiAtMTkgLTZxLTQgMCAtNyAxcS0xNSAzIC0yMSAxNmwtMjc5IDUwOGwtMjU5IC0yNTlsNTMgLTE5NHE1IC0xNyAtOCAtMzFsLTk2IC05NnEtOSAtOSAtMjMgLTloLTJxLTE1IDIgLTI0IDEzbC0xODkgMjUybC0yNTIgMTg5cS0xMSA3IC0xMyAyM3EtMSAxMyA5IDI1bDk2IDk3cTkgOSAyMyA5IHE2IDAgOCAtMWwxOTQgLTUzbDI1OSAyNTlsLTUwOCAyNzlxLTE0IDggLTE3IDI0cS0yIDE2IDkgMjdsMTI4IDEyOHExNCAxMyAzMCA4bDY2NSAtMTU5bDE2MCAxNjBxNzYgNzYgMTcyIDEwOHQxNDggLTEyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDczOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xMjggLTEyOGgyODh2Mjg4aC0yODh2LTI4OHpNNDgwIC0xMjhoMzIwdjI4OGgtMzIwdi0yODh6TTEyOCAyMjRoMjg4djMyMGgtMjg4di0zMjB6TTQ4MCAyMjRoMzIwdjMyMGgtMzIwdi0zMjB6TTEyOCA2MDhoMjg4djI4OGgtMjg4di0yODh6TTg2NCAtMTI4aDMyMHYyODhoLTMyMHYtMjg4ek00ODAgNjA4aDMyMHYyODhoLTMyMHYtMjg4ek0xMjQ4IC0xMjhoMjg4djI4OGgtMjg4di0yODh6TTg2NCAyMjRoMzIwdjMyMGgtMzIwdi0zMjB6IE01MTIgMTA4OHYyODhxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC02NHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTI4OHEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTEyNDggMjI0aDI4OHYzMjBoLTI4OHYtMzIwek04NjQgNjA4aDMyMHYyODhoLTMyMHYtMjg4ek0xMjQ4IDYwOGgyODh2Mjg4aC0yODh2LTI4OHpNMTI4MCAxMDg4djI4OHEwIDEzIC05LjUgMjIuNXQtMjIuNSA5LjVoLTY0IHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTI4OHEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTE2NjQgMTE1MnYtMTI4MHEwIC01MiAtMzggLTkwdC05MCAtMzhoLTE0MDhxLTUyIDAgLTkwIDM4dC0zOCA5MHYxMjgwcTAgNTIgMzggOTB0OTAgMzhoMTI4djk2cTAgNjYgNDcgMTEzdDExMyA0N2g2NHE2NiAwIDExMyAtNDd0NDcgLTExM3YtOTZoMzg0djk2cTAgNjYgNDcgMTEzdDExMyA0NyBoNjRxNjYgMCAxMTMgLTQ3dDQ3IC0xMTN2LTk2aDEyOHE1MiAwIDkwIC0zOHQzOCAtOTB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNzQ7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTY2NiAxMDU1cS02MCAtOTIgLTEzNyAtMjczcS0yMiA0NSAtMzcgNzIuNXQtNDAuNSA2My41dC01MSA1Ni41dC02MyAzNXQtODEuNSAxNC41aC0yMjRxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDIyNHEyNTAgMCA0MTAgLTIyNXpNMTc5MiAyNTZxMCAtMTQgLTkgLTIzbC0zMjAgLTMyMHEtOSAtOSAtMjMgLTlxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXYxOTJxLTMyIDAgLTg1IC0wLjV0LTgxIC0xdC03MyAxIHQtNzEgNXQtNjQgMTAuNXQtNjMgMTguNXQtNTggMjguNXQtNTkgNDB0LTU1IDUzLjV0LTU2IDY5LjVxNTkgOTMgMTM2IDI3M3EyMiAtNDUgMzcgLTcyLjV0NDAuNSAtNjMuNXQ1MSAtNTYuNXQ2MyAtMzV0ODEuNSAtMTQuNWgyNTZ2MTkycTAgMTQgOSAyM3QyMyA5cTEyIDAgMjQgLTEwbDMxOSAtMzE5cTkgLTkgOSAtMjN6TTE3OTIgMTE1MnEwIC0xNCAtOSAtMjNsLTMyMCAtMzIwcS05IC05IC0yMyAtOXEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41IHYxOTJoLTI1NnEtNDggMCAtODcgLTE1dC02OSAtNDV0LTUxIC02MS41dC00NSAtNzcuNXEtMzIgLTYyIC03OCAtMTcxcS0yOSAtNjYgLTQ5LjUgLTExMXQtNTQgLTEwNXQtNjQgLTEwMHQtNzQgLTgzdC05MCAtNjguNXQtMTA2LjUgLTQydC0xMjggLTE2LjVoLTIyNHEtMTQgMCAtMjMgOXQtOSAyM3YxOTJxMCAxNCA5IDIzdDIzIDloMjI0cTQ4IDAgODcgMTV0NjkgNDV0NTEgNjEuNXQ0NSA3Ny41cTMyIDYyIDc4IDE3MXEyOSA2NiA0OS41IDExMSB0NTQgMTA1dDY0IDEwMHQ3NCA4M3Q5MCA2OC41dDEwNi41IDQydDEyOCAxNi41aDI1NnYxOTJxMCAxNCA5IDIzdDIzIDlxMTIgMCAyNCAtMTBsMzE5IC0zMTlxOSAtOSA5IC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA3NTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTc5MiA2NDBxMCAtMTc0IC0xMjAgLTMyMS41dC0zMjYgLTIzM3QtNDUwIC04NS41cS03MCAwIC0xNDUgOHEtMTk4IC0xNzUgLTQ2MCAtMjQycS00OSAtMTQgLTExNCAtMjJxLTE3IC0yIC0zMC41IDl0LTE3LjUgMjl2MXEtMyA0IC0wLjUgMTJ0MiAxMHQ0LjUgOS41bDYgOXQ3IDguNXQ4IDlxNyA4IDMxIDM0LjV0MzQuNSAzOHQzMSAzOS41dDMyLjUgNTF0MjcgNTl0MjYgNzZxLTE1NyA4OSAtMjQ3LjUgMjIwdC05MC41IDI4MSBxMCAxMzAgNzEgMjQ4LjV0MTkxIDIwNC41dDI4NiAxMzYuNXQzNDggNTAuNXEyNDQgMCA0NTAgLTg1LjV0MzI2IC0yMzN0MTIwIC0zMjEuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA3NjsiIGQ9Ik0xNTM2IDcwNHYtMTI4cTAgLTIwMSAtOTguNSAtMzYydC0yNzQgLTI1MS41dC0zOTUuNSAtOTAuNXQtMzk1LjUgOTAuNXQtMjc0IDI1MS41dC05OC41IDM2MnYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgzODRxMjYgMCA0NSAtMTl0MTkgLTQ1di0xMjhxMCAtNTIgMjMuNSAtOTB0NTMuNSAtNTd0NzEgLTMwdDY0IC0xM3Q0NCAtMnQ0NCAydDY0IDEzdDcxIDMwdDUzLjUgNTd0MjMuNSA5MHYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgzODQgcTI2IDAgNDUgLTE5dDE5IC00NXpNNTEyIDEzNDR2LTM4NHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTM4NHEtMjYgMCAtNDUgMTl0LTE5IDQ1djM4NHEwIDI2IDE5IDQ1dDQ1IDE5aDM4NHEyNiAwIDQ1IC0xOXQxOSAtNDV6TTE1MzYgMTM0NHYtMzg0cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMzg0cS0yNiAwIC00NSAxOXQtMTkgNDV2Mzg0cTAgMjYgMTkgNDV0NDUgMTloMzg0cTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA3NzsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTYxMSAzMjBxMCAtNTMgLTM3IC05MGwtNzUgLTc1cS0zOCAtMzggLTkxIC0zOHEtNTQgMCAtOTAgMzhsLTQ4NiA0ODVsLTQ4NiAtNDg1cS0zNiAtMzggLTkwIC0zOHQtOTAgMzhsLTc1IDc1cS0zOCAzNiAtMzggOTBxMCA1MyAzOCA5MWw2NTEgNjUxcTM3IDM3IDkwIDM3cTUyIDAgOTEgLTM3bDY1MCAtNjUxcTM4IC0zOCAzOCAtOTF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNzg7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE2MTEgODMycTAgLTUzIC0zNyAtOTBsLTY1MSAtNjUxcS0zOCAtMzggLTkxIC0zOHEtNTQgMCAtOTAgMzhsLTY1MSA2NTFxLTM4IDM2IC0zOCA5MHEwIDUzIDM4IDkxbDc0IDc1cTM5IDM3IDkxIDM3cTUzIDAgOTAgLTM3bDQ4NiAtNDg2bDQ4NiA0ODZxMzcgMzcgOTAgMzdxNTIgMCA5MSAtMzdsNzUgLTc1cTM3IC0zOSAzNyAtOTF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwNzk7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTEyODAgMzJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC05NjBxLTggMCAtMTMuNSAydC05IDd0LTUuNSA4dC0zIDExLjV0LTEgMTEuNXYxM3YxMXYxNjB2NDE2aC0xOTJxLTI2IDAgLTQ1IDE5dC0xOSA0NXEwIDI0IDE1IDQxbDMyMCAzODRxMTkgMjIgNDkgMjJ0NDkgLTIybDMyMCAtMzg0cTE1IC0xNyAxNSAtNDFxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xOTJ2LTM4NGg1NzZxMTYgMCAyNSAtMTFsMTYwIC0xOTJxNyAtMTEgNyAtMjEgek0xOTIwIDQ0OHEwIC0yNCAtMTUgLTQxbC0zMjAgLTM4NHEtMjAgLTIzIC00OSAtMjN0LTQ5IDIzbC0zMjAgMzg0cS0xNSAxNyAtMTUgNDFxMCAyNiAxOSA0NXQ0NSAxOWgxOTJ2Mzg0aC01NzZxLTE2IDAgLTI1IDEybC0xNjAgMTkycS03IDkgLTcgMjBxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg5NjBxOCAwIDEzLjUgLTJ0OSAtN3Q1LjUgLTh0MyAtMTEuNXQxIC0xMS41di0xM3YtMTF2LTE2MHYtNDE2aDE5MnEyNiAwIDQ1IC0xOXQxOSAtNDV6ICIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDdhOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik02NDAgMHEwIC01MyAtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNXQtOTAuNSAzNy41dC0zNy41IDkwLjV0MzcuNSA5MC41dDkwLjUgMzcuNXQ5MC41IC0zNy41dDM3LjUgLTkwLjV6TTE1MzYgMHEwIC01MyAtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNXQtOTAuNSAzNy41dC0zNy41IDkwLjV0MzcuNSA5MC41dDkwLjUgMzcuNXQ5MC41IC0zNy41dDM3LjUgLTkwLjV6TTE2NjQgMTA4OHYtNTEycTAgLTI0IC0xNiAtNDIuNXQtNDEgLTIxLjUgbC0xMDQ0IC0xMjJxMSAtNyA0LjUgLTIxLjV0NiAtMjYuNXQyLjUgLTIycTAgLTE2IC0yNCAtNjRoOTIwcTI2IDAgNDUgLTE5dDE5IC00NXQtMTkgLTQ1dC00NSAtMTloLTEwMjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXEwIDE0IDExIDM5LjV0MjkuNSA1OS41dDIwLjUgMzhsLTE3NyA4MjNoLTIwNHEtMjYgMCAtNDUgMTl0LTE5IDQ1dDE5IDQ1dDQ1IDE5aDI1NnExNiAwIDI4LjUgLTYuNXQyMCAtMTUuNXQxMyAtMjQuNXQ3LjUgLTI2LjUgdDUuNSAtMjkuNXQ0LjUgLTI1LjVoMTIwMXEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwN2I7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE2NjQgOTI4di03MDRxMCAtOTIgLTY2IC0xNTh0LTE1OCAtNjZoLTEyMTZxLTkyIDAgLTE1OCA2NnQtNjYgMTU4djk2MHEwIDkyIDY2IDE1OHQxNTggNjZoMzIwcTkyIDAgMTU4IC02NnQ2NiAtMTU4di0zMmg2NzJxOTIgMCAxNTggLTY2dDY2IC0xNTh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwN2M7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTE4NzkgNTg0cTAgLTMxIC0zMSAtNjZsLTMzNiAtMzk2cS00MyAtNTEgLTEyMC41IC04Ni41dC0xNDMuNSAtMzUuNWgtMTA4OHEtMzQgMCAtNjAuNSAxM3QtMjYuNSA0M3EwIDMxIDMxIDY2bDMzNiAzOTZxNDMgNTEgMTIwLjUgODYuNXQxNDMuNSAzNS41aDEwODhxMzQgMCA2MC41IC0xM3QyNi41IC00M3pNMTUzNiA5Mjh2LTE2MGgtODMycS05NCAwIC0xOTcgLTQ3LjV0LTE2NCAtMTE5LjVsLTMzNyAtMzk2bC01IC02cTAgNCAtMC41IDEyLjUgdC0wLjUgMTIuNXY5NjBxMCA5MiA2NiAxNTh0MTU4IDY2aDMyMHE5MiAwIDE1OCAtNjZ0NjYgLTE1OHYtMzJoNTQ0cTkyIDAgMTU4IC02NnQ2NiAtMTU4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDdkOyIgaG9yaXotYWR2LXg9Ijc2OCIgZD0iTTcwNCAxMjE2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTI4di0xMDI0aDEyOHEyNiAwIDQ1IC0xOXQxOSAtNDV0LTE5IC00NWwtMjU2IC0yNTZxLTE5IC0xOSAtNDUgLTE5dC00NSAxOWwtMjU2IDI1NnEtMTkgMTkgLTE5IDQ1dDE5IDQ1dDQ1IDE5aDEyOHYxMDI0aC0xMjhxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NWwyNTYgMjU2cTE5IDE5IDQ1IDE5dDQ1IC0xOWwyNTYgLTI1NnExOSAtMTkgMTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDdlOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNzkyIDY0MHEwIC0yNiAtMTkgLTQ1bC0yNTYgLTI1NnEtMTkgLTE5IC00NSAtMTl0LTQ1IDE5dC0xOSA0NXYxMjhoLTEwMjR2LTEyOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTl0LTQ1IDE5bC0yNTYgMjU2cS0xOSAxOSAtMTkgNDV0MTkgNDVsMjU2IDI1NnExOSAxOSA0NSAxOXQ0NSAtMTl0MTkgLTQ1di0xMjhoMTAyNHYxMjhxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTlsMjU2IC0yNTZxMTkgLTE5IDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA4MDsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNNTEyIDUxMnYtMzg0aC0yNTZ2Mzg0aDI1NnpNODk2IDEwMjR2LTg5NmgtMjU2djg5NmgyNTZ6TTEyODAgNzY4di02NDBoLTI1NnY2NDBoMjU2ek0xNjY0IDExNTJ2LTEwMjRoLTI1NnYxMDI0aDI1NnpNMTc5MiAzMnYxMjE2cTAgMTMgLTkuNSAyMi41dC0yMi41IDkuNWgtMTYwMHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTEyMTZxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWgxNjAwcTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6IE0xOTIwIDEyNDh2LTEyMTZxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTE2MDBxLTY2IDAgLTExMyA0N3QtNDcgMTEzdjEyMTZxMCA2NiA0NyAxMTN0MTEzIDQ3aDE2MDBxNjYgMCAxMTMgLTQ3dDQ3IC0xMTN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwODE7IiBkPSJNMTI4MCA5MjZxLTU2IC0yNSAtMTIxIC0zNHE2OCA0MCA5MyAxMTdxLTY1IC0zOCAtMTM0IC01MXEtNjEgNjYgLTE1MyA2NnEtODcgMCAtMTQ4LjUgLTYxLjV0LTYxLjUgLTE0OC41cTAgLTI5IDUgLTQ4cS0xMjkgNyAtMjQyIDY1dC0xOTIgMTU1cS0yOSAtNTAgLTI5IC0xMDZxMCAtMTE0IDkxIC0xNzVxLTQ3IDEgLTEwMCAyNnYtMnEwIC03NSA1MCAtMTMzLjV0MTIzIC03Mi41cS0yOSAtOCAtNTEgLThxLTEzIDAgLTM5IDQgcTIxIC02MyA3NC41IC0xMDR0MTIxLjUgLTQycS0xMTYgLTkwIC0yNjEgLTkwcS0yNiAwIC01MCAzcTE0OCAtOTQgMzIyIC05NHExMTIgMCAyMTAgMzUuNXQxNjggOTV0MTIwLjUgMTM3dDc1IDE2MnQyNC41IDE2OC41cTAgMTggLTEgMjdxNjMgNDUgMTA1IDEwOXpNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjUgdDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDgyOyIgZD0iTTEzMDcgNjE4bDIzIDIxOWgtMTk4djEwOXEwIDQ5IDE1LjUgNjguNXQ3MS41IDE5LjVoMTEwdjIxOWgtMTc1cS0xNTIgMCAtMjE4IC03MnQtNjYgLTIxM3YtMTMxaC0xMzF2LTIxOWgxMzF2LTYzNWgyNjJ2NjM1aDE3NXpNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjAgcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDgzOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik05MjggNzA0cTAgMTQgLTkgMjN0LTIzIDlxLTY2IDAgLTExMyAtNDd0LTQ3IC0xMTNxMCAtMTQgOSAtMjN0MjMgLTl0MjMgOXQ5IDIzcTAgNDAgMjggNjh0NjggMjhxMTQgMCAyMyA5dDkgMjN6TTExNTIgNTc0cTAgLTEwNiAtNzUgLTE4MXQtMTgxIC03NXQtMTgxIDc1dC03NSAxODF0NzUgMTgxdDE4MSA3NXQxODEgLTc1dDc1IC0xODF6TTEyOCAwaDE1MzZ2MTI4aC0xNTM2di0xMjh6TTEyODAgNTc0cTAgMTU5IC0xMTIuNSAyNzEuNSB0LTI3MS41IDExMi41dC0yNzEuNSAtMTEyLjV0LTExMi41IC0yNzEuNXQxMTIuNSAtMjcxLjV0MjcxLjUgLTExMi41dDI3MS41IDExMi41dDExMi41IDI3MS41ek0yNTYgMTIxNmgzODR2MTI4aC0zODR2LTEyOHpNMTI4IDEwMjRoMTUzNnYxMTh2MTM4aC04MjhsLTY0IC0xMjhoLTY0NHYtMTI4ek0xNzkyIDEyODB2LTEyODBxMCAtNTMgLTM3LjUgLTkwLjV0LTkwLjUgLTM3LjVoLTE1MzZxLTUzIDAgLTkwLjUgMzcuNXQtMzcuNSA5MC41djEyODAgcTAgNTMgMzcuNSA5MC41dDkwLjUgMzcuNWgxNTM2cTUzIDAgOTAuNSAtMzcuNXQzNy41IC05MC41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDg0OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik04MzIgMTAyNHEwIDgwIC01NiAxMzZ0LTEzNiA1NnQtMTM2IC01NnQtNTYgLTEzNnEwIC00MiAxOSAtODNxLTQxIDE5IC04MyAxOXEtODAgMCAtMTM2IC01NnQtNTYgLTEzNnQ1NiAtMTM2dDEzNiAtNTZ0MTM2IDU2dDU2IDEzNnEwIDQyIC0xOSA4M3E0MSAtMTkgODMgLTE5cTgwIDAgMTM2IDU2dDU2IDEzNnpNMTY4MyAzMjBxMCAtMTcgLTQ5IC02NnQtNjYgLTQ5cS05IDAgLTI4LjUgMTZ0LTM2LjUgMzN0LTM4LjUgNDB0LTI0LjUgMjYgbC05NiAtOTZsMjIwIC0yMjBxMjggLTI4IDI4IC02OHEwIC00MiAtMzkgLTgxdC04MSAtMzlxLTQwIDAgLTY4IDI4bC02NzEgNjcxcS0xNzYgLTEzMSAtMzY1IC0xMzFxLTE2MyAwIC0yNjUuNSAxMDIuNXQtMTAyLjUgMjY1LjVxMCAxNjAgOTUgMzEzdDI0OCAyNDh0MzEzIDk1cTE2MyAwIDI2NS41IC0xMDIuNXQxMDIuNSAtMjY1LjVxMCAtMTg5IC0xMzEgLTM2NWwzNTUgLTM1NWw5NiA5NnEtMyAzIC0yNiAyNC41dC00MCAzOC41dC0zMyAzNi41IHQtMTYgMjguNXEwIDE3IDQ5IDY2dDY2IDQ5cTEzIDAgMjMgLTEwcTYgLTYgNDYgLTQ0LjV0ODIgLTc5LjV0ODYuNSAtODZ0NzMgLTc4dDI4LjUgLTQxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDg1OyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik04OTYgNjQwcTAgMTA2IC03NSAxODF0LTE4MSA3NXQtMTgxIC03NXQtNzUgLTE4MXQ3NSAtMTgxdDE4MSAtNzV0MTgxIDc1dDc1IDE4MXpNMTY2NCAxMjhxMCA1MiAtMzggOTB0LTkwIDM4dC05MCAtMzh0LTM4IC05MHEwIC01MyAzNy41IC05MC41dDkwLjUgLTM3LjV0OTAuNSAzNy41dDM3LjUgOTAuNXpNMTY2NCAxMTUycTAgNTIgLTM4IDkwdC05MCAzOHQtOTAgLTM4dC0zOCAtOTBxMCAtNTMgMzcuNSAtOTAuNXQ5MC41IC0zNy41IHQ5MC41IDM3LjV0MzcuNSA5MC41ek0xMjgwIDczMXYtMTg1cTAgLTEwIC03IC0xOS41dC0xNiAtMTAuNWwtMTU1IC0yNHEtMTEgLTM1IC0zMiAtNzZxMzQgLTQ4IDkwIC0xMTVxNyAtMTAgNyAtMjBxMCAtMTIgLTcgLTE5cS0yMyAtMzAgLTgyLjUgLTg5LjV0LTc4LjUgLTU5LjVxLTExIDAgLTIxIDdsLTExNSA5MHEtMzcgLTE5IC03NyAtMzFxLTExIC0xMDggLTIzIC0xNTVxLTcgLTI0IC0zMCAtMjRoLTE4NnEtMTEgMCAtMjAgNy41dC0xMCAxNy41IGwtMjMgMTUzcS0zNCAxMCAtNzUgMzFsLTExOCAtODlxLTcgLTcgLTIwIC03cS0xMSAwIC0yMSA4cS0xNDQgMTMzIC0xNDQgMTYwcTAgOSA3IDE5cTEwIDE0IDQxIDUzdDQ3IDYxcS0yMyA0NCAtMzUgODJsLTE1MiAyNHEtMTAgMSAtMTcgOS41dC03IDE5LjV2MTg1cTAgMTAgNyAxOS41dDE2IDEwLjVsMTU1IDI0cTExIDM1IDMyIDc2cS0zNCA0OCAtOTAgMTE1cS03IDExIC03IDIwcTAgMTIgNyAyMHEyMiAzMCA4MiA4OXQ3OSA1OXExMSAwIDIxIC03IGwxMTUgLTkwcTM0IDE4IDc3IDMycTExIDEwOCAyMyAxNTRxNyAyNCAzMCAyNGgxODZxMTEgMCAyMCAtNy41dDEwIC0xNy41bDIzIC0xNTNxMzQgLTEwIDc1IC0zMWwxMTggODlxOCA3IDIwIDdxMTEgMCAyMSAtOHExNDQgLTEzMyAxNDQgLTE2MHEwIC05IC03IC0xOXEtMTIgLTE2IC00MiAtNTR0LTQ1IC02MHEyMyAtNDggMzQgLTgybDE1MiAtMjNxMTAgLTIgMTcgLTEwLjV0NyAtMTkuNXpNMTkyMCAxOTh2LTE0MHEwIC0xNiAtMTQ5IC0zMSBxLTEyIC0yNyAtMzAgLTUycTUxIC0xMTMgNTEgLTEzOHEwIC00IC00IC03cS0xMjIgLTcxIC0xMjQgLTcxcS04IDAgLTQ2IDQ3dC01MiA2OHEtMjAgLTIgLTMwIC0ydC0zMCAycS0xNCAtMjEgLTUyIC02OHQtNDYgLTQ3cS0yIDAgLTEyNCA3MXEtNCAzIC00IDdxMCAyNSA1MSAxMzhxLTE4IDI1IC0zMCA1MnEtMTQ5IDE1IC0xNDkgMzF2MTQwcTAgMTYgMTQ5IDMxcTEzIDI5IDMwIDUycS01MSAxMTMgLTUxIDEzOHEwIDQgNCA3cTQgMiAzNSAyMCB0NTkgMzR0MzAgMTZxOCAwIDQ2IC00Ni41dDUyIC02Ny41cTIwIDIgMzAgMnQzMCAtMnE1MSA3MSA5MiAxMTJsNiAycTQgMCAxMjQgLTcwcTQgLTMgNCAtN3EwIC0yNSAtNTEgLTEzOHExNyAtMjMgMzAgLTUycTE0OSAtMTUgMTQ5IC0zMXpNMTkyMCAxMjIydi0xNDBxMCAtMTYgLTE0OSAtMzFxLTEyIC0yNyAtMzAgLTUycTUxIC0xMTMgNTEgLTEzOHEwIC00IC00IC03cS0xMjIgLTcxIC0xMjQgLTcxcS04IDAgLTQ2IDQ3dC01MiA2OCBxLTIwIC0yIC0zMCAtMnQtMzAgMnEtMTQgLTIxIC01MiAtNjh0LTQ2IC00N3EtMiAwIC0xMjQgNzFxLTQgMyAtNCA3cTAgMjUgNTEgMTM4cS0xOCAyNSAtMzAgNTJxLTE0OSAxNSAtMTQ5IDMxdjE0MHEwIDE2IDE0OSAzMXExMyAyOSAzMCA1MnEtNTEgMTEzIC01MSAxMzhxMCA0IDQgN3E0IDIgMzUgMjB0NTkgMzR0MzAgMTZxOCAwIDQ2IC00Ni41dDUyIC02Ny41cTIwIDIgMzAgMnQzMCAtMnE1MSA3MSA5MiAxMTJsNiAycTQgMCAxMjQgLTcwIHE0IC0zIDQgLTdxMCAtMjUgLTUxIC0xMzhxMTcgLTIzIDMwIC01MnExNDkgLTE1IDE0OSAtMzF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwODY7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE0MDggNzY4cTAgLTEzOSAtOTQgLTI1N3QtMjU2LjUgLTE4Ni41dC0zNTMuNSAtNjguNXEtODYgMCAtMTc2IDE2cS0xMjQgLTg4IC0yNzggLTEyOHEtMzYgLTkgLTg2IC0xNmgtM3EtMTEgMCAtMjAuNSA4dC0xMS41IDIxcS0xIDMgLTEgNi41dDAuNSA2LjV0MiA2bDIuNSA1dDMuNSA1LjV0NCA1dDQuNSA1dDQgNC41cTUgNiAyMyAyNXQyNiAyOS41dDIyLjUgMjl0MjUgMzguNXQyMC41IDQ0cS0xMjQgNzIgLTE5NSAxNzd0LTcxIDIyNCBxMCAxMzkgOTQgMjU3dDI1Ni41IDE4Ni41dDM1My41IDY4LjV0MzUzLjUgLTY4LjV0MjU2LjUgLTE4Ni41dDk0IC0yNTd6TTE3OTIgNTEycTAgLTEyMCAtNzEgLTIyNC41dC0xOTUgLTE3Ni41cTEwIC0yNCAyMC41IC00NHQyNSAtMzguNXQyMi41IC0yOXQyNiAtMjkuNXQyMyAtMjVxMSAtMSA0IC00LjV0NC41IC01dDQgLTV0My41IC01LjVsMi41IC01dDIgLTZ0MC41IC02LjV0LTEgLTYuNXEtMyAtMTQgLTEzIC0yMnQtMjIgLTcgcS01MCA3IC04NiAxNnEtMTU0IDQwIC0yNzggMTI4cS05MCAtMTYgLTE3NiAtMTZxLTI3MSAwIC00NzIgMTMycTU4IC00IDg4IC00cTE2MSAwIDMwOSA0NXQyNjQgMTI5cTEyNSA5MiAxOTIgMjEydDY3IDI1NHEwIDc3IC0yMyAxNTJxMTI5IC03MSAyMDQgLTE3OHQ3NSAtMjMweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDg3OyIgZD0iTTI1NiAxOTJxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1ek0xNDA4IDc2OHEwIDUxIC0zOSA4OS41dC04OSAzOC41aC0zNTJxMCA1OCA0OCAxNTkuNXQ0OCAxNjAuNXEwIDk4IC0zMiAxNDV0LTEyOCA0N3EtMjYgLTI2IC0zOCAtODV0LTMwLjUgLTEyNS41dC01OS41IC0xMDkuNXEtMjIgLTIzIC03NyAtOTFxLTQgLTUgLTIzIC0zMHQtMzEuNSAtNDF0LTM0LjUgLTQyLjUgdC00MCAtNDR0LTM4LjUgLTM1LjV0LTQwIC0yN3QtMzUuNSAtOWgtMzJ2LTY0MGgzMnExMyAwIDMxLjUgLTN0MzMgLTYuNXQzOCAtMTF0MzUgLTExLjV0MzUuNSAtMTIuNXQyOSAtMTAuNXEyMTEgLTczIDM0MiAtNzNoMTIxcTE5MiAwIDE5MiAxNjdxMCAyNiAtNSA1NnEzMCAxNiA0Ny41IDUyLjV0MTcuNSA3My41dC0xOCA2OXE1MyA1MCA1MyAxMTlxMCAyNSAtMTAgNTUuNXQtMjUgNDcuNXEzMiAxIDUzLjUgNDd0MjEuNSA4MXpNMTUzNiA3NjkgcTAgLTg5IC00OSAtMTYzcTkgLTMzIDkgLTY5cTAgLTc3IC0zOCAtMTQ0cTMgLTIxIDMgLTQzcTAgLTEwMSAtNjAgLTE3OHExIC0xMzkgLTg1IC0yMTkuNXQtMjI3IC04MC41aC0zNmgtOTNxLTk2IDAgLTE4OS41IDIyLjV0LTIxNi41IDY1LjVxLTExNiA0MCAtMTM4IDQwaC0yODhxLTUzIDAgLTkwLjUgMzcuNXQtMzcuNSA5MC41djY0MHEwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjVoMjc0cTM2IDI0IDEzNyAxNTVxNTggNzUgMTA3IDEyOCBxMjQgMjUgMzUuNSA4NS41dDMwLjUgMTI2LjV0NjIgMTA4cTM5IDM3IDkwIDM3cTg0IDAgMTUxIC0zMi41dDEwMiAtMTAxLjV0MzUgLTE4NnEwIC05MyAtNDggLTE5MmgxNzZxMTA0IDAgMTgwIC03NnQ3NiAtMTc5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDg4OyIgZD0iTTI1NiAxMDg4cTAgMjYgLTE5IDQ1dC00NSAxOXQtNDUgLTE5dC0xOSAtNDV0MTkgLTQ1dDQ1IC0xOXQ0NSAxOXQxOSA0NXpNMTQwOCA1MTJxMCAzNSAtMjEuNSA4MXQtNTMuNSA0N3ExNSAxNyAyNSA0Ny41dDEwIDU1LjVxMCA2OSAtNTMgMTE5cTE4IDMyIDE4IDY5dC0xNy41IDczLjV0LTQ3LjUgNTIuNXE1IDMwIDUgNTZxMCA4NSAtNDkgMTI2dC0xMzYgNDFoLTEyOHEtMTMxIDAgLTM0MiAtNzNxLTUgLTIgLTI5IC0xMC41IHQtMzUuNSAtMTIuNXQtMzUgLTExLjV0LTM4IC0xMXQtMzMgLTYuNXQtMzEuNSAtM2gtMzJ2LTY0MGgzMnExNiAwIDM1LjUgLTl0NDAgLTI3dDM4LjUgLTM1LjV0NDAgLTQ0dDM0LjUgLTQyLjV0MzEuNSAtNDF0MjMgLTMwcTU1IC02OCA3NyAtOTFxNDEgLTQzIDU5LjUgLTEwOS41dDMwLjUgLTEyNS41dDM4IC04NXE5NiAwIDEyOCA0N3QzMiAxNDVxMCA1OSAtNDggMTYwLjV0LTQ4IDE1OS41aDM1MnE1MCAwIDg5IDM4LjV0MzkgODkuNXogTTE1MzYgNTExcTAgLTEwMyAtNzYgLTE3OXQtMTgwIC03NmgtMTc2cTQ4IC05OSA0OCAtMTkycTAgLTExOCAtMzUgLTE4NnEtMzUgLTY5IC0xMDIgLTEwMS41dC0xNTEgLTMyLjVxLTUxIDAgLTkwIDM3cS0zNCAzMyAtNTQgODJ0LTI1LjUgOTAuNXQtMTcuNSA4NC41dC0zMSA2NHEtNDggNTAgLTEwNyAxMjdxLTEwMSAxMzEgLTEzNyAxNTVoLTI3NHEtNTMgMCAtOTAuNSAzNy41dC0zNy41IDkwLjV2NjQwcTAgNTMgMzcuNSA5MC41dDkwLjUgMzcuNSBoMjg4cTIyIDAgMTM4IDQwcTEyOCA0NCAyMjMgNjZ0MjAwIDIyaDExMnExNDAgMCAyMjYuNSAtNzl0ODUuNSAtMjE2di01cTYwIC03NyA2MCAtMTc4cTAgLTIyIC0zIC00M3EzOCAtNjcgMzggLTE0NHEwIC0zNiAtOSAtNjlxNDkgLTc0IDQ5IC0xNjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwODk7IiBob3Jpei1hZHYteD0iODk2IiBkPSJNODMyIDE1MDR2LTEzMzlsLTQ0OSAtMjM2cS0yMiAtMTIgLTQwIC0xMnEtMjEgMCAtMzEuNSAxNC41dC0xMC41IDM1LjVxMCA2IDIgMjBsODYgNTAwbC0zNjQgMzU0cS0yNSAyNyAtMjUgNDhxMCAzNyA1NiA0Nmw1MDIgNzNsMjI1IDQ1NXExOSA0MSA0OSA0MXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA4YTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTY2NCA5NDBxMCA4MSAtMjEuNSAxNDN0LTU1IDk4LjV0LTgxLjUgNTkuNXQtOTQgMzF0LTk4IDh0LTExMiAtMjUuNXQtMTEwLjUgLTY0dC04Ni41IC03MnQtNjAgLTYxLjVxLTE4IC0yMiAtNDkgLTIydC00OSAyMnEtMjQgMjggLTYwIDYxLjV0LTg2LjUgNzJ0LTExMC41IDY0dC0xMTIgMjUuNXQtOTggLTh0LTk0IC0zMXQtODEuNSAtNTkuNXQtNTUgLTk4LjV0LTIxLjUgLTE0M3EwIC0xNjggMTg3IC0zNTVsNTgxIC01NjBsNTgwIDU1OSBxMTg4IDE4OCAxODggMzU2ek0xNzkyIDk0MHEwIC0yMjEgLTIyOSAtNDUwbC02MjMgLTYwMHEtMTggLTE4IC00NCAtMTh0LTQ0IDE4bC02MjQgNjAycS0xMCA4IC0yNy41IDI2dC01NS41IDY1LjV0LTY4IDk3LjV0LTUzLjUgMTIxdC0yMy41IDEzOHEwIDIyMCAxMjcgMzQ0dDM1MSAxMjRxNjIgMCAxMjYuNSAtMjEuNXQxMjAgLTU4dDk1LjUgLTY4LjV0NzYgLTY4cTM2IDM2IDc2IDY4dDk1LjUgNjguNXQxMjAgNTh0MTI2LjUgMjEuNSBxMjI0IDAgMzUxIC0xMjR0MTI3IC0zNDR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwOGI7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTY0MCA5NnEwIC00IDEgLTIwdDAuNSAtMjYuNXQtMyAtMjMuNXQtMTAgLTE5LjV0LTIwLjUgLTYuNWgtMzIwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY3MDRxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDMyMHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjVxMCAtNCAxIC0yMHQwLjUgLTI2LjV0LTMgLTIzLjV0LTEwIC0xOS41dC0yMC41IC02LjVoLTMyMHEtNjYgMCAtMTEzIC00N3QtNDcgLTExM3YtNzA0IHEwIC02NiA0NyAtMTEzdDExMyAtNDdoMjg4aDExaDEzdDExLjUgLTF0MTEuNSAtM3Q4IC01LjV0NyAtOXQyIC0xMy41ek0xNTY4IDY0MHEwIC0yNiAtMTkgLTQ1bC01NDQgLTU0NHEtMTkgLTE5IC00NSAtMTl0LTQ1IDE5dC0xOSA0NXYyODhoLTQ0OHEtMjYgMCAtNDUgMTl0LTE5IDQ1djM4NHEwIDI2IDE5IDQ1dDQ1IDE5aDQ0OHYyODhxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTlsNTQ0IC01NDRxMTkgLTE5IDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA4YzsiIGQ9Ik0yMzcgMTIyaDIzMXY2OTRoLTIzMXYtNjk0ek00ODMgMTAzMHEtMSA1MiAtMzYgODZ0LTkzIDM0dC05NC41IC0zNHQtMzYuNSAtODZxMCAtNTEgMzUuNSAtODUuNXQ5Mi41IC0zNC41aDFxNTkgMCA5NSAzNC41dDM2IDg1LjV6TTEwNjggMTIyaDIzMXYzOThxMCAxNTQgLTczIDIzM3QtMTkzIDc5cS0xMzYgMCAtMjA5IC0xMTdoMnYxMDFoLTIzMXEzIC02NiAwIC02OTRoMjMxdjM4OHEwIDM4IDcgNTZxMTUgMzUgNDUgNTkuNXQ3NCAyNC41IHExMTYgMCAxMTYgLTE1N3YtMzcxek0xNTM2IDExMjB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA4ZDsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNNDgwIDY3MnY0NDhxMCAxNCAtOSAyM3QtMjMgOXQtMjMgLTl0LTkgLTIzdi00NDhxMCAtMTQgOSAtMjN0MjMgLTl0MjMgOXQ5IDIzek0xMTUyIDMyMHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTQyOWwtNTEgLTQ4M3EtMiAtMTIgLTEwLjUgLTIwLjV0LTIwLjUgLTguNWgtMXEtMjcgMCAtMzIgMjdsLTc2IDQ4NWgtNDA0cS0yNiAwIC00NSAxOXQtMTkgNDVxMCAxMjMgNzguNSAyMjEuNXQxNzcuNSA5OC41djUxMnEtNTIgMCAtOTAgMzggdC0zOCA5MHQzOCA5MHQ5MCAzOGg2NDBxNTIgMCA5MCAtMzh0MzggLTkwdC0zOCAtOTB0LTkwIC0zOHYtNTEycTk5IDAgMTc3LjUgLTk4LjV0NzguNSAtMjIxLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwOGU7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE0MDggNjA4di0zMjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTgzMnEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2ODMycTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg3MDRxMTQgMCAyMyAtOXQ5IC0yM3YtNjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtNzA0cS02NiAwIC0xMTMgLTQ3dC00NyAtMTEzdi04MzJxMCAtNjYgNDcgLTExM3QxMTMgLTQ3aDgzMnE2NiAwIDExMyA0N3Q0NyAxMTN2MzIwIHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzIC05dDkgLTIzek0xNzkyIDE0NzJ2LTUxMnEwIC0yNiAtMTkgLTQ1dC00NSAtMTl0LTQ1IDE5bC0xNzYgMTc2bC02NTIgLTY1MnEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC0xMTQgMTE0cS0xMCAxMCAtMTAgMjN0MTAgMjNsNjUyIDY1MmwtMTc2IDE3NnEtMTkgMTkgLTE5IDQ1dDE5IDQ1dDQ1IDE5aDUxMnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwOTA7IiBkPSJNMTE4NCA2NDBxMCAtMjYgLTE5IC00NWwtNTQ0IC01NDRxLTE5IC0xOSAtNDUgLTE5dC00NSAxOXQtMTkgNDV2Mjg4aC00NDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYzODRxMCAyNiAxOSA0NXQ0NSAxOWg0NDh2Mjg4cTAgMjYgMTkgNDV0NDUgMTl0NDUgLTE5bDU0NCAtNTQ0cTE5IC0xOSAxOSAtNDV6TTE1MzYgOTkydi03MDRxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTMyMHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41IHEwIDQgLTEgMjB0LTAuNSAyNi41dDMgMjMuNXQxMCAxOS41dDIwLjUgNi41aDMyMHE2NiAwIDExMyA0N3Q0NyAxMTN2NzA0cTAgNjYgLTQ3IDExM3QtMTEzIDQ3aC0yODhoLTExaC0xM3QtMTEuNSAxdC0xMS41IDN0LTggNS41dC03IDl0LTIgMTMuNXEwIDQgLTEgMjB0LTAuNSAyNi41dDMgMjMuNXQxMCAxOS41dDIwLjUgNi41aDMyMHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA5MTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNDU4IDY1M3EtNzQgMTYyIC03NCAzNzFoLTI1NnYtOTZxMCAtNzggOTQuNSAtMTYydDIzNS41IC0xMTN6TTE1MzYgOTI4djk2aC0yNTZxMCAtMjA5IC03NCAtMzcxcTE0MSAyOSAyMzUuNSAxMTN0OTQuNSAxNjJ6TTE2NjQgMTA1NnYtMTI4cTAgLTcxIC00MS41IC0xNDN0LTExMiAtMTMwdC0xNzMgLTk3LjV0LTIxNS41IC00NC41cS00MiAtNTQgLTk1IC05NXEtMzggLTM0IC01Mi41IC03Mi41dC0xNC41IC04OS41cTAgLTU0IDMwLjUgLTkxIHQ5Ny41IC0zN3E3NSAwIDEzMy41IC00NS41dDU4LjUgLTExNC41di02NHEwIC0xNCAtOSAtMjN0LTIzIC05aC04MzJxLTE0IDAgLTIzIDl0LTkgMjN2NjRxMCA2OSA1OC41IDExNC41dDEzMy41IDQ1LjVxNjcgMCA5Ny41IDM3dDMwLjUgOTFxMCA1MSAtMTQuNSA4OS41dC01Mi41IDcyLjVxLTUzIDQxIC05NSA5NXEtMTEzIDUgLTIxNS41IDQ0LjV0LTE3MyA5Ny41dC0xMTIgMTMwdC00MS41IDE0M3YxMjhxMCA0MCAyOCA2OHQ2OCAyOGgyODh2OTYgcTAgNjYgNDcgMTEzdDExMyA0N2g1NzZxNjYgMCAxMTMgLTQ3dDQ3IC0xMTN2LTk2aDI4OHE0MCAwIDY4IC0yOHQyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwOTI7IiBkPSJNMzk0IDE4NHEtOCAtOSAtMjAgM3EtMTMgMTEgLTQgMTlxOCA5IDIwIC0zcTEyIC0xMSA0IC0xOXpNMzUyIDI0NXE5IC0xMiAwIC0xOXEtOCAtNiAtMTcgN3QwIDE4cTkgNyAxNyAtNnpNMjkxIDMwNXEtNSAtNyAtMTMgLTJxLTEwIDUgLTcgMTJxMyA1IDEzIDJxMTAgLTUgNyAtMTJ6TTMyMiAyNzFxLTYgLTcgLTE2IDNxLTkgMTEgLTIgMTZxNiA2IDE2IC0zcTkgLTExIDIgLTE2ek00NTEgMTU5cS00IC0xMiAtMTkgLTZxLTE3IDQgLTEzIDE1IHQxOSA3cTE2IC01IDEzIC0xNnpNNTE0IDE1NHEwIC0xMSAtMTYgLTExcS0xNyAtMiAtMTcgMTFxMCAxMSAxNiAxMXExNyAyIDE3IC0xMXpNNTcyIDE2NHEyIC0xMCAtMTQgLTE0dC0xOCA4dDE0IDE1cTE2IDIgMTggLTl6TTE1MzYgMTEyMHYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC0yMjRxLTE2IDAgLTI0LjUgMXQtMTkuNSA1dC0xNiAxNC41dC01IDI3LjV2MjM5cTAgOTcgLTUyIDE0MnE1NyA2IDEwMi41IDE4dDk0IDM5IHQ4MSA2Ni41dDUzIDEwNXQyMC41IDE1MC41cTAgMTIxIC03OSAyMDZxMzcgOTEgLTggMjA0cS0yOCA5IC04MSAtMTF0LTkyIC00NGwtMzggLTI0cS05MyAyNiAtMTkyIDI2dC0xOTIgLTI2cS0xNiAxMSAtNDIuNSAyN3QtODMuNSAzOC41dC04NiAxMy41cS00NCAtMTEzIC03IC0yMDRxLTc5IC04NSAtNzkgLTIwNnEwIC04NSAyMC41IC0xNTB0NTIuNSAtMTA1dDgwLjUgLTY3dDk0IC0zOXQxMDIuNSAtMThxLTQwIC0zNiAtNDkgLTEwMyBxLTIxIC0xMCAtNDUgLTE1dC01NyAtNXQtNjUuNSAyMS41dC01NS41IDYyLjVxLTE5IDMyIC00OC41IDUydC00OS41IDI0bC0yMCAzcS0yMSAwIC0yOSAtNC41dC01IC0xMS41dDkgLTE0dDEzIC0xMmw3IC01cTIyIC0xMCA0My41IC0zOHQzMS41IC01MWwxMCAtMjNxMTMgLTM4IDQ0IC02MS41dDY3IC0zMHQ2OS41IC03dDU1LjUgMy41bDIzIDRxMCAtMzggMC41IC0xMDN0MC41IC02OHEwIC0yMiAtMTEgLTMzLjV0LTIyIC0xM3QtMzMgLTEuNSBoLTIyNHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwOTM7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTEyODAgNjRxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1ek0xNTM2IDY0cTAgMjYgLTE5IDQ1dC00NSAxOXQtNDUgLTE5dC0xOSAtNDV0MTkgLTQ1dDQ1IC0xOXQ0NSAxOXQxOSA0NXpNMTY2NCAyODh2LTMyMHEwIC00MCAtMjggLTY4dC02OCAtMjhoLTE0NzJxLTQwIDAgLTY4IDI4dC0yOCA2OHYzMjBxMCA0MCAyOCA2OHQ2OCAyOGg0MjdxMjEgLTU2IDcwLjUgLTkyIHQxMTAuNSAtMzZoMjU2cTYxIDAgMTEwLjUgMzZ0NzAuNSA5Mmg0MjdxNDAgMCA2OCAtMjh0MjggLTY4ek0xMzM5IDkzNnEtMTcgLTQwIC01OSAtNDBoLTI1NnYtNDQ4cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMjU2cS0yNiAwIC00NSAxOXQtMTkgNDV2NDQ4aC0yNTZxLTQyIDAgLTU5IDQwcS0xNyAzOSAxNCA2OWw0NDggNDQ4cTE4IDE5IDQ1IDE5dDQ1IC0xOWw0NDggLTQ0OHEzMSAtMzAgMTQgLTY5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDk0OyIgZD0iTTE0MDcgNzEwcTAgNDQgLTcgMTEzLjV0LTE4IDk2LjVxLTEyIDMwIC0xNyA0NHQtOSAzNi41dC00IDQ4LjVxMCAyMyA1IDY4LjV0NSA2Ny41cTAgMzcgLTEwIDU1cS00IDEgLTEzIDFxLTE5IDAgLTU4IC00LjV0LTU5IC00LjVxLTYwIDAgLTE3NiAyNHQtMTc1IDI0cS00MyAwIC05NC41IC0xMS41dC04NSAtMjMuNXQtODkuNSAtMzRxLTEzNyAtNTQgLTIwMiAtMTAzcS05NiAtNzMgLTE1OS41IC0xODkuNXQtODggLTIzNnQtMjQuNSAtMjQ4LjUgcTAgLTQwIDEyLjUgLTEyMHQxMi41IC0xMjFxMCAtMjMgLTExIC02Ni41dC0xMSAtNjUuNXQxMiAtMzYuNXQzNCAtMTQuNXEyNCAwIDcyLjUgMTF0NzMuNSAxMXE1NyAwIDE2OS41IC0xNS41dDE2OS41IC0xNS41cTE4MSAwIDI4NCAzNnExMjkgNDUgMjM1LjUgMTUyLjV0MTY2IDI0NS41dDU5LjUgMjc1ek0xNTM1IDcxMnEwIC0xNjUgLTcwIC0zMjcuNXQtMTk2IC0yODh0LTI4MSAtMTgwLjVxLTEyNCAtNDQgLTMyNiAtNDQgcS01NyAwIC0xNzAgMTQuNXQtMTY5IDE0LjVxLTI0IDAgLTcyLjUgLTE0LjV0LTczLjUgLTE0LjVxLTczIDAgLTEyMy41IDU1LjV0LTUwLjUgMTI4LjVxMCAyNCAxMSA2OHQxMSA2N3EwIDQwIC0xMi41IDEyMC41dC0xMi41IDEyMS41cTAgMTExIDE4IDIxNy41dDU0LjUgMjA5LjV0MTAwLjUgMTk0dDE1MCAxNTZxNzggNTkgMjMyIDEyMHExOTQgNzggMzE2IDc4cTYwIDAgMTc1LjUgLTI0dDE3My41IC0yNHExOSAwIDU3IDV0NTggNSBxODEgMCAxMTggLTUwLjV0MzcgLTEzNC41cTAgLTIzIC01IC02OHQtNSAtNjhxMCAtMTAgMSAtMTguNXQzIC0xN3Q0IC0xMy41dDYuNSAtMTZ0Ni41IC0xN3ExNiAtNDAgMjUgLTExOC41dDkgLTEzNi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDk1OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xNDA4IDI5NnEwIC0yNyAtMTAgLTcwLjV0LTIxIC02OC41cS0yMSAtNTAgLTEyMiAtMTA2cS05NCAtNTEgLTE4NiAtNTFxLTI3IDAgLTUyLjUgMy41dC01Ny41IDEyLjV0LTQ3LjUgMTQuNXQtNTUuNSAyMC41dC00OSAxOHEtOTggMzUgLTE3NSA4M3EtMTI4IDc5IC0yNjQuNSAyMTUuNXQtMjE1LjUgMjY0LjVxLTQ4IDc3IC04MyAxNzVxLTMgOSAtMTggNDl0LTIwLjUgNTUuNXQtMTQuNSA0Ny41dC0xMi41IDU3LjV0LTMuNSA1Mi41IHEwIDkyIDUxIDE4NnE1NiAxMDEgMTA2IDEyMnEyNSAxMSA2OC41IDIxdDcwLjUgMTBxMTQgMCAyMSAtM3ExOCAtNiA1MyAtNzZxMTEgLTE5IDMwIC01NHQzNSAtNjMuNXQzMSAtNTMuNXEzIC00IDE3LjUgLTI1dDIxLjUgLTM1LjV0NyAtMjguNXEwIC0yMCAtMjguNSAtNTB0LTYyIC01NXQtNjIgLTUzdC0yOC41IC00NnEwIC05IDUgLTIyLjV0OC41IC0yMC41dDE0IC0yNHQxMS41IC0xOXE3NiAtMTM3IDE3NCAtMjM1dDIzNSAtMTc0IHEyIC0xIDE5IC0xMS41dDI0IC0xNHQyMC41IC04LjV0MjIuNSAtNXExOCAwIDQ2IDI4LjV0NTMgNjJ0NTUgNjJ0NTAgMjguNXExNCAwIDI4LjUgLTd0MzUuNSAtMjEuNXQyNSAtMTcuNXEyNSAtMTUgNTMuNSAtMzF0NjMuNSAtMzV0NTQgLTMwcTcwIC0zNSA3NiAtNTNxMyAtNyAzIC0yMXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA5NjsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNMTEyMCAxMjgwaC04MzJxLTY2IDAgLTExMyAtNDd0LTQ3IC0xMTN2LTgzMnEwIC02NiA0NyAtMTEzdDExMyAtNDdoODMycTY2IDAgMTEzIDQ3dDQ3IDExM3Y4MzJxMCA2NiAtNDcgMTEzdC0xMTMgNDd6TTE0MDggMTEyMHYtODMycTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC04MzJxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djgzMnEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoODMyIHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA5NzsiIGhvcml6LWFkdi14PSIxMjgwIiBkPSJNMTE1MiAxMjgwaC0xMDI0di0xMjQybDQyMyA0MDZsODkgODVsODkgLTg1bDQyMyAtNDA2djEyNDJ6TTExNjQgMTQwOHEyMyAwIDQ0IC05cTMzIC0xMyA1Mi41IC00MXQxOS41IC02MnYtMTI4OXEwIC0zNCAtMTkuNSAtNjJ0LTUyLjUgLTQxcS0xOSAtOCAtNDQgLThxLTQ4IDAgLTgzIDMybC00NDEgNDI0bC00NDEgLTQyNHEtMzYgLTMzIC04MyAtMzNxLTIzIDAgLTQ0IDlxLTMzIDEzIC01Mi41IDQxdC0xOS41IDYydjEyODkgcTAgMzQgMTkuNSA2MnQ1Mi41IDQxcTIxIDkgNDQgOWgxMDQ4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDk4OyIgZD0iTTEyODAgMzQzcTAgMTEgLTIgMTZxLTMgOCAtMzguNSAyOS41dC04OC41IDQ5LjVsLTUzIDI5cS01IDMgLTE5IDEzdC0yNSAxNXQtMjEgNXEtMTggMCAtNDcgLTMyLjV0LTU3IC02NS41dC00NCAtMzNxLTcgMCAtMTYuNSAzLjV0LTE1LjUgNi41dC0xNyA5LjV0LTE0IDguNXEtOTkgNTUgLTE3MC41IDEyNi41dC0xMjYuNSAxNzAuNXEtMiAzIC04LjUgMTR0LTkuNSAxN3QtNi41IDE1LjV0LTMuNSAxNi41cTAgMTMgMjAuNSAzMy41dDQ1IDM4LjUgdDQ1IDM5LjV0MjAuNSAzNi41cTAgMTAgLTUgMjF0LTE1IDI1dC0xMyAxOXEtMyA2IC0xNSAyOC41dC0yNSA0NS41dC0yNi41IDQ3LjV0LTI1IDQwLjV0LTE2LjUgMTh0LTE2IDJxLTQ4IDAgLTEwMSAtMjJxLTQ2IC0yMSAtODAgLTk0LjV0LTM0IC0xMzAuNXEwIC0xNiAyLjUgLTM0dDUgLTMwLjV0OSAtMzN0MTAgLTI5LjV0MTIuNSAtMzN0MTEgLTMwcTYwIC0xNjQgMjE2LjUgLTMyMC41dDMyMC41IC0yMTYuNXE2IC0yIDMwIC0xMXQzMyAtMTIuNSB0MjkuNSAtMTB0MzMgLTl0MzAuNSAtNXQzNCAtMi41cTU3IDAgMTMwLjUgMzR0OTQuNSA4MHEyMiA1MyAyMiAxMDF6TTE1MzYgMTEyMHYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDk5OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNjIwIDExMjhxLTY3IC05OCAtMTYyIC0xNjdxMSAtMTQgMSAtNDJxMCAtMTMwIC0zOCAtMjU5LjV0LTExNS41IC0yNDguNXQtMTg0LjUgLTIxMC41dC0yNTggLTE0NnQtMzIzIC01NC41cS0yNzEgMCAtNDk2IDE0NXEzNSAtNCA3OCAtNHEyMjUgMCA0MDEgMTM4cS0xMDUgMiAtMTg4IDY0LjV0LTExNCAxNTkuNXEzMyAtNSA2MSAtNXE0MyAwIDg1IDExcS0xMTIgMjMgLTE4NS41IDExMS41dC03My41IDIwNS41djRxNjggLTM4IDE0NiAtNDEgcS02NiA0NCAtMTA1IDExNXQtMzkgMTU0cTAgODggNDQgMTYzcTEyMSAtMTQ5IDI5NC41IC0yMzguNXQzNzEuNSAtOTkuNXEtOCAzOCAtOCA3NHEwIDEzNCA5NC41IDIyOC41dDIyOC41IDk0LjVxMTQwIDAgMjM2IC0xMDJxMTA5IDIxIDIwNSA3OHEtMzcgLTExNSAtMTQyIC0xNzhxOTMgMTAgMTg2IDUweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDlhOyIgaG9yaXotYWR2LXg9Ijc2OCIgZD0iTTUxMSA5ODBoMjU3bC0zMCAtMjg0aC0yMjd2LTgyNGgtMzQxdjgyNGgtMTcwdjI4NGgxNzB2MTcxcTAgMTgyIDg2IDI3NS41dDI4MyA5My41aDIyN3YtMjg0aC0xNDJxLTM5IDAgLTYyLjUgLTYuNXQtMzQgLTIzLjV0LTEzLjUgLTM0LjV0LTMgLTQ5LjV2LTE0MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA5YjsiIGQ9Ik0xNTM2IDY0MHEwIC0yNTEgLTE0Ni41IC00NTEuNXQtMzc4LjUgLTI3Ny41cS0yNyAtNSAtMzkuNSA3dC0xMi41IDMwdjIxMXEwIDk3IC01MiAxNDJxNTcgNiAxMDIuNSAxOHQ5NCAzOXQ4MSA2Ni41dDUzIDEwNXQyMC41IDE1MC41cTAgMTIxIC03OSAyMDZxMzcgOTEgLTggMjA0cS0yOCA5IC04MSAtMTF0LTkyIC00NGwtMzggLTI0cS05MyAyNiAtMTkyIDI2dC0xOTIgLTI2cS0xNiAxMSAtNDIuNSAyN3QtODMuNSAzOC41dC04NiAxMy41IHEtNDQgLTExMyAtNyAtMjA0cS03OSAtODUgLTc5IC0yMDZxMCAtODUgMjAuNSAtMTUwdDUyLjUgLTEwNXQ4MC41IC02N3Q5NCAtMzl0MTAyLjUgLTE4cS00MCAtMzYgLTQ5IC0xMDNxLTIxIC0xMCAtNDUgLTE1dC01NyAtNXQtNjUuNSAyMS41dC01NS41IDYyLjVxLTE5IDMyIC00OC41IDUydC00OS41IDI0bC0yMCAzcS0yMSAwIC0yOSAtNC41dC01IC0xMS41dDkgLTE0dDEzIC0xMmw3IC01cTIyIC0xMCA0My41IC0zOHQzMS41IC01MWwxMCAtMjMgcTEzIC0zOCA0NCAtNjEuNXQ2NyAtMzB0NjkuNSAtN3Q1NS41IDMuNWwyMyA0cTAgLTM4IDAuNSAtODl0MC41IC01NHEwIC0xOCAtMTMgLTMwdC00MCAtN3EtMjMyIDc3IC0zNzguNSAyNzcuNXQtMTQ2LjUgNDUxLjVxMCAyMDkgMTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDljOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNjY0IDk2MHYtMjU2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtNjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXYyNTZxMCAxMDYgLTc1IDE4MXQtMTgxIDc1dC0xODEgLTc1dC03NSAtMTgxdi0xOTJoOTZxNDAgMCA2OCAtMjh0MjggLTY4di01NzZxMCAtNDAgLTI4IC02OHQtNjggLTI4aC05NjBxLTQwIDAgLTY4IDI4dC0yOCA2OHY1NzZxMCA0MCAyOCA2OHQ2OCAyOGg2NzJ2MTkycTAgMTg1IDEzMS41IDMxNi41dDMxNi41IDEzMS41IHQzMTYuNSAtMTMxLjV0MTMxLjUgLTMxNi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMDlkOyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik0xNzYwIDE0MDhxNjYgMCAxMTMgLTQ3dDQ3IC0xMTN2LTEyMTZxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTE2MDBxLTY2IDAgLTExMyA0N3QtNDcgMTEzdjEyMTZxMCA2NiA0NyAxMTN0MTEzIDQ3aDE2MDB6TTE2MCAxMjgwcS0xMyAwIC0yMi41IC05LjV0LTkuNSAtMjIuNXYtMjI0aDE2NjR2MjI0cTAgMTMgLTkuNSAyMi41dC0yMi41IDkuNWgtMTYwMHpNMTc2MCAwcTEzIDAgMjIuNSA5LjV0OS41IDIyLjV2NjA4aC0xNjY0di02MDggcTAgLTEzIDkuNSAtMjIuNXQyMi41IC05LjVoMTYwMHpNMjU2IDEyOHYxMjhoMjU2di0xMjhoLTI1NnpNNjQwIDEyOHYxMjhoMzg0di0xMjhoLTM4NHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjA5ZTsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNMzg0IDE5MnEwIC04MCAtNTYgLTEzNnQtMTM2IC01NnQtMTM2IDU2dC01NiAxMzZ0NTYgMTM2dDEzNiA1NnQxMzYgLTU2dDU2IC0xMzZ6TTg5NiA2OXEyIC0yOCAtMTcgLTQ4cS0xOCAtMjEgLTQ3IC0yMWgtMTM1cS0yNSAwIC00MyAxNi41dC0yMCA0MS41cS0yMiAyMjkgLTE4NC41IDM5MS41dC0zOTEuNSAxODQuNXEtMjUgMiAtNDEuNSAyMHQtMTYuNSA0M3YxMzVxMCAyOSAyMSA0N3ExNyAxNyA0MyAxN2g1cTE2MCAtMTMgMzA2IC04MC41IHQyNTkgLTE4MS41cTExNCAtMTEzIDE4MS41IC0yNTl0ODAuNSAtMzA2ek0xNDA4IDY3cTIgLTI3IC0xOCAtNDdxLTE4IC0yMCAtNDYgLTIwaC0xNDNxLTI2IDAgLTQ0LjUgMTcuNXQtMTkuNSA0Mi41cS0xMiAyMTUgLTEwMSA0MDguNXQtMjMxLjUgMzM2dC0zMzYgMjMxLjV0LTQwOC41IDEwMnEtMjUgMSAtNDIuNSAxOS41dC0xNy41IDQzLjV2MTQzcTAgMjggMjAgNDZxMTggMTggNDQgMThoM3EyNjIgLTEzIDUwMS41IC0xMjB0NDI1LjUgLTI5NCBxMTg3IC0xODYgMjk0IC00MjUuNXQxMjAgLTUwMS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGEwOyIgZD0iTTEwNDAgMzIwcTAgLTMzIC0yMy41IC01Ni41dC01Ni41IC0yMy41dC01Ni41IDIzLjV0LTIzLjUgNTYuNXQyMy41IDU2LjV0NTYuNSAyMy41dDU2LjUgLTIzLjV0MjMuNSAtNTYuNXpNMTI5NiAzMjBxMCAtMzMgLTIzLjUgLTU2LjV0LTU2LjUgLTIzLjV0LTU2LjUgMjMuNXQtMjMuNSA1Ni41dDIzLjUgNTYuNXQ1Ni41IDIzLjV0NTYuNSAtMjMuNXQyMy41IC01Ni41ek0xNDA4IDE2MHYzMjBxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41IGgtMTIxNnEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTMyMHEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDEyMTZxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpNMTc4IDY0MGgxMTgwbC0xNTcgNDgycS00IDEzIC0xNiAyMS41dC0yNiA4LjVoLTc4MnEtMTQgMCAtMjYgLTguNXQtMTYgLTIxLjV6TTE1MzYgNDgwdi0zMjBxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTEyMTZxLTY2IDAgLTExMyA0N3QtNDcgMTEzdjMyMHEwIDI1IDE2IDc1IGwxOTcgNjA2cTE3IDUzIDYzIDg2dDEwMSAzM2g3ODJxNTUgMCAxMDEgLTMzdDYzIC04NmwxOTcgLTYwNnExNiAtNTAgMTYgLTc1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGExOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNjY0IDg5NnE1MyAwIDkwLjUgLTM3LjV0MzcuNSAtOTAuNXQtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNXYtMzg0cTAgLTUyIC0zOCAtOTB0LTkwIC0zOHEtNDE3IDM0NyAtODEyIDM4MHEtNTggLTE5IC05MSAtNjZ0LTMxIC0xMDAuNXQ0MCAtOTIuNXEtMjAgLTMzIC0yMyAtNjUuNXQ2IC01OHQzMy41IC01NXQ0OCAtNTB0NjEuNSAtNTAuNXEtMjkgLTU4IC0xMTEuNSAtODN0LTE2OC41IC0xMS41dC0xMzIgNTUuNXEtNyAyMyAtMjkuNSA4Ny41IHQtMzIgOTQuNXQtMjMgODl0LTE1IDEwMXQzLjUgOTguNXQyMiAxMTAuNWgtMTIycS02NiAwIC0xMTMgNDd0LTQ3IDExM3YxOTJxMCA2NiA0NyAxMTN0MTEzIDQ3aDQ4MHE0MzUgMCA4OTYgMzg0cTUyIDAgOTAgLTM4dDM4IC05MHYtMzg0ek0xNTM2IDI5MnY5NTRxLTM5NCAtMzAyIC03NjggLTM0M3YtMjcwcTM3NyAtNDIgNzY4IC0zNDF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYTI7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTg0OCAtMTYwcTAgMTYgLTE2IDE2cS01OSAwIC0xMDEuNSA0Mi41dC00Mi41IDEwMS41cTAgMTYgLTE2IDE2dC0xNiAtMTZxMCAtNzMgNTEuNSAtMTI0LjV0MTI0LjUgLTUxLjVxMTYgMCAxNiAxNnpNMTgzIDEyOGgxMjk4cS0xNjQgMTgxIC0yNDYuNSA0MTEuNXQtODIuNSA0ODQuNXEwIDI1NiAtMzIwIDI1NnQtMzIwIC0yNTZxMCAtMjU0IC04Mi41IC00ODQuNXQtMjQ2LjUgLTQxMS41ek0xNjY0IDEyOHEwIC01MiAtMzggLTkwdC05MCAtMzggaC00NDhxMCAtMTA2IC03NSAtMTgxdC0xODEgLTc1dC0xODEgNzV0LTc1IDE4MWgtNDQ4cS01MiAwIC05MCAzOHQtMzggOTBxMTkwIDE2MSAyODcgMzk3LjV0OTcgNDk4LjVxMCAxNjUgOTYgMjYydDI2NCAxMTdxLTggMTggLTggMzdxMCA0MCAyOCA2OHQ2OCAyOHQ2OCAtMjh0MjggLTY4cTAgLTE5IC04IC0zN3ExNjggLTIwIDI2NCAtMTE3dDk2IC0yNjJxMCAtMjYyIDk3IC00OTguNXQyODcgLTM5Ny41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGEzOyIgZD0iTTEzNzYgNjQwbDEzOCAtMTM1cTMwIC0yOCAyMCAtNzBxLTEyIC00MSAtNTIgLTUxbC0xODggLTQ4bDUzIC0xODZxMTIgLTQxIC0xOSAtNzBxLTI5IC0zMSAtNzAgLTE5bC0xODYgNTNsLTQ4IC0xODhxLTEwIC00MCAtNTEgLTUycS0xMiAtMiAtMTkgLTJxLTMxIDAgLTUxIDIybC0xMzUgMTM4bC0xMzUgLTEzOHEtMjggLTMwIC03MCAtMjBxLTQxIDExIC01MSA1MmwtNDggMTg4bC0xODYgLTUzcS00MSAtMTIgLTcwIDE5cS0zMSAyOSAtMTkgNzAgbDUzIDE4NmwtMTg4IDQ4cS00MCAxMCAtNTIgNTFxLTEwIDQyIDIwIDcwbDEzOCAxMzVsLTEzOCAxMzVxLTMwIDI4IC0yMCA3MHExMiA0MSA1MiA1MWwxODggNDhsLTUzIDE4NnEtMTIgNDEgMTkgNzBxMjkgMzEgNzAgMTlsMTg2IC01M2w0OCAxODhxMTAgNDEgNTEgNTFxNDEgMTIgNzAgLTE5bDEzNSAtMTM5bDEzNSAxMzlxMjkgMzAgNzAgMTlxNDEgLTEwIDUxIC01MWw0OCAtMTg4bDE4NiA1M3E0MSAxMiA3MCAtMTlxMzEgLTI5IDE5IC03MCBsLTUzIC0xODZsMTg4IC00OHE0MCAtMTAgNTIgLTUxcTEwIC00MiAtMjAgLTcweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGE0OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0yNTYgMTkycTAgMjYgLTE5IDQ1dC00NSAxOXQtNDUgLTE5dC0xOSAtNDV0MTkgLTQ1dDQ1IC0xOXQ0NSAxOXQxOSA0NXpNMTY2NCA3NjhxMCA1MSAtMzkgODkuNXQtODkgMzguNWgtNTc2cTAgMjAgMTUgNDguNXQzMyA1NXQzMyA2OHQxNSA4NC41cTAgNjcgLTQ0LjUgOTcuNXQtMTE1LjUgMzAuNXEtMjQgMCAtOTAgLTEzOXEtMjQgLTQ0IC0zNyAtNjVxLTQwIC02NCAtMTEyIC0xNDVxLTcxIC04MSAtMTAxIC0xMDYgcS02OSAtNTcgLTE0MCAtNTdoLTMydi02NDBoMzJxNzIgMCAxNjcgLTMydDE5My41IC02NHQxNzkuNSAtMzJxMTg5IDAgMTg5IDE2N3EwIDI2IC01IDU2cTMwIDE2IDQ3LjUgNTIuNXQxNy41IDczLjV0LTE4IDY5cTUzIDUwIDUzIDExOXEwIDI1IC0xMCA1NS41dC0yNSA0Ny41aDMzMXE1MiAwIDkwIDM4dDM4IDkwek0xNzkyIDc2OXEwIC0xMDUgLTc1LjUgLTE4MXQtMTgwLjUgLTc2aC0xNjlxLTQgLTYyIC0zNyAtMTE5cTMgLTIxIDMgLTQzIHEwIC0xMDEgLTYwIC0xNzhxMSAtMTM5IC04NSAtMjE5LjV0LTIyNyAtODAuNXEtMTMzIDAgLTMyMiA2OXEtMTY0IDU5IC0yMjMgNTloLTI4OHEtNTMgMCAtOTAuNSAzNy41dC0zNy41IDkwLjV2NjQwcTAgNTMgMzcuNSA5MC41dDkwLjUgMzcuNWgyODhxMTAgMCAyMS41IDQuNXQyMy41IDE0dDIyLjUgMTh0MjQgMjIuNXQyMC41IDIxLjV0MTkgMjEuNXQxNCAxN3E2NSA3NCAxMDAgMTI5cTEzIDIxIDMzIDYydDM3IDcydDQwLjUgNjN0NTUgNDkuNSB0NjkuNSAxNy41cTEyNSAwIDIwNi41IC02N3Q4MS41IC0xODlxMCAtNjggLTIyIC0xMjhoMzc0cTEwNCAwIDE4MCAtNzZ0NzYgLTE3OXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBhNTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTM3NiAxMjhoMzJ2NjQwaC0zMnEtMzUgMCAtNjcuNSAxMnQtNjIuNSAzN3QtNTAgNDZ0LTQ5IDU0cS0yIDMgLTMuNSA0LjV0LTQgNC41dC00LjUgNXEtNzIgODEgLTExMiAxNDVxLTE0IDIyIC0zOCA2OHEtMSAzIC0xMC41IDIyLjV0LTE4LjUgMzZ0LTIwIDM1LjV0LTIxLjUgMzAuNXQtMTguNSAxMS41cS03MSAwIC0xMTUuNSAtMzAuNXQtNDQuNSAtOTcuNXEwIC00MyAxNSAtODQuNXQzMyAtNjh0MzMgLTU1dDE1IC00OC41aC01NzYgcS01MCAwIC04OSAtMzguNXQtMzkgLTg5LjVxMCAtNTIgMzggLTkwdDkwIC0zOGgzMzFxLTE1IC0xNyAtMjUgLTQ3LjV0LTEwIC01NS41cTAgLTY5IDUzIC0xMTlxLTE4IC0zMiAtMTggLTY5dDE3LjUgLTczLjV0NDcuNSAtNTIuNXEtNCAtMjQgLTQgLTU2cTAgLTg1IDQ4LjUgLTEyNnQxMzUuNSAtNDFxODQgMCAxODMgMzJ0MTk0IDY0dDE2NyAzMnpNMTY2NCAxOTJxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDUgdDQ1IC0xOXQ0NSAxOXQxOSA0NXpNMTc5MiA3Njh2LTY0MHEwIC01MyAtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNWgtMjg4cS01OSAwIC0yMjMgLTU5cS0xOTAgLTY5IC0zMTcgLTY5cS0xNDIgMCAtMjMwIDc3LjV0LTg3IDIxNy41bDEgNXEtNjEgNzYgLTYxIDE3OHEwIDIyIDMgNDNxLTMzIDU3IC0zNyAxMTloLTE2OXEtMTA1IDAgLTE4MC41IDc2dC03NS41IDE4MXEwIDEwMyA3NiAxNzl0MTgwIDc2aDM3NHEtMjIgNjAgLTIyIDEyOCBxMCAxMjIgODEuNSAxODl0MjA2LjUgNjdxMzggMCA2OS41IC0xNy41dDU1IC00OS41dDQwLjUgLTYzdDM3IC03MnQzMyAtNjJxMzUgLTU1IDEwMCAtMTI5cTIgLTMgMTQgLTE3dDE5IC0yMS41dDIwLjUgLTIxLjV0MjQgLTIyLjV0MjIuNSAtMTh0MjMuNSAtMTR0MjEuNSAtNC41aDI4OHE1MyAwIDkwLjUgLTM3LjV0MzcuNSAtOTAuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBhNjsiIGQ9Ik0xMjgwIC02NHEwIDI2IC0xOSA0NXQtNDUgMTl0LTQ1IC0xOXQtMTkgLTQ1dDE5IC00NXQ0NSAtMTl0NDUgMTl0MTkgNDV6TTE0MDggNzAwcTAgMTg5IC0xNjcgMTg5cS0yNiAwIC01NiAtNXEtMTYgMzAgLTUyLjUgNDcuNXQtNzMuNSAxNy41dC02OSAtMThxLTUwIDUzIC0xMTkgNTNxLTI1IDAgLTU1LjUgLTEwdC00Ny41IC0yNXYzMzFxMCA1MiAtMzggOTB0LTkwIDM4cS01MSAwIC04OS41IC0zOXQtMzguNSAtODl2LTU3NiBxLTIwIDAgLTQ4LjUgMTV0LTU1IDMzdC02OCAzM3QtODQuNSAxNXEtNjcgMCAtOTcuNSAtNDQuNXQtMzAuNSAtMTE1LjVxMCAtMjQgMTM5IC05MHE0NCAtMjQgNjUgLTM3cTY0IC00MCAxNDUgLTExMnE4MSAtNzEgMTA2IC0xMDFxNTcgLTY5IDU3IC0xNDB2LTMyaDY0MHYzMnEwIDcyIDMyIDE2N3Q2NCAxOTMuNXQzMiAxNzkuNXpNMTUzNiA3MDVxMCAtMTMzIC02OSAtMzIycS01OSAtMTY0IC01OSAtMjIzdi0yODhxMCAtNTMgLTM3LjUgLTkwLjUgdC05MC41IC0zNy41aC02NDBxLTUzIDAgLTkwLjUgMzcuNXQtMzcuNSA5MC41djI4OHEwIDEwIC00LjUgMjEuNXQtMTQgMjMuNXQtMTggMjIuNXQtMjIuNSAyNHQtMjEuNSAyMC41dC0yMS41IDE5dC0xNyAxNHEtNzQgNjUgLTEyOSAxMDBxLTIxIDEzIC02MiAzM3QtNzIgMzd0LTYzIDQwLjV0LTQ5LjUgNTV0LTE3LjUgNjkuNXEwIDEyNSA2NyAyMDYuNXQxODkgODEuNXE2OCAwIDEyOCAtMjJ2Mzc0cTAgMTA0IDc2IDE4MHQxNzkgNzYgcTEwNSAwIDE4MSAtNzUuNXQ3NiAtMTgwLjV2LTE2OXE2MiAtNCAxMTkgLTM3cTIxIDMgNDMgM3ExMDEgMCAxNzggLTYwcTEzOSAxIDIxOS41IC04NXQ4MC41IC0yMjd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYTc7IiBkPSJNMTQwOCA1NzZxMCA4NCAtMzIgMTgzdC02NCAxOTR0LTMyIDE2N3YzMmgtNjQwdi0zMnEwIC0zNSAtMTIgLTY3LjV0LTM3IC02Mi41dC00NiAtNTB0LTU0IC00OXEtOSAtOCAtMTQgLTEycS04MSAtNzIgLTE0NSAtMTEycS0yMiAtMTQgLTY4IC0zOHEtMyAtMSAtMjIuNSAtMTAuNXQtMzYgLTE4LjV0LTM1LjUgLTIwdC0zMC41IC0yMS41dC0xMS41IC0xOC41cTAgLTcxIDMwLjUgLTExNS41dDk3LjUgLTQ0LjVxNDMgMCA4NC41IDE1dDY4IDMzIHQ1NSAzM3Q0OC41IDE1di01NzZxMCAtNTAgMzguNSAtODl0ODkuNSAtMzlxNTIgMCA5MCAzOHQzOCA5MHYzMzFxNDYgLTM1IDEwMyAtMzVxNjkgMCAxMTkgNTNxMzIgLTE4IDY5IC0xOHQ3My41IDE3LjV0NTIuNSA0Ny41cTI0IC00IDU2IC00cTg1IDAgMTI2IDQ4LjV0NDEgMTM1LjV6TTEyODAgMTM0NHEwIDI2IC0xOSA0NXQtNDUgMTl0LTQ1IC0xOXQtMTkgLTQ1dDE5IC00NXQ0NSAtMTl0NDUgMTl0MTkgNDV6TTE1MzYgNTgwIHEwIC0xNDIgLTc3LjUgLTIzMHQtMjE3LjUgLTg3bC01IDFxLTc2IC02MSAtMTc4IC02MXEtMjIgMCAtNDMgM3EtNTQgLTMwIC0xMTkgLTM3di0xNjlxMCAtMTA1IC03NiAtMTgwLjV0LTE4MSAtNzUuNXEtMTAzIDAgLTE3OSA3NnQtNzYgMTgwdjM3NHEtNTQgLTIyIC0xMjggLTIycS0xMjEgMCAtMTg4LjUgODEuNXQtNjcuNSAyMDYuNXEwIDM4IDE3LjUgNjkuNXQ0OS41IDU1dDYzIDQwLjV0NzIgMzd0NjIgMzNxNTUgMzUgMTI5IDEwMCBxMyAyIDE3IDE0dDIxLjUgMTl0MjEuNSAyMC41dDIyLjUgMjR0MTggMjIuNXQxNCAyMy41dDQuNSAyMS41djI4OHEwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjVoNjQwcTUzIDAgOTAuNSAtMzcuNXQzNy41IC05MC41di0yODhxMCAtNTkgNTkgLTIyM3E2OSAtMTkwIDY5IC0zMTd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYTg7IiBkPSJNMTI4MCA1NzZ2MTI4cTAgMjYgLTE5IDQ1dC00NSAxOWgtNTAybDE4OSAxODlxMTkgMTkgMTkgNDV0LTE5IDQ1bC05MSA5MXEtMTggMTggLTQ1IDE4dC00NSAtMThsLTM2MiAtMzYybC05MSAtOTFxLTE4IC0xOCAtMTggLTQ1dDE4IC00NWw5MSAtOTFsMzYyIC0zNjJxMTggLTE4IDQ1IC0xOHQ0NSAxOGw5MSA5MXExOCAxOCAxOCA0NXQtMTggNDVsLTE4OSAxODloNTAycTI2IDAgNDUgMTl0MTkgNDV6TTE1MzYgNjQwIHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBhOTsiIGQ9Ik0xMjg1IDY0MHEwIDI3IC0xOCA0NWwtOTEgOTFsLTM2MiAzNjJxLTE4IDE4IC00NSAxOHQtNDUgLTE4bC05MSAtOTFxLTE4IC0xOCAtMTggLTQ1dDE4IC00NWwxODkgLTE4OWgtNTAycS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMTI4cTAgLTI2IDE5IC00NXQ0NSAtMTloNTAybC0xODkgLTE4OXEtMTkgLTE5IC0xOSAtNDV0MTkgLTQ1bDkxIC05MXExOCAtMTggNDUgLTE4dDQ1IDE4bDM2MiAzNjJsOTEgOTFxMTggMTggMTggNDV6TTE1MzYgNjQwIHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBhYTsiIGQ9Ik0xMjg0IDY0MXEwIDI3IC0xOCA0NWwtMzYyIDM2MmwtOTEgOTFxLTE4IDE4IC00NSAxOHQtNDUgLTE4bC05MSAtOTFsLTM2MiAtMzYycS0xOCAtMTggLTE4IC00NXQxOCAtNDVsOTEgLTkxcTE4IC0xOCA0NSAtMTh0NDUgMThsMTg5IDE4OXYtNTAycTAgLTI2IDE5IC00NXQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV2NTAybDE4OSAtMTg5cTE5IC0xOSA0NSAtMTl0NDUgMTlsOTEgOTFxMTggMTggMTggNDV6TTE1MzYgNjQwIHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBhYjsiIGQ9Ik0xMjg0IDYzOXEwIDI3IC0xOCA0NWwtOTEgOTFxLTE4IDE4IC00NSAxOHQtNDUgLTE4bC0xODkgLTE4OXY1MDJxMCAyNiAtMTkgNDV0LTQ1IDE5aC0xMjhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di01MDJsLTE4OSAxODlxLTE5IDE5IC00NSAxOXQtNDUgLTE5bC05MSAtOTFxLTE4IC0xOCAtMTggLTQ1dDE4IC00NWwzNjIgLTM2Mmw5MSAtOTFxMTggLTE4IDQ1IC0xOHQ0NSAxOGw5MSA5MWwzNjIgMzYycTE4IDE4IDE4IDQ1ek0xNTM2IDY0MCBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDN0Mjc5LjUgLTI3OS41dDEwMyAtMzg1LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYWM7IiBkPSJNNzY4IDE0MDhxMjA5IDAgMzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXQtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3pNMTA0MiA4ODdxLTIgLTEgLTkuNSAtOS41dC0xMy41IC05LjVxMiAwIDQuNSA1dDUgMTF0My41IDdxNiA3IDIyIDE1cTE0IDYgNTIgMTJxMzQgOCA1MSAtMTEgcS0yIDIgOS41IDEzdDE0LjUgMTJxMyAyIDE1IDQuNXQxNSA3LjVsMiAyMnEtMTIgLTEgLTE3LjUgN3QtNi41IDIxcTAgLTIgLTYgLThxMCA3IC00LjUgOHQtMTEuNSAtMXQtOSAtMXEtMTAgMyAtMTUgNy41dC04IDE2LjV0LTQgMTVxLTIgNSAtOS41IDEwLjV0LTkuNSAxMC41cS0xIDIgLTIuNSA1LjV0LTMgNi41dC00IDUuNXQtNS41IDIuNXQtNyAtNXQtNy41IC0xMHQtNC41IC01cS0zIDIgLTYgMS41dC00LjUgLTF0LTQuNSAtM3QtNSAtMy41IHEtMyAtMiAtOC41IC0zdC04LjUgLTJxMTUgNSAtMSAxMXEtMTAgNCAtMTYgM3E5IDQgNy41IDEydC04LjUgMTRoNXEtMSA0IC04LjUgOC41dC0xNy41IDguNXQtMTMgNnEtOCA1IC0zNCA5LjV0LTMzIDAuNXEtNSAtNiAtNC41IC0xMC41dDQgLTE0dDMuNSAtMTIuNXExIC02IC01LjUgLTEzdC02LjUgLTEycTAgLTcgMTQgLTE1LjV0MTAgLTIxLjVxLTMgLTggLTE2IC0xNnQtMTYgLTEycS01IC04IC0xLjUgLTE4LjV0MTAuNSAtMTYuNSBxMiAtMiAxLjUgLTR0LTMuNSAtNC41dC01LjUgLTR0LTYuNSAtMy41bC0zIC0ycS0xMSAtNSAtMjAuNSA2dC0xMy41IDI2cS03IDI1IC0xNiAzMHEtMjMgOCAtMjkgLTFxLTUgMTMgLTQxIDI2cS0yNSA5IC01OCA0cTYgMSAwIDE1cS03IDE1IC0xOSAxMnEzIDYgNCAxNy41dDEgMTMuNXEzIDEzIDEyIDIzcTEgMSA3IDguNXQ5LjUgMTMuNXQwLjUgNnEzNSAtNCA1MCAxMXE1IDUgMTEuNSAxN3QxMC41IDE3cTkgNiAxNCA1LjV0MTQuNSAtNS41IHQxNC41IC01cTE0IC0xIDE1LjUgMTF0LTcuNSAyMHExMiAtMSAzIDE3cS01IDcgLTggOXEtMTIgNCAtMjcgLTVxLTggLTQgMiAtOHEtMSAxIC05LjUgLTEwLjV0LTE2LjUgLTE3LjV0LTE2IDVxLTEgMSAtNS41IDEzLjV0LTkuNSAxMy41cS04IDAgLTE2IC0xNXEzIDggLTExIDE1dC0yNCA4cTE5IDEyIC04IDI3cS03IDQgLTIwLjUgNXQtMTkuNSAtNHEtNSAtNyAtNS41IC0xMS41dDUgLTh0MTAuNSAtNS41dDExLjUgLTR0OC41IC0zIHExNCAtMTAgOCAtMTRxLTIgLTEgLTguNSAtMy41dC0xMS41IC00LjV0LTYgLTRxLTMgLTQgMCAtMTR0LTIgLTE0cS01IDUgLTkgMTcuNXQtNyAxNi41cTcgLTkgLTI1IC02bC0xMCAxcS00IDAgLTE2IC0ydC0yMC41IC0xdC0xMy41IDhxLTQgOCAwIDIwcTEgNCA0IDJxLTQgMyAtMTEgOS41dC0xMCA4LjVxLTQ2IC0xNSAtOTQgLTQxcTYgLTEgMTIgMXE1IDIgMTMgNi41dDEwIDUuNXEzNCAxNCA0MiA3bDUgNXExNCAtMTYgMjAgLTI1IHEtNyA0IC0zMCAxcS0yMCAtNiAtMjIgLTEycTcgLTEyIDUgLTE4cS00IDMgLTExLjUgMTB0LTE0LjUgMTF0LTE1IDVxLTE2IDAgLTIyIC0xcS0xNDYgLTgwIC0yMzUgLTIyMnE3IC03IDEyIC04cTQgLTEgNSAtOXQyLjUgLTExdDExLjUgM3E5IC04IDMgLTE5cTEgMSA0NCAtMjdxMTkgLTE3IDIxIC0yMXEzIC0xMSAtMTAgLTE4cS0xIDIgLTkgOXQtOSA0cS0zIC01IDAuNSAtMTguNXQxMC41IC0xMi41cS03IDAgLTkuNSAtMTZ0LTIuNSAtMzUuNSB0LTEgLTIzLjVsMiAtMXEtMyAtMTIgNS41IC0zNC41dDIxLjUgLTE5LjVxLTEzIC0zIDIwIC00M3E2IC04IDggLTlxMyAtMiAxMiAtNy41dDE1IC0xMHQxMCAtMTAuNXE0IC01IDEwIC0yMi41dDE0IC0yMy41cS0yIC02IDkuNSAtMjB0MTAuNSAtMjNxLTEgMCAtMi41IC0xdC0yLjUgLTFxMyAtNyAxNS41IC0xNHQxNS41IC0xM3ExIC0zIDIgLTEwdDMgLTExdDggLTJxMiAyMCAtMjQgNjJxLTE1IDI1IC0xNyAyOXEtMyA1IC01LjUgMTUuNSB0LTQuNSAxNC41cTIgMCA2IC0xLjV0OC41IC0zLjV0Ny41IC00dDIgLTNxLTMgLTcgMiAtMTcuNXQxMiAtMTguNXQxNyAtMTl0MTIgLTEzcTYgLTYgMTQgLTE5LjV0MCAtMTMuNXE5IDAgMjAgLTEwdDE3IC0yMHE1IC04IDggLTI2dDUgLTI0cTIgLTcgOC41IC0xMy41dDEyLjUgLTkuNWwxNiAtOHQxMyAtN3E1IC0yIDE4LjUgLTEwLjV0MjEuNSAtMTEuNXExMCAtNCAxNiAtNHQxNC41IDIuNXQxMy41IDMuNXExNSAyIDI5IC0xNXQyMSAtMjEgcTM2IC0xOSA1NSAtMTFxLTIgLTEgMC41IC03LjV0OCAtMTUuNXQ5IC0xNC41dDUuNSAtOC41cTUgLTYgMTggLTE1dDE4IC0xNXE2IDQgNyA5cS0zIC04IDcgLTIwdDE4IC0xMHExNCAzIDE0IDMycS0zMSAtMTUgLTQ5IDE4cTAgMSAtMi41IDUuNXQtNCA4LjV0LTIuNSA4LjV0MCA3LjV0NSAzcTkgMCAxMCAzLjV0LTIgMTIuNXQtNCAxM3EtMSA4IC0xMSAyMHQtMTIgMTVxLTUgLTkgLTE2IC04dC0xNiA5cTAgLTEgLTEuNSAtNS41dC0xLjUgLTYuNSBxLTEzIDAgLTE1IDFxMSAzIDIuNSAxNy41dDMuNSAyMi41cTEgNCA1LjUgMTJ0Ny41IDE0LjV0NCAxMi41dC00LjUgOS41dC0xNy41IDIuNXEtMTkgLTEgLTI2IC0yMHEtMSAtMyAtMyAtMTAuNXQtNSAtMTEuNXQtOSAtN3EtNyAtMyAtMjQgLTJ0LTI0IDVxLTEzIDggLTIyLjUgMjl0LTkuNSAzN3EwIDEwIDIuNSAyNi41dDMgMjV0LTUuNSAyNC41cTMgMiA5IDkuNXQxMCAxMC41cTIgMSA0LjUgMS41dDQuNSAwdDQgMS41dDMgNnEtMSAxIC00IDMgcS0zIDMgLTQgM3E3IC0zIDI4LjUgMS41dDI3LjUgLTEuNXExNSAtMTEgMjIgMnEwIDEgLTIuNSA5LjV0LTAuNSAxMy41cTUgLTI3IDI5IC05cTMgLTMgMTUuNSAtNXQxNy41IC01cTMgLTIgNyAtNS41dDUuNSAtNC41dDUgMC41dDguNSA2LjVxMTAgLTE0IDEyIC0yNHExMSAtNDAgMTkgLTQ0cTcgLTMgMTEgLTJ0NC41IDkuNXQwIDE0dC0xLjUgMTIuNWwtMSA4djE4bC0xIDhxLTE1IDMgLTE4LjUgMTJ0MS41IDE4LjV0MTUgMTguNXExIDEgOCAzLjUgdDE1LjUgNi41dDEyLjUgOHEyMSAxOSAxNSAzNXE3IDAgMTEgOXEtMSAwIC01IDN0LTcuNSA1dC00LjUgMnE5IDUgMiAxNnE1IDMgNy41IDExdDcuNSAxMHE5IC0xMiAyMSAtMnE3IDggMSAxNnE1IDcgMjAuNSAxMC41dDE4LjUgOS41cTcgLTIgOCAydDEgMTJ0MyAxMnE0IDUgMTUgOXQxMyA1bDE3IDExcTMgNCAwIDRxMTggLTIgMzEgMTFxMTAgMTEgLTYgMjBxMyA2IC0zIDkuNXQtMTUgNS41cTMgMSAxMS41IDAuNXQxMC41IDEuNSBxMTUgMTAgLTcgMTZxLTE3IDUgLTQzIC0xMnpNODc5IDEwcTIwNiAzNiAzNTEgMTg5cS0zIDMgLTEyLjUgNC41dC0xMi41IDMuNXEtMTggNyAtMjQgOHExIDcgLTIuNSAxM3QtOCA5dC0xMi41IDh0LTExIDdxLTIgMiAtNyA2dC03IDUuNXQtNy41IDQuNXQtOC41IDJ0LTEwIC0xbC0zIC0xcS0zIC0xIC01LjUgLTIuNXQtNS41IC0zdC00IC0zdDAgLTIuNXEtMjEgMTcgLTM2IDIycS01IDEgLTExIDUuNXQtMTAuNSA3dC0xMCAxLjV0LTExLjUgLTcgcS01IC01IC02IC0xNXQtMiAtMTNxLTcgNSAwIDE3LjV0MiAxOC41cS0zIDYgLTEwLjUgNC41dC0xMiAtNC41dC0xMS41IC04LjV0LTkgLTYuNXQtOC41IC01LjV0LTguNSAtNy41cS0zIC00IC02IC0xMnQtNSAtMTFxLTIgNCAtMTEuNSA2LjV0LTkuNSA1LjVxMiAtMTAgNCAtMzV0NSAtMzhxNyAtMzEgLTEyIC00OHEtMjcgLTI1IC0yOSAtNDBxLTQgLTIyIDEyIC0yNnEwIC03IC04IC0yMC41dC03IC0yMS41cTAgLTYgMiAtMTZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYWQ7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTM4NCA2NHEwIDI2IC0xOSA0NXQtNDUgMTl0LTQ1IC0xOXQtMTkgLTQ1dDE5IC00NXQ0NSAtMTl0NDUgMTl0MTkgNDV6TTEwMjggNDg0bC02ODIgLTY4MnEtMzcgLTM3IC05MCAtMzdxLTUyIDAgLTkxIDM3bC0xMDYgMTA4cS0zOCAzNiAtMzggOTBxMCA1MyAzOCA5MWw2ODEgNjgxcTM5IC05OCAxMTQuNSAtMTczLjV0MTczLjUgLTExNC41ek0xNjYyIDkxOXEwIC0zOSAtMjMgLTEwNnEtNDcgLTEzNCAtMTY0LjUgLTIxNy41IHQtMjU4LjUgLTgzLjVxLTE4NSAwIC0zMTYuNSAxMzEuNXQtMTMxLjUgMzE2LjV0MTMxLjUgMzE2LjV0MzE2LjUgMTMxLjVxNTggMCAxMjEuNSAtMTYuNXQxMDcuNSAtNDYuNXExNiAtMTEgMTYgLTI4dC0xNiAtMjhsLTI5MyAtMTY5di0yMjRsMTkzIC0xMDdxNSAzIDc5IDQ4LjV0MTM1LjUgODF0NzAuNSAzNS41cTE1IDAgMjMuNSAtMTB0OC41IC0yNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBhZTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTAyNCAxMjhoNjQwdjEyOGgtNjQwdi0xMjh6TTY0MCA2NDBoMTAyNHYxMjhoLTEwMjR2LTEyOHpNMTI4MCAxMTUyaDM4NHYxMjhoLTM4NHYtMTI4ek0xNzkyIDMyMHYtMjU2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTY2NHEtMjYgMCAtNDUgMTl0LTE5IDQ1djI1NnEwIDI2IDE5IDQ1dDQ1IDE5aDE2NjRxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNzkyIDgzMnYtMjU2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTY2NHEtMjYgMCAtNDUgMTkgdC0xOSA0NXYyNTZxMCAyNiAxOSA0NXQ0NSAxOWgxNjY0cTI2IDAgNDUgLTE5dDE5IC00NXpNMTc5MiAxMzQ0di0yNTZxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xNjY0cS0yNiAwIC00NSAxOXQtMTkgNDV2MjU2cTAgMjYgMTkgNDV0NDUgMTloMTY2NHEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYjA7IiBob3Jpei1hZHYteD0iMTQwOCIgZD0iTTE0MDMgMTI0MXExNyAtNDEgLTE0IC03MGwtNDkzIC00OTN2LTc0MnEwIC00MiAtMzkgLTU5cS0xMyAtNSAtMjUgLTVxLTI3IDAgLTQ1IDE5bC0yNTYgMjU2cS0xOSAxOSAtMTkgNDV2NDg2bC00OTMgNDkzcS0zMSAyOSAtMTQgNzBxMTcgMzkgNTkgMzloMTI4MHE0MiAwIDU5IC0zOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBiMTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNNjQwIDEyODBoNTEydjEyOGgtNTEydi0xMjh6TTE3OTIgNjQwdi00ODBxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTE0NzJxLTY2IDAgLTExMyA0N3QtNDcgMTEzdjQ4MGg2NzJ2LTE2MHEwIC0yNiAxOSAtNDV0NDUgLTE5aDMyMHEyNiAwIDQ1IDE5dDE5IDQ1djE2MGg2NzJ6TTEwMjQgNjQwdi0xMjhoLTI1NnYxMjhoMjU2ek0xNzkyIDExMjB2LTM4NGgtMTc5MnYzODRxMCA2NiA0NyAxMTN0MTEzIDQ3aDM1MnYxNjBxMCA0MCAyOCA2OCB0NjggMjhoNTc2cTQwIDAgNjggLTI4dDI4IC02OHYtMTYwaDM1MnE2NiAwIDExMyAtNDd0NDcgLTExM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBiMjsiIGQ9Ik0xMjgzIDk5NWwtMzU1IC0zNTVsMzU1IC0zNTVsMTQ0IDE0NHEyOSAzMSA3MCAxNHEzOSAtMTcgMzkgLTU5di00NDhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC00NDhxLTQyIDAgLTU5IDQwcS0xNyAzOSAxNCA2OWwxNDQgMTQ0bC0zNTUgMzU1bC0zNTUgLTM1NWwxNDQgLTE0NHEzMSAtMzAgMTQgLTY5cS0xNyAtNDAgLTU5IC00MGgtNDQ4cS0yNiAwIC00NSAxOXQtMTkgNDV2NDQ4cTAgNDIgNDAgNTlxMzkgMTcgNjkgLTE0bDE0NCAtMTQ0IGwzNTUgMzU1bC0zNTUgMzU1bC0xNDQgLTE0NHEtMTkgLTE5IC00NSAtMTlxLTEyIDAgLTI0IDVxLTQwIDE3IC00MCA1OXY0NDhxMCAyNiAxOSA0NXQ0NSAxOWg0NDhxNDIgMCA1OSAtNDBxMTcgLTM5IC0xNCAtNjlsLTE0NCAtMTQ0bDM1NSAtMzU1bDM1NSAzNTVsLTE0NCAxNDRxLTMxIDMwIC0xNCA2OXExNyA0MCA1OSA0MGg0NDhxMjYgMCA0NSAtMTl0MTkgLTQ1di00NDhxMCAtNDIgLTM5IC01OXEtMTMgLTUgLTI1IC01cS0yNiAwIC00NSAxOXogIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYzA7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTU5MyA2NDBxLTE2MiAtNSAtMjY1IC0xMjhoLTEzNHEtODIgMCAtMTM4IDQwLjV0LTU2IDExOC41cTAgMzUzIDEyNCAzNTNxNiAwIDQzLjUgLTIxdDk3LjUgLTQyLjV0MTE5IC0yMS41cTY3IDAgMTMzIDIzcS01IC0zNyAtNSAtNjZxMCAtMTM5IDgxIC0yNTZ6TTE2NjQgM3EwIC0xMjAgLTczIC0xODkuNXQtMTk0IC02OS41aC04NzRxLTEyMSAwIC0xOTQgNjkuNXQtNzMgMTg5LjVxMCA1MyAzLjUgMTAzLjV0MTQgMTA5dDI2LjUgMTA4LjUgdDQzIDk3LjV0NjIgODF0ODUuNSA1My41dDExMS41IDIwcTEwIDAgNDMgLTIxLjV0NzMgLTQ4dDEwNyAtNDh0MTM1IC0yMS41dDEzNSAyMS41dDEwNyA0OHQ3MyA0OHQ0MyAyMS41cTYxIDAgMTExLjUgLTIwdDg1LjUgLTUzLjV0NjIgLTgxdDQzIC05Ny41dDI2LjUgLTEwOC41dDE0IC0xMDl0My41IC0xMDMuNXpNNjQwIDEyODBxMCAtMTA2IC03NSAtMTgxdC0xODEgLTc1dC0xODEgNzV0LTc1IDE4MXQ3NSAxODF0MTgxIDc1dDE4MSAtNzUgdDc1IC0xODF6TTEzNDQgODk2cTAgLTE1OSAtMTEyLjUgLTI3MS41dC0yNzEuNSAtMTEyLjV0LTI3MS41IDExMi41dC0xMTIuNSAyNzEuNXQxMTIuNSAyNzEuNXQyNzEuNSAxMTIuNXQyNzEuNSAtMTEyLjV0MTEyLjUgLTI3MS41ek0xOTIwIDY3MXEwIC03OCAtNTYgLTExOC41dC0xMzggLTQwLjVoLTEzNHEtMTAzIDEyMyAtMjY1IDEyOHE4MSAxMTcgODEgMjU2cTAgMjkgLTUgNjZxNjYgLTIzIDEzMyAtMjNxNTkgMCAxMTkgMjEuNXQ5Ny41IDQyLjUgdDQzLjUgMjFxMTI0IDAgMTI0IC0zNTN6TTE3OTIgMTI4MHEwIC0xMDYgLTc1IC0xODF0LTE4MSAtNzV0LTE4MSA3NXQtNzUgMTgxdDc1IDE4MXQxODEgNzV0MTgxIC03NXQ3NSAtMTgxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGMxOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNDU2IDMyMHEwIDQwIC0yOCA2OGwtMjA4IDIwOHEtMjggMjggLTY4IDI4cS00MiAwIC03MiAtMzJxMyAtMyAxOSAtMTguNXQyMS41IC0yMS41dDE1IC0xOXQxMyAtMjUuNXQzLjUgLTI3LjVxMCAtNDAgLTI4IC02OHQtNjggLTI4cS0xNSAwIC0yNy41IDMuNXQtMjUuNSAxM3QtMTkgMTV0LTIxLjUgMjEuNXQtMTguNSAxOXEtMzMgLTMxIC0zMyAtNzNxMCAtNDAgMjggLTY4bDIwNiAtMjA3cTI3IC0yNyA2OCAtMjdxNDAgMCA2OCAyNiBsMTQ3IDE0NnEyOCAyOCAyOCA2N3pNNzUzIDEwMjVxMCA0MCAtMjggNjhsLTIwNiAyMDdxLTI4IDI4IC02OCAyOHEtMzkgMCAtNjggLTI3bC0xNDcgLTE0NnEtMjggLTI4IC0yOCAtNjdxMCAtNDAgMjggLTY4bDIwOCAtMjA4cTI3IC0yNyA2OCAtMjdxNDIgMCA3MiAzMXEtMyAzIC0xOSAxOC41dC0yMS41IDIxLjV0LTE1IDE5dC0xMyAyNS41dC0zLjUgMjcuNXEwIDQwIDI4IDY4dDY4IDI4cTE1IDAgMjcuNSAtMy41dDI1LjUgLTEzdDE5IC0xNSB0MjEuNSAtMjEuNXQxOC41IC0xOXEzMyAzMSAzMyA3M3pNMTY0OCAzMjBxMCAtMTIwIC04NSAtMjAzbC0xNDcgLTE0NnEtODMgLTgzIC0yMDMgLTgzcS0xMjEgMCAtMjA0IDg1bC0yMDYgMjA3cS04MyA4MyAtODMgMjAzcTAgMTIzIDg4IDIwOWwtODggODhxLTg2IC04OCAtMjA4IC04OHEtMTIwIDAgLTIwNCA4NGwtMjA4IDIwOHEtODQgODQgLTg0IDIwNHQ4NSAyMDNsMTQ3IDE0NnE4MyA4MyAyMDMgODNxMTIxIDAgMjA0IC04NWwyMDYgLTIwNyBxODMgLTgzIDgzIC0yMDNxMCAtMTIzIC04OCAtMjA5bDg4IC04OHE4NiA4OCAyMDggODhxMTIwIDAgMjA0IC04NGwyMDggLTIwOHE4NCAtODQgODQgLTIwNHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjMjsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNMTkyMCAzODRxMCAtMTU5IC0xMTIuNSAtMjcxLjV0LTI3MS41IC0xMTIuNWgtMTA4OHEtMTg1IDAgLTMxNi41IDEzMS41dC0xMzEuNSAzMTYuNXEwIDEzMiA3MSAyNDEuNXQxODcgMTYzLjVxLTIgMjggLTIgNDNxMCAyMTIgMTUwIDM2MnQzNjIgMTUwcTE1OCAwIDI4Ni41IC04OHQxODcuNSAtMjMwcTcwIDYyIDE2NiA2MnExMDYgMCAxODEgLTc1dDc1IC0xODFxMCAtNzUgLTQxIC0xMzhxMTI5IC0zMCAyMTMgLTEzNC41dDg0IC0yMzkuNXogIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYzM7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE1MjcgODhxNTYgLTg5IDIxLjUgLTE1Mi41dC0xNDAuNSAtNjMuNWgtMTE1MnEtMTA2IDAgLTE0MC41IDYzLjV0MjEuNSAxNTIuNWw1MDMgNzkzdjM5OWgtNjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NXQ0NSAxOWg1MTJxMjYgMCA0NSAtMTl0MTkgLTQ1dC0xOSAtNDV0LTQ1IC0xOWgtNjR2LTM5OXpNNzQ4IDgxM2wtMjcyIC00MjloNzEybC0yNzIgNDI5bC0yMCAzMXYzN3YzOTloLTEyOHYtMzk5di0zN3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjNDsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNOTYwIDY0MHEyNiAwIDQ1IC0xOXQxOSAtNDV0LTE5IC00NXQtNDUgLTE5dC00NSAxOXQtMTkgNDV0MTkgNDV0NDUgMTl6TTEyNjAgNTc2bDUwNyAtMzk4cTI4IC0yMCAyNSAtNTZxLTUgLTM1IC0zNSAtNTFsLTEyOCAtNjRxLTEzIC03IC0yOSAtN3EtMTcgMCAtMzEgOGwtNjkwIDM4N2wtMTEwIC02NnEtOCAtNCAtMTIgLTVxMTQgLTQ5IDEwIC05N3EtNyAtNzcgLTU2IC0xNDcuNXQtMTMyIC0xMjMuNXEtMTMyIC04NCAtMjc3IC04NCBxLTEzNiAwIC0yMjIgNzhxLTkwIDg0IC03OSAyMDdxNyA3NiA1NiAxNDd0MTMxIDEyNHExMzIgODQgMjc4IDg0cTgzIDAgMTUxIC0zMXE5IDEzIDIyIDIybDEyMiA3M2wtMTIyIDczcS0xMyA5IC0yMiAyMnEtNjggLTMxIC0xNTEgLTMxcS0xNDYgMCAtMjc4IDg0cS04MiA1MyAtMTMxIDEyNHQtNTYgMTQ3cS01IDU5IDE1LjUgMTEzdDYzLjUgOTNxODUgNzkgMjIyIDc5cTE0NSAwIDI3NyAtODRxODMgLTUyIDEzMiAtMTIzdDU2IC0xNDggcTQgLTQ4IC0xMCAtOTdxNCAtMSAxMiAtNWwxMTAgLTY2bDY5MCAzODdxMTQgOCAzMSA4cTE2IDAgMjkgLTdsMTI4IC02NHEzMCAtMTYgMzUgLTUxcTMgLTM2IC0yNSAtNTZ6TTU3OSA4MzZxNDYgNDIgMjEgMTA4dC0xMDYgMTE3cS05MiA1OSAtMTkyIDU5cS03NCAwIC0xMTMgLTM2cS00NiAtNDIgLTIxIC0xMDh0MTA2IC0xMTdxOTIgLTU5IDE5MiAtNTlxNzQgMCAxMTMgMzZ6TTQ5NCA5MXE4MSA1MSAxMDYgMTE3dC0yMSAxMDggcS0zOSAzNiAtMTEzIDM2cS0xMDAgMCAtMTkyIC01OXEtODEgLTUxIC0xMDYgLTExN3QyMSAtMTA4cTM5IC0zNiAxMTMgLTM2cTEwMCAwIDE5MiA1OXpNNjcyIDcwNGw5NiAtNTh2MTFxMCAzNiAzMyA1NmwxNCA4bC03OSA0N2wtMjYgLTI2cS0zIC0zIC0xMCAtMTF0LTEyIC0xMnEtMiAtMiAtNCAtMy41dC0zIC0yLjV6TTg5NiA0ODBsOTYgLTMybDczNiA1NzZsLTEyOCA2NGwtNzY4IC00MzF2LTExM2wtMTYwIC05Nmw5IC04cTIgLTIgNyAtNiBxNCAtNCAxMSAtMTJ0MTEgLTEybDI2IC0yNnpNMTYwMCA2NGwxMjggNjRsLTUyMCA0MDhsLTE3NyAtMTM4cS0yIC0zIC0xMyAtN3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjNTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTY5NiAxMTUycTQwIDAgNjggLTI4dDI4IC02OHYtMTIxNnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTk2MHEtNDAgMCAtNjggMjh0LTI4IDY4djI4OGgtNTQ0cS00MCAwIC02OCAyOHQtMjggNjh2NjcycTAgNDAgMjAgODh0NDggNzZsNDA4IDQwOHEyOCAyOCA3NiA0OHQ4OCAyMGg0MTZxNDAgMCA2OCAtMjh0MjggLTY4di0zMjhxNjggNDAgMTI4IDQwaDQxNnpNMTE1MiA5MzlsLTI5OSAtMjk5aDI5OXYyOTl6TTUxMiAxMzIzbC0yOTkgLTI5OSBoMjk5djI5OXpNNzA4IDY3NmwzMTYgMzE2djQxNmgtMzg0di00MTZxMCAtNDAgLTI4IC02OHQtNjggLTI4aC00MTZ2LTY0MGg1MTJ2MjU2cTAgNDAgMjAgODh0NDggNzZ6TTE2NjQgLTEyOHYxMTUyaC0zODR2LTQxNnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTQxNnYtNjQwaDg5NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjNjsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNMTQwNCAxNTFxMCAtMTE3IC03OSAtMTk2dC0xOTYgLTc5cS0xMzUgMCAtMjM1IDEwMGwtNzc3IDc3NnEtMTEzIDExNSAtMTEzIDI3MXEwIDE1OSAxMTAgMjcwdDI2OSAxMTFxMTU4IDAgMjczIC0xMTNsNjA1IC02MDZxMTAgLTEwIDEwIC0yMnEwIC0xNiAtMzAuNSAtNDYuNXQtNDYuNSAtMzAuNXEtMTMgMCAtMjMgMTBsLTYwNiA2MDdxLTc5IDc3IC0xODEgNzdxLTEwNiAwIC0xNzkgLTc1dC03MyAtMTgxcTAgLTEwNSA3NiAtMTgxIGw3NzYgLTc3N3E2MyAtNjMgMTQ1IC02M3E2NCAwIDEwNiA0MnQ0MiAxMDZxMCA4MiAtNjMgMTQ1bC01ODEgNTgxcS0yNiAyNCAtNjAgMjRxLTI5IDAgLTQ4IC0xOXQtMTkgLTQ4cTAgLTMyIDI1IC01OWw0MTAgLTQxMHExMCAtMTAgMTAgLTIycTAgLTE2IC0zMSAtNDd0LTQ3IC0zMXEtMTIgMCAtMjIgMTBsLTQxMCA0MTBxLTYzIDYxIC02MyAxNDlxMCA4MiA1NyAxMzl0MTM5IDU3cTg4IDAgMTQ5IC02M2w1ODEgLTU4MXExMDAgLTk4IDEwMCAtMjM1IHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjNzsiIGQ9Ik0zODQgMGg3Njh2Mzg0aC03Njh2LTM4NHpNMTI4MCAwaDEyOHY4OTZxMCAxNCAtMTAgMzguNXQtMjAgMzQuNWwtMjgxIDI4MXEtMTAgMTAgLTM0IDIwdC0zOSAxMHYtNDE2cTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtNTc2cS00MCAwIC02OCAyOHQtMjggNjh2NDE2aC0xMjh2LTEyODBoMTI4djQxNnEwIDQwIDI4IDY4dDY4IDI4aDgzMnE0MCAwIDY4IC0yOHQyOCAtNjh2LTQxNnpNODk2IDkyOHYzMjBxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41IGgtMTkycS0xMyAwIC0yMi41IC05LjV0LTkuNSAtMjIuNXYtMzIwcTAgLTEzIDkuNSAtMjIuNXQyMi41IC05LjVoMTkycTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTE1MzYgODk2di05MjhxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0xMzQ0cS00MCAwIC02OCAyOHQtMjggNjh2MTM0NHEwIDQwIDI4IDY4dDY4IDI4aDkyOHE0MCAwIDg4IC0yMHQ3NiAtNDhsMjgwIC0yODBxMjggLTI4IDQ4IC03NnQyMCAtODh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYzg7IiBkPSJNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwYzk7IiBkPSJNMTUzNiAxOTJ2LTEyOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE0MDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxNDA4cTI2IDAgNDUgLTE5dDE5IC00NXpNMTUzNiA3MDR2LTEyOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE0MDhxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWgxNDA4cTI2IDAgNDUgLTE5dDE5IC00NXpNMTUzNiAxMjE2di0xMjhxMCAtMjYgLTE5IC00NSB0LTQ1IC0xOWgtMTQwOHEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDE0MDhxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGNhOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0zODQgMTI4cTAgLTgwIC01NiAtMTM2dC0xMzYgLTU2dC0xMzYgNTZ0LTU2IDEzNnQ1NiAxMzZ0MTM2IDU2dDEzNiAtNTZ0NTYgLTEzNnpNMzg0IDY0MHEwIC04MCAtNTYgLTEzNnQtMTM2IC01NnQtMTM2IDU2dC01NiAxMzZ0NTYgMTM2dDEzNiA1NnQxMzYgLTU2dDU2IC0xMzZ6TTE3OTIgMjI0di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xMjE2cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjUgdDIyLjUgOS41aDEyMTZxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0zODQgMTE1MnEwIC04MCAtNTYgLTEzNnQtMTM2IC01NnQtMTM2IDU2dC01NiAxMzZ0NTYgMTM2dDEzNiA1NnQxMzYgLTU2dDU2IC0xMzZ6TTE3OTIgNzM2di0xOTJxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0xMjE2cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTkycTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMTIxNnExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IE0xNzkyIDEyNDh2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTEyMTZxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXYxOTJxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxMjE2cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjYjsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMzgxIC04NHEwIC04MCAtNTQuNSAtMTI2dC0xMzUuNSAtNDZxLTEwNiAwIC0xNzIgNjZsNTcgODhxNDkgLTQ1IDEwNiAtNDVxMjkgMCA1MC41IDE0LjV0MjEuNSA0Mi41cTAgNjQgLTEwNSA1NmwtMjYgNTZxOCAxMCAzMi41IDQzLjV0NDIuNSA1NHQzNyAzOC41djFxLTE2IDAgLTQ4LjUgLTF0LTQ4LjUgLTF2LTUzaC0xMDZ2MTUyaDMzM3YtODhsLTk1IC0xMTVxNTEgLTEyIDgxIC00OXQzMCAtODh6TTM4MyA1NDN2LTE1OWgtMzYyIHEtNiAzNiAtNiA1NHEwIDUxIDIzLjUgOTN0NTYuNSA2OHQ2NiA0Ny41dDU2LjUgNDMuNXQyMy41IDQ1cTAgMjUgLTE0LjUgMzguNXQtMzkuNSAxMy41cS00NiAwIC04MSAtNThsLTg1IDU5cTI0IDUxIDcxLjUgNzkuNXQxMDUuNSAyOC41cTczIDAgMTIzIC00MS41dDUwIC0xMTIuNXEwIC01MCAtMzQgLTkxLjV0LTc1IC02NC41dC03NS41IC01MC41dC0zNS41IC01Mi41aDEyN3Y2MGgxMDV6TTE3OTIgMjI0di0xOTJxMCAtMTMgLTkuNSAtMjIuNSB0LTIyLjUgLTkuNWgtMTIxNnEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDE0IDkgMjN0MjMgOWgxMjE2cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMzg0IDExMjN2LTk5aC0zMzV2OTloMTA3cTAgNDEgMC41IDEyMnQwLjUgMTIxdjEyaC0ycS04IC0xNyAtNTAgLTU0bC03MSA3NmwxMzYgMTI3aDEwNnYtNDA0aDEwOHpNMTc5MiA3MzZ2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTEyMTZxLTEzIDAgLTIyLjUgOS41IHQtOS41IDIyLjV2MTkycTAgMTQgOSAyM3QyMyA5aDEyMTZxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xNzkyIDEyNDh2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTEyMTZxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXYxOTJxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgxMjE2cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjYzsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTc2MCA2NDBxMTQgMCAyMyAtOXQ5IC0yM3YtNjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMTcyOHEtMTQgMCAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWgxNzI4ek00ODMgNzA0cS0yOCAzNSAtNTEgODBxLTQ4IDk3IC00OCAxODhxMCAxODEgMTM0IDMwOXExMzMgMTI3IDM5MyAxMjdxNTAgMCAxNjcgLTE5cTY2IC0xMiAxNzcgLTQ4cTEwIC0zOCAyMSAtMTE4cTE0IC0xMjMgMTQgLTE4M3EwIC0xOCAtNSAtNDVsLTEyIC0zbC04NCA2IGwtMTQgMnEtNTAgMTQ5IC0xMDMgMjA1cS04OCA5MSAtMjEwIDkxcS0xMTQgMCAtMTgyIC01OXEtNjcgLTU4IC02NyAtMTQ2cTAgLTczIDY2IC0xNDB0Mjc5IC0xMjlxNjkgLTIwIDE3MyAtNjZxNTggLTI4IDk1IC01MmgtNzQzek05OTAgNDQ4aDQxMXE3IC0zOSA3IC05MnEwIC0xMTEgLTQxIC0yMTJxLTIzIC01NSAtNzEgLTEwNHEtMzcgLTM1IC0xMDkgLTgxcS04MCAtNDggLTE1MyAtNjZxLTgwIC0yMSAtMjAzIC0yMXEtMTE0IDAgLTE5NSAyMyBsLTE0MCA0MHEtNTcgMTYgLTcyIDI4cS04IDggLTggMjJ2MTNxMCAxMDggLTIgMTU2cS0xIDMwIDAgNjhsMiAzN3Y0NGwxMDIgMnExNSAtMzQgMzAgLTcxdDIyLjUgLTU2dDEyLjUgLTI3cTM1IC01NyA4MCAtOTRxNDMgLTM2IDEwNSAtNTdxNTkgLTIyIDEzMiAtMjJxNjQgMCAxMzkgMjdxNzcgMjYgMTIyIDg2cTQ3IDYxIDQ3IDEyOXEwIDg0IC04MSAxNTdxLTM0IDI5IC0xMzcgNzF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwY2Q7IiBkPSJNNDggMTMxM3EtMzcgMiAtNDUgNGwtMyA4OHExMyAxIDQwIDFxNjAgMCAxMTIgLTRxMTMyIC03IDE2NiAtN3E4NiAwIDE2OCAzcTExNiA0IDE0NiA1cTU2IDAgODYgMmwtMSAtMTRsMiAtNjR2LTlxLTYwIC05IC0xMjQgLTlxLTYwIDAgLTc5IC0yNXEtMTMgLTE0IC0xMyAtMTMycTAgLTEzIDAuNSAtMzIuNXQwLjUgLTI1LjVsMSAtMjI5bDE0IC0yODBxNiAtMTI0IDUxIC0yMDJxMzUgLTU5IDk2IC05MnE4OCAtNDcgMTc3IC00NyBxMTA0IDAgMTkxIDI4cTU2IDE4IDk5IDUxcTQ4IDM2IDY1IDY0cTM2IDU2IDUzIDExNHEyMSA3MyAyMSAyMjlxMCA3OSAtMy41IDEyOHQtMTEgMTIyLjV0LTEzLjUgMTU5LjVsLTQgNTlxLTUgNjcgLTI0IDg4cS0zNCAzNSAtNzcgMzRsLTEwMCAtMmwtMTQgM2wyIDg2aDg0bDIwNSAtMTBxNzYgLTMgMTk2IDEwbDE4IC0ycTYgLTM4IDYgLTUxcTAgLTcgLTQgLTMxcS00NSAtMTIgLTg0IC0xM3EtNzMgLTExIC03OSAtMTdxLTE1IC0xNSAtMTUgLTQxIHEwIC03IDEuNSAtMjd0MS41IC0zMXE4IC0xOSAyMiAtMzk2cTYgLTE5NSAtMTUgLTMwNHEtMTUgLTc2IC00MSAtMTIycS0zOCAtNjUgLTExMiAtMTIzcS03NSAtNTcgLTE4MiAtODlxLTEwOSAtMzMgLTI1NSAtMzNxLTE2NyAwIC0yODQgNDZxLTExOSA0NyAtMTc5IDEyMnEtNjEgNzYgLTgzIDE5NXEtMTYgODAgLTE2IDIzN3YzMzNxMCAxODggLTE3IDIxM3EtMjUgMzYgLTE0NyAzOXpNMTUzNiAtOTZ2NjRxMCAxNCAtOSAyM3QtMjMgOWgtMTQ3MiBxLTE0IDAgLTIzIC05dC05IC0yM3YtNjRxMCAtMTQgOSAtMjN0MjMgLTloMTQ3MnExNCAwIDIzIDl0OSAyM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBjZTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNTEyIDE2MHYxOTJxMCAxNCAtOSAyM3QtMjMgOWgtMzIwcS0xNCAwIC0yMyAtOXQtOSAtMjN2LTE5MnEwIC0xNCA5IC0yM3QyMyAtOWgzMjBxMTQgMCAyMyA5dDkgMjN6TTUxMiA1NDR2MTkycTAgMTQgLTkgMjN0LTIzIDloLTMyMHEtMTQgMCAtMjMgLTl0LTkgLTIzdi0xOTJxMCAtMTQgOSAtMjN0MjMgLTloMzIwcTE0IDAgMjMgOXQ5IDIzek0xMDI0IDE2MHYxOTJxMCAxNCAtOSAyM3QtMjMgOWgtMzIwcS0xNCAwIC0yMyAtOXQtOSAtMjMgdi0xOTJxMCAtMTQgOSAtMjN0MjMgLTloMzIwcTE0IDAgMjMgOXQ5IDIzek01MTIgOTI4djE5MnEwIDE0IC05IDIzdC0yMyA5aC0zMjBxLTE0IDAgLTIzIC05dC05IC0yM3YtMTkycTAgLTE0IDkgLTIzdDIzIC05aDMyMHExNCAwIDIzIDl0OSAyM3pNMTAyNCA1NDR2MTkycTAgMTQgLTkgMjN0LTIzIDloLTMyMHEtMTQgMCAtMjMgLTl0LTkgLTIzdi0xOTJxMCAtMTQgOSAtMjN0MjMgLTloMzIwcTE0IDAgMjMgOXQ5IDIzek0xNTM2IDE2MHYxOTIgcTAgMTQgLTkgMjN0LTIzIDloLTMyMHEtMTQgMCAtMjMgLTl0LTkgLTIzdi0xOTJxMCAtMTQgOSAtMjN0MjMgLTloMzIwcTE0IDAgMjMgOXQ5IDIzek0xMDI0IDkyOHYxOTJxMCAxNCAtOSAyM3QtMjMgOWgtMzIwcS0xNCAwIC0yMyAtOXQtOSAtMjN2LTE5MnEwIC0xNCA5IC0yM3QyMyAtOWgzMjBxMTQgMCAyMyA5dDkgMjN6TTE1MzYgNTQ0djE5MnEwIDE0IC05IDIzdC0yMyA5aC0zMjBxLTE0IDAgLTIzIC05dC05IC0yM3YtMTkyIHEwIC0xNCA5IC0yM3QyMyAtOWgzMjBxMTQgMCAyMyA5dDkgMjN6TTE1MzYgOTI4djE5MnEwIDE0IC05IDIzdC0yMyA5aC0zMjBxLTE0IDAgLTIzIC05dC05IC0yM3YtMTkycTAgLTE0IDkgLTIzdDIzIC05aDMyMHExNCAwIDIzIDl0OSAyM3pNMTY2NCAxMjQ4di0xMDg4cTAgLTY2IC00NyAtMTEzdC0xMTMgLTQ3aC0xMzQ0cS02NiAwIC0xMTMgNDd0LTQ3IDExM3YxMDg4cTAgNjYgNDcgMTEzdDExMyA0N2gxMzQ0cTY2IDAgMTEzIC00N3Q0NyAtMTEzIHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkMDsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTE5MCA5NTVsMjkzIDI5M2wtMTA3IDEwN2wtMjkzIC0yOTN6TTE2MzcgMTI0OHEwIC0yNyAtMTggLTQ1bC0xMjg2IC0xMjg2cS0xOCAtMTggLTQ1IC0xOHQtNDUgMThsLTE5OCAxOThxLTE4IDE4IC0xOCA0NXQxOCA0NWwxMjg2IDEyODZxMTggMTggNDUgMTh0NDUgLTE4bDE5OCAtMTk4cTE4IC0xOCAxOCAtNDV6TTI4NiAxNDM4bDk4IC0zMGwtOTggLTMwbC0zMCAtOThsLTMwIDk4bC05OCAzMGw5OCAzMGwzMCA5OHpNNjM2IDEyNzYgbDE5NiAtNjBsLTE5NiAtNjBsLTYwIC0xOTZsLTYwIDE5NmwtMTk2IDYwbDE5NiA2MGw2MCAxOTZ6TTE1NjYgNzk4bDk4IC0zMGwtOTggLTMwbC0zMCAtOThsLTMwIDk4bC05OCAzMGw5OCAzMGwzMCA5OHpNOTI2IDE0MzhsOTggLTMwbC05OCAtMzBsLTMwIC05OGwtMzAgOThsLTk4IDMwbDk4IDMwbDMwIDk4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGQxOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik02NDAgMTI4cTAgNTIgLTM4IDkwdC05MCAzOHQtOTAgLTM4dC0zOCAtOTB0MzggLTkwdDkwIC0zOHQ5MCAzOHQzOCA5MHpNMjU2IDY0MGgzODR2MjU2aC0xNThxLTEzIDAgLTIyIC05bC0xOTUgLTE5NXEtOSAtOSAtOSAtMjJ2LTMwek0xNTM2IDEyOHEwIDUyIC0zOCA5MHQtOTAgMzh0LTkwIC0zOHQtMzggLTkwdDM4IC05MHQ5MCAtMzh0OTAgMzh0MzggOTB6TTE3OTIgMTIxNnYtMTAyNHEwIC0xNSAtNCAtMjYuNXQtMTMuNSAtMTguNSB0LTE2LjUgLTExLjV0LTIzLjUgLTZ0LTIyLjUgLTJ0LTI1LjUgMHQtMjIuNSAwLjVxMCAtMTA2IC03NSAtMTgxdC0xODEgLTc1dC0xODEgNzV0LTc1IDE4MWgtMzg0cTAgLTEwNiAtNzUgLTE4MXQtMTgxIC03NXQtMTgxIDc1dC03NSAxODFoLTY0cS0zIDAgLTIyLjUgLTAuNXQtMjUuNSAwdC0yMi41IDJ0LTIzLjUgNnQtMTYuNSAxMS41dC0xMy41IDE4LjV0LTQgMjYuNXEwIDI2IDE5IDQ1dDQ1IDE5djMyMHEwIDggLTAuNSAzNXQwIDM4IHQyLjUgMzQuNXQ2LjUgMzd0MTQgMzAuNXQyMi41IDMwbDE5OCAxOThxMTkgMTkgNTAuNSAzMnQ1OC41IDEzaDE2MHYxOTJxMCAyNiAxOSA0NXQ0NSAxOWgxMDI0cTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkMjsiIGQ9Ik0xNTM2IDY0MHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3EtMTExIDAgLTIxOCAzMnE1OSA5MyA3OCAxNjRxOSAzNCA1NCAyMTFxMjAgLTM5IDczIC02Ny41dDExNCAtMjguNXExMjEgMCAyMTYgNjguNXQxNDcgMTg4LjV0NTIgMjcwcTAgMTE0IC01OS41IDIxNHQtMTcyLjUgMTYzdC0yNTUgNjNxLTEwNSAwIC0xOTYgLTI5dC0xNTQuNSAtNzd0LTEwOSAtMTEwLjV0LTY3IC0xMjkuNXQtMjEuNSAtMTM0IHEwIC0xMDQgNDAgLTE4M3QxMTcgLTExMXEzMCAtMTIgMzggMjBxMiA3IDggMzF0OCAzMHE2IDIzIC0xMSA0M3EtNTEgNjEgLTUxIDE1MXEwIDE1MSAxMDQuNSAyNTkuNXQyNzMuNSAxMDguNXExNTEgMCAyMzUuNSAtODJ0ODQuNSAtMjEzcTAgLTE3MCAtNjguNSAtMjg5dC0xNzUuNSAtMTE5cS02MSAwIC05OCA0My41dC0yMyAxMDQuNXE4IDM1IDI2LjUgOTMuNXQzMCAxMDN0MTEuNSA3NS41cTAgNTAgLTI3IDgzdC03NyAzMyBxLTYyIDAgLTEwNSAtNTd0LTQzIC0xNDJxMCAtNzMgMjUgLTEyMmwtOTkgLTQxOHEtMTcgLTcwIC0xMyAtMTc3cS0yMDYgOTEgLTMzMyAyODF0LTEyNyA0MjNxMCAyMDkgMTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGQzOyIgZD0iTTEyNDggMTQwOHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC03MjVxODUgMTIyIDEwOCAyMTBxOSAzNCA1MyAyMDlxMjEgLTM5IDczLjUgLTY3dDExMi41IC0yOHExODEgMCAyOTUuNSAxNDcuNXQxMTQuNSAzNzMuNXEwIDg0IC0zNSAxNjIuNXQtOTYuNSAxMzl0LTE1Mi41IDk3dC0xOTcgMzYuNXEtMTA0IDAgLTE5NC41IC0yOC41dC0xNTMgLTc2LjUgdC0xMDcuNSAtMTA5LjV0LTY2LjUgLTEyOHQtMjEuNSAtMTMyLjVxMCAtMTAyIDM5LjUgLTE4MHQxMTYuNSAtMTEwcTEzIC01IDIzLjUgMHQxNC41IDE5cTEwIDQ0IDE1IDYxcTYgMjMgLTExIDQycS01MCA2MiAtNTAgMTUwcTAgMTUwIDEwMy41IDI1Ni41dDI3MC41IDEwNi41cTE0OSAwIDIzMi41IC04MXQ4My41IC0yMTBxMCAtMTY4IC02Ny41IC0yODZ0LTE3My41IC0xMThxLTYwIDAgLTk3IDQzLjV0LTIzIDEwMy41cTggMzQgMjYuNSA5Mi41IHQyOS41IDEwMnQxMSA3NC41cTAgNDkgLTI2LjUgODEuNXQtNzUuNSAzMi41cS02MSAwIC0xMDMuNSAtNTYuNXQtNDIuNSAtMTM5LjVxMCAtNzIgMjQgLTEyMWwtOTggLTQxNHEtMjQgLTEwMCAtNyAtMjU0aC0xODNxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYweiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGQ0OyIgZD0iTTY3OCAtNTdxMCAtMzggLTEwIC03MWgtMzgwcS05NSAwIC0xNzEuNSA1Ni41dC0xMDMuNSAxNDcuNXEyNCA0NSA2OSA3Ny41dDEwMCA0OS41dDEwNyAyNHQxMDcgN3EzMiAwIDQ5IC0ycTYgLTQgMzAuNSAtMjF0MzMgLTIzdDMxIC0yM3QzMiAtMjUuNXQyNy41IC0yNS41dDI2LjUgLTI5LjV0MjEgLTMwLjV0MTcuNSAtMzQuNXQ5LjUgLTM2dDQuNSAtNDAuNXpNMzg1IDI5NHEtMjM0IC03IC0zODUgLTg1djQzM3ExMDMgLTExOCAyNzMgLTExOCBxMzIgMCA3MCA1cS0yMSAtNjEgLTIxIC04NnEwIC02NyA2MyAtMTQ5ek01NTggODA1cTAgLTEwMCAtNDMuNSAtMTYwLjV0LTE0MC41IC02MC41cS01MSAwIC05NyAyNnQtNzggNjcuNXQtNTYgOTMuNXQtMzUuNSAxMDR0LTExLjUgOTlxMCA5NiA1MS41IDE2NXQxNDQuNSA2OXE2NiAwIDExOSAtNDF0ODQgLTEwNHQ0NyAtMTMwdDE2IC0xMjh6TTE1MzYgODk2di03MzZxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTQ2OCBxMzkgNzMgMzkgMTU3cTAgNjYgLTIyIDEyMi41dC01NS41IDkzdC03MiA3MXQtNzIgNTkuNXQtNTUuNSA1NC41dC0yMiA1OS41cTAgMzYgMjMgNjh0NTYgNjEuNXQ2NS41IDY0LjV0NTUuNSA5M3QyMyAxMzF0LTI2LjUgMTQ1LjV0LTc1LjUgMTE4LjVxLTYgNiAtMTQgMTF0LTEyLjUgNy41dC0xMCA5LjV0LTEwLjUgMTdoMTM1bDEzNSA2NGgtNDM3cS0xMzggMCAtMjQ0LjUgLTM4LjV0LTE4Mi41IC0xMzMuNXEwIDEyNiA4MSAyMTN0MjA3IDg3aDk2MCBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV2LTk2aC0yNTZ2MjU2aC0xMjh2LTI1NmgtMjU2di0xMjhoMjU2di0yNTZoMTI4djI1NmgyNTZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZDU7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTg3NiA3MXEwIDIxIC00LjUgNDAuNXQtOS41IDM2dC0xNy41IDM0LjV0LTIxIDMwLjV0LTI2LjUgMjkuNXQtMjcuNSAyNS41dC0zMiAyNS41dC0zMSAyM3QtMzMgMjN0LTMwLjUgMjFxLTE3IDIgLTUwIDJxLTU0IDAgLTEwNiAtN3QtMTA4IC0yNXQtOTggLTQ2dC02OSAtNzV0LTI3IC0xMDdxMCAtNjggMzUuNSAtMTIxLjV0OTMgLTg0dDEyMC41IC00NS41dDEyNyAtMTVxNTkgMCAxMTIuNSAxMi41dDEwMC41IDM5dDc0LjUgNzMuNSB0MjcuNSAxMTB6TTc1NiA5MzNxMCA2MCAtMTYuNSAxMjcuNXQtNDcgMTMwLjV0LTg0IDEwNHQtMTE5LjUgNDFxLTkzIDAgLTE0NCAtNjl0LTUxIC0xNjVxMCAtNDcgMTEuNSAtOTl0MzUuNSAtMTA0dDU2IC05My41dDc4IC02Ny41dDk3IC0yNnE5NyAwIDE0MC41IDYwLjV0NDMuNSAxNjAuNXpNNjI1IDE0MDhoNDM3bC0xMzUgLTc5aC0xMzVxNzEgLTQ1IDExMCAtMTI2dDM5IC0xNjlxMCAtNzQgLTIzIC0xMzEuNXQtNTYgLTkyLjV0LTY2IC02NC41IHQtNTYgLTYxdC0yMyAtNjcuNXEwIC0yNiAxNi41IC01MXQ0MyAtNDh0NTguNSAtNDh0NjQgLTU1LjV0NTguNSAtNjZ0NDMgLTg1dDE2LjUgLTEwNi41cTAgLTE2MCAtMTQwIC0yODJxLTE1MiAtMTMxIC00MjAgLTEzMXEtNTkgMCAtMTE5LjUgMTB0LTEyMiAzMy41dC0xMDguNSA1OHQtNzcgODl0LTMwIDEyMS41cTAgNjEgMzcgMTM1cTMyIDY0IDk2IDExMC41dDE0NSA3MXQxNTUgMzZ0MTUwIDEzLjVxLTY0IDgzIC02NCAxNDlxMCAxMiAyIDIzLjUgdDUgMTkuNXQ4IDIxLjV0NyAyMS41cS00MCAtNSAtNzAgLTVxLTE0OSAwIC0yNTUuNSA5OHQtMTA2LjUgMjQ2cTAgMTQwIDk1IDI1MC41dDIzNCAxNDEuNXE5NCAyMCAxODcgMjB6TTE2NjQgMTE1MnYtMTI4aC0yNTZ2LTI1NmgtMTI4djI1NmgtMjU2djEyOGgyNTZ2MjU2aDEyOHYtMjU2aDI1NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkNjsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNNzY4IDM4NGgzODR2OTZoLTEyOHY0NDhoLTExNGwtMTQ4IC0xMzdsNzcgLTgwcTQyIDM3IDU1IDU3aDJ2LTI4OGgtMTI4di05NnpNMTI4MCA2NDBxMCAtNzAgLTIxIC0xNDJ0LTU5LjUgLTEzNHQtMTAxLjUgLTEwMXQtMTM4IC0zOXQtMTM4IDM5dC0xMDEuNSAxMDF0LTU5LjUgMTM0dC0yMSAxNDJ0MjEgMTQydDU5LjUgMTM0dDEwMS41IDEwMXQxMzggMzl0MTM4IC0zOXQxMDEuNSAtMTAxdDU5LjUgLTEzNHQyMSAtMTQyek0xNzkyIDM4NCB2NTEycS0xMDYgMCAtMTgxIDc1dC03NSAxODFoLTExNTJxMCAtMTA2IC03NSAtMTgxdC0xODEgLTc1di01MTJxMTA2IDAgMTgxIC03NXQ3NSAtMTgxaDExNTJxMCAxMDYgNzUgMTgxdDE4MSA3NXpNMTkyMCAxMjE2di0xMTUycTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTc5MnEtMjYgMCAtNDUgMTl0LTE5IDQ1djExNTJxMCAyNiAxOSA0NXQ0NSAxOWgxNzkycTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkNzsiIGhvcml6LWFkdi14PSIxMDI0IiBkPSJNMTAyNCA4MzJxMCAtMjYgLTE5IC00NWwtNDQ4IC00NDhxLTE5IC0xOSAtNDUgLTE5dC00NSAxOWwtNDQ4IDQ0OHEtMTkgMTkgLTE5IDQ1dDE5IDQ1dDQ1IDE5aDg5NnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZDg7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTEwMjQgMzIwcTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtODk2cS0yNiAwIC00NSAxOXQtMTkgNDV0MTkgNDVsNDQ4IDQ0OHExOSAxOSA0NSAxOXQ0NSAtMTlsNDQ4IC00NDhxMTkgLTE5IDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkOTsiIGhvcml6LWFkdi14PSI2NDAiIGQ9Ik02NDAgMTA4OHYtODk2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOXQtNDUgMTlsLTQ0OCA0NDhxLTE5IDE5IC0xOSA0NXQxOSA0NWw0NDggNDQ4cTE5IDE5IDQ1IDE5dDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZGE7IiBob3Jpei1hZHYteD0iNjQwIiBkPSJNNTc2IDY0MHEwIC0yNiAtMTkgLTQ1bC00NDggLTQ0OHEtMTkgLTE5IC00NSAtMTl0LTQ1IDE5dC0xOSA0NXY4OTZxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTlsNDQ4IC00NDhxMTkgLTE5IDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkYjsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTYwIDBoNjA4djExNTJoLTY0MHYtMTEyMHEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41ek0xNTM2IDMydjExMjBoLTY0MHYtMTE1Mmg2MDhxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpNMTY2NCAxMjQ4di0xMjE2cTAgLTY2IC00NyAtMTEzdC0xMTMgLTQ3aC0xMzQ0cS02NiAwIC0xMTMgNDd0LTQ3IDExM3YxMjE2cTAgNjYgNDcgMTEzdDExMyA0N2gxMzQ0cTY2IDAgMTEzIC00N3Q0NyAtMTEzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGRjOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik0xMDI0IDQ0OHEwIC0yNiAtMTkgLTQ1bC00NDggLTQ0OHEtMTkgLTE5IC00NSAtMTl0LTQ1IDE5bC00NDggNDQ4cS0xOSAxOSAtMTkgNDV0MTkgNDV0NDUgMTloODk2cTI2IDAgNDUgLTE5dDE5IC00NXpNMTAyNCA4MzJxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC04OTZxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NWw0NDggNDQ4cTE5IDE5IDQ1IDE5dDQ1IC0xOWw0NDggLTQ0OHExOSAtMTkgMTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGRkOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik0xMDI0IDQ0OHEwIC0yNiAtMTkgLTQ1bC00NDggLTQ0OHEtMTkgLTE5IC00NSAtMTl0LTQ1IDE5bC00NDggNDQ4cS0xOSAxOSAtMTkgNDV0MTkgNDV0NDUgMTloODk2cTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBkZTsiIGhvcml6LWFkdi14PSIxMDI0IiBkPSJNMTAyNCA4MzJxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC04OTZxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NWw0NDggNDQ4cTE5IDE5IDQ1IDE5dDQ1IC0xOWw0NDggLTQ0OHExOSAtMTkgMTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGUwOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNzkyIDgyNnYtNzk0cTAgLTY2IC00NyAtMTEzdC0xMTMgLTQ3aC0xNDcycS02NiAwIC0xMTMgNDd0LTQ3IDExM3Y3OTRxNDQgLTQ5IDEwMSAtODdxMzYyIC0yNDYgNDk3IC0zNDVxNTcgLTQyIDkyLjUgLTY1LjV0OTQuNSAtNDh0MTEwIC0yNC41aDFoMXE1MSAwIDExMCAyNC41dDk0LjUgNDh0OTIuNSA2NS41cTE3MCAxMjMgNDk4IDM0NXE1NyAzOSAxMDAgODd6TTE3OTIgMTEyMHEwIC03OSAtNDkgLTE1MXQtMTIyIC0xMjMgcS0zNzYgLTI2MSAtNDY4IC0zMjVxLTEwIC03IC00Mi41IC0zMC41dC01NCAtMzh0LTUyIC0zMi41dC01Ny41IC0yN3QtNTAgLTloLTFoLTFxLTIzIDAgLTUwIDl0LTU3LjUgMjd0LTUyIDMyLjV0LTU0IDM4dC00Mi41IDMwLjVxLTkxIDY0IC0yNjIgMTgyLjV0LTIwNSAxNDIuNXEtNjIgNDIgLTExNyAxMTUuNXQtNTUgMTM2LjVxMCA3OCA0MS41IDEzMHQxMTguNSA1MmgxNDcycTY1IDAgMTEyLjUgLTQ3dDQ3LjUgLTExM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBlMTsiIGQ9Ik0zNDkgOTExdi05OTFoLTMzMHY5OTFoMzMwek0zNzAgMTIxN3ExIC03MyAtNTAuNSAtMTIydC0xMzUuNSAtNDloLTJxLTgyIDAgLTEzMiA0OXQtNTAgMTIycTAgNzQgNTEuNSAxMjIuNXQxMzQuNSA0OC41dDEzMyAtNDguNXQ1MSAtMTIyLjV6TTE1MzYgNDg4di01NjhoLTMyOXY1MzBxMCAxMDUgLTQwLjUgMTY0LjV0LTEyNi41IDU5LjVxLTYzIDAgLTEwNS41IC0zNC41dC02My41IC04NS41cS0xMSAtMzAgLTExIC04MXYtNTUzaC0zMjkgcTIgMzk5IDIgNjQ3dC0xIDI5NmwtMSA0OGgzMjl2LTE0NGgtMnEyMCAzMiA0MSA1NnQ1Ni41IDUydDg3IDQzLjV0MTE0LjUgMTUuNXExNzEgMCAyNzUgLTExMy41dDEwNCAtMzMyLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZTI7IiBkPSJNMTUzNiA2NDBxMCAtMTU2IC02MSAtMjk4dC0xNjQgLTI0NXQtMjQ1IC0xNjR0LTI5OCAtNjFxLTE3MiAwIC0zMjcgNzIuNXQtMjY0IDIwNC41cS03IDEwIC02LjUgMjIuNXQ4LjUgMjAuNWwxMzcgMTM4cTEwIDkgMjUgOXExNiAtMiAyMyAtMTJxNzMgLTk1IDE3OSAtMTQ3dDIyNSAtNTJxMTA0IDAgMTk4LjUgNDAuNXQxNjMuNSAxMDkuNXQxMDkuNSAxNjMuNXQ0MC41IDE5OC41dC00MC41IDE5OC41dC0xMDkuNSAxNjMuNSB0LTE2My41IDEwOS41dC0xOTguNSA0MC41cS05OCAwIC0xODggLTM1LjV0LTE2MCAtMTAxLjVsMTM3IC0xMzhxMzEgLTMwIDE0IC02OXEtMTcgLTQwIC01OSAtNDBoLTQ0OHEtMjYgMCAtNDUgMTl0LTE5IDQ1djQ0OHEwIDQyIDQwIDU5cTM5IDE3IDY5IC0xNGwxMzAgLTEyOXExMDcgMTAxIDI0NC41IDE1Ni41dDI4NC41IDU1LjVxMTU2IDAgMjk4IC02MXQyNDUgLTE2NHQxNjQgLTI0NXQ2MSAtMjk4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGUzOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xNzcxIDBxMCAtNTMgLTM3IC05MGwtMTA3IC0xMDhxLTM5IC0zNyAtOTEgLTM3cS01MyAwIC05MCAzN2wtMzYzIDM2NHEtMzggMzYgLTM4IDkwcTAgNTMgNDMgOTZsLTI1NiAyNTZsLTEyNiAtMTI2cS0xNCAtMTQgLTM0IC0xNHQtMzQgMTRxMiAtMiAxMi41IC0xMnQxMi41IC0xM3QxMCAtMTEuNXQxMCAtMTMuNXQ2IC0xMy41dDUuNSAtMTYuNXQxLjUgLTE4cTAgLTM4IC0yOCAtNjhxLTMgLTMgLTE2LjUgLTE4dC0xOSAtMjAuNSB0LTE4LjUgLTE2LjV0LTIyIC0xNS41dC0yMiAtOXQtMjYgLTQuNXEtNDAgMCAtNjggMjhsLTQwOCA0MDhxLTI4IDI4IC0yOCA2OHEwIDEzIDQuNSAyNnQ5IDIydDE1LjUgMjJ0MTYuNSAxOC41dDIwLjUgMTl0MTggMTYuNXEzMCAyOCA2OCAyOHExMCAwIDE4IC0xLjV0MTYuNSAtNS41dDEzLjUgLTZ0MTMuNSAtMTB0MTEuNSAtMTB0MTMgLTEyLjV0MTIgLTEyLjVxLTE0IDE0IC0xNCAzNHQxNCAzNGwzNDggMzQ4cTE0IDE0IDM0IDE0dDM0IC0xNCBxLTIgMiAtMTIuNSAxMnQtMTIuNSAxM3QtMTAgMTEuNXQtMTAgMTMuNXQtNiAxMy41dC01LjUgMTYuNXQtMS41IDE4cTAgMzggMjggNjhxMyAzIDE2LjUgMTh0MTkgMjAuNXQxOC41IDE2LjV0MjIgMTUuNXQyMiA5dDI2IDQuNXE0MCAwIDY4IC0yOGw0MDggLTQwOHEyOCAtMjggMjggLTY4cTAgLTEzIC00LjUgLTI2dC05IC0yMnQtMTUuNSAtMjJ0LTE2LjUgLTE4LjV0LTIwLjUgLTE5dC0xOCAtMTYuNXEtMzAgLTI4IC02OCAtMjggcS0xMCAwIC0xOCAxLjV0LTE2LjUgNS41dC0xMy41IDZ0LTEzLjUgMTB0LTExLjUgMTB0LTEzIDEyLjV0LTEyIDEyLjVxMTQgLTE0IDE0IC0zNHQtMTQgLTM0bC0xMjYgLTEyNmwyNTYgLTI1NnE0MyA0MyA5NiA0M3E1MiAwIDkxIC0zN2wzNjMgLTM2M3EzNyAtMzkgMzcgLTkxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGU0OyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0zODQgMzg0cTAgNTMgLTM3LjUgOTAuNXQtOTAuNSAzNy41dC05MC41IC0zNy41dC0zNy41IC05MC41dDM3LjUgLTkwLjV0OTAuNSAtMzcuNXQ5MC41IDM3LjV0MzcuNSA5MC41ek01NzYgODMycTAgNTMgLTM3LjUgOTAuNXQtOTAuNSAzNy41dC05MC41IC0zNy41dC0zNy41IC05MC41dDM3LjUgLTkwLjV0OTAuNSAtMzcuNXQ5MC41IDM3LjV0MzcuNSA5MC41ek0xMDA0IDM1MWwxMDEgMzgycTYgMjYgLTcuNSA0OC41dC0zOC41IDI5LjUgdC00OCAtNi41dC0zMCAtMzkuNWwtMTAxIC0zODJxLTYwIC01IC0xMDcgLTQzLjV0LTYzIC05OC41cS0yMCAtNzcgMjAgLTE0NnQxMTcgLTg5dDE0NiAyMHQ4OSAxMTdxMTYgNjAgLTYgMTE3dC03MiA5MXpNMTY2NCAzODRxMCA1MyAtMzcuNSA5MC41dC05MC41IDM3LjV0LTkwLjUgLTM3LjV0LTM3LjUgLTkwLjV0MzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTEwMjQgMTAyNHEwIDUzIC0zNy41IDkwLjUgdC05MC41IDM3LjV0LTkwLjUgLTM3LjV0LTM3LjUgLTkwLjV0MzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTE0NzIgODMycTAgNTMgLTM3LjUgOTAuNXQtOTAuNSAzNy41dC05MC41IC0zNy41dC0zNy41IC05MC41dDM3LjUgLTkwLjV0OTAuNSAtMzcuNXQ5MC41IDM3LjV0MzcuNSA5MC41ek0xNzkyIDM4NHEwIC0yNjEgLTE0MSAtNDgzcS0xOSAtMjkgLTU0IC0yOWgtMTQwMnEtMzUgMCAtNTQgMjkgcS0xNDEgMjIxIC0xNDEgNDgzcTAgMTgyIDcxIDM0OHQxOTEgMjg2dDI4NiAxOTF0MzQ4IDcxdDM0OCAtNzF0Mjg2IC0xOTF0MTkxIC0yODZ0NzEgLTM0OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBlNTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNODk2IDExNTJxLTIwNCAwIC0zODEuNSAtNjkuNXQtMjgyIC0xODcuNXQtMTA0LjUgLTI1NXEwIC0xMTIgNzEuNSAtMjEzLjV0MjAxLjUgLTE3NS41bDg3IC01MGwtMjcgLTk2cS0yNCAtOTEgLTcwIC0xNzJxMTUyIDYzIDI3NSAxNzFsNDMgMzhsNTcgLTZxNjkgLTggMTMwIC04cTIwNCAwIDM4MS41IDY5LjV0MjgyIDE4Ny41dDEwNC41IDI1NXQtMTA0LjUgMjU1dC0yODIgMTg3LjV0LTM4MS41IDY5LjV6TTE3OTIgNjQwIHEwIC0xNzQgLTEyMCAtMzIxLjV0LTMyNiAtMjMzdC00NTAgLTg1LjVxLTcwIDAgLTE0NSA4cS0xOTggLTE3NSAtNDYwIC0yNDJxLTQ5IC0xNCAtMTE0IC0yMmgtNXEtMTUgMCAtMjcgMTAuNXQtMTYgMjcuNXYxcS0zIDQgLTAuNSAxMnQyIDEwdDQuNSA5LjVsNiA5dDcgOC41dDggOXE3IDggMzEgMzQuNXQzNC41IDM4dDMxIDM5LjV0MzIuNSA1MXQyNyA1OXQyNiA3NnEtMTU3IDg5IC0yNDcuNSAyMjB0LTkwLjUgMjgxcTAgMTc0IDEyMCAzMjEuNSB0MzI2IDIzM3Q0NTAgODUuNXQ0NTAgLTg1LjV0MzI2IC0yMzN0MTIwIC0zMjEuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBlNjsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNNzA0IDExNTJxLTE1MyAwIC0yODYgLTUydC0yMTEuNSAtMTQxdC03OC41IC0xOTFxMCAtODIgNTMgLTE1OHQxNDkgLTEzMmw5NyAtNTZsLTM1IC04NHEzNCAyMCA2MiAzOWw0NCAzMWw1MyAtMTBxNzggLTE0IDE1MyAtMTRxMTUzIDAgMjg2IDUydDIxMS41IDE0MXQ3OC41IDE5MXQtNzguNSAxOTF0LTIxMS41IDE0MXQtMjg2IDUyek03MDQgMTI4MHExOTEgMCAzNTMuNSAtNjguNXQyNTYuNSAtMTg2LjV0OTQgLTI1N3QtOTQgLTI1NyB0LTI1Ni41IC0xODYuNXQtMzUzLjUgLTY4LjVxLTg2IDAgLTE3NiAxNnEtMTI0IC04OCAtMjc4IC0xMjhxLTM2IC05IC04NiAtMTZoLTNxLTExIDAgLTIwLjUgOHQtMTEuNSAyMXEtMSAzIC0xIDYuNXQwLjUgNi41dDIgNmwyLjUgNXQzLjUgNS41dDQgNXQ0LjUgNXQ0IDQuNXE1IDYgMjMgMjV0MjYgMjkuNXQyMi41IDI5dDI1IDM4LjV0MjAuNSA0NHEtMTI0IDcyIC0xOTUgMTc3dC03MSAyMjRxMCAxMzkgOTQgMjU3dDI1Ni41IDE4Ni41IHQzNTMuNSA2OC41ek0xNTI2IDExMXExMCAtMjQgMjAuNSAtNDR0MjUgLTM4LjV0MjIuNSAtMjl0MjYgLTI5LjV0MjMgLTI1cTEgLTEgNCAtNC41dDQuNSAtNXQ0IC01dDMuNSAtNS41bDIuNSAtNXQyIC02dDAuNSAtNi41dC0xIC02LjVxLTMgLTE0IC0xMyAtMjJ0LTIyIC03cS01MCA3IC04NiAxNnEtMTU0IDQwIC0yNzggMTI4cS05MCAtMTYgLTE3NiAtMTZxLTI3MSAwIC00NzIgMTMycTU4IC00IDg4IC00cTE2MSAwIDMwOSA0NXQyNjQgMTI5IHExMjUgOTIgMTkyIDIxMnQ2NyAyNTRxMCA3NyAtMjMgMTUycTEyOSAtNzEgMjA0IC0xNzh0NzUgLTIzMHEwIC0xMjAgLTcxIC0yMjQuNXQtMTk1IC0xNzYuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBlNzsiIGhvcml6LWFkdi14PSI4OTYiIGQ9Ik04ODUgOTcwcTE4IC0yMCA3IC00NGwtNTQwIC0xMTU3cS0xMyAtMjUgLTQyIC0yNXEtNCAwIC0xNCAycS0xNyA1IC0yNS41IDE5dC00LjUgMzBsMTk3IDgwOGwtNDA2IC0xMDFxLTQgLTEgLTEyIC0xcS0xOCAwIC0zMSAxMXEtMTggMTUgLTEzIDM5bDIwMSA4MjVxNCAxNCAxNiAyM3QyOCA5aDMyOHExOSAwIDMyIC0xMi41dDEzIC0yOS41cTAgLTggLTUgLTE4bC0xNzEgLTQ2M2wzOTYgOThxOCAyIDEyIDJxMTkgMCAzNCAtMTV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZTg7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE3OTIgMjg4di0zMjBxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0zMjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYzMjBxMCA0MCAyOCA2OHQ2OCAyOGg5NnYxOTJoLTUxMnYtMTkyaDk2cTQwIDAgNjggLTI4dDI4IC02OHYtMzIwcTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMzIwcS00MCAwIC02OCAyOHQtMjggNjh2MzIwcTAgNDAgMjggNjh0NjggMjhoOTZ2MTkyaC01MTJ2LTE5Mmg5NnE0MCAwIDY4IC0yOHQyOCAtNjh2LTMyMCBxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0zMjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYzMjBxMCA0MCAyOCA2OHQ2OCAyOGg5NnYxOTJxMCA1MiAzOCA5MHQ5MCAzOGg1MTJ2MTkyaC05NnEtNDAgMCAtNjggMjh0LTI4IDY4djMyMHEwIDQwIDI4IDY4dDY4IDI4aDMyMHE0MCAwIDY4IC0yOHQyOCAtNjh2LTMyMHEwIC00MCAtMjggLTY4dC02OCAtMjhoLTk2di0xOTJoNTEycTUyIDAgOTAgLTM4dDM4IC05MHYtMTkyaDk2cTQwIDAgNjggLTI4dDI4IC02OCB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZTk7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTg5NiA3MDh2LTU4MHEwIC0xMDQgLTc2IC0xODB0LTE4MCAtNzZ0LTE4MCA3NnQtNzYgMTgwcTAgMjYgMTkgNDV0NDUgMTl0NDUgLTE5dDE5IC00NXEwIC01MCAzOSAtODl0ODkgLTM5dDg5IDM5dDM5IDg5djU4MHEzMyAxMSA2NCAxMXQ2NCAtMTF6TTE2NjQgNjgxcTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNXEtMTEgMCAtMjMgMTBxLTQ5IDQ2IC05MyA2OXQtMTAyIDIzcS02OCAwIC0xMjggLTM3dC0xMDMgLTk3IHEtNyAtMTAgLTE3LjUgLTI4dC0xNC41IC0yNHEtMTEgLTE3IC0yOCAtMTdxLTE4IDAgLTI5IDE3cS00IDYgLTE0LjUgMjR0LTE3LjUgMjhxLTQzIDYwIC0xMDIuNSA5N3QtMTI3LjUgMzd0LTEyNy41IC0zN3QtMTAyLjUgLTk3cS03IC0xMCAtMTcuNSAtMjh0LTE0LjUgLTI0cS0xMSAtMTcgLTI5IC0xN3EtMTcgMCAtMjggMTdxLTQgNiAtMTQuNSAyNHQtMTcuNSAyOHEtNDMgNjAgLTEwMyA5N3QtMTI4IDM3cS01OCAwIC0xMDIgLTIzdC05MyAtNjkgcS0xMiAtMTAgLTIzIC0xMHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41cTAgNSAxIDdxNDUgMTgzIDE3Mi41IDMxOS41dDI5OCAyMDQuNXQzNjAuNSA2OHExNDAgMCAyNzQuNSAtNDB0MjQ2LjUgLTExMy41dDE5NC41IC0xODd0MTE1LjUgLTI1MS41cTEgLTIgMSAtN3pNODk2IDE0MDh2LTk4cS00MiAyIC02NCAydC02NCAtMnY5OHEwIDI2IDE5IDQ1dDQ1IDE5dDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZWE7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTc2OCAtMTI4aDg5NnY2NDBoLTQxNnEtNDAgMCAtNjggMjh0LTI4IDY4djQxNmgtMzg0di0xMTUyek0xMDI0IDEzMTJ2NjRxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC03MDRxLTEzIDAgLTIyLjUgLTkuNXQtOS41IC0yMi41di02NHEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDcwNHExMyAwIDIyLjUgOS41dDkuNSAyMi41ek0xMjgwIDY0MGgyOTlsLTI5OSAyOTl2LTI5OXpNMTc5MiA1MTJ2LTY3MnEwIC00MCAtMjggLTY4dC02OCAtMjggaC05NjBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxNjBoLTU0NHEtNDAgMCAtNjggMjh0LTI4IDY4djEzNDRxMCA0MCAyOCA2OHQ2OCAyOGgxMDg4cTQwIDAgNjggLTI4dDI4IC02OHYtMzI4cTIxIC0xMyAzNiAtMjhsNDA4IC00MDhxMjggLTI4IDQ4IC03NnQyMCAtODh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZWI7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTczNiA5NjBxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41dC0yMi41IDkuNXQtOS41IDIyLjVxMCA0NiAtNTQgNzF0LTEwNiAyNXEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41dDkuNSAyMi41dDIyLjUgOS41cTUwIDAgOTkuNSAtMTZ0ODcgLTU0dDM3LjUgLTkwek04OTYgOTYwcTAgNzIgLTM0LjUgMTM0dC05MCAxMDEuNXQtMTIzIDYydC0xMzYuNSAyMi41dC0xMzYuNSAtMjIuNXQtMTIzIC02MnQtOTAgLTEwMS41dC0zNC41IC0xMzQgcTAgLTEwMSA2OCAtMTgwcTEwIC0xMSAzMC41IC0zM3QzMC41IC0zM3ExMjggLTE1MyAxNDEgLTI5OGgyMjhxMTMgMTQ1IDE0MSAyOThxMTAgMTEgMzAuNSAzM3QzMC41IDMzcTY4IDc5IDY4IDE4MHpNMTAyNCA5NjBxMCAtMTU1IC0xMDMgLTI2OHEtNDUgLTQ5IC03NC41IC04N3QtNTkuNSAtOTUuNXQtMzQgLTEwNy41cTQ3IC0yOCA0NyAtODJxMCAtMzcgLTI1IC02NHEyNSAtMjcgMjUgLTY0cTAgLTUyIC00NSAtODFxMTMgLTIzIDEzIC00NyBxMCAtNDYgLTMxLjUgLTcxdC03Ny41IC0yNXEtMjAgLTQ0IC02MCAtNzB0LTg3IC0yNnQtODcgMjZ0LTYwIDcwcS00NiAwIC03Ny41IDI1dC0zMS41IDcxcTAgMjQgMTMgNDdxLTQ1IDI5IC00NSA4MXEwIDM3IDI1IDY0cS0yNSAyNyAtMjUgNjRxMCA1NCA0NyA4MnEtNCA1MCAtMzQgMTA3LjV0LTU5LjUgOTUuNXQtNzQuNSA4N3EtMTAzIDExMyAtMTAzIDI2OHEwIDk5IDQ0LjUgMTg0LjV0MTE3IDE0MnQxNjQgODl0MTg2LjUgMzIuNSB0MTg2LjUgLTMyLjV0MTY0IC04OXQxMTcgLTE0MnQ0NC41IC0xODQuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBlYzsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTc5MiAzNTJ2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTEzNzZ2LTE5MnEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVxLTEyIDAgLTI0IDEwbC0zMTkgMzIwcS05IDkgLTkgMjJxMCAxNCA5IDIzbDMyMCAzMjBxOSA5IDIzIDlxMTMgMCAyMi41IC05LjV0OS41IC0yMi41di0xOTJoMTM3NnExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTE3OTIgODk2cTAgLTE0IC05IC0yM2wtMzIwIC0zMjBxLTkgLTkgLTIzIC05IHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MmgtMTM3NnEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djE5MnEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDEzNzZ2MTkycTAgMTQgOSAyM3QyMyA5cTEyIDAgMjQgLTEwbDMxOSAtMzE5cTkgLTkgOSAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZWQ7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTEyODAgNjA4cTAgMTQgLTkgMjN0LTIzIDloLTIyNHYzNTJxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC0xOTJxLTEzIDAgLTIyLjUgLTkuNXQtOS41IC0yMi41di0zNTJoLTIyNHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjVxMCAtMTQgOSAtMjNsMzUyIC0zNTJxOSAtOSAyMyAtOXQyMyA5bDM1MSAzNTFxMTAgMTIgMTAgMjR6TTE5MjAgMzg0cTAgLTE1OSAtMTEyLjUgLTI3MS41dC0yNzEuNSAtMTEyLjVoLTEwODggcS0xODUgMCAtMzE2LjUgMTMxLjV0LTEzMS41IDMxNi41cTAgMTMwIDcwIDI0MHQxODggMTY1cS0yIDMwIC0yIDQzcTAgMjEyIDE1MCAzNjJ0MzYyIDE1MHExNTYgMCAyODUuNSAtODd0MTg4LjUgLTIzMXE3MSA2MiAxNjYgNjJxMTA2IDAgMTgxIC03NXQ3NSAtMTgxcTAgLTc2IC00MSAtMTM4cTEzMCAtMzEgMjEzLjUgLTEzNS41dDgzLjUgLTIzOC41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGVlOyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik0xMjgwIDY3MnEwIDE0IC05IDIzbC0zNTIgMzUycS05IDkgLTIzIDl0LTIzIC05bC0zNTEgLTM1MXEtMTAgLTEyIC0xMCAtMjRxMCAtMTQgOSAtMjN0MjMgLTloMjI0di0zNTJxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWgxOTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXYzNTJoMjI0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTE5MjAgMzg0cTAgLTE1OSAtMTEyLjUgLTI3MS41dC0yNzEuNSAtMTEyLjVoLTEwODggcS0xODUgMCAtMzE2LjUgMTMxLjV0LTEzMS41IDMxNi41cTAgMTMwIDcwIDI0MHQxODggMTY1cS0yIDMwIC0yIDQzcTAgMjEyIDE1MCAzNjJ0MzYyIDE1MHExNTYgMCAyODUuNSAtODd0MTg4LjUgLTIzMXE3MSA2MiAxNjYgNjJxMTA2IDAgMTgxIC03NXQ3NSAtMTgxcTAgLTc2IC00MSAtMTM4cTEzMCAtMzEgMjEzLjUgLTEzNS41dDgzLjUgLTIzOC41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGYwOyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0zODQgMTkycTAgLTI2IC0xOSAtNDV0LTQ1IC0xOXQtNDUgMTl0LTE5IDQ1dDE5IDQ1dDQ1IDE5dDQ1IC0xOXQxOSAtNDV6TTE0MDggMTMxcTAgLTEyMSAtNzMgLTE5MHQtMTk0IC02OWgtODc0cS0xMjEgMCAtMTk0IDY5dC03MyAxOTBxMCA2OCA1LjUgMTMxdDI0IDEzOHQ0Ny41IDEzMi41dDgxIDEwM3QxMjAgNjAuNXEtMjIgLTUyIC0yMiAtMTIwdi0yMDNxLTU4IC0yMCAtOTMgLTcwdC0zNSAtMTExcTAgLTgwIDU2IC0xMzZ0MTM2IC01NiB0MTM2IDU2dDU2IDEzNnEwIDYxIC0zNS41IDExMXQtOTIuNSA3MHYyMDNxMCA2MiAyNSA5M3ExMzIgLTEwNCAyOTUgLTEwNHQyOTUgMTA0cTI1IC0zMSAyNSAtOTN2LTY0cS0xMDYgMCAtMTgxIC03NXQtNzUgLTE4MXYtODlxLTMyIC0yOSAtMzIgLTcxcTAgLTQwIDI4IC02OHQ2OCAtMjh0NjggMjh0MjggNjhxMCA0MiAtMzIgNzF2ODlxMCA1MiAzOCA5MHQ5MCAzOHQ5MCAtMzh0MzggLTkwdi04OXEtMzIgLTI5IC0zMiAtNzFxMCAtNDAgMjggLTY4IHQ2OCAtMjh0NjggMjh0MjggNjhxMCA0MiAtMzIgNzF2ODlxMCA2OCAtMzQuNSAxMjcuNXQtOTMuNSA5My41cTAgMTAgMC41IDQyLjV0MCA0OHQtMi41IDQxLjV0LTcgNDd0LTEzIDQwcTY4IC0xNSAxMjAgLTYwLjV0ODEgLTEwM3Q0Ny41IC0xMzIuNXQyNCAtMTM4dDUuNSAtMTMxek0xMDg4IDEwMjRxMCAtMTU5IC0xMTIuNSAtMjcxLjV0LTI3MS41IC0xMTIuNXQtMjcxLjUgMTEyLjV0LTExMi41IDI3MS41dDExMi41IDI3MS41dDI3MS41IDExMi41IHQyNzEuNSAtMTEyLjV0MTEyLjUgLTI3MS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGYxOyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xMjgwIDgzMnEwIDI2IC0xOSA0NXQtNDUgMTl0LTQ1IC0xOXQtMTkgLTQ1dDE5IC00NXQ0NSAtMTl0NDUgMTl0MTkgNDV6TTE0MDggODMycTAgLTYyIC0zNS41IC0xMTF0LTkyLjUgLTcwdi0zOTVxMCAtMTU5IC0xMzEuNSAtMjcxLjV0LTMxNi41IC0xMTIuNXQtMzE2LjUgMTEyLjV0LTEzMS41IDI3MS41djEzMnEtMTY0IDIwIC0yNzQgMTI4dC0xMTAgMjUydjUxMnEwIDI2IDE5IDQ1dDQ1IDE5cTYgMCAxNiAtMnExNyAzMCA0NyA0OCB0NjUgMThxNTMgMCA5MC41IC0zNy41dDM3LjUgLTkwLjV0LTM3LjUgLTkwLjV0LTkwLjUgLTM3LjVxLTMzIDAgLTY0IDE4di00MDJxMCAtMTA2IDk0IC0xODF0MjI2IC03NXQyMjYgNzV0OTQgMTgxdjQwMnEtMzEgLTE4IC02NCAtMThxLTUzIDAgLTkwLjUgMzcuNXQtMzcuNSA5MC41dDM3LjUgOTAuNXQ5MC41IDM3LjVxMzUgMCA2NSAtMTh0NDcgLTQ4cTEwIDIgMTYgMnEyNiAwIDQ1IC0xOXQxOSAtNDV2LTUxMnEwIC0xNDQgLTExMCAtMjUyIHQtMjc0IC0xMjh2LTEzMnEwIC0xMDYgOTQgLTE4MXQyMjYgLTc1dDIyNiA3NXQ5NCAxODF2Mzk1cS01NyAyMSAtOTIuNSA3MHQtMzUuNSAxMTFxMCA4MCA1NiAxMzZ0MTM2IDU2dDEzNiAtNTZ0NTYgLTEzNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBmMjsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNNjQwIDExNTJoNTEydjEyOGgtNTEydi0xMjh6TTI4OCAxMTUydi0xMjgwaC02NHEtOTIgMCAtMTU4IDY2dC02NiAxNTh2ODMycTAgOTIgNjYgMTU4dDE1OCA2Nmg2NHpNMTQwOCAxMTUydi0xMjgwaC0xMDI0djEyODBoMTI4djE2MHEwIDQwIDI4IDY4dDY4IDI4aDU3NnE0MCAwIDY4IC0yOHQyOCAtNjh2LTE2MGgxMjh6TTE3OTIgOTI4di04MzJxMCAtOTIgLTY2IC0xNTh0LTE1OCAtNjZoLTY0djEyODBoNjRxOTIgMCAxNTggLTY2IHQ2NiAtMTU4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGYzOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik04NDggLTE2MHEwIDE2IC0xNiAxNnEtNTkgMCAtMTAxLjUgNDIuNXQtNDIuNSAxMDEuNXEwIDE2IC0xNiAxNnQtMTYgLTE2cTAgLTczIDUxLjUgLTEyNC41dDEyNC41IC01MS41cTE2IDAgMTYgMTZ6TTE2NjQgMTI4cTAgLTUyIC0zOCAtOTB0LTkwIC0zOGgtNDQ4cTAgLTEwNiAtNzUgLTE4MXQtMTgxIC03NXQtMTgxIDc1dC03NSAxODFoLTQ0OHEtNTIgMCAtOTAgMzh0LTM4IDkwcTE5MCAxNjEgMjg3IDM5Ny41dDk3IDQ5OC41IHEwIDE2NSA5NiAyNjJ0MjY0IDExN3EtOCAxOCAtOCAzN3EwIDQwIDI4IDY4dDY4IDI4dDY4IC0yOHQyOCAtNjhxMCAtMTkgLTggLTM3cTE2OCAtMjAgMjY0IC0xMTd0OTYgLTI2MnEwIC0yNjIgOTcgLTQ5OC41dDI4NyAtMzk3LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZjQ7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTE2NjQgODk2cTAgODAgLTU2IDEzNnQtMTM2IDU2aC02NHYtMzg0aDY0cTgwIDAgMTM2IDU2dDU2IDEzNnpNMCAxMjhoMTc5MnEwIC0xMDYgLTc1IC0xODF0LTE4MSAtNzVoLTEyODBxLTEwNiAwIC0xODEgNzV0LTc1IDE4MXpNMTg1NiA4OTZxMCAtMTU5IC0xMTIuNSAtMjcxLjV0LTI3MS41IC0xMTIuNWgtNjR2LTMycTAgLTkyIC02NiAtMTU4dC0xNTggLTY2aC03MDRxLTkyIDAgLTE1OCA2NnQtNjYgMTU4djczNnEwIDI2IDE5IDQ1IHQ0NSAxOWgxMTUycTE1OSAwIDI3MS41IC0xMTIuNXQxMTIuNSAtMjcxLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZjU7IiBob3Jpei1hZHYteD0iMTQwOCIgZD0iTTY0MCAxNDcydi02NDBxMCAtNjEgLTM1LjUgLTExMXQtOTIuNSAtNzB2LTc3OXEwIC01MiAtMzggLTkwdC05MCAtMzhoLTEyOHEtNTIgMCAtOTAgMzh0LTM4IDkwdjc3OXEtNTcgMjAgLTkyLjUgNzB0LTM1LjUgMTExdjY0MHEwIDI2IDE5IDQ1dDQ1IDE5dDQ1IC0xOXQxOSAtNDV2LTQxNnEwIC0yNiAxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1djQxNnEwIDI2IDE5IDQ1dDQ1IDE5dDQ1IC0xOXQxOSAtNDV2LTQxNnEwIC0yNiAxOSAtNDUgdDQ1IC0xOXQ0NSAxOXQxOSA0NXY0MTZxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTl0MTkgLTQ1ek0xNDA4IDE0NzJ2LTE2MDBxMCAtNTIgLTM4IC05MHQtOTAgLTM4aC0xMjhxLTUyIDAgLTkwIDM4dC0zOCA5MHY1MTJoLTIyNHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djgwMHEwIDEzMiA5NCAyMjZ0MjI2IDk0aDI1NnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZjY7IiBob3Jpei1hZHYteD0iMTI4MCIgZD0iTTEwMjQgMzUydi02NHEwIC0xNCAtOSAtMjN0LTIzIC05aC03MDRxLTE0IDAgLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNzA0cTE0IDAgMjMgLTl0OSAtMjN6TTEwMjQgNjA4di02NHEwIC0xNCAtOSAtMjN0LTIzIC05aC03MDRxLTE0IDAgLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloNzA0cTE0IDAgMjMgLTl0OSAtMjN6TTEyOCAwaDEwMjR2NzY4aC00MTZxLTQwIDAgLTY4IDI4dC0yOCA2OHY0MTZoLTUxMnYtMTI4MHogTTc2OCA4OTZoMzc2cS0xMCAyOSAtMjIgNDFsLTMxMyAzMTNxLTEyIDEyIC00MSAyMnYtMzc2ek0xMjgwIDg2NHYtODk2cTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTA4OHEtNDAgMCAtNjggMjh0LTI4IDY4djEzNDRxMCA0MCAyOCA2OHQ2OCAyOGg2NDBxNDAgMCA4OCAtMjB0NzYgLTQ4bDMxMiAtMzEycTI4IC0yOCA0OCAtNzZ0MjAgLTg4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGY3OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0zODQgMjI0di02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTM4NCA0ODB2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXogTTY0MCA0ODB2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMzg0IDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNMTE1MiAyMjR2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNODk2IDQ4MHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNNjQwIDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0zODQgOTkydi02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IE0xMTUyIDQ4MHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek04OTYgNzM2di02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IE02NDAgOTkydi02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTM4NCAxMjQ4di02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IE0xMTUyIDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek04OTYgOTkydi02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IE02NDAgMTI0OHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xMTUyIDk5MnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNODk2IDEyNDh2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMTE1MiAxMjQ4di02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6IE04OTYgLTEyOGgzODR2MTUzNmgtMTE1MnYtMTUzNmgzODR2MjI0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMzIwcTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXYtMjI0ek0xNDA4IDE0NzJ2LTE2NjRxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xMjgwcS0yNiAwIC00NSAxOXQtMTkgNDV2MTY2NHEwIDI2IDE5IDQ1dDQ1IDE5aDEyODBxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMGY4OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0zODQgMjI0di02NHEwIC0xMyAtOS41IC0yMi41dC0yMi41IC05LjVoLTY0cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2NjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg2NHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV6TTM4NCA0ODB2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXogTTY0MCA0ODB2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNMzg0IDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNMTE1MiAyMjR2LTY0cTAgLTEzIC05LjUgLTIyLjV0LTIyLjUgLTkuNWgtNjRxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXY2NHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDY0cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXpNODk2IDQ4MHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNNjQwIDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xMTUyIDQ4MHYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNODk2IDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41ek0xMTUyIDczNnYtNjRxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC02NHEtMTMgMCAtMjIuNSA5LjV0LTkuNSAyMi41djY0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjRxMTMgMCAyMi41IC05LjV0OS41IC0yMi41eiBNODk2IC0xMjhoMzg0djExNTJoLTI1NnYtMzJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC00NDhxLTQwIDAgLTY4IDI4dC0yOCA2OHYzMmgtMjU2di0xMTUyaDM4NHYyMjRxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgzMjBxMTMgMCAyMi41IC05LjV0OS41IC0yMi41di0yMjR6TTg5NiAxMDU2djMyMHEwIDEzIC05LjUgMjIuNXQtMjIuNSA5LjVoLTY0cS0xMyAwIC0yMi41IC05LjV0LTkuNSAtMjIuNXYtOTZoLTEyOHY5NnEwIDEzIC05LjUgMjIuNSB0LTIyLjUgOS41aC02NHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTMyMHEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV2OTZoMTI4di05NnEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDY0cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTE0MDggMTA4OHYtMTI4MHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTEyODBxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjgwcTAgMjYgMTkgNDV0NDUgMTloMzIwIHYyODhxMCA0MCAyOCA2OHQ2OCAyOGg0NDhxNDAgMCA2OCAtMjh0MjggLTY4di0yODhoMzIwcTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBmOTsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNNjQwIDEyOHEwIDUzIC0zNy41IDkwLjV0LTkwLjUgMzcuNXQtOTAuNSAtMzcuNXQtMzcuNSAtOTAuNXQzNy41IC05MC41dDkwLjUgLTM3LjV0OTAuNSAzNy41dDM3LjUgOTAuNXpNMjU2IDY0MGgzODR2MjU2aC0xNThxLTE0IC0yIC0yMiAtOWwtMTk1IC0xOTVxLTcgLTEyIC05IC0yMnYtMzB6TTE1MzYgMTI4cTAgNTMgLTM3LjUgOTAuNXQtOTAuNSAzNy41dC05MC41IC0zNy41dC0zNy41IC05MC41dDM3LjUgLTkwLjV0OTAuNSAtMzcuNSB0OTAuNSAzNy41dDM3LjUgOTAuNXpNMTY2NCA4MDB2MTkycTAgMTQgLTkgMjN0LTIzIDloLTIyNHYyMjRxMCAxNCAtOSAyM3QtMjMgOWgtMTkycS0xNCAwIC0yMyAtOXQtOSAtMjN2LTIyNGgtMjI0cS0xNCAwIC0yMyAtOXQtOSAtMjN2LTE5MnEwIC0xNCA5IC0yM3QyMyAtOWgyMjR2LTIyNHEwIC0xNCA5IC0yM3QyMyAtOWgxOTJxMTQgMCAyMyA5dDkgMjN2MjI0aDIyNHExNCAwIDIzIDl0OSAyM3pNMTkyMCAxMzQ0di0xMTUyIHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE5MnEwIC0xMDYgLTc1IC0xODF0LTE4MSAtNzV0LTE4MSA3NXQtNzUgMTgxaC0zODRxMCAtMTA2IC03NSAtMTgxdC0xODEgLTc1dC0xODEgNzV0LTc1IDE4MWgtMTI4cS0yNiAwIC00NSAxOXQtMTkgNDV0MTkgNDV0NDUgMTl2NDE2cTAgMjYgMTMgNTh0MzIgNTFsMTk4IDE5OHExOSAxOSA1MSAzMnQ1OCAxM2gxNjB2MzIwcTAgMjYgMTkgNDV0NDUgMTloMTE1MnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZmE7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTEyODAgNDE2djE5MnEwIDE0IC05IDIzdC0yMyA5aC0yMjR2MjI0cTAgMTQgLTkgMjN0LTIzIDloLTE5MnEtMTQgMCAtMjMgLTl0LTkgLTIzdi0yMjRoLTIyNHEtMTQgMCAtMjMgLTl0LTkgLTIzdi0xOTJxMCAtMTQgOSAtMjN0MjMgLTloMjI0di0yMjRxMCAtMTQgOSAtMjN0MjMgLTloMTkycTE0IDAgMjMgOXQ5IDIzdjIyNGgyMjRxMTQgMCAyMyA5dDkgMjN6TTY0MCAxMTUyaDUxMnYxMjhoLTUxMnYtMTI4ek0yNTYgMTE1MnYtMTI4MGgtMzIgcS05MiAwIC0xNTggNjZ0LTY2IDE1OHY4MzJxMCA5MiA2NiAxNTh0MTU4IDY2aDMyek0xNDQwIDExNTJ2LTEyODBoLTEwODh2MTI4MGgxNjB2MTYwcTAgNDAgMjggNjh0NjggMjhoNTc2cTQwIDAgNjggLTI4dDI4IC02OHYtMTYwaDE2MHpNMTc5MiA5Mjh2LTgzMnEwIC05MiAtNjYgLTE1OHQtMTU4IC02NmgtMzJ2MTI4MGgzMnE5MiAwIDE1OCAtNjZ0NjYgLTE1OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBmYjsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNMTkyMCA1NzZxLTEgLTMyIC0yODggLTk2bC0zNTIgLTMybC0yMjQgLTY0aC02NGwtMjkzIC0zNTJoNjlxMjYgMCA0NSAtNC41dDE5IC0xMS41dC0xOSAtMTEuNXQtNDUgLTQuNWgtOTZoLTE2MGgtNjR2MzJoNjR2NDE2aC0xNjBsLTE5MiAtMjI0aC05NmwtMzIgMzJ2MTkyaDMydjMyaDEyOHY4bC0xOTIgMjR2MTI4bDE5MiAyNHY4aC0xMjh2MzJoLTMydjE5MmwzMiAzMmg5NmwxOTIgLTIyNGgxNjB2NDE2aC02NHYzMmg2NGgxNjBoOTYgcTI2IDAgNDUgLTQuNXQxOSAtMTEuNXQtMTkgLTExLjV0LTQ1IC00LjVoLTY5bDI5MyAtMzUyaDY0bDIyNCAtNjRsMzUyIC0zMnEyNjEgLTU4IDI4NyAtOTN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZmM7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTY0MCA2NDB2Mzg0aC0yNTZ2LTI1NnEwIC01MyAzNy41IC05MC41dDkwLjUgLTM3LjVoMTI4ek0xNjY0IDE5MnYtMTkyaC0xMTUydjE5MmwxMjggMTkyaC0xMjhxLTE1OSAwIC0yNzEuNSAxMTIuNXQtMTEyLjUgMjcxLjV2MzIwbC02NCA2NGwzMiAxMjhoNDgwbDMyIDEyOGg5NjBsMzIgLTE5MmwtNjQgLTMydi04MDB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYwZmQ7IiBkPSJNMTI4MCAxOTJ2ODk2cTAgMjYgLTE5IDQ1dC00NSAxOWgtMTI4cS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMzIwaC01MTJ2MzIwcTAgMjYgLTE5IDQ1dC00NSAxOWgtMTI4cS0yNiAwIC00NSAtMTl0LTE5IC00NXYtODk2cTAgLTI2IDE5IC00NXQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV2MzIwaDUxMnYtMzIwcTAgLTI2IDE5IC00NXQ0NSAtMTloMTI4cTI2IDAgNDUgMTl0MTkgNDV6TTE1MzYgMTEyMHYtOTYwIHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjBmZTsiIGQ9Ik0xMjgwIDU3NnYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC0zMjB2MzIwcTAgMjYgLTE5IDQ1dC00NSAxOWgtMTI4cS0yNiAwIC00NSAtMTl0LTE5IC00NXYtMzIwaC0zMjBxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgzMjB2LTMyMHEwIC0yNiAxOSAtNDV0NDUgLTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djMyMGgzMjBxMjYgMCA0NSAxOXQxOSA0NXpNMTUzNiAxMTIwdi05NjAgcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTAwOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik02MjcgMTYwcTAgLTEzIC0xMCAtMjNsLTUwIC01MHEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC00NjYgNDY2cS0xMCAxMCAtMTAgMjN0MTAgMjNsNDY2IDQ2NnExMCAxMCAyMyAxMHQyMyAtMTBsNTAgLTUwcTEwIC0xMCAxMCAtMjN0LTEwIC0yM2wtMzkzIC0zOTNsMzkzIC0zOTNxMTAgLTEwIDEwIC0yM3pNMTAxMSAxNjBxMCAtMTMgLTEwIC0yM2wtNTAgLTUwcS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTQ2NiA0NjZxLTEwIDEwIC0xMCAyMyB0MTAgMjNsNDY2IDQ2NnExMCAxMCAyMyAxMHQyMyAtMTBsNTAgLTUwcTEwIC0xMCAxMCAtMjN0LTEwIC0yM2wtMzkzIC0zOTNsMzkzIC0zOTNxMTAgLTEwIDEwIC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwMTsiIGhvcml6LWFkdi14PSIxMDI0IiBkPSJNNTk1IDU3NnEwIC0xMyAtMTAgLTIzbC00NjYgLTQ2NnEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC01MCA1MHEtMTAgMTAgLTEwIDIzdDEwIDIzbDM5MyAzOTNsLTM5MyAzOTNxLTEwIDEwIC0xMCAyM3QxMCAyM2w1MCA1MHExMCAxMCAyMyAxMHQyMyAtMTBsNDY2IC00NjZxMTAgLTEwIDEwIC0yM3pNOTc5IDU3NnEwIC0xMyAtMTAgLTIzbC00NjYgLTQ2NnEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC01MCA1MHEtMTAgMTAgLTEwIDIzdDEwIDIzIGwzOTMgMzkzbC0zOTMgMzkzcS0xMCAxMCAtMTAgMjN0MTAgMjNsNTAgNTBxMTAgMTAgMjMgMTB0MjMgLTEwbDQ2NiAtNDY2cTEwIC0xMCAxMCAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMDI7IiBob3Jpei1hZHYteD0iMTE1MiIgZD0iTTEwNzUgMjI0cTAgLTEzIC0xMCAtMjNsLTUwIC01MHEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC0zOTMgMzkzbC0zOTMgLTM5M3EtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC01MCA1MHEtMTAgMTAgLTEwIDIzdDEwIDIzbDQ2NiA0NjZxMTAgMTAgMjMgMTB0MjMgLTEwbDQ2NiAtNDY2cTEwIC0xMCAxMCAtMjN6TTEwNzUgNjA4cTAgLTEzIC0xMCAtMjNsLTUwIC01MHEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC0zOTMgMzkzbC0zOTMgLTM5MyBxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtNTAgNTBxLTEwIDEwIC0xMCAyM3QxMCAyM2w0NjYgNDY2cTEwIDEwIDIzIDEwdDIzIC0xMGw0NjYgLTQ2NnExMCAtMTAgMTAgLTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTAzOyIgaG9yaXotYWR2LXg9IjExNTIiIGQ9Ik0xMDc1IDY3MnEwIC0xMyAtMTAgLTIzbC00NjYgLTQ2NnEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC00NjYgNDY2cS0xMCAxMCAtMTAgMjN0MTAgMjNsNTAgNTBxMTAgMTAgMjMgMTB0MjMgLTEwbDM5MyAtMzkzbDM5MyAzOTNxMTAgMTAgMjMgMTB0MjMgLTEwbDUwIC01MHExMCAtMTAgMTAgLTIzek0xMDc1IDEwNTZxMCAtMTMgLTEwIC0yM2wtNDY2IC00NjZxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtNDY2IDQ2NnEtMTAgMTAgLTEwIDIzIHQxMCAyM2w1MCA1MHExMCAxMCAyMyAxMHQyMyAtMTBsMzkzIC0zOTNsMzkzIDM5M3ExMCAxMCAyMyAxMHQyMyAtMTBsNTAgLTUwcTEwIC0xMCAxMCAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMDQ7IiBob3Jpei1hZHYteD0iNjQwIiBkPSJNNjI3IDk5MnEwIC0xMyAtMTAgLTIzbC0zOTMgLTM5M2wzOTMgLTM5M3ExMCAtMTAgMTAgLTIzdC0xMCAtMjNsLTUwIC01MHEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC00NjYgNDY2cS0xMCAxMCAtMTAgMjN0MTAgMjNsNDY2IDQ2NnExMCAxMCAyMyAxMHQyMyAtMTBsNTAgLTUwcTEwIC0xMCAxMCAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMDU7IiBob3Jpei1hZHYteD0iNjQwIiBkPSJNNTk1IDU3NnEwIC0xMyAtMTAgLTIzbC00NjYgLTQ2NnEtMTAgLTEwIC0yMyAtMTB0LTIzIDEwbC01MCA1MHEtMTAgMTAgLTEwIDIzdDEwIDIzbDM5MyAzOTNsLTM5MyAzOTNxLTEwIDEwIC0xMCAyM3QxMCAyM2w1MCA1MHExMCAxMCAyMyAxMHQyMyAtMTBsNDY2IC00NjZxMTAgLTEwIDEwIC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwNjsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNMTA3NSAzNTJxMCAtMTMgLTEwIC0yM2wtNTAgLTUwcS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTM5MyAzOTNsLTM5MyAtMzkzcS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTUwIDUwcS0xMCAxMCAtMTAgMjN0MTAgMjNsNDY2IDQ2NnExMCAxMCAyMyAxMHQyMyAtMTBsNDY2IC00NjZxMTAgLTEwIDEwIC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwNzsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNMTA3NSA4MDBxMCAtMTMgLTEwIC0yM2wtNDY2IC00NjZxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtNDY2IDQ2NnEtMTAgMTAgLTEwIDIzdDEwIDIzbDUwIDUwcTEwIDEwIDIzIDEwdDIzIC0xMGwzOTMgLTM5M2wzOTMgMzkzcTEwIDEwIDIzIDEwdDIzIC0xMGw1MCAtNTBxMTAgLTEwIDEwIC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwODsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNMTc5MiA1NDR2ODMycTAgMTMgLTkuNSAyMi41dC0yMi41IDkuNWgtMTYwMHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV2LTgzMnEwIC0xMyA5LjUgLTIyLjV0MjIuNSAtOS41aDE2MDBxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpNMTkyMCAxMzc2di0xMDg4cTAgLTY2IC00NyAtMTEzdC0xMTMgLTQ3aC01NDRxMCAtMzcgMTYgLTc3LjV0MzIgLTcxdDE2IC00My41cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtNTEycS0yNiAwIC00NSAxOSB0LTE5IDQ1cTAgMTQgMTYgNDR0MzIgNzB0MTYgNzhoLTU0NHEtNjYgMCAtMTEzIDQ3dC00NyAxMTN2MTA4OHEwIDY2IDQ3IDExM3QxMTMgNDdoMTYwMHE2NiAwIDExMyAtNDd0NDcgLTExM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEwOTsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNNDE2IDI1NnEtNjYgMCAtMTEzIDQ3dC00NyAxMTN2NzA0cTAgNjYgNDcgMTEzdDExMyA0N2gxMDg4cTY2IDAgMTEzIC00N3Q0NyAtMTEzdi03MDRxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDdoLTEwODh6TTM4NCAxMTIwdi03MDRxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWgxMDg4cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV2NzA0cTAgMTMgLTkuNSAyMi41dC0yMi41IDkuNWgtMTA4OHEtMTMgMCAtMjIuNSAtOS41dC05LjUgLTIyLjV6IE0xNzYwIDE5MmgxNjB2LTk2cTAgLTQwIC00NyAtNjh0LTExMyAtMjhoLTE2MDBxLTY2IDAgLTExMyAyOHQtNDcgNjh2OTZoMTYwaDE2MDB6TTEwNDAgOTZxMTYgMCAxNiAxNnQtMTYgMTZoLTE2MHEtMTYgMCAtMTYgLTE2dDE2IC0xNmgxNjB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMGE7IiBob3Jpei1hZHYteD0iMTE1MiIgZD0iTTY0MCAxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1ek0xMDI0IDI4OHY5NjBxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC04MzJxLTEzIDAgLTIyLjUgLTkuNXQtOS41IC0yMi41di05NjBxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWg4MzJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpNMTE1MiAxMjQ4di0xMDg4cTAgLTY2IC00NyAtMTEzdC0xMTMgLTQ3aC04MzIgcS02NiAwIC0xMTMgNDd0LTQ3IDExM3YxMDg4cTAgNjYgNDcgMTEzdDExMyA0N2g4MzJxNjYgMCAxMTMgLTQ3dDQ3IC0xMTN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMGI7IiBob3Jpei1hZHYteD0iNzY4IiBkPSJNNDY0IDEyOHEwIDMzIC0yMy41IDU2LjV0LTU2LjUgMjMuNXQtNTYuNSAtMjMuNXQtMjMuNSAtNTYuNXQyMy41IC01Ni41dDU2LjUgLTIzLjV0NTYuNSAyMy41dDIzLjUgNTYuNXpNNjcyIDI4OHY3MDRxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC01MTJxLTEzIDAgLTIyLjUgLTkuNXQtOS41IC0yMi41di03MDRxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWg1MTJxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpNNDgwIDExMzYgcTAgMTYgLTE2IDE2aC0xNjBxLTE2IDAgLTE2IC0xNnQxNiAtMTZoMTYwcTE2IDAgMTYgMTZ6TTc2OCAxMTUydi0xMDI0cTAgLTUyIC0zOCAtOTB0LTkwIC0zOGgtNTEycS01MiAwIC05MCAzOHQtMzggOTB2MTAyNHEwIDUyIDM4IDkwdDkwIDM4aDUxMnE1MiAwIDkwIC0zOHQzOCAtOTB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMGM7IiBkPSJNNzY4IDExODRxLTE0OCAwIC0yNzMgLTczdC0xOTggLTE5OHQtNzMgLTI3M3Q3MyAtMjczdDE5OCAtMTk4dDI3MyAtNzN0MjczIDczdDE5OCAxOTh0NzMgMjczdC03MyAyNzN0LTE5OCAxOTh0LTI3MyA3M3pNMTUzNiA2NDBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDMgdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTBkOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik03NjggNTc2di0zODRxMCAtODAgLTU2IC0xMzZ0LTEzNiAtNTZoLTM4NHEtODAgMCAtMTM2IDU2dC01NiAxMzZ2NzA0cTAgMTA0IDQwLjUgMTk4LjV0MTA5LjUgMTYzLjV0MTYzLjUgMTA5LjV0MTk4LjUgNDAuNWg2NHEyNiAwIDQ1IC0xOXQxOSAtNDV2LTEyOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTY0cS0xMDYgMCAtMTgxIC03NXQtNzUgLTE4MXYtMzJxMCAtNDAgMjggLTY4dDY4IC0yOGgyMjRxODAgMCAxMzYgLTU2dDU2IC0xMzZ6IE0xNjY0IDU3NnYtMzg0cTAgLTgwIC01NiAtMTM2dC0xMzYgLTU2aC0zODRxLTgwIDAgLTEzNiA1NnQtNTYgMTM2djcwNHEwIDEwNCA0MC41IDE5OC41dDEwOS41IDE2My41dDE2My41IDEwOS41dDE5OC41IDQwLjVoNjRxMjYgMCA0NSAtMTl0MTkgLTQ1di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC02NHEtMTA2IDAgLTE4MSAtNzV0LTc1IC0xODF2LTMycTAgLTQwIDI4IC02OHQ2OCAtMjhoMjI0cTgwIDAgMTM2IC01NnQ1NiAtMTM2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTBlOyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik03NjggMTIxNnYtNzA0cTAgLTEwNCAtNDAuNSAtMTk4LjV0LTEwOS41IC0xNjMuNXQtMTYzLjUgLTEwOS41dC0xOTguNSAtNDAuNWgtNjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWg2NHExMDYgMCAxODEgNzV0NzUgMTgxdjMycTAgNDAgLTI4IDY4dC02OCAyOGgtMjI0cS04MCAwIC0xMzYgNTZ0LTU2IDEzNnYzODRxMCA4MCA1NiAxMzZ0MTM2IDU2aDM4NHE4MCAwIDEzNiAtNTZ0NTYgLTEzNnpNMTY2NCAxMjE2IHYtNzA0cTAgLTEwNCAtNDAuNSAtMTk4LjV0LTEwOS41IC0xNjMuNXQtMTYzLjUgLTEwOS41dC0xOTguNSAtNDAuNWgtNjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWg2NHExMDYgMCAxODEgNzV0NzUgMTgxdjMycTAgNDAgLTI4IDY4dC02OCAyOGgtMjI0cS04MCAwIC0xMzYgNTZ0LTU2IDEzNnYzODRxMCA4MCA1NiAxMzZ0MTM2IDU2aDM4NHE4MCAwIDEzNiAtNTZ0NTYgLTEzNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExMDsiIGhvcml6LWFkdi14PSIxNTY4IiBkPSJNNDk2IDE5MnEwIC02MCAtNDIuNSAtMTAydC0xMDEuNSAtNDJxLTYwIDAgLTEwMiA0MnQtNDIgMTAydDQyIDEwMnQxMDIgNDJxNTkgMCAxMDEuNSAtNDJ0NDIuNSAtMTAyek05MjggMHEwIC01MyAtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNXQtOTAuNSAzNy41dC0zNy41IDkwLjV0MzcuNSA5MC41dDkwLjUgMzcuNXQ5MC41IC0zNy41dDM3LjUgLTkwLjV6TTMyMCA2NDBxMCAtNjYgLTQ3IC0xMTN0LTExMyAtNDd0LTExMyA0N3QtNDcgMTEzIHQ0NyAxMTN0MTEzIDQ3dDExMyAtNDd0NDcgLTExM3pNMTM2MCAxOTJxMCAtNDYgLTMzIC03OXQtNzkgLTMzdC03OSAzM3QtMzMgNzl0MzMgNzl0NzkgMzN0NzkgLTMzdDMzIC03OXpNNTI4IDEwODhxMCAtNzMgLTUxLjUgLTEyNC41dC0xMjQuNSAtNTEuNXQtMTI0LjUgNTEuNXQtNTEuNSAxMjQuNXQ1MS41IDEyNC41dDEyNC41IDUxLjV0MTI0LjUgLTUxLjV0NTEuNSAtMTI0LjV6TTk5MiAxMjgwcTAgLTgwIC01NiAtMTM2dC0xMzYgLTU2IHQtMTM2IDU2dC01NiAxMzZ0NTYgMTM2dDEzNiA1NnQxMzYgLTU2dDU2IC0xMzZ6TTE1MzYgNjQwcTAgLTQwIC0yOCAtNjh0LTY4IC0yOHQtNjggMjh0LTI4IDY4dDI4IDY4dDY4IDI4dDY4IC0yOHQyOCAtNjh6TTEzMjggMTA4OHEwIC0zMyAtMjMuNSAtNTYuNXQtNTYuNSAtMjMuNXQtNTYuNSAyMy41dC0yMy41IDU2LjV0MjMuNSA1Ni41dDU2LjUgMjMuNXQ1Ni41IC0yMy41dDIzLjUgLTU2LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMTE7IiBkPSJNMTUzNiA2NDBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjV0LTEwMyAzODUuNXQxMDMgMzg1LjV0Mjc5LjUgMjc5LjV0Mzg1LjUgMTAzdDM4NS41IC0xMDN0Mjc5LjUgLTI3OS41dDEwMyAtMzg1LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMTI7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTE3OTIgNDE2cTAgLTE2NiAtMTI3IC00NTFxLTMgLTcgLTEwLjUgLTI0dC0xMy41IC0zMHQtMTMgLTIycS0xMiAtMTcgLTI4IC0xN3EtMTUgMCAtMjMuNSAxMHQtOC41IDI1cTAgOSAyLjUgMjYuNXQyLjUgMjMuNXE1IDY4IDUgMTIzcTAgMTAxIC0xNy41IDE4MXQtNDguNSAxMzguNXQtODAgMTAxdC0xMDUuNSA2OS41dC0xMzMgNDIuNXQtMTU0IDIxLjV0LTE3NS41IDZoLTIyNHYtMjU2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOXQtNDUgMTkgbC01MTIgNTEycS0xOSAxOSAtMTkgNDV0MTkgNDVsNTEyIDUxMnExOSAxOSA0NSAxOXQ0NSAtMTl0MTkgLTQ1di0yNTZoMjI0cTcxMyAwIDg3NSAtNDAzcTUzIC0xMzQgNTMgLTMzM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExMzsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNjQwIDMyMHEwIC00MCAtMTIuNSAtODJ0LTQzIC03NnQtNzIuNSAtMzR0LTcyLjUgMzR0LTQzIDc2dC0xMi41IDgydDEyLjUgODJ0NDMgNzZ0NzIuNSAzNHQ3Mi41IC0zNHQ0MyAtNzZ0MTIuNSAtODJ6TTEyODAgMzIwcTAgLTQwIC0xMi41IC04MnQtNDMgLTc2dC03Mi41IC0zNHQtNzIuNSAzNHQtNDMgNzZ0LTEyLjUgODJ0MTIuNSA4MnQ0MyA3NnQ3Mi41IDM0dDcyLjUgLTM0dDQzIC03NnQxMi41IC04MnpNMTQ0MCAzMjAgcTAgMTIwIC02OSAyMDR0LTE4NyA4NHEtNDEgMCAtMTk1IC0yMXEtNzEgLTExIC0xNTcgLTExdC0xNTcgMTFxLTE1MiAyMSAtMTk1IDIxcS0xMTggMCAtMTg3IC04NHQtNjkgLTIwNHEwIC04OCAzMiAtMTUzLjV0ODEgLTEwM3QxMjIgLTYwdDE0MCAtMjkuNXQxNDkgLTdoMTY4cTgyIDAgMTQ5IDd0MTQwIDI5LjV0MTIyIDYwdDgxIDEwM3QzMiAxNTMuNXpNMTY2NCA0OTZxMCAtMjA3IC02MSAtMzMxcS0zOCAtNzcgLTEwNS41IC0xMzN0LTE0MSAtODYgdC0xNzAgLTQ3LjV0LTE3MS41IC0yMnQtMTY3IC00LjVxLTc4IDAgLTE0MiAzdC0xNDcuNSAxMi41dC0xNTIuNSAzMHQtMTM3IDUxLjV0LTEyMSA4MXQtODYgMTE1cS02MiAxMjMgLTYyIDMzMXEwIDIzNyAxMzYgMzk2cS0yNyA4MiAtMjcgMTcwcTAgMTE2IDUxIDIxOHExMDggMCAxOTAgLTM5LjV0MTg5IC0xMjMuNXExNDcgMzUgMzA5IDM1cTE0OCAwIDI4MCAtMzJxMTA1IDgyIDE4NyAxMjF0MTg5IDM5cTUxIC0xMDIgNTEgLTIxOCBxMCAtODcgLTI3IC0xNjhxMTM2IC0xNjAgMTM2IC0zOTh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMTQ7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE1MzYgMjI0djcwNHEwIDQwIC0yOCA2OHQtNjggMjhoLTcwNHEtNDAgMCAtNjggMjh0LTI4IDY4djY0cTAgNDAgLTI4IDY4dC02OCAyOGgtMzIwcS00MCAwIC02OCAtMjh0LTI4IC02OHYtOTYwcTAgLTQwIDI4IC02OHQ2OCAtMjhoMTIxNnE0MCAwIDY4IDI4dDI4IDY4ek0xNjY0IDkyOHYtNzA0cTAgLTkyIC02NiAtMTU4dC0xNTggLTY2aC0xMjE2cS05MiAwIC0xNTggNjZ0LTY2IDE1OHY5NjBxMCA5MiA2NiAxNTh0MTU4IDY2aDMyMCBxOTIgMCAxNTggLTY2dDY2IC0xNTh2LTMyaDY3MnE5MiAwIDE1OCAtNjZ0NjYgLTE1OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExNTsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNMTc4MSA2MDVxMCAzNSAtNTMgMzVoLTEwODhxLTQwIDAgLTg1LjUgLTIxLjV0LTcxLjUgLTUyLjVsLTI5NCAtMzYzcS0xOCAtMjQgLTE4IC00MHEwIC0zNSA1MyAtMzVoMTA4OHE0MCAwIDg2IDIydDcxIDUzbDI5NCAzNjNxMTggMjIgMTggMzl6TTY0MCA3NjhoNzY4djE2MHEwIDQwIC0yOCA2OHQtNjggMjhoLTU3NnEtNDAgMCAtNjggMjh0LTI4IDY4djY0cTAgNDAgLTI4IDY4dC02OCAyOGgtMzIwcS00MCAwIC02OCAtMjh0LTI4IC02OCB2LTg1M2wyNTYgMzE1cTQ0IDUzIDExNiA4Ny41dDE0MCAzNC41ek0xOTA5IDYwNXEwIC02MiAtNDYgLTEyMGwtMjk1IC0zNjNxLTQzIC01MyAtMTE2IC04Ny41dC0xNDAgLTM0LjVoLTEwODhxLTkyIDAgLTE1OCA2NnQtNjYgMTU4djk2MHEwIDkyIDY2IDE1OHQxNTggNjZoMzIwcTkyIDAgMTU4IC02NnQ2NiAtMTU4di0zMmg1NDRxOTIgMCAxNTggLTY2dDY2IC0xNTh2LTE2MGgxOTJxNTQgMCA5OSAtMjQuNXQ2NyAtNzAuNXExNSAtMzIgMTUgLTY4eiAiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExNjsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNODk2IDYwOHYtNjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMjI0di0yMjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtNjRxLTE0IDAgLTIzIDl0LTkgMjN2MjI0aC0yMjRxLTE0IDAgLTIzIDl0LTkgMjN2NjRxMCAxNCA5IDIzdDIzIDloMjI0djIyNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzIC05dDkgLTIzdi0yMjRoMjI0cTE0IDAgMjMgLTl0OSAtMjN6TTEwMjQgMjI0djcwNHEwIDQwIC0yOCA2OHQtNjggMjhoLTcwNHEtNDAgMCAtNjggLTI4IHQtMjggLTY4di03MDRxMCAtNDAgMjggLTY4dDY4IC0yOGg3MDRxNDAgMCA2OCAyOHQyOCA2OHpNMTE1MiA5Mjh2LTcwNHEwIC05MiAtNjUuNSAtMTU4dC0xNTguNSAtNjZoLTcwNHEtOTMgMCAtMTU4LjUgNjZ0LTY1LjUgMTU4djcwNHEwIDkzIDY1LjUgMTU4LjV0MTU4LjUgNjUuNWg3MDRxOTMgMCAxNTguNSAtNjUuNXQ2NS41IC0xNTguNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExNzsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNOTI4IDExNTJxOTMgMCAxNTguNSAtNjUuNXQ2NS41IC0xNTguNXYtNzA0cTAgLTkyIC02NS41IC0xNTh0LTE1OC41IC02NmgtNzA0cS05MyAwIC0xNTguNSA2NnQtNjUuNSAxNTh2NzA0cTAgOTMgNjUuNSAxNTguNXQxNTguNSA2NS41aDcwNHpNMTAyNCAyMjR2NzA0cTAgNDAgLTI4IDY4dC02OCAyOGgtNzA0cS00MCAwIC02OCAtMjh0LTI4IC02OHYtNzA0cTAgLTQwIDI4IC02OHQ2OCAtMjhoNzA0cTQwIDAgNjggMjh0MjggNjh6IE04NjQgNjQwcTE0IDAgMjMgLTl0OSAtMjN2LTY0cTAgLTE0IC05IC0yM3QtMjMgLTloLTU3NnEtMTQgMCAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWg1NzZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMTg7IiBkPSJNMTEzNCA0NjFxLTM3IC0xMjEgLTEzOCAtMTk1dC0yMjggLTc0dC0yMjggNzR0LTEzOCAxOTVxLTggMjUgNCA0OC41dDM4IDMxLjVxMjUgOCA0OC41IC00dDMxLjUgLTM4cTI1IC04MCA5Mi41IC0xMjkuNXQxNTEuNSAtNDkuNXQxNTEuNSA0OS41dDkyLjUgMTI5LjVxOCAyNiAzMiAzOHQ0OSA0dDM3IC0zMS41dDQgLTQ4LjV6TTY0MCA4OTZxMCAtNTMgLTM3LjUgLTkwLjV0LTkwLjUgLTM3LjV0LTkwLjUgMzcuNXQtMzcuNSA5MC41IHQzNy41IDkwLjV0OTAuNSAzNy41dDkwLjUgLTM3LjV0MzcuNSAtOTAuNXpNMTE1MiA4OTZxMCAtNTMgLTM3LjUgLTkwLjV0LTkwLjUgLTM3LjV0LTkwLjUgMzcuNXQtMzcuNSA5MC41dDM3LjUgOTAuNXQ5MC41IDM3LjV0OTAuNSAtMzcuNXQzNy41IC05MC41ek0xNDA4IDY0MHEwIDEzMCAtNTEgMjQ4LjV0LTEzNi41IDIwNHQtMjA0IDEzNi41dC0yNDguNSA1MXQtMjQ4LjUgLTUxdC0yMDQgLTEzNi41dC0xMzYuNSAtMjA0dC01MSAtMjQ4LjUgdDUxIC0yNDguNXQxMzYuNSAtMjA0dDIwNCAtMTM2LjV0MjQ4LjUgLTUxdDI0OC41IDUxdDIwNCAxMzYuNXQxMzYuNSAyMDR0NTEgMjQ4LjV6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTE5OyIgZD0iTTExMzQgMzA3cTggLTI1IC00IC00OC41dC0zNyAtMzEuNXQtNDkgNHQtMzIgMzhxLTI1IDgwIC05Mi41IDEyOS41dC0xNTEuNSA0OS41dC0xNTEuNSAtNDkuNXQtOTIuNSAtMTI5LjVxLTggLTI2IC0zMS41IC0zOHQtNDguNSAtNHEtMjYgOCAtMzggMzEuNXQtNCA0OC41cTM3IDEyMSAxMzggMTk1dDIyOCA3NHQyMjggLTc0dDEzOCAtMTk1ek02NDAgODk2cTAgLTUzIC0zNy41IC05MC41dC05MC41IC0zNy41dC05MC41IDM3LjUgdC0zNy41IDkwLjV0MzcuNSA5MC41dDkwLjUgMzcuNXQ5MC41IC0zNy41dDM3LjUgLTkwLjV6TTExNTIgODk2cTAgLTUzIC0zNy41IC05MC41dC05MC41IC0zNy41dC05MC41IDM3LjV0LTM3LjUgOTAuNXQzNy41IDkwLjV0OTAuNSAzNy41dDkwLjUgLTM3LjV0MzcuNSAtOTAuNXpNMTQwOCA2NDBxMCAxMzAgLTUxIDI0OC41dC0xMzYuNSAyMDR0LTIwNCAxMzYuNXQtMjQ4LjUgNTF0LTI0OC41IC01MXQtMjA0IC0xMzYuNXQtMTM2LjUgLTIwNCB0LTUxIC0yNDguNXQ1MSAtMjQ4LjV0MTM2LjUgLTIwNHQyMDQgLTEzNi41dDI0OC41IC01MXQyNDguNSA1MXQyMDQgMTM2LjV0MTM2LjUgMjA0dDUxIDI0OC41ek0xNTM2IDY0MHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExYTsiIGQ9Ik0xMTUyIDQ0OHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTY0MHEtMjYgMCAtNDUgMTl0LTE5IDQ1dDE5IDQ1dDQ1IDE5aDY0MHEyNiAwIDQ1IC0xOXQxOSAtNDV6TTY0MCA4OTZxMCAtNTMgLTM3LjUgLTkwLjV0LTkwLjUgLTM3LjV0LTkwLjUgMzcuNXQtMzcuNSA5MC41dDM3LjUgOTAuNXQ5MC41IDM3LjV0OTAuNSAtMzcuNXQzNy41IC05MC41ek0xMTUyIDg5NnEwIC01MyAtMzcuNSAtOTAuNXQtOTAuNSAtMzcuNXQtOTAuNSAzNy41IHQtMzcuNSA5MC41dDM3LjUgOTAuNXQ5MC41IDM3LjV0OTAuNSAtMzcuNXQzNy41IC05MC41ek0xNDA4IDY0MHEwIDEzMCAtNTEgMjQ4LjV0LTEzNi41IDIwNHQtMjA0IDEzNi41dC0yNDguNSA1MXQtMjQ4LjUgLTUxdC0yMDQgLTEzNi41dC0xMzYuNSAtMjA0dC01MSAtMjQ4LjV0NTEgLTI0OC41dDEzNi41IC0yMDR0MjA0IC0xMzYuNXQyNDguNSAtNTF0MjQ4LjUgNTF0MjA0IDEzNi41dDEzNi41IDIwNHQ1MSAyNDguNXpNMTUzNiA2NDAgcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTFiOyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik04MzIgNDQ4djEyOHEwIDE0IC05IDIzdC0yMyA5aC0xOTJ2MTkycTAgMTQgLTkgMjN0LTIzIDloLTEyOHEtMTQgMCAtMjMgLTl0LTkgLTIzdi0xOTJoLTE5MnEtMTQgMCAtMjMgLTl0LTkgLTIzdi0xMjhxMCAtMTQgOSAtMjN0MjMgLTloMTkydi0xOTJxMCAtMTQgOSAtMjN0MjMgLTloMTI4cTE0IDAgMjMgOXQ5IDIzdjE5MmgxOTJxMTQgMCAyMyA5dDkgMjN6TTE0MDggMzg0cTAgNTMgLTM3LjUgOTAuNXQtOTAuNSAzNy41dC05MC41IC0zNy41IHQtMzcuNSAtOTAuNXQzNy41IC05MC41dDkwLjUgLTM3LjV0OTAuNSAzNy41dDM3LjUgOTAuNXpNMTY2NCA2NDBxMCA1MyAtMzcuNSA5MC41dC05MC41IDM3LjV0LTkwLjUgLTM3LjV0LTM3LjUgLTkwLjV0MzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTE5MjAgNTEycTAgLTIxMiAtMTUwIC0zNjJ0LTM2MiAtMTUwcS0xOTIgMCAtMzM4IDEyOGgtMjIwcS0xNDYgLTEyOCAtMzM4IC0xMjhxLTIxMiAwIC0zNjIgMTUwIHQtMTUwIDM2MnQxNTAgMzYydDM2MiAxNTBoODk2cTIxMiAwIDM2MiAtMTUwdDE1MCAtMzYyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTFjOyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik0zODQgMzY4di05NnEwIC0xNiAtMTYgLTE2aC05NnEtMTYgMCAtMTYgMTZ2OTZxMCAxNiAxNiAxNmg5NnExNiAwIDE2IC0xNnpNNTEyIDYyNHYtOTZxMCAtMTYgLTE2IC0xNmgtMjI0cS0xNiAwIC0xNiAxNnY5NnEwIDE2IDE2IDE2aDIyNHExNiAwIDE2IC0xNnpNMzg0IDg4MHYtOTZxMCAtMTYgLTE2IC0xNmgtOTZxLTE2IDAgLTE2IDE2djk2cTAgMTYgMTYgMTZoOTZxMTYgMCAxNiAtMTZ6TTE0MDggMzY4di05NnEwIC0xNiAtMTYgLTE2IGgtODY0cS0xNiAwIC0xNiAxNnY5NnEwIDE2IDE2IDE2aDg2NHExNiAwIDE2IC0xNnpNNzY4IDYyNHYtOTZxMCAtMTYgLTE2IC0xNmgtOTZxLTE2IDAgLTE2IDE2djk2cTAgMTYgMTYgMTZoOTZxMTYgMCAxNiAtMTZ6TTY0MCA4ODB2LTk2cTAgLTE2IC0xNiAtMTZoLTk2cS0xNiAwIC0xNiAxNnY5NnEwIDE2IDE2IDE2aDk2cTE2IDAgMTYgLTE2ek0xMDI0IDYyNHYtOTZxMCAtMTYgLTE2IC0xNmgtOTZxLTE2IDAgLTE2IDE2djk2cTAgMTYgMTYgMTYgaDk2cTE2IDAgMTYgLTE2ek04OTYgODgwdi05NnEwIC0xNiAtMTYgLTE2aC05NnEtMTYgMCAtMTYgMTZ2OTZxMCAxNiAxNiAxNmg5NnExNiAwIDE2IC0xNnpNMTI4MCA2MjR2LTk2cTAgLTE2IC0xNiAtMTZoLTk2cS0xNiAwIC0xNiAxNnY5NnEwIDE2IDE2IDE2aDk2cTE2IDAgMTYgLTE2ek0xNjY0IDM2OHYtOTZxMCAtMTYgLTE2IC0xNmgtOTZxLTE2IDAgLTE2IDE2djk2cTAgMTYgMTYgMTZoOTZxMTYgMCAxNiAtMTZ6TTExNTIgODgwdi05NiBxMCAtMTYgLTE2IC0xNmgtOTZxLTE2IDAgLTE2IDE2djk2cTAgMTYgMTYgMTZoOTZxMTYgMCAxNiAtMTZ6TTE0MDggODgwdi05NnEwIC0xNiAtMTYgLTE2aC05NnEtMTYgMCAtMTYgMTZ2OTZxMCAxNiAxNiAxNmg5NnExNiAwIDE2IC0xNnpNMTY2NCA4ODB2LTM1MnEwIC0xNiAtMTYgLTE2aC0yMjRxLTE2IDAgLTE2IDE2djk2cTAgMTYgMTYgMTZoMTEydjI0MHEwIDE2IDE2IDE2aDk2cTE2IDAgMTYgLTE2ek0xNzkyIDEyOHY4OTZoLTE2NjR2LTg5NiBoMTY2NHpNMTkyMCAxMDI0di04OTZxMCAtNTMgLTM3LjUgLTkwLjV0LTkwLjUgLTM3LjVoLTE2NjRxLTUzIDAgLTkwLjUgMzcuNXQtMzcuNSA5MC41djg5NnEwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjVoMTY2NHE1MyAwIDkwLjUgLTM3LjV0MzcuNSAtOTAuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjExZDsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTY2NCA0OTF2NjE2cS0xNjkgLTkxIC0zMDYgLTkxcS04MiAwIC0xNDUgMzJxLTEwMCA0OSAtMTg0IDc2LjV0LTE3OCAyNy41cS0xNzMgMCAtNDAzIC0xMjd2LTU5OXEyNDUgMTEzIDQzMyAxMTNxNTUgMCAxMDMuNSAtNy41dDk4IC0yNnQ3NyAtMzF0ODIuNSAtMzkuNWwyOCAtMTRxNDQgLTIyIDEwMSAtMjJxMTIwIDAgMjkzIDkyek0zMjAgMTI4MHEwIC0zNSAtMTcuNSAtNjR0LTQ2LjUgLTQ2di0xMjY2cTAgLTE0IC05IC0yM3QtMjMgLTkgaC02NHEtMTQgMCAtMjMgOXQtOSAyM3YxMjY2cS0yOSAxNyAtNDYuNSA0NnQtMTcuNSA2NHEwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjV0OTAuNSAtMzcuNXQzNy41IC05MC41ek0xNzkyIDEyMTZ2LTc2M3EwIC0zOSAtMzUgLTU3cS0xMCAtNSAtMTcgLTlxLTIxOCAtMTE2IC0zNjkgLTExNnEtODggMCAtMTU4IDM1bC0yOCAxNHEtNjQgMzMgLTk5IDQ4dC05MSAyOXQtMTE0IDE0cS0xMDIgMCAtMjM1LjUgLTQ0dC0yMjguNSAtMTAyIHEtMTUgLTkgLTMzIC05cS0xNiAwIC0zMiA4cS0zMiAxOSAtMzIgNTZ2NzQycTAgMzUgMzEgNTVxMzUgMjEgNzguNSA0Mi41dDExNCA1MnQxNTIuNSA0OS41dDE1NSAxOXExMTIgMCAyMDkgLTMxdDIwOSAtODZxMzggLTE5IDg5IC0xOXExMjIgMCAzMTAgMTEycTIyIDEyIDMxIDE3cTMxIDE2IDYyIC0ycTMxIC0yMCAzMSAtNTV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMWU7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTgzMiA1MzZ2MTkycS0xODEgLTE2IC0zODQgLTExN3YtMTg1cTIwNSA5NiAzODQgMTEwek04MzIgOTU0djE5N3EtMTcyIC04IC0zODQgLTEyNnYtMTg5cTIxNSAxMTEgMzg0IDExOHpNMTY2NCA0OTF2MTg0cS0yMzUgLTExNiAtMzg0IC03MXYyMjRxLTIwIDYgLTM5IDE1cS01IDMgLTMzIDE3dC0zNC41IDE3dC0zMS41IDE1dC0zNC41IDE1LjV0LTMyLjUgMTN0LTM2IDEyLjV0LTM1IDguNXQtMzkuNSA3LjV0LTM5LjUgNHQtNDQgMiBxLTIzIDAgLTQ5IC0zdi0yMjJoMTlxMTAyIDAgMTkyLjUgLTI5dDE5Ny41IC04MnExOSAtOSAzOSAtMTV2LTE4OHE0MiAtMTcgOTEgLTE3cTEyMCAwIDI5MyA5MnpNMTY2NCA5MTh2MTg5cS0xNjkgLTkxIC0zMDYgLTkxcS00NSAwIC03OCA4di0xOTZxMTQ4IC00MiAzODQgOTB6TTMyMCAxMjgwcTAgLTM1IC0xNy41IC02NHQtNDYuNSAtNDZ2LTEyNjZxMCAtMTQgLTkgLTIzdC0yMyAtOWgtNjRxLTE0IDAgLTIzIDl0LTkgMjN2MTI2NiBxLTI5IDE3IC00Ni41IDQ2dC0xNy41IDY0cTAgNTMgMzcuNSA5MC41dDkwLjUgMzcuNXQ5MC41IC0zNy41dDM3LjUgLTkwLjV6TTE3OTIgMTIxNnYtNzYzcTAgLTM5IC0zNSAtNTdxLTEwIC01IC0xNyAtOXEtMjE4IC0xMTYgLTM2OSAtMTE2cS04OCAwIC0xNTggMzVsLTI4IDE0cS02NCAzMyAtOTkgNDh0LTkxIDI5dC0xMTQgMTRxLTEwMiAwIC0yMzUuNSAtNDR0LTIyOC41IC0xMDJxLTE1IC05IC0zMyAtOXEtMTYgMCAtMzIgOCBxLTMyIDE5IC0zMiA1NnY3NDJxMCAzNSAzMSA1NXEzNSAyMSA3OC41IDQyLjV0MTE0IDUydDE1Mi41IDQ5LjV0MTU1IDE5cTExMiAwIDIwOSAtMzF0MjA5IC04NnEzOCAtMTkgODkgLTE5cTEyMiAwIDMxMCAxMTJxMjIgMTIgMzEgMTdxMzEgMTYgNjIgLTJxMzEgLTIwIDMxIC01NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEyMDsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNTg1IDU1M2wtNDY2IC00NjZxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtNTAgNTBxLTEwIDEwIC0xMCAyM3QxMCAyM2wzOTMgMzkzbC0zOTMgMzkzcS0xMCAxMCAtMTAgMjN0MTAgMjNsNTAgNTBxMTAgMTAgMjMgMTB0MjMgLTEwbDQ2NiAtNDY2cTEwIC0xMCAxMCAtMjN0LTEwIC0yM3pNMTY2NCA5NnYtNjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtOTYwcS0xNCAwIC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDk2MHExNCAwIDIzIC05IHQ5IC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEyMTsiIGhvcml6LWFkdi14PSIxOTIwIiBkPSJNNjE3IDEzN2wtNTAgLTUwcS0xMCAtMTAgLTIzIC0xMHQtMjMgMTBsLTQ2NiA0NjZxLTEwIDEwIC0xMCAyM3QxMCAyM2w0NjYgNDY2cTEwIDEwIDIzIDEwdDIzIC0xMGw1MCAtNTBxMTAgLTEwIDEwIC0yM3QtMTAgLTIzbC0zOTMgLTM5M2wzOTMgLTM5M3ExMCAtMTAgMTAgLTIzdC0xMCAtMjN6TTEyMDggMTIwNGwtMzczIC0xMjkxcS00IC0xMyAtMTUuNSAtMTkuNXQtMjMuNSAtMi41bC02MiAxN3EtMTMgNCAtMTkuNSAxNS41dC0yLjUgMjQuNSBsMzczIDEyOTFxNCAxMyAxNS41IDE5LjV0MjMuNSAyLjVsNjIgLTE3cTEzIC00IDE5LjUgLTE1LjV0Mi41IC0yNC41ek0xODY1IDU1M2wtNDY2IC00NjZxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtNTAgNTBxLTEwIDEwIC0xMCAyM3QxMCAyM2wzOTMgMzkzbC0zOTMgMzkzcS0xMCAxMCAtMTAgMjN0MTAgMjNsNTAgNTBxMTAgMTAgMjMgMTB0MjMgLTEwbDQ2NiAtNDY2cTEwIC0xMCAxMCAtMjN0LTEwIC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEyMjsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNNjQwIDQ1NHYtNzBxMCAtNDIgLTM5IC01OXEtMTMgLTUgLTI1IC01cS0yNyAwIC00NSAxOWwtNTEyIDUxMnEtMTkgMTkgLTE5IDQ1dDE5IDQ1bDUxMiA1MTJxMjkgMzEgNzAgMTRxMzkgLTE3IDM5IC01OXYtNjlsLTM5NyAtMzk4cS0xOSAtMTkgLTE5IC00NXQxOSAtNDV6TTE3OTIgNDE2cTAgLTU4IC0xNyAtMTMzLjV0LTM4LjUgLTEzOHQtNDggLTEyNXQtNDAuNSAtOTAuNWwtMjAgLTQwcS04IC0xNyAtMjggLTE3cS02IDAgLTkgMSBxLTI1IDggLTIzIDM0cTQzIDQwMCAtMTA2IDU2NXEtNjQgNzEgLTE3MC41IDExMC41dC0yNjcuNSA1Mi41di0yNTFxMCAtNDIgLTM5IC01OXEtMTMgLTUgLTI1IC01cS0yNyAwIC00NSAxOWwtNTEyIDUxMnEtMTkgMTkgLTE5IDQ1dDE5IDQ1bDUxMiA1MTJxMjkgMzEgNzAgMTRxMzkgLTE3IDM5IC01OXYtMjYycTQxMSAtMjggNTk5IC0yMjFxMTY5IC0xNzMgMTY5IC01MDl6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMjM7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTExODYgNTc5bDI1NyAyNTBsLTM1NiA1MmwtNjYgMTBsLTMwIDYwbC0xNTkgMzIydi05NjNsNTkgLTMxbDMxOCAtMTY4bC02MCAzNTVsLTEyIDY2ek0xNjM4IDg0MWwtMzYzIC0zNTRsODYgLTUwMHE1IC0zMyAtNiAtNTEuNXQtMzQgLTE4LjVxLTE3IDAgLTQwIDEybC00NDkgMjM2bC00NDkgLTIzNnEtMjMgLTEyIC00MCAtMTJxLTIzIDAgLTM0IDE4LjV0LTYgNTEuNWw4NiA1MDBsLTM2NCAzNTRxLTMyIDMyIC0yMyA1OS41dDU0IDM0LjUgbDUwMiA3M2wyMjUgNDU1cTIwIDQxIDQ5IDQxcTI4IDAgNDkgLTQxbDIyNSAtNDU1bDUwMiAtNzNxNDUgLTcgNTQgLTM0LjV0LTI0IC01OS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTI0OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xNDAxIDExODdsLTY0MCAtMTI4MHEtMTcgLTM1IC01NyAtMzVxLTUgMCAtMTUgMnEtMjIgNSAtMzUuNSAyMi41dC0xMy41IDM5LjV2NTc2aC01NzZxLTIyIDAgLTM5LjUgMTMuNXQtMjIuNSAzNS41dDQgNDJ0MjkgMzBsMTI4MCA2NDBxMTMgNyAyOSA3cTI3IDAgNDUgLTE5cTE1IC0xNCAxOC41IC0zNC41dC02LjUgLTM5LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMjU7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTU1NyAyNTZoNTk1djU5NXpNNTEyIDMwMWw1OTUgNTk1aC01OTV2LTU5NXpNMTY2NCAyMjR2LTE5MnEwIC0xNCAtOSAtMjN0LTIzIC05aC0yMjR2LTIyNHEwIC0xNCAtOSAtMjN0LTIzIC05aC0xOTJxLTE0IDAgLTIzIDl0LTkgMjN2MjI0aC04NjRxLTE0IDAgLTIzIDl0LTkgMjN2ODY0aC0yMjRxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDIyNHYyMjRxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjMgdi0yMjRoODUxbDI0NiAyNDdxMTAgOSAyMyA5dDIzIC05cTkgLTEwIDkgLTIzdC05IC0yM2wtMjQ3IC0yNDZ2LTg1MWgyMjRxMTQgMCAyMyAtOXQ5IC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEyNjsiIGhvcml6LWFkdi14PSIxMDI0IiBkPSJNMjg4IDY0cTAgNDAgLTI4IDY4dC02OCAyOHQtNjggLTI4dC0yOCAtNjh0MjggLTY4dDY4IC0yOHQ2OCAyOHQyOCA2OHpNMjg4IDEyMTZxMCA0MCAtMjggNjh0LTY4IDI4dC02OCAtMjh0LTI4IC02OHQyOCAtNjh0NjggLTI4dDY4IDI4dDI4IDY4ek05MjggMTA4OHEwIDQwIC0yOCA2OHQtNjggMjh0LTY4IC0yOHQtMjggLTY4dDI4IC02OHQ2OCAtMjh0NjggMjh0MjggNjh6TTEwMjQgMTA4OHEwIC01MiAtMjYgLTk2LjV0LTcwIC02OS41IHEtMiAtMjg3IC0yMjYgLTQxNHEtNjggLTM4IC0yMDMgLTgxcS0xMjggLTQwIC0xNjkuNSAtNzF0LTQxLjUgLTEwMHYtMjZxNDQgLTI1IDcwIC02OS41dDI2IC05Ni41cTAgLTgwIC01NiAtMTM2dC0xMzYgLTU2dC0xMzYgNTZ0LTU2IDEzNnEwIDUyIDI2IDk2LjV0NzAgNjkuNXY4MjBxLTQ0IDI1IC03MCA2OS41dC0yNiA5Ni41cTAgODAgNTYgMTM2dDEzNiA1NnQxMzYgLTU2dDU2IC0xMzZxMCAtNTIgLTI2IC05Ni41dC03MCAtNjkuNXYtNDk3IHE1NCAyNiAxNTQgNTdxNTUgMTcgODcuNSAyOS41dDcwLjUgMzF0NTkgMzkuNXQ0MC41IDUxdDI4IDY5LjV0OC41IDkxLjVxLTQ0IDI1IC03MCA2OS41dC0yNiA5Ni41cTAgODAgNTYgMTM2dDEzNiA1NnQxMzYgLTU2dDU2IC0xMzZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMjc7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTQzOSAyNjVsLTI1NiAtMjU2cS0xMCAtOSAtMjMgLTlxLTEyIDAgLTIzIDlxLTkgMTAgLTkgMjN0OSAyM2wyNTYgMjU2cTEwIDkgMjMgOXQyMyAtOXE5IC0xMCA5IC0yM3QtOSAtMjN6TTYwOCAyMjR2LTMyMHEwIC0xNCAtOSAtMjN0LTIzIC05dC0yMyA5dC05IDIzdjMyMHEwIDE0IDkgMjN0MjMgOXQyMyAtOXQ5IC0yM3pNMzg0IDQ0OHEwIC0xNCAtOSAtMjN0LTIzIC05aC0zMjBxLTE0IDAgLTIzIDl0LTkgMjN0OSAyM3QyMyA5aDMyMCBxMTQgMCAyMyAtOXQ5IC0yM3pNMTY0OCAzMjBxMCAtMTIwIC04NSAtMjAzbC0xNDcgLTE0NnEtODMgLTgzIC0yMDMgLTgzcS0xMjEgMCAtMjA0IDg1bC0zMzQgMzM1cS0yMSAyMSAtNDIgNTZsMjM5IDE4bDI3MyAtMjc0cTI3IC0yNyA2OCAtMjcuNXQ2OCAyNi41bDE0NyAxNDZxMjggMjggMjggNjdxMCA0MCAtMjggNjhsLTI3NCAyNzVsMTggMjM5cTM1IC0yMSA1NiAtNDJsMzM2IC0zMzZxODQgLTg2IDg0IC0yMDR6TTEwMzEgMTA0NGwtMjM5IC0xOCBsLTI3MyAyNzRxLTI4IDI4IC02OCAyOHEtMzkgMCAtNjggLTI3bC0xNDcgLTE0NnEtMjggLTI4IC0yOCAtNjdxMCAtNDAgMjggLTY4bDI3NCAtMjc0bC0xOCAtMjQwcS0zNSAyMSAtNTYgNDJsLTMzNiAzMzZxLTg0IDg2IC04NCAyMDRxMCAxMjAgODUgMjAzbDE0NyAxNDZxODMgODMgMjAzIDgzcTEyMSAwIDIwNCAtODVsMzM0IC0zMzVxMjEgLTIxIDQyIC01NnpNMTY2NCA5NjBxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMzIwcS0xNCAwIC0yMyA5IHQtOSAyM3Q5IDIzdDIzIDloMzIwcTE0IDAgMjMgLTl0OSAtMjN6TTExMjAgMTUwNHYtMzIwcTAgLTE0IC05IC0yM3QtMjMgLTl0LTIzIDl0LTkgMjN2MzIwcTAgMTQgOSAyM3QyMyA5dDIzIC05dDkgLTIzek0xNTI3IDEzNTNsLTI1NiAtMjU2cS0xMSAtOSAtMjMgLTl0LTIzIDlxLTkgMTAgLTkgMjN0OSAyM2wyNTYgMjU2cTEwIDkgMjMgOXQyMyAtOXE5IC0xMCA5IC0yM3QtOSAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMjg7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTcwNCAyODB2LTI0MHEwIC0xNiAtMTIgLTI4dC0yOCAtMTJoLTI0MHEtMTYgMCAtMjggMTJ0LTEyIDI4djI0MHEwIDE2IDEyIDI4dDI4IDEyaDI0MHExNiAwIDI4IC0xMnQxMiAtMjh6TTEwMjAgODgwcTAgLTU0IC0xNS41IC0xMDF0LTM1IC03Ni41dC01NSAtNTkuNXQtNTcuNSAtNDMuNXQtNjEgLTM1LjVxLTQxIC0yMyAtNjguNSAtNjV0LTI3LjUgLTY3cTAgLTE3IC0xMiAtMzIuNXQtMjggLTE1LjVoLTI0MHEtMTUgMCAtMjUuNSAxOC41IHQtMTAuNSAzNy41djQ1cTAgODMgNjUgMTU2LjV0MTQzIDEwOC41cTU5IDI3IDg0IDU2dDI1IDc2cTAgNDIgLTQ2LjUgNzR0LTEwNy41IDMycS02NSAwIC0xMDggLTI5cS0zNSAtMjUgLTEwNyAtMTE1cS0xMyAtMTYgLTMxIC0xNnEtMTIgMCAtMjUgOGwtMTY0IDEyNXEtMTMgMTAgLTE1LjUgMjV0NS41IDI4cTE2MCAyNjYgNDY0IDI2NnE4MCAwIDE2MSAtMzF0MTQ2IC04M3QxMDYgLTEyNy41dDQxIC0xNTguNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEyOTsiIGhvcml6LWFkdi14PSI2NDAiIGQ9Ik02NDAgMTkydi0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC01MTJxLTI2IDAgLTQ1IDE5dC0xOSA0NXYxMjhxMCAyNiAxOSA0NXQ0NSAxOWg2NHYzODRoLTY0cS0yNiAwIC00NSAxOXQtMTkgNDV2MTI4cTAgMjYgMTkgNDV0NDUgMTloMzg0cTI2IDAgNDUgLTE5dDE5IC00NXYtNTc2aDY0cTI2IDAgNDUgLTE5dDE5IC00NXpNNTEyIDEzNDR2LTE5MnEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTI1NnEtMjYgMCAtNDUgMTl0LTE5IDQ1djE5MiBxMCAyNiAxOSA0NXQ0NSAxOWgyNTZxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTJhOyIgaG9yaXotYWR2LXg9IjY0MCIgZD0iTTUxMiAyODh2LTIyNHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTI1NnEtMjYgMCAtNDUgMTl0LTE5IDQ1djIyNHEwIDI2IDE5IDQ1dDQ1IDE5aDI1NnEyNiAwIDQ1IC0xOXQxOSAtNDV6TTU0MiAxMzQ0bC0yOCAtNzY4cS0xIC0yNiAtMjAuNSAtNDV0LTQ1LjUgLTE5aC0yNTZxLTI2IDAgLTQ1LjUgMTl0LTIwLjUgNDVsLTI4IDc2OHEtMSAyNiAxNy41IDQ1dDQ0LjUgMTloMzIwcTI2IDAgNDQuNSAtMTl0MTcuNSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMmI7IiBkPSJNODk3IDE2N3YtMTY3aC0yNDhsLTE1OSAyNTJsLTI0IDQycS04IDkgLTExIDIxaC0zbC05IC0yMXEtMTAgLTIwIC0yNSAtNDRsLTE1NSAtMjUwaC0yNTh2MTY3aDEyOGwxOTcgMjkxbC0xODUgMjcyaC0xMzd2MTY4aDI3NmwxMzkgLTIyOHEyIC00IDIzIC00MnE4IC05IDExIC0yMWgzcTMgOSAxMSAyMWwyNSA0MmwxNDAgMjI4aDI1N3YtMTY4aC0xMjVsLTE4NCAtMjY3bDIwNCAtMjk2aDEwOXpNMTUzNCA4NDZ2LTIwNmgtNTE0bC0zIDI3IHEtNCAyOCAtNCA0NnEwIDY0IDI2IDExN3Q2NSA4Ni41dDg0IDY1dDg0IDU0LjV0NjUgNTR0MjYgNjRxMCAzOCAtMjkuNSA2Mi41dC03MC41IDI0LjVxLTUxIDAgLTk3IC0zOXEtMTQgLTExIC0zNiAtMzhsLTEwNSA5MnEyNiAzNyA2MyA2NnE4MyA2NSAxODggNjVxMTEwIDAgMTc4IC01OS41dDY4IC0xNTguNXEwIC01NiAtMjQuNSAtMTAzdC02MiAtNzYuNXQtODEuNSAtNTguNXQtODIgLTUwLjV0LTY1LjUgLTUxLjV0LTMwLjUgLTYzaDIzMnY4MCBoMTI2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTJjOyIgZD0iTTg5NyAxNjd2LTE2N2gtMjQ4bC0xNTkgMjUybC0yNCA0MnEtOCA5IC0xMSAyMWgtM2wtOSAtMjFxLTEwIC0yMCAtMjUgLTQ0bC0xNTUgLTI1MGgtMjU4djE2N2gxMjhsMTk3IDI5MWwtMTg1IDI3MmgtMTM3djE2OGgyNzZsMTM5IC0yMjhxMiAtNCAyMyAtNDJxOCAtOSAxMSAtMjFoM3EzIDkgMTEgMjFsMjUgNDJsMTQwIDIyOGgyNTd2LTE2OGgtMTI1bC0xODQgLTI2N2wyMDQgLTI5NmgxMDl6TTE1MzYgLTUwdi0yMDZoLTUxNGwtNCAyNyBxLTMgNDUgLTMgNDZxMCA2NCAyNiAxMTd0NjUgODYuNXQ4NCA2NXQ4NCA1NC41dDY1IDU0dDI2IDY0cTAgMzggLTI5LjUgNjIuNXQtNzAuNSAyNC41cS01MSAwIC05NyAtMzlxLTE0IC0xMSAtMzYgLTM4bC0xMDUgOTJxMjYgMzcgNjMgNjZxODAgNjUgMTg4IDY1cTExMCAwIDE3OCAtNTkuNXQ2OCAtMTU4LjVxMCAtNjYgLTM0LjUgLTExOC41dC04NCAtODZ0LTk5LjUgLTYyLjV0LTg3IC02M3QtNDEgLTczaDIzMnY4MGgxMjZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMmQ7IiBob3Jpei1hZHYteD0iMTkyMCIgZD0iTTg5NiAxMjhsMzM2IDM4NGgtNzY4bC0zMzYgLTM4NGg3Njh6TTE5MDkgMTIwNXExNSAtMzQgOS41IC03MS41dC0zMC41IC02NS41bC04OTYgLTEwMjRxLTM4IC00NCAtOTYgLTQ0aC03NjhxLTM4IDAgLTY5LjUgMjAuNXQtNDcuNSA1NC41cS0xNSAzNCAtOS41IDcxLjV0MzAuNSA2NS41bDg5NiAxMDI0cTM4IDQ0IDk2IDQ0aDc2OHEzOCAwIDY5LjUgLTIwLjV0NDcuNSAtNTQuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEyZTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTY2NCA0MzhxMCAtODEgLTQ0LjUgLTEzNXQtMTIzLjUgLTU0cS00MSAwIC03Ny41IDE3LjV0LTU5IDM4dC01Ni41IDM4dC03MSAxNy41cS0xMTAgMCAtMTEwIC0xMjRxMCAtMzkgMTYgLTExNXQxNSAtMTE1di01cS0yMiAwIC0zMyAtMXEtMzQgLTMgLTk3LjUgLTExLjV0LTExNS41IC0xMy41dC05OCAtNXEtNjEgMCAtMTAzIDI2LjV0LTQyIDgzLjVxMCAzNyAxNy41IDcxdDM4IDU2LjV0MzggNTl0MTcuNSA3Ny41cTAgNzkgLTU0IDEyMy41IHQtMTM1IDQ0LjVxLTg0IDAgLTE0MyAtNDUuNXQtNTkgLTEyNy41cTAgLTQzIDE1IC04M3QzMy41IC02NC41dDMzLjUgLTUzdDE1IC01MC41cTAgLTQ1IC00NiAtODlxLTM3IC0zNSAtMTE3IC0zNXEtOTUgMCAtMjQ1IDI0cS05IDIgLTI3LjUgNHQtMjcuNSA0bC0xMyAycS0xIDAgLTMgMXEtMiAwIC0yIDF2MTAyNHEyIC0xIDE3LjUgLTMuNXQzNCAtNXQyMS41IC0zLjVxMTUwIC0yNCAyNDUgLTI0cTgwIDAgMTE3IDM1cTQ2IDQ0IDQ2IDg5IHEwIDIyIC0xNSA1MC41dC0zMy41IDUzdC0zMy41IDY0LjV0LTE1IDgzcTAgODIgNTkgMTI3LjV0MTQ0IDQ1LjVxODAgMCAxMzQgLTQ0LjV0NTQgLTEyMy41cTAgLTQxIC0xNy41IC03Ny41dC0zOCAtNTl0LTM4IC01Ni41dC0xNy41IC03MXEwIC01NyA0MiAtODMuNXQxMDMgLTI2LjVxNjQgMCAxODAgMTV0MTYzIDE3di0ycS0xIC0yIC0zLjUgLTE3LjV0LTUgLTM0dC0zLjUgLTIxLjVxLTI0IC0xNTAgLTI0IC0yNDVxMCAtODAgMzUgLTExNyBxNDQgLTQ2IDg5IC00NnEyMiAwIDUwLjUgMTV0NTMgMzMuNXQ2NC41IDMzLjV0ODMgMTVxODIgMCAxMjcuNSAtNTl0NDUuNSAtMTQzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTMwOyIgaG9yaXotYWR2LXg9IjExNTIiIGQ9Ik0xMTUyIDgzMnYtMTI4cTAgLTIyMSAtMTQ3LjUgLTM4NC41dC0zNjQuNSAtMTg3LjV2LTEzMmgyNTZxMjYgMCA0NSAtMTl0MTkgLTQ1dC0xOSAtNDV0LTQ1IC0xOWgtNjQwcS0yNiAwIC00NSAxOXQtMTkgNDV0MTkgNDV0NDUgMTloMjU2djEzMnEtMjE3IDI0IC0zNjQuNSAxODcuNXQtMTQ3LjUgMzg0LjV2MTI4cTAgMjYgMTkgNDV0NDUgMTl0NDUgLTE5dDE5IC00NXYtMTI4cTAgLTE4NSAxMzEuNSAtMzE2LjV0MzE2LjUgLTEzMS41IHQzMTYuNSAxMzEuNXQxMzEuNSAzMTYuNXYxMjhxMCAyNiAxOSA0NXQ0NSAxOXQ0NSAtMTl0MTkgLTQ1ek04OTYgMTIxNnYtNTEycTAgLTEzMiAtOTQgLTIyNnQtMjI2IC05NHQtMjI2IDk0dC05NCAyMjZ2NTEycTAgMTMyIDk0IDIyNnQyMjYgOTR0MjI2IC05NHQ5NCAtMjI2eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTMxOyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0yNzEgNTkxbC0xMDEgLTEwMXEtNDIgMTAzIC00MiAyMTR2MTI4cTAgMjYgMTkgNDV0NDUgMTl0NDUgLTE5dDE5IC00NXYtMTI4cTAgLTUzIDE1IC0xMTN6TTEzODUgMTE5M2wtMzYxIC0zNjF2LTEyOHEwIC0xMzIgLTk0IC0yMjZ0LTIyNiAtOTRxLTU1IDAgLTEwOSAxOWwtOTYgLTk2cTk3IC01MSAyMDUgLTUxcTE4NSAwIDMxNi41IDEzMS41dDEzMS41IDMxNi41djEyOHEwIDI2IDE5IDQ1dDQ1IDE5dDQ1IC0xOXQxOSAtNDV2LTEyOCBxMCAtMjIxIC0xNDcuNSAtMzg0LjV0LTM2NC41IC0xODcuNXYtMTMyaDI1NnEyNiAwIDQ1IC0xOXQxOSAtNDV0LTE5IC00NXQtNDUgLTE5aC02NDBxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NXQ0NSAxOWgyNTZ2MTMycS0xMjUgMTMgLTIzNSA4MWwtMjU0IC0yNTRxLTEwIC0xMCAtMjMgLTEwdC0yMyAxMGwtODIgODJxLTEwIDEwIC0xMCAyM3QxMCAyM2wxMjM0IDEyMzRxMTAgMTAgMjMgMTB0MjMgLTEwbDgyIC04MnExMCAtMTAgMTAgLTIzIHQtMTAgLTIzek0xMDA1IDEzMjVsLTYyMSAtNjIxdjUxMnEwIDEzMiA5NCAyMjZ0MjI2IDk0cTEwMiAwIDE4NC41IC01OXQxMTYuNSAtMTUyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTMyOyIgaG9yaXotYWR2LXg9IjEyODAiIGQ9Ik0xMDg4IDU3NnY2NDBoLTQ0OHYtMTEzN3ExMTkgNjMgMjEzIDEzN3EyMzUgMTg0IDIzNSAzNjB6TTEyODAgMTM0NHYtNzY4cTAgLTg2IC0zMy41IC0xNzAuNXQtODMgLTE1MHQtMTE4IC0xMjcuNXQtMTI2LjUgLTEwM3QtMTIxIC03Ny41dC04OS41IC00OS41dC00Mi41IC0yMHEtMTIgLTYgLTI2IC02dC0yNiA2cS0xNiA3IC00Mi41IDIwdC04OS41IDQ5LjV0LTEyMSA3Ny41dC0xMjYuNSAxMDN0LTExOCAxMjcuNXQtODMgMTUwIHQtMzMuNSAxNzAuNXY3NjhxMCAyNiAxOSA0NXQ0NSAxOWgxMTUycTI2IDAgNDUgLTE5dDE5IC00NXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzMzsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTI4IC0xMjhoMTQwOHYxMDI0aC0xNDA4di0xMDI0ek01MTIgMTA4OHYyODhxMCAxNCAtOSAyM3QtMjMgOWgtNjRxLTE0IDAgLTIzIC05dC05IC0yM3YtMjg4cTAgLTE0IDkgLTIzdDIzIC05aDY0cTE0IDAgMjMgOXQ5IDIzek0xMjgwIDEwODh2Mjg4cTAgMTQgLTkgMjN0LTIzIDloLTY0cS0xNCAwIC0yMyAtOXQtOSAtMjN2LTI4OHEwIC0xNCA5IC0yM3QyMyAtOWg2NHExNCAwIDIzIDl0OSAyM3pNMTY2NCAxMTUydi0xMjgwIHEwIC01MiAtMzggLTkwdC05MCAtMzhoLTE0MDhxLTUyIDAgLTkwIDM4dC0zOCA5MHYxMjgwcTAgNTIgMzggOTB0OTAgMzhoMTI4djk2cTAgNjYgNDcgMTEzdDExMyA0N2g2NHE2NiAwIDExMyAtNDd0NDcgLTExM3YtOTZoMzg0djk2cTAgNjYgNDcgMTEzdDExMyA0N2g2NHE2NiAwIDExMyAtNDd0NDcgLTExM3YtOTZoMTI4cTUyIDAgOTAgLTM4dDM4IC05MHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzNDsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNNTEyIDEzNDRxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1ek0xNDA4IDEzNzZ2LTMyMHEwIC0xNiAtMTIgLTI1cS04IC03IC0yMCAtN3EtNCAwIC03IDFsLTQ0OCA5NnEtMTEgMiAtMTggMTF0LTcgMjBoLTI1NnYtMTAycTExMSAtMjMgMTgzLjUgLTExMXQ3Mi41IC0yMDN2LTgwMHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTUxMnEtMjYgMCAtNDUgMTl0LTE5IDQ1djgwMCBxMCAxMDYgNjIuNSAxOTAuNXQxNjEuNSAxMTQuNXYxMTFoLTMycS01OSAwIC0xMTUgLTIzLjV0LTkxLjUgLTUzdC02NiAtNjYuNXQtNDAuNSAtNTMuNXQtMTQgLTI0LjVxLTE3IC0zNSAtNTcgLTM1cS0xNiAwIC0yOSA3cS0yMyAxMiAtMzEuNSAzN3QzLjUgNDlxNSAxMCAxNC41IDI2dDM3LjUgNTMuNXQ2MC41IDcwdDg1IDY3dDEwOC41IDUyLjVxLTI1IDQyIC0yNSA4NnEwIDY2IDQ3IDExM3QxMTMgNDd0MTEzIC00N3Q0NyAtMTEzIHEwIC0zMyAtMTQgLTY0aDMwMnEwIDExIDcgMjB0MTggMTFsNDQ4IDk2cTMgMSA3IDFxMTIgMCAyMCAtN3ExMiAtOSAxMiAtMjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMzU7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE0NDAgMTA4OHEwIDQwIC0yOCA2OHQtNjggMjh0LTY4IC0yOHQtMjggLTY4dDI4IC02OHQ2OCAtMjh0NjggMjh0MjggNjh6TTE2NjQgMTM3NnEwIC0yNDkgLTc1LjUgLTQzMC41dC0yNTMuNSAtMzYwLjVxLTgxIC04MCAtMTk1IC0xNzZsLTIwIC0zNzlxLTIgLTE2IC0xNiAtMjZsLTM4NCAtMjI0cS03IC00IC0xNiAtNHEtMTIgMCAtMjMgOWwtNjQgNjRxLTEzIDE0IC04IDMybDg1IDI3NmwtMjgxIDI4MWwtMjc2IC04NXEtMyAtMSAtOSAtMSBxLTE0IDAgLTIzIDlsLTY0IDY0cS0xNyAxOSAtNSAzOWwyMjQgMzg0cTEwIDE0IDI2IDE2bDM3OSAyMHE5NiAxMTQgMTc2IDE5NXExODggMTg3IDM1OCAyNTh0NDMxIDcxcTE0IDAgMjQgLTkuNXQxMCAtMjIuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzNjsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTcwOCA4ODFsLTE4OCAtODgxaC0zMDRsMTgxIDg0OXE0IDIxIDEgNDNxLTQgMjAgLTE2IDM1cS0xMCAxNCAtMjggMjRxLTE4IDkgLTQwIDloLTE5N2wtMjA1IC05NjBoLTMwM2wyMDQgOTYwaC0zMDRsLTIwNSAtOTYwaC0zMDRsMjcyIDEyODBoMTEzOXExNTcgMCAyNDUgLTExOHE4NiAtMTE2IDUyIC0yODF6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxMzc7IiBkPSJNOTA5IDE0MWwxMDIgMTAycTE5IDE5IDE5IDQ1dC0xOSA0NWwtMzA3IDMwN2wzMDcgMzA3cTE5IDE5IDE5IDQ1dC0xOSA0NWwtMTAyIDEwMnEtMTkgMTkgLTQ1IDE5dC00NSAtMTlsLTQ1NCAtNDU0cS0xOSAtMTkgLTE5IC00NXQxOSAtNDVsNDU0IC00NTRxMTkgLTE5IDQ1IC0xOXQ0NSAxOXpNMTUzNiA2NDBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwM3QtMjc5LjUgMjc5LjUgdC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTM4OyIgZD0iTTcxNyAxNDFsNDU0IDQ1NHExOSAxOSAxOSA0NXQtMTkgNDVsLTQ1NCA0NTRxLTE5IDE5IC00NSAxOXQtNDUgLTE5bC0xMDIgLTEwMnEtMTkgLTE5IC0xOSAtNDV0MTkgLTQ1bDMwNyAtMzA3bC0zMDcgLTMwN3EtMTkgLTE5IC0xOSAtNDV0MTkgLTQ1bDEwMiAtMTAycTE5IC0xOSA0NSAtMTl0NDUgMTl6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41IHQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzOTsiIGQ9Ik0xMTY1IDM5N2wxMDIgMTAycTE5IDE5IDE5IDQ1dC0xOSA0NWwtNDU0IDQ1NHEtMTkgMTkgLTQ1IDE5dC00NSAtMTlsLTQ1NCAtNDU0cS0xOSAtMTkgLTE5IC00NXQxOSAtNDVsMTAyIC0xMDJxMTkgLTE5IDQ1IC0xOXQ0NSAxOWwzMDcgMzA3bDMwNyAtMzA3cTE5IC0xOSA0NSAtMTl0NDUgMTl6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41IHQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzYTsiIGQ9Ik04MTMgMjM3bDQ1NCA0NTRxMTkgMTkgMTkgNDV0LTE5IDQ1bC0xMDIgMTAycS0xOSAxOSAtNDUgMTl0LTQ1IC0xOWwtMzA3IC0zMDdsLTMwNyAzMDdxLTE5IDE5IC00NSAxOXQtNDUgLTE5bC0xMDIgLTEwMnEtMTkgLTE5IC0xOSAtNDV0MTkgLTQ1bDQ1NCAtNDU0cTE5IC0xOSA0NSAtMTl0NDUgMTl6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41IHQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzYjsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNMTEzMCA5MzlsMTYgMTc1aC04ODRsNDcgLTUzNGg2MTJsLTIyIC0yMjhsLTE5NyAtNTNsLTE5NiA1M2wtMTMgMTQwaC0xNzVsMjIgLTI3OGwzNjIgLTEwMGg0djFsMzU5IDk5bDUwIDU0NGgtNjQ0bC0xNSAxODFoNjc0ek0wIDE0MDhoMTQwOGwtMTI4IC0xNDM4bC01NzggLTE2MmwtNTc0IDE2MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzYzsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMjc1IDE0MDhoMTUwNWwtMjY2IC0xMzMzbC04MDQgLTI2N2wtNjk4IDI2N2w3MSAzNTZoMjk3bC0yOSAtMTQ3bDQyMiAtMTYxbDQ4NiAxNjFsNjggMzM5aC0xMjA4bDU4IDI5N2gxMjA5bDM4IDE5MWgtMTIwOHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzZDsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNOTYwIDEyODBxMCAyNiAtMTkgNDV0LTQ1IDE5dC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5dDQ1IDE5dDE5IDQ1ek0xNzkyIDM1MnYtMzUycTAgLTIyIC0yMCAtMzBxLTggLTIgLTEyIC0ycS0xMyAwIC0yMyA5bC05MyA5M3EtMTE5IC0xNDMgLTMxOC41IC0yMjYuNXQtNDI5LjUgLTgzLjV0LTQyOS41IDgzLjV0LTMxOC41IDIyNi41bC05MyAtOTNxLTkgLTkgLTIzIC05cS00IDAgLTEyIDJxLTIwIDggLTIwIDMwdjM1MiBxMCAxNCA5IDIzdDIzIDloMzUycTIyIDAgMzAgLTIwcTggLTE5IC03IC0zNWwtMTAwIC0xMDBxNjcgLTkxIDE4OS41IC0xNTMuNXQyNzEuNSAtODIuNXY2NDdoLTE5MnEtMjYgMCAtNDUgMTl0LTE5IDQ1djEyOHEwIDI2IDE5IDQ1dDQ1IDE5aDE5MnYxNjNxLTU4IDM0IC05MyA5Mi41dC0zNSAxMjguNXEwIDEwNiA3NSAxODF0MTgxIDc1dDE4MSAtNzV0NzUgLTE4MXEwIC03MCAtMzUgLTEyOC41dC05MyAtOTIuNXYtMTYzaDE5MnEyNiAwIDQ1IC0xOSB0MTkgLTQ1di0xMjhxMCAtMjYgLTE5IC00NXQtNDUgLTE5aC0xOTJ2LTY0N3ExNDkgMjAgMjcxLjUgODIuNXQxODkuNSAxNTMuNWwtMTAwIDEwMHEtMTUgMTYgLTcgMzVxOCAyMCAzMCAyMGgzNTJxMTQgMCAyMyAtOXQ5IC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjEzZTsiIGhvcml6LWFkdi14PSIxMTUyIiBkPSJNMTA1NiA3NjhxNDAgMCA2OCAtMjh0MjggLTY4di01NzZxMCAtNDAgLTI4IC02OHQtNjggLTI4aC05NjBxLTQwIDAgLTY4IDI4dC0yOCA2OHY1NzZxMCA0MCAyOCA2OHQ2OCAyOGgzMnYzMjBxMCAxODUgMTMxLjUgMzE2LjV0MzE2LjUgMTMxLjV0MzE2LjUgLTEzMS41dDEzMS41IC0zMTYuNXEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTY0cS0yNiAwIC00NSAxOXQtMTkgNDVxMCAxMDYgLTc1IDE4MXQtMTgxIDc1dC0xODEgLTc1dC03NSAtMTgxIHYtMzIwaDczNnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE0MDsiIGQ9Ik0xMDI0IDY0MHEwIC0xMDYgLTc1IC0xODF0LTE4MSAtNzV0LTE4MSA3NXQtNzUgMTgxdDc1IDE4MXQxODEgNzV0MTgxIC03NXQ3NSAtMTgxek0xMTUyIDY0MHEwIDE1OSAtMTEyLjUgMjcxLjV0LTI3MS41IDExMi41dC0yNzEuNSAtMTEyLjV0LTExMi41IC0yNzEuNXQxMTIuNSAtMjcxLjV0MjcxLjUgLTExMi41dDI3MS41IDExMi41dDExMi41IDI3MS41ek0xMjgwIDY0MHEwIC0yMTIgLTE1MCAtMzYydC0zNjIgLTE1MHQtMzYyIDE1MCB0LTE1MCAzNjJ0MTUwIDM2MnQzNjIgMTUwdDM2MiAtMTUwdDE1MCAtMzYyek0xNDA4IDY0MHEwIDEzMCAtNTEgMjQ4LjV0LTEzNi41IDIwNHQtMjA0IDEzNi41dC0yNDguNSA1MXQtMjQ4LjUgLTUxdC0yMDQgLTEzNi41dC0xMzYuNSAtMjA0dC01MSAtMjQ4LjV0NTEgLTI0OC41dDEzNi41IC0yMDR0MjA0IC0xMzYuNXQyNDguNSAtNTF0MjQ4LjUgNTF0MjA0IDEzNi41dDEzNi41IDIwNHQ1MSAyNDguNXpNMTUzNiA2NDAgcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTQxOyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0zODQgODAwdi0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0xOTJxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOGgxOTJxNDAgMCA2OCAtMjh0MjggLTY4ek04OTYgODAwdi0xOTJxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0xOTJxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOGgxOTJxNDAgMCA2OCAtMjh0MjggLTY4ek0xNDA4IDgwMHYtMTkycTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTkyIHEtNDAgMCAtNjggMjh0LTI4IDY4djE5MnEwIDQwIDI4IDY4dDY4IDI4aDE5MnE0MCAwIDY4IC0yOHQyOCAtNjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNDI7IiBob3Jpei1hZHYteD0iMzg0IiBkPSJNMzg0IDI4OHYtMTkycTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTkycS00MCAwIC02OCAyOHQtMjggNjh2MTkycTAgNDAgMjggNjh0NjggMjhoMTkycTQwIDAgNjggLTI4dDI4IC02OHpNMzg0IDgwMHYtMTkycTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTkycS00MCAwIC02OCAyOHQtMjggNjh2MTkycTAgNDAgMjggNjh0NjggMjhoMTkycTQwIDAgNjggLTI4dDI4IC02OHpNMzg0IDEzMTJ2LTE5MnEwIC00MCAtMjggLTY4dC02OCAtMjhoLTE5MiBxLTQwIDAgLTY4IDI4dC0yOCA2OHYxOTJxMCA0MCAyOCA2OHQ2OCAyOGgxOTJxNDAgMCA2OCAtMjh0MjggLTY4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTQzOyIgZD0iTTUxMiAyNTZxMCA1MyAtMzcuNSA5MC41dC05MC41IDM3LjV0LTkwLjUgLTM3LjV0LTM3LjUgLTkwLjV0MzcuNSAtOTAuNXQ5MC41IC0zNy41dDkwLjUgMzcuNXQzNy41IDkwLjV6TTg2MyAxNjJxLTEzIDIzMiAtMTc3IDM5NnQtMzk2IDE3N3EtMTQgMSAtMjQgLTl0LTEwIC0yM3YtMTI4cTAgLTEzIDguNSAtMjJ0MjEuNSAtMTBxMTU0IC0xMSAyNjQgLTEyMXQxMjEgLTI2NHExIC0xMyAxMCAtMjEuNXQyMiAtOC41aDEyOHExMyAwIDIzIDEwIHQ5IDI0ek0xMjQ3IDE2MXEtNSAxNTQgLTU2IDI5Ny41dC0xMzkuNSAyNjB0LTIwNSAyMDV0LTI2MCAxMzkuNXQtMjk3LjUgNTZxLTE0IDEgLTIzIC05cS0xMCAtMTAgLTEwIC0yM3YtMTI4cTAgLTEzIDkgLTIydDIyIC0xMHEyMDQgLTcgMzc4IC0xMTEuNXQyNzguNSAtMjc4LjV0MTExLjUgLTM3OHExIC0xMyAxMCAtMjJ0MjIgLTloMTI4cTEzIDAgMjMgMTBxMTEgOSA5IDIzek0xNTM2IDExMjB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41IHQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNDQ7IiBkPSJNNzY4IDE0MDhxMjA5IDAgMzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXQtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3pNMTE1MiA1ODVxMzIgMTggMzIgNTV0LTMyIDU1bC01NDQgMzIwcS0zMSAxOSAtNjQgMXEtMzIgLTE5IC0zMiAtNTZ2LTY0MHEwIC0zNyAzMiAtNTYgcTE2IC04IDMyIC04cTE3IDAgMzIgOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE0NTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTAyNCAxMDg0bDMxNiAtMzE2bC01NzIgLTU3MmwtMzE2IDMxNnpNODEzIDEwNWw2MTggNjE4cTE5IDE5IDE5IDQ1dC0xOSA0NWwtMzYyIDM2MnEtMTggMTggLTQ1IDE4dC00NSAtMThsLTYxOCAtNjE4cS0xOSAtMTkgLTE5IC00NXQxOSAtNDVsMzYyIC0zNjJxMTggLTE4IDQ1IC0xOHQ0NSAxOHpNMTcwMiA3NDJsLTkwNyAtOTA4cS0zNyAtMzcgLTkwLjUgLTM3dC05MC41IDM3bC0xMjYgMTI2cTU2IDU2IDU2IDEzNnQtNTYgMTM2IHQtMTM2IDU2dC0xMzYgLTU2bC0xMjUgMTI2cS0zNyAzNyAtMzcgOTAuNXQzNyA5MC41bDkwNyA5MDZxMzcgMzcgOTAuNSAzN3Q5MC41IC0zN2wxMjUgLTEyNXEtNTYgLTU2IC01NiAtMTM2dDU2IC0xMzZ0MTM2IC01NnQxMzYgNTZsMTI2IC0xMjVxMzcgLTM3IDM3IC05MC41dC0zNyAtOTAuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE0NjsiIGQ9Ik0xMjgwIDU3NnYxMjhxMCAyNiAtMTkgNDV0LTQ1IDE5aC04OTZxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di0xMjhxMCAtMjYgMTkgLTQ1dDQ1IC0xOWg4OTZxMjYgMCA0NSAxOXQxOSA0NXpNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjUgdDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTQ3OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xMTUyIDczNnYtNjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtODMycS0xNCAwIC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDgzMnExNCAwIDIzIC05dDkgLTIzek0xMjgwIDI4OHY4MzJxMCA2NiAtNDcgMTEzdC0xMTMgNDdoLTgzMnEtNjYgMCAtMTEzIC00N3QtNDcgLTExM3YtODMycTAgLTY2IDQ3IC0xMTN0MTEzIC00N2g4MzJxNjYgMCAxMTMgNDd0NDcgMTEzek0xNDA4IDExMjB2LTgzMnEwIC0xMTkgLTg0LjUgLTIwMy41IHQtMjAzLjUgLTg0LjVoLTgzMnEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2ODMycTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg4MzJxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNDg7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTEwMTggOTMzcS0xOCAtMzcgLTU4IC0zN2gtMTkydi04NjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtNzA0cS0yMSAwIC0yOSAxOHEtOCAyMCA0IDM1bDE2MCAxOTJxOSAxMSAyNSAxMWgzMjB2NjQwaC0xOTJxLTQwIDAgLTU4IDM3cS0xNyAzNyA5IDY4bDMyMCAzODRxMTggMjIgNDkgMjJ0NDkgLTIybDMyMCAtMzg0cTI3IC0zMiA5IC02OHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE0OTsiIGhvcml6LWFkdi14PSIxMDI0IiBkPSJNMzIgMTI4MGg3MDRxMTMgMCAyMi41IC05LjV0OS41IC0yMy41di04NjNoMTkycTQwIDAgNTggLTM3dC05IC02OWwtMzIwIC0zODRxLTE4IC0yMiAtNDkgLTIydC00OSAyMmwtMzIwIDM4NHEtMjYgMzEgLTkgNjlxMTggMzcgNTggMzdoMTkydjY0MGgtMzIwcS0xNCAwIC0yNSAxMWwtMTYwIDE5MnEtMTMgMTQgLTQgMzRxOSAxOSAyOSAxOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE0YTsiIGQ9Ik02ODUgMjM3bDYxNCA2MTRxMTkgMTkgMTkgNDV0LTE5IDQ1bC0xMDIgMTAycS0xOSAxOSAtNDUgMTl0LTQ1IC0xOWwtNDY3IC00NjdsLTIxMSAyMTFxLTE5IDE5IC00NSAxOXQtNDUgLTE5bC0xMDIgLTEwMnEtMTkgLTE5IC0xOSAtNDV0MTkgLTQ1bDM1OCAtMzU4cTE5IC0xOSA0NSAtMTl0NDUgMTl6TTE1MzYgMTEyMHYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41IHQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE0YjsiIGQ9Ik00MDQgNDI4bDE1MiAtMTUybC01MiAtNTJoLTU2djk2aC05NnY1NnpNODE4IDgxOHExNCAtMTMgLTMgLTMwbC0yOTEgLTI5MXEtMTcgLTE3IC0zMCAtM3EtMTQgMTMgMyAzMGwyOTEgMjkxcTE3IDE3IDMwIDN6TTU0NCAxMjhsNTQ0IDU0NGwtMjg4IDI4OGwtNTQ0IC01NDR2LTI4OGgyODh6TTExNTIgNzM2bDkyIDkycTI4IDI4IDI4IDY4dC0yOCA2OGwtMTUyIDE1MnEtMjggMjggLTY4IDI4dC02OCAtMjhsLTkyIC05MnpNMTUzNiAxMTIwIHYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTRjOyIgZD0iTTEyODAgNjA4djQ4MHEwIDI2IC0xOSA0NXQtNDUgMTloLTQ4MHEtNDIgMCAtNTkgLTM5cS0xNyAtNDEgMTQgLTcwbDE0NCAtMTQ0bC01MzQgLTUzNHEtMTkgLTE5IC0xOSAtNDV0MTkgLTQ1bDEwMiAtMTAycTE5IC0xOSA0NSAtMTl0NDUgMTlsNTM0IDUzNGwxNDQgLTE0NHExOCAtMTkgNDUgLTE5cTEyIDAgMjUgNXEzOSAxNyAzOSA1OXpNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MCBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTRkOyIgZD0iTTEwMDUgNDM1bDM1MiAzNTJxMTkgMTkgMTkgNDV0LTE5IDQ1bC0zNTIgMzUycS0zMCAzMSAtNjkgMTRxLTQwIC0xNyAtNDAgLTU5di0xNjBxLTExOSAwIC0yMTYgLTE5LjV0LTE2Mi41IC01MXQtMTE0IC03OXQtNzYuNSAtOTUuNXQtNDQuNSAtMTA5dC0yMS41IC0xMTEuNXQtNSAtMTEwLjVxMCAtMTgxIDE2NyAtNDA0cTEwIC0xMiAyNSAtMTJxNyAwIDEzIDNxMjIgOSAxOSAzM3EtNDQgMzU0IDYyIDQ3M3E0NiA1MiAxMzAgNzUuNSB0MjI0IDIzLjV2LTE2MHEwIC00MiA0MCAtNTlxMTIgLTUgMjQgLTVxMjYgMCA0NSAxOXpNMTUzNiAxMTIwdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNGU7IiBkPSJNNjQwIDQ0OGwyNTYgMTI4bC0yNTYgMTI4di0yNTZ6TTEwMjQgMTAzOXYtNTQybC01MTIgLTI1NnY1NDJ6TTEzMTIgNjQwcTAgMTQ4IC03MyAyNzN0LTE5OCAxOTh0LTI3MyA3M3QtMjczIC03M3QtMTk4IC0xOTh0LTczIC0yNzN0NzMgLTI3M3QxOTggLTE5OHQyNzMgLTczdDI3MyA3M3QxOTggMTk4dDczIDI3M3pNMTUzNiA2NDBxMCAtMjA5IC0xMDMgLTM4NS41dC0yNzkuNSAtMjc5LjV0LTM4NS41IC0xMDN0LTM4NS41IDEwMyB0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTUwOyIgZD0iTTExNDUgODYxcTE4IC0zNSAtNSAtNjZsLTMyMCAtNDQ4cS0xOSAtMjcgLTUyIC0yN3QtNTIgMjdsLTMyMCA0NDhxLTIzIDMxIC01IDY2cTE3IDM1IDU3IDM1aDY0MHE0MCAwIDU3IC0zNXpNMTI4MCAxNjB2OTYwcTAgMTMgLTkuNSAyMi41dC0yMi41IDkuNWgtOTYwcS0xMyAwIC0yMi41IC05LjV0LTkuNSAtMjIuNXYtOTYwcTAgLTEzIDkuNSAtMjIuNXQyMi41IC05LjVoOTYwcTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6TTE1MzYgMTEyMCB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE1MTsiIGQ9Ik0xMTQ1IDQxOXEtMTcgLTM1IC01NyAtMzVoLTY0MHEtNDAgMCAtNTcgMzVxLTE4IDM1IDUgNjZsMzIwIDQ0OHExOSAyNyA1MiAyN3Q1MiAtMjdsMzIwIC00NDhxMjMgLTMxIDUgLTY2ek0xMjgwIDE2MHY5NjBxMCAxMyAtOS41IDIyLjV0LTIyLjUgOS41aC05NjBxLTEzIDAgLTIyLjUgLTkuNXQtOS41IC0yMi41di05NjBxMCAtMTMgOS41IC0yMi41dDIyLjUgLTkuNWg5NjBxMTMgMCAyMi41IDkuNXQ5LjUgMjIuNXpNMTUzNiAxMTIwdi05NjAgcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTUyOyIgZD0iTTEwODggNjQwcTAgLTMzIC0yNyAtNTJsLTQ0OCAtMzIwcS0zMSAtMjMgLTY2IC01cS0zNSAxNyAtMzUgNTd2NjQwcTAgNDAgMzUgNTdxMzUgMTggNjYgLTVsNDQ4IC0zMjBxMjcgLTE5IDI3IC01MnpNMTI4MCAxNjB2OTYwcTAgMTQgLTkgMjN0LTIzIDloLTk2MHEtMTQgMCAtMjMgLTl0LTkgLTIzdi05NjBxMCAtMTQgOSAtMjN0MjMgLTloOTYwcTE0IDAgMjMgOXQ5IDIzek0xNTM2IDExMjB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41IHQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNTM7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTk3NiAyMjlsMzUgLTE1OXEzIC0xMiAtMyAtMjIuNXQtMTcgLTE0LjVsLTUgLTFxLTQgLTIgLTEwLjUgLTMuNXQtMTYgLTQuNXQtMjEuNSAtNS41dC0yNS41IC01dC0zMCAtNXQtMzMuNSAtNC41dC0zNi41IC0zdC0zOC41IC0xcS0yMzQgMCAtNDA5IDEzMC41dC0yMzggMzUxLjVoLTk1cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTEzcTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoNjZxLTIgNTcgMSAxMDVoLTY3cS0xNCAwIC0yMyA5IHQtOSAyM3YxMTRxMCAxNCA5IDIzdDIzIDloOThxNjcgMjEwIDI0My41IDMzOHQ0MDAuNSAxMjhxMTAyIDAgMTk0IC0yM3ExMSAtMyAyMCAtMTVxNiAtMTEgMyAtMjRsLTQzIC0xNTlxLTMgLTEzIC0xNCAtMTkuNXQtMjQgLTIuNWwtNCAxcS00IDEgLTExLjUgMi41bC0xNy41IDMuNXQtMjIuNSAzLjV0LTI2IDN0LTI5IDIuNXQtMjkuNSAxcS0xMjYgMCAtMjI2IC02NHQtMTUwIC0xNzZoNDY4cTE2IDAgMjUgLTEycTEwIC0xMiA3IC0yNiBsLTI0IC0xMTRxLTUgLTI2IC0zMiAtMjZoLTQ4OHEtMyAtMzcgMCAtMTA1aDQ1OXExNSAwIDI1IC0xMnE5IC0xMiA2IC0yN2wtMjQgLTExMnEtMiAtMTEgLTExIC0xOC41dC0yMCAtNy41aC0zODdxNDggLTExNyAxNDkuNSAtMTg1LjV0MjI4LjUgLTY4LjVxMTggMCAzNiAxLjV0MzMuNSAzLjV0MjkuNSA0LjV0MjQuNSA1dDE4LjUgNC41bDEyIDNsNSAycTEzIDUgMjYgLTJxMTIgLTcgMTUgLTIxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTU0OyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik0xMDIwIDM5OXYtMzY3cTAgLTE0IC05IC0yM3QtMjMgLTloLTk1NnEtMTQgMCAtMjMgOXQtOSAyM3YxNTBxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWg5N3YzODNoLTk1cS0xNCAwIC0yMyA5LjV0LTkgMjIuNXYxMzFxMCAxNCA5IDIzdDIzIDloOTV2MjIzcTAgMTcxIDEyMy41IDI4MnQzMTQuNSAxMTFxMTg1IDAgMzM1IC0xMjVxOSAtOCAxMCAtMjAuNXQtNyAtMjIuNWwtMTAzIC0xMjdxLTkgLTExIC0yMiAtMTJxLTEzIC0yIC0yMyA3IHEtNSA1IC0yNiAxOXQtNjkgMzJ0LTkzIDE4cS04NSAwIC0xMzcgLTQ3dC01MiAtMTIzdi0yMTVoMzA1cTEzIDAgMjIuNSAtOXQ5LjUgLTIzdi0xMzFxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41aC0zMDV2LTM3OWg0MTR2MTgxcTAgMTMgOSAyMi41dDIzIDkuNWgxNjJxMTQgMCAyMyAtOS41dDkgLTIyLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNTU7IiBob3Jpei1hZHYteD0iMTAyNCIgZD0iTTk3OCAzNTFxMCAtMTUzIC05OS41IC0yNjMuNXQtMjU4LjUgLTEzNi41di0xNzVxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMTM1cS0xMyAwIC0yMi41IDkuNXQtOS41IDIyLjV2MTc1cS02NiA5IC0xMjcuNSAzMXQtMTAxLjUgNDQuNXQtNzQgNDh0LTQ2LjUgMzcuNXQtMTcuNSAxOHEtMTcgMjEgLTIgNDFsMTAzIDEzNXE3IDEwIDIzIDEycTE1IDIgMjQgLTlsMiAtMnExMTMgLTk5IDI0MyAtMTI1cTM3IC04IDc0IC04cTgxIDAgMTQyLjUgNDMgdDYxLjUgMTIycTAgMjggLTE1IDUzdC0zMy41IDQydC01OC41IDM3LjV0LTY2IDMydC04MCAzMi41cS0zOSAxNiAtNjEuNSAyNXQtNjEuNSAyNi41dC02Mi41IDMxdC01Ni41IDM1LjV0LTUzLjUgNDIuNXQtNDMuNSA0OXQtMzUuNSA1OHQtMjEgNjYuNXQtOC41IDc4cTAgMTM4IDk4IDI0MnQyNTUgMTM0djE4MHEwIDEzIDkuNSAyMi41dDIyLjUgOS41aDEzNXExNCAwIDIzIC05dDkgLTIzdi0xNzZxNTcgLTYgMTEwLjUgLTIzdDg3IC0zMy41IHQ2My41IC0zNy41dDM5IC0yOXQxNSAtMTRxMTcgLTE4IDUgLTM4bC04MSAtMTQ2cS04IC0xNSAtMjMgLTE2cS0xNCAtMyAtMjcgN3EtMyAzIC0xNC41IDEydC0zOSAyNi41dC01OC41IDMydC03NC41IDI2dC04NS41IDExLjVxLTk1IDAgLTE1NSAtNDN0LTYwIC0xMTFxMCAtMjYgOC41IC00OHQyOS41IC00MS41dDM5LjUgLTMzdDU2IC0zMXQ2MC41IC0yN3Q3MCAtMjcuNXE1MyAtMjAgODEgLTMxLjV0NzYgLTM1dDc1LjUgLTQyLjV0NjIgLTUwIHQ1MyAtNjMuNXQzMS41IC03Ni41dDEzIC05NHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE1NjsiIGhvcml6LWFkdi14PSI4OTgiIGQ9Ik04OTggMTA2NnYtMTAycTAgLTE0IC05IC0yM3QtMjMgLTloLTE2OHEtMjMgLTE0NCAtMTI5IC0yMzR0LTI3NiAtMTEwcTE2NyAtMTc4IDQ1OSAtNTM2cTE0IC0xNiA0IC0zNHEtOCAtMTggLTI5IC0xOGgtMTk1cS0xNiAwIC0yNSAxMnEtMzA2IDM2NyAtNDk4IDU3MXEtOSA5IC05IDIydjEyN3EwIDEzIDkuNSAyMi41dDIyLjUgOS41aDExMnExMzIgMCAyMTIuNSA0M3QxMDIuNSAxMjVoLTQyN3EtMTQgMCAtMjMgOXQtOSAyM3YxMDIgcTAgMTQgOSAyM3QyMyA5aDQxM3EtNTcgMTEzIC0yNjggMTEzaC0xNDVxLTEzIDAgLTIyLjUgOS41dC05LjUgMjIuNXYxMzNxMCAxNCA5IDIzdDIzIDloODMycTE0IDAgMjMgLTl0OSAtMjN2LTEwMnEwIC0xNCAtOSAtMjN0LTIzIC05aC0yMzNxNDcgLTYxIDY0IC0xNDRoMTcxcTE0IDAgMjMgLTl0OSAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNTc7IiBob3Jpei1hZHYteD0iMTAyNyIgZD0iTTYwMyAwaC0xNzJxLTEzIDAgLTIyLjUgOXQtOS41IDIzdjMzMGgtMjg4cS0xMyAwIC0yMi41IDl0LTkuNSAyM3YxMDNxMCAxMyA5LjUgMjIuNXQyMi41IDkuNWgyODh2ODVoLTI4OHEtMTMgMCAtMjIuNSA5dC05LjUgMjN2MTA0cTAgMTMgOS41IDIyLjV0MjIuNSA5LjVoMjE0bC0zMjEgNTc4cS04IDE2IDAgMzJxMTAgMTYgMjggMTZoMTk0cTE5IDAgMjkgLTE4bDIxNSAtNDI1cTE5IC0zOCA1NiAtMTI1cTEwIDI0IDMwLjUgNjh0MjcuNSA2MSBsMTkxIDQyMHE4IDE5IDI5IDE5aDE5MXExNyAwIDI3IC0xNnE5IC0xNCAxIC0zMWwtMzEzIC01NzloMjE1cTEzIDAgMjIuNSAtOS41dDkuNSAtMjIuNXYtMTA0cTAgLTE0IC05LjUgLTIzdC0yMi41IC05aC0yOTB2LTg1aDI5MHExMyAwIDIyLjUgLTkuNXQ5LjUgLTIyLjV2LTEwM3EwIC0xNCAtOS41IC0yM3QtMjIuNSAtOWgtMjkwdi0zMzBxMCAtMTMgLTkuNSAtMjIuNXQtMjIuNSAtOS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTU4OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0xNjY0IDM1MnYtMzJxMCAtMTMyIC05NCAtMjI2dC0yMjYgLTk0aC0xMjhxLTEzMiAwIC0yMjYgOTR0LTk0IDIyNnY0ODBoLTIyNHEtMiAtMTAyIC0xNC41IC0xOTAuNXQtMzAuNSAtMTU2dC00OC41IC0xMjYuNXQtNTcgLTk5LjV0LTY3LjUgLTc3LjV0LTY5LjUgLTU4LjV0LTc0IC00NHQtNjkgLTMydC02NS41IC0yNS41cS00IC0yIC0zMiAtMTNxLTggLTIgLTEyIC0ycS0yMiAwIC0zMCAyMGwtNzEgMTc4cS01IDEzIDAgMjV0MTcgMTcgcTcgMyAyMCA3LjV0MTggNi41cTMxIDEyIDQ2LjUgMTguNXQ0NC41IDIwdDQ1LjUgMjZ0NDIgMzIuNXQ0MC41IDQyLjV0MzQuNSA1My41dDMwLjUgNjguNXQyMi41IDgzLjV0MTcgMTAzdDYuNSAxMjNoLTI1NnEtMTQgMCAtMjMgOXQtOSAyM3YxNjBxMCAxNCA5IDIzdDIzIDloMTIxNnExNCAwIDIzIC05dDkgLTIzdi0xNjBxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMjI0di01MTJxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NSB2NjRxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjN6TTEyODAgMTM3NnYtMTYwcTAgLTE0IC05IC0yM3QtMjMgLTloLTk2MHEtMTQgMCAtMjMgOXQtOSAyM3YxNjBxMCAxNCA5IDIzdDIzIDloOTYwcTE0IDAgMjMgLTl0OSAtMjN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNTk7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTUxNCAzNDFsODEgMjk5aC0xNTlsNzUgLTMwMHExIC0xIDEgLTN0MSAtM3EwIDEgMC41IDMuNXQwLjUgMy41ek02MzAgNzY4bDM1IDEyOGgtMjkybDMyIC0xMjhoMjI1ek04MjIgNzY4aDEzOWwtMzUgMTI4aC03MHpNMTI3MSAzNDBsNzggMzAwaC0xNjJsODEgLTI5OXEwIC0xIDAuNSAtMy41dDEuNSAtMy41cTAgMSAwLjUgM3QwLjUgM3pNMTM4MiA3NjhsMzMgMTI4aC0yOTdsMzQgLTEyOGgyMzB6TTE3OTIgNzM2di02NHEwIC0xNCAtOSAtMjMgdC0yMyAtOWgtMjEzbC0xNjQgLTYxNnEtNyAtMjQgLTMxIC0yNGgtMTU5cS0yNCAwIC0zMSAyNGwtMTY2IDYxNmgtMjA5bC0xNjcgLTYxNnEtNyAtMjQgLTMxIC0yNGgtMTU5cS0xMSAwIC0xOS41IDd0LTEwLjUgMTdsLTE2MCA2MTZoLTIwOHEtMTQgMCAtMjMgOXQtOSAyM3Y2NHEwIDE0IDkgMjN0MjMgOWgxNzVsLTMzIDEyOGgtMTQycS0xNCAwIC0yMyA5dC05IDIzdjY0cTAgMTQgOSAyM3QyMyA5aDEwOWwtODkgMzQ0cS01IDE1IDUgMjggcTEwIDEyIDI2IDEyaDEzN3EyNiAwIDMxIC0yNGw5MCAtMzYwaDM1OWw5NyAzNjBxNyAyNCAzMSAyNGgxMjZxMjQgMCAzMSAtMjRsOTggLTM2MGgzNjVsOTMgMzYwcTUgMjQgMzEgMjRoMTM3cTE2IDAgMjYgLTEycTEwIC0xMyA1IC0yOGwtOTEgLTM0NGgxMTFxMTQgMCAyMyAtOXQ5IC0yM3YtNjRxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMTQ1bC0zNCAtMTI4aDE3OXExNCAwIDIzIC05dDkgLTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTVhOyIgaG9yaXotYWR2LXg9IjEyODAiIGQ9Ik0xMTY3IDg5NnExOCAtMTgyIC0xMzEgLTI1OHExMTcgLTI4IDE3NSAtMTAzdDQ1IC0yMTRxLTcgLTcxIC0zMi41IC0xMjV0LTY0LjUgLTg5dC05NyAtNTguNXQtMTIxLjUgLTM0LjV0LTE0NS41IC0xNXYtMjU1aC0xNTR2MjUxcS04MCAwIC0xMjIgMXYtMjUyaC0xNTR2MjU1cS0xOCAwIC01NCAwLjV0LTU1IDAuNWgtMjAwbDMxIDE4M2gxMTFxNTAgMCA1OCA1MXY0MDJoMTZxLTYgMSAtMTYgMXYyODdxLTEzIDY4IC04OSA2OGgtMTExdjE2NCBsMjEyIC0xcTY0IDAgOTcgMXYyNTJoMTU0di0yNDdxODIgMiAxMjIgMnYyNDVoMTU0di0yNTJxNzkgLTcgMTQwIC0yMi41dDExMyAtNDV0ODIuNSAtNzh0MzYuNSAtMTE0LjV6TTk1MiAzNTFxMCAzNiAtMTUgNjR0LTM3IDQ2dC01Ny41IDMwLjV0LTY1LjUgMTguNXQtNzQgOXQtNjkgM3QtNjQuNSAtMXQtNDcuNSAtMXYtMzM4cTggMCAzNyAtMC41dDQ4IC0wLjV0NTMgMS41dDU4LjUgNHQ1NyA4LjV0NTUuNSAxNHQ0Ny41IDIxdDM5LjUgMzAgdDI0LjUgNDB0OS41IDUxek04ODEgODI3cTAgMzMgLTEyLjUgNTguNXQtMzAuNSA0MnQtNDggMjh0LTU1IDE2LjV0LTYxLjUgOHQtNTggMi41dC01NCAtMXQtMzkuNSAtMC41di0zMDdxNSAwIDM0LjUgLTAuNXQ0Ni41IDB0NTAgMnQ1NSA1LjV0NTEuNSAxMXQ0OC41IDE4LjV0MzcgMjd0MjcgMzguNXQ5IDUxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTViOyIgaG9yaXotYWR2LXg9IjEyODAiIGQ9Ik0xMjgwIDc2OHYtODAwcTAgLTQwIC0yOCAtNjh0LTY4IC0yOGgtMTA4OHEtNDAgMCAtNjggMjh0LTI4IDY4djEzNDRxMCA0MCAyOCA2OHQ2OCAyOGg1NDR2LTU0NHEwIC00MCAyOCAtNjh0NjggLTI4aDU0NHpNMTI3NyA4OTZoLTUwOXY1MDlxODIgLTE1IDEzMiAtNjVsMzEyIC0zMTJxNTAgLTUwIDY1IC0xMzJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNWM7IiBob3Jpei1hZHYteD0iMTI4MCIgZD0iTTEwMjQgMTYwdjY0cTAgMTQgLTkgMjN0LTIzIDloLTcwNHEtMTQgMCAtMjMgLTl0LTkgLTIzdi02NHEwIC0xNCA5IC0yM3QyMyAtOWg3MDRxMTQgMCAyMyA5dDkgMjN6TTEwMjQgNDE2djY0cTAgMTQgLTkgMjN0LTIzIDloLTcwNHEtMTQgMCAtMjMgLTl0LTkgLTIzdi02NHEwIC0xNCA5IC0yM3QyMyAtOWg3MDRxMTQgMCAyMyA5dDkgMjN6TTEyODAgNzY4di04MDBxMCAtNDAgLTI4IC02OHQtNjggLTI4aC0xMDg4cS00MCAwIC02OCAyOCB0LTI4IDY4djEzNDRxMCA0MCAyOCA2OHQ2OCAyOGg1NDR2LTU0NHEwIC00MCAyOCAtNjh0NjggLTI4aDU0NHpNMTI3NyA4OTZoLTUwOXY1MDlxODIgLTE1IDEzMiAtNjVsMzEyIC0zMTJxNTAgLTUwIDY1IC0xMzJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNWQ7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTExOTEgMTEyOGgxNzdsLTcyIDIxOGwtMTIgNDdxLTIgMTYgLTIgMjBoLTRsLTMgLTIwcTAgLTEgLTMuNSAtMTh0LTcuNSAtMjl6TTczNiA5NnEwIC0xMiAtMTAgLTI0bC0zMTkgLTMxOXEtMTAgLTkgLTIzIC05cS0xMiAwIC0yMyA5bC0zMjAgMzIwcS0xNSAxNiAtNyAzNXE4IDIwIDMwIDIwaDE5MnYxMzc2cTAgMTQgOSAyM3QyMyA5aDE5MnExNCAwIDIzIC05dDkgLTIzdi0xMzc2aDE5MnExNCAwIDIzIC05dDkgLTIzek0xNTcyIC0yMyB2LTIzM2gtNTg0djkwbDM2OSA1MjlxMTIgMTggMjEgMjdsMTEgOXYzcS0yIDAgLTYuNSAtMC41dC03LjUgLTAuNXEtMTIgLTMgLTMwIC0zaC0yMzJ2LTExNWgtMTIwdjIyOWg1Njd2LTg5bC0zNjkgLTUzMHEtNiAtOCAtMjEgLTI2bC0xMSAtMTF2LTJsMTQgMnE5IDIgMzAgMmgyNDh2MTE5aDEyMXpNMTY2MSA4NzR2LTEwNmgtMjg4djEwNmg3NWwtNDcgMTQ0aC0yNDNsLTQ3IC0xNDRoNzV2LTEwNmgtMjg3djEwNmg3MGwyMzAgNjYyaDE2MiBsMjMwIC02NjJoNzB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNWU7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTExOTEgMTA0aDE3N2wtNzIgMjE4bC0xMiA0N3EtMiAxNiAtMiAyMGgtNGwtMyAtMjBxMCAtMSAtMy41IC0xOHQtNy41IC0yOXpNNzM2IDk2cTAgLTEyIC0xMCAtMjRsLTMxOSAtMzE5cS0xMCAtOSAtMjMgLTlxLTEyIDAgLTIzIDlsLTMyMCAzMjBxLTE1IDE2IC03IDM1cTggMjAgMzAgMjBoMTkydjEzNzZxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjN2LTEzNzZoMTkycTE0IDAgMjMgLTl0OSAtMjN6TTE2NjEgLTE1MCB2LTEwNmgtMjg4djEwNmg3NWwtNDcgMTQ0aC0yNDNsLTQ3IC0xNDRoNzV2LTEwNmgtMjg3djEwNmg3MGwyMzAgNjYyaDE2MmwyMzAgLTY2Mmg3MHpNMTU3MiAxMDAxdi0yMzNoLTU4NHY5MGwzNjkgNTI5cTEyIDE4IDIxIDI3bDExIDl2M3EtMiAwIC02LjUgLTAuNXQtNy41IC0wLjVxLTEyIC0zIC0zMCAtM2gtMjMydi0xMTVoLTEyMHYyMjloNTY3di04OWwtMzY5IC01MzBxLTYgLTggLTIxIC0yNmwtMTEgLTEwdi0zbDE0IDNxOSAxIDMwIDFoMjQ4IHYxMTloMTIxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTYwOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik03MzYgOTZxMCAtMTIgLTEwIC0yNGwtMzE5IC0zMTlxLTEwIC05IC0yMyAtOXEtMTIgMCAtMjMgOWwtMzIwIDMyMHEtMTUgMTYgLTcgMzVxOCAyMCAzMCAyMGgxOTJ2MTM3NnEwIDE0IDkgMjN0MjMgOWgxOTJxMTQgMCAyMyAtOXQ5IC0yM3YtMTM3NmgxOTJxMTQgMCAyMyAtOXQ5IC0yM3pNMTc5MiAtMzJ2LTE5MnEwIC0xNCAtOSAtMjN0LTIzIC05aC04MzJxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDgzMiBxMTQgMCAyMyAtOXQ5IC0yM3pNMTYwMCA0ODB2LTE5MnEwIC0xNCAtOSAtMjN0LTIzIC05aC02NDBxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDY0MHExNCAwIDIzIC05dDkgLTIzek0xNDA4IDk5MnYtMTkycTAgLTE0IC05IC0yM3QtMjMgLTloLTQ0OHEtMTQgMCAtMjMgOXQtOSAyM3YxOTJxMCAxNCA5IDIzdDIzIDloNDQ4cTE0IDAgMjMgLTl0OSAtMjN6TTEyMTYgMTUwNHYtMTkycTAgLTE0IC05IC0yM3QtMjMgLTloLTI1NiBxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDI1NnExNCAwIDIzIC05dDkgLTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTYxOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik0xMjE2IC0zMnYtMTkycTAgLTE0IC05IC0yM3QtMjMgLTloLTI1NnEtMTQgMCAtMjMgOXQtOSAyM3YxOTJxMCAxNCA5IDIzdDIzIDloMjU2cTE0IDAgMjMgLTl0OSAtMjN6TTczNiA5NnEwIC0xMiAtMTAgLTI0bC0zMTkgLTMxOXEtMTAgLTkgLTIzIC05cS0xMiAwIC0yMyA5bC0zMjAgMzIwcS0xNSAxNiAtNyAzNXE4IDIwIDMwIDIwaDE5MnYxMzc2cTAgMTQgOSAyM3QyMyA5aDE5MnExNCAwIDIzIC05dDkgLTIzdi0xMzc2aDE5MiBxMTQgMCAyMyAtOXQ5IC0yM3pNMTQwOCA0ODB2LTE5MnEwIC0xNCAtOSAtMjN0LTIzIC05aC00NDhxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDQ0OHExNCAwIDIzIC05dDkgLTIzek0xNjAwIDk5MnYtMTkycTAgLTE0IC05IC0yM3QtMjMgLTloLTY0MHEtMTQgMCAtMjMgOXQtOSAyM3YxOTJxMCAxNCA5IDIzdDIzIDloNjQwcTE0IDAgMjMgLTl0OSAtMjN6TTE3OTIgMTUwNHYtMTkycTAgLTE0IC05IC0yM3QtMjMgLTloLTgzMiBxLTE0IDAgLTIzIDl0LTkgMjN2MTkycTAgMTQgOSAyM3QyMyA5aDgzMnExNCAwIDIzIC05dDkgLTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTYyOyIgZD0iTTEzNDYgMjIzcTAgNjMgLTQ0IDExNnQtMTAzIDUzcS01MiAwIC04MyAtMzd0LTMxIC05NHQzNi41IC05NXQxMDQuNSAtMzhxNTAgMCA4NSAyN3QzNSA2OHpNNzM2IDk2cTAgLTEyIC0xMCAtMjRsLTMxOSAtMzE5cS0xMCAtOSAtMjMgLTlxLTEyIDAgLTIzIDlsLTMyMCAzMjBxLTE1IDE2IC03IDM1cTggMjAgMzAgMjBoMTkydjEzNzZxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjN2LTEzNzZoMTkycTE0IDAgMjMgLTl0OSAtMjMgek0xNDg2IDE2NXEwIC02MiAtMTMgLTEyMS41dC00MSAtMTE0dC02OCAtOTUuNXQtOTguNSAtNjUuNXQtMTI3LjUgLTI0LjVxLTYyIDAgLTEwOCAxNnEtMjQgOCAtNDIgMTVsMzkgMTEzcTE1IC03IDMxIC0xMXEzNyAtMTMgNzUgLTEzcTg0IDAgMTM0LjUgNTguNXQ2Ni41IDE0NS41aC0ycS0yMSAtMjMgLTYxLjUgLTM3dC04NC41IC0xNHEtMTA2IDAgLTE3MyA3MS41dC02NyAxNzIuNXEwIDEwNSA3MiAxNzh0MTgxIDczcTEyMyAwIDIwNSAtOTQuNSB0ODIgLTI1Mi41ek0xNDU2IDg4MnYtMTE0aC00Njl2MTE0aDE2N3Y0MzJxMCA3IDAuNSAxOXQwLjUgMTd2MTZoLTJsLTcgLTEycS04IC0xMyAtMjYgLTMxbC02MiAtNThsLTgyIDg2bDE5MiAxODVoMTIzdi02NTRoMTY1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTYzOyIgZD0iTTEzNDYgMTI0N3EwIDYzIC00NCAxMTZ0LTEwMyA1M3EtNTIgMCAtODMgLTM3dC0zMSAtOTR0MzYuNSAtOTV0MTA0LjUgLTM4cTUwIDAgODUgMjd0MzUgNjh6TTczNiA5NnEwIC0xMiAtMTAgLTI0bC0zMTkgLTMxOXEtMTAgLTkgLTIzIC05cS0xMiAwIC0yMyA5bC0zMjAgMzIwcS0xNSAxNiAtNyAzNXE4IDIwIDMwIDIwaDE5MnYxMzc2cTAgMTQgOSAyM3QyMyA5aDE5MnExNCAwIDIzIC05dDkgLTIzdi0xMzc2aDE5MnExNCAwIDIzIC05IHQ5IC0yM3pNMTQ1NiAtMTQydi0xMTRoLTQ2OXYxMTRoMTY3djQzMnEwIDcgMC41IDE5dDAuNSAxN3YxNmgtMmwtNyAtMTJxLTggLTEzIC0yNiAtMzFsLTYyIC01OGwtODIgODZsMTkyIDE4NWgxMjN2LTY1NGgxNjV6TTE0ODYgMTE4OXEwIC02MiAtMTMgLTEyMS41dC00MSAtMTE0dC02OCAtOTUuNXQtOTguNSAtNjUuNXQtMTI3LjUgLTI0LjVxLTYyIDAgLTEwOCAxNnEtMjQgOCAtNDIgMTVsMzkgMTEzcTE1IC03IDMxIC0xMXEzNyAtMTMgNzUgLTEzIHE4NCAwIDEzNC41IDU4LjV0NjYuNSAxNDUuNWgtMnEtMjEgLTIzIC02MS41IC0zN3QtODQuNSAtMTRxLTEwNiAwIC0xNzMgNzEuNXQtNjcgMTcyLjVxMCAxMDUgNzIgMTc4dDE4MSA3M3ExMjMgMCAyMDUgLTk0LjV0ODIgLTI1Mi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTY0OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0yNTYgMTkycTAgMjYgLTE5IDQ1dC00NSAxOXEtMjcgMCAtNDUuNSAtMTl0LTE4LjUgLTQ1cTAgLTI3IDE4LjUgLTQ1LjV0NDUuNSAtMTguNXEyNiAwIDQ1IDE4LjV0MTkgNDUuNXpNNDE2IDcwNHYtNjQwcTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMjg4cS0yNiAwIC00NSAxOXQtMTkgNDV2NjQwcTAgMjYgMTkgNDV0NDUgMTloMjg4cTI2IDAgNDUgLTE5dDE5IC00NXpNMTYwMCA3MDRxMCAtODYgLTU1IC0xNDlxMTUgLTQ0IDE1IC03NiBxMyAtNzYgLTQzIC0xMzdxMTcgLTU2IDAgLTExN3EtMTUgLTU3IC01NCAtOTRxOSAtMTEyIC00OSAtMTgxcS02NCAtNzYgLTE5NyAtNzhoLTM2aC03NmgtMTdxLTY2IDAgLTE0NCAxNS41dC0xMjEuNSAyOXQtMTIwLjUgMzkuNXEtMTIzIDQzIC0xNTggNDRxLTI2IDEgLTQ1IDE5LjV0LTE5IDQ0LjV2NjQxcTAgMjUgMTggNDMuNXQ0MyAyMC41cTI0IDIgNzYgNTl0MTAxIDEyMXE2OCA4NyAxMDEgMTIwcTE4IDE4IDMxIDQ4dDE3LjUgNDguNSB0MTMuNSA2MC41cTcgMzkgMTIuNSA2MXQxOS41IDUydDM0IDUwcTE5IDE5IDQ1IDE5cTQ2IDAgODIuNSAtMTAuNXQ2MCAtMjZ0NDAgLTQwLjV0MjQgLTQ1dDEyIC01MHQ1IC00NXQwLjUgLTM5cTAgLTM4IC05LjUgLTc2dC0xOSAtNjB0LTI3LjUgLTU2cS0zIC02IC0xMCAtMTh0LTExIC0yMnQtOCAtMjRoMjc3cTc4IDAgMTM1IC01N3Q1NyAtMTM1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTY1OyIgaG9yaXotYWR2LXg9IjE2NjQiIGQ9Ik0yNTYgOTYwcTAgLTI2IC0xOSAtNDV0LTQ1IC0xOXEtMjcgMCAtNDUuNSAxOXQtMTguNSA0NXEwIDI3IDE4LjUgNDUuNXQ0NS41IDE4LjVxMjYgMCA0NSAtMTguNXQxOSAtNDUuNXpNNDE2IDQ0OHY2NDBxMCAyNiAtMTkgNDV0LTQ1IDE5aC0yODhxLTI2IDAgLTQ1IC0xOXQtMTkgLTQ1di02NDBxMCAtMjYgMTkgLTQ1dDQ1IC0xOWgyODhxMjYgMCA0NSAxOXQxOSA0NXpNMTU0NSA1OTdxNTUgLTYxIDU1IC0xNDlxLTEgLTc4IC01Ny41IC0xMzUgdC0xMzQuNSAtNTdoLTI3N3E0IC0xNCA4IC0yNHQxMSAtMjJ0MTAgLTE4cTE4IC0zNyAyNyAtNTd0MTkgLTU4LjV0MTAgLTc2LjVxMCAtMjQgLTAuNSAtMzl0LTUgLTQ1dC0xMiAtNTB0LTI0IC00NXQtNDAgLTQwLjV0LTYwIC0yNnQtODIuNSAtMTAuNXEtMjYgMCAtNDUgMTlxLTIwIDIwIC0zNCA1MHQtMTkuNSA1MnQtMTIuNSA2MXEtOSA0MiAtMTMuNSA2MC41dC0xNy41IDQ4LjV0LTMxIDQ4cS0zMyAzMyAtMTAxIDEyMHEtNDkgNjQgLTEwMSAxMjEgdC03NiA1OXEtMjUgMiAtNDMgMjAuNXQtMTggNDMuNXY2NDFxMCAyNiAxOSA0NC41dDQ1IDE5LjVxMzUgMSAxNTggNDRxNzcgMjYgMTIwLjUgMzkuNXQxMjEuNSAyOXQxNDQgMTUuNWgxN2g3NmgzNnExMzMgLTIgMTk3IC03OHE1OCAtNjkgNDkgLTE4MXEzOSAtMzcgNTQgLTk0cTE3IC02MSAwIC0xMTdxNDYgLTYxIDQzIC0xMzdxMCAtMzIgLTE1IC03NnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE2NjsiIGQ9Ik05MTkgMjMzdjE1N3EwIDUwIC0yOSA1MHEtMTcgMCAtMzMgLTE2di0yMjRxMTYgLTE2IDMzIC0xNnEyOSAwIDI5IDQ5ek0xMTAzIDM1NWg2NnYzNHEwIDUxIC0zMyA1MXQtMzMgLTUxdi0zNHpNNTMyIDYyMXYtNzBoLTgwdi00MjNoLTc0djQyM2gtNzh2NzBoMjMyek03MzMgNDk1di0zNjdoLTY3djQwcS0zOSAtNDUgLTc2IC00NXEtMzMgMCAtNDIgMjhxLTYgMTYgLTYgNTR2MjkwaDY2di0yNzBxMCAtMjQgMSAtMjZxMSAtMTUgMTUgLTE1IHEyMCAwIDQyIDMxdjI4MGg2N3pNOTg1IDM4NHYtMTQ2cTAgLTUyIC03IC03M3EtMTIgLTQyIC01MyAtNDJxLTM1IDAgLTY4IDQxdi0zNmgtNjd2NDkzaDY3di0xNjFxMzIgNDAgNjggNDBxNDEgMCA1MyAtNDJxNyAtMjEgNyAtNzR6TTEyMzYgMjU1di05cTAgLTI5IC0yIC00M3EtMyAtMjIgLTE1IC00MHEtMjcgLTQwIC04MCAtNDBxLTUyIDAgLTgxIDM4cS0yMSAyNyAtMjEgODZ2MTI5cTAgNTkgMjAgODZxMjkgMzggODAgMzh0NzggLTM4IHEyMSAtMjggMjEgLTg2di03NmgtMTMzdi02NXEwIC01MSAzNCAtNTFxMjQgMCAzMCAyNnEwIDEgMC41IDd0MC41IDE2LjV2MjEuNWg2OHpNNzg1IDEwNzl2LTE1NnEwIC01MSAtMzIgLTUxdC0zMiA1MXYxNTZxMCA1MiAzMiA1MnQzMiAtNTJ6TTEzMTggMzY2cTAgMTc3IC0xOSAyNjBxLTEwIDQ0IC00MyA3My41dC03NiAzNC41cS0xMzYgMTUgLTQxMiAxNXEtMjc1IDAgLTQxMSAtMTVxLTQ0IC01IC03Ni41IC0zNC41dC00Mi41IC03My41IHEtMjAgLTg3IC0yMCAtMjYwcTAgLTE3NiAyMCAtMjYwcTEwIC00MyA0Mi41IC03M3Q3NS41IC0zNXExMzcgLTE1IDQxMiAtMTV0NDEyIDE1cTQzIDUgNzUuNSAzNXQ0Mi41IDczcTIwIDg0IDIwIDI2MHpNNTYzIDEwMTdsOTAgMjk2aC03NWwtNTEgLTE5NWwtNTMgMTk1aC03OGwyNCAtNjl0MjMgLTY5cTM1IC0xMDMgNDYgLTE1OHYtMjAxaDc0djIwMXpNODUyIDkzNnYxMzBxMCA1OCAtMjEgODdxLTI5IDM4IC03OCAzOHEtNTEgMCAtNzggLTM4IHEtMjEgLTI5IC0yMSAtODd2LTEzMHEwIC01OCAyMSAtODdxMjcgLTM4IDc4IC0zOHE0OSAwIDc4IDM4cTIxIDI3IDIxIDg3ek0xMDMzIDgxNmg2N3YzNzBoLTY3di0yODNxLTIyIC0zMSAtNDIgLTMxcS0xNSAwIC0xNiAxNnEtMSAyIC0xIDI2djI3MmgtNjd2LTI5M3EwIC0zNyA2IC01NXExMSAtMjcgNDMgLTI3cTM2IDAgNzcgNDV2LTQwek0xNTM2IDExMjB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwIHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNjc7IiBkPSJNOTcxIDI5MnYtMjExcTAgLTY3IC0zOSAtNjdxLTIzIDAgLTQ1IDIydjMwMXEyMiAyMiA0NSAyMnEzOSAwIDM5IC02N3pNMTMwOSAyOTF2LTQ2aC05MHY0NnEwIDY4IDQ1IDY4dDQ1IC02OHpNMzQzIDUwOWgxMDd2OTRoLTMxMnYtOTRoMTA1di01NjloMTAwdjU2OXpNNjMxIC02MGg4OXY0OTRoLTg5di0zNzhxLTMwIC00MiAtNTcgLTQycS0xOCAwIC0yMSAyMXEtMSAzIC0xIDM1djM2NGgtODl2LTM5MXEwIC00OSA4IC03MyBxMTIgLTM3IDU4IC0zN3E0OCAwIDEwMiA2MXYtNTR6TTEwNjAgODh2MTk3cTAgNzMgLTkgOTlxLTE3IDU2IC03MSA1NnEtNTAgMCAtOTMgLTU0djIxN2gtODl2LTY2M2g4OXY0OHE0NSAtNTUgOTMgLTU1cTU0IDAgNzEgNTVxOSAyNyA5IDEwMHpNMTM5OCA5OHYxM2gtOTFxMCAtNTEgLTIgLTYxcS03IC0zNiAtNDAgLTM2cS00NiAwIC00NiA2OXY4N2gxNzl2MTAzcTAgNzkgLTI3IDExNnEtMzkgNTEgLTEwNiA1MXEtNjggMCAtMTA3IC01MSBxLTI4IC0zNyAtMjggLTExNnYtMTczcTAgLTc5IDI5IC0xMTZxMzkgLTUxIDEwOCAtNTFxNzIgMCAxMDggNTNxMTggMjcgMjEgNTRxMiA5IDIgNTh6TTc5MCAxMDExdjIxMHEwIDY5IC00MyA2OXQtNDMgLTY5di0yMTBxMCAtNzAgNDMgLTcwdDQzIDcwek0xNTA5IDI2MHEwIC0yMzQgLTI2IC0zNTBxLTE0IC01OSAtNTggLTk5dC0xMDIgLTQ2cS0xODQgLTIxIC01NTUgLTIxdC01NTUgMjFxLTU4IDYgLTEwMi41IDQ2dC01Ny41IDk5IHEtMjYgMTEyIC0yNiAzNTBxMCAyMzQgMjYgMzUwcTE0IDU5IDU4IDk5dDEwMyA0N3ExODMgMjAgNTU0IDIwdDU1NSAtMjBxNTggLTcgMTAyLjUgLTQ3dDU3LjUgLTk5cTI2IC0xMTIgMjYgLTM1MHpNNTExIDE1MzZoMTAybC0xMjEgLTM5OXYtMjcxaC0xMDB2MjcxcS0xNCA3NCAtNjEgMjEycS0zNyAxMDMgLTY1IDE4N2gxMDZsNzEgLTI2M3pNODgxIDEyMDN2LTE3NXEwIC04MSAtMjggLTExOHEtMzcgLTUxIC0xMDYgLTUxcS02NyAwIC0xMDUgNTEgcS0yOCAzOCAtMjggMTE4djE3NXEwIDgwIDI4IDExN3EzOCA1MSAxMDUgNTFxNjkgMCAxMDYgLTUxcTI4IC0zNyAyOCAtMTE3ek0xMjE2IDEzNjV2LTQ5OWgtOTF2NTVxLTUzIC02MiAtMTAzIC02MnEtNDYgMCAtNTkgMzdxLTggMjQgLTggNzV2Mzk0aDkxdi0zNjdxMCAtMzMgMSAtMzVxMyAtMjIgMjEgLTIycTI3IDAgNTcgNDN2MzgxaDkxeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTY4OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik01OTcgODY5cS0xMCAtMTggLTI1NyAtNDU2cS0yNyAtNDYgLTY1IC00NmgtMjM5cS0yMSAwIC0zMSAxN3QwIDM2bDI1MyA0NDhxMSAwIDAgMWwtMTYxIDI3OXEtMTIgMjIgLTEgMzdxOSAxNSAzMiAxNWgyMzlxNDAgMCA2NiAtNDV6TTE0MDMgMTUxMXExMSAtMTYgMCAtMzdsLTUyOCAtOTM0di0xbDMzNiAtNjE1cTExIC0yMCAxIC0zN3EtMTAgLTE1IC0zMiAtMTVoLTIzOXEtNDIgMCAtNjYgNDVsLTMzOSA2MjJxMTggMzIgNTMxIDk0MiBxMjUgNDUgNjQgNDVoMjQxcTIyIDAgMzEgLTE1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTY5OyIgZD0iTTY4NSA3NzFxMCAxIC0xMjYgMjIycS0yMSAzNCAtNTIgMzRoLTE4NHEtMTggMCAtMjYgLTExcS03IC0xMiAxIC0yOWwxMjUgLTIxNnYtMWwtMTk2IC0zNDZxLTkgLTE0IDAgLTI4cTggLTEzIDI0IC0xM2gxODVxMzEgMCA1MCAzNnpNMTMwOSAxMjY4cS03IDEyIC0yNCAxMmgtMTg3cS0zMCAwIC00OSAtMzVsLTQxMSAtNzI5cTEgLTIgMjYyIC00ODFxMjAgLTM1IDUyIC0zNWgxODRxMTggMCAyNSAxMnE4IDEzIC0xIDI4bC0yNjAgNDc2djEgbDQwOSA3MjNxOCAxNiAwIDI4ek0xNTM2IDExMjB2LTk2MHEwIC0xMTkgLTg0LjUgLTIwMy41dC0yMDMuNSAtODQuNWgtOTYwcS0xMTkgMCAtMjAzLjUgODQuNXQtODQuNSAyMDMuNXY5NjBxMCAxMTkgODQuNSAyMDMuNXQyMDMuNSA4NC41aDk2MHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE2YTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTI4MCA2NDBxMCAzNyAtMzAgNTRsLTUxMiAzMjBxLTMxIDIwIC02NSAycS0zMyAtMTggLTMzIC01NnYtNjQwcTAgLTM4IDMzIC01NnExNiAtOCAzMSAtOHEyMCAwIDM0IDEwbDUxMiAzMjBxMzAgMTcgMzAgNTR6TTE3OTIgNjQwcTAgLTk2IC0xIC0xNTB0LTguNSAtMTM2LjV0LTIyLjUgLTE0Ny41cS0xNiAtNzMgLTY5IC0xMjN0LTEyNCAtNThxLTIyMiAtMjUgLTY3MSAtMjV0LTY3MSAyNXEtNzEgOCAtMTI0LjUgNTh0LTY5LjUgMTIzIHEtMTQgNjUgLTIxLjUgMTQ3LjV0LTguNSAxMzYuNXQtMSAxNTB0MSAxNTB0OC41IDEzNi41dDIyLjUgMTQ3LjVxMTYgNzMgNjkgMTIzdDEyNCA1OHEyMjIgMjUgNjcxIDI1dDY3MSAtMjVxNzEgLTggMTI0LjUgLTU4dDY5LjUgLTEyM3ExNCAtNjUgMjEuNSAtMTQ3LjV0OC41IC0xMzYuNXQxIC0xNTB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNmI7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTQwMiA4MjlsNDk0IC0zMDVsLTM0MiAtMjg1bC00OTAgMzE5ek0xMzg4IDI3NHYtMTA4bC00OTAgLTI5M3YtMWwtMSAxbC0xIC0xdjFsLTQ4OSAyOTN2MTA4bDE0NyAtOTZsMzQyIDI4NHYybDEgLTFsMSAxdi0ybDM0MyAtMjg0ek01NTQgMTQxOGwzNDIgLTI4NWwtNDk0IC0zMDRsLTMzOCAyNzB6TTEzOTAgODI5bDMzOCAtMjcxbC00ODkgLTMxOWwtMzQzIDI4NXpNMTIzOSAxNDE4bDQ4OSAtMzE5bC0zMzggLTI3MGwtNDk0IDMwNHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE2YzsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNOTI4IDEzNXYtMTUxbC03MDcgLTF2MTUxek0xMTY5IDQ4MXYtNzAxbC0xIC0zNXYtMWgtMTEzMmwtMzUgMWgtMXY3MzZoMTIxdi02MThoOTI4djYxOGgxMjB6TTI0MSAzOTNsNzA0IC02NWwtMTMgLTE1MGwtNzA1IDY1ek0zMDkgNzA5bDY4MyAtMTgzbC0zOSAtMTQ2bC02ODMgMTgzek00NzIgMTA1OGw2MDkgLTM2MGwtNzcgLTEzMGwtNjA5IDM2MHpNODMyIDEzODlsMzk4IC01ODVsLTEyNCAtODVsLTM5OSA1ODR6TTEyODUgMTUzNiBsMTIxIC02OTdsLTE0OSAtMjZsLTEyMSA2OTd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNmQ7IiBkPSJNMTM2MiAxMTB2NjQ4aC0xMzVxMjAgLTYzIDIwIC0xMzFxMCAtMTI2IC02NCAtMjMyLjV0LTE3NCAtMTY4LjV0LTI0MCAtNjJxLTE5NyAwIC0zMzcgMTM1LjV0LTE0MCAzMjcuNXEwIDY4IDIwIDEzMWgtMTQxdi02NDhxMCAtMjYgMTcuNSAtNDMuNXQ0My41IC0xNy41aDEwNjlxMjUgMCA0MyAxNy41dDE4IDQzLjV6TTEwNzggNjQzcTAgMTI0IC05MC41IDIxMS41dC0yMTguNSA4Ny41cS0xMjcgMCAtMjE3LjUgLTg3LjV0LTkwLjUgLTIxMS41IHQ5MC41IC0yMTEuNXQyMTcuNSAtODcuNXExMjggMCAyMTguNSA4Ny41dDkwLjUgMjExLjV6TTEzNjIgMTAwM3YxNjVxMCAyOCAtMjAgNDguNXQtNDkgMjAuNWgtMTc0cS0yOSAwIC00OSAtMjAuNXQtMjAgLTQ4LjV2LTE2NXEwIC0yOSAyMCAtNDl0NDkgLTIwaDE3NHEyOSAwIDQ5IDIwdDIwIDQ5ek0xNTM2IDEyMTF2LTExNDJxMCAtODEgLTU4IC0xMzl0LTEzOSAtNThoLTExNDJxLTgxIDAgLTEzOSA1OHQtNTggMTM5djExNDJxMCA4MSA1OCAxMzkgdDEzOSA1OGgxMTQycTgxIDAgMTM5IC01OHQ1OCAtMTM5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTZlOyIgZD0iTTEyNDggMTQwOHExMTkgMCAyMDMuNSAtODQuNXQ4NC41IC0yMDMuNXYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwek02OTggNjQwcTAgODggLTYyIDE1MHQtMTUwIDYydC0xNTAgLTYydC02MiAtMTUwdDYyIC0xNTB0MTUwIC02MnQxNTAgNjJ0NjIgMTUwek0xMjYyIDY0MHEwIDg4IC02MiAxNTAgdC0xNTAgNjJ0LTE1MCAtNjJ0LTYyIC0xNTB0NjIgLTE1MHQxNTAgLTYydDE1MCA2MnQ2MiAxNTB6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNzA7IiBkPSJNNzY4IDkxNGwyMDEgLTMwNmgtNDAyek0xMTMzIDM4NGg5NGwtNDU5IDY5MWwtNDU5IC02OTFoOTRsMTA0IDE2MGg1MjJ6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDN0LTI3OS41IDI3OS41dC0xMDMgMzg1LjV0MTAzIDM4NS41dDI3OS41IDI3OS41dDM4NS41IDEwM3QzODUuNSAtMTAzdDI3OS41IC0yNzkuNXQxMDMgLTM4NS41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTcxOyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik04MTUgNjc3cTggLTYzIC01MC41IC0xMDF0LTExMS41IC02cS0zOSAxNyAtNTMuNSA1OHQtMC41IDgydDUyIDU4cTM2IDE4IDcyLjUgMTJ0NjQgLTM1LjV0MjcuNSAtNjcuNXpNOTI2IDY5OHEtMTQgMTA3IC0xMTMgMTY0dC0xOTcgMTNxLTYzIC0yOCAtMTAwLjUgLTg4LjV0LTM0LjUgLTEyOS41cTQgLTkxIDc3LjUgLTE1NXQxNjUuNSAtNTZxOTEgOCAxNTIgODR0NTAgMTY4ek0xMTY1IDEyNDBxLTIwIDI3IC01NiA0NC41dC01OCAyMiB0LTcxIDEyLjVxLTI5MSA0NyAtNTY2IC0ycS00MyAtNyAtNjYgLTEydC01NSAtMjJ0LTUwIC00M3EzMCAtMjggNzYgLTQ1LjV0NzMuNSAtMjJ0ODcuNSAtMTEuNXEyMjggLTI5IDQ0OCAtMXE2MyA4IDg5LjUgMTJ0NzIuNSAyMS41dDc1IDQ2LjV6TTEyMjIgMjA1cS04IC0yNiAtMTUuNSAtNzYuNXQtMTQgLTg0dC0yOC41IC03MHQtNTggLTU2LjVxLTg2IC00OCAtMTg5LjUgLTcxLjV0LTIwMiAtMjJ0LTIwMS41IDE4LjVxLTQ2IDggLTgxLjUgMTggdC03Ni41IDI3dC03MyA0My41dC01MiA2MS41cS0yNSA5NiAtNTcgMjkybDYgMTZsMTggOXEyMjMgLTE0OCA1MDYuNSAtMTQ4dDUwNy41IDE0OHEyMSAtNiAyNCAtMjN0LTUgLTQ1dC04IC0zN3pNMTQwMyAxMTY2cS0yNiAtMTY3IC0xMTEgLTY1NXEtNSAtMzAgLTI3IC01NnQtNDMuNSAtNDB0LTU0LjUgLTMxcS0yNTIgLTEyNiAtNjEwIC04OHEtMjQ4IDI3IC0zOTQgMTM5cS0xNSAxMiAtMjUuNSAyNi41dC0xNyAzNXQtOSAzNHQtNiAzOS41IHQtNS41IDM1cS05IDUwIC0yNi41IDE1MHQtMjggMTYxLjV0LTIzLjUgMTQ3LjV0LTIyIDE1OHEzIDI2IDE3LjUgNDguNXQzMS41IDM3LjV0NDUgMzB0NDYgMjIuNXQ0OCAxOC41cTEyNSA0NiAzMTMgNjRxMzc5IDM3IDY3NiAtNTBxMTU1IC00NiAyMTUgLTEyMnExNiAtMjAgMTYuNSAtNTF0LTUuNSAtNTR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNzI7IiBkPSJNODQ4IDY2NnEwIDQzIC00MSA2NnQtNzcgMXEtNDMgLTIwIC00Mi41IC03Mi41dDQzLjUgLTcwLjVxMzkgLTIzIDgxIDR0MzYgNzJ6TTkyOCA2ODJxOCAtNjYgLTM2IC0xMjF0LTExMCAtNjF0LTExOSA0MHQtNTYgMTEzcS0yIDQ5IDI1LjUgOTN0NzIuNSA2NHE3MCAzMSAxNDEuNSAtMTB0ODEuNSAtMTE4ek0xMTAwIDEwNzNxLTIwIC0yMSAtNTMuNSAtMzR0LTUzIC0xNnQtNjMuNSAtOHEtMTU1IC0yMCAtMzI0IDBxLTQ0IDYgLTYzIDkuNSB0LTUyLjUgMTZ0LTU0LjUgMzIuNXExMyAxOSAzNiAzMXQ0MCAxNS41dDQ3IDguNXExOTggMzUgNDA4IDFxMzMgLTUgNTEgLTguNXQ0MyAtMTZ0MzkgLTMxLjV6TTExNDIgMzI3cTAgNyA1LjUgMjYuNXQzIDMydC0xNy41IDE2LjVxLTE2MSAtMTA2IC0zNjUgLTEwNnQtMzY2IDEwNmwtMTIgLTZsLTUgLTEycTI2IC0xNTQgNDEgLTIxMHE0NyAtODEgMjA0IC0xMDhxMjQ5IC00NiA0MjggNTNxMzQgMTkgNDkgNTEuNXQyMi41IDg1LjV0MTIuNSA3MXogTTEyNzIgMTAyMHE5IDUzIC04IDc1cS00MyA1NSAtMTU1IDg4cS0yMTYgNjMgLTQ4NyAzNnEtMTMyIC0xMiAtMjI2IC00NnEtMzggLTE1IC01OS41IC0yNXQtNDcgLTM0dC0yOS41IC01NHE4IC02OCAxOSAtMTM4dDI5IC0xNzF0MjQgLTEzN3ExIC01IDUgLTMxdDcgLTM2dDEyIC0yN3QyMiAtMjhxMTA1IC04MCAyODQgLTEwMHEyNTkgLTI4IDQ0MCA2M3EyNCAxMyAzOS41IDIzdDMxIDI5dDE5LjUgNDBxNDggMjY3IDgwIDQ3M3pNMTUzNiAxMTIwIHYtOTYwcTAgLTExOSAtODQuNSAtMjAzLjV0LTIwMy41IC04NC41aC05NjBxLTExOSAwIC0yMDMuNSA4NC41dC04NC41IDIwMy41djk2MHEwIDExOSA4NC41IDIwMy41dDIwMy41IDg0LjVoOTYwcTExOSAwIDIwMy41IC04NC41dDg0LjUgLTIwMy41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTczOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik0zOTAgMTQwOGgyMTl2LTM4OGgzNjR2LTI0MWgtMzY0di0zOTRxMCAtMTM2IDE0IC0xNzJxMTMgLTM3IDUyIC02MHE1MCAtMzEgMTE3IC0zMXExMTcgMCAyMzIgNzZ2LTI0MnEtMTAyIC00OCAtMTc4IC02NXEtNzcgLTE5IC0xNzMgLTE5cS0xMDUgMCAtMTg2IDI3cS03OCAyNSAtMTM4IDc1cS01OCA1MSAtNzkgMTA1cS0yMiA1NCAtMjIgMTYxdjUzOWgtMTcwdjIxN3E5MSAzMCAxNTUgODRxNjQgNTUgMTAzIDEzMnEzOSA3OCA1NCAxOTZ6ICIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTc0OyIgZD0iTTExMjMgMTI3djE4MXEtODggLTU2IC0xNzQgLTU2cS01MSAwIC04OCAyM3EtMjkgMTcgLTM5IDQ1cS0xMSAzMCAtMTEgMTI5djI5NWgyNzR2MTgxaC0yNzR2MjkxaC0xNjRxLTExIC05MCAtNDAgLTE0N3QtNzggLTk5cS00OCAtNDAgLTExNiAtNjN2LTE2M2gxMjd2LTQwNHEwIC03OCAxNyAtMTIxcTE3IC00MiA1OSAtNzhxNDMgLTM3IDEwNCAtNTdxNjIgLTIwIDE0MCAtMjBxNjcgMCAxMjkgMTRxNTcgMTMgMTM0IDQ5ek0xNTM2IDExMjAgdi05NjBxMCAtMTE5IC04NC41IC0yMDMuNXQtMjAzLjUgLTg0LjVoLTk2MHEtMTE5IDAgLTIwMy41IDg0LjV0LTg0LjUgMjAzLjV2OTYwcTAgMTE5IDg0LjUgMjAzLjV0MjAzLjUgODQuNWg5NjBxMTE5IDAgMjAzLjUgLTg0LjV0ODQuNSAtMjAzLjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxNzU7IiBob3Jpei1hZHYteD0iNzY4IiBkPSJNNzY1IDIzN3E4IC0xOSAtNSAtMzVsLTM1MCAtMzg0cS0xMCAtMTAgLTIzIC0xMHEtMTQgMCAtMjQgMTBsLTM1NSAzODRxLTEzIDE2IC01IDM1cTkgMTkgMjkgMTloMjI0djEyNDhxMCAxNCA5IDIzdDIzIDloMTkycTE0IDAgMjMgLTl0OSAtMjN2LTEyNDhoMjI0cTIxIDAgMjkgLTE5eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTc2OyIgaG9yaXotYWR2LXg9Ijc2OCIgZD0iTTc2NSAxMDQzcS05IC0xOSAtMjkgLTE5aC0yMjR2LTEyNDhxMCAtMTQgLTkgLTIzdC0yMyAtOWgtMTkycS0xNCAwIC0yMyA5dC05IDIzdjEyNDhoLTIyNHEtMjEgMCAtMjkgMTl0NSAzNWwzNTAgMzg0cTEwIDEwIDIzIDEwcTE0IDAgMjQgLTEwbDM1NSAtMzg0cTEzIC0xNiA1IC0zNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE3NzsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTc5MiA3MzZ2LTE5MnEwIC0xNCAtOSAtMjN0LTIzIC05aC0xMjQ4di0yMjRxMCAtMjEgLTE5IC0yOXQtMzUgNWwtMzg0IDM1MHEtMTAgMTAgLTEwIDIzcTAgMTQgMTAgMjRsMzg0IDM1NHExNiAxNCAzNSA2cTE5IC05IDE5IC0yOXYtMjI0aDEyNDhxMTQgMCAyMyAtOXQ5IC0yM3oiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE3ODsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTcyOCA2NDNxMCAtMTQgLTEwIC0yNGwtMzg0IC0zNTRxLTE2IC0xNCAtMzUgLTZxLTE5IDkgLTE5IDI5djIyNGgtMTI0OHEtMTQgMCAtMjMgOXQtOSAyM3YxOTJxMCAxNCA5IDIzdDIzIDloMTI0OHYyMjRxMCAyMSAxOSAyOXQzNSAtNWwzODQgLTM1MHExMCAtMTAgMTAgLTIzeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTc5OyIgaG9yaXotYWR2LXg9IjE0MDgiIGQ9Ik0xMzkzIDMyMXEtMzkgLTEyNSAtMTIzIC0yNTBxLTEyOSAtMTk2IC0yNTcgLTE5NnEtNDkgMCAtMTQwIDMycS04NiAzMiAtMTUxIDMycS02MSAwIC0xNDIgLTMzcS04MSAtMzQgLTEzMiAtMzRxLTE1MiAwIC0zMDEgMjU5cS0xNDcgMjYxIC0xNDcgNTAzcTAgMjI4IDExMyAzNzRxMTEyIDE0NCAyODQgMTQ0cTcyIDAgMTc3IC0zMHExMDQgLTMwIDEzOCAtMzBxNDUgMCAxNDMgMzRxMTAyIDM0IDE3MyAzNHExMTkgMCAyMTMgLTY1IHE1MiAtMzYgMTA0IC0xMDBxLTc5IC02NyAtMTE0IC0xMThxLTY1IC05NCAtNjUgLTIwN3EwIC0xMjQgNjkgLTIyM3QxNTggLTEyNnpNMTAxNyAxNDk0cTAgLTYxIC0yOSAtMTM2cS0zMCAtNzUgLTkzIC0xMzhxLTU0IC01NCAtMTA4IC03MnEtMzcgLTExIC0xMDQgLTE3cTMgMTQ5IDc4IDI1N3E3NCAxMDcgMjUwIDE0OHExIC0zIDIuNSAtMTF0Mi41IC0xMXEwIC00IDAuNSAtMTB0MC41IC0xMHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE3YTsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNNjgyIDUzMHYtNjUxbC02ODIgOTR2NTU3aDY4MnpNNjgyIDEyNzN2LTY1OWgtNjgydjU2NXpNMTY2NCA1MzB2LTc4NmwtOTA3IDEyNXY2NjFoOTA3ek0xNjY0IDE0MDh2LTc5NGgtOTA3djY2OXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE3YjsiIGhvcml6LWFkdi14PSIxNDA4IiBkPSJNNDkzIDEwNTNxMTYgMCAyNy41IDExLjV0MTEuNSAyNy41dC0xMS41IDI3LjV0LTI3LjUgMTEuNXQtMjcgLTExLjV0LTExIC0yNy41dDExIC0yNy41dDI3IC0xMS41ek05MTUgMTA1M3ExNiAwIDI3IDExLjV0MTEgMjcuNXQtMTEgMjcuNXQtMjcgMTEuNXQtMjcuNSAtMTEuNXQtMTEuNSAtMjcuNXQxMS41IC0yNy41dDI3LjUgLTExLjV6TTEwMyA4NjlxNDIgMCA3MiAtMzB0MzAgLTcydi00MzBxMCAtNDMgLTI5LjUgLTczdC03Mi41IC0zMCB0LTczIDMwdC0zMCA3M3Y0MzBxMCA0MiAzMCA3MnQ3MyAzMHpNMTE2MyA4NTB2LTY2NnEwIC00NiAtMzIgLTc4dC03NyAtMzJoLTc1di0yMjdxMCAtNDMgLTMwIC03M3QtNzMgLTMwdC03MyAzMHQtMzAgNzN2MjI3aC0xMzh2LTIyN3EwIC00MyAtMzAgLTczdC03MyAtMzBxLTQyIDAgLTcyIDMwdC0zMCA3M2wtMSAyMjdoLTc0cS00NiAwIC03OCAzMnQtMzIgNzh2NjY2aDkxOHpNOTMxIDEyNTVxMTA3IC01NSAxNzEgLTE1My41dDY0IC0yMTUuNSBoLTkyNXEwIDExNyA2NCAyMTUuNXQxNzIgMTUzLjVsLTcxIDEzMXEtNyAxMyA1IDIwcTEzIDYgMjAgLTZsNzIgLTEzMnE5NSA0MiAyMDEgNDJ0MjAxIC00Mmw3MiAxMzJxNyAxMiAyMCA2cTEyIC03IDUgLTIwek0xNDA4IDc2N3YtNDMwcTAgLTQzIC0zMCAtNzN0LTczIC0zMHEtNDIgMCAtNzIgMzB0LTMwIDczdjQzMHEwIDQzIDMwIDcyLjV0NzIgMjkuNXE0MyAwIDczIC0yOS41dDMwIC03Mi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTdjOyIgZD0iTTY2MyAxMTI1cS0xMSAtMSAtMTUuNSAtMTAuNXQtOC41IC05LjVxLTUgLTEgLTUgNXEwIDEyIDE5IDE1aDEwek03NTAgMTExMXEtNCAtMSAtMTEuNSA2LjV0LTE3LjUgNC41cTI0IDExIDMyIC0ycTMgLTYgLTMgLTl6TTM5OSA2ODRxLTQgMSAtNiAtM3QtNC41IC0xMi41dC01LjUgLTEzLjV0LTEwIC0xM3EtNyAtMTAgLTEgLTEycTQgLTEgMTIuNSA3dDEyLjUgMThxMSAzIDIgN3QyIDZ0MS41IDQuNXQwLjUgNHYzdC0xIDIuNXQtMyAyeiBNMTI1NCAzMjVxMCAxOCAtNTUgNDJxNCAxNSA3LjUgMjcuNXQ1IDI2dDMgMjEuNXQwLjUgMjIuNXQtMSAxOS41dC0zLjUgMjJ0LTQgMjAuNXQtNSAyNXQtNS41IDI2LjVxLTEwIDQ4IC00NyAxMDN0LTcyIDc1cTI0IC0yMCA1NyAtODNxODcgLTE2MiA1NCAtMjc4cS0xMSAtNDAgLTUwIC00MnEtMzEgLTQgLTM4LjUgMTguNXQtOCA4My41dC0xMS41IDEwN3EtOSAzOSAtMTkuNSA2OXQtMTkuNSA0NS41dC0xNS41IDI0LjV0LTEzIDE1dC03LjUgNyBxLTE0IDYyIC0zMSAxMDN0LTI5LjUgNTZ0LTIzLjUgMzN0LTE1IDQwcS00IDIxIDYgNTMuNXQ0LjUgNDkuNXQtNDQuNSAyNXEtMTUgMyAtNDQuNSAxOHQtMzUuNSAxNnEtOCAxIC0xMSAyNnQ4IDUxdDM2IDI3cTM3IDMgNTEgLTMwdDQgLTU4cS0xMSAtMTkgLTIgLTI2LjV0MzAgLTAuNXExMyA0IDEzIDM2djM3cS01IDMwIC0xMy41IDUwdC0yMSAzMC41dC0yMy41IDE1dC0yNyA3LjVxLTEwNyAtOCAtODkgLTEzNHEwIC0xNSAtMSAtMTUgcS05IDkgLTI5LjUgMTAuNXQtMzMgLTAuNXQtMTUuNSA1cTEgNTcgLTE2IDkwdC00NSAzNHEtMjcgMSAtNDEuNSAtMjcuNXQtMTYuNSAtNTkuNXEtMSAtMTUgMy41IC0zN3QxMyAtMzcuNXQxNS41IC0xMy41cTEwIDMgMTYgMTRxNCA5IC03IDhxLTcgMCAtMTUuNSAxNC41dC05LjUgMzMuNXEtMSAyMiA5IDM3dDM0IDE0cTE3IDAgMjcgLTIxdDkuNSAtMzl0LTEuNSAtMjJxLTIyIC0xNSAtMzEgLTI5cS04IC0xMiAtMjcuNSAtMjMuNSB0LTIwLjUgLTEyLjVxLTEzIC0xNCAtMTUuNSAtMjd0Ny41IC0xOHExNCAtOCAyNSAtMTkuNXQxNiAtMTl0MTguNSAtMTN0MzUuNSAtNi41cTQ3IC0yIDEwMiAxNXEyIDEgMjMgN3QzNC41IDEwLjV0MjkuNSAxM3QyMSAxNy41cTkgMTQgMjAgOHE1IC0zIDYuNSAtOC41dC0zIC0xMnQtMTYuNSAtOS41cS0yMCAtNiAtNTYuNSAtMjEuNXQtNDUuNSAtMTkuNXEtNDQgLTE5IC03MCAtMjNxLTI1IC01IC03OSAycS0xMCAyIC05IC0ydDE3IC0xOSBxMjUgLTIzIDY3IC0yMnExNyAxIDM2IDd0MzYgMTR0MzMuNSAxNy41dDMwIDE3dDI0LjUgMTJ0MTcuNSAyLjV0OC41IC0xMXEwIC0yIC0xIC00LjV0LTQgLTV0LTYgLTQuNXQtOC41IC01dC05IC00LjV0LTEwIC01dC05LjUgLTQuNXEtMjggLTE0IC02Ny41IC00NHQtNjYuNSAtNDN0LTQ5IC0xcS0yMSAxMSAtNjMgNzNxLTIyIDMxIC0yNSAyMnEtMSAtMyAtMSAtMTBxMCAtMjUgLTE1IC01Ni41dC0yOS41IC01NS41dC0yMSAtNTh0MTEuNSAtNjMgcS0yMyAtNiAtNjIuNSAtOTB0LTQ3LjUgLTE0MXEtMiAtMTggLTEuNSAtNjl0LTUuNSAtNTlxLTggLTI0IC0yOSAtM3EtMzIgMzEgLTM2IDk0cS0yIDI4IDQgNTZxNCAxOSAtMSAxOGwtNCAtNXEtMzYgLTY1IDEwIC0xNjZxNSAtMTIgMjUgLTI4dDI0IC0yMHEyMCAtMjMgMTA0IC05MC41dDkzIC03Ni41cTE2IC0xNSAxNy41IC0zOHQtMTQgLTQzdC00NS41IC0yM3E4IC0xNSAyOSAtNDQuNXQyOCAtNTR0NyAtNzAuNXE0NiAyNCA3IDkyIHEtNCA4IC0xMC41IDE2dC05LjUgMTJ0LTIgNnEzIDUgMTMgOS41dDIwIC0yLjVxNDYgLTUyIDE2NiAtMzZxMTMzIDE1IDE3NyA4N3EyMyAzOCAzNCAzMHExMiAtNiAxMCAtNTJxLTEgLTI1IC0yMyAtOTJxLTkgLTIzIC02IC0zNy41dDI0IC0xNS41cTMgMTkgMTQuNSA3N3QxMy41IDkwcTIgMjEgLTYuNSA3My41dC03LjUgOTd0MjMgNzAuNXExNSAxOCA1MSAxOHExIDM3IDM0LjUgNTN0NzIuNSAxMC41dDYwIC0yMi41ek02MjYgMTE1MiBxMyAxNyAtMi41IDMwdC0xMS41IDE1cS05IDIgLTkgLTdxMiAtNSA1IC02cTEwIDAgNyAtMTVxLTMgLTIwIDggLTIwcTMgMCAzIDN6TTEwNDUgOTU1cS0yIDggLTYuNSAxMS41dC0xMyA1dC0xNC41IDUuNXEtNSAzIC05LjUgOHQtNyA4dC01LjUgNi41dC00IDR0LTQgLTEuNXEtMTQgLTE2IDcgLTQzLjV0MzkgLTMxLjVxOSAtMSAxNC41IDh0My41IDIwek04NjcgMTE2OHEwIDExIC01IDE5LjV0LTExIDEyLjV0LTkgM3EtMTQgLTEgLTcgLTdsNCAtMiBxMTQgLTQgMTggLTMxcTAgLTMgOCAyek05MjEgMTQwMXEwIDIgLTIuNSA1dC05IDd0LTkuNSA2cS0xNSAxNSAtMjQgMTVxLTkgLTEgLTExLjUgLTcuNXQtMSAtMTN0LTAuNSAtMTIuNXEtMSAtNCAtNiAtMTAuNXQtNiAtOXQzIC04LjVxNCAtMyA4IDB0MTEgOXQxNSA5cTEgMSA5IDF0MTUgMnQ5IDd6TTE0ODYgNjBxMjAgLTEyIDMxIC0yNC41dDEyIC0yNHQtMi41IC0yMi41dC0xNS41IC0yMnQtMjMuNSAtMTkuNXQtMzAgLTE4LjUgdC0zMS41IC0xNi41dC0zMiAtMTUuNXQtMjcgLTEzcS0zOCAtMTkgLTg1LjUgLTU2dC03NS41IC02NHEtMTcgLTE2IC02OCAtMTkuNXQtODkgMTQuNXEtMTggOSAtMjkuNSAyMy41dC0xNi41IDI1LjV0LTIyIDE5LjV0LTQ3IDkuNXEtNDQgMSAtMTMwIDFxLTE5IDAgLTU3IC0xLjV0LTU4IC0yLjVxLTQ0IC0xIC03OS41IC0xNXQtNTMuNSAtMzB0LTQzLjUgLTI4LjV0LTUzLjUgLTExLjVxLTI5IDEgLTExMSAzMXQtMTQ2IDQzcS0xOSA0IC01MSA5LjUgdC01MCA5dC0zOS41IDkuNXQtMzMuNSAxNC41dC0xNyAxOS41cS0xMCAyMyA3IDY2LjV0MTggNTQuNXExIDE2IC00IDQwdC0xMCA0Mi41dC00LjUgMzYuNXQxMC41IDI3cTE0IDEyIDU3IDE0dDYwIDEycTMwIDE4IDQyIDM1dDEyIDUxcTIxIC03MyAtMzIgLTEwNnEtMzIgLTIwIC04MyAtMTVxLTM0IDMgLTQzIC0xMHEtMTMgLTE1IDUgLTU3cTIgLTYgOCAtMTh0OC41IC0xOHQ0LjUgLTE3dDEgLTIycTAgLTE1IC0xNyAtNDl0LTE0IC00OCBxMyAtMTcgMzcgLTI2cTIwIC02IDg0LjUgLTE4LjV0OTkuNSAtMjAuNXEyNCAtNiA3NCAtMjJ0ODIuNSAtMjN0NTUuNSAtNHE0MyA2IDY0LjUgMjh0MjMgNDh0LTcuNSA1OC41dC0xOSA1MnQtMjAgMzYuNXEtMTIxIDE5MCAtMTY5IDI0MnEtNjggNzQgLTExMyA0MHEtMTEgLTkgLTE1IDE1cS0zIDE2IC0yIDM4cTEgMjkgMTAgNTJ0MjQgNDd0MjIgNDJxOCAyMSAyNi41IDcydDI5LjUgNzh0MzAgNjF0MzkgNTRxMTEwIDE0MyAxMjQgMTk1IHEtMTIgMTEyIC0xNiAzMTBxLTIgOTAgMjQgMTUxLjV0MTA2IDEwNC41cTM5IDIxIDEwNCAyMXE1MyAxIDEwNiAtMTMuNXQ4OSAtNDEuNXE1NyAtNDIgOTEuNSAtMTIxLjV0MjkuNSAtMTQ3LjVxLTUgLTk1IDMwIC0yMTRxMzQgLTExMyAxMzMgLTIxOHE1NSAtNTkgOTkuNSAtMTYzdDU5LjUgLTE5MXE4IC00OSA1IC04NC41dC0xMiAtNTUuNXQtMjAgLTIycS0xMCAtMiAtMjMuNSAtMTl0LTI3IC0zNS41dC00MC41IC0zMy41dC02MSAtMTQgcS0xOCAxIC0zMS41IDV0LTIyLjUgMTMuNXQtMTMuNSAxNS41dC0xMS41IDIwLjV0LTkgMTkuNXEtMjIgMzcgLTQxIDMwdC0yOCAtNDl0NyAtOTdxMjAgLTcwIDEgLTE5NXEtMTAgLTY1IDE4IC0xMDAuNXQ3MyAtMzN0ODUgMzUuNXE1OSA0OSA4OS41IDY2LjV0MTAzLjUgNDIuNXE1MyAxOCA3NyAzNi41dDE4LjUgMzQuNXQtMjUgMjguNXQtNTEuNSAyMy41cS0zMyAxMSAtNDkuNSA0OHQtMTUgNzIuNXQxNS41IDQ3LjVxMSAtMzEgOCAtNTYuNSB0MTQuNSAtNDAuNXQyMC41IC0yOC41dDIxIC0xOXQyMS41IC0xM3QxNi41IC05LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxN2Q7IiBkPSJNMTAyNCAzNnEtNDIgMjQxIC0xNDAgNDk4aC0ybC0yIC0xcS0xNiAtNiAtNDMgLTE2LjV0LTEwMSAtNDl0LTEzNyAtODJ0LTEzMSAtMTE0LjV0LTEwMyAtMTQ4bC0xNSAxMXExODQgLTE1MCA0MTggLTE1MHExMzIgMCAyNTYgNTJ6TTgzOSA2NDNxLTIxIDQ5IC01MyAxMTFxLTMxMSAtOTMgLTY3MyAtOTNxLTEgLTcgLTEgLTIxcTAgLTEyNCA0NCAtMjM2LjV0MTI0IC0yMDEuNXE1MCA4OSAxMjMuNSAxNjYuNXQxNDIuNSAxMjQuNXQxMzAuNSA4MSB0OTkuNSA0OGwzNyAxM3E0IDEgMTMgMy41dDEzIDQuNXpNNzMyIDg1NXEtMTIwIDIxMyAtMjQ0IDM3OHEtMTM4IC02NSAtMjM0IC0xODZ0LTEyOCAtMjcycTMwMiAwIDYwNiA4MHpNMTQxNiA1MzZxLTIxMCA2MCAtNDA5IDI5cTg3IC0yMzkgMTI4IC00NjlxMTExIDc1IDE4NSAxODkuNXQ5NiAyNTAuNXpNNjExIDEyNzdxLTEgMCAtMiAtMXExIDEgMiAxek0xMjAxIDExMzJxLTE4NSAxNjQgLTQzMyAxNjRxLTc2IDAgLTE1NSAtMTkgcTEzMSAtMTcwIDI0NiAtMzgycTY5IDI2IDEzMCA2MC41dDk2LjUgNjEuNXQ2NS41IDU3dDM3LjUgNDAuNXpNMTQyNCA2NDdxLTMgMjMyIC0xNDkgNDEwbC0xIC0xcS05IC0xMiAtMTkgLTI0LjV0LTQzLjUgLTQ0LjV0LTcxIC02MC41dC0xMDAgLTY1dC0xMzEuNSAtNjQuNXEyNSAtNTMgNDQgLTk1cTIgLTYgNi41IC0xNy41dDcuNSAtMTYuNXEzNiA1IDc0LjUgN3Q3My41IDJ0NjkgLTEuNXQ2NCAtNHQ1Ni41IC01LjV0NDggLTYuNXQzNi41IC02IHQyNSAtNC41ek0xNTM2IDY0MHEwIC0yMDkgLTEwMyAtMzg1LjV0LTI3OS41IC0yNzkuNXQtMzg1LjUgLTEwM3QtMzg1LjUgMTAzdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE3ZTsiIGQ9Ik0xMTczIDQ3M3EwIDUwIC0xOS41IDkxLjV0LTQ4LjUgNjguNXQtNzMgNDl0LTgyLjUgMzR0LTg3LjUgMjNsLTEwNCAyNHEtMzAgNyAtNDQgMTAuNXQtMzUgMTEuNXQtMzAgMTZ0LTE2LjUgMjF0LTcuNSAzMHEwIDc3IDE0NCA3N3E0MyAwIDc3IC0xMnQ1NCAtMjguNXQzOCAtMzMuNXQ0MCAtMjl0NDggLTEycTQ3IDAgNzUuNSAzMnQyOC41IDc3cTAgNTUgLTU2IDk5LjV0LTE0MiA2Ny41dC0xODIgMjNxLTY4IDAgLTEzMiAtMTUuNSB0LTExOS41IC00N3QtODkgLTg3dC0zMy41IC0xMjguNXEwIC02MSAxOSAtMTA2LjV0NTYgLTc1LjV0ODAgLTQ4LjV0MTAzIC0zMi41bDE0NiAtMzZxOTAgLTIyIDExMiAtMzZxMzIgLTIwIDMyIC02MHEwIC0zOSAtNDAgLTY0LjV0LTEwNSAtMjUuNXEtNTEgMCAtOTEuNSAxNnQtNjUgMzguNXQtNDUuNSA0NXQtNDYgMzguNXQtNTQgMTZxLTUwIDAgLTc1LjUgLTMwdC0yNS41IC03NXEwIC05MiAxMjIgLTE1Ny41dDI5MSAtNjUuNSBxNzMgMCAxNDAgMTguNXQxMjIuNSA1My41dDg4LjUgOTMuNXQzMyAxMzEuNXpNMTUzNiAyNTZxMCAtMTU5IC0xMTIuNSAtMjcxLjV0LTI3MS41IC0xMTIuNXEtMTMwIDAgLTIzNCA4MHEtNzcgLTE2IC0xNTAgLTE2cS0xNDMgMCAtMjczLjUgNTUuNXQtMjI1IDE1MHQtMTUwIDIyNXQtNTUuNSAyNzMuNXEwIDczIDE2IDE1MHEtODAgMTA0IC04MCAyMzRxMCAxNTkgMTEyLjUgMjcxLjV0MjcxLjUgMTEyLjVxMTMwIDAgMjM0IC04MCBxNzcgMTYgMTUwIDE2cTE0MyAwIDI3My41IC01NS41dDIyNSAtMTUwdDE1MCAtMjI1dDU1LjUgLTI3My41cTAgLTczIC0xNiAtMTUwcTgwIC0xMDQgODAgLTIzNHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE4MDsiIGhvcml6LWFkdi14PSIxNjY0IiBkPSJNMTQ4MyA1MTJsLTU4NyAtNTg3cS01MiAtNTMgLTEyNy41IC01M3QtMTI4LjUgNTNsLTU4NyA1ODdxLTUzIDUzIC01MyAxMjh0NTMgMTI4bDU4NyA1ODdxNTMgNTMgMTI4IDUzdDEyOCAtNTNsMjY1IC0yNjVsLTM5OCAtMzk5bC0xODggMTg4cS00MiA0MiAtOTkgNDJxLTU5IDAgLTEwMCAtNDFsLTEyMCAtMTIxcS00MiAtNDAgLTQyIC05OXEwIC01OCA0MiAtMTAwbDQwNiAtNDA4cTMwIC0yOCA2NyAtMzdsNiAtNGgyOHE2MCAwIDk5IDQxIGw2MTkgNjE5bDIgLTNxNTMgLTUzIDUzIC0xMjh0LTUzIC0xMjh6TTE0MDYgMTEzOGwxMjAgLTEyMHExNCAtMTUgMTQgLTM2dC0xNCAtMzZsLTczMCAtNzMwcS0xNyAtMTUgLTM3IC0xNXYwcS00IDAgLTYgMXEtMTggMiAtMzAgMTRsLTQwNyA0MDhxLTE0IDE1IC0xNCAzNnQxNCAzNWwxMjEgMTIwcTEzIDE1IDM1IDE1dDM2IC0xNWwyNTIgLTI1Mmw1NzQgNTc1cTE1IDE1IDM2IDE1dDM2IC0xNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE4MTsiIGQ9Ik03MDQgMTkydjEwMjRxMCAxNCAtOSAyM3QtMjMgOWgtNDgwcS0xNCAwIC0yMyAtOXQtOSAtMjN2LTEwMjRxMCAtMTQgOSAtMjN0MjMgLTloNDgwcTE0IDAgMjMgOXQ5IDIzek0xMzc2IDU3NnY2NDBxMCAxNCAtOSAyM3QtMjMgOWgtNDgwcS0xNCAwIC0yMyAtOXQtOSAtMjN2LTY0MHEwIC0xNCA5IC0yM3QyMyAtOWg0ODBxMTQgMCAyMyA5dDkgMjN6TTE1MzYgMTM0NHYtMTQwOHEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE0MDggcS0yNiAwIC00NSAxOXQtMTkgNDV2MTQwOHEwIDI2IDE5IDQ1dDQ1IDE5aDE0MDhxMjYgMCA0NSAtMTl0MTkgLTQ1eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTgyOyIgaG9yaXotYWR2LXg9IjEyODAiIGQ9Ik0xMjgwIDQ4MHEwIC00MCAtMjggLTY4dC02OCAtMjhxLTUxIDAgLTgwIDQzbC0yMjcgMzQxaC00NXYtMTMybDI0NyAtNDExcTkgLTE1IDkgLTMzcTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTkydi0yNzJxMCAtNDYgLTMzIC03OXQtNzkgLTMzaC0xNjBxLTQ2IDAgLTc5IDMzdC0zMyA3OXYyNzJoLTE5MnEtMjYgMCAtNDUgMTl0LTE5IDQ1cTAgMTggOSAzM2wyNDcgNDExdjEzMmgtNDVsLTIyNyAtMzQxcS0yOSAtNDMgLTgwIC00MyBxLTQwIDAgLTY4IDI4dC0yOCA2OHEwIDI5IDE2IDUzbDI1NiAzODRxNzMgMTA3IDE3NiAxMDdoMzg0cTEwMyAwIDE3NiAtMTA3bDI1NiAtMzg0cTE2IC0yNCAxNiAtNTN6TTg2NCAxMjgwcTAgLTkzIC02NS41IC0xNTguNXQtMTU4LjUgLTY1LjV0LTE1OC41IDY1LjV0LTY1LjUgMTU4LjV0NjUuNSAxNTguNXQxNTguNSA2NS41dDE1OC41IC02NS41dDY1LjUgLTE1OC41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTgzOyIgaG9yaXotYWR2LXg9IjEwMjQiIGQ9Ik0xMDI0IDgzMnYtNDE2cTAgLTQwIC0yOCAtNjh0LTY4IC0yOHQtNjggMjh0LTI4IDY4djM1MmgtNjR2LTkxMnEwIC00NiAtMzMgLTc5dC03OSAtMzN0LTc5IDMzdC0zMyA3OXY0NjRoLTY0di00NjRxMCAtNDYgLTMzIC03OXQtNzkgLTMzdC03OSAzM3QtMzMgNzl2OTEyaC02NHYtMzUycTAgLTQwIC0yOCAtNjh0LTY4IC0yOHQtNjggMjh0LTI4IDY4djQxNnEwIDgwIDU2IDEzNnQxMzYgNTZoNjQwcTgwIDAgMTM2IC01NnQ1NiAtMTM2eiBNNzM2IDEyODBxMCAtOTMgLTY1LjUgLTE1OC41dC0xNTguNSAtNjUuNXQtMTU4LjUgNjUuNXQtNjUuNSAxNTguNXQ2NS41IDE1OC41dDE1OC41IDY1LjV0MTU4LjUgLTY1LjV0NjUuNSAtMTU4LjV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxODQ7IiBkPSJNNzczIDIzNGwzNTAgNDczcTE2IDIyIDI0LjUgNTl0LTYgODV0LTYxLjUgNzlxLTQwIDI2IC04MyAyNS41dC03My41IC0xNy41dC01NC41IC00NXEtMzYgLTQwIC05NiAtNDBxLTU5IDAgLTk1IDQwcS0yNCAyOCAtNTQuNSA0NXQtNzMuNSAxNy41dC04NCAtMjUuNXEtNDYgLTMxIC02MC41IC03OXQtNiAtODV0MjQuNSAtNTl6TTE1MzYgNjQwcTAgLTIwOSAtMTAzIC0zODUuNXQtMjc5LjUgLTI3OS41dC0zODUuNSAtMTAzdC0zODUuNSAxMDMgdC0yNzkuNSAyNzkuNXQtMTAzIDM4NS41dDEwMyAzODUuNXQyNzkuNSAyNzkuNXQzODUuNSAxMDN0Mzg1LjUgLTEwM3QyNzkuNSAtMjc5LjV0MTAzIC0zODUuNXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE4NTsiIGhvcml6LWFkdi14PSIxNzkyIiBkPSJNMTQ3MiA2NDBxMCAxMTcgLTQ1LjUgMjIzLjV0LTEyMyAxODR0LTE4NCAxMjN0LTIyMy41IDQ1LjV0LTIyMy41IC00NS41dC0xODQgLTEyM3QtMTIzIC0xODR0LTQ1LjUgLTIyMy41dDQ1LjUgLTIyMy41dDEyMyAtMTg0dDE4NCAtMTIzdDIyMy41IC00NS41dDIyMy41IDQ1LjV0MTg0IDEyM3QxMjMgMTg0dDQ1LjUgMjIzLjV6TTE3NDggMzYzcS00IC0xNSAtMjAgLTIwbC0yOTIgLTk2di0zMDZxMCAtMTYgLTEzIC0yNnEtMTUgLTEwIC0yOSAtNCBsLTI5MiA5NGwtMTgwIC0yNDhxLTEwIC0xMyAtMjYgLTEzdC0yNiAxM2wtMTgwIDI0OGwtMjkyIC05NHEtMTQgLTYgLTI5IDRxLTEzIDEwIC0xMyAyNnYzMDZsLTI5MiA5NnEtMTYgNSAtMjAgMjBxLTUgMTcgNCAyOWwxODAgMjQ4bC0xODAgMjQ4cS05IDEzIC00IDI5cTQgMTUgMjAgMjBsMjkyIDk2djMwNnEwIDE2IDEzIDI2cTE1IDEwIDI5IDRsMjkyIC05NGwxODAgMjQ4cTkgMTIgMjYgMTJ0MjYgLTEybDE4MCAtMjQ4bDI5MiA5NCBxMTQgNiAyOSAtNHExMyAtMTAgMTMgLTI2di0zMDZsMjkyIC05NnExNiAtNSAyMCAtMjBxNSAtMTYgLTQgLTI5bC0xODAgLTI0OGwxODAgLTI0OHE5IC0xMiA0IC0yOXoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE4NjsiIGQ9Ik0xMjYyIDIzM3EtNTQgLTkgLTExMCAtOXEtMTgyIDAgLTMzNyA5MHQtMjQ1IDI0NXQtOTAgMzM3cTAgMTkyIDEwNCAzNTdxLTIwMSAtNjAgLTMyOC41IC0yMjl0LTEyNy41IC0zODRxMCAtMTMwIDUxIC0yNDguNXQxMzYuNSAtMjA0dDIwNCAtMTM2LjV0MjQ4LjUgLTUxcTE0NCAwIDI3My41IDYxLjV0MjIwLjUgMTcxLjV6TTE0NjUgMzE4cS05NCAtMjAzIC0yODMuNSAtMzI0LjV0LTQxMy41IC0xMjEuNXEtMTU2IDAgLTI5OCA2MSB0LTI0NSAxNjR0LTE2NCAyNDV0LTYxIDI5OHEwIDE1MyA1Ny41IDI5Mi41dDE1NiAyNDEuNXQyMzUuNSAxNjQuNXQyOTAgNjguNXE0NCAyIDYxIC0zOXExOCAtNDEgLTE1IC03MnEtODYgLTc4IC0xMzEuNSAtMTgxLjV0LTQ1LjUgLTIxOC41cTAgLTE0OCA3MyAtMjczdDE5OCAtMTk4dDI3MyAtNzNxMTE4IDAgMjI4IDUxcTQxIDE4IDcyIC0xM3ExNCAtMTQgMTcuNSAtMzR0LTQuNSAtMzh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxODc7IiBob3Jpei1hZHYteD0iMTc5MiIgZD0iTTEwODggNzA0cTAgMjYgLTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwIC00NSAtMTl0LTE5IC00NXQxOSAtNDV0NDUgLTE5aDI1NnEyNiAwIDQ1IDE5dDE5IDQ1ek0xNjY0IDg5NnYtOTYwcTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMTQwOHEtMjYgMCAtNDUgMTl0LTE5IDQ1djk2MHEwIDI2IDE5IDQ1dDQ1IDE5aDE0MDhxMjYgMCA0NSAtMTl0MTkgLTQ1ek0xNzI4IDEzNDR2LTI1NnEwIC0yNiAtMTkgLTQ1dC00NSAtMTloLTE1MzYgcS0yNiAwIC00NSAxOXQtMTkgNDV2MjU2cTAgMjYgMTkgNDV0NDUgMTloMTUzNnEyNiAwIDQ1IC0xOXQxOSAtNDV6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxODg7IiBob3Jpei1hZHYteD0iMTY2NCIgZD0iTTE2MzIgNTc2cTAgLTI2IC0xOSAtNDV0LTQ1IC0xOWgtMjI0cTAgLTE3MSAtNjcgLTI5MGwyMDggLTIwOXExOSAtMTkgMTkgLTQ1dC0xOSAtNDVxLTE4IC0xOSAtNDUgLTE5dC00NSAxOWwtMTk4IDE5N3EtNSAtNSAtMTUgLTEzdC00MiAtMjguNXQtNjUgLTM2LjV0LTgyIC0yOXQtOTcgLTEzdjg5NmgtMTI4di04OTZxLTUxIDAgLTEwMS41IDEzLjV0LTg3IDMzdC02NiAzOXQtNDMuNSAzMi41bC0xNSAxNGwtMTgzIC0yMDcgcS0yMCAtMjEgLTQ4IC0yMXEtMjQgMCAtNDMgMTZxLTE5IDE4IC0yMC41IDQ0LjV0MTUuNSA0Ni41bDIwMiAyMjdxLTU4IDExNCAtNTggMjc0aC0yMjRxLTI2IDAgLTQ1IDE5dC0xOSA0NXQxOSA0NXQ0NSAxOWgyMjR2Mjk0bC0xNzMgMTczcS0xOSAxOSAtMTkgNDV0MTkgNDV0NDUgMTl0NDUgLTE5bDE3MyAtMTczaDg0NGwxNzMgMTczcTE5IDE5IDQ1IDE5dDQ1IC0xOXQxOSAtNDV0LTE5IC00NWwtMTczIC0xNzN2LTI5NGgyMjRxMjYgMCA0NSAtMTkgdDE5IC00NXpNMTE1MiAxMTUyaC02NDBxMCAxMzMgOTMuNSAyMjYuNXQyMjYuNSA5My41dDIyNi41IC05My41dDkzLjUgLTIyNi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMTg5OyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik0xOTE3IDEwMTZxMjMgLTY0IC0xNTAgLTI5NHEtMjQgLTMyIC02NSAtODVxLTc4IC0xMDAgLTkwIC0xMzFxLTE3IC00MSAxNCAtODFxMTcgLTIxIDgxIC04MmgxbDEgLTFsMSAtMWwyIC0ycTE0MSAtMTMxIDE5MSAtMjIxcTMgLTUgNi41IC0xMi41dDcgLTI2LjV0LTAuNSAtMzR0LTI1IC0yNy41dC01OSAtMTIuNWwtMjU2IC00cS0yNCAtNSAtNTYgNXQtNTIgMjJsLTIwIDEycS0zMCAyMSAtNzAgNjR0LTY4LjUgNzcuNXQtNjEgNTggdC01Ni41IDE1LjVxLTMgLTEgLTggLTMuNXQtMTcgLTE0LjV0LTIxLjUgLTI5LjV0LTE3IC01MnQtNi41IC03Ny41cTAgLTE1IC0zLjUgLTI3LjV0LTcuNSAtMTguNWwtNCAtNXEtMTggLTE5IC01MyAtMjJoLTExNXEtNzEgLTQgLTE0NiAxNi41dC0xMzEuNSA1M3QtMTAzIDY2dC03MC41IDU3LjVsLTI1IDI0cS0xMCAxMCAtMjcuNSAzMHQtNzEuNSA5MXQtMTA2IDE1MXQtMTIyLjUgMjExdC0xMzAuNSAyNzJxLTYgMTYgLTYgMjd0MyAxNmw0IDYgcTE1IDE5IDU3IDE5bDI3NCAycTEyIC0yIDIzIC02LjV0MTYgLTguNWw1IC0zcTE2IC0xMSAyNCAtMzJxMjAgLTUwIDQ2IC0xMDMuNXQ0MSAtODEuNWwxNiAtMjlxMjkgLTYwIDU2IC0xMDR0NDguNSAtNjguNXQ0MS41IC0zOC41dDM0IC0xNHQyNyA1cTIgMSA1IDV0MTIgMjJ0MTMuNSA0N3Q5LjUgODF0MCAxMjVxLTIgNDAgLTkgNzN0LTE0IDQ2bC02IDEycS0yNSAzNCAtODUgNDNxLTEzIDIgNSAyNHExNyAxOSAzOCAzMHE1MyAyNiAyMzkgMjQgcTgyIC0xIDEzNSAtMTNxMjAgLTUgMzMuNSAtMTMuNXQyMC41IC0yNHQxMC41IC0zMnQzLjUgLTQ1LjV0LTEgLTU1dC0yLjUgLTcwLjV0LTEuNSAtODIuNXEwIC0xMSAtMSAtNDJ0LTAuNSAtNDh0My41IC00MC41dDExLjUgLTM5dDIyLjUgLTI0LjVxOCAtMiAxNyAtNHQyNiAxMXQzOCAzNC41dDUyIDY3dDY4IDEwNy41cTYwIDEwNCAxMDcgMjI1cTQgMTAgMTAgMTcuNXQxMSAxMC41bDQgM2w1IDIuNXQxMyAzdDIwIDAuNWwyODggMiBxMzkgNSA2NCAtMi41dDMxIC0xNi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMThhOyIgaG9yaXotYWR2LXg9IjE3OTIiIGQ9Ik02NzUgMjUycTIxIDM0IDExIDY5dC00NSA1MHEtMzQgMTQgLTczIDF0LTYwIC00NnEtMjIgLTM0IC0xMyAtNjguNXQ0MyAtNTAuNXQ3NC41IC0yLjV0NjIuNSA0Ny41ek03NjkgMzczcTggMTMgMy41IDI2LjV0LTE3LjUgMTguNXEtMTQgNSAtMjguNSAtMC41dC0yMS41IC0xOC41cS0xNyAtMzEgMTMgLTQ1cTE0IC01IDI5IDAuNXQyMiAxOC41ek05NDMgMjY2cS00NSAtMTAyIC0xNTggLTE1MHQtMjI0IC0xMiBxLTEwNyAzNCAtMTQ3LjUgMTI2LjV0Ni41IDE4Ny41cTQ3IDkzIDE1MS41IDEzOXQyMTAuNSAxOXExMTEgLTI5IDE1OC41IC0xMTkuNXQyLjUgLTE5MC41ek0xMjU1IDQyNnEtOSA5NiAtODkgMTcwdC0yMDguNSAxMDl0LTI3NC41IDIxcS0yMjMgLTIzIC0zNjkuNSAtMTQxLjV0LTEzMi41IC0yNjQuNXE5IC05NiA4OSAtMTcwdDIwOC41IC0xMDl0Mjc0LjUgLTIxcTIyMyAyMyAzNjkuNSAxNDEuNXQxMzIuNSAyNjQuNXpNMTU2MyA0MjIgcTAgLTY4IC0zNyAtMTM5LjV0LTEwOSAtMTM3dC0xNjguNSAtMTE3LjV0LTIyNiAtODN0LTI3MC41IC0zMXQtMjc1IDMzLjV0LTI0MC41IDkzdC0xNzEuNSAxNTF0LTY1IDE5OS41cTAgMTE1IDY5LjUgMjQ1dDE5Ny41IDI1OHExNjkgMTY5IDM0MS41IDIzNnQyNDYuNSAtN3E2NSAtNjQgMjAgLTIwOXEtNCAtMTQgLTEgLTIwdDEwIC03dDE0LjUgMC41dDEzLjUgMy41bDYgMnExMzkgNTkgMjQ2IDU5dDE1MyAtNjFxNDUgLTYzIDAgLTE3OCBxLTIgLTEzIC00LjUgLTIwdDQuNSAtMTIuNXQxMiAtNy41dDE3IC02cTU3IC0xOCAxMDMgLTQ3dDgwIC04MS41dDM0IC0xMTYuNXpNMTQ4OSAxMDQ2cTQyIC00NyA1NC41IC0xMDguNXQtNi41IC0xMTcuNXEtOCAtMjMgLTI5LjUgLTM0dC00NC41IC00cS0yMyA4IC0zNCAyOS41dC00IDQ0LjVxMjAgNjMgLTI0IDExMXQtMTA3IDM1cS0yNCAtNSAtNDUgOHQtMjUgMzdxLTUgMjQgOCA0NC41dDM3IDI1LjVxNjAgMTMgMTE5IC01LjV0MTAxIC02NS41eiBNMTY3MCAxMjA5cTg3IC05NiAxMTIuNSAtMjIyLjV0LTEzLjUgLTI0MS41cS05IC0yNyAtMzQgLTQwdC01MiAtNHQtNDAgMzR0LTUgNTJxMjggODIgMTAgMTcydC04MCAxNThxLTYyIDY5IC0xNDggOTUuNXQtMTczIDguNXEtMjggLTYgLTUyIDkuNXQtMzAgNDMuNXQ5LjUgNTEuNXQ0My41IDI5LjVxMTIzIDI2IDI0NCAtMTEuNXQyMDggLTEzNC41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMThiOyIgaG9yaXotYWR2LXg9IjE5MjAiIGQ9Ik04MDUgMTYzcS0xMjIgLTY3IC0yNjEgLTY3cS0xNDEgMCAtMjYxIDY3cTk4IDYxIDE2NyAxNDl0OTQgMTkxcTI1IC0xMDMgOTQgLTE5MXQxNjcgLTE0OXpNNDUzIDExNzZ2LTM0NHEwIC0xNzkgLTg5LjUgLTMyNnQtMjM0LjUgLTIxN3EtMTI5IDE1MiAtMTI5IDM1MXEwIDIwMCAxMjkuNSAzNTJ0MzIzLjUgMTg0ek05NTggOTkxcS0xMjggLTE1MiAtMTI4IC0zNTFxMCAtMjAxIDEyOCAtMzUxcS0xNDUgNzAgLTIzNC41IDIxOHQtODkuNSAzMjggdjM0MXExOTYgLTMzIDMyNCAtMTg1ek0xNjM4IDE2M3EtMTIyIC02NyAtMjYxIC02N3EtMTQxIDAgLTI2MSA2N3E5OCA2MSAxNjcgMTQ5dDk0IDE5MXEyNSAtMTAzIDk0IC0xOTF0MTY3IC0xNDl6TTEyODYgMTE3NnYtMzQ0cTAgLTE3OSAtOTEgLTMyNnQtMjM3IC0yMTd2MHExMzMgMTU0IDEzMyAzNTFxMCAxOTUgLTEzMyAzNTFxMTI5IDE1MSAzMjggMTg1ek0xOTIwIDY0MHEwIC0yMDEgLTEyOSAtMzUxcS0xNDUgNzAgLTIzNC41IDIxOCB0LTg5LjUgMzI4djM0MXExOTQgLTMyIDMyMy41IC0xODR0MTI5LjUgLTM1MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjE4YzsiIGhvcml6LWFkdi14PSIxNzkyIiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGYxOGQ7IiBob3Jpei1hZHYteD0iMTc5MiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hmMThlOyIgaG9yaXotYWR2LXg9IjE3OTIiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZjUwMDsiIGhvcml6LWFkdi14PSIxNzkyIiAvPg0KPC9mb250Pg0KPC9kZWZzPjwvc3ZnPiA="

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "module.exports = \"<div class=\\\"modal-mask\\\"  ms-visible=\\\"@isShow\\\" ms-effect=\\\"{is:'modal'}\\\">\\r\\n    <div class=\\\"modal-box\\\">\\r\\n        <div class=\\\"modal-header\\\">\\r\\n            <h3>{{@title}}</h3>\\r\\n            <i class=\\\"icon-collapse-alt icon-large modal-close\\\" ms-click=\\\"@cbProxy(false)\\\"></i>\\r\\n        </div>\\r\\n        <div class=\\\"modal-body\\\">\\r\\n            <slot name=\\\"content\\\"></slot>\\r\\n        </div>\\r\\n        <div class=\\\"modal-footer\\\">\\r\\n            <button class=\\\"btn\\\" ms-click=\\\"@cbProxy(false)\\\">取 消</button>\\r\\n            <button class=\\\"btn btn-primary\\\" ms-click=\\\"@cbProxy(true)\\\">确 定</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\""

/***/ }
/******/ ]);