// AnyOf 中等 #array

// 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，
// 则返回 true，否则返回 false。如果数组为空，返回 false。

// 例如：


// type AnyOf<T extends readonly unknown[]> = T extends [infer A, ...infer B]
//   ? A extends falsey
//     ? AnyOf<B>
//     : true
//   : false;

type falsey = "" | [] | {} | null | undefined | 0 | false;

type include<T, U> = T extends U ? T : never;

type AnyOf<T extends readonly unknown[]> = T extends [infer A, ...infer B]
  ? include<falsey, A> extends never
    ? true
    : AnyOf<B>
  : false;

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
