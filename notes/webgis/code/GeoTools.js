/**
 * Created by wangdunwen on 2018/5/21.
 * Latest edited by wangdunwen on 2019/05/06.
 * GIS开发常用方法收纳
 */

/**
 * 判断点是否在多边形内
 * x，y待判断点的坐标
 * polySides多边形边数
 */
let pointInPolygon = function (x, y, poly) {
  let polySides = poly.length;
  let i, j = polySides - 1;
  let oddNodes = false;

  for (i = 0; i < polySides; i++) {
    if ((poly[i].latitude < y && poly[j].latitude >= y
        || poly[j].latitude < y && poly[i].latitude >= y)
        && (poly[i].longitude <= x || poly[j].longitude <= x)) {
      oddNodes ^= (poly[i].longitude + (y - poly[i].latitude) /
          (poly[j].latitude - poly[i].latitude) * (poly[j].longitude - poly[i].longitude) < x);
    }
    j = i;
  }
  return oddNodes;
}
