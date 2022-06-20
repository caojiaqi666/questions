// Exclude 简单

// 实现内置的Exclude <T, U>类型，但不能直接使用它本身。

// 从联合类型T中排除U的类型成员，来构造一个新的类型。

type StrNumTypes = number | string;

/** T extends U ? never : T 判断T是否包含U，如果包含的话就置空，否则就返回。 */
type XMExclude<X, M> = X extends M ? never : X;

type XMExcludeNum = XMExclude<StrNumTypes, number>;

// 补充 Extract
// Extract 的功能，与 Exclude 相反，它是 提取 T 中可以赋值给 U 的类型。
type XMExtract<X,M> = X extends M ? X : never;