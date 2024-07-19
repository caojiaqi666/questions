// String to Union 中等 #union #string

// 实现一个将接收到的String参数转换为一个字母Union的类型。

// 例如

type Test7 = "abc";

type StringToUnion<T extends string> = T extends `${infer first}${infer rest}`
  ? first | StringToUnion<rest>
  : never;

type Result7 = StringToUnion<Test7>; // expected to be "a" | "b" | "c"
