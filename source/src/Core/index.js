/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * Miracle
 * Miracle main class
 */

// 导入错误处理类
// import error from '../Error/index.js';

// 导入模块
import modules from '../Modules';

// 导入配置文件
import pg from '../../package.json';

/*
* Miracle全局管理对象
* _开头表示内部开发函数
*/
let Miracle = function () {
  /*
  * current version
  */
  this.VERSION = pg.version;

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
for (let moduleName in modules) {
  Miracle.prototype[moduleName] = modules[moduleName];
};

export default Miracle;
