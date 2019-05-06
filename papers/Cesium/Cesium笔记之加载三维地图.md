> Cesium提供了展示三维地形数据的接口，同时也提供了丰富的接口调用。但是由于API文档过于碎片，经过蛮长时间的研究学习，也算是掌握了如何利用Cesium在三维地形上进行标绘。    
>     
> 注：示例代码基于Vue框架。

## 1.加载三维地形地图
#### 网上可以下载多种高程数据，如果找不到也可以点击这个链接下载免费的数据[gscloud.cn](http://www.gscloud.cn/)。
#### 下载好数据之后，调用接口加载地形数据。
```javascript
// 创建地形图层对象
let terrainProvider = new Cesium.CesiumTerrainProvider({
    url: "static/map/terrain",
    requestVertexNormals: true,
    style:'default'
})

// 等待地形数据添加完之后，将地形显示在地球上
terrainProvider._readyPromise.then(() => {
    viewer.terrainProvider = terrainProvider;
});
```
## 2.开启地形的深度测试
#### 设置该属性为真之后，标绘将会位于地形的顶部；如果设为false（默认值），那么标绘将位于平面上。开启该属性有可能在切换图层时会引发标绘消失的bug（忽略）。
```javascript
viewer.scene.globe.depthTestAgainstTerrain = true;
```
## 3.在地形上标绘点、图片、文本
```javascript
let canvas = viewer.scene.canvas;

// 创建handler监听器
let onMapClickListener = new Cesium.ScreenSpaceEventHandler(canvas);

onMapClickListener.setInputAction((event) => {

    // 获取屏幕位置对应的实体信息
    let windowPosition = event.position;
    
    // 注：通过viewer.scene.pick()只能获取平面上的点，通过getPickRay我们可以获取地形上的任意一点位置。
    var ray = viewer.camera.getPickRay(windowPosition);
    var cartesian = viewer.scene.globe.pick(ray, viewer.scene);

    // 如果笛卡尔点未定义，那么返回
    if (!cartesian) {
        return;
    } else {
    
        // 如果坐标定义，则绘制点
        let point = viewer.entities.add({
            name: "point",
            position: cartesian,
            point: {
                color: Cesium.Color.RED,
                pixelSize: 10,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 3,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                // 图片、文本等都类似，只需要设置heightReference如下就行
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
            }
        });
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```
## 4.在地形上标绘线
#### 在地形上直接标线会导致线穿透地形。解决办法：将两个点均匀分割若干点，通过Cesium提供的接口获取每个人对应的海拔高度；再将这些点连成线，那么即可实现在地形上标线的效果。
```javascript
// 提供一个将绘制线的点数组转为能够在高程上显示的点数组
transferPoints (positions) {   // positions = [lon1, lat1, lon2, lat2, ...]
    return new Promise((resolve, reject) => {
        let blh_array = [];
        let result = [];
        for(let i=0; i<positions.length - 2; i+=2) {
            let lon1 = positions[i];
            let lat1 = positions[i+1];
            let lon2 = positions[i+2];
            let lat2 = positions[i+3];
            blh_array = [];

            // 将两个点分为1000等分点
            for(let j=0; j<1000; j++) {
                let lon = Cesium.Math.toRadians(Cesium.Math.lerp(lon1, lon2, j / (1000 -1)));
                let lat = Cesium.Math.toRadians(Cesium.Math.lerp(lat1, lat2, j / (1000 -1)));
                let cartographic = new Cesium.Cartographic(lon, lat);
                blh_array.push(cartographic);
            }

            // 调用Cesium提供的方法获取每个点的高度
            Cesium.when(Cesium.sampleTerrain(viewer.terrainProvider, 11, blh_array)).then((samples) => {
                var offset = 5.0;

                for(var k = 0; k<samples.length; ++k) {
                    samples[k].height += offset;
                }

                result = result.concat(samples);

                if(i === (positions.length - 4)) {
                    resolve(result);
                }
            });
        }
    }); 
}

// 调用方法，在高程上绘制线
transferPoints(positions).then((points) => {
    line = viewer.entities.add({
        name: 'polyline',
        polyline: {
            positions: Cesium.Ellipsoid.WGS84.cartographicArrayToCartesianArray(points),
            // 线在视野范围时能看到时的material
            material: new Cesium.PolylineOutlineMaterialProperty({
                color: Cesium.Color.RED,
                outlineWidth: 2,
                outlineColor: Cesium.Color.BLACK
            }),
            width: 5.0,
            // 线在视野范围看不到时的material
            depthFailMaterial: new Cesium.PolylineOutlineMaterialProperty({
                color: Cesium.Color.RED,
                outlineWidth: 2,
                outlineColor: Cesium.Color.BLACK
            })
        }
    });
});
```
## 5.在地形上标绘面
#### 在地形上标绘面没有什么特别的，只要前提满足depthTestAgainstTerrain为真即可。
## 6.总结
#### 目前掌握的Cesium地形标绘技术大致如此。当然还会继续研究，如果有什么新的成果也会同步更新本文。


------------------------------------------------

<!--more-->

created by @SpiderWang
转载请注明作者及链接


<!--more-->

