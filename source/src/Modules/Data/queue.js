/**
* Author: @wangdunwen
* Version : v0.0.1
* CreateTime: 2022/05/02
* description: 队列
*/

/*
* 队列
* 特点：FIFO 先进先出
*/
let Queue = function () {
  // 存储
  this._items = []
}

/*
* 元素添加到队列中
*/
Queue.prototype.enqueue = function (element) {
  this._items.push(element)
}

/*
* 队列中删除前端元素
*/
Queue.prototype.dequeue = function () {
  return this._items.shift()
}

/*
* 查看前端元素
*/
Queue.prototype.front = function () {
  return this._items[0]
}

/*
* 判断队列是否为空
*/
Queue.prototype.isEmpty = function () {
  return this._items.length === 0
}

/*
* 查看队列中元素的个数
*/
Queue.prototype.size = function () {
  return this._items.length
}

export default Queue
