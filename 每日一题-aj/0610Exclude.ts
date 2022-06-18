// Exclude 简单

// 实现内置的Exclude <T, U>类型，但不能直接使用它本身。

// 从联合类型T中排除U的类型成员，来构造一个新的类型。

type StrNum = number | string;

type MyExclude<T, U> = T extends U ? never : T;

type excludeNum = MyExclude<StrNum, number>;


// 补充 Extract

// Extract 的功能，与 Exclude 相反，它是 提取 T 中可以赋值给 U 的类型。

type MyExtract<T, U> = T extends U ? T : never