/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * 私有错误类
 */

export default {
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
  OBJECT_DESTROYED_ERROR: function (objectName) {
    return 'Error! ' + objectName + ' has been destroyed!';
  },

  /*
  * 缺少参数错误
  */
  ARG_REQUIRED_ERROR: function (argName) {
    return 'Error! ' + argName + ' is required!';
  }
};
