我们先来看看HTTP。HTTP（Hypertext Transfer Protocol）超文本传输协议，是一种用于分布式、协作式和超媒体信息系统的应用层协议，可以说 HTTP 是当代互联网通信的基础。

但是，HTTP 有着一个致命的缺陷，那就是内容是明文传输的，没有经过任何加密，而这些明文数据会经过WiFi、路由器、运营商、机房等多个物理设备节点，如果在这中间任意一个节点被监听，传输的内容就会完全暴露，，这一攻击手法叫做MITM（Man In The Middle）中间人攻击。


为了解决HTTP明文传输数据可能导致的安全问题，1994年网景公司提出了HTTPS（HyperText Transfer Protocol Secure）超文本传输安全协议，数据通信仍然是HTTP，但利用SSL/TLS加密数据包。


HTTPS实现原理 

  前面说到，HTTPS其实就是将HTTP的数据包再通过SSL/TLS加密后传输，那么SSL/TLS又是什么呢？

SSL（Secure Sockets Layer）安全套接层和TLS（Transport Layer Security）传输层安全协议其实是一套东西。
网景公司在1994年提出HTTPS协议时，使用的是SSL进行加密。后来IETF（Internet Engineering Task Force）互联网工程任务组将SSL进一步标准化，于1999年公布第一版TLS协议文件TLS 1.0。目前最新版的TLS协议是TLS 1.3，于2018年公布。

与export命令的区别：其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。

js实现原生ajax


function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", reqListener);

oReq.open("GET", "http://localhost:8080")

oReq.send()


vue-router原理

class VueRouter {
  construcor (option) {}
  init(app) {}
}

VueRouter.install = (Vue) => {}

export default VueRouter;


install方法

let _Vue

VueRouter.install = () => {
  _Vue = Vue;
  
}