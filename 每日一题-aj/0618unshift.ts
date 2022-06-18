// Unshift

// 实现类型版本的 Array.unshift。

// 举例，

type Unshift<T extends unknown[], U> = [U, ...T];

type Result3 = Unshift<[1, 2], 0>; // [0, 1, 2,]

type Result4 = Unshift<[1, 2], "999">; // ["999", 1, 2,]
