/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/5/21.
 * 桥接模式 (Bridge)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦。
 */

/*
* 桥接模式可以将事件实现与业务逻辑之间解耦
*/

// 多维变量类
// 运动单元
let Speed = function (x, y) {
	this.x = x;
	this.y = y;
};

Speed.prototype.run = function () {
	console.log("运动起来");
};

// 着色单元
let Color = function (cl) {
	this.color = cl;
};

Color.prototype.draw = function () {
	console.log("绘制色彩");
};

// 变形单元
let Shape = function (sp) {
	this.shape = sp;
};

Shape.prototype.change = function () {
	console.log("改变形状");
};

// 说话单元
let Speek = function (wd) {
	this.word = wd;
};

Speek.prototype.say = function () {
	console.log("书写字体");
};

// 创建一个球类，并且它可以运动，可以着色
let Ball = function (x, y, c) {

	// 实现运动单元
	this.speed = new Speed(x, y);

	// 实现着色单元
	this.color = new Color(c);
};

Ball.prototype.init = function () {

	// 实现运动
	this.speed.run();

	// 实现着色
	this.color.draw();
};

// 创建一个人物类，他可以运动和说话
let People = function (x, y, f) {
	this.speed = new Speed(x, y);
	this.font = new Speek(f);
};

People.prototype.init = function () {
	this.speed.run();
	this.font.say();
};

// ********************* test *****************
let p = new People(10, 12, 16);
p.init();