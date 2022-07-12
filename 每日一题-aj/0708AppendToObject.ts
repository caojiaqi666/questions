// Append to object 中等 #object-keys

// 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

// 例如:

type TestObj = { id: "1" };

type AppendToObject<T, U extends string, K> = {
  [C in keyof T | U]: C extends keyof T ? T[C] : K;
};

type ResultObj = AppendToObject<TestObj, "value", 4>; // expected to be { id: '1', value: 4 }
