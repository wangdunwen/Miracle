/**
 * Created by wangdunwen on 2018/4/23.
 * Latest edited by wangdunwen on 2019/05/06.
 * miracle
 * 原生ajax请求
 */

/*
* 创建XHR对象
*/
let createXHR = function () {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else {
    // 兼容IE5和IE6
    return new ActiveXObject('Microsoft.XMLHttp');
  }
};

let xhr = new createXHR();

xhr.onReadyStateChange = function () {
  if (xhr.readyState === 4) {
    // 状态码为200和300之间或304都表示这一请求已经成功
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    } else {
      // new Error(...);
    }
  }
};

// GET
let url = 'http://test.com/';

xhr.open('GET', url);
xhr.send();

// POST
xhr.open('OPEN', url);
xhr.send(data);