// Includes 简单

// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，
// 返回的类型要么是 true 要么是 false。

// 举例来说，

type Includes<T extends readonly unknown[], U extends any> = U extends T[number]
  ? true
  : false;

type isPillarMen1 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type isPillarMen2 = Includes<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Santana"
>; // expected to be `true`

// 看了别人的解析，发现他们写的好复杂，还有递归调用的，includes方法也没有判断是不是二维数组的逻辑啊，不太理解。

type MyIncludes2<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? true
    : MyIncludes2<R, U>
  : false;

type MyIncludes3<T extends unknown[], U> = U extends T[number] ? true : false;

type isPillarMen3 = MyIncludes2<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Santana"
>; // expected to be `true`
