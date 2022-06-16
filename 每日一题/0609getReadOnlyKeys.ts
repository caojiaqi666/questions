interface Animal {
  readonly name: string;
  readonly age: number;
  count: number;
}

// type GetReadonlyKeys<T> = {
//   readonly [C in keyof T]: T[C];
// };

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type GetReadonlyKeys<T> = {
  [P in keyof T]-?: Equals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] }
  > extends true
    ? never
    : P;
}[keyof T];
// type GetReadonlyKeys<T> = {
//     [K in keyof Required<T>]: Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never
//   }[keyof T]

type Read = GetReadonlyKeys<Animal>;

let cat: Read = { name: "111", age: 18 };
