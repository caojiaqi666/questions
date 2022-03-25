什么是MVVM思想？


MVVM -Model View ViewModel，它包括 DOM Listenters 和 Data bindings，前者实现了页面与数据的绑定，当数据发生变化的时候会自动渲染页面。后者实现了数据与页面的绑定，当页面操作数据的时候 DOM 和 Model 也会发生相应的变化。


MVVM相对于MVC的优势？



MVVM 实现了数据与页面的双向绑定，MVC 只实现了 Model 和 View 的单向绑定。
MVVM 实现了页面业务逻辑和渲染之间的解耦，也实现了数据与视图的解耦，并且可以组件化开发。



VUE是如何体现MVVM思想的？



胡子语法，实现了数据与视图的绑定。
v-on 事件绑定，通过事件操作数据时，v-model 会发生相应的变化。



数据双向绑定：
var foo = {
  name: 'vue',
  version: '2.0'
}

function observe(data) {
    if (!data || typeof data !== 'object') {
        return
    }
    // 使用递归劫持对象属性
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    })
}

function defineReactive(obj, key, value) {
     // 监听子属性 比如这里data对象里的 'name' 或者 'version'
     observe(value)

    Object.defineProperty(obj, key, {
        get: function reactiveGetter() {
            return value
        },
        set: function reactiveSetter(newVal) {
            if (value === newVal) {
                return
            } else {
                value = newVal
                console.log(`监听成功：${value} --> ${newVal}`)
            }
        }
    })
}

observe(foo)
foo.name = 'angular' // “监听成功：vue --> angular”



function observe(obj, callback) {
    obj.keys.forEach(key => callback())
    console.log('obj.keys: ', obj.keys);
  Object.defineProperty(obj, obj, callback);
}

const obj = observe(
  {
    name: '子君',
    sex: '男'
  },
  (key, value) => {
    console.log(`属性[${key}]的值被修改为[${value}]`)
  }
)

// 这段代码执行后，输出 属性[name]的值被修改为[妹纸]
obj.name = '妹纸'

// 这段代码执行后，输出 属性[sex]的值被修改为[女]
obj.sex = '女'




1. ajax和fetch的区别 ：

（1）、ajax是理用XMLHttpRequest对象来请求数据的，而fetch是window的一个方法

（2）、ajax基于原生的XHR开发，XHR本身的架构不清晰，已经有了fetch的替代方案

（3）、fetch比较与ajax有着更好更方便的写法

（4）、当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 ok 属性为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。

（5）、fetch没有办法原生监测请求的进度，而XHR可以

 (6)、fetch 不会发送跨域 cookies




react和vue有什么区别吗？你可以这样说！

引出mvc和mvvm的概念。
讲解react和vue的底层思想。
说出他们的优点和缺点。
实践：你在xx项目中，因为xx问题所以选择xx框架。
最后说出结论。

例如作者自己对这个问题的解答如下：

mvc和mvvm具体是指xxxxxxx，他们的区别是xxxx，各方的优缺点xxxx。
vue的底层是用xxxx实现的，另外碰到数组的话因为有xx缺陷，vue的底层是重写了关于数组的八个函数等等。
react的jsx功能强大，灵活性强，但是代码必须要规范，每个人都有自己的代码风格。
4.因为项目的迭代更新很快，便于多人开发，所以我选择的是xx框架。
其实用任何框架都要根据真实环境下的各种因素结合，并不是哪个框架就是强无敌，拿起来直接黏贴复制一把梭的。
