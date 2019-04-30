(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modules = __webpack_require__(2);

var _Modules2 = _interopRequireDefault(_Modules);

var _package = __webpack_require__(4);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Miracle全局管理对象
* _开头表示内部开发函数
*/
/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * Miracle
 * Miracle main class
 */

// 导入错误处理类
// import error from '../Error/index.js';

// 导入模块
var Miracle = function Miracle() {
  /*
  * current version
  */
  this.VERSION = _package2.default.version;

  /*
  * author
  */
  this.AUTHOR = '@wangdunwen';

  /*
  * email
  */
  this.EMAIL = 'wangdunwen0619@gmail.com';
};

// 遍历modules找到module


// 导入配置文件
for (var moduleName in _Modules2.default) {
  Miracle.prototype[moduleName] = _Modules2.default[moduleName];
};

exports.default = Miracle;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * Utils Module
 * Miracle
 */
// 引入模块内各类
// import TypeUtils from './TypeUtils.js';

/*
* utils工具类
*/
var Utils = function Utils() {};

exports.default = new Utils();
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utils = __webpack_require__(1);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'Utils': _Utils2.default
}; /**
    * Created by wangdunwen on 2019/04/30.
    * Latest edited by wangdunwen on 2019/04/30.
    * Modules
    * Miracle
    */
// 引入各个模块

module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 利用闭包引入全局window对象
(function (root) {

  // 利用双层闭包创建Miracle接口，屏蔽外部环境
  root.Miracle = function () {
    return new _index2.default();
  }();
})(window); /**
             * Created by wangdunwen on 2019/04/30.
             * Latest edited by wangdunwen on 2019/04/30.
             * Miracle 入口函数
             */

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"miracle","version":"1.0.0","description":"自用js库","scripts":{"init":"webpack --progress --colors --watch --env dev","create":"webpack --progress --colors --env dev","minifyJs":"uglifyjs lib/Miracle.js -m -o lib/Miracle.min.js","copy":"node copy.js","build":"npm run create && npm run minifyJs && npm run copy"},"devDependencies":{"babel-cli":"6.24.1","babel-core":"6.24.1","babel-eslint":"7.2.3","babel-loader":"7.0.0","babel-plugin-add-module-exports":"0.2.1","babel-preset-es2015":"6.24.1","eslint":"3.19.0","eslint-loader":"1.7.1","webpack":"2.4.1","yargs":"7.1.0"},"engines":{"node":">6.0.0"}}

/***/ })
/******/ ]);
});