/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * Utils Module
 * Miracle
 */

/*
* utils工具类
*/
let Utils = function () {
};

/*
* 创建唯一的uuid
* 注：len 为创建的位数
*/
Utils.prototype.createUUID = function (len) {
  const alps = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const s = []

  for (let i = 0; i < len; i++) {
    s[i] = alps.substr(Math.floor(Math.random() * 62), 1)
  }
  return s.join('')
}

export default new Utils();
