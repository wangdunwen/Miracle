/**
 * Created by wangdunwen on 2018/4/17.
 * Latest edited by wangdunwen on 2019/05/06.
 * miracle
 * object类
 */
// 引入错误类
import error from '../../Error/index.js';

/**
 * @class miracle.object
 * 对于js对象的方法封装
 */
const ObjectClass = function () {
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
  for (let property in source) {
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

  if (!obj && typeof obj !== 'object') {
    throw new Error(error.ARGS_ERROR);
  }

  const targetObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    // 只对对象自有属性进行拷贝
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof obj[key] === 'object') {
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
  let F = function () {};
  // 模板对象参数序列
  let args = arguments;
  let i = 0;
  let len = args.length;

  for (; i < len; i++) {
    // 遍历每个模板对象中的属性
    for (let j in args[i]) {
      // 将这个属性复制到缓存类原型中
      F.prototype[j] = args[i][j];
    }
  }

  // 返回缓存类的实例
  return new F();
};

export default new ObjectClass();
