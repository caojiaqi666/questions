// 实现 Pick 简单

// 实现 TS 内置的 Pick<T, K>，但不可以使用它。

// 从类型 T 中选择出属性 K，构造成一个新的类型。

// 例如：

type Person = {
  name: string;
  age: number;
  skill: string;
};

// 原生ts
type Feiwu = Pick<Person, "name" | "age">;

let xiamao: Feiwu = { name: "xiamao", age: 30 };

// 实现myPick
type myPick<T, U extends keyof T> = {
  [C in U]: T[C];
};

type Cat = Pick<Person, "name" | "age">;

let suannai: Cat = { name: "suannai", age: 1 };
