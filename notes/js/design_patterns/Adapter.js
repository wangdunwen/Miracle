/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/5/21.
 * 适配器模式 (Adapter)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 将一个类（对象）的接口（方法或者属性）转化为另外一个接口，以满足用户需求，
 * 使类（对象）之间接口的不兼容问题通过适配器得以解决。
 */

 /*
 * 适配器模式常用举例：参数适配
 * 介于现在js常用传递对象的方式传递多个参数，于是可采用适配默认值的方式避免参数传递错误
 */
 let doSomething = (obj) {

 	let _adapter = {
 		name: "名字",
 		title: "设计模式",
 		age: 24,
 		color: "pink",
 		size: 100,
 		prize: 50
 	};

 	for (let i in _adapter) {
 		_adapter[i] = obj[i] || _adapter[i];
 	}

 	// ...
 }