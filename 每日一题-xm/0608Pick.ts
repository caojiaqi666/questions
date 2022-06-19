// 实现 Pick 简单

// 实现 TS 内置的 Pick<T, K>，但不可以使用它。

// 从类型 T 中选择出属性 K，构造成一个新的类型。

// 例如：

type P = {
  name: string;
  age: number;
  skill: string;
};

// 实现myPick
type MyPick<T, U extends keyof T> = {
  [C in U]: T[C];
}

// 原生ts
type Dufu = MyPick<P, "name" | "age">;

let cjq: Dufu = { name: "xiamao", age: 30 };


