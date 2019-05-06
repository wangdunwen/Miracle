/**
 * Created by wangdunwen on 2018/4/23.
 * Latest edited by wangdunwen on 2019/05/06.
 * miracle
 * JS基础知识
 */

/**
* 1、JS如何实现typeof
*
*/
 /*
 * JS使用低位存储了变量的类型信息
 * 000: 对象
 * 1: 整数
 * 010: 浮点数
 * 100: 字符串
 * 110: 布尔
 * (特殊) undefined: 用-(-2^30)表示
 * (特殊) null: 对应机器码中的NULL指针，一般为全零
 * 所以null会被判定为对象类型
 */


/**
* 2、JS创建一个抽象方法
*
*/
let carAbstract = function () {};

carAbstract.prototype = {
  getPrice: function () {
    return new Error("抽象方法不能调用！");
  },
  getSpeed: function () {
    return new Error("抽象方法不能调用！");
  }
}


/**
* 3、Object.defineProperty
*
*/
 /*
 * infos: Vue.js和avalon.js都是使用它来实现双向绑定的。
 *
 * 有三个参数：
 * 1. 目标对象
 * 2. 需要定义的属性或方法的名字
 * 3. 目标属性所拥有的特性（descriptor）
 *
 * descriptor有六个：value, writable, configurable, enumerable, get, set
 * value: 设置属性的值
 * writable: 默认值为false，如果设为false，属性的值就不能被重写，为只读
 * configurable: 默认值为false，总开关，一旦为false，那么不能再设置它的value,
 * 				writable,configurable
 * enumerable: 默认值为false，是否能在for...in循环中遍历出来或在Object，keys中列举出来
 * get、set：不能同时使用value、writable和get、set
 * --------------------------------------------------------------------------
 */
let a = {};

Object.defineProperty(a, "b", {
  enumerable: true,
  configurable: true,
  get: function () {
    // ...
  },
  set: function (value) {
    // ...
  }
});


/**
* 4、ECMAScript的数据类型
*/

 // 数据类型主要分为两类
 // 1、基本类型：undefined, null, Boolean, String, Number, Symbol
 // 2、引用类型：Object, Array, Date, Function, RegExp等
 //
 // 数据类型不一样采用不同的存储方式
 // 基本类型：基本类型值在内存中占据固定大小，保存在栈内存中
 // 引用类型：引用类型的值为对象，保存在堆内存中，而堆内存存储的是
 //			  对象的变量标识符以及对象在堆内存中的存储地址
 // 
 // 不同类型的复制方式
 // 基本类型：从一个变量向另外一个新变量复制基本类型的值，会创建这
 //			  个值的一个副本，并将该副本复制给新变量
 // 引用类型：从一个变量向另一个新变量复制引用类型的值，其实复制的
 // 		  是指针，最终两个变量都指向同一个对象


/**
* 5、数组或对象进行深拷贝和浅拷贝
*
*/

// 浅拷贝：仅仅是复制了引用，彼此之间的操作会互相影响
// 深拷贝：在堆中重新分配内存，不同的地址，相同的值，互不影响
//
// 数组使用Array.prototype.slice()和Array.prototype.concat()进行拷贝
// 注：这个只能算浅拷贝，如果数组里面不全是基本型，则只能拷贝引用

// slice基本
let a = [1, 2, 3, 4];
let b = a.slice();
console.log(a === b);    // false

a[0] = 5;
console.log(a);	// [5, 2, 3, 4]
console.log(b);	// [1, 2, 3, 4]

// concat基本
let a1 = [1, 2, 3, 4];
let b1 = a1.concat();
console.log(a1 === b1);	// false

a1[0] = 5;
console.log(a1);	// [5, 2, 3, 4]
console.log(b1);	// [1, 2, 3, 4]

// slice引用
let a2 = [[1, 2], 3, 4];
let b2 = a2.slice();
console.log(a2 === b2);	// false

a2[0][0] = 0;
console.log(a2);	// [[0, 2], 3, 4]
console.log(b2);	// [[0, 2], 3, 4]

// concat引用
let a3 = [[1, 2], 3, 4];
let b3 = a3.concat();
console.log(a3 === b3);	// false

a3[0][0] = 0;
console.log(a3);	// [[0, 2], 3, 4]
console.log(b3);	// [[0, 2], 3, 4]

// 使用JSON.parse()和JSON。stringify()可以实现深拷贝
// 注：缺点会过滤
let obj = {
  name: "test",
  age: 29,
  friend: {
    name: "lee",
    age: 19
  }
};
 
let copyObj = JSON.parse(JSON.stringify(obj));
