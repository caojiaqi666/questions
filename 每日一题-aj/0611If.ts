// If 简单

// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。
// C 只能是 true 或者 false， T 和 F 可以是任意类型。

// 举例:

type If<T extends boolean, U, C> = T extends true ? U : C;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'


type MyIf2<T extends boolean, U, K> = T extends true ? U : K

type A2 = MyIf2<true, "a", "b">; // expected to be 'a'
type B2 = MyIf2<false, "a", "b">; // expected to be 'b'