> 最近在开发中想要使用一个简单的颜色选择器，上网搜索之后发现大部分都是基于jQuery的，一些基于原生的选择器功能又很冗余。
> 于是自己基于原生js写了一个只为实现简单pick功能的颜色选择器。

### 1.创建面板容器

```javascript
// 创建一个div容器
let edit_color_panel = document.createElement("div");
```
### 2.简单设置容器样式

```javascript
edit_color_panel.style = `
	display: flex;
	border: 1px solid white;
	border-radius: 5px;
	width: 120px;
	height: 120px;
	background: white;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
```

### 3.创建颜色代码数组，遍历添加进容器

```javascript
// 创建颜色代码数组
let colorArray = [
	"#FFFFFF", "#BBFFFF", "#EEAD0E", "#FFE4B5", "#BF6732",
	"#FFFF00", "#D3D3D3", "#EEE685", "#7CFC00", "#FF0000",
	"#BF3EFF", "#B88608", "#B22222", "#9400D3", "#8B8B00",
	"#8B2252", "#7A67EE", "#483D8B", "#218868", "#00688B",
	"#0000FF", "#0000CD", "#00008B", "#000080", "#000000",
];

// 遍历数组，添加pick按钮至容器
for (let color of colorArray) {
	edit_color_panel.innerHTML += `
		<input type="button" name="${color}" style="background: ${color};margin: 1px;width: 20px;height: 20px;border: 1px solid black;"/>
	`;
}
```

### 4.将面板容器添加至body内

```javascript
document.body.appendChild(edit_color_panel);
```

效果如下：

![viewerCesiumNavigationMixin](https://wangdunwen.github.io/static/images/colorPicker.png)

### 5.给每个颜色按钮添加监听
> 考虑到在每个按钮里都添加onclick监听有点过于冗余。于是用对父元素监听click事件，通过判断target获取对子元素的监听。代码如下：

```javascript
edit_color_panel.addEventListener("click", (event) => {
	if (event.target.name) {
		console.log(event.target.name);
	}
});
```

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->
