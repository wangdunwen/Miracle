/**
* Author: @wangdunwen
* Version : v0.0.1
* CreateTime: 2022/05/04
* description: 数据半持久化存储 MircoDB
*/
import error from '../../Error'
import utils from '../Utils'
import promise from '../Internal/promise.js'

/*
* 数据半持久化存储
* 注: 利用 IndexDB 做数据缓存
*/
let MircoDB = function () {
  // 初始化数据库名
  this._db_name = '_MICRO_DB'

  // 定义数据库
  this._micro_db = undefined

  // 数据库版本
  this.version = 0

  // 获取 indexedDB 管理对象
  this._indexedDB = undefined
}

/*
* 数据库初始化接口
* 返回 Promise 对象
*/
MircoDB.prototype.init = function () {
  let deffer = _promise.deffer()

  // 调用初始化函数
  this._init(deffer)

  return deffer.promise
}

/*
* [内部函数
* 初始化
*/
MircoDB.prototype._init = function (deffer) {
  let request

  // 初始化
  this._indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

  // 打开数据库
  request = this._indexedDB.open(this._db_name)

  // 错误监听
  request.onerror = (event) => {
    // 抛出异常
    deffer.reject(new Error(error.DB_OPEN_ERROR))
  }

  // 正确打开监听
  request.onsuccess = (event) => {
    // 绑定数据库
    this._micro_db = event.target.result
    // 记录版本号
    this.version = this._micro_db.version
    // 返回结果
    deffer.resolve(true)
  }
}

/*
* 创建表
* 注: 如果存在，那么打开表；反之，创建表
* 创建执行事件，如果数据库没打开，就执行。那么直接存储到对应的 TODO 数组内，在打开后执行相应的执行函数。
* 参数 tableName: 表名
* 参数 keys: 搜索索引值（数组），如['name', 'id']
*/
MircoDB.prototype.createTable = function (tableName) {
  let deffer = _promise.deffer()
  let request

  // 如果需要新建数据库，那么放到队列里
  if (!this._micro_db.objectStoreNames.contains(tableName)) {
    // 打开数据库
    this.version++
    this._micro_db.close()
    request = this._indexedDB.open(this._db_name, this.version)

    // 错误监听
   request.onerror = (event) => {
      deffer.reject(new Error(error.DB_OPEN_ERROR))
    }

    request.onupgradeneeded = function (event) {
      this._micro_db = event.target.result
      this._micro_db.createObjectStore(tableName, { keyPath: '_uuid' })
    }

    request.onsuccess = (event) => {
      this._micro_db = event.target.result
      this.version = this._micro_db.version
      deffer.resolve(true)
    }
  } else {
    deffer.resolve(true)
  }

  return deffer.promise
}

/*
* 增加数据
*/
MircoDB.prototype.add = function (tableName, object) {
  let deffer = this._gm._internal._promise.deffer()
  let uuid = utils.createUUID(8)
  let request

  // 添加主键
  object._uuid = uuid

  // 发起请求
  request = this._micro_db.transaction([tableName], 'readwrite')
    .objectStore(tableName)
    .add(object)

  // 成功监听
  request.onsuccess = function (event) {
    // 返回唯一标识
    deffer.resolve(uuid)
  }

  // 错误监听
  request.onerror = function (event) {
    deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
  }

  return deffer.promise
}

/*
* 删除数据
*/
MircoDB.prototype.delete = function (tableName, uuid) {
  let deffer = _promise.deffer()
  let request = this._micro_db.transaction([tableName], 'readwrite')
    .objectStore(tableName)
    .delete(uuid)

  // 成功监听
  request.onsuccess = function (event) {
    deffer.resolve(true)
  }

  // 错误监听
  request.onerror = function (event) {
    deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
  }

  return deffer.promise
}

/*
* 修改数据
* 数据必须包含主键
*/
MircoDB.prototype.update = function (tableName, data) {
  let deffer = _promise.deffer()
  let request = this._micro_db.transaction([tableName], 'readwrite')
    .objectStore(tableName)
    .put(data)

  // 成功监听
  request.onsuccess = function (event) {
    deffer.resolve(true)
  }

  // 错误监听
  request.onerror = function (event) {
    deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
  }

  return deffer.promise
}

/*
* 查询数据
*/
MircoDB.prototype.query = function (tableName, queryObj) {
  let deffer = _promise.deffer()
  let request = this._micro_db.transaction([tableName], 'readonly')
    .objectStore(tableName)
    .openCursor()
  let result = []

  // 错误监听
  request.onerror = function (event) {
    deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
  }

  // 成功监听
  request.onsuccess = function (event) {
    let cursor = event.target.result

    if (cursor) {
      let tag = false

      // 循环找到匹配的数据
      for (let key in queryObj) {
        if (cursor.value[key] === queryObj[key]) {
          continue
        } else {
          tag = true
          break
        }
      }

      // 判断是否键值全部匹配
      if (!tag) {
        result.push(cursor.value)
      }

      cursor.continue()
    } else {
      deffer.resolve(result)
    }
  }

  return deffer.promise
}

/*
* 读取所有数据
*/
MircoDB.prototype.queryAll = function (tableName) {
  let deffer = _promise.deffer()
  let request = this._micro_db.transaction(tableName, 'readonly')
    .objectStore(tableName)
    .openCursor()
  let result = []

  // 成功监听
  request.onsuccess = function (event) {
    let cursor = event.target.result

    if (cursor) {
      result.push(cursor.value)
      cursor.continue()
    } else {
      deffer.resolve(result)
    }
  }

  // 错误监听
  request.onerror = function (event) {
    deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
  }

  return deffer.promise
}

/*
* 清空表数据
*/
MircoDB.prototype.clear = function (tableName) {
  let deffer = _promise.deffer()
  let request = this._micro_db.transaction([tableName], 'readwrite')
    .objectStore(tableName)
    .clear()

  // 错误监听
  request.onerror = function (event) {
    deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
  }

  // 成功监听
  request.onsuccess = function (event) {
    deffer.resolve(true)
  }

  return deffer.promise
}

/*
* 删除表
*/
MircoDB.prototype.removeTable = function (tableName) {
  let deffer = _promise.deffer()
  let request

  // 如果需要新建数据库，那么放到队列里
  if (this._micro_db.objectStoreNames.contains(tableName)) {
    // 打开数据库
    this.version++
    this._micro_db.close()
    request = this._indexedDB.open(this._db_name, this.version)

    // 错误监听
    request.onerror = (event) => {
      deffer.reject(new Error(error.TABLE_HANDLE_ERROR))
    }

    request.onupgradeneeded = function (event) {
      this._micro_db = event.target.result
      // 删除表名
      this._micro_db.deleteObjectStore(tableName)
      deffer.resolve(true)
    }

    request.onsuccess = (event) => {
      this._micro_db = event.target.result
      this.version = this._micro_db.version
    }
  }

  return deffer.promise
}

export default MircoDB
