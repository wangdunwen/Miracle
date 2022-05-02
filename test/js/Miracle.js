/*! miracle v1.0.0 published at Mon May 02 2022 17:41:28 GMT+0800 (中国标准时间)*/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * 私有错误类
 */

exports.default = {
  /*
  * 参数错误
  */
  ARGS_ERROR: 'arguments error! please check arguments type!',

  /*
  * 未知错误
  */
  UNKNOWN_ERROR: 'unknown error!',

  /*
  * 系统属性无法被销毁错误
  */
  SYSTEM_ERROR: 'System properties that can not be destroyed!',

  /*
  * 重复添加属性错误
  */
  DUPLICATED_ERROR: 'Error! Don\'t repeat the addition! This property has exist!',

  /*
  * 该类已经被废弃
  */
  ABANDONED_CLASS_ERROR: 'Error! This class or method had been abandoned!',

  /*
  * DOM元素不存在报错
  */
  DOM_NOT_EXIST_ERROR: 'Error! The container isn\'t exist!',

  /*
  * 对象已被销毁错误
  */
  OBJECT_DESTROYED_ERROR: function OBJECT_DESTROYED_ERROR(objectName) {
    return 'Error! ' + objectName + ' has been destroyed!';
  },

  /*
  * 缺少参数错误
  */
  ARG_REQUIRED_ERROR: function ARG_REQUIRED_ERROR(argName) {
    return 'Error! ' + argName + ' is required!';
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Author: @wangdunwen
* Version : v0.0.1
* CreateTime: 2022/05/02
* description: 队列
*/

/*
* 队列
* 特点：FIFO 先进先出
*/
var Queue = function Queue() {
  // 存储
  this._items = [];
};

/*
* 元素添加到队列中
*/
Queue.prototype.enqueue = function (element) {
  this._items.push(element);
};

/*
* 队列中删除前端元素
*/
Queue.prototype.dequeue = function () {
  return this._items.shift();
};

/*
* 查看前端元素
*/
Queue.prototype.front = function () {
  return this._items[0];
};

/*
* 判断队列是否为空
*/
Queue.prototype.isEmpty = function () {
  return this._items.length === 0;
};

/*
* 查看队列中元素的个数
*/
Queue.prototype.size = function () {
  return this._items.length;
};

exports.default = Queue;
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modules = __webpack_require__(9);

var _Modules2 = _interopRequireDefault(_Modules);

var _package = __webpack_require__(11);

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

/*
* 遍历modules找到module
*/


// 导入配置文件
for (var moduleName in _Modules2.default) {
  Miracle.prototype[moduleName] = _Modules2.default[moduleName];
};

exports.default = Miracle;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queue = __webpack_require__(1);

var _queue2 = _interopRequireDefault(_queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* 事件队列
* 特点：FIFO 先进先出
*/
var EventQueue = function EventQueue() {
  // 存储
  this._eventQueue = new _queue2.default();
};

/*
* 元素添加到队列中
*/
/**
* Author: @wangdunwen
* Version : v0.0.1
* CreateTime: 2022/05/02
* description: 事件队列
*/
EventQueue.prototype.enqueue = function (fn) {
  return this._eventQueue.enqueue(fn);
};

/*
* 队列中删除前端元素
*/
EventQueue.prototype.dequeue = function () {
  return this._eventQueue.dequeue();
};

/*
* 执行队首事件
*/
EventQueue.prototype.excute = function () {
  // 取出队首事件，并运行
  this._eventQueue.front()();

  // 移除队首事件
  return this._eventQueue.dequeue();
};

/*
* 判断队列是否为空
*/
EventQueue.prototype.isEmpty = function () {
  return this._items.length === 0;
};

/*
* 查看队列中元素的个数
*/
EventQueue.prototype.size = function () {
  return this._items.length;
};

exports.default = EventQueue;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queue = __webpack_require__(1);

var _queue2 = _interopRequireDefault(_queue);

var _event_queue = __webpack_require__(3);

var _event_queue2 = _interopRequireDefault(_event_queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class miracle.data
 * 数据结构
 */
/**
 * Created by wangdunwen on 2022/05/02.
 * Latest edited by wangdunwen on 2022/05/02.
 * miracle
 * data类
 */
// 引入错误类
// import error from '../../Error/index.js';

// 引入队列
var Data = function Data() {
  // 绑定队列
  this.Queue = _queue2.default;

  // 绑定事件队列
  this.EventQueue = _event_queue2.default;
};

exports.default = new Data();
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by wangdunwen on 2018/4/17.
                                                                                                                                                                                                                                                                               * Latest edited by wangdunwen on 2019/05/06.
                                                                                                                                                                                                                                                                               * miracle
                                                                                                                                                                                                                                                                               * object类
                                                                                                                                                                                                                                                                               */
// 引入错误类


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class miracle.object
 * 对于js对象的方法封装
 */
var ObjectClass = function ObjectClass() {
  /*
  * 对象浅拷贝缓存
  */
  this._shallowCopy = undefined;
};

/**
* @method shallowCopy 对对象进行浅拷贝。
* @member miracle.object
*
* @param {Object} target 拷贝的目标对象。
* @param {Object} source 被拷贝的对象。
* @returns {Object} 返回目标对象。
*
*/
ObjectClass.prototype.shallowCopy = function (target, source) {
  // 遍历源对象中的属性
  for (var property in source) {
    // 将源对象中的属性复制到目标对象中
    target[property] = source[property];
  }

  // 返回目标对象
  return target;
};

/**
* @method deepCopy 对对象进行深拷贝。
* @member miracle.object
*
* @param {Object} obj 拷贝的目标对象。
* @returns {Object} 返回拷贝后的对象。
*
*/
ObjectClass.prototype.deepCopy = function (obj) {

  if (!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    throw new Error(_index2.default.ARGS_ERROR);
  }

  var targetObj = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    // 只对对象自有属性进行拷贝
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && _typeof(obj[key]) === 'object') {
        targetObj[key] = this.deepCopy(obj[key]);
      } else {
        targetObj[key] = obj[key];
      }
    }
  }

  return targetObj;
};

/**
* @method prototypeExtend 对对象进行原型继承。
* @member miracle.object
*
* @param {Object} target 继承的目标对象。
* @returns {Object} 返回继承后的对象。
*
*/
ObjectClass.prototype.prototypeExtend = function (source) {
  // 为实例化返回对象临时创建的缓存类
  var F = function F() {};
  // 模板对象参数序列
  var args = arguments;
  var i = 0;
  var len = args.length;

  for (; i < len; i++) {
    // 遍历每个模板对象中的属性
    for (var j in args[i]) {
      // 将这个属性复制到缓存类原型中
      F.prototype[j] = args[i][j];
    }
  }

  // 返回缓存类的实例
  return new F();
};

exports.default = new ObjectClass();
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by wangdunwen on 2019/04/30.
                                                                                                                                                                                                                                                                               * Latest edited by wangdunwen on 2019/04/30.
                                                                                                                                                                                                                                                                               * 类型判断类
                                                                                                                                                                                                                                                                               */
// 引入错误类


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class Type
 * 类型判断类
 */
var Type = function Type() {};

/*
* 判断是否为String类型
*/
Type.prototype.isString = function (val) {
  return typeof val === 'string';
};

/*
* 判断是否为Number类型
*/
Type.prototype.isNumber = function (val) {
  return typeof val === 'number';
};

/*
* 判断是否为Undefined类型
*/
Type.prototype.isUndefined = function (val) {
  return typeof val === 'undefined';
};

/*
* 判断是否为Object类型
*/
Type.prototype.isObject = function (val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
};

/**
* @method checkType 检测字符串类型
* @member Miracle.Type
*
* @returns {Boolean} 返回判断的字符串。
*
* 同时支持扩展
*/
Type.prototype.checkType = function () {
  // 已有规则
  var rules = {
    email: function email(str) {
      return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
      );
    },

    mobile: function mobile(str) {
      return (/^1[3|4|5|7|8][0-9]{9}$/.test(str)
      );
    },

    tel: function tel(str) {
      return (/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
      );
    },

    number: function number(str) {
      return (/^[0-9]+$/.test(str)
      );
    },

    english: function english(str) {
      return (/^[a-zA-Z]+$/.test(str)
      );
    },

    text: function text(str) {
      return (/^\w+$/.test(str)
      );
    },

    chinese: function chinese(str) {
      return (/^[\u4E00-\u9FA5]+$/.test(str)
      );
    },

    lower: function lower(str) {
      return (/^[a-z]+$/.test(str)
      );
    },

    upper: function upper(str) {
      return (/^[A-Z]+$/.test(str)
      );
    },

    ip: function ip(str) {
      var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;

      return reg.test(str);
    }
  };

  return {
    // 校验类型
    check: function check(str, type) {
      return rules[type] ? rules[type](str) : new Error(_index2.default.ARGS_ERROR);
    },

    // 添加规则
    addRule: function addRule(type, fn) {
      rules[type] = fn;
    }
  };
}();

