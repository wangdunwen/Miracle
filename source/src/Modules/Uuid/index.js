/**
 * Created by wangdunwen on 2019/05/06.
 * Latest edited by wangdunwen on 2019/05/06.
 * uuid生成类
 */

/**
 * @class Uuid
 * uuid生成类
 */
const Uuid = function () {
};

/*
* 创建128位uuid
*/
Uuid.prototype.createUuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0;
    let v = c === 'x' ? r : (r & 0x3 | 0x8);

    return v.toString(16);
  });
};

export default new Uuid();
