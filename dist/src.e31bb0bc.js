// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/datebook/dist/datebook.js":[function(require,module,exports) {
var define;
var global = arguments[3];
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.datebook=e():t.datebook=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(t){return void 0===t&&(t=""),("0"+parseInt(t.toString(),10)).slice(-2)},a=function(t,e){void 0===t&&(t=new Date);var n={YYYY:t.getUTCFullYear(),MM:o(t.getUTCMonth()+1),DD:o(t.getUTCDate()),hh:o(t.getUTCHours()),mm:o(t.getUTCMinutes()),ss:o(t.getUTCSeconds())};return Object.keys(n).reduce((function(t,e){return t.replace(e,n[e].toString())}),e)};e.default={addLeadingZero:o,formatDate:a,getTimeCreated:function(){return a(new Date,r.FORMAT.DATE)},incrementDate:function(t,e){var n=864e5*e,r=new Date;return r.setTime(t.getTime()+n),r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.URL=e.FORMAT=e.RECURRENCE=void 0,e.RECURRENCE={FREQUENCY:{DAILY:"DAILY",WEEKLY:"WEEKLY",MONTHLY:"MONTHLY",YEARLY:"YEARLY"}},e.FORMAT={DATE:"YYYYMMDD",TIME:"ThhmmssZ",FULL:"YYYYMMDDThhmmssZ",OUTLOOK_DATE:"YYYY-MM-DD",OUTLOOK_TIME:"Thh:mm:ssZ",OUTLOOK_FULL:"YYYY-MM-DDThh:mm:ssZ"},e.URL={YAHOO:"https://calendar.yahoo.com/",GOOGLE:"https://calendar.google.com/calendar/render",OUTLOOK:"https://outlook.live.com/calendar/0/deeplink/compose"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(t){this.allday=!1,this.description="",this.title="",this.location="",this.start=new Date,this.end=new Date,this.setText(t),this.setTimestamps(t)}return t.prototype.setText=function(t){this.description=t.description||"",this.title=t.title||"",this.location=t.location||""},t.prototype.setTimestamps=function(t){this.allday=!t.end,this.start=t.start,t.end?this.end=t.end:this.end=r.default.incrementDate(this.start,1),this.recurrence=t.recurrence},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t},o=function(t,e,n){void 0===e&&(e=";"),void 0===n&&(n=r);var o=[];for(var a in t)t.hasOwnProperty(a)&&void 0!==t[a]&&o.push(a+"="+n(t[a]));return o.join(e)};e.default={toParamString:o,toQueryString:function(t){return o(t,"&",encodeURIComponent)},toIcsParamString:function(t){return o(t,";")},toProperCase:function(t){return[t[0].toUpperCase(),t.slice(1-t.length).toLowerCase()].join("")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=n(3),a=n(0),i=n(8),u=n(1),c=function(t){return new Blob([t],{type:"application/octet-stream"})},s=function(t){return t?t.replace(/[^\w ]/g,"")+".ics":"event.ics"};e.default={formatText:function(t){return void 0===t&&(t=""),t.replace(/\n/g,"\\n")},getBlob:c,getFileName:s,getUid:function(){return Math.random().toString(36).substr(2)},getProdId:function(){return"undefined"!=typeof window?window.location.host:"datebook"},getRrule:function(t){var e,n,r={FREQ:t.frequency,INTERVAL:null===(e=t.interval)||void 0===e?void 0:e.toString(),COUNT:null===(n=t.count)||void 0===n?void 0:n.toString(),WKST:t.weekstart,BYDAY:t.weekdays,BYMONTHDAY:t.monthdays};return t.end&&(r.UNTIL=a.default.formatDate(t.end,u.FORMAT.FULL)),o.default.toIcsParamString(r)},download:function(t,e){var n=s(t);if(window.hasOwnProperty("safari"))i.default(e,n);else{var o=c(e);r.saveAs(o,n)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ICalendar=e.OutlookCalendar=e.YahooCalendar=e.GoogleCalendar=e.CalendarBase=void 0;var r=n(2);Object.defineProperty(e,"CalendarBase",{enumerable:!0,get:function(){return r.default}});var o=n(6);Object.defineProperty(e,"GoogleCalendar",{enumerable:!0,get:function(){return o.default}});var a=n(9);Object.defineProperty(e,"YahooCalendar",{enumerable:!0,get:function(){return a.default}});var i=n(10);Object.defineProperty(e,"OutlookCalendar",{enumerable:!0,get:function(){return i.default}});var u=n(11);Object.defineProperty(e,"ICalendar",{enumerable:!0,get:function(){return u.default}})},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(3),u=n(4),c=n(0),s=n(1),l=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.render=function(){var t=s.FORMAT.DATE;this.allday||(t+=s.FORMAT.TIME);var e={action:"TEMPLATE",text:this.title,details:this.description,location:this.location,dates:[c.default.formatDate(this.start,t),c.default.formatDate(this.end,t)].join("/")};return this.recurrence&&(e.recur="RRULE:"+u.default.getRrule(this.recurrence)),s.URL.GOOGLE+"?"+i.default.toQueryString(e)},e}(a.default);e.default=l},function(t,e,n){var r,o,a;o=[],void 0===(a="function"==typeof(r=function(){"use strict";function e(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){a(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,a,i){var u=o.URL||o.webkitURL,c=document.createElement("a");a=a||t.name||"download",c.download=a,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):n(c.href)?e(t,a,i):r(c,c.target="_blank")):(c.href=u.createObjectURL(t),setTimeout((function(){u.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,o,a){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,a),o);else if(n(t))e(t,o,a);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){r(i)}))}}:function(t,n,r,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,r);var i="application/octet-stream"===t.type,u=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&u)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},s.readAsDataURL(t)}else{var l=o.URL||o.webkitURL,d=l.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout((function(){l.revokeObjectURL(d)}),4e4)}});o.saveAs=a.saveAs=a,t.exports=a})?r.apply(e,o):r)||(t.exports=a)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){var n=document.createElement("a"),r=encodeURIComponent(t);if(n.setAttribute("href","data:text/calendar;charset=utf-8,"+r),n.setAttribute("download",e),document.createEvent){var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!0),n.dispatchEvent(o)}else n.click()}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(1),u=n(3),c=n(0),s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.getWeekdays=function(t){return void 0===t&&(t=[]),t.map((function(t){return u.default.toProperCase(t.replace(/[^A-Z]/gi,""))})).join("")},e.prototype.getFrequency=function(t){var e=i.RECURRENCE.FREQUENCY;switch(t){case e.YEARLY:return"Yr";case e.MONTHLY:return"Mh";case e.WEEKLY:return"Wk";default:return"Dy"}},e.prototype.getRecurrence=function(t){var e,n=this.getFrequency(t.frequency),r=this.getWeekdays(t.weekdays),o=t.interval,a=void 0===o?1:o,u="";if((null===(e=t.weekdays)||void 0===e?void 0:e.length)&&t.frequency===i.RECURRENCE.FREQUENCY.MONTHLY){var s=t.weekdays[0].match(/^([1-5])/);u=s?s[0]:"1"}return[c.default.addLeadingZero(a),n,u,r].join("")},e.prototype.getRecurrenceLengthDays=function(t){var e=t.frequency,n=t.interval,r=i.RECURRENCE.FREQUENCY;if(n)switch(e){case r.YEARLY:return 365.25*n;case r.MONTHLY:return 30.42*n;case r.WEEKLY:return 7*n;default:return n}return 36525},e.prototype.getDuration=function(t,e){var n=Math.floor((e-t)/1e3),r=Math.floor(n/3600),o=n/3600%1*60;return""+c.default.addLeadingZero(r)+c.default.addLeadingZero(o)},e.prototype.getHoursDuration=function(t,e){var n=Math.floor((e-t)/1e3);return Math.floor(n/3600)},e.prototype.render=function(){var t={v:"60",title:this.title,desc:this.description,in_loc:this.location};if(this.allday?(t.dur="allday",t.st=c.default.formatDate(this.start,i.FORMAT.DATE)):(t.st=c.default.formatDate(this.start,i.FORMAT.FULL),this.getHoursDuration(this.start.getTime(),this.end.getTime())>99?t.et=c.default.formatDate(this.end,i.FORMAT.FULL):t.dur=this.getDuration(this.start.getTime(),this.end.getTime())),this.recurrence)if(t.RPAT=this.getRecurrence(this.recurrence),this.recurrence.end)t.REND=c.default.formatDate(this.recurrence.end,i.FORMAT.DATE);else{var e=this.getRecurrenceLengthDays(this.recurrence),n=c.default.incrementDate(this.end,Math.ceil(e));t.REND=c.default.formatDate(n,i.FORMAT.DATE)}return i.URL.YAHOO+"?"+u.default.toQueryString(t)},e}(a.default);e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(1),u=n(3),c=n(0),s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.render=function(){var t=i.FORMAT.OUTLOOK_DATE;this.allday||(t+=i.FORMAT.OUTLOOK_TIME);var e={rru:"addevent",startdt:c.default.formatDate(this.start,t),enddt:c.default.formatDate(this.end,t),subject:this.title,body:this.description,location:this.location,allday:this.allday.toString()};return i.URL.OUTLOOK+"?path=/calendar/action/compose&"+u.default.toQueryString(e)},e}(a.default);e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=n(1),u=n(4),c=n(0),s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.download=function(){u.default.download(this.title,this.render())},e.prototype.render=function(){var t=u.default.formatText(this.description),e=u.default.formatText(this.location),n=u.default.formatText(this.title),r=["CLASS:PUBLIC","DESCRIPTION:"+t,"DTSTART:"+c.default.formatDate(this.start,i.FORMAT.FULL),"DTEND:"+c.default.formatDate(this.end,i.FORMAT.FULL),"LOCATION:"+e,"SUMMARY:"+n,"TRANSP:TRANSPARENT"];this.recurrence&&r.push("RRULE:"+u.default.getRrule(this.recurrence));var o=u.default.getUid(),a=c.default.getTimeCreated(),s=u.default.getProdId();return["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",r.join("\n"),"END:VEVENT","END:VCALENDAR","UID:"+o,"DTSTAMP:"+a,"PRODID:"+s].join("\n")},e}(a.default);e.default=s}])}));
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _datebook = require("datebook");

var icalendar = new _datebook.ICalendar({
  title: 'Happy Hour',
  location: 'The Bar, New York, NY',
  description: 'Let\'s blow off some steam with a tall cold one!',
  start: new Date('2022-07-08T19:00:00'),
  end: new Date('2022-07-08T23:30:00'),
  recurrence: {
    frequency: 'WEEKLY',
    interval: 2
  }
});
document.getElementById('downloadIcs').addEventListener('click', function () {
  icalendar.download();
});
},{"datebook":"../node_modules/datebook/dist/datebook.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51825" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map