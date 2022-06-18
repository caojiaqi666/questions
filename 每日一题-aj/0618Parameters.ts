// Parameters 简单 #infer #tuple #built-in

// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。

// 这个方法接受一个函数，返回函数入参里的变量类型

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer C
) => any
  ? C
  : never;

// 原生
type aa = Parameters<(data1: string, data2: number, data3: boolean) => {}>;

type bb = MyParameters<(data1: string, data2: number, data3: boolean) => {}>;
