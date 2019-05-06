/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/5/21.
 * 代理模式 (Proxy)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用
 */

/*
* 利用img的src进行get请求，达到代理效果
*/
let Count = (function() {
	let _img = new Image();

	return function(param) {
		let str = "http://www.count.com/a.gif?";

		for (let i in param) {
			str += i + "=" + param[i];
		}

		_img.src = str;
	};
})();

// ********************* test *****************
Count({num : 10});