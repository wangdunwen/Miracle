/**
 * Created by wangdunwen on 2018/4/23.
 * Latest edited by wangdunwen on 2019/05/06.
 * miracle
 * js实现继承的几种方式
 */

/*
* 首先创建父类
*/
let Animal = function (name) {
  // 属性
  this.name = name || 'Animal';

  // 实例方法
  this.sleep = function () {
    console.log(this.name + '正在睡觉！');
  };
};

// 原型方法
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃：' + food);
};

// --------------------------------------------------------------------------
// 1、原型链继承
// 将父类的实例作为子类的原型
//
// 优点：简单，易于实现
// 缺点：无法实现多继承；父类的属性是引用类型，
// 		所以父类的修改会影响到实例
let Cat = function () {};

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

// test
let cat = new Cat();

console.log(cat instanceof Animal);		// false
console.log(cat instanceof Cat);		// true
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 2、构造继承
// 使用父类构造器来增强子类实例，
// 复制父类的实例属性给子类。
//
// 优点：解决了1中子类实例共享父类属性的问题；
//		可以实现多继承
// 缺点：实例不是父类的实例，只是子类的实例；
//		只能继承实例属性和方法，不能继承原型属性和方法；
//		无法复用，每个子类都是复制的副本，影响性能
let Cat = function (name) {
  Animal.call(this);
  this.name = name || 'Tom';
};

// test
let cat = new Cat();

console.log(cat instanceof Animal);		// false
console.log(cat instanceof Cat);		// true
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 3、实例继承
// 为父类实例添加新特性，作为子类实例返回。
//
// 优点：不限制调用方式，子类父类具有相同的效果。
// 缺点：实例是父类的实例，不是子类的实例;
//		不支持多继承
let Cat = function (name) {
  let instance = new Animal();

  instance.name = name || 'Tom';
  return instance;
};

// test
let cat = new Cat();

console.log(cat instanceof Animal);		// true
console.log(cat instanceof Cat);		// false
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 4、拷贝继承
//
// 优点：支持多继承。
// 缺点：效率低，内存占用高（需要拷贝父类的属性）;
//		无法获取父类不可枚举的属性。
let Cat = function (name) {
  let animal = new Animal();

  for (let p in animal) {
    Cat.prototype[p] = animal[p];
  }
  Cat.prototype.name = name || 'Tom';
};

// test
let cat = new Cat();

console.log(cat instanceof Animal);		// false
console.log(cat instanceof Cat);		// true
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 5、组合继承
// 通过调用父类构造，继承父类属性并保留传参的优点，
// 然后通过将父类实例作为子类原型，实现函数调用。
//
// 优点：函数可复用；可传参；不存在引用属性共享的问题。
// 缺点：调用了两次父类构造函数，生成两个实例，
// 		多消耗了一点点内存;
let Cat = function (name) {
  Animal.call(this);
  this.name = name || 'Tom';
};

Cat.prototype = new Animal();

// test
let cat = new Cat();

console.log(cat instanceof Animal);		// true
console.log(cat instanceof Cat);		// true
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 6、寄生组合继承
// 通过寄生方式，砍掉父类的实例属性。这样，调用
// 两次父类的构造时不会初始化两次实例方法或属性。
// 避免组合的缺点。
//
// 优点：完美。
// 缺点：实现较为复杂
let Cat = function (name) {
  Animal.call(this);
  this.name = name || 'Tom';
};

(function () {
  // 创建一个没有实例方法的类
  let Super = function () {};
  Super.prototype = Animal.prototype;

  // 需要修复下构造函数
  Cat.prototype.constructor = Cat;

  // 将实例作为子类的原型
  Cat.prototype = new Super();
})();

// test
let cat = new Cat();

console.log(cat instanceof Animal);		// true
console.log(cat instanceof Cat);		// true
// --------------------------------------------------------------------------
