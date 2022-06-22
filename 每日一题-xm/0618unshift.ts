// Unshift

// 实现类型版本的 Array.unshift。

// 入参：原数组 新元素
type MyUnshift<T extends unknown[], U> = [U, ...T];

type Result3 = MyUnshift<[1, 2], 0>; // [0, 1, 2,]

type Result4 = MyUnshift<[1, 2], "999">; // ["999", 1, 2,]
