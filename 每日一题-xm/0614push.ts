// Push 简单

// 在类型系统里实现通用的 Array.push 。

// 举例如下，

type XMPush<T extends unknown[], U> = [...T, U];

type XMResult = XMPush<[1, 2], '3'> // [1, 2, '3']