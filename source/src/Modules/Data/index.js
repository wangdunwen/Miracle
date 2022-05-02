/**
 * Created by wangdunwen on 2022/05/02.
 * Latest edited by wangdunwen on 2022/05/02.
 * miracle
 * data类
 */
// 引入错误类
// import error from '../../Error/index.js';

// 引入队列
import Queue from './queue.js'
import EventQueue from './event_queue.js'

/**
 * @class miracle.data
 * 数据结构
 */
const Data = function () {
  // 绑定队列
  this.Queue = Queue

  // 绑定事件队列
  this.EventQueue = EventQueue
};

export default new Data();
