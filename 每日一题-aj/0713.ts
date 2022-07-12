// Diff 中等 #object
// by ZYSzys @ZYSzys

// 接受挑战    English

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

// your answers
type Diff<O, O1> = {
  [key in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[key];
};
