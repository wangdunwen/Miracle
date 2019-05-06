> 之前一直使用Cesium提供的官方插件进行镜头缩放控制，但是该插件居然有几千行代码，这中间包含了很多我用不到的功能。本文介绍如何利用Cesium接口，自定义开发一个简单的镜头缩放的插件。    
>     
> 注：示例代码基于Vue框架

## 1.思路

要想实现镜头缩放控制，首先我们需要能够获取当前的镜头中心的位置，其次需要能够控制镜头根据指定中心位置和高度进行缩放。所幸的是这些Cesium都提供了接口给我们使用，虽然API文档真的很不友好:(

## 2.获取当前的镜头高度

```javascript
// 获取当前镜头位置的笛卡尔坐标
let cameraPos = viewer.camera.position;

// 获取当前坐标系标准
let ellipsoid = viewer.scene.globe.ellipsoid;

// 根据坐标系标准，将笛卡尔坐标转换为地理坐标
let cartographic = ellipsoid.cartesianToCartographic(cameraPos);

// 获取镜头的高度
let height = cartographic.height;
```

## 3.调用API进行镜头控制

```javascript
// 镜头拉近
viewer.camera.zoomIn(height / 3);

// 镜头远离
viewer.camera.zoomOut(height * 1.2);
```

这么几行代码就已经能实现一个简单的镜头缩放控制了，效果如下：    
![cameraControl1](https://wangdunwen.github.io/static/images/cameraControl1.gif)

## 4.优化
> 上面实现了简单的功能，但是无法对镜头移动的时间进行控制，导致画面一抖一抖的，效果不是很好。那么怎么优化呢？    
> 通过查看API文档，我们发现viewer.camera.flyTo这个接口有一个duration属性可以控制镜头移动的时间，通过实践正是我们要的效果。

```javascript
// 根据上面当前镜头的位置，获取该中心位置的经纬度坐标
let centerLon = parseFloat(Cesium.Math.toDegrees(cartographic.longitude).toFixed(8));
let centerLat = parseFloat(Cesium.Math.toDegrees(cartographic.latitude).toFixed(8));

// 镜头拉近
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, height / 1.8),
    duration: 1.0
});

// 镜头拉远
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, height * 1.8),
    duration: 1.0
});
```
![cameraControl2](https://wangdunwen.github.io/static/images/cameraControl2.gif)    
效果好了很多有木有~


------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->