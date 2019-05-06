## 快速开始

### 1.创建放置地图的容器
```html
<div id='map'></div>

```
设置样式，使之全屏显示

```html
#map {
  position: absolute;
  width: 100%;
  height: 100%;
}
```
### 2.创建全局的Cesium视图对象

```javascript
window.viewer = new Cesium.Viewer('map', {
      animation: false,
      baseLayerPicker: false,
      geocoder: false,
      scene3DOnly: false,
      sceneModePicker: false,
      selectionIndicator: false,
      infoBox: false,
      homeButton: false,
      timeline: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
          url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
      })
});
```
注：上面基于ArcGIS全球影像地图创建了一个三维地球。其中各种参数均设为false，只保留了一个干净的地球。如果想了解各个参数，请参照[Cesium API文档](https://cesiumjs.org/refdoc/)。
### 3.根据经纬高设置当前视角
Cesium默认的视角高度大概就是15000000米。
```javascript
viewer.camera.setView({
     destination: Cesium.Cartesian3.fromDegrees(112, 30, 15000000)
});
```
### 4.创建一个简单的点实体
```javascript
let point = viewer.entites.add({
	name: 'point',
	position: Cesium.Cartesian3.fromDegress(112, 30),
	point: {
		color: Cesium.Color.RED,
		pixelSize: 10,
		outlineColor: Cesium.BLACK,
		outlineWidth: 3
	}
});
```
* * * * * * * * * * * *
以上是Cesium一个简单的入门，通过上面代码可以创建一个三维虚拟地球，设置视角高度，创建简单的实体。具体Cesium如何下载配置，请前往[Cesium官网](https://cesiumjs.org)下载最新稳定版。


-------------------
<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->