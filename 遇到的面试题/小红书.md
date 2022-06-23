一.
console.log(1);
let b = new Promise((resolve, reject) =>{
  console.log(2);
}).then((x) => {
  console.log(3);
})
setTimeout(() => {
  console.log(4)
}, 100);
let c = async() => {
  setTimeout(() => {
    new Promise((resolve, reject) => {
      console.log(6);
    })
  }, 0);
  let x =  await new Promise((resolve, reject) =>{
    console.log(5);
    resolve(7)
  })
  console.log(x); 
  console.log(8);
}

console.log(9);
c()
console.log(10)

二.
http1.1和http1.2

三.
react hooks和class的区别

四.
防抖和节流

五.
写一个防抖函数

六.
斐波那契数列
feb(n)

七.
二叉树

八.
http与https
证书

九.
flex   nth-child 与 nth-type 的区别

十.
事件机制   阻止冒泡

十一.
缓存 localStorage做过那些事
cookie

十二.
react合成事件机制

十三.
webpack做过哪些优化

十四.
loader和plugin有什么区别

十五.
px rem em vw区别

十六.
处理登录态问题