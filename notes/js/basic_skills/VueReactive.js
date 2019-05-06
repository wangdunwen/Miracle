/*eslint-disable*/
/**
 * Created by WangDunWen on 2018/4/26.
 * miracle 1.0
 * Vue响应式原理
 * Vue使用Object.defineProperty来实现响应式布局
 */

const Observer = function (data) {

	for (let key in data) {
		defineReactive(data, key);
	}
};

const defineReactive = function (obj, key) {

	const dep = new Dep();
	let val = obj[key];

	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		get: function () {
			console.log("in get");
			dep.depend();
			return val;
		},
		set: function () {
			if (newVal === val) {
				return;
			}

			val = newVal;
			dep.notify();
		}
	});
};

const observe = function (data) {

	return new Observer(data);
};

const Vue = function (options) {

	const self = this;

	if (options && typeof options.data === "function") {
		this._data = options.data.apply(this);
	}

	this.mount = function () {
		new Watcher(self, self.render);
	};

	this.render = function () {
		with(self) {
			_data.text;
		}
	};

	oberve(this._data);
};

const Watcher = function (vm, fn) {

	const self = this;
	this.vm = vm;
	Dep.target = this;

	this.addDep = function (dep) {
		dep.addSub(self);
	};

	this.update = function () {
		console.log("in watcher update");
		fn();
	};

	this.value = fn();
	Dep.target = null;
};

const Dep = function () {

	const self = this;
	this.target = null;
	this.subs = [];

	this.depend = function () {

		if (Dep.target) {
			Dep.target.addDep(self);
		}
	};

	this.addSub = function () {

		self.subs.push(watcher);
	};

	this.notify = function () {

		for (let i = 0; i < self.subs.length; i ++) {
			self.subs[i].update();
		}
	};
};

const vue = new Vue({
	data () {
		return {
			text: "hello, world!"
		}
	}
});

vue.mount();  // in get
vue._data.text = "123";  // in watcher update /n in get