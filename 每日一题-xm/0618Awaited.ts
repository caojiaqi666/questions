// Awaited 简单

// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
//在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

// 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
type MyAwaited<T> = T extends Promise<infer P>
  ? // 判断 Promise 的返回类型是否为一个 Promise
    P extends Promise<any>
    ? // 如果是一个 Promise，则递归调用 MyAwaited（比如 Promise<Promise<string>> ）
      MyAwaited<P>
    : P
  : never;

type p = MyAwaited<Promise<Promise<string>>>;

/* 解题思路 */
// infer + 递归 + Promise

// 对于普通的类型，例如type X = Promise，用T extends Promise 即可判断出。
// 但是对于嵌套类型，例如type Z = Promise<Promise<string | number>>，需要再判断一下P是否为Promise类型，若是的话，递归判断。
