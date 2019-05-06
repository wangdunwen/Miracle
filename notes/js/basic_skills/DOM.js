/**
 * Created by WangDunWen on 2018/4/23.
 * Latest edited by wangdunwen on 2019/05/06.
 * miracle
 * DOM基础知识
 */

// --------------------------------------------------------------------------
// 1、使用闭包进行DOM操作
//
// ****************************** result ************************************
(function (content) {
  let div = document.createElement("div");

  div.innerHTML = content;
})(content);
// --------------------------------------------------------------------------