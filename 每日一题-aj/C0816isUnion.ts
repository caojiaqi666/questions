// 实现一个 type IsUnion，它接受一个输入类型T并返回是否T解析为联合类型。

// 例如：

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

type IsUnion<T, U = T> = T extends U
  ? ([U] extends [T] ? true : false) extends true
    ? false
    : true
  : false;
