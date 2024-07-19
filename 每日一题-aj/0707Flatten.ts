// Flatten 中等 #array

// 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

// 例如:

type Flatten<T extends any[]> = T extends [infer first, ...infer rest]
  ? first extends any[]
    ? Flatten<[...first, ...rest]>
    : [first, ...Flatten<rest>]
  : [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

