> 前端开发中经常会遇到对象的拷贝赋值，因为JS对象的特殊原因，直接赋值其实传递的是地址而不是传值。很多时候我们并不希望传地址，下面介绍关于数组和对象的赋值小技巧：

## 1.数组的赋值

> 数组在JS中是一个特殊的对象，对数组的赋值操作实际上等同于对对象的赋值。

```javascript
// 循环赋值是最简单的一种赋值：
let a_arrs = [1, 2, 3, 4, 5];
let a_arrs_copy = [];

for (let a of a_arrs) {
	a_arrs_copy.push(a);
}

// 当数组数据量很大，且数组内存在对象时，上面的循环方法就会很繁琐。
// 转换思路，我们可以利用数组提供的concat接口，将当前数组赋值一个新地址的数组。
let b_arrs = [].concat(a_arrs);
```

## 2.对象的赋值

```javascript
// 同样的，简单对象的拷贝也可以采用遍历key来赋值：
let a_object = {
	name: 'a',
	type: 'word'
};

let a_object_copy = {};

a_object_copy.name = a_object.name;
a_object_copy.name = a_object.type;

// 当对象内属性很多且嵌套逻辑比较复杂时，我们可以将对象转为JSON字符串，再将JSON转回对象。这一过程可以成功的避免赋值传地址的问题。
let json = JSON.stringify(a_object);

let b_object = JSON.parse(json);
```

## 3.总结

当然JS对象的拷贝方式有很多种，以上只是我个人常用的一些方法。     


------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->