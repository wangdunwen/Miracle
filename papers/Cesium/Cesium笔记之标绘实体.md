> 在Ceisum开发中我们常常需要标绘实体，实体主要分为三类：点标（如点、图片、文本、音频、视频等）、线标（如多边形、贝塞尔等复杂曲线）、面标（如面、椭圆、矩形等）。本文主要介绍如何利用Cesium进行面的标绘，其他类似，具体可参考接口文档。    
>     
> 注：示例代码基于Vue框架。

## 1.理清标绘逻辑
要在地球上标一个面标，那么首先需要开启一个监听器，监听地球的点击事件。点击事件获取点的位置后，应该转换成实体需要的坐标类型保存起来，当点的数量为三时达到绘面条件应当初始化面，当点的数量超过三时修改之前标绘的面的位置数组即可。

## 2.初始化变量

```javascript
// 创建监听的handler
this.handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

// 用于保存实体的对象
let gon = undefined;

// 点位置数组
let points = [];
```

## 3.创建鼠标点击事件监听，绘制椭圆

```javascript
// 对鼠标点击事件的监听
this.handler.setInputAction((event) => {

  // 获取屏幕坐标（二维坐标）
  let windowPosition = event.position;
  
  // 将屏幕坐标转为三维笛卡尔坐标
  let ellipsoid = viewer.scene.globe.ellipsoid;
  let cartesian = viewer.camera.pickEllipsoid(windowPosition, ellipsoid);

  // 如果未点击在地球上，那么返回
  if (!cartesian) {
      return;
  }
	
  // 在点击位置添加点实体
  let point = viewer.entities.add({
      name: 'gon_point',
      position: cartesian,
      point: {
          color: Cesium.Color.WHITE,
          pixelSize: 5,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 1
      }
  });

  // 保存该点的id，以便后续删除
  this.pointsId.push(point.id);
 
  // 保存点的位置信息
  points.push(cartesian);

  // 如果存在三个点，那么创建一个面实体
  if (points.length >= 3) {
      if (gon === undefined) {
          gon = viewer.entities.add({
              name: 'polygon',
              polygon: {
                  hierarchy: points,
                  material: Cesium.Color.RED.withAlpha(0.5)
              }
          });
      } else {
      
      		// 如果面已经存在，那么修改面实体的位置数组即可
          gon.polygon.hierarchy = points
      }
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

效果如下：    
![drawPolygon1](https://wangdunwen.github.io/static/images/drawPolygon1.gif)

## 4.结束标绘

```javascript
// 清除添加器
if (this.handler !== null && !this.handler.isDestroyed()) {
  	this.handler.destroy();
}

// 移除临时标记点，清空保存点ID的数组
for (let id of this.pointsId) {
  	viewer.entities.removeById(id);
}

this.pointsId = [];
```

## 5.优化
前面的gif图可以看出标面时候会有点闪屏。当标的面很多时，闪屏越严重。这是因为Cesium内部设置了实体标绘的形式为Constant。    
通过查看API文档找到Cesium.CallbackProperty(callback, isConstant)这个接口，关于isConstant的官方描述是这样的：true when the callback function returns the same value every time, false if the value will change.    
简单理解下就是如果isConstant为true，那么是按照队列顺序更改值，如果为false，那么值将立即改变。通过实践发现，设置为false能够提高实体的渲染速度，基本上无延迟。

```javascript
// 改成下面的形式可以发现面会立即更新位置
gon.polygon.hierarchy = new Cesium.CallbackProperty(() => {
    return points;
}, false);
```

效果如下：    
![drawPolygon1](https://wangdunwen.github.io/static/images/drawPolygon2.gif)

## 6.总结
Cesium实体标绘的逻辑大致是这样的，点标、线标、面标的原理类似。

------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->