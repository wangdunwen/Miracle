> 最近发现Cesium加载瓦片地图数据清晰度很差，特别是地图上的文字加载十分模糊，有的人说是Cesium引擎导致模糊，也有说是浏览器的原因导致模糊。在研究了很久之后，也找到了一些方法能够改善一下地图的清晰度。

## 1.改善实体的文字和图片清晰度

```javascript
viewer.scene.fxaa = false;
```
fxaa确实能够改善文本和图片的清晰度，API文档上fxaa属性的介绍：When true, enables Fast Approximate Anti-aliasing even when order independent translucency is unsupported.即开启fxaa能够启用图片抗锯齿的功能，但是不知道为啥会导致图片模糊，关掉之后会清晰很多。    

还有种说法，直接用canvas绘制图片或者文本图形比直接调用Cesium接口绘制要清晰蛮多。经过测试，确实清晰很多。

## 2.降低性能提供图片质量
```javascript
viewer.scene.globe.maximumScreenSpaceError = 4/3;
```
属性maximumScreenSpaceError: Higher values will provide better performance but lower visual qualit.数值越高，性能越好，但视觉质量越差。默认值为2。针对不同的地图数据源，该值在0.66~1.33之间地图清晰度最高。

## 3.改变地图灰度系数
```javascript
let layer0 = viewer.scene.imageryLayers.get(0);
layer0.gamma = 0.66;
```
gamma表示地图的灰度系数，默认值为1。部分地图源在Cesium上表现的过暗或者过亮，改变gamma能够将地图的亮度调至适中也能提高清晰度。

## 4.调整瓦片数据的结构
```javascript
// 获取当前的图层
let layer = viewer.scene.imageryLayers.get(0);

// 改变当前地图的组织结构
layer.minificationFilter=Cesium.TextyreMinificationFiler.NEAREST;
layer.magnificationFilter=Cesium.TextureMagnificationFilter.NEAREST
```
minificationFilter、magnificationFilter表示缩小和放大瓦片数据的过滤方式。默认值为LINEAR线性结构，大部分地图调整为最近方式过滤能够有效提升地图清晰度。        

影像地图before:
![sat_before](https://wangdunwen.github.io/static/images/sat_before.png)    
影像地图after:
![sat_after](https://wangdunwen.github.io/static/images/sat_after.png)    

电子地图before:
![dig_before](https://wangdunwen.github.io/static/images/dig_before.png)    
电子地图after:
![dig_after](https://wangdunwen.github.io/static/images/dig_after.png)  

## 5.总结
以上是几种提升地图清晰度的方法，具体使用可以结合几种方法多尝试几次。

------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->