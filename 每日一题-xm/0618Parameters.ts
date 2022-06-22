// Parameters 简单 #infer #tuple #built-in

// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。

// 这个方法接受一个函数，返回函数入参里的变量类型
/* TODO：为什么 C 是一个元组，且是 [name: string, age: number] 这种形式 */
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer C
) => any
  ? C
  : never;

// 原生
type p1 = Parameters<(data1: string, data2: number, data3: boolean) => {}>;

type p2 = MyParameters<(name: string, age: number, isFemale: boolean) => {}>;
