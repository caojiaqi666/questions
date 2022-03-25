1.ajax如何使用

var httpRequest = new XMLHTTPRequest();

httpRequest.open("POST", "Servlet1", true)


httpRequest.send("username=" + name)

2.判断nan

(1).NaN !== NaN
(2).
console.log(Object.is(a, NaN)); // false
(3).不能用isNaN(n),因为一个"a"也会被判断为true
typeof(n) === "number" && isNaN(n)

3.null与undefined

null是一个表示"无"的对象，转为数值时为0；
undefined是一个表示"无"的原始值，转为数值时为NaN。



null表示"没有对象"，即该处不应该有值。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。


Object.getPrototypeOf(Object.prototype)  // null

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。


4.闭包

概念：定义在一个函数内部的函数。其中一个内部函数在包含他们的外部函数之外调用时，就会形成闭包。

特点：
1函数嵌套函数
2函数内部可以引用外部的参数和变量
3参数和变量不会被垃圾回收机制收走

使用场景：
1读取函数内部的变量
2让这些变量的值始终保存在内存中，不会在外层函数调用后被自动清除

优点：
让变量始终储存在内存中
避免全局变量的污染

缺点：内存泄漏  内存泄漏（Memory Leak）是指程序中已动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。


5.js常见内存泄漏


6.事件委托与事件冒泡
只需要将同类元素的事件委托给父级或者更外级的元素，不需要给所有的元素都绑定事件，减少内存占用空间，提升性能。
动态新增的元素无需重新绑定事件


不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。


DOM事件流
事件流描述的是从页面中接收事件的顺序。
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。
包括三个阶段：

事件捕获阶段
处于目标阶段
事件冒泡阶段

我们知道，在dom模型中，html是多层次的，当一个html元素上产生事件时，该事件会在dom树元素节点之间按照特定的顺序去传播。传播路径的每一个节点，都会收到这个事件，这就是dom事件流。当事件发生后，就会从内向外逐级传播，因为事件流本身没有处理事件的能力，所以，处理事件的函数并不会绑定在该事件源上。例如我们点击了一个按钮，产生了一个click事件，click事件就会开始向上传播，一直到到处理这个事件的代码中。

事件捕获：事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，不过必须由开发人员特别指定)。

事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。

事件冒泡：事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发，当一个元素接收到事件的时候会把他接收到的事件传给自己的父级，一直到window 。

addEventListener (type, listener[, useCapture]) 第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段电泳事件处理程序。

阻止对象默认行为
e.preventDefaule();

阻止冒泡（重）
event.stopPropagation(); 


7.cookie、localstorage、sessionStorage区别

存储时间：
cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效

localStorage：除非被手动清除，否则将会永久保存。

sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。

大小
cookie 4kb
localstorage、sessionStorage 5Mb

http
cookie会携带在http头中
localstorage、sessionStorage不参与服务器通信


8.数组方法


isArray

push、pop、shift、unshift、concat、join

indexOf、slice、splice、toString

map、reduce、reduceRight、forEach、every、some、find、findIndex

includes、keys、values、flat、flatMap、reverse、sort、fill

from、at、copyWithin、entries、

9.面向对象

面向对象是一种思想，是基于面向过程而言的。面向对象是将功能通过对象
来实现，将功能封装进对象里，将功能封装进对象之中，让对象去实现具体的
细节。这种思想将数据作为第一位，这是对数据的一种优化，操作起来更加
方便，简化了过程。

js本身是没用class类型的，但是每一个函数都有prototype，他指向原型对象，当函数作为构造函数时，他就起到类似class的作用。

封装、继承和多态


10.构造函数与普通函数区别

1、调用方式不一样
//构造函数也是一个普通函数，创建方式和普通函数一样。

普通函数调用方式：直接调用person();
构造函数调用方式：需要使用new关键字来调用 new person();

2、首字母大小写习惯

一般构造函数的函数名称会用大写
普通函数用小写

3、函数中this的指向不同

普通函数中的this，在严格模式下指向undefined，非严格模式下指向window对象。

4.构造函数调用时会创建一个新对象，就是实例，普通函数不会

5.构造函数默认返回值为创建的实例对象，普通函数由return决定




Person.prototype.constructor === Person

2.1 每个函数function都有一个prototype，即显式原型(属性), 它默认指向一个Object空对象。

//定义构造函数

function Fn() {   
    // 内部语句: this.prototype = {}
}  

console.log(Fn.prototype)  // {}


每个实例对象都有一个__proto__，可称为隐式原型(属性)


var fn = new Fn()  // 内部语句: this.__proto__ = Fn.prototype



定义函数=>内部语句：this.protoType = {}

new 调用=> 内部语句： this.__proto__ = Fn.prototype





apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。


bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

先看箭头函数和普通函数的重要区别：

1、没有自己的this、super、arguments和new.target绑定。

2、不能使用new来调用。 3、没有原型对象。 4、不可以改变this的绑定。 5、形参名称不能重复。



