// const data = {
// 	a: 1,
// 	b: 2,
// 	c: {
// 		d: 3,
// 		e: {
// 			f: 4,
// 		},
// 	},
// };

// Object.defineProperty(data, "a", {
// 	enumerable: true, // 是否可以遍历
// 	configurable: true, // 是否可再次修改配置项
// 	get() {
// 		return data.a;
// 	},

// 	set(newVal) {
// 		if (val === newVal) {
// 			return;
// 		}
// 		return newVal;
// 	},
// });

// console.log(data.a);
let number = 18;
let person = {
	name: "码农",
	sex: "男",
};

Object.defineProperty(person, "age", {
	//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
	get() {
		console.log("有人读取age属性了");
		return number;
	},
	//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
	set(value) {
		console.log("有人修改了age属性，且值是", value);
		number = value;
	},
});
console.log(person.age);
