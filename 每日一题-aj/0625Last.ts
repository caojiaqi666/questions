// 最后一个元素 中等 #array

// 在此挑战中建议使用TypeScript 4.0

// 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。

// 例如

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends unknown[]> = T extends [infer A, ...infer B]
  ? B["length"] extends 0
    ? A
    : Last<B>
  : never;

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
type tail3 = Last<[]>; // expected to be never
