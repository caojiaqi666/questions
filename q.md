1.定位属性
relative 相对定位 相对于自身定位 不脱离文档流
absolute 绝对定位 相对于父级定位 脱离文档流
fixed 固定定位 相对于浏览器窗口定位 脱离文档流
static 默认值 
inherit 继承
sticky 粘性 top left 滚动

2.垂直水平居中

(1).绝对定位 + 负margin
.father {
  width: 200px;
  height: 200px;
  position: relative;
}
.son {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
(2).绝对定位 + transform
.father {
  width: 200px;
  height: 200px;
  position: relative;
}
.son {
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
(3).绝对定位 + margin 
.father {
  width: 200px;
  height: 200px;
  position: relative;
}
.son {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
(4).flex布局
.father {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
(5).grid布局
.father {
  width: 200px;
  height: 200px;
  display: grid;
}
.son {
  width: 100px;
  height: 100px;
  margin: auto;
}
(6).父元素text-align: center;子元素display: inline-block;


3.box-sizing: border-box;
content-box 标准盒模型 width包括padding和border
宽度 = width + padding + border + margin
border-box 怪异盒模型 width不包括padding和border
宽度 = width + margin

4.垂直居中
(1).line-height
(2).子元素设为行内块,vertical-align: middle;
(3).display: table; 
.son {
  display: table-cell;
  vertical-align: middle;
}

5.12px的字
-webkit-text-adjust: none;

6.行内元素/块级元素有哪些？
行内: span a br em img input select sub textarea
块级: div h1 h6 hr p ul li from menu table

7.怎么实现标签的禁用
添加disabled 属性

8.px,em,rem区别
px, 绝对长度单位,像素px是相对于显示器屏幕分辨率来说的；
em 相对长度，相对于当前元素的字体尺寸
  当使用em单位时，像素值将是em值乘以使用em单位的元素的字体大小。 例如，如果一个 div 有 18px 字体大小，10em 将等同于 180px，即 10 × 18 = 180。
rem 相对于html根元素的font-size

1em=1rem=16px

9.Doctype 作用
声明文档类型