// Merge 中等 #object

// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

// 例如

type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

type help<F, S> = Omit<F, keyof S> & S

type Merge<T, U> = {
    [C in keyof help<T, U>]: help<T, U>[C]
}

type Result8 = Merge<foo,coo>;` vvbhnb` // expected to be {name: string, age: number, sex: string}

// your answers

// type MergeSimply<F, S> = Omit<F, keyof S> & S;
// type Merge<F, S> = {
//   [k in keyof MergeSimply<F, S>]: MergeSimply<F, S>[k];
// };
