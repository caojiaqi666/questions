class EventEmitter {
	constructor() {
		// 单例模式
		if (!EventEmitter.instance) {
			EventEmitter.instance = this;
			this.handleMap = {};
		}
		// 储存事件及回调
		return EventEmitter.instance;
	}
	// 发布
	publish(eventName, ...args) {
		if (this.handleMap[eventName]) {
			const handlers = [...this.handleMap[eventName]];
			handlers.forEach((callback) => callback(...args));
		}
	}
	// 订阅
	subscribe(eventName, callback) {
		this.handleMap[eventName] = this.handleMap[eventName] || [];
		this.handleMap[eventName].push(callback);
	}
	// 移除订阅
	unsubscribe(eventName, callback) {
		const callbacks = this.handleMap[eventName];
		const index = callbacks.indexOf(callback);
		if (index !== -1) {
			callbacks.splice(index, 1);
		}
	}
}

// 测试
// const eventBus = new EventEmitter();
// eventBus.subscribe("state", (e) => {
// 	console.log("这是订阅的消息", "state", e);
// });
// eventBus.publish("state", "hello world!");

// eventBus.unsubscribe("state", (e) => {
// 	console.log("取消订阅", "state", e);
// });
// eventBus.publish("state", "hello world again!");

// eventBus.publish("state", "hello world again11111!");

class EventEmitter1 {
	constructor() {
		if (!EventEmitter1.instance) {
			EventEmitter1.instance = this;
			this.handleMap = [];
		}
		return EventEmitter1.instance;
	}
	publish(name, ...args) {
		if (this.handleMap[name]) {
			[...this.handleMap[name]].forEach((callback) => callback(...args));
		}
	}
	subscribe(name, callback) {
		this.handleMap[name] = this.handleMap[name] || [];
		this.handleMap[name] = [...this.handleMap[name], callback];
	}
	unsubscribe(eventName, callback) {
		const callbacks = this.handleMap[eventName];
		const index = callbacks.indexOf(callback);
		if (index !== -1) {
			callbacks.splice(index, 1);
		}
	}
	log() {
		console.log("this.handleMap: ", this.handleMap);
	}
}

// 测试
const eventBus = new EventEmitter1();
eventBus.subscribe("state", (e) => {
	console.log("这是订阅的消息", "state", e);
});
eventBus.log();
eventBus.publish("state", "hello world!");

eventBus.publish("state", "hello world again!");

eventBus.unsubscribe("state", (e) => {
	console.log("取消订阅", "state", e);
});
eventBus.publish("state", "hello world again11111!");