exports.default = new Type();
module.exports = exports['default'];

/***/ }),
/* 7 */
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

/*
* utils工具类
*/
var Utils = function Utils() {};

exports.default = new Utils();
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by wangdunwen on 2019/05/06.
 * Latest edited by wangdunwen on 2019/05/06.
 * uuid生成类
 */

/**
 * @class Uuid
 * uuid生成类
 */
var Uuid = function Uuid() {};

/*
* 创建128位uuid
*/
Uuid.prototype.createUuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;

    return v.toString(16);
  });
};

exports.default = new Uuid();
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utils = __webpack_require__(7);

var _Utils2 = _interopRequireDefault(_Utils);

var _Object = __webpack_require__(5);

var _Object2 = _interopRequireDefault(_Object);

var _Type = __webpack_require__(6);

var _Type2 = _interopRequireDefault(_Type);

var _Uuid = __webpack_require__(8);

var _Uuid2 = _interopRequireDefault(_Uuid);

var _Data = __webpack_require__(4);

var _Data2 = _interopRequireDefault(_Data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'Utils': _Utils2.default,
  'Object': _Object2.default,
  'Type': _Type2.default,
  'Uuid': _Uuid2.default,
  'Data': _Data2.default
}; /**
    * Created by wangdunwen on 2019/04/30.
    * Latest edited by wangdunwen on 2022/05/02.
    * Modules
    * Miracle
    */
// 引入各个模块

module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(2);

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
/* 11 */
/***/ (function(module, exports) {

module.exports = {"name":"miracle","version":"1.0.0","description":"自用js库","scripts":{"init":"webpack --progress --colors --watch --env dev","create":"webpack --progress --colors --env dev","minifyJs":"uglifyjs lib/Miracle.js -m -o lib/Miracle.min.js","copy":"node copy.js","build":"npm run create && npm run minifyJs && npm run copy"},"devDependencies":{"babel-cli":"6.24.1","babel-core":"6.24.1","babel-eslint":"7.2.3","babel-loader":"7.0.0","babel-plugin-add-module-exports":"0.2.1","babel-preset-es2015":"6.24.1","eslint":"3.19.0","eslint-loader":"1.7.1","webpack":"2.4.1","yargs":"7.1.0"},"engines":{"node":">6.0.0"}}

/***/ })
/******/ ]);
});