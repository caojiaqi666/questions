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
