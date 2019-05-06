/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/4/19.
 * 简单工厂模式 (Simple Factory)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。
 * 主要是用来创建同一类对象。
 */

let LoginAlert = function (text) {
	this.content = text;
};

LoginAlert.prototype.show = function () {
	// 显示警示框
};

let LoginConfirm = function (text) {
	this.content = text;
};

LoginConfirm.prototype.show = function () {
	// 显示确认框
};

let LoginPrompt = function (text) {
	this.content = text;
};

LoginPrompt.prototype.show = function () {
	// 显示提示框
};

// 1、提供一个工厂类来找到其他类
let PopFactory = function (name) {
	switch (name) {
		case "alert":
			return new LoginAlert();
		case "confirm":
			return new LoginConfirm();
		case "prompt":
			return new LoginPrompt();
	}
};

let popFactory = new PopFactory("alert");
popFactory.show();

// 2、创建一个新对象然后包装增强其属性和功能实现
let createPop = function (type, text) {

	// 创建一个对象，并对对象拓展属性和方法
	var o = new Object();
	o.content = text;

	o.show = function () {
		// 显示方法
	};

	if (type === "alert") {
		// 警示框差异部分
	}

	if (type === "confirm") {
		// 确认框差异部分
	}

	if (type === "prompt") {
		// 提示框差异部分
	}

	// 将对象返回
	return o;
};

// 创建警示框
let userNameAlert = createPop("alert", "用户名只能是26个字母和数字");