> 上文讲的是如何通过Cesium来完成一个实体的标绘，本文介绍如何对实体进行编辑。    
>     
> 注：示例代码基于Vue框架。

## 1.思路
如果要对一个已经标绘完成的实体进行编辑，那么首先我需要获取到该实体的对象，同时应当生成编辑点进行拖拽编辑。Cesium提供了充分的监听器供我们使用，灵活的使用监听器和接口可以轻松的完成实体的编辑。下面是具体实现：

## 2.初始化变量

```javascript
// 创建监听的handler
this.handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

// 用于保存实体的对象
let gon = undefined;

// 判断是否处于编辑状态
let isEditting = false;

// 设置当前的编辑点
let currentPoint = undefined;

// 清空编辑点ID数组
this.pointsId = [];
```
## 3.创建鼠标按下的监听事件

```javascript
// 对鼠标按下事件的监听
this.handler.setInputAction((event) => {

  // 获取屏幕坐标
  let windowPosition = event.position;
  
  // 通过屏幕坐标获取当前位置的实体信息
  let pickedObject = viewer.scene.pick(windowPosition);

  // 如果实体信息存在则说明该位置存在实体
  if (Cesium.defined(pickedObject)) {
  	   
	  // 获取当前点的实体
      let entity = pickedObject.id;
		
	  // 如果实体为面同时没有处于编辑状态，那么保存面的实体 
      if (entity.name === "polygon" && !isEditting) {
          gon = entity;

          // 生成编辑点
          for (let cartesian of gon.polygon.hierarchy._value) {
              let point = viewer.entities.add({
                  name: "gon_point",
                  position: cartesian,
                  point: {
                      color: Cesium.Color.WHITE,
                      pixelSize: 8,
                      outlineColor: Cesium.Color.BLACK,
                      outlineWidth: 1
                  }
              });
				 
			  // 保存点的ID以便删除
              this.pointsId.push(point.id);
          }
			
		  // 设置编辑状态为true 
          isEditting = true;
			
		  // 禁止地球旋转和缩放，地球的旋转会对鼠标移动监听有影响，所以需要禁止
          viewer.scene.screenSpaceCameraController.enableRotate = false;
          viewer.scene.screenSpaceCameraController.enableZoom = false;
          
      } else if (entity.name === "gon_point") {
      
      	  // 如果实体为编辑点，那么设置当前编辑点为该点
          currentPoint = entity;
      }
  }
}, Cesium.ScreenSpaceEventType.LEFT_DOWN);
```

## 4.创建鼠标移动的监听事件

```javascript
// 对鼠标移动事件的监听
this.handler.setInputAction((event) => {

  // 如果处于编辑状态且编辑点已定义，那么开始拖拽编辑
  if (isEditting && currentPoint) {
  
      // 获取屏幕坐标，移动监听与点击有所不同，所以有起始位置和终点位置
      let windowPosition = event.startPosition;
      
      // 将屏幕坐标转为笛卡尔坐标
      let ellipsoid = viewer.scene.globe.ellipsoid;
      let cartesian = viewer.camera.pickEllipsoid(windowPosition, ellipsoid);
	   
	  // 如果点击到地球外，那么返回 
      if (!cartesian) {
          return;
      }
		
	  // 更新编辑点的位置
      currentPoint.position = cartesian;

	  // 创建面标每个点位置信息的数组，并循环赋值
      let points = [];

      for (let id of this.pointsId) {
          points.push(viewer.entities.getById(id).position._value);
      }
	  
	  // 更新面标的位置数组
      gon.polygon.hierarchy = new Cesium.CallbackProperty(() => {
          return points;
      }, false);
  }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
```

## 5.创建鼠标抬起的监听事件

```javascript
// 对鼠标抬起事件的监听
this.handler.setInputAction((event) => {
		
	  // 移除当前编辑点
	  currentPoint = undefined;
}, Cesium.ScreenSpaceEventType.LEFT_UP)
```

## 6.结束编辑

```javascript
// 恢复地球的旋转和缩放
viewer.scene.screenSpaceCameraController.enableRotate = true;
viewer.scene.screenSpaceCameraController.enableZoom = true;

// 移除监听器
if (this.handler !== null && !this.handler.isDestroyed()) {
  this.handler.destroy();
}

// 移除编辑点，清空编辑点数组
for (let id of this.pointsId) {
  viewer.entities.removeById(id);
}

this.pointsId = [];
```

最终效果如下:    

![editPolygon](https://wangdunwen.github.io/static/images/editPolygon.gif)


------------------------------------------------
    
<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->