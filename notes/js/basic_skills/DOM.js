/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/4/23.
 * miracle 1.0
 * DOM基础知识
 */

// --------------------------------------------------------------------------
// 1、使用闭包进行DOM操作
//
// ****************************** result ************************************
(function (content) {
	var div = document.createElement("div");
	div.innerHTML = content;
})(content);
// --------------------------------------------------------------------------