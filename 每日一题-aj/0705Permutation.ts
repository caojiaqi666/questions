// Permutation 中等 #union

// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

type Permutation<T, U = T> = [U] extends [never]
  ? []
  : U extends T
  ? [U, ...Permutation<Exclude<T, U>>]
  : [];

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// type Permutation<T, U = T> =[U] extends [never] ? [] : U extends T ? [U, ...Permutation<Exclude<T, U>>] : []
