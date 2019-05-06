> 一份简洁自用的JavaScript编码规范。

## 1.命名规范
#### 变量名、属性名、对象名、方法名等统一采用小驼峰式命名规范：

```javascript
let thisIsValue = "hello";

let myObject = {
	firstKey: "",
	secondKey: ""
};
```
#### 类名、文件名使用大驼峰命名规范：

```javascript
MyTest.js

class MyClass {
	
}

function MyFunction () {

}
```
#### 常量名使用大写字母加下划线命名规范：
```javascript
const MAX_VALUE = 12;
var URL = "http://www.wdsd.com/test";
```

## 2.缩进
#### 每个需要缩进的代码行应该由四个空格组成，尽量不要使用tab缩进：
```javascript
function getInfos() {
    console.log("hello, world!");
}
```

## 3.代码长度
#### 每行代码最多为80个字符，超过部分应当在一个运算符后换行，同时换行后的缩进应保持八个空格：
```javascript
function getInfos(argument1, argument2, argument3, argument4, 
        argument5) {
    console.log("hello, world!");
}
```
## 4.注释
#### 在文件的开始、类和方法的前面应当使用多行注释：
```javascript

/*
 * 该方法表示XXXX
 * @author: XXX
 */
function getInfos() {
    console.log("hello, world!");
}
```
#### 在一段功能代码前以及必要的地方添加单行注释，//之后应该保持一个空格：
```javascript

// 以下为某段功能代码
test();
```
##### 注：写代码时添加注释是一个良好的编程习惯。但是应当避免过少和过多的添加注释，当一段代码清晰可见时不应当添加注释。注释应当标注在功能复杂的代码块、可能会引起错误的代码块、待优化的代码块等处。
## 5.空行
#### 在一段功能代码前、在单行或者多行注释前、在变量定义后应当保持一个空行：
```javascript
var thisIsVar = 123;

// 以下为某段功能代码
test();
```
## 6.字符串规范
#### 单个字符使用''，其他情况应当都使用""：
```javascript
var char1 = '1';

var str1 = "hello";
```  
## 7.判断符
#### JavaScript具有强制类型转换的操作，所以判断相等有时会引起类型的强制转换。因此，不推荐使用 == 和 != ，应当使用 === 和 !== ，它们不会引起类型的强制转换：
```javascript
if (a === b) {
    console.log("a 等于 b.");
}

if (a !== b) {
    console.log("a 不等于 b.");
}
```  

------------------------------------------------
持续更新...    

------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->