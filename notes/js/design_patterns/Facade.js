/**
 * Created by wangdunwen on 2018/5/2.
 * Latest edited by wangdunwen on 2019/05/06.
 * 外观模式 (Facade)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口使得对子系统接口的访问更容易。
 * 在JavaScript中有时也会用于对底层结构兼容性做统一封装来简化用户使用。
 */

/*
* 外观模式实现Dom操作的兼容模式
*/
let addEvent = function (dom, type, fn) {
  // 对于支持DOM2 级事件处理程序addEventListener方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  }
  // 对于不支持addEventListener方法但支持attachEvent方法的浏览器
  else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  }
  // 对于不支持addEventListener方法也不支持attachEvent方法，但支持on + '事件名'的浏览器
  else {
    dom['on' + type] = fn;
  }
};

// ********************* test *****************
let myInput = document.getElementById('myinput');

addEvent(myInput, 'click', function () {
  console.log('绑定一个事件');
});


/*
* dom的获取事件对象，获取元素，阻止默认行为都可以用外观模式
*/
// 获取事件对象
let getEvent = function (event) {
  // 标准浏览器返回event，IE下window.event
  return event || window.event;
};

// 获取元素
let getTarget = function (event) {
  let event = getEvent(event);

  // 标准浏览器下event.target，IE下event.srcElement
  return event.target || event.srcElement;
};

// 阻止默认行为
let preventDefault = function (event) {
  let event = getEvent(event);

  // 标准浏览器
  if (event.preventDefault) {
    event.preventDefault();
  }
  // IE浏览器
  else {
    event.returnValue = false;
  }
};

/*
* 通过外观模式建立一个小型的获取元素属性样式的方法库
*/
let A = {
  // 通过id获取元素
  g: function (id) {
    return document.getElementById(id);
  },

  // 设置元素css属性
  css: function (id, key, value) {
    document.getElementById(id).style[key] = value;
  },

  // 设置元素的属性
  attr: function (id, key, value) {
    document.getElementById(id)[key] = value;
  },

  // 设置元素的html值
  html: function (id, html) {
    document.getElementById(id).innerHTML = html;
  },

  // 为元素绑定事件
  on: function (id, type, fn) {
    document.getElementById(id)['on' + type] = fn;
  }
};

// ********************* test *****************
A.css('box', 'background', 'red');    // 设置css样式
A.attr('box', 'className', 'box');    // 设置class
A.html('box', '这是新添加的内容');    // 设置内容
A.on('box', 'click', function () {    // 绑定事件
  A.css('box', 'width', '500px');
});
