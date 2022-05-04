/**
 * Created by wangdunwen on 2022/05/02.
 * Latest edited by wangdunwen on 2022/05/02.
 * miracle
 * 开发工具类
 */

// 引入队列
import _promise from './promise.js'

/**
 * @class miracle._internal
 * 内部开发工具类
 */
const Internal = function () {
  // 异步函数
  this._promise = _promise
};

export default new Internal();
