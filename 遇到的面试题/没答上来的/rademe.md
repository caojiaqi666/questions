1.事件循环 同步与异步任务
2.undefined与null
3.不用redux实现全局状态管理
4.怎样解决工作中遇到的问题 技术/沟通方面
5.vue.nextTick()微任务
6.主动推进解决的问题
7.实现 number原型上的方法
8.new()做了什么


1.proxy
2.class super 
function 构造函数 怎么加静态属性
3.ts类型
4.类式组件中用hooks，介绍一下hooks
5.vite优点
6.ts指定导出文件


1.diff算法
2.算法题   [4,5,1,2,3] => [1,2,3,4,5] 移动几项
3.mvc与mvvm


1.merge与rabase区别
2.实现一个框架
3.react与vue组件传值区别
4.vite原理



1.实现flat
2.事件循环题
3.设置跨域 强跨域？简单请求、复杂请求？
4.输入url到页面渲染
5.强缓存 head中字段


1.项目
2.http状态码
3.浏览器缓存
4.手写深拷贝
5.算法常见思想
6.常见布局
7.flex属性
8事件循环 及题目

 async function async1(){
 	console.log('async1 start') 
 	await async2() 
 	console.log('async1 end') 
 }
 async function async2(){
 	console.log('async2')  
 }
 console.log('script start') 
 setTimeout(function() {
 	console.log('setTimeout') 
 },0)
 async1()
 new Promise(function(resolve) {
 	console.log('promise1')  
 	resolve()
 }).then(function(){
 	console.log('promise2') 
 })
 console.log('script end')  



字节
1.代码题事件循环

async function async1() {​
console.log('async1 start');​
await async2();​
console.log('async1 end');​
}​
async function async2() {​
console.log('async2 start');​
return new Promise((resolve, reject) => {​
resolve();​
console.log('async2 promise');​
})​
}​
console.log('script start');​
setTimeout(function() {​
console.log('setTimeout');​
}, 0); ​
async1();​
new Promise(function(resolve) {​
console.log('promise1');​
resolve();​
}).then(function() {​
console.log('promise2');​
}).then(function() {​
console.log('promise3');​
});​
console.log('script end');​​​


2.this指向问题

var length = 10; 
function fn() { 
return this.length+1; 
} 
var obj = { 
length: 5, 
test1: function() { 
return fn(); 
} 
}; 
obj.test2=fn; 
//下面代码输出是什么 
console.log(obj.test1()) 
console.log(fn()===obj.test2())


3.算法题

假设有n个人，标号为1-n。 从第一个人开始计数，到第k个人则出列，随后从第k+1个人重新计数，到第k再出列。 直至剩下最后一个人。问最后剩下的人的编号

4.不同域名登录态问题

5.跨域

后端设置响应头

允许跨端口操作cookie，应该怎么配置

6.移动端屏幕适配怎么做

postcss
百分比
rem
rem是相对于html的font-size，屏幕大小不一样是怎么适配的

7.左右两侧宽度固定，中间宽度自适应

float布局 dom顺序？

8.webpack做过哪些优化

9.你了解哪些请求方式  put和post有什么区别


slice和splice

