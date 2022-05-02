/**
* Author: @wangdunwen
* Version : v0.0.1
* CreateTime: 2022/05/02
* description: 事件队列
*/
import Queue from './queue.js'

/*
* 事件队列
* 特点：FIFO 先进先出
*/
let EventQueue = function () {
  // 存储
  this._eventQueue = new Queue()
}

/*
* 元素添加到队列中
*/
EventQueue.prototype.enqueue = function (fn) {
  return this._eventQueue.enqueue(fn)
}

/*
* 队列中删除前端元素
*/
EventQueue.prototype.dequeue = function () {
  return this._eventQueue.dequeue()
}

/*
* 执行队首事件
*/
EventQueue.prototype.excute = function () {
  // 取出队首事件，并运行
  this._eventQueue.front()()

  // 移除队首事件
  return this._eventQueue.dequeue()
}

/*
* 判断队列是否为空
*/
EventQueue.prototype.isEmpty = function () {
  return this._items.length === 0
}

/*
* 查看队列中元素的个数
*/
EventQueue.prototype.size = function () {
  return this._items.length
}

export default EventQueue
