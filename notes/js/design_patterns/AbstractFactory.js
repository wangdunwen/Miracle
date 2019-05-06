/**
 * Created by wangdunwen on 2018/4/25.
 * Latest edited by wangdunwen on 2019/05/06.
 * 抽象工厂模式 (Abstract Factory)
 * 设计模式(Design Patterns)
 *
 * intros: 
 * 通过对类的工厂抽象使其业务用于产品类的创建，而不负责创建某一类产品的实例。
 */

/*
* 抽象工厂方法
*/
let VehicleFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    let F = function () {};

    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();

    // 将子类constructor指向子类
    subType.constructor = subType;

    // 子类原型继承父类
    subType.prototype = new F();
  } else {

    // 不存在该抽象类则抛出错误
    throw new Error('未创建该抽象类！');
  }
};

/*
* 小汽车抽象类
*/
VehicleFactory.Car = function () {
  this.type = 'car';
};
VehicleFactory.Car.prototype = {
  getPrice : function () {
    return new Error('该抽象方法不能调用！');
  },
  getSpeed : function () {
    return new Error('该抽象方法不能调用！');
  }
};

/*
* 公交车抽象类
*/
VehicleFactory.Bus = function () {
  this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
  getPrice : function () {
    return new Error('该抽象方法不能调用！');
  },
  getSpeed : function () {
    return new Error('该抽象方法不能调用！');
  }
};

/*
* 货车抽象类
*/
VehicleFactory.Truck = function () {
  this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
  getPrice : function () {
    return new Error('该抽象方法不能调用！');
  },
  getSpeed : function () {
    return new Error('该抽象方法不能调用！');
  }
};

/*
* 通过抽象工厂，我们能知道每个子类到底是哪一种类别，然后他们也具备了该类所必备的属性和方法。
*/

// 宝马汽车子类
let BMW = function (price, speed) {
  this.price = price;
  this.speed = speed;
};

//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'car');

BMW.prototype.getPrice = function () {
  return this.price;
};

BMW.prototype.getSpeed = function () {
  return this.speed;
};

// ********************* test *****************
let bmw = new BMW (1000000, 200);

console.log(bmw.getPrice());    // 1000000
console.log(bmw.getSpeed());    // 200