Object.defineProperty()的作用就是用于定义一个对象的属性
let obj = {}
Object.defineProperty(obj, 'name', {
	value: 'Alice'
});
console.log(obj.name)//Alice


默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的

let obj = {};

Object.defineProperty(obj, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
        console.log("触发get");
        return "Tom";
    },
    set: function (value) {
        console.log('value: ', value);

    }
})

bind

Function.prototype.bind = function bind(thisArg) {
    console.log('thisArg: ', thisArg);
     console.log('arguments: ', arguments);
    console.log("this:",this);
    if (typeof this !== 'function') {
        throw new TypeError(this + '不是一个函数')
    }
    var _this = this;
    var args = [].slice.call(arguments, 1);
    console.log('args: ', args);
    var fn = function() {
        var boundArgs = [].slice.call(arguments);
        console.log('boundArgs: ', boundArgs);
        return _this.apply(thisArg, args.concat(boundArgs));
    }
    return fn
}



深浅拷贝

浅拷贝：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

实现深拷贝：

1.JSON.parse(JSON.stringify());


浅拷贝：
function clone(target) {
    let newObj = {};
    for (var key in target) {
        newObj[key] = target[key];
    } 
    return newObj;
}

深拷贝 -- 考虑对象层数  递归调用
function deepClone(target) {
    if (typeof target === 'object') {
        <!-- var newObj = {};
        for(var key in target) {
            newObj[key] = deepClone(target[key])
        }
        return newObj; -->

        let cloneTarget = Array.isArray(target) ? [] : {}

        for (let key in target) {
            cloneTarget[key] = deepClone(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}

循环引用的问题，爆栈


数组去重

1.冒泡
2.思想: 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复元素

filter + indexOf

3.es6 Set()
function s(arr) {
    <!-- return Array.from(new Set(arr)) -->
    return [...new Set(arr)]
}

4.object 键值对

5.reduce

var resources = [
    { name: "张三", age: "18" },
    { name: "张三", age: "19" },
    { name: "张三", age: "20" },
    { name: "李四", age: "19" },
    { name: "王五", age: "20" },
    { name: "赵六", age: "21" }
]
var temp = {};
resources = resources.reduce((prev, curv) => {
    // 如果临时对象中有这个名字，什么都不做
    if (temp[curv.name]) {
    }
    // 如果临时对象没有就把这个名字加进去，同时把当前的这个对象加入到prev中
    else {
        temp[curv.name] = true;
        prev.push(curv);
    }
    return prev
}, []);
console.log("结果", resources);



对网站的文件和资源优化
1.文件合并，减少http请求
2.文件压缩
3.cdn托管资源
4.使用缓存
5.gzip压缩


防抖-只让最后一次生效
function debunde(fun, time) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.apply(this, arguments);
        }, time)
    }
}


节流-一定时间内只生效一次
function throttle(fun, time) {
    let t1 = 0;
    return function() {
        let t2 = new Date();
        if (t2 - t1 > time) {
            fun.apply(this, arguments);
            t1 = t2;
        }
    }
}

实现一个异步求和函数

提供一个异步add方法如下，需要实现一个await sum(...args)函数;
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}


async function sum(...args) {
    if (args.length > 1) {
        const result = await new Promise((resolve) => {
            asyncAdd(args[0], args[1], (err, result) => {
                if (!err) {
                    resolve(result);
                }
            });
        })
        return sum(result, ...args.splice(2));
    }
    return args[0]
}


WeakMap
1.只接受对象作为键名（null除外），不接受其他类型的值作为键名。2.WeakMap的键名所指向的对象，不计入垃圾回收机制。


Proxy

用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

var proxy = new Proxy({}, {
  get: function(target, propKey) {
    return 35;
  }
});

let obj = Object.create(proxy);
obj.time // 35
-   **get(target, propKey, receiver)** ：拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
-   **set(target, propKey, value, receiver)** ：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
-   **has(target, propKey)** ：拦截`propKey in proxy`的操作，返回一个布尔值。
-   **deleteProperty(target, propKey)** ：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
-   **ownKeys(target)** ：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
-   **getOwnPropertyDescriptor(target, propKey)** ：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
-   **defineProperty(target, propKey, propDesc)** ：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
-   **preventExtensions(target)** ：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
-   **getPrototypeOf(target)** ：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
-   **isExtensible(target)** ：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
-   **setPrototypeOf(target, proto)** ：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
-   **apply(target, object, args)** ：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
-   **construct(target, args)** ：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。





new操作符具体干了什么呢?其实很简单，就干了三件事情。  
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
 第一行，我们创建了一个空对象obj
 第二行，我们将这个空对象的__proto__成员指向了Base函数对象prototype成员对象
 第三行，我们将Base函数对象的this指针替换成obj，然后再调用Base函数，于是我们就给obj对象赋值了一个id成员变量，这个成员变量的值是”base”，关于call函数的用法。 
