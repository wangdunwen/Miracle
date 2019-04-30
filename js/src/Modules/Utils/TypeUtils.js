/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * 类型判断类
 */

/**
 * @class TypeUtils
 * 类型判断类
 */
const TypeUtils = function () {
};

/*
* 判断是否为String类型
*/
TypeUtils.prototype.isString = function (val) {
  return typeof val === 'string';
};

/*
* 判断是否为Number类型
*/
TypeUtils.prototype.isNumber = function (val) {
  return typeof val === 'number';
};

/*
* 判断是否为Undefined类型
*/
TypeUtils.prototype.isUndefined = function (val) {
  return typeof val === 'undefined';
};

/*
* 判断是否为Object类型
*/
TypeUtils.prototype.isObject = function (val) {
  return val !== null && typeof val === 'object';
};

/**
* @method checkType 检测字符串类型
* @member miracle.utils
*
* @returns {Boolean} 返回判断的字符串。
*
* 同时支持扩展
*/
TypeUtils.prototype.checkType = (function () {
  // 已有规则
  let rules = {
    email: function (str) {
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    },

    mobile: function (str) {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
    },

    tel: function (str) {
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    },

    number: function (str) {
      return /^[0-9]+$/.test(str);
    },

    english: function (str) {
      return /^[a-zA-Z]+$/.test(str);
    },

    text: function (str) {
      return /^\w+$/.test(str);
    },

    chinese: function (str) {
      return /^[\u4E00-\u9FA5]+$/.test(str);
    },

    lower: function (str) {
      return /^[a-z]+$/.test(str);
    },

    upper: function (str) {
      return /^[A-Z]+$/.test(str);
    },

    ip: function (str) {
      let reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;

      return reg.test(str);
    }
  };

  return {
    // 校验类型
    check: function (str, type) {
      return rules[type] ? rules[type](str) : new Error(error.ARGS_ERROR);
    },

    // 添加规则
    addRule: function (type, fn) {
      rules[type] = fn;
    }
  };
})();

export default TypeUtils;
