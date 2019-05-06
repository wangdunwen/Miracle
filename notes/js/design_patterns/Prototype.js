/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/4/25.
 * 原型模式 (Prototype)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法。
 * 原型是我们常用的设计模式。
 */

/*
* 原型的父类
* 创建一个图片轮播类
*/
let LoopImages = function (imagArr, container) {
	this.imagesArray = imgArr;			// 轮播图片数组
	this.container = container;			// 轮播图片容器
};

/*
* 父类的原型方法
*/
LoopImages.prototype = {

	// 创建轮播图片
	createImage: function () {
		console.log("LoopImages createImage function");
	},

	// 切换下一张图片
	changeImage: function () {
		console.log("LoopImages changeImage function");
	}
};

/*
* 上下滑动切换类
*/
let SlideLoopImg = function (imgArr, container) {

	// 构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);
};

// 继承父类
SlideLoopImg.prototype = new LoopImages();

// 重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function () {
	console.log("SlideLoopImg changeImage function");
};

/*
* 渐隐切换类
*/
let FadeLoopImg = function (imgArr, container, arrow) {

	// 构造函数继承图片轮播类
	LoopImages.call(this, imgArr, container);

	// 切换箭头私有变量
	this.arrow = arrow;
};

// 继承父类
FadeLoopImg.prototype = new LoopImages();

// 重写继承的切换下一张图片方法
FadeLoopImg.prototype.changeImage = function () {
	console.log("FadeLoopImg changeImage function");
};


// ********************* test *****************
// 实例化一个渐隐切换图片类
let fadeImage = new FadeLoopImg([
		"01.jpg",
		"02.jpg",
		"03.jpg",
		"04.jpg"
	], "slide", [
		"left.jpg",
		"right.jpg"
	]);
console.log(fadeImage.container);	// slide
fadeImage.changeImage();			// FadeLoopImg changeImage function