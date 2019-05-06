/**
 * Created by wangdunwen on 2018/5/21.
 * Latest edited by wangdunwen on 2019/05/06.
 * 装饰器模式 (Decorator)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 在不改变原对象的基础上，通过对其进行包装拓展（添加属性或方法）使原有对象可以满足用户的更复杂需求
 */

/*
* 装饰者
*/
let decorator = function (input, fn) {
  // 获取事件源
  let input = document.getElementById(input);

  // 若事件源已经绑定事件
  if (typeof input.onclick === 'function') {
    // 缓存事件源原有回调函数
    let oldClickFn = input.onclick;

    // 为事件源定义新的事件
    input.onclick = function () {
      //事件源原有回调函数
      oldClickFn();

      // 执行事件源新增回调函数
      fn();
    };
  } else {

    // 事件源未绑定事件，直接为事件源添加新增回调函数
    input.onclick = fn;
  }

  // 其他操作
};

// ********************* test *****************
// 为电话输入框功能装饰
decorator('tel_input', function () {
  document.getElementById('tel_demo_text').style.display = 'none';
});
