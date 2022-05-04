/**
* Author: @wangdunwen
* Version : v0.0.1
* CreateTime: 2022/04/26
* description: promise 函数封装
*/
let _Promise = function () {
}

/*
* deffer
* 分配函数
*/
_Promise.prototype.deffer = function () {
  let deferred = {}

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}

export default new _Promise()
