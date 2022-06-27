// 出堆 中等 #array

// 在此挑战中建议使用TypeScript 4.0

// 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。

// 例如

type arr5 = ["a", "b", "c", "d"];
type arr6 = [3, 2, 1];

type Pop<T extends unknown[]> = T extends [...infer A, infer B] ? A : never;
type Shift<T extends unknown[]> = T extends [infer A, ...infer B] ? B : never;
type Push<T extends unknown[], U> = [...T, U];
type Unshift<T extends unknown[], U> = [U, ...T];

type re1 = Pop<arr5>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr6>; // expected to be [3, 2]
type re3 = Pop<[]>; // expected to be [3, 2]
// 额外：同样，实现Shift，Push和Unshift
