// Diff 中等 #object

// 获取两个接口类型中的差值属性。

type Foo = {
  a: string;
  b: number;
};
type Bar = {
  a: string;
  c: boolean;
};

type Result1 = Diff<Foo, Bar>; // { b: number, c: boolean }
type Result2 = Diff<Bar, Foo>; // { b: number, c: boolean }

// type Diff<T, U> = Omit<T & U, keyof T & keyof U>;

type Diff<T, U> = {
  [key in Exclude<keyof (T & U), keyof (T | U)>]: (T & U)[key];
};
