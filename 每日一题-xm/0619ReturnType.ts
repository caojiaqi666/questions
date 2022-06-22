// 获取函数返回类型ReturnType 中等

// 不使用原生 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。

// 例如：

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

const getSum = (n1: number, n2: number): number => {
  return n1 + n2;
};

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer C
  ? C
  : never;

// typeof 可以获取函数的返回值的类型
type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"
type b = MyReturnType<typeof getSum>;

// 原生
type c = ReturnType<typeof fn>;
type d = ReturnType<never>;
