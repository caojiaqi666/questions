// Awaited 简单

// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
//在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

// 比如：Promise<ExampleType>，请你返回 ExampleType 类型。

type MyAwaited<T> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never;

type p1 = Promise<string>;
type p2 = Promise<number>;

type res1 = MyAwaited<p1>;
type res2 = MyAwaited<p1>;

// 解题思路
// infer + 递归 + Promise

// 对于普通的类型，例如type X = Promise，用T extends Promise 即可判断出。
// 但是对于嵌套类型，例如type Z = Promise<Promise<string | number>>，需要再判断一下P是否为Promise类型，若是的话，递归判断。

// infer相当于一个占位符
// https://juejin.cn/post/7077467010732392462

// 1.取Promise泛型中的类型

type MyPromise<T> = T extends Promise<infer C> ? C : never;

type PromiseA = Promise<string>;
type ss = MyPromise<PromiseA>;

// 2.获取元组第一项类型，最后一项类型，第一项以外的剩余类型，最后项以外的剩余类型

type values1 = [boolean, string, number];

type values2 = [string, number, undefined];

type MyFirstVal<Trump extends unknown[]> = Trump extends [
  infer A,
  infer B,
  ...infer C
]
  ? A
  : never;

type xx = MyFirstVal<values1>;

type yy = MyFirstVal<values2>;
