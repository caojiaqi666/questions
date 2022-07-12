// Absolute 中等 #math #template-literal

// 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。

// 例如

type TestNum = -100;

type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer R}`
  ? `${R}`
  : `${T}`;
type ResultAb = Absolute<TestNum>; // expected to be "100"
