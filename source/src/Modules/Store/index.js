/**
 * Created by wangdunwen on 2022/05/04.
 * Latest edited by wangdunwen on 2022/05/04.
 * miracle
 * store类
 */
// 引入错误类
// import error from '../../Error/index.js';

// 引入队列
import MicroDB from './micro_db.js'

/**
 * @class miracle.data
 * 存储
 */
const Store = function () {
  // 绑定队列
  this.microdb = new MicroDB()
};

export default new Store();
