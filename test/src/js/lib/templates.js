// **Github:** https://github.com/teambition/gulp-ejs-template
//
// **License:** MIT
/* global module, define, setImmediate, window */

;(function(root, factory) {
  'use strict';

  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else root.templates = factory();
}(typeof window === 'object' ? window : this, function() {
  'use strict';
  var templates = {};

  templates['index']  = templates['index.html'] = function(it) {
    var locals = it, __output = "";
    ;__output += "<h1>";;__output += escape(title);__output += "</h1>\r\n<ul>\r\n    ";; for(var i=0; i<supplies.length; i++) {;__output += "\r\n    <li>";;__output += escape(supplies[i]);__output += "</li>\r\n    ";; } ;__output += "\r\n</ul>";
    return __output.trim();
  };

  var ejs = {
    locals: {},
    get: getTpl,
    render: render
  };
  return ejs;

  function render(tplName, data) {
    var it  = copy({}, ejs.locals);
    return getTpl(tplName)(copy(it, data));
  }

  function getTpl(tplName) {
    return templates[tplName];
  }

  function escape(markup) {
    if (!markup) return '';
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');
  }

  function copy(to, from) {
    from = from || {};
    for (var key in from) to[key] = from[key];
    return to;
  }
}));
