/**
 * Created by wangdunwen on 2018/4/19.
 * Latest edited by wangdunwen on 2019/05/06.
 * 工厂方法模式 (Factory Method)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 通过对产品类的抽象使其创建业务主要负责用于创建多类产品的实例。
 */

/**
* 首先介绍一下安全模式类，可以使用new来创建方法
* 如果没有使用new关键字，那么内部使用new来创建
*/
let SafeClass = function () {
  if (!(this instanceof SafeClass)) {
    return new Demo();
  }
};

/*
* 安全的工厂方法
*/
let Factory = function (type, content) {
  if (this instanceof Factory) {
    let s = new this[type](content);

    return s;
  } else {
    return new Factory(type, content);
  }
}

/*
* 工厂原型中设置创建所有类型数据对象的基类
*/
Factory.prototype = {
  Java : function (content) {
    // ......
  },
  JavaScript : function (content) {
    // ......
  },
  UI : function (content) {
    this.content = content;

    // 对于所有dom操作，都应当使用闭包
    // 闭包的作用是改变作用域，避免多次调用同一个方法传值出现错误
    (function (content) {
      let div = document.createElement('div');

      div.innerHTML = content;
      div.style.border = '1px solid red';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  php : function (content) {
    // ......
  }
};

// 数据
let data = [
  {type: 'JavaScript', content: 'JavaScript哪家强'},
  {type: 'Java', content: 'Java哪家强'},
  {type: 'UI', content: 'UI哪家强'},
  {type: 'php', content: 'php哪家强'}
];

// 调用工厂方法
for (let i = 0; i < data.length; i++) {
  Factory(data[i].type, data[i].content);
};
