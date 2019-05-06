/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/4/25.
 * 单例模式 (Singleton)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 只允许实例化一次的对象类。有时我们也用一个对象来规划一个命名空间，井井有条地管理对象上的属性和方法。
 * 单例我们常用来创建命名空间。
 */

/*
* 利用单例模式创建一个小型的代码库
*/
let A = {
	Util: {
		util_method1: function () {},
		util_method2: function () {}
		// ...
	},
	Tool: {
		tool_method1: function () {},
		tool_method2: function () {}
		// ...
	},
	Ajax: {
		get: function () {},
		post: function () {}
		// ...
	},
	others: {
		// ...
	}
	// ...
};

// ********************* test *****************
A.Util.util_method2();
A.Tool.tool_method1();
A.Ajax.get();


/*
* 利用单例模式创建无法修改的静态变量
* 注： es6已经有const关键字可以来创建静态变量, 这里学习一个创建的思维
* 静态变量习惯于大写。
*/
let Conf = (function () {

	// 私有变量
	let conf = {
		MAX_NUM: 100,
		MIN_NUM: 1,
		COUNT: 1000
	};

	// 返回取值器对象
	return {

		// 取值器方法
		get: function () {
			return conf[name] ? conf[name] : null;
		}
	}
})();

// ********************* test *****************
let count = Conf.get("COUNT");
console.log(count);


/*
* 利用单例模式进行惰性创建 （延迟创建单例对象）
*/
let LazySingle = (function () {

	// 单例实例引用
	let _instance = null;

	// 单例
	let Single = function () {

		// 定义私有属性和方法
		return {
			publicMethod: function () {},
			publicProperty: "1.0"
		}
	};

	// 获取单例对象接口
	return function () {

		// 如果为创建单例，将创建单例
		if (!_instance) {
			_instance = Single();
		}

		// 返回单例
		return _instance;
	}
})();

// ********************* test *****************
console.log(LazySingle().publicProperty);	// 1.0