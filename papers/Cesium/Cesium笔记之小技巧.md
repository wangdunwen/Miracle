> Cesium官方文档目前只支持全英文，加上大部分资料都是英文的，对于新手有些不太友好。鉴于在学习与工作中的经验，这边分享一些Cesium开发的小知识点和小技巧。

## 1.去除Cesium图标和版本信息
> 如果利用Cesium进行商业开发，那么Cesium的图标最好是要去掉的。

```javascript
viewer._cesiumWidget._creditContainer.style.display = "none";
```
## 2.禁用双击事件
> Cesium默认双击实体会调用trackedEntity方法（视角切到实体上），我们可以禁用他默认的双击方法。   
> 注：禁用之后也可以利用这个原理自行开发地图中常用的双击地图放大功能。

```javascript
viewer.trackedEntity = undefined;
viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
      Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
);
```
## 3.禁用地球旋转、缩放和倾斜
> 倾斜操作是按住ctrl，鼠标选取一点移动，地球会随着倾斜。其实大部分时候我们不需要这个功能，可以在创建之初禁用该功能，需要的时候再开启。    
> 旋转和缩放同理，需要的时候设为true，不需要的时候设为false。

```javascript
//禁止角度倾斜
viewer.scene.screenSpaceCameraController.enableTilt = false;    

//禁止地球旋转
viewer.scene.screenSpaceCameraController.enableRotate = false;

//禁止地球缩放
viewer.scene.screenSpaceCameraController.enableZoom = false;
```
## 4.显示帧率和刷新率插件
> 利用这个插件我们很容易发现那边代码写的不严谨或者算法出现问题。

```javascript
//显示刷新率和帧率
viewer.scene.debugShowFramesPerSecond = true;
```
## 5.添加zoomControls和compass
> 这里是利用Cesium的一个插件：viewerCesiumNavigationMixin，大家可以去Cesium官网下载该插件，也可以在GitHub上clone该项目。[Cesium 官方GitHub](https://github.com/AnalyticalGraphicsInc)

```javascript
viewer.extend(Cesium.viewerCesiumNavigationMixin, {
	enableZoomControls: true, 
	enableCompass: false
});
```
![viewerCesiumNavigationMixin](https://wangdunwen.github.io/static/images/zoomControl.png)

## 6.控制地球缩放
> 可以利用下面两个方法自行写+/-缩放的插件。

```javascript
// zoomIn,单位（米）
viewer.camera.zoomIn(1000000);

// zoomOut,单位（米）
viewer.camera.zoomOut(1000000);
```
## 7.获取当前镜头高度（视角中心）

有两种方式获取当前镜头高度，其一通过Cesium自带接口获取高度：

```javascript
let cameraPos = viewer.camera.position;
let ellipsoid = viewer.scene.globe.ellipsoid;
let height = ellipsoid.cartesianToCartographic(cameraPos).height;
```
其二通过屏幕坐标中心转笛卡尔坐标获取高度：

```javascript
var canvas = viewer.canvas;
var result = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(canvas.clientHeight / 2, canvas.clientWidth / 2));
let ellipsoid = viewer.scene.globe.ellipsoid;
let height = ellipsoid.cartesianToCartographic(result).height;
```

> 同理，也可以获取当前视角中心的经纬度，height改为longitude和latitude。    
> 注：经纬度获取的是弧度值，所以还需要利用Cesium.Math.toDegrees()将弧度转为经纬度，具体代码大家可以自行尝试。

## 8.地球旋转监听
> 这个监听器非常有用，地球的缩放、旋转等都可以利用该监听器监听。这边结合上面获取视角高度的方法实现了动态获取视角高度。

```javascript
// 开启监听器
let postRender = viewer.scene.postRender.addEventListener(() => {
	// 动态获取高度
	let cameraPos = viewer.camera.position;
	let ellipsoid = viewer.scene.globe.ellipsoid;
	let height = ellipsoid.cartesianToCartographic(cameraPos).height;
});

// 关闭监听器
postRender();
```
------------------------------------------------
持续更新...

-------------------
<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->