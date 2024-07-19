function myInstanceof(left, right) {
  if (!(left && ['object', 'function'].includes(typeof left))) {
    return false;
  }
	let leftProto = left.__proto__;
	while (true) {
		if (left?.__proto__ === null) {
			return false;
		}
		if (left.prototype === right.prototype) {
			return true;
		}
		leftProto = leftProto?.__proto__;
	}
}

Object.prototype.myInstanceof = myInstanceof;

console.log("myInstanceof(Object, Object): ", myInstanceof(Object, Object));

function Dog() {}

function Cat() {}
Cat.prototype = new Dog(); //继承

var hellokitty = new Cat(); //通过cat来实例一个
// console.log(hellokitty.constructor); //Dog

console.log(myInstanceof(hellokitty, Cat)); //true
console.log(myInstanceof(hellokitty, Dog)); //true
