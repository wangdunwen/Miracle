/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * Miracle 入口函数
 */
import Miracle from './Core/index.js';

// 利用闭包引入全局window对象
(function (root) {

  // 利用双层闭包创建Miracle接口，屏蔽外部环境
  root.Miracle = (function () {
    return new Miracle();
  })();
})(window);
